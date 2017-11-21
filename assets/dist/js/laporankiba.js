var src = {
    kepunitsatuankerja: ko.observable(""),
    statusalldata: ko.observable(""),
    tahunawal: ko.observable(""),
    tahunakhir: ko.observable(""),
    semester: ko.observable(""),
    statusnavigas: ko.observable(""),
    dataPencarian: ko.observableArray([])
}

var kiba = {
    valuetawal: ko.observable(""),
}


var loader = {
    image: ko.observable(true)
}

var klik = {}


var aset = {}

// UNTUK RESET ALL PANEL KIB
klik.resetpanelselectkib = function(){
    $("#pencarian-laporan").hide();
    $("#viewpdf-laporan").hide();
}

klik.selectaset = function(a){
    var val = a;
    if(val=="tanah"){
        klik.resetpanelselectkib();
        $("#notifikasi-laporan").hide();
        $("#tanah-laporan").show();
        aset.tanahPrepareAll();
    }else if(val=="jalan"){
        klik.resetpanelselectkib();
        $("#notifikasi-laporan").hide();
    }else if(val=="jembatan"){
        klik.resetpanelselectkib();
        $("#notifikasi-laporan").hide();
    }else{

    }
}

// UNTUK RESET ALL PANEL PENCARIAN ASET
klik.resetpanelselectaset = function(){
    $("#tanah-laporan").hide();
    // $("#jalan-laporan").hide();
    // $("#jembatan-laporan").hide();
}




function selectKodeLokasi(){
    $('#kodelokasi').on('change', function (e) {
        // console.log(e.currentTarget.value)
        var a = e.currentTarget.value;
        $.ajax({
            dataType: 'json',
            type:'post',
            url: './controller/laporan/src/select_find_satuankerja.php',
            data:{val:a}
        }).done(function(data){
            console.log(data)
            $("#lokasi-preview").show();
            $("#previewidlokasi").text(data.KodeLokasi);
            $("#previewunitlokasi").text(data.Unit);
            $("#previewsublokasi").text(data.SubUnit);
            $("#previewkepunit").text(data.NamaKu);
            $("#previewkepbid").text(data.NamaKB);
        })
        
        // $("#previewidlokasi").text(a)
    });
}

function selectTahunAll(){
    var valtahun = $("#tahunawal").val();
    if(valtahun == ""){
        $("#semesterfilter").hide();
        $("#tahunakhirfilter").hide();
    }else if(valtahun == "all"){
        $("#semesterfilter").hide();
        $("#tahunakhirfilter").show();
    }else{
        $("#semesterfilter").show();
        $("#tahunakhirfilter").show();
        setTimeout(function(){
            randerdatelast();
        })
    }
}

function randerdatelast(){
    // var tahunawal = parseFloat(kiba.valuetawal());
    // var tahunawal = 2014;
    $("#tahunakhir").empty();
    var z = new Date();
    for(i=parseInt(kiba.valuetawal()); i <= z.getFullYear(); i++){
        $("#tahunakhir").append('<option>'+i+'</option>');
    }
    // hilangkan datapertama
    $("#tahunakhir").find("option")[0].remove()
}

src.resetAllLaporan = function(){
    src.resetFormSearch();
    $("#tanah-laporan").hide();
    $("#viewpdf-laporan").hide();
    $("#pencarian-laporan").hide();
    $("#notifikasi-laporan").show();
}

src.resetFormSearch = function(){
    $('#tanggalsurveikib').datepicker('setDate', null);
    $('#kepunitsatkerja').val("");

    $("#sumberdana").empty("");
    src.sumberdana();

    $("#kodelokasi").empty("");
    src.selectKodeLokasi();

    $("#lokasi-preview").hide("");
    $("#tahunawal").val("")
    $("#tahunakhir").val("")
    $("#semester").val("")

    $("#alldata").prop('checked',true).change();
    
}

src.tanggalKIB = function(){
	$('#tanggalsurveikib').datepicker({
        language: "id",
        format: "dd MM yyyy",
        todayBtn: "linked",
        toggleActive: true
    });
}

src.selectKodeLokasi = function(){
    $('#kodelokasi').select2({
        placeholder: 'Pilih Data Lokasi...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/laporan/src/select_kodelokasi.php',
            dataType: 'json',
            delay: 250,
            processResults: function (data) {
                return {
                    results: data
                };
                
            },
            cache: false
        }
    });
}

src.kepemilikan = function(){
    $('#kepemilikan').select2({
        placeholder: 'Pilih Data Kepemilikan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/laporan/src/select_kepemilikan.php',
            dataType: 'json',
            delay: 250,
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });
}

src.sumberdana = function(){
    $('#sumberdana').select2({
        placeholder: 'Pilih Data Sumber Dana...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/laporan/src/select_sumberdana.php',
            dataType: 'json',
            delay: 250,
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });
}

src.prepare = function(){
    src.tanggalKIB();
    src.selectKodeLokasi();
    src.kepemilikan();
    src.sumberdana();
    $("#alldatacustom").hide();
    $(".toggle.btn.btn-primary").css("width","100px");
}

src.selectAllData = function(){
    var a = $("#alldata");
    a.change(function() {
        var ab = a.prop('checked');
        if(ab != true) {
            $("#alldatacustom").show();
        }else{
            $("#tahunakhir").val("");
            $("#tahunawal").val("");
            $("#alldatacustom").hide();
        }
    });
}

src.getDataPencarian = function(){
    var tgl         = $("#tanggalsurveikib").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var kepunit     = $("#kepunitsatkerja").val();
    var sumberdana  = $("#sumberdana").select2().text();
    var satker      = $("#kodelokasi").select2('val');
    var alldata     = $("#alldata").prop('checked');
    var tawal       = $("#tahunawal").val();
    var takhir      = $("#tahunakhir").val();
    var semester    = $("#semester").val();

    src.dataPencarian({ 0: tgl, 1: kepunit, 2:sumberdana, 3: satker, 4: alldata, 5: tawal, 6: takhir, 7: semester});
    console.log(src.dataPencarian());
}


src.searchData = function(){
    var tglreport = $("#tanggalsurveikib").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var kepunit = src.kepunitsatuankerja();
    
    var kodelok = $("#kodelokasi").select2('val');
    var sumbdana = $("#sumberdana").select2().text();

    var tahunawal = $("#tahunawal").val()
    var tahunakhir = $("#tahunakhir").val()
    var smstr = src.semester();
   

    var nav = src.statusnavigas();
    if(kodelok==null){
        swal({
                title: "Tidak Diizinkan",
                text: "Satuan Kerja Wajib Diisi...",
                type: "error",
                confirmButtonText: "Ya"
            });
        src.prepare();
    }else{
        if(nav=="KIBA"){
            $("#viewpdf-laporan").show();
            $("#pencarian-laporan").hide();
            var $container = $("#pdfRenderer");
            PDFObject.embed("laporan_kib.php?tgl="+tglreport+"&kep="+kepunit+"&kdlok="+kodelok+"&sd="+sumbdana+"&tawal="+tahunawal+"&takhir="+tahunakhir+"&semester="+smstr, $container);
        }else if(nav=="KIBB"){
            $("#viewpdf-laporan").show();
            $("#pencarian-laporan").hide();
            var $container = $("#pdfRenderer");
            PDFObject.embed("laporan_kib_b.php?tgl="+tglreport+"&kep="+kepunit+"&kdlok="+kodelok+"&sd="+sumbdana+"&tawal="+tahunawal+"&takhir="+tahunakhir+"&semester="+smstr, $container);
        }else if(nav=="KIBC"){
            $("#viewpdf-laporan").show();
            $("#pencarian-laporan").hide();
            var $container = $("#pdfRenderer");
            PDFObject.embed("laporan_kib_c.php?tgl="+tglreport+"&kep="+kepunit+"&kdlok="+kodelok+"&sd="+sumbdana+"&tawal="+tahunawal+"&takhir="+tahunakhir+"&semester="+smstr, $container);
        }else if(nav=="KIBD"){
            $("#viewpdf-laporan").show();
            $("#pencarian-laporan").hide();
            var $container = $("#pdfRenderer");
            PDFObject.embed("laporan_kib_d.php?tgl="+tglreport+"&kep="+kepunit+"&kdlok="+kodelok+"&sd="+sumbdana+"&tawal="+tahunawal+"&takhir="+tahunakhir+"&semester="+smstr, $container);
        }else if(nav=="KIBE"){
            $("#viewpdf-laporan").show();
            $("#pencarian-laporan").hide();
            var $container = $("#pdfRenderer");
            PDFObject.embed("laporan_kib_e.php?tgl="+tglreport+"&kep="+kepunit+"&kdlok="+kodelok+"&sd="+sumbdana+"&tawal="+tahunawal+"&takhir="+tahunakhir+"&semester="+smstr, $container);
        }else{
            $("#viewpdf-laporan").show();
            $("#pencarian-laporan").hide();
            var $container = $("#pdfRenderer");
            PDFObject.embed("laporan_kib_f.php?tgl="+tglreport+"&kep="+kepunit+"&kdlok="+kodelok+"&sd="+sumbdana+"&tawal="+tahunawal+"&takhir="+tahunakhir+"&semester="+smstr, $container);
        }
    }
}

src.generatepdf= function(){
    var tglreport = $("#tanggalsurveikib").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var kepunit = $("#kepunitsatkerja").val();
    
    var kodelok = $("#kodelokasi").select2('val');
    var sumbdana = $("#sumberdana").select2().text();

    var tahunawal = $("#tahunawal").val();
    var tahunakhir = $("#tahunakhir").val();
    var smstr = $("#semester").val();

    $("#viewpdf-laporan").show();
    $("#pencarian-laporan").hide();

    // var pdf = new jsPDF('l', 'pt', 'a4');
    // var options = {
    //          pagesplit: true
    //     };

    // pdf.addHTML($("#testerkib"), options, function()
    // {
    //     var string = pdf.output('datauristring');
    //     $('.preview-pane').attr('src', string);
    // });

    var $container = $("#pdfRenderer");
    PDFObject.embed("laporan_kib_a.php?tgl="+tglreport+"&kep="+
        kepunit+"&kdlok="+kodelok+"&sd="+sumbdana+"&tawal="+
        tahunawal+"&takhir="+tahunakhir+"&semester="+smstr, $container);


    
}



$(document).ready(function () {
	
    src.prepare();
    src.selectAllData();
    selectKodeLokasi();
});