var aj = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

aj.prepareAll = function(){
    aj.ajaxGetDataJalan();
    
}

aj.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/jalan/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        aj.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

aj.cancel = function(){
    //Table Grid
    $("#table_aset_jalan").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetJalan").DataTable().ajax.reload();
    
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
    $("#form_aset_jalan").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}



aj.ubahSimpan = function(id){
    var kodejalan = id;
    var kodelokasi          = $("#fdu_kdlokasi").val();
    var kodebarang          = $("#fdu_kodebarang").val();

    var jenisjalan          = $("#jenisjalan").select2('data')[0].text;
    var namajalan           = $("#namajalan").val();
    var namapangkalruas     = $("#namapangkalruas").val();
    var namaujungruas       = $("#namaujungruas").val();
    var tpengenalpangkal    = "";
    var tpengenalujung      = "";

    var tahunperolehan      = $("#tahunperolehan").val();
    var tahunpembuatan      = $("#tahunpembuatan").val();
    var panjangruas         = $("#panjangruasjalan").val();
    var kmruasawal          = $("#ruasawal").val();
    var kmruasakhir         = $("#ruasakhir").val();
    var row                 = $("#rowdamija").val();
    var lbrperkerasan       = $("#lebarperkerasan").val();
    var tppermukaan         = $("#tppermukaan").select2('data')[0].text;
    var kondisijalan        = $("#kondisijalan").val();
    var asalusul            = $("#asalusuljalan").select2('data')[0].text;
    var asalusullainnya     = $("#aslusullainnyajalan").val();
    var dataawal            = "";
    var hargaperbahan       = "";
    var nilaipasar          = toAngka($("#nilaiperolehanjalan").val());
    var nilaibaru           = toAngka($("#nilaiperolehanjalan").val());

    var nilaiperolehan      = toAngka($("#nilaiperolehanjalan").val());
    var keterangan          = $("#keteranganjalan").val();


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
            url: "./controller/pencarian_aset/jalan/jalan_ubah.php",
            data:{
                kj: kodejalan, 1: kodebarang, 2: kodelokasi, 3: jenisjalan, 4: namajalan, 5: namapangkalruas, 
                6: namaujungruas, 7: tpengenalpangkal, 8: tpengenalujung, 9: tahunperolehan, 10: tahunpembuatan,
                11: panjangruas, 12: kmruasawal, 13: kmruasakhir, 14: row, 15: lbrperkerasan,
                16: tppermukaan, 18: kondisijalan, 19: asalusul, 20: asalusullainnya, 21: dataawal, 22: hargaperbahan, 23: nilaipasar,
                24: nilaiperolehan, 25: nilaibaru, 26: keterangan, 27: penanggungjawab, 28: lokasipjawab,
                29: surveyor, 30: tanggalsurvei, 31: matauang, 32: satuankerja, 33: kodepemilik,
                34: noregister, 35: entryuser
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Jalan Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            aj.cancel();
        });
    }
}

aj.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jalan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_jalan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','aj.cancel()');
        $("#asetsaveubah").attr('onclick','aj.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
    fdu.prepare();

    // Replace Data Barang
    $("#fdu_kodebarang").val(aj.dataAllFromId().KodeBarang);
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: aj.dataAllFromId().KodeBarang
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
            1: aj.dataAllFromId().KodePemilik
        }
    }).done(function(data){
        $('#fdu_kepemilikan').empty().append('<option selected value='+aj.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
    })

    //Replace Data Utama
    $("#fdu_penanggungjawab").val(aj.dataAllFromId().PenanggungJawab);
    $("#fdu_lokasipenanggungjawab").val(aj.dataAllFromId().LokasiPenanggungJawab);
    $("#fdu_noregister").val(aj.dataAllFromId().NoReg);
    // $("#fdu_currency").val(aj.dataAllFromId().MataUang);
    $('#fdu_currency').empty().append('<option selected value='+aj.dataAllFromId().MataUang+'>'+aj.dataAllFromId().MataUang+'</option>');

    //Replace Tanggal Survei
    var tanggalsur = aj.dataAllFromId().TglSurvey;
    var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

    var datepick = $("#fdu_tanggalsurvei input");
    datepick.datepicker({
            format: 'dd MM yyyy',
            language: 'id'
        });
    datepick.datepicker('setDate', tanggalrepl);
    
    //Replace Surveyor
    $("#fdu_surveyor").val(aj.dataAllFromId().Surveyor);

    //Replace Detail Jalan======================================================
    //Replace Golongan Jalan
    $('#jenisjalan').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jalan/select_jenisjalan.php',
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
        $('#jenisjalan').empty().append('<option selected value='+aj.dataAllFromId().JenisJalan+'>'+aj.dataAllFromId().JenisJalan+'</option>');
    },500)

    //Replace Nama Jalan
    $("#namajalan").val(aj.dataAllFromId().NamaJalan);

    //Replace Luas Tanah
    $("#luastanah").val(aj.dataAllFromId().LuasTanah);

    //Replace Pangkal Ruas
    $("#namapangkalruas").val(aj.dataAllFromId().NamaPangkalRuas);

    //Replace Ujung Ruas
    $("#namaujungruas").val(aj.dataAllFromId().NamaUjungRuas);  

    //Replace Tahun Perolehan dan Pembuatan
    $("#tahunperolehan").val(aj.dataAllFromId().TahunPerolehan);
    $("#tahunpembuatan").val(aj.dataAllFromId().TahunPembuatan);

    $("#panjangruasjalan").val(aj.dataAllFromId().PanjangRuas);
    $("#ruasawal").val(aj.dataAllFromId().KilometerRuasAwal);
    $("#ruasakhir").val(aj.dataAllFromId().KilometerRuasAkhir);

    $("#rowdamija").val(aj.dataAllFromId().ROW);
    $("#lebarperkerasan").val(aj.dataAllFromId().LebarPerkerasan);

    //Replace Tipe Permukaan
    $('#tppermukaan').select2({
        placeholder: 'Pilih Tipe Permukaan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jalan/select_tipepermukaan.php',
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
        $('#tppermukaan').empty().append('<option selected value='+aj.dataAllFromId().TipePermukaan+'>'+aj.dataAllFromId().TipePermukaan+'</option>');
    },500);

    //Replace Kondisi Jalan
    $("#kondisijalan").val(aj.dataAllFromId().KondisiJalan);

    //Replace Asal-Usul
    $('#asalusuljalan').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jalan/select_asalusul.php',
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
        $('#asalusuljalan').empty().append('<option selected value='+aj.dataAllFromId().AsalUsul+'>'+aj.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#aslusul").val(aj.dataAllFromId().AsalUsulLainnya);

    //Replace Nilai Perolehan
    $('#nilaiperolehanjalan').css("font-weight","bold");
    $('#nilaiperolehanjalan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanjalan").val(aj.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganjalan").val(aj.dataAllFromId().Keterangan);
}

aj.hapus = function(n){
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
                url: 'controller/pencarian_aset/jalan/jalan_hapus.php',
                data:{kodeJalan:n}
            }).done(function(data){
                $("#DataTableAsetJalan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetJalan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

aj.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jalan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','aj.cancel()');
        $("#asetsavemutasi").attr('onclick','aj.mutasiSimpan("'+n+'")');
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
            1: aj.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(aj.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: aj.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        aj.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Jalan</th><th>Panjng&nbsp;(Km)</th><th>Lebar&nbsp;(M)</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Pembuatan</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+aj.dataAllFromId().KodeJalan+'</td><td>'+aj.dataAllFromId().KodeBarang+'</td><td>'+aj.dataAllFromId().JenisJalan+'</td><td>'+aj.NmBarangRow()+'</td><td>'+aj.dataAllFromId().PanjangRuas+'</td><td>'+aj.dataAllFromId().LebarPerkerasan+'</td><td>'+toRpp(aj.dataAllFromId().NilaiPerolehan)+'</td><td>'+aj.dataAllFromId().NoReg+'</td><td>'+aj.dataAllFromId().TahunPembuatan+'</td><td>'+aj.dataAllFromId().TahunPerolehan+'</td><td>'+aj.dataAllFromId().AsalUsul+'</td><td>'+aj.dataAllFromId().KondisiJalan+'</td></tr>');
    
    })   
}

aj.mutasiSimpan = function(){
    var kodejalan       = aj.dataAllFromId().KodeJalan;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = aj.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = aj.dataAllFromId().NilaiPerolehan;
    var kodebidang      = aj.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = aj.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/jalan/jalan_mutasi.php",
                    data:{
                        1: kodejalan, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
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
                    aj.cancel();
                });
            }else{
                $("#DataTableAsetJalan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

aj.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jalan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','aj.cancel()');
        $("#asetsavepenghapusan").attr('onclick','aj.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: aj.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(aj.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: aj.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        aj.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Jalan</th><th>Panjng&nbsp;(Km)</th><th>Lebar&nbsp;(M)</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Pembuatan</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+aj.dataAllFromId().KodeJalan+'</td><td>'+aj.dataAllFromId().KodeBarang+'</td><td>'+aj.dataAllFromId().JenisJalan+'</td><td>'+aj.NmBarangRow()+'</td><td>'+aj.dataAllFromId().PanjangRuas+'</td><td>'+aj.dataAllFromId().LebarPerkerasan+'</td><td>'+toRpp(aj.dataAllFromId().NilaiPerolehan)+'</td><td>'+aj.dataAllFromId().NoReg+'</td><td>'+aj.dataAllFromId().TahunPembuatan+'</td><td>'+aj.dataAllFromId().TahunPerolehan+'</td><td>'+aj.dataAllFromId().AsalUsul+'</td><td>'+aj.dataAllFromId().KondisiJalan+'</td></tr>');
    
    })  
}

aj.penghapusanSimpan = function(){
    var kode       = aj.dataAllFromId().KodeJalan;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = aj.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = aj.dataAllFromId().NilaiPerolehan;
    var kodebidang      = aj.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = aj.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/jalan/jalan_penghapusan.php",
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
                    aj.cancel();
                }); 
            }else{
                $("#DataTableAsetJalan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

aj.ajaxGetDataJalan = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetJalan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/jalan/jalan_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetJalan-error").html("");
                $("#DataTableAsetJalan").append('<tbody class="DataTableAsetJalan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetJalan_processing").css("display","none");
            },
            complete: function() {
            }
        },
        "order": [[ 0, 'asc' ]],
        "sScrollY": 400, //height
        "sScrollX": "100%",
        "columnDefs": [ 
            { 
                targets: [6],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return formatNumber(data);  
                }
            },
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
                targets: [13],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return kondisipersentase(data);  
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
    aj.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetJalan' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetJalan-'+moment().format("DD-MM-YYYY");
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

aj.clickRow = function(){
    var table = $('#DataTableAsetJalan').DataTable();
    $('#DataTableAsetJalan tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','aj.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','aj.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','aj.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','aj.penghapusan("'+data[0]+'")');
            aj.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    aj.prepareAll();
});
