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
    // console.log("FUCK")
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