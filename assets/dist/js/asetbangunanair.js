var aair = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

aair.prepareAll = function(){
    aair.ajaxGetDataBangunanAir();
    
}

aair.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/air/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        aair.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

aair.cancel = function(){
    //Table Grid
    $("#table_aset_bangunan_air").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetBangunanAir").DataTable().ajax.reload();
    
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
    $("#form_aset_bangunan_air").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

aair.ubahSimpan = function(id){
    var kodebair        = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golbangunanair  = $("#golbangunanair").select2('data')[0].text;
    var nmbangunanair   = $("#namabangunanair").val();
    var letak           = $("#alamatbangunanair").val();
    var tahunperolehan  = $("#tahunperolehanair").val();
    var kondisi         = $("#kondisibangunanair").val();
    var bahan           = $("#bahanbangunanair").val();
    var panjang         = $("#panjangbangunanair").val();
    var lebar           = $("#lebarbangunanair").val();
    var tinggi          = $("#tinggibangunanair").val();
    var fasilitaspenun  = $("#fasilitasbangunanair").val();
    var asalusul        = $("#asalusulair").select2('data')[0].text;
    var asalusullainnya = $("#asalusulairlainnya").val();
    var nilaiperolehan  = toAngka($("#nilaiperolehanair").val());
    var keterangan      = $("#keteranganair").val();

    var konstruksi      = "";
    var dataawal        = "";
    var nilaiperm2      = "";
    var nilaipasar      = "";
    var nilaibaru       = "";
    var tahunpembuatan  = "";

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
                url: "./controller/pencarian_aset/air/air_ubah.php",
                data:{
                    kbair: kodebair, 1: kodebarang, 2: kodelokasi, 3: golbangunanair, 4: nmbangunanair, 5: letak, 
                    6: tahunperolehan, 7: tahunpembuatan, 8: kondisi, 9: konstruksi, 10: bahan,
                    11: panjang, 12: lebar, 13: tinggi, 14: fasilitaspenun, 15: asalusul,
                    16: asalusullainnya, 17: dataawal, 18: nilaiperm2, 19: nilaiperolehan, 20: nilaipasar, 21: nilaibaru, 22: keterangan, 23: penanggungjawab,
                    24: lokasipjawab, 25: surveyor, 26: tanggalsurvei, 27: matauang, 28: satuankerja,
                    29: kodepemilik, 30: noregister, 31: status, 32: ketstatus, 33: entry,
                    34: entryuser 
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Bangunan Air Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            aair.cancel();
        });
    }
}

aair.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan_air").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_bangunan_air").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','aair.cancel()');
        $("#asetsaveubah").attr('onclick','aair.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(aair.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: aair.dataAllFromId().KodeBarang
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
                1: aair.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+aair.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(aair.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(aair.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(aair.dataAllFromId().NoReg);
        // $("#fdu_currency").val(aair.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+aair.dataAllFromId().MataUang+'>'+aair.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = aair.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(aair.dataAllFromId().Surveyor);

    //Replace Detail Air======================================================

    //Replace Golongan Air
    $('#golbangunanair').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/air/select_golonganair.php',
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
        $('#golbangunanair').empty().append('<option selected value='+aair.dataAllFromId().GolonganBangunanAir+'>'+aair.dataAllFromId().GolonganBangunanAir+'</option>');
    },500)

    //Replace Nama Bangunan Air
    $("#namabangunanair").val(aair.dataAllFromId().NamaBangunanAir);

    //Replace Letak B.Air
    $("#alamatbangunanair").val(aair.dataAllFromId().Letak);

    //Replace Tahun Perolehan dan Pembuatan
    $("#tahunperolehanair").val(aair.dataAllFromId().TahunPerolehan);
    $("#kondisibangunanair").val(aair.dataAllFromId().Kondisi);
    $("#bahanbangunanair").val(aair.dataAllFromId().Bahan);

    //Replace Panjang Jalan
    $("#panjangbangunanair").val(aair.dataAllFromId().Panjang);
    //Replace Lebar Jalan
    $("#lebarbangunanair").val(aair.dataAllFromId().Lebar);
    //Replace Tinggi Jalan
    $("#tinggibangunanair").val(aair.dataAllFromId().Tinggi);

    $("#fasilitasbangunanair").val(aair.dataAllFromId().FasilitasPenunjang);

    //Replace Asal-Usul
    $('#asalusulair').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/air/select_asalusul.php',
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
        $('#asalusulair').empty().append('<option selected value='+aair.dataAllFromId().AsalUsul+'>'+aair.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#asalusulairlainnya").val(aair.dataAllFromId().AsalUsulLainnya);

    //Replace Nilai Perolehan
    $('#nilaiperolehanair').css("font-weight","bold");
    $('#nilaiperolehanair').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanair").val(aair.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganair").val(aair.dataAllFromId().Keterangan);
}

aair.hapus = function(n){
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
                url: 'controller/pencarian_aset/air/air_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetBangunanAir").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetBangunanAir").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

aair.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan_air").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','aair.cancel()');
        $("#asetsavemutasi").attr('onclick','aair.mutasiSimpan("'+n+'")');
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
            1: aair.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(aair.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: aair.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        aair.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Bangunan</th><th>Panjng&nbsp;(Km)</th><th>Lebar&nbsp;(M)</th><th>Tinggi&nbsp;(M)</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+aair.dataAllFromId().KodeBangunanAir+'</td><td>'+aair.dataAllFromId().KodeBarang+'</td><td>'+aair.NmBarangRow()+'</td><td>'+aair.dataAllFromId().GolonganBangunanAir+'</td><td>'+aair.dataAllFromId().Panjang+'</td><td>'+aair.dataAllFromId().Lebar+'</td><td>'+aair.dataAllFromId().Tinggi+'</td><td>'+toRpp(aair.dataAllFromId().NilaiPerolehan)+'</td><td>'+aair.dataAllFromId().NoReg+'</td><td>'+aair.dataAllFromId().TahunPerolehan+'</td><td>'+aair.dataAllFromId().AsalUsul+'</td><td>'+aair.dataAllFromId().Kondisi+'</td></tr>');
    
    })   
}

aair.mutasiSimpan = function(){
    var kodeair    = aair.dataAllFromId().KodeBangunanAir;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = aair.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = aair.dataAllFromId().NilaiPerolehan;
    var kodebidang      = aair.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = aair.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/air/air_mutasi.php",
                    data:{
                        1: kodeair, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
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
                    aair.cancel();
                });
            }else{
                $("#DataTableAsetBangunanAir").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

aair.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan_air").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','aair.cancel()');
        $("#asetsavepenghapusan").attr('onclick','aair.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: aair.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(aair.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: aair.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        aair.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Bangunan</th><th>Panjng&nbsp;(Km)</th><th>Lebar&nbsp;(M)</th><th>Tinggi&nbsp;(M)</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+aair.dataAllFromId().KodeBangunanAir+'</td><td>'+aair.dataAllFromId().KodeBarang+'</td><td>'+aair.NmBarangRow()+'</td><td>'+aair.dataAllFromId().GolonganBangunanAir+'</td><td>'+aair.dataAllFromId().Panjang+'</td><td>'+aair.dataAllFromId().Lebar+'</td><td>'+aair.dataAllFromId().Tinggi+'</td><td>'+toRpp(aair.dataAllFromId().NilaiPerolehan)+'</td><td>'+aair.dataAllFromId().NoReg+'</td><td>'+aair.dataAllFromId().TahunPerolehan+'</td><td>'+aair.dataAllFromId().AsalUsul+'</td><td>'+aair.dataAllFromId().Kondisi+'</td></tr>');
    
    })  
}

aair.penghapusanSimpan = function(){
    var kode            = aair.dataAllFromId().KodeBangunanAir;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = aair.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = aair.dataAllFromId().NilaiPerolehan;
    var kodebidang      = aair.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = aair.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/air/air_penghapusan.php",
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
                    aair.cancel();
                }); 
            }else{
                $("#DataTableAsetBangunanAir").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

aair.ajaxGetDataBangunanAir = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetBangunanAir").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/air/air_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetBangunanAir-error").html("");
                $("#DataTableAsetBangunanAir").append('<tbody class="DataTableAsetBangunanAir-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetBangunanAir_processing").css("display","none");
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
    aair.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetBangunanAir' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetBangunanAir-'+moment().format("DD-MM-YYYY");
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

aair.clickRow = function(){
    var table = $('#DataTableAsetBangunanAir').DataTable();
    $('#DataTableAsetBangunanAir tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','aair.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','aair.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','aair.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','aair.penghapusan("'+data[0]+'")');
            aair.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    aair.prepareAll();
});
