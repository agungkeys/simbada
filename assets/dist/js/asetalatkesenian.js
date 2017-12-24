var kesenian = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

kesenian.prepareAll = function(){
    kesenian.ajaxGetDataKesenian();
    
}

kesenian.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/kesenian/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        kesenian.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

kesenian.cancel = function(){
    //Table Grid
    $("#table_aset_alatkesenian").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatKesenian").DataTable().ajax.reload();
    
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
    $("#form_aset_alatkesenian").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

kesenian.ubahSimpan = function(id){
    var kodeakesenian = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golkesenian       = $("#golongankesenian").select2('data')[0].text;
    var nmkesenian        = $("#namabarangkesenian").val();
    var mrkkesenian       = $("#merkkesenian").val();
    var tpkesenian        = $("#tipekesenian").val();
    var bhnkesenian       = $("#bahankesenian").val();
    var thperolehankesenian  = $("#tahunperolehankesenian").val();
    var ukkesenian        = $("#ukurankesenian").val();
    var jmlkesenian       = $("#jumlahkesenian").val();
    var konkesenian       = $("#kondisikesenian").val();
    var asalusulkesenian  = $("#asalusulkesenian").select2('data')[0].text;
    var nilaiperolehan   = toAngka($("#nilaiperolehankesenian").val());
    var keterangan       = $("#keterangankesenian").val();

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
                url: "./controller/pencarian_aset/kesenian/kesenian_ubah.php",
                data:{
                    kode: kodeakesenian, 1: kodebarang, 2: kodelokasi, 3: golkesenian, 4: nmkesenian, 
                    5: mrkkesenian, 6: tpkesenian, 7: bhnkesenian, 8: thperolehankesenian, 
                    9: ukkesenian, 10: jmlkesenian, 11: konkesenian, 12: asalusulkesenian, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser  
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Kesenian Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            kesenian.cancel();
        });
    }
}

kesenian.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkesenian").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatkesenian").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','kesenian.cancel()');
        $("#asetsaveubah").attr('onclick','kesenian.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(kesenian.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: kesenian.dataAllFromId().KodeBarang
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
                1: kesenian.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+kesenian.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(kesenian.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(kesenian.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(kesenian.dataAllFromId().NoReg);
        // $("#fdu_currency").val(kesenian.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+kesenian.dataAllFromId().MataUang+'>'+kesenian.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = kesenian.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(kesenian.dataAllFromId().Surveyor);

    //Replace Detail Kesenian======================================================

    //Replace Golongan Kesenian
    $('#golongankesenian').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/kesenian/select_golongankesenian.php',
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
        $('#golongankesenian').empty().append('<option selected value='+kesenian.dataAllFromId().GolonganBarangKesenian+'>'+kesenian.dataAllFromId().GolonganBarangKesenian+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namabarangkesenian").val(kesenian.dataAllFromId().NamaBarang);

    //Replace Tahun Perolehan dan Pembuatan
    $("#merkkesenian").val(kesenian.dataAllFromId().Merk);
    $("#tipekesenian").val(kesenian.dataAllFromId().Tipe);
    $("#bahankesenian").val(kesenian.dataAllFromId().Bahan);
    $("#ukurankesenian").val(kesenian.dataAllFromId().Ukuran);
    $("#jumlahkesenian").val(kesenian.dataAllFromId().Jumlah);

    $("#tahunperolehankesenian").val(kesenian.dataAllFromId().TahunPerolehan);

    $("#kondisikesenian").val(kesenian.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusulkesenian').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/kesenian/select_asalusul.php',
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
        $('#asalusulkesenian').empty().append('<option selected value='+kesenian.dataAllFromId().AsalUsul+'>'+kesenian.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehankesenian').css("font-weight","bold");
    $('#nilaiperolehankesenian').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehankesenian").val(kesenian.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keterangankesenian").val(kesenian.dataAllFromId().Keterangan);
}

kesenian.hapus = function(n){
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
                url: 'controller/pencarian_aset/kesenian/kesenian_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatKesenian").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatKesenian").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

kesenian.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkesenian").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','kesenian.cancel()');
        $("#asetsavemutasi").attr('onclick','kesenian.mutasiSimpan("'+n+'")');
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
            1: kesenian.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(kesenian.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: kesenian.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        kesenian.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Kesenian</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+kesenian.dataAllFromId().KodeBarangKesenian+'</td><td>'+kesenian.dataAllFromId().KodeBarang+'</td><td>'+kesenian.NmBarangRow()+'</td><td>'+kesenian.dataAllFromId().GolonganBarangKesenian+'</td><td>'+kesenian.dataAllFromId().Merk+'</td><td>'+kesenian.dataAllFromId().Tipe+'</td><td>'+kesenian.dataAllFromId().Bahan+'</td><td>'+kesenian.dataAllFromId().Ukuran+'</td><td>'+kesenian.dataAllFromId().Jumlah+'</td><td>'+toRpp(kesenian.dataAllFromId().NilaiPerolehan)+'</td><td>'+kesenian.dataAllFromId().NoReg+'</td><td>'+kesenian.dataAllFromId().TahunPerolehan+'</td><td>'+kesenian.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(kesenian.dataAllFromId().Kondisi)+'</td></tr>');
    
    })   
}

kesenian.mutasiSimpan = function(){
    var kodeakesenian  = kesenian.dataAllFromId().KodeBarangKesenian;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = kesenian.dataAllFromId().KodeBarang;
    var jumlah          = kesenian.dataAllFromId().Jumlah;
    var harga           = kesenian.dataAllFromId().NilaiPerolehan;
    var kodebidang      = kesenian.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = kesenian.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/kesenian/kesenian_mutasi.php",
                    data:{
                        1: kodeakesenian, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Kesenian Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    kesenian.cancel();
                });
            }else{
                $("#DataTableAsetAlatKesenian").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

kesenian.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkesenian").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','kesenian.cancel()');
        $("#asetsavepenghapusan").attr('onclick','kesenian.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: kesenian.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(kesenian.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: kesenian.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        kesenian.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Kesenian</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+kesenian.dataAllFromId().KodeBarangKesenian+'</td><td>'+kesenian.dataAllFromId().KodeBarang+'</td><td>'+kesenian.NmBarangRow()+'</td><td>'+kesenian.dataAllFromId().GolonganBarangKesenian+'</td><td>'+kesenian.dataAllFromId().Merk+'</td><td>'+kesenian.dataAllFromId().Tipe+'</td><td>'+kesenian.dataAllFromId().Bahan+'</td><td>'+kesenian.dataAllFromId().Ukuran+'</td><td>'+kesenian.dataAllFromId().Jumlah+'</td><td>'+toRpp(kesenian.dataAllFromId().NilaiPerolehan)+'</td><td>'+kesenian.dataAllFromId().NoReg+'</td><td>'+kesenian.dataAllFromId().TahunPerolehan+'</td><td>'+kesenian.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(kesenian.dataAllFromId().Kondisi)+'</td></tr>');
    
    })  
}

kesenian.penghapusanSimpan = function(){
    var kode            = kesenian.dataAllFromId().KodeBarangKesenian;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = kesenian.dataAllFromId().KodeBarang;
    var jumlah          = kesenian.dataAllFromId().Jumlah;
    var harga           = kesenian.dataAllFromId().NilaiPerolehan;
    var kodebidang      = kesenian.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = kesenian.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/kesenian/kesenian_penghapusan.php",
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
                    kesenian.cancel();
                }); 
            }else{
                $("#DataTableAsetAlatKesenian").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

kesenian.ajaxGetDataKesenian = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatKesenian").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/kesenian/kesenian_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatKesenian-error").html("");
                $("#DataTableAsetAlatKesenian").append('<tbody class="DataTableAsetAlatKesenian-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatKesenian").css("display","none");
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
    kesenian.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatKesenian' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetAlatKesenian-'+moment().format("DD-MM-YYYY");
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

kesenian.clickRow = function(){
    var table = $('#DataTableAsetAlatKesenian').DataTable();
    $('#DataTableAsetAlatKesenian tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','kesenian.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','kesenian.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','kesenian.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','kesenian.penghapusan("'+data[0]+'")');
            kesenian.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    kesenian.prepareAll();
});
