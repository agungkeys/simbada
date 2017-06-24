function callBarang(a){
    if(a=='Tanah'){
        $('.tanah').show();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Tanah');
    }else if(a=='Jalan'){
        $('.tanah').hide();
        $('.jalan').show();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Jalan');
    }else if(a=='Jembatan'){
        $('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').show();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Jembatan');
    }else if(a=='Bangunan Air'){
        $('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').show();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Bangunan Air');
    }else if(a=='Instalasi'){
        $('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').show();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Instalasi');
    }else if(a=='Jaringan'){
        $('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').show();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Jaringan');
    }else if(a=='Bangunan Gedung'){
    	$('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').show();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Bangunan Gedung');
    }else if(a=='Monumen'){
    	$('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').show();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Monumen');
    }else if(a=='Alat Besar'){
    	$('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').show();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Alat Besar');
    }else if(a=='Alat Angkutan'){
    	$('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').show();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Alat Angkut');
    }else if(a=='Alat - Alat Bengkel'){
    	$('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').show();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Alat - Alat Bengkel');
    }else if(a=='Alat - Alat Pertanian'){
    	$('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').show();
        $('.alatalatkantor').hide();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Alat - Alat Pertanian');
    }else if(a=='Alat – Alat Kantor dan Rumah Tangga'){
    	$('.tanah').hide();
        $('.jalan').hide();
        $('.jembatan').hide();
        $('.bangunanair').hide();
        $('.instalasi').hide();
        $('.jaringan').hide();
        $('.bangunangedung').hide();
        $('.monumen').hide();
        $('.alatbesar').hide();
        $('.alatangkut').hide();
        $('.alatalatbengkel').hide();
        $('.alatalatpertanian').hide();
        $('.alatalatkantor').show();
        $('.alatalatstudio').hide();
        $('.alatalatkedokteran').hide();
        $('.alatlaboraturium').hide();
        $('.buku').hide();
        $('.barangbercorakkesenian').hide();
        $('.hewan').hide();
        $('.tanaman').hide();
        $('.alatalatkeamanan').hide();
        $("#nmBarang").val('Alat - Alat Kantor');
    }
}

function prepareAllPanel(){
    $('.tanah').hide();
    $('.jalan').hide();
    $('.jembatan').hide();
    $('.bangunanair').hide();
    $('.instalasi').hide();
    $('.jaringan').hide();
}

function prepareCheckBox(){
    $('.skin-minimal .i-check input').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
        increaseArea: '20%'
    });

    $('.skin-square .i-check input').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });


    $('.skin-flat .i-check input').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });

    $('.skin-line .i-check input').each(function () {
        var self = $(this),
        label = self.next(),
        label_text = label.text();
        label.remove();
        self.iCheck({
            checkboxClass: 'icheckbox_line-blue',
            radioClass: 'iradio_line-blue',
            insert: '<div class="icheck_line-icon"></div>' + label_text
        });
    });
}

function prepareDatePicker(){
	$('#tanggalsurvei').datepicker({
		language: "id",
	    format: "dd MM yyyy",
	    todayBtn: "linked",
	    toggleActive: true
	});
}

$(document).ready(function () {
	"use strict"; // Start of use strict
    // prepareAllPanel();
    prepareCheckBox();
    prepareDatePicker();
})