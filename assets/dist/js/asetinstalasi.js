var instalasi = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

instalasi.prepareAll = function(){
    instalasi.ajaxGetDataBangunanInstalasi();
    
}

instalasi.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/instalasi/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        instalasi.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

instalasi.cancel = function(){
    //Table Grid
    $("#table_aset_bangunan_instalasi").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetBangunanInstalasi").DataTable().ajax.reload();
    
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
    $("#form_aset_bangunan_instalasi").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

instalasi.ubahSimpan = function(id){
    var kodeinst        = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golinstalasi    = $("#golinstalasi").select2('data')[0].text;
    var nminstalasi     = $("#namainstalasi").val();
    var letak           = $("#alamatinstalasi").val();
    var tahunperolehan  = $("#tahunperolehaninst").val();
    var kondisi         = $("#kondisibangunaninst").val();
    var bahan           = $("#bahanbangunaninst").val();
    var panjang         = $("#panjangbangunaninst").val();
    var lebar           = $("#lebarbangunaninst").val();
    var tinggi          = $("#tinggibangunaninst").val();
    var fasilitaspenun  = $("#fasilitasbangunaninst").val();
    var asalusul        = $("#asalusulinst").select2('data')[0].text;
    var asalusullainnya = $("#asalusulinstlainnya").val();
    var nilaiperolehan  = toAngka($("#nilaiperolehaninst").val());
    var keterangan      = $("#keteranganinst").val();

    var tahunpembuatan  = "";
    var konstruksi      = "";
    var dataawal        = "";
    var nilaiperm2      = "";
    var nilaipasar      = "";
    var nilaibaru       = "";

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
                url: "./controller/pencarian_aset/instalasi/instalasi_ubah.php",
                data:{
                    kode: kodeinst, 1: kodebarang, 2: kodelokasi, 3: golinstalasi, 4: nminstalasi, 5: letak, 
                    6: tahunpembuatan, 7: tahunperolehan, 8: kondisi, 9: konstruksi, 10: bahan,
                    11: panjang, 12: lebar, 13: tinggi, 14: fasilitaspenun, 15: asalusul,
                    16: asalusullainnya, 17: dataawal, 18: nilaiperm2, 19: nilaiperolehan, 20: nilaipasar, 21: nilaibaru, 22: keterangan, 23: penanggungjawab,
                    24: lokasipjawab, 25: surveyor, 26: tanggalsurvei, 27: matauang, 28: satuankerja,
                    29: kodepemilik, 30: noregister, 31: status, 32: ketstatus, 33: entry, 34: entryuser
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Instalasi Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            instalasi.cancel();
        });
    }
}

instalasi.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan_instalasi").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_bangunan_instalasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','instalasi.cancel()');
        $("#asetsaveubah").attr('onclick','instalasi.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(instalasi.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: instalasi.dataAllFromId().KodeBarang
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
                1: instalasi.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+instalasi.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(instalasi.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(instalasi.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(instalasi.dataAllFromId().NoReg);
        // $("#fdu_currency").val(instalasi.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+instalasi.dataAllFromId().MataUang+'>'+instalasi.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = instalasi.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(instalasi.dataAllFromId().Surveyor);

    //Replace Detail Instalasi======================================================

    //Replace Golongan Instalasi
    $('#golinstalasi').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/instalasi/select_golonganinstalasi.php',
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
        $('#golinstalasi').empty().append('<option selected value='+instalasi.dataAllFromId().GolonganInstalasi+'>'+instalasi.dataAllFromId().GolonganInstalasi+'</option>');
    },500)

    //Replace Nama Bangunan Instalasi
    $("#namainstalasi").val(instalasi.dataAllFromId().NamaInstalasi);

    //Replace Letak B.Instalasi
    $("#alamatinstalasi").val(instalasi.dataAllFromId().Letak);

    //Replace Tahun Perolehan dan Pembuatan
    $("#tahunperolehaninst").val(instalasi.dataAllFromId().TahunPerolehan);
    $("#kondisibangunaninst").val(instalasi.dataAllFromId().Kondisi);
    $("#bahanbangunaninst").val(instalasi.dataAllFromId().Bahan);

    //Replace Panjang Instalasi
    $("#panjangbangunaninst").val(instalasi.dataAllFromId().Panjang);
    //Replace Lebar Instalasi
    $("#lebarbangunaninst").val(instalasi.dataAllFromId().Lebar);
    //Replace Tinggi Instalasi
    $("#tinggibangunaninst").val(instalasi.dataAllFromId().Tinggi);

    $("#fasilitasbangunaninst").val(instalasi.dataAllFromId().FasilitasPenunjang);

    //Replace Asal-Usul
    $('#asalusulinst').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/instalasi/select_asalusul.php',
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
        $('#asalusulinst').empty().append('<option selected value='+instalasi.dataAllFromId().AsalUsul+'>'+instalasi.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#asalusulinstlainnya").val(instalasi.dataAllFromId().AsalUsulLainnya);

    //Replace Nilai Perolehan
    $('#nilaiperolehaninst').css("font-weight","bold");
    $('#nilaiperolehaninst').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehaninst").val(instalasi.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganinst").val(instalasi.dataAllFromId().Keterangan);
}

instalasi.hapus = function(n){
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
                url: 'controller/pencarian_aset/instalasi/instalasi_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetBangunanInstalasi").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetBangunanInstalasi").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

instalasi.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan_instalasi").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','instalasi.cancel()');
        $("#asetsavemutasi").attr('onclick','instalasi.mutasiSimpan("'+n+'")');
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
            1: instalasi.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(instalasi.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: instalasi.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        instalasi.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Instalasi</th><th>Panjng&nbsp;(Km)</th><th>Lebar&nbsp;(M)</th><th>Tinggi&nbsp;(M)</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+instalasi.dataAllFromId().KodeInstalasi+'</td><td>'+instalasi.dataAllFromId().KodeBarang+'</td><td>'+instalasi.NmBarangRow()+'</td><td>'+instalasi.dataAllFromId().GolonganInstalasi+'</td><td>'+instalasi.dataAllFromId().Panjang+'</td><td>'+instalasi.dataAllFromId().Lebar+'</td><td>'+instalasi.dataAllFromId().Tinggi+'</td><td>'+toRpp(instalasi.dataAllFromId().NilaiPerolehan)+'</td><td>'+instalasi.dataAllFromId().NoReg+'</td><td>'+instalasi.dataAllFromId().TahunPerolehan+'</td><td>'+instalasi.dataAllFromId().AsalUsul+'</td><td>'+instalasi.dataAllFromId().Kondisi+'</td></tr>');
    
    })   
}

instalasi.mutasiSimpan = function(){
    var Kodeinstalasi   = instalasi.dataAllFromId().KodeInstalasi;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = instalasi.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = instalasi.dataAllFromId().NilaiPerolehan;
    var kodebidang      = instalasi.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = instalasi.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/instalasi/instalasi_mutasi.php",
                    data:{
                        1: Kodeinstalasi, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
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
                    instalasi.cancel();
                });
            }else{
                $("#DataTableAsetBangunanInstalasi").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

instalasi.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan_instalasi").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','instalasi.cancel()');
        $("#asetsavepenghapusan").attr('onclick','instalasi.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: instalasi.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(instalasi.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: instalasi.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        instalasi.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Instalasi</th><th>Panjng&nbsp;(Km)</th><th>Lebar&nbsp;(M)</th><th>Tinggi&nbsp;(M)</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+instalasi.dataAllFromId().KodeInstalasi+'</td><td>'+instalasi.dataAllFromId().KodeBarang+'</td><td>'+instalasi.NmBarangRow()+'</td><td>'+instalasi.dataAllFromId().GolonganInstalasi+'</td><td>'+instalasi.dataAllFromId().Panjang+'</td><td>'+instalasi.dataAllFromId().Lebar+'</td><td>'+instalasi.dataAllFromId().Tinggi+'</td><td>'+toRpp(instalasi.dataAllFromId().NilaiPerolehan)+'</td><td>'+instalasi.dataAllFromId().NoReg+'</td><td>'+instalasi.dataAllFromId().TahunPerolehan+'</td><td>'+instalasi.dataAllFromId().AsalUsul+'</td><td>'+instalasi.dataAllFromId().Kondisi+'</td></tr>');
    
    })  
}

instalasi.penghapusanSimpan = function(){
    var kode            = instalasi.dataAllFromId().KodeInstalasi;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = instalasi.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = instalasi.dataAllFromId().NilaiPerolehan;
    var kodebidang      = instalasi.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = instalasi.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/instalasi/instalasi_penghapusan.php",
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
                    instalasi.cancel();
                }); 
            }else{
                $("#DataTableAsetBangunanAir").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

instalasi.ajaxGetDataBangunanInstalasi = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetBangunanInstalasi").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/instalasi/instalasi_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetBangunanInstalasi-error").html("");
                $("#DataTableAsetBangunanInstalasi").append('<tbody class="DataTableAsetBangunanInstalasi-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetBangunanInstalasi_processing").css("display","none");
            },
            complete: function() {
            }
        },
        "order": [[ 0, 'asc' ]],
        "sScrollY": 400, //height
        "sScrollX": "100%",
        "columnDefs": [ 
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
                targets: [11],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return formatNumber(data);  
                }
            },
            { 
                targets: [17],
                
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
    instalasi.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetBangunanInstalasi' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetInstalasi-'+moment().format("DD-MM-YYYY");
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

instalasi.clickRow = function(){
    var table = $('#DataTableAsetBangunanInstalasi').DataTable();
    $('#DataTableAsetBangunanInstalasi tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','instalasi.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','instalasi.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','instalasi.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','instalasi.penghapusan("'+data[0]+'")');
            instalasi.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    instalasi.prepareAll();
});
