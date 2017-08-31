var src = {
    kepunitsatuankerja: ko.observable(""),
    statusalldata: ko.observable(""),
    tahunawal: ko.observable(""),
    tahunakhir: ko.observable(""),
    semester: ko.observable(""),
    statusnavigas: ko.observable(""),
}

var klik = {}

var kib_a = {}

var kib_b = {}

var lap_tanah = {}

var loader = {
    image: ko.observable(true)
}

var aset = {

}

klik.selectkib = function(a){
    var val = a;
    if(val=="a"){
        src.statusnavigas("KIBA");
        src.resetAllLaporan();
        $("#notifikasi-laporan").hide();
        $("#pencarian-laporan").show();
        src.prepare();
    }else if(val=="b"){
        src.statusnavigas("KIBB");
        src.resetAllLaporan();

    }else if(val=="c"){
        src.statusnavigas("KIBC");
        src.resetAllLaporan();

    }else if(val=="d"){
        src.statusnavigas("KIBD");
        src.resetAllLaporan();

    }else if(val=="e"){
        src.statusnavigas("KIBE");
        src.resetAllLaporan();

    }else{
        src.statusnavigas("KIBF");
        src.resetAllLaporan();

    }
}

klik.selectaset = function(a){

}


function openSearchKib(){
}

function callTree(){
	$.fn.extend({
        treed: function (o) {

            var openedClass = 'fa-folder-open-o';
            var closedClass = 'fa-folder-o';

            if (typeof o !== 'undefined') {
                if (typeof o.openedClass !== 'undefined') {
                    openedClass = o.openedClass;
                }
                if (typeof o.closedClass !== 'undefined') {
                    closedClass = o.closedClass;
                }
            }
            ;

            //initialize each of the top levels
            var tree = $(this);
            tree.addClass("tree");
            tree.find('li').has("ul").each(function () {
                var branch = $(this); //li with children ul
                branch.prepend("<i class='indicator fa " + closedClass + "'></i>");
                branch.addClass('branch');
                branch.on('click', function (e) {
                    if (this === e.target) {
                        var icon = $(this).children('i:first');
                        icon.toggleClass(openedClass + " " + closedClass);
                        $(this).children().children().toggle();
                    }
                });
                branch.children().children().toggle();
            });
            //fire event from the dynamically added icon
            tree.find('.branch .indicator').each(function () {
                $(this).on('click', function () {
                    $(this).closest('li').click();
                });
            });
            //fire event to open branch if the li contains an anchor instead of text
            tree.find('.branch>a').each(function () {
                $(this).on('click', function (e) {
                    $(this).closest('li').click();
                    e.preventDefault();
                });
            });
            //fire event to open branch if the li contains a button instead of text
            tree.find('.branch>button').each(function () {
                $(this).on('click', function (e) {
                    $(this).closest('li').click();
                    e.preventDefault();
                });
            });
        }
    });
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
            cache: true
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
            $("#alldatacustom").hide();
        }
    });
}

src.searchData = function(){
    var tglreport = $("#tanggalsurveikib").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var kepunit = src.kepunitsatuankerja();
    
    var kodelok = $("#kodelokasi").select2().val();
    var sumbdana = $("#sumberdana").select2().text();
    var tahunawal = src.tahunawal();
    var tahunakhir = src.tahunakhir();
    var smstr = src.semester();
    // console.log(tglreport, kepunit, kodelok, sumbdana, tahunawal, tahunakhir, smstr)

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

        }else if(nav=="KIBC"){

        }else if(nav=="KIBD"){

        }else if(nav=="KIBE"){

        }else{

        }
    }
}

// Start Laporan Aset Tanah
    aset.tanah = function(){
        var dataTable = $("#DataTableAsetTanah").dataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
                url: "./controller/laporan/aset/tanah.php",
                type: "post",
                error: function(){
                    $(".DataTableAsetTanah-error").html("");
                    $("#DataTableAsetTanah").append('<tbody class="DataTableAsetTanah-grid-error"><tr><th colspan="6">Data Tidak Ditemukan...</th></tr></tbody>');
                    $("#DataTableAsetTanah_processing").css("display","none");
                },
                complete: function(){}
            },
            "order": [[ 0, 'desc' ]],
            "columnDefs": [ { orderable: false, targets: [1] }]
        });
    }

    aset.tanahPrepareAll = function(){
        aset.tanah();
    }

// End Laporan Aset Tanah

aset.prepareAll = function(){
    aset.tanahPrepareAll();
}


$(document).ready(function () {
	callTree();
	$('#tree-1').treed({openedClass: 'fa-folder-open', closedClass: 'fa-folder'});
	$('#tree-2').treed({openedClass: 'fa-file-o', closedClass: 'fa-file'});
    // src.prepare();
    src.selectAllData();
    selectKodeLokasi();
    aset.prepareAll();
});