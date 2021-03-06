var at = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

at.prepareAll = function(){
	at.ajaxGetDataTanah();
    
}

at.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/tanah/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        at.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

at.cancel = function(){
    //Table Grid
    $("#table_aset_tanah").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetTanah").DataTable().ajax.reload();
    
    //Menu Navigasi
    $("#asetnavigasi").hide();

    //Reset Input Form Mutasi
    $('#mlokasitujuan').empty().append('<option selected></option>');
    $("#mkodelokasitujuan").val("");
    $("#mtahunperolehan").val("");
    $("#mketerangan").val("");
    // $('#DataTableSatuanKerja').DataTable().destroy();

    //Reset Input Form Penghapusan
    $("#htahunperolehan").val("");
    $("#hjenis").val("");
    $("#hketerangan").val("");

    //Form Edit
    $("#form_data_utama").hide();
    $("#form_aset_tanah").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

at.ubahSimpan = function(id){
    var kodetanah = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();
    var golongantanah   = $("#golongantanah").select2('data')[0].text;
    var luastanah       = $("#luastanah").val();
    var tahunperolehan  = $("#tahunperolehantanah").val();
    var letak           = $("#letakalamat").val();
    var statustanah     = $("#statustanah").select2('data')[0].text;
    var statustanahlain = $("#ststanahlainnya").val();
    var bersertifikat   = at.dokumentanah();
    var tanggalsertifikat = $("#tanggaldokumentanah input").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var nosertifikat    = $('#nosertifikat').val();
    var penggunaan      = $('#penggunaan').val();
    var asalusul        = $("#asalusul").select2('data')[0].text;
    var asalusullainnya = $('#aslusul').val()
    var dataawal        = at.dataawal();
    var nilaiperolehan  = toAngka($('#nilaiperolehan').val());
    var keterangan      = $('#keterangan').val();

    var penanggungjawab = $('#fdu_penanggungjawab').val();
    var lokasipjawab    = $("#fdu_lokasipenanggungjawab").val();
    var surveyor        = $('#fdu_surveyor').val();
    var tanggalsurvei   = $("#fdu_tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var matauang        = $("#fdu_currency").val();
    var satuankerja     = $("#fdu_asetlokasi").select2('data')[0].text;
    var kodetanahlama   = "";
    var kodepemilik     = $("#fdu_kepemilikan").val();
    var noregister      = $("#fdu_noregister").val();
    var status          = "";
    var ketstatus       = "";
    var entry           = "";
    var entryuser       = $(".user_name").html();

    if(kodelokasi == "" || kodebarang == null){
        swal({
            title: "Tidak Diizinkan",
            text: "Mohon Periksa Kembali...",
            type: "error",
            confirmButtonText: "Ya"
        });
    }else{
        $.ajax({
            dataType: "json",
            type: "post",
            url: "./controller/pencarian_aset/tanah/tanah_ubah.php",
            data:{
                kt: kodelok, 1: kodelokasi, 2: kodebarang, 3: golongantanah, 4: luastanah, 5: tahunperolehan, 
                6: letak, 7: statustanah, 8: statustanahlain, 9: bersertifikat, 10: tanggalsertifikat,
                11: nosertifikat, 12: penggunaan, 13: asalusul, 14: asalusullainnya, 15: dataawal,
                16: nilaiperolehan, 17: keterangan, 18: penanggungjawab, 19: lokasipjawab, 20: surveyor,
                21: tanggalsurvei, 22: matauang, 23: satuankerja, 24: kodetanahlama, 25: kodepemilik,
                26: noregister, 27: status, 28: ketstatus, 29: entry, 30: entryuser
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Tanah Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            at.cancel();
        });
    }
}

at.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_tanah").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_tanah").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','at.cancel()');
        $("#asetsaveubah").attr('onclick','at.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
    fdu.prepare();

    // Replace Data Barang
    $("#fdu_kodebarang").val(at.dataAllFromId().KodeBarang);
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: at.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        $("#fdu_namabarang").val(data.NamaBarang)
    })

    // Replace Nama Kepemilikan
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namapemilik.php",
        data:{
            1: at.dataAllFromId().KodePemilik
        }
    }).done(function(data){
        $('#fdu_kepemilikan').empty().append('<option selected value='+at.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
    })

    //Replace Data Utama
    $("#fdu_penanggungjawab").val(at.dataAllFromId().PenanggungJawab);
    $("#fdu_lokasipenanggungjawab").val(at.dataAllFromId().LokasiPenanggungJawab);
    $("#fdu_noregister").val(at.dataAllFromId().NoReg);
    // $("#fdu_currency").val(at.dataAllFromId().MataUang);
    $('#fdu_currency').empty().append('<option selected value='+at.dataAllFromId().MataUang+'>'+at.dataAllFromId().MataUang+'</option>');

    //Replace Tanggal Survei
    var tanggalsur = at.dataAllFromId().TglSurvey;
    var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

    var datepick = $("#fdu_tanggalsurvei input");
    datepick.datepicker({
            format: 'dd MM yyyy',
            language: 'id'
        });
    datepick.datepicker('setDate', tanggalrepl);
    
    //Replace Surveyor
    $("#fdu_surveyor").val(at.dataAllFromId().Surveyor);

    //Replace Detail Tanah======================================================
    //Replace Golongan Tanah
    $('#golongantanah').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/tanah/select_golongantanah.php',
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
    setTimeout(function(){
        $('#golongantanah').empty().append('<option selected value='+at.dataAllFromId().GolonganTanah+'>'+at.dataAllFromId().GolonganTanah+'</option>');
    },500)

    //Replace Luas Tanah
    $("#luastanah").val(at.dataAllFromId().LuasTanah);

    //Replace Data Awal
    $("#kesesuaiandata").change(function(){
        var sesuai = $("#kesesuaiandata").is(':checked');
        if(sesuai != true){
            at.dataawal("0");
        }else{
            at.dataawal("1111111111111111111111111111111");
        }  
    })
    var dtawal = at.dataAllFromId().DataAwal;
    if(dtawal > 0){
        $("#kesesuaiandata").prop('checked', true);
        at.dataawal("1111111111111111111111111111111");
    }else{
        $("#kesesuaiandata").prop('checked', false);
        at.dataawal("0");
    }

    //Replace Letak/ Alamat
    $("#letakalamat").val(at.dataAllFromId().Letak);

    //Replace Status Tanah
    $('#statustanah').select2({
        placeholder: 'Pilih Data Status Tanah...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/tanah/select_statustanah.php',
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
    setTimeout(function(){
        $('#statustanah').empty().append('<option selected value='+at.dataAllFromId().StatusTanah+'>'+at.dataAllFromId().StatusTanah+'</option>');
    },500);
    $("#ststanahlainnya").val(at.dataAllFromId().StatusTanahLainnya);

    //Replace Dok Tanah
    $("#sertifikat").change(function(){
        var sesuai = $("#sertifikat").is(':checked');
        if(sesuai != true){
            at.dokumentanah("0");
            $("#tanggaldokumentanah input").attr('disabled',true);
            $("#tanggaldokumentanah input").val("").datepicker("update");
        }else{
            at.dokumentanah("1111111111111111111111111111111");
            $("#tanggaldokumentanah input").attr('disabled',false);
        }  
    })
    var dtawal = at.dataAllFromId().Bersertifikat;
    if(dtawal > 0){
        $("#sertifikat").prop('checked', true);
        at.dokumentanah("1111111111111111111111111111111");
        $("#tanggaldokumentanah input").attr('disabled',false);
    }else{
        $("#sertifikat").prop('checked', false);
        at.dokumentanah("0");
        $("#tanggaldokumentanah input").attr('disabled',true);
        $("#tanggaldokumentanah input").val("").datepicker("update");
    }

    //Replace Tanggal Dokumen
    $('#tanggaldokumentanah').datepicker({
        language: "id",
        format: "dd MM yyyy",
        todayBtn: "linked",
        toggleActive: true
    });

    var tanggaldokx = at.dataAllFromId().Tanggal;
    var tanggalrepldokx = moment(tanggaldokx).format('DD MMMM YYYY');

    var datepickx = $("#tanggaldokumentanah input");
    datepickx.datepicker({
            format: 'dd MM yyyy',
            language: 'id'
        });
    datepickx.datepicker('setDate', tanggalrepldokx);

    //Replace No Sertifikat Tanah
    $("#nosertifikat").val(at.dataAllFromId().Nomor);
    //Replace Tahun Perolehan
    $("#tahunperolehantanah").val(at.dataAllFromId().TahunPerolehan);
    //Replace Penggunaan
    $("#penggunaan").val(at.dataAllFromId().Penggunaan);

    //Replace Asal-Usul
    $('#asalusul').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/tanah/select_asalusul.php',
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
    setTimeout(function(){
        $('#asalusul').empty().append('<option selected value='+at.dataAllFromId().AsalUsul+'>'+at.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#aslusul").val(at.dataAllFromId().AsalUsulLainnya);

    //Replace Nilai Perolehan
    $('#nilaiperolehan').css("font-weight","bold");
    $('#nilaiperolehan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehan").val(at.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keterangan").val(at.dataAllFromId().Keterangan);
}

at.hapus = function(n){
    $("#modal-menu").modal('hide');
    // console.log("Masuk Hapus "+n)
    swal({
        title: "Data Akan Dihapus Permanen?",
        text: "Anda Akan Menghapus '"+n+"' Permanen!?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function (isConfirm) {
        // controller/pencarian_aset/_datautama/select_namapemilik.php
        if (isConfirm) {
            $.ajax({
                dataType: 'json',
                type:'post',
                url: 'controller/pencarian_aset/tanah/tanah_hapus.php',
                data:{kodeTanah:n}
            }).done(function(data){
                $("#DataTableAsetTanah").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetTanah").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

at.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_tanah").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','at.cancel()');
        $("#asetsavemutasi").attr('onclick','at.mutasiSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavepenghapusan").hide();

    });
    fm.prepare();

    //Replace Data Mutasi Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: at.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(at.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: at.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        at.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Luas</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Status&nbsp;Tanah</th><th>Tahun&nbsp;Perolehan</th><th>No.&nbsp;Surat</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+at.dataAllFromId().KodeTanah+'</td><td>'+at.dataAllFromId().KodeBarang+'</td><td>'+at.NmBarangRow()+'</td><td>'+at.dataAllFromId().LuasTanah+'</td><td>'+toRpp(at.dataAllFromId().HargaTanah)+'</td><td>'+at.dataAllFromId().NoReg+'</td><td>'+at.dataAllFromId().StatusTanah+'</td><td>'+at.dataAllFromId().TahunPerolehan+'</td><td>'+at.dataAllFromId().Nomor+'</td><td>'+at.dataAllFromId().AsalUsul+'</td><td>-</td></tr>');
    
    })   
}

at.mutasiSimpan = function(){
    var kodetanah       = at.dataAllFromId().KodeTanah;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = at.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = at.dataAllFromId().NilaiPerolehan;
    var kodebidang      = at.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = at.dataAllFromId().KodePemilik;
    var tahunmutasi     = $("#mtahunperolehan").val();
    var semester        = "1";
    var status          = "";
    var keterangan      = $("#mketerangan").val();

    if(kodeloktujuan == "" || tahunmutasi == ""){
        swal({
            title: "Tidak Diizinkan",
            text: "Mohon Periksa Kembali...",
            type: "error",
            confirmButtonText: "Ya"
        });
    }else{
        swal({
            title: "Data Akan Dimutasi?",
            text: "Anda Yakin Akan Melakukan Mutasi Terhadap '"+kodelokasal+"' ke '"+kodeloktujuan+"' !?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function (isConfirm) {
            if (isConfirm) {
                $.ajax({
                    dataType: "json",
                    type: "post",
                    url: "./controller/pencarian_aset/tanah/tanah_mutasi.php",
                    data:{
                        1: kodetanah, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Tanah Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    at.cancel();
                });
            }else{
                $("#DataTableAsetTanah").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

at.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_tanah").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','at.cancel()');
        $("#asetsavepenghapusan").attr('onclick','at.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: at.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(at.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: at.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        at.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr  style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Luas</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Status&nbsp;Tanah</th><th>Tahun&nbsp;Perolehan</th><th>No.&nbsp;Surat</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+at.dataAllFromId().KodeTanah+'</td><td>'+at.dataAllFromId().KodeBarang+'</td><td>'+at.NmBarangRow()+'</td><td>'+at.dataAllFromId().LuasTanah+'</td><td>'+toRpp(at.dataAllFromId().HargaTanah)+'</td><td>'+at.dataAllFromId().NoReg+'</td><td>'+at.dataAllFromId().StatusTanah+'</td><td>'+at.dataAllFromId().TahunPerolehan+'</td><td>'+at.dataAllFromId().Nomor+'</td><td>'+at.dataAllFromId().AsalUsul+'</td><td>-</td></tr>');
    
    })  
}

at.penghapusanSimpan = function(){
    var kodetanah       = at.dataAllFromId().KodeTanah;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = at.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = at.dataAllFromId().NilaiPerolehan;
    var kodebidang      = at.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = at.dataAllFromId().KodePemilik;
    var tahunpenghapusan= $("#htahunperolehan").val();
    var jenispenghapusan= $("#hjenis").val();
    var semester        = "1";
    var status          = "";
    var keterangan      = $("#hketerangan").val();
    if(tahunpenghapusan == "" || jenispenghapusan == ""){
        swal({
            title: "Tidak Diizinkan",
            text: "Mohon Periksa Kembali...",
            type: "error",
            confirmButtonText: "Ya"
        });
    }else{
        swal({
            title: "Data Akan Dihapuskan?",
            text: "Anda Yakin Akan Melakukan Penghapusan Terhadap '"+kodelokasal+"' !?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function (isConfirm) {
            if (isConfirm) {
                $.ajax({
                    dataType: "json",
                    type: "post",
                    url: "./controller/pencarian_aset/tanah/tanah_penghapusan.php",
                    data:{
                        1: kodetanah, 2: kodelokasal, 3: jenispenghapusan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunpenghapusan, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dilakukan Penghapusan!",
                        text: "Data Tanah Berhasil Dilakukan Penghapusan",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    at.cancel();
                });    
            }else{
                $("#DataTableAsetTanah").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
           
        });
    }
}

at.ajaxGetDataTanah = function(){
	var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetTanah").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/tanah/tanah_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetTanah-error").html("");
                $("#DataTableAsetTanah").append('<tbody class="DataTableAsetTanah-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetTanah_processing").css("display","none");
            },
            complete: function() {
            }
        },
        "order": [[ 0, 'asc' ]],
        "sScrollY": 400, //height
		"sScrollX": "100%",
 		"columnDefs": [ 
 			{ 
 				targets: [7],
 				"render" : function( data, type, full ) {
			        // you could prepend a dollar sign before returning, or do it
			        // in the formatNumber method itself
			        return formatNumber(data);  
			    }
 			},
 			{ 
 				targets: [9],
 				render: function(d){
	                return moment(d).format("DD/MM/YYYY");
	            }
 			},
 			{ 
 				targets: [14],
                
                "className": "text-right",
                
 				"render" : function( data, type, full ) {
			        // you could prepend a dollar sign before returning, or do it
			        // in the formatNumber method itself
			        return formatNumber(data);  
			    }
 			}
 		],
        lengthMenu: [
            [ 10, 25, 50, 100, 500, 1000, 5000, 10000],
            [ '10 rows', '25 rows', '50 rows', '100 rows', '500 rows', '1K rows', '5K rows', '10K rows' ]
        ],
        // "dom": 'Blfrtip',
        // "buttons": ['excel'],
        // initComplete: function () {
        //     $('.buttons-pdf').html('<span class="glyphicon glyphicon-file" data-toggle="tooltip" title="Export To Excel"/>')
        // }
    });  
    at.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetTanah' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetTanah-'+moment().format("DD-MM-YYYY");
    // Configure Export Buttons
    new $.fn.dataTable.Buttons( dt, {
        buttons: [
            {
                text: '<i class="fa fa-lg fa-clipboard"></i> Copy Data',
                extend: 'copy',
                className: 'btn btn-default p-5 m-0 width-35 assets-export-btn export-copy ttip'
            }, {
                text: '<i class="fa fa-lg fa-file-excel-o"></i> Export Excel',
                extend: 'excel',
                className: 'btn btn-default p-5 m-0 width-35 assets-export-btn export-xls ttip',
                title: export_filename,
                extension: '.xls'
            }
        ]
    } );
     
    // Add the Export buttons to the toolbox
    dt.buttons( 0, null ).container().appendTo( '#asetnavigasiexport .text-left' );
}

at.clickRow = function(){
	var table = $('#DataTableAsetTanah').DataTable();
    $('#DataTableAsetTanah tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );
        var data=[];
        data=table.row( this ).data();
        
        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','at.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','at.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','at.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','at.penghapusan("'+data[0]+'")');
            at.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    at.prepareAll();
});
