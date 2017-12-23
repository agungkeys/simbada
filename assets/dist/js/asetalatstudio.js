var studio = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

studio.prepareAll = function(){
    studio.ajaxGetDataStudio();
    
}

studio.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/alatstudio/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        studio.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

studio.cancel = function(){
    //Table Grid
    $("#table_aset_alatstudio").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatStudio").DataTable().ajax.reload();
    
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
    $("#form_aset_alatstudio").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

studio.ubahSimpan = function(id){
    var kodeastudio    = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golalatstudio    = $("#golonganalatstudio").select2('data')[0].text;
    var nmalatstudio     = $("#namabarangalatstudio").val();
    var mrkalatstudio    = $("#merkalatstudio").val();
    var tpalatstudio     = $("#tipealatstudio").val();
    var bhnalatstudio    = $("#bahanalatstudio").val();
    var thperolehanalatstudio    = $("#tahunperolehanalatstudio").val();
    var ukalatstudio     = $("#ukuranalatstudio").val();
    var jmlalatstudio    = $("#jumlahalatstudio").val();
    var konalatstudio    = $("#kondisialatstudio").val();
    var asalusulalatstudio       = $("#asalusulalatstudio").select2('data')[0].text;
    var nilaiperolehan   = toAngka($("#nilaiperolehanalatstudio").val());
    var keterangan       = $("#keteranganalatstudio").val();

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
                url: "./controller/pencarian_aset/alatstudio/alatstudio_ubah.php",
                data:{
                    kode: kodeastudio, 1: kodebarang, 2: kodelokasi, 3: golalatstudio, 4: nmalatstudio, 
                    5: mrkalatstudio, 6: tpalatstudio, 7: bhnalatstudio, 8: thperolehanalatstudio, 
                    9: ukalatstudio, 10: jmlalatstudio, 11: konalatstudio, 12: asalusulalatstudio, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Bengkel Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            studio.cancel();
        });
    }
}

studio.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatstudio").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatstudio").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','studio.cancel()');
        $("#asetsaveubah").attr('onclick','studio.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(studio.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: studio.dataAllFromId().KodeBarang
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
                1: studio.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+studio.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(studio.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(studio.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(studio.dataAllFromId().NoReg);
        // $("#fdu_currency").val(studio.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+studio.dataAllFromId().MataUang+'>'+studio.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = studio.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(studio.dataAllFromId().Surveyor);

    //Replace Detail Bengkel======================================================

    //Replace Golongan Bengkel
    $('#golonganalatstudio').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatstudio/select_golonganalatstudio.php',
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
        $('#golonganalatstudio').empty().append('<option selected value='+studio.dataAllFromId().GolonganAlatStudio+'>'+studio.dataAllFromId().GolonganAlatStudio+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namabarangalatstudio").val(studio.dataAllFromId().NamaBarang);

    //Replace Tahun Perolehan dan Pembuatan
    $("#merkalatstudio").val(studio.dataAllFromId().Merk);
    $("#tipealatstudio").val(studio.dataAllFromId().Tipe);
    $("#bahanalatstudio").val(studio.dataAllFromId().Bahan);
    $("#ukuranalatstudio").val(studio.dataAllFromId().Ukuran);
    $("#jumlahalatstudio").val(studio.dataAllFromId().Jumlah);

    $("#tahunperolehanalatstudio").val(studio.dataAllFromId().TahunPerolehan);

    $("#kondisialatstudio").val(studio.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusulalatstudio').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatstudio/select_asalusul.php',
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
        $('#asalusulalatstudio').empty().append('<option selected value='+studio.dataAllFromId().AsalUsul+'>'+studio.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehanalatstudio').css("font-weight","bold");
    $('#nilaiperolehanalatstudio').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanalatstudio").val(studio.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganalatstudio").val(studio.dataAllFromId().Keterangan);
}

studio.hapus = function(n){
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
                url: 'controller/pencarian_aset/alatstudio/alatstudio_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatStudio").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatStudio").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

studio.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatstudio").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','studio.cancel()');
        $("#asetsavemutasi").attr('onclick','studio.mutasiSimpan("'+n+'")');
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
            1: studio.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(studio.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: studio.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        studio.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Studio</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+studio.dataAllFromId().KodeAlatStudio+'</td><td>'+studio.dataAllFromId().KodeBarang+'</td><td>'+studio.NmBarangRow()+'</td><td>'+studio.dataAllFromId().GolonganAlatStudio+'</td><td>'+studio.dataAllFromId().Merk+'</td><td>'+studio.dataAllFromId().Tipe+'</td><td>'+studio.dataAllFromId().Bahan+'</td><td>'+studio.dataAllFromId().Ukuran+'</td><td>'+studio.dataAllFromId().Jumlah+'</td><td>'+toRpp(studio.dataAllFromId().NilaiPerolehan)+'</td><td>'+studio.dataAllFromId().NoReg+'</td><td>'+studio.dataAllFromId().TahunPerolehan+'</td><td>'+studio.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(studio.dataAllFromId().Kondisi)+'</td></tr>');
    
    })   
}

studio.mutasiSimpan = function(){
    var kodeastudio  = studio.dataAllFromId().KodeAlatStudio;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = studio.dataAllFromId().KodeBarang;
    var jumlah          = studio.dataAllFromId().Jumlah;
    var harga           = studio.dataAllFromId().NilaiPerolehan;
    var kodebidang      = studio.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = studio.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatstudio/alatstudio_mutasi.php",
                    data:{
                        1: kodeastudio, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Bengkel Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    studio.cancel();
                });
            }else{
                $("#DataTableAsetAlatStudio").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

studio.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatstudio").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','studio.cancel()');
        $("#asetsavepenghapusan").attr('onclick','studio.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: studio.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(studio.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: studio.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        studio.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Studio</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+studio.dataAllFromId().KodeAlatStudio+'</td><td>'+studio.dataAllFromId().KodeBarang+'</td><td>'+studio.NmBarangRow()+'</td><td>'+studio.dataAllFromId().GolonganAlatStudio+'</td><td>'+studio.dataAllFromId().Merk+'</td><td>'+studio.dataAllFromId().Tipe+'</td><td>'+studio.dataAllFromId().Bahan+'</td><td>'+studio.dataAllFromId().Ukuran+'</td><td>'+studio.dataAllFromId().Jumlah+'</td><td>'+toRpp(studio.dataAllFromId().NilaiPerolehan)+'</td><td>'+studio.dataAllFromId().NoReg+'</td><td>'+studio.dataAllFromId().TahunPerolehan+'</td><td>'+studio.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(studio.dataAllFromId().Kondisi)+'</td></tr>');
    
    })  
}

studio.penghapusanSimpan = function(){
    var kode            = studio.dataAllFromId().KodeAlatStudio;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = studio.dataAllFromId().KodeBarang;
    var jumlah          = studio.dataAllFromId().Jumlah;
    var harga           = studio.dataAllFromId().NilaiPerolehan;
    var kodebidang      = studio.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = studio.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatstudio/alatstudio_penghapusan.php",
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
                    studio.cancel();
                }); 
            }else{
                $("#DataTableAsetDataTableAsetAlatStudio").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

studio.ajaxGetDataStudio = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatStudio").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/alatstudio/alatstudio_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatStudio-error").html("");
                $("#DataTableAsetAlatStudio").append('<tbody class="DataTableAsetAlatStudio-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatStudio").css("display","none");
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
    studio.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatStudio' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetAlatStudio-'+moment().format("DD-MM-YYYY");
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

studio.clickRow = function(){
    var table = $('#DataTableAsetAlatStudio').DataTable();
    $('#DataTableAsetAlatStudio tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','studio.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','studio.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','studio.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','studio.penghapusan("'+data[0]+'")');
            studio.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    studio.prepareAll();
});
