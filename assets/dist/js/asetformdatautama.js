var fdu = {}

fdu.selectLokasii = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    $('#fdu_asetlokasi').select2({
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

fdu.ajaxGetDataLokasi = function(){
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
    fdu.clickDataLokasi();
}

fdu.clickDataLokasi = function(){
    // var table = $('#DataTableSatuanKerja').DataTable();
    $('#DataTableSatuanKerja tbody').on( 'click', 'tr', function (e) {
        // console.log("Inikah"+e);
        // var data=[];
        // data=table.row( this ).data();
        var id = $(this).find("td")[0].innerHTML
        
        $("#modal-sk").modal('hide');
        if(id != undefined){
            // var avals = data[0]
            $.ajax({
                dataType: "json",
                type: "post",
                url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
                data:{
                    1: id
                }
            }).done(function(data){
                // console.log(data);
                $("#fdu_kdlokasi").val(data.KodeLokasi);
                $("#fdu_unit").val(data.Unit);
                $("#fdu_subunit").val(data.SubUnit);
                $('#fdu_asetlokasi').empty().append('<option selected value='+data.KodeLokasi+'>'+data.SatuanKerja+'</option>');
            })
        }
    });
}

fdu.selectKepemilikann = function(){
    $('#fdu_kepemilikan').select2({
        placeholder: 'Pilih Kepemilikan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/datautama/entry_asset_select_kepemilikan.php',
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

fdu.selectCurrency = function(){
    $('#fdu_currency').select2({
        placeholder: 'Pilih Mata Uang...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/datautama/entry_asset_select_currency.php',
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

fdu.prepareDatePicker = function(){
    $('#fdu_tanggalsurvei').datepicker({
        language: "id",
        format: "dd MM yyyy",
        todayBtn: "linked",
        toggleActive: true
    });
}

fdu.replaceDataLokasii = function(){
    $('#fdu_asetlokasi').select2().on('change', function(e){
        var avals=e.currentTarget.value;
        
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
            data:{
                1: avals
            }
        }).done(function(data){
            $("#fdu_kdlokasi").val(data.KodeLokasi)
            $("#fdu_unit").val(data.Unit);
            $("#fdu_subunit").val(data.SubUnit);
            $("#fdu_satuankerja").val(data.SatuanKerja);
        })
    });
}

fdu.openSKModal = function(){
	//Untuk Reset Search Filter
    $('#DataTableSatuanKerja').DataTable().destroy();
    //Call Data Table Lokasi
    fdu.ajaxGetDataLokasi();

    $("#modal-sk").modal('show');
    // $("#DataTableSatuanKerja").DataTable().ajax.reload();
}

fdu.tampungKodeLokasi = function(id){
	var avals = id
	$.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: avals
        }
    }).done(function(data){
        $("#fdu_kdlokasi").val(data.KodeLokasi)
        $("#fdu_unit").val(data.Unit);
        $("#fdu_subunit").val(data.SubUnit);
        $('#fdu_asetlokasi').empty().append('<option selected value='+data.KodeLokasi+'>'+data.SatuanKerja+'</option>');
    });
}

fdu.getLokasi = function(id){
	
}

fdu.prepare = function(){

	setTimeout(function(){
		fdu.selectKepemilikann();
		fdu.selectLokasii();
		fdu.selectCurrency();
		fdu.prepareDatePicker();
	},1150)
}

$(document).ready(function () {
	fdu.replaceDataLokasii();
});