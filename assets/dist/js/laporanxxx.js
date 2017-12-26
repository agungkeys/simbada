var src = {
    kepunitsatuankerja: ko.observable(""),
    statusalldata: ko.observable(""),
    tahunawal: ko.observable(""),
    tahunakhir: ko.observable(""),
    semester: ko.observable(""),
    statusnavigas: ko.observable(""),
    dataPencarian: ko.observableArray([]),
    valuetawal: ko.observable(""),
}

var loader = {
    image: ko.observable(true)
}

var klik = {}

// UNTUK RESET ALL PANEL KIB
klik.resetpanelselectkib = function(){
    $("#pencarian-laporan").hide();
    $("#viewpdf-laporan").hide();
}

// UNTUK RESET ALL PANEL PENCARIAN ASET
klik.resetpanelselectaset = function(){
    $("#tanah-laporan").hide();
    // $("#jalan-laporan").hide();
    // $("#jembatan-laporan").hide();
}

klik.openSKModal = function(){
    //Untuk Reset Search Filter
    $('#DataTableSatuanKerja').DataTable().destroy();
    //Call Data Table Lokasi
    klik.ajaxGetDataLokasi();

    $("#modal-sk").modal('show');
    // $("#DataTableSatuanKerja").DataTable().ajax.reload();
}

klik.ajaxGetDataLokasi = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableLokasi = $("#DataTableSatuanKerja").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/entry_asset/datautama/entry_asset_select_lokasi_satuan_kerja_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableSatuanKerja-error").html("");
                $("#DataTableSatuanKerja").append('<tbody class="DataTableSatuanKerja-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableSatuanKerja_processing").css("display","none");
            },
            complete: function() {
            }
        },
            "order": [[ 0, 'asc' ]],
            // "columnDefs": [ { orderable: false, targets: [0] }]
    });
    klik.clickDataLokasi();
}

klik.clickDataLokasi = function(){
    var table = $('#DataTableSatuanKerja').DataTable();
    $('#DataTableSatuanKerja tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );
        var data=[];
        data=table.row( this ).data();
        
        $("#modal-sk").modal('hide');
        if(data != undefined){
            var avals = data[0]
            $.ajax({
                dataType: "json",
                type: "post",
                url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
                data:{
                    1: avals
                }
            }).done(function(data){
                // console.log(data);
                $('#kodelokasi').empty().append('<option selected value='+data.KodeLokasi+'>'+data.SatuanKerja+'</option>');
                $("#lokasi-preview").show();
	            $("#previewidlokasi").text(data.KodeLokasi);
	            $("#previewunitlokasi").text(data.Unit);
	            $("#previewsublokasi").text(data.SubUnit);
	            $("#previewkepunit").text(data.NamaKu);
	            $("#previewkepbid").text(data.NamaKB);
            })
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
            // console.log(data)
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
        $("#tahunakhirfilter").hide();
    }else if(valtahun == "all"){
        $("#tahunakhirfilter").show();
        setTimeout(function(){
            randerdatelastall();
        })
    }else if(valtahun == "0"){
        $("#tahunakhirfilter").show();
        setTimeout(function(){
            randerdatelastzero();
        })
    }else{
        $("#tahunakhirfilter").show();
        setTimeout(function(){
            randerdatelast();
        })
    }
}

function randerdatelastzero(){
    var tahunawal = 1800;
    $("#tahunakhir").empty();
    var z = new Date();
    for(i = tahunawal; i <= z.getFullYear(); i++){
        $("#tahunakhir").append('<option>'+i+'</option>');
    }
}

function randerdatelast(){
    $("#tahunakhir").empty();
    var z = new Date();
    for(i=parseInt(src.valuetawal()); i <= z.getFullYear(); i++){
        $("#tahunakhir").append('<option>'+i+'</option>');
    }
}

function randerdatelastall(){
    $("#tahunakhir").empty();
    var z = new Date();
    for(i=parseInt(src.valuetawal()); i <= z.getFullYear(); i++){
        $("#tahunakhir").append('<option>'+i+'</option>');
    }
}

src.resetAllLaporan = function(){
    src.resetFormSearch();
    $("#tanah-laporan").hide();
    $("#viewpdf-laporan").hide();
    $("#pencarian-laporan").hide();
    $("#notifikasi-laporan").show();
}

src.resetFormSearch = function(){
    // $('#tanggalsurveikib').datepicker('setDate', null);
    src.tanggalKIB();
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

    //Set DateNow
    var datepick = $("#tanggalsurveikib");
    datepick.datepicker();
    datepick.datepicker('setDate', new Date());

}

src.selectKodeLokasi = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    $('#kodelokasi').select2({
        placeholder: 'Pilih Data Lokasi...',
        ajax: {
            url: './controller/entry_asset/datautama/entry_asset_select_lokasi.php',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    q: params.term, // search term
                    level: lv,
                    location:loc,
                };
            },
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
            $("#tahunakhir").val("");
            $("#tahunawal").val("");
            $("#alldatacustom").hide();
        }
    });
}


src.backtosearch= function(){
    $("#viewpdf-laporan").hide();
    $("#pencarian-laporan").show();
    $("#kibakembali").hide();
    src.resetFormSearch();
}

src.generatepdf= function(){
    var pbd = $("#kodelokasi").select2('val');
    if(pbd != null){
        var tglreport = $("#tanggalsurveikib").data('datepicker').getFormattedDate('dd MM yyyy');
        var kepunit = $("#kepunitsatkerja").val();
        
        var kodelok = $("#kodelokasi").select2('val');
        var sumbdana = $("#sumberdana").select2().text();

        var tahunawal = $("#tahunawal").val();
        var tahunakhir = $("#tahunakhir").val();
        var smstr = $("#semester").val();

        $("#viewpdf-laporan").show();
        $("#pencarian-laporan").hide();

        var $container = $("#pdfRenderer");
        PDFObject.embed("view/laporanpenghapusan/laporanxxx.php?tgl="+tglreport+"&kep="+
            kepunit+"&kdlok="+kodelok+"&sd="+sumbdana+"&tawal="+
            tahunawal+"&takhir="+tahunakhir+"&semester="+smstr, $container);
        $("#kibakembali").show();
    }else{
        swal({
            title: "Tidak Diizinkan",
            text: "Satuan Kerja Wajib Diisi...",
            type: "error",
            confirmButtonText: "Ya"
        });
    }
}

$(document).ready(function () {
    src.prepare();
    src.selectAllData();
    selectKodeLokasi();
});