var kedokteran = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

kedokteran.prepareAll = function(){
    kedokteran.ajaxGetDataKedokteran();
    
}

kedokteran.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/alatkedokteran/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        kedokteran.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

kedokteran.cancel = function(){
    //Table Grid
    $("#table_aset_alatkedokteran").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatKedokteran").DataTable().ajax.reload();
    
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
    $("#form_aset_alatkedokteran").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

kedokteran.ubahSimpan = function(id){
    var kodeakedokteran = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golalatkedokteran    = $("#golonganalatkedokteran").select2('data')[0].text;
    var nmalatkedokteran     = $("#namabarangalatkedokteran").val();
    var mrkalatkedokteran    = $("#merkalatkedokteran").val();
    var tpalatkedokteran     = $("#tipealatkedokteran").val();
    var bhnalatkedokteran    = $("#bahanalatkedokteran").val();
    var thperolehanalatkedokteran    = $("#tahunperolehanalatkedokteran").val();
    var ukalatkedokteran     = $("#ukuranalatkedokteran").val();
    var jmlalatkedokteran    = $("#jumlahalatkedokteran").val();
    var konalatkedokteran    = $("#kondisialatkedokteran").val();
    var asalusulalatkedokteran       = $("#asalusulalatkedokteran").select2('data')[0].text;
    var nilaiperolehan   = toAngka($("#nilaiperolehanalatkedokteran").val());
    var keterangan       = $("#keteranganalatkedokteran").val();


    var penanggungjawab     = $('#fdu_penanggungjawab').val();
    var lokasipjawab        = $("#fdu_lokasipenanggungjawab").val();
    var surveyor            = $('#fdu_surveyor').val();
    var tanggalsurvei       = $("#fdu_tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var matauang            = $("#fdu_currency").val();
    var satuankerja         = $("#fdu_asetlokasi").select2('data')[0].text;
    var kodepemilik         = $("#fdu_kepemilikan").val();
    var noregister          = $("#fdu_noregister").val();
    var status              = "";
    var ketstatus           = "";
    var entry               = "";
    var entryuser           = $(".user_name").html();

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
                url: "./controller/pencarian_aset/alatkedokteran/alatkedokteran_ubah.php",
                data:{
                    kode: kodeakedokteran, 1: kodebarang, 2: kodelokasi, 3: golalatkedokteran, 4: nmalatkedokteran, 
                    5: mrkalatkedokteran, 6: tpalatkedokteran, 7: bhnalatkedokteran, 8: thperolehanalatkedokteran, 
                    9: ukalatkedokteran, 10: jmlalatkedokteran, 11: konalatkedokteran, 12: asalusulalatkedokteran, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Kedokteran Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            kedokteran.cancel();
        });
    }
}

kedokteran.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkedokteran").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatkedokteran").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','kedokteran.cancel()');
        $("#asetsaveubah").attr('onclick','kedokteran.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(kedokteran.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: kedokteran.dataAllFromId().KodeBarang
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
                1: kedokteran.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+kedokteran.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(kedokteran.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(kedokteran.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(kedokteran.dataAllFromId().NoReg);
        // $("#fdu_currency").val(kedokteran.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+kedokteran.dataAllFromId().MataUang+'>'+kedokteran.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = kedokteran.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(kedokteran.dataAllFromId().Surveyor);

    //Replace Detail Kedokteran======================================================

    //Replace Golongan Kedokteran
    $('#golonganalatkedokteran').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatstudio/select_golonganalatkedokteran.php',
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
        $('#golonganalatkedokteran').empty().append('<option selected value='+kedokteran.dataAllFromId().GolonganAlatKedokteran+'>'+kedokteran.dataAllFromId().GolonganAlatKedokteran+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namabarangalatkedokteran").val(kedokteran.dataAllFromId().NamaBarang);

    //Replace Tahun Perolehan dan Pembuatan
    $("#merkalatkedokteran").val(kedokteran.dataAllFromId().Merk);
    $("#tipealatkedokteran").val(kedokteran.dataAllFromId().Tipe);
    $("#bahanalatkedokteran").val(kedokteran.dataAllFromId().Bahan);
    $("#ukuranalatkedokteran").val(kedokteran.dataAllFromId().Ukuran);
    $("#jumlahalatkedokteran").val(kedokteran.dataAllFromId().Jumlah);

    $("#tahunperolehanalatkedokteran").val(kedokteran.dataAllFromId().TahunPerolehan);

    $("#kondisialatkedokteran").val(kedokteran.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusulalatkedokteran').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatkedokteran/select_asalusul.php',
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
        $('#asalusulalatkedokteran').empty().append('<option selected value='+kedokteran.dataAllFromId().AsalUsul+'>'+kedokteran.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehanalatkedokteran').css("font-weight","bold");
    $('#nilaiperolehanalatkedokteran').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanalatkedokteran").val(kedokteran.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganalatkedokteran").val(kedokteran.dataAllFromId().Keterangan);
}

kedokteran.hapus = function(n){
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
                url: 'controller/pencarian_aset/alatkedokteran/alatkedokteran_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatKedokteran").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatKedokteran").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

kedokteran.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkedokteran").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','kedokteran.cancel()');
        $("#asetsavemutasi").attr('onclick','kedokteran.mutasiSimpan("'+n+'")');
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
            1: kedokteran.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(kedokteran.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: kedokteran.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        kedokteran.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Kedokteran</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+kedokteran.dataAllFromId().KodeAlatKedokteran+'</td><td>'+kedokteran.dataAllFromId().KodeBarang+'</td><td>'+kedokteran.NmBarangRow()+'</td><td>'+kedokteran.dataAllFromId().GolonganAlatKedokteran+'</td><td>'+kedokteran.dataAllFromId().Merk+'</td><td>'+kedokteran.dataAllFromId().Tipe+'</td><td>'+kedokteran.dataAllFromId().Bahan+'</td><td>'+kedokteran.dataAllFromId().Ukuran+'</td><td>'+kedokteran.dataAllFromId().Jumlah+'</td><td>'+toRpp(kedokteran.dataAllFromId().NilaiPerolehan)+'</td><td>'+kedokteran.dataAllFromId().NoReg+'</td><td>'+kedokteran.dataAllFromId().TahunPerolehan+'</td><td>'+kedokteran.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(kedokteran.dataAllFromId().Kondisi)+'</td></tr>');
    
    })   
}

kedokteran.mutasiSimpan = function(){
    var kodeakedokteran  = kedokteran.dataAllFromId().KodeAlatKedokteran;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = kedokteran.dataAllFromId().KodeBarang;
    var jumlah          = kedokteran.dataAllFromId().Jumlah;
    var harga           = kedokteran.dataAllFromId().NilaiPerolehan;
    var kodebidang      = kedokteran.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = kedokteran.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatkedokteran/alatkedokteran_mutasi.php",
                    data:{
                        1: kodeakedokteran, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Kedokteran Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    kedokteran.cancel();
                });
            }else{
                $("#DataTableAsetAlatKedokteran").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

kedokteran.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkedokteran").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','kedokteran.cancel()');
        $("#asetsavepenghapusan").attr('onclick','kedokteran.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: kedokteran.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(kedokteran.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: kedokteran.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        kedokteran.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Kedokteran</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+kedokteran.dataAllFromId().KodeAlatKedokteran+'</td><td>'+kedokteran.dataAllFromId().KodeBarang+'</td><td>'+kedokteran.NmBarangRow()+'</td><td>'+kedokteran.dataAllFromId().GolonganAlatKedokteran+'</td><td>'+kedokteran.dataAllFromId().Merk+'</td><td>'+kedokteran.dataAllFromId().Tipe+'</td><td>'+kedokteran.dataAllFromId().Bahan+'</td><td>'+kedokteran.dataAllFromId().Ukuran+'</td><td>'+kedokteran.dataAllFromId().Jumlah+'</td><td>'+toRpp(kedokteran.dataAllFromId().NilaiPerolehan)+'</td><td>'+kedokteran.dataAllFromId().NoReg+'</td><td>'+kedokteran.dataAllFromId().TahunPerolehan+'</td><td>'+kedokteran.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(kedokteran.dataAllFromId().Kondisi)+'</td></tr>');
    
    })  
}

kedokteran.penghapusanSimpan = function(){
    var kode            = kedokteran.dataAllFromId().KodeAlatKedokteran;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = kedokteran.dataAllFromId().KodeBarang;
    var jumlah          = kedokteran.dataAllFromId().Jumlah;
    var harga           = kedokteran.dataAllFromId().NilaiPerolehan;
    var kodebidang      = kedokteran.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = kedokteran.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatkedokteran/alatkedokteran_penghapusan.php",
                    data:{
                        1: kode, 2: kodelokasal, 3: jenispenghapusan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunpenghapusan, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dilakukan Penghapusan!",
                        text: "Data Jalan Berhasil Dilakukan Penghapusan",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    kedokteran.cancel();
                }); 
            }else{
                $("#DataTableAsetAlatKedokteran").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

kedokteran.ajaxGetDataKedokteran = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatKedokteran").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/alatkedokteran/alatkedokteran_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatKedokteran-error").html("");
                $("#DataTableAsetAlatKedokteran").append('<tbody class="DataTableAsetAlatKedokteran-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatKedokteran").css("display","none");
            },
            complete: function() {
            }
        },
        "order": [[ 0, 'asc' ]],
        "sScrollY": 400, //height
        "sScrollX": "100%",
        "columnDefs": [ 
            // { 
            //     targets: [9],
            //     "render" : function( data, type, full ) {
            //         // you could prepend a dollar sign before returning, or do it
            //         // in the formatNumber method itself
            //         return formatNumber(data);  
            //     }
            // },
            // { 
            //     targets: [10],
            //     "render" : function( data, type, full ) {
            //         // you could prepend a dollar sign before returning, or do it
            //         // in the formatNumber method itself
            //         return formatNumber(data);  
            //     }
            // },
            { 
                targets: [12],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return kondisipersentase(data); 
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
    kedokteran.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatKedokteran' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetAlatKedokteran-'+moment().format("DD-MM-YYYY");
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

kedokteran.clickRow = function(){
    var table = $('#DataTableAsetAlatKedokteran').DataTable();
    $('#DataTableAsetAlatKedokteran tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','kedokteran.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','kedokteran.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','kedokteran.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','kedokteran.penghapusan("'+data[0]+'")');
            kedokteran.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    kedokteran.prepareAll();
});
