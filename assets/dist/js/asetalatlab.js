var laboratorium = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

laboratorium.prepareAll = function(){
    laboratorium.ajaxGetDataLab();
    
}

laboratorium.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/alatlab/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        laboratorium.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

laboratorium.cancel = function(){
    //Table Grid
    $("#table_aset_alatlaboratorium").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatLaboratorium").DataTable().ajax.reload();
    
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
    $("#form_aset_alatlaboratorium").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

laboratorium.ubahSimpan = function(id){
    var kodealab = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golalatlab       = $("#golonganalatlab").select2('data')[0].text;
    var nmalatlab        = $("#namabarangalatlab").val();
    var mrkalatlab       = $("#merkalatlab").val();
    var tpalatlab        = $("#tipealatlab").val();
    var bhnalatlab       = $("#bahanalatlab").val();
    var thperolehanalatlab  = $("#tahunperolehanalatlab").val();
    var ukalatlab        = $("#ukuranalatlab").val();
    var jmlalatlab       = $("#jumlahalatlab").val();
    var konalatlab       = $("#kondisialatlab").val();
    var asalusulalatlab  = $("#asalusulalatlab").select2('data')[0].text;
    var nilaiperolehan   = toAngka($("#nilaiperolehanalatlab").val());
    var keterangan       = $("#keteranganalatlab").val();


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
                url: "./controller/pencarian_aset/alatlab/alatlab_ubah.php",
                data:{
                    kode: kodealab, 1: kodebarang, 2: kodelokasi, 3: golalatlab, 4: nmalatlab, 
                    5: mrkalatlab, 6: tpalatlab, 7: bhnalatlab, 8: thperolehanalatlab, 
                    9: ukalatlab, 10: jmlalatlab, 11: konalatlab, 12: asalusulalatlab, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Laboratorium Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            laboratorium.cancel();
        });
    }
}

laboratorium.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatlaboratorium").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatlaboratorium").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','laboratorium.cancel()');
        $("#asetsaveubah").attr('onclick','laboratorium.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(laboratorium.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: laboratorium.dataAllFromId().KodeBarang
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
                1: laboratorium.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+laboratorium.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(laboratorium.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(laboratorium.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(laboratorium.dataAllFromId().NoReg);
        // $("#fdu_currency").val(laboratorium.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+laboratorium.dataAllFromId().MataUang+'>'+laboratorium.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = laboratorium.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(laboratorium.dataAllFromId().Surveyor);

    //Replace Detail Laboratorium======================================================

    //Replace Golongan Laboratorium
    $('#golonganalatlab').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatlab/select_golonganalatlab.php',
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
        $('#golonganalatlab').empty().append('<option selected value='+laboratorium.dataAllFromId().GolonganAlatLab+'>'+laboratorium.dataAllFromId().GolonganAlatLab+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namabarangalatlab").val(laboratorium.dataAllFromId().NamaBarang);

    //Replace Tahun Perolehan dan Pembuatan
    $("#merkalatlab").val(laboratorium.dataAllFromId().Merk);
    $("#tipealatlab").val(laboratorium.dataAllFromId().Tipe);
    $("#bahanalatlab").val(laboratorium.dataAllFromId().Bahan);
    $("#ukuranalatlab").val(laboratorium.dataAllFromId().Ukuran);
    $("#jumlahalatlab").val(laboratorium.dataAllFromId().Jumlah);

    $("#tahunperolehanalatlab").val(laboratorium.dataAllFromId().TahunPerolehan);

    $("#kondisialatlab").val(laboratorium.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusulalatlab').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatlab/select_asalusul.php',
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
        $('#asalusulalatlab').empty().append('<option selected value='+laboratorium.dataAllFromId().AsalUsul+'>'+laboratorium.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehanalatlab').css("font-weight","bold");
    $('#nilaiperolehanalatlab').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanalatlab").val(laboratorium.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganalatlab").val(laboratorium.dataAllFromId().Keterangan);
}

laboratorium.hapus = function(n){
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
                url: 'controller/pencarian_aset/alatlab/alatlab_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatLaboratorium").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatLaboratorium").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

laboratorium.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatlaboratorium").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','laboratorium.cancel()');
        $("#asetsavemutasi").attr('onclick','laboratorium.mutasiSimpan("'+n+'")');
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
            1: laboratorium.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(laboratorium.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: laboratorium.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        laboratorium.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Laboratorium</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+laboratorium.dataAllFromId().KodeAlatLab+'</td><td>'+laboratorium.dataAllFromId().KodeBarang+'</td><td>'+laboratorium.NmBarangRow()+'</td><td>'+laboratorium.dataAllFromId().GolonganAlatLab+'</td><td>'+laboratorium.dataAllFromId().Merk+'</td><td>'+laboratorium.dataAllFromId().Tipe+'</td><td>'+laboratorium.dataAllFromId().Bahan+'</td><td>'+laboratorium.dataAllFromId().Ukuran+'</td><td>'+laboratorium.dataAllFromId().Jumlah+'</td><td>'+toRpp(laboratorium.dataAllFromId().NilaiPerolehan)+'</td><td>'+laboratorium.dataAllFromId().NoReg+'</td><td>'+laboratorium.dataAllFromId().TahunPerolehan+'</td><td>'+laboratorium.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(laboratorium.dataAllFromId().Kondisi)+'</td></tr>');
    
    })   
}

laboratorium.mutasiSimpan = function(){
    var kodealab  = laboratorium.dataAllFromId().KodeAlatLab;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = laboratorium.dataAllFromId().KodeBarang;
    var jumlah          = laboratorium.dataAllFromId().Jumlah;
    var harga           = laboratorium.dataAllFromId().NilaiPerolehan;
    var kodebidang      = laboratorium.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = laboratorium.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatlab/alatlab_mutasi.php",
                    data:{
                        1: kodealab, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Laboratorium Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    laboratorium.cancel();
                });
            }else{
                $("#DataTableAsetAlatLaboratorium").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

laboratorium.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatlaboratorium").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','laboratorium.cancel()');
        $("#asetsavepenghapusan").attr('onclick','laboratorium.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: laboratorium.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(laboratorium.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: laboratorium.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        laboratorium.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Laboratorium</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+laboratorium.dataAllFromId().KodeAlatLab+'</td><td>'+laboratorium.dataAllFromId().KodeBarang+'</td><td>'+laboratorium.NmBarangRow()+'</td><td>'+laboratorium.dataAllFromId().GolonganAlatLab+'</td><td>'+laboratorium.dataAllFromId().Merk+'</td><td>'+laboratorium.dataAllFromId().Tipe+'</td><td>'+laboratorium.dataAllFromId().Bahan+'</td><td>'+laboratorium.dataAllFromId().Ukuran+'</td><td>'+laboratorium.dataAllFromId().Jumlah+'</td><td>'+toRpp(laboratorium.dataAllFromId().NilaiPerolehan)+'</td><td>'+laboratorium.dataAllFromId().NoReg+'</td><td>'+laboratorium.dataAllFromId().TahunPerolehan+'</td><td>'+laboratorium.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(laboratorium.dataAllFromId().Kondisi)+'</td></tr>');
    
    })  
}

laboratorium.penghapusanSimpan = function(){
    var kode            = laboratorium.dataAllFromId().KodeAlatLab;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = laboratorium.dataAllFromId().KodeBarang;
    var jumlah          = laboratorium.dataAllFromId().Jumlah;
    var harga           = laboratorium.dataAllFromId().NilaiPerolehan;
    var kodebidang      = laboratorium.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = laboratorium.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatlab/alatlab_penghapusan.php",
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
                    laboratorium.cancel();
                }); 
            }else{
                $("#DataTableAsetAlatLaboratorium").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

laboratorium.ajaxGetDataLab = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatLaboratorium").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/alatlab/alatlab_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatLaboratorium-error").html("");
                $("#DataTableAsetAlatLaboratorium").append('<tbody class="DataTableAsetAlatLaboratorium-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatLaboratorium").css("display","none");
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
    laboratorium.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatLaboratorium' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetAlatLaboratorium-'+moment().format("DD-MM-YYYY");
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

laboratorium.clickRow = function(){
    var table = $('#DataTableAsetAlatLaboratorium').DataTable();
    $('#DataTableAsetAlatLaboratorium tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','laboratorium.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','laboratorium.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','laboratorium.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','laboratorium.penghapusan("'+data[0]+'")');
            laboratorium.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    laboratorium.prepareAll();
});
