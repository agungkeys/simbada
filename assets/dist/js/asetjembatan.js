var ajemb = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

ajemb.prepareAll = function(){
    ajemb.ajaxGetDataJembatan();
    
}

ajemb.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/jembatan/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        ajemb.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

ajemb.cancel = function(){
    //Table Grid
    $("#table_aset_jembatan").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetJembatan").DataTable().ajax.reload();
    
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
    $("#form_aset_jembatan").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

ajemb.ubahSimpan = function(id){
    var kodejembatan = id;
    var kodelokasi          = $("#fdu_kdlokasi").val();
    var kodebarang          = $("#fdu_kodebarang").val();

    var jenisjembatan   = $("#jenisjembatan").select2('data')[0].text;
    var namajembatan    = $("#namajembatan").val();
    var namajalan       = $("#namajalanjembatan").val();
    var panjang         = $("#lebarjembatan").val();
    var lebar           = $("#lebarjembatan").val();
    var tinggiramp      = $("#tinggirampjembatan").val();
    var tahunperolehan  = $("#tahunperolehanjembatan").val();
    var bahanpondasi    = $("#bahanpondasi").text();
    var bahanpondasilain= $("#bahanpondasilainnya").val();
    var bahankonst      = $("#bahankonstruksijembatan").text();
    var bahankonstlain  = $("#bahankonstruksijembatanlainnya").val();
    var kondisi         = $("#kondisijembatan").val();
    var asalusul        = $("#asalusuljembatan").text();
    var asalusullain    = $("#asalusuljembatanlainnya").val();
    var nilaiperolehan  = toAngka($("#nilaiperolehanjembatan").val());
    var keterangan      = $("#keteranganjembatan").val();

    var posisi          = "";
    var tahunpembuatan  = "";
    var pondasi         = "";
    var pondasilain     = "";
    var typekonst       = "";
    var typekonstlain   = "";
    var dataawal        = "";
    var hargabahan      = "";
    var nilaipasar      = "";
    var nilaibuku       = "";


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
            url: "./controller/pencarian_aset/jembatan/jembatan_ubah.php",
            data:{
                kj: kodejembatan, 1: kodebarang, 2: kodelokasi, 3: jenisjembatan, 4: namajembatan, 5: namajalan, 
                6: posisi, 7: tahunpembuatan, 8: tahunperolehan, 9: tinggiramp, 10: lebar,
                11: panjang, 12: pondasi, 13: pondasilain, 14: bahanpondasi, 15: bahanpondasilain,
                16: typekonst, 17: typekonstlain, 18: bahankonst, 19: bahankonstlain, 20: kondisi, 21: asalusul, 22: asalusullain, 23: dataawal,
                24: hargabahan, 25: nilaipasar, 26: nilaiperolehan, 27: nilaibuku, 28: keterangan,
                29: penanggungjawab, 30: lokasipjawab, 31: surveyor, 32: tanggalsurvei, 33: matauang,
                34: satuankerja, 35: kodepemilik, 36: noregister, 37: status, 38: ketstatus, 39: entry, 40: entryuser
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Jembatan Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            ajemb.cancel();
        });
    }
}

ajemb.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jembatan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_jembatan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','ajemb.cancel()');
        $("#asetsaveubah").attr('onclick','ajemb.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(ajemb.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: ajemb.dataAllFromId().KodeBarang
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
                1: ajemb.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+ajemb.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(ajemb.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(ajemb.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(ajemb.dataAllFromId().NoReg);
        // $("#fdu_currency").val(ajemb.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+ajemb.dataAllFromId().MataUang+'>'+ajemb.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = ajemb.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(ajemb.dataAllFromId().Surveyor);

    //Replace Detail Jembatan======================================================

    //Replace Golongan Jembatan
    $('#jenisjembatan').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jembatan/select_jenisjembatan.php',
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
        $('#jenisjembatan').empty().append('<option selected value='+ajemb.dataAllFromId().JenisJembatan+'>'+ajemb.dataAllFromId().JenisJembatan+'</option>');
    },500)

    //Replace Nama Jembatan
    $("#namajembatan").val(ajemb.dataAllFromId().NamaJembatan);

    //Replace Nama Jalan
    $("#namajalanjembatan").val(ajemb.dataAllFromId().NamaRuas);

    //Replace Panjang Jalan
    $("#panjangjembatan").val(ajemb.dataAllFromId().Panjang);
    //Replace Lebar Jalan
    $("#lebarjembatan").val(ajemb.dataAllFromId().Lebar);
    //Replace Tinggi Jalan
    $("#tinggirampjembatan").val(ajemb.dataAllFromId().Tinggi);

    //Replace Tahun Perolehan dan Pembuatan
    $("#tahunperolehanjembatan").val(ajemb.dataAllFromId().TahunPerolehan);
    // $("#tahunpembuatan").val(ajemb.dataAllFromId().TahunPembuatan);

    //Replace Bahan Pondasi
    $('#bahanpondasi').select2({
        placeholder: 'Pilih Bahan Pondasi...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jembatan/select_bahanpondasi.php',
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
        $('#bahanpondasi').empty().append('<option selected value='+ajemb.dataAllFromId().BahanPondasi+'>'+ajemb.dataAllFromId().BahanPondasi+'</option>');
        $("#bahanpondasilainnya").val(ajemb.dataAllFromId().BahanPondasiLainnya);
    },500);

    //Replace Bahan
    $('#bahankonstruksijembatan').select2({
        placeholder: 'Pilih Bahan Konstruksi...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jembatan/select_bahankonstruksi.php',
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
        $('#bahankonstruksijembatan').empty().append('<option selected value='+ajemb.dataAllFromId().BahanKonstruksi+'>'+ajemb.dataAllFromId().BahanKonstruksi+'</option>');
        $("#bahankonstruksijembatanlainnya").val(ajemb.dataAllFromId().BahanKonstruksiLainnya);
    },500);

    $("#kondisijembatan").val(ajemb.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusuljembatan').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jembatan/select_asalusul.php',
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
        $('#asalusuljembatan').empty().append('<option selected value='+ajemb.dataAllFromId().AsalUsul+'>'+ajemb.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#asalusuljembatanlainnya").val(ajemb.dataAllFromId().AsalUsulLainnya);

    //Replace Nilai Perolehan
    $('#nilaiperolehanjembatan').css("font-weight","bold");
    $('#nilaiperolehanjembatan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanjembatan").val(ajemb.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganjembatan").val(ajemb.dataAllFromId().Keterangan);
}

ajemb.hapus = function(n){
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
                url: 'controller/pencarian_aset/jembatan/jembatan_hapus.php',
                data:{kodeJembatan:n}
            }).done(function(data){
                $("#DataTableAsetJembatan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetJembatan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

ajemb.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jembatan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','ajemb.cancel()');
        $("#asetsavemutasi").attr('onclick','ajemb.mutasiSimpan("'+n+'")');
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
            1: ajemb.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(ajemb.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: ajemb.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        ajemb.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Jembatan</th><th>Panjng&nbsp;(Km)</th><th>Lebar&nbsp;(M)</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+ajemb.dataAllFromId().KodeJembatan+'</td><td>'+ajemb.dataAllFromId().KodeBarang+'</td><td>'+ajemb.NmBarangRow()+'</td><td>'+ajemb.dataAllFromId().JenisJembatan+'</td><td>'+ajemb.dataAllFromId().Panjang+'</td><td>'+ajemb.dataAllFromId().Lebar+'</td><td>'+toRpp(ajemb.dataAllFromId().NilaiPerolehan)+'</td><td>'+ajemb.dataAllFromId().NoReg+'</td><td>'+ajemb.dataAllFromId().TahunPerolehan+'</td><td>'+ajemb.dataAllFromId().AsalUsul+'</td><td>'+ajemb.dataAllFromId().KondisiJalan+'</td></tr>');
    
    })   
}

ajemb.mutasiSimpan = function(){
    var kodejembatan    = ajemb.dataAllFromId().KodeJembatan;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = ajemb.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = ajemb.dataAllFromId().NilaiPerolehan;
    var kodebidang      = ajemb.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = ajemb.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/jembatan/jembatan_mutasi.php",
                    data:{
                        1: kodejembatan, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
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
                    ajemb.cancel();
                });
            }else{
                $("#DataTableAsetJembatan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

ajemb.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jembatan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','ajemb.cancel()');
        $("#asetsavepenghapusan").attr('onclick','ajemb.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: ajemb.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(ajemb.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: ajemb.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        ajemb.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Jembatan</th><th>Panjng&nbsp;(Km)</th><th>Lebar&nbsp;(M)</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+ajemb.dataAllFromId().KodeJembatan+'</td><td>'+ajemb.dataAllFromId().KodeBarang+'</td><td>'+ajemb.NmBarangRow()+'</td><td>'+ajemb.dataAllFromId().JenisJembatan+'</td><td>'+ajemb.dataAllFromId().Panjang+'</td><td>'+ajemb.dataAllFromId().Lebar+'</td><td>'+toRpp(ajemb.dataAllFromId().NilaiPerolehan)+'</td><td>'+ajemb.dataAllFromId().NoReg+'</td><td>'+ajemb.dataAllFromId().TahunPerolehan+'</td><td>'+ajemb.dataAllFromId().AsalUsul+'</td><td>'+ajemb.dataAllFromId().KondisiJalan+'</td></tr>');
    
    })  
}

ajemb.penghapusanSimpan = function(){
    var kode            = ajemb.dataAllFromId().KodeJembatan;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = ajemb.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = ajemb.dataAllFromId().NilaiPerolehan;
    var kodebidang      = ajemb.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = ajemb.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/jembatan/jembatan_penghapusan.php",
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
                    ajemb.cancel();
                }); 
            }else{
                $("#DataTableAsetJalan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

ajemb.ajaxGetDataJembatan = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetJembatan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/jembatan/jembatan_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetJembatan-error").html("");
                $("#DataTableAsetJembatan").append('<tbody class="DataTableAsetJembatan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetJembatan_processing").css("display","none");
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
                targets: [8],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return formatNumber(data);  
                }
            },
            { 
                targets: [9],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return formatNumber(data);  
                }
            },
            { 
                targets: [10],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return formatNumber(data);  
                }
            },
            { 
                targets: [15],
                
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
    ajemb.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetJembatan' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetJembatan-'+moment().format("DD-MM-YYYY");
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

ajemb.clickRow = function(){
    var table = $('#DataTableAsetJembatan').DataTable();
    $('#DataTableAsetJembatan tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','ajemb.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','ajemb.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','ajemb.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','ajemb.penghapusan("'+data[0]+'")');
            ajemb.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    ajemb.prepareAll();
});
