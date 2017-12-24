var hewan = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

hewan.prepareAll = function(){
    hewan.ajaxGetDataHewan();
    
}

hewan.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/hewan/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        hewan.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

hewan.cancel = function(){
    //Table Grid
    $("#table_aset_hewan").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetHewan").DataTable().ajax.reload();
    
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
    $("#form_aset_hewan").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

hewan.ubahSimpan = function(id){
    var kodehewan = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golhewan            = $("#golonganhewan").select2('data')[0].text;
    var jnhewan             = $("#jenishewan").val();
    var thperolehanhewan    = $("#tahunperolehanhewan").val();
    var klmnhewan           = $("#kelaminhewan").val();
    var jmlhewan            = $("#jumlahhewan").val();
    var konhewan            = $("#kondisihewan").val();
    var asalusulhewan       = $("#asalusulhewan").select2('data')[0].text;
    var nilaiperolehan   = toAngka($("#nilaiperolehanhewan").val());
    var keterangan       = $("#keteranganhewan").val();

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
                url: "./controller/pencarian_aset/hewan/hewan_ubah.php",
                data:{
                    kode: kodehewan, 1 : kodebarang, 2 : kodelokasi, 3 : golhewan, 4 : jnhewan, 
                    5 : thperolehanhewan, 6 : klmnhewan, 7 : jmlhewan, 8 : konhewan, 
                    9 : asalusulhewan, 10 : nilaiperolehan, 11 : keterangan, 
                    12 : penanggungjawab, 13 : lokasipjawab, 14 : surveyor, 
                    15 : tanggalsurvei, 16 : matauang, 17 : satuankerja, 
                    18 : kodepemilik, 19 : noregister, 20 : entryuser  
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Hewan Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            hewan.cancel();
        });
    }
}

hewan.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_hewan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_hewan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','hewan.cancel()');
        $("#asetsaveubah").attr('onclick','hewan.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(hewan.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: hewan.dataAllFromId().KodeBarang
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
                1: hewan.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+hewan.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(hewan.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(hewan.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(hewan.dataAllFromId().NoReg);
        // $("#fdu_currency").val(hewan.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+hewan.dataAllFromId().MataUang+'>'+hewan.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = hewan.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(hewan.dataAllFromId().Surveyor);

    //Replace Detail Hewan======================================================

    //Replace Golongan Hewan
    $('#golonganhewan').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/hewan/select_golonganhewan.php',
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
        $('#golonganhewan').empty().append('<option selected value='+hewan.dataAllFromId().GolonganHewan+'>'+hewan.dataAllFromId().GolonganHewan+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#jenishewan").val(hewan.dataAllFromId().JenisHewan);

    //Replace Tahun Perolehan dan Pembuatan
    $("#tahunperolehanhewan").val(hewan.dataAllFromId().TahunPerolehan);
    $("#kelaminhewan").val(hewan.dataAllFromId().JenisKelamin);
    $("#jumlahhewan").val(hewan.dataAllFromId().Jumlah);
    $("#kondisihewan").val(hewan.dataAllFromId().Kondisi);
    

    

    //Replace Asal-Usul
    $('#asalusulhewan').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/hewan/select_asalusul.php',
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
        $('#asalusulhewan').empty().append('<option selected value='+hewan.dataAllFromId().AsalUsul+'>'+hewan.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehanhewan').css("font-weight","bold");
    $('#nilaiperolehanhewan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanhewan").val(hewan.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganhewan").val(hewan.dataAllFromId().Keterangan);
}

hewan.hapus = function(n){
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
                url: 'controller/pencarian_aset/hewan/hewan_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetHewan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetHewan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

hewan.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_hewan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','hewan.cancel()');
        $("#asetsavemutasi").attr('onclick','hewan.mutasiSimpan("'+n+'")');
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
            1: hewan.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(hewan.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: hewan.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        hewan.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Hewan</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Hewan</th><th>Jenis&nbsp;Kelamin</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+hewan.dataAllFromId().KodeHewan+'</td><td>'+hewan.dataAllFromId().KodeBarang+'</td><td>'+hewan.NmBarangRow()+'</td><td>'+hewan.dataAllFromId().GolonganHewan+'</td><td>'+hewan.dataAllFromId().JenisKelamin+'</td><td>'+hewan.dataAllFromId().Jumlah+'</td><td>'+toRpp(hewan.dataAllFromId().NilaiPerolehan)+'</td><td>'+hewan.dataAllFromId().NoReg+'</td><td>'+hewan.dataAllFromId().TahunPerolehan+'</td><td>'+hewan.dataAllFromId().AsalUsul+'</td><td>'+hewan.dataAllFromId().Kondisi+'</td></tr>');
    
    })   
}

hewan.mutasiSimpan = function(){
    var kodehewan  = hewan.dataAllFromId().KodeHewan;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = hewan.dataAllFromId().KodeBarang;
    var jumlah          = hewan.dataAllFromId().Jumlah;
    var harga           = hewan.dataAllFromId().NilaiPerolehan;
    var kodebidang      = hewan.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = hewan.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/hewan/hewan_mutasi.php",
                    data:{
                        1: kodehewan, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Hewan Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    hewan.cancel();
                });
            }else{
                $("#DataTableAsetHewan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

hewan.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_hewan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','hewan.cancel()');
        $("#asetsavepenghapusan").attr('onclick','hewan.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: hewan.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(hewan.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: hewan.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        hewan.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Hewan</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Hewan</th><th>Jenis&nbsp;Kelamin</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+hewan.dataAllFromId().KodeHewan+'</td><td>'+hewan.dataAllFromId().KodeBarang+'</td><td>'+hewan.NmBarangRow()+'</td><td>'+hewan.dataAllFromId().GolonganHewan+'</td><td>'+hewan.dataAllFromId().JenisKelamin+'</td><td>'+hewan.dataAllFromId().Jumlah+'</td><td>'+toRpp(hewan.dataAllFromId().NilaiPerolehan)+'</td><td>'+hewan.dataAllFromId().NoReg+'</td><td>'+hewan.dataAllFromId().TahunPerolehan+'</td><td>'+hewan.dataAllFromId().AsalUsul+'</td><td>'+hewan.dataAllFromId().Kondisi+'</td></tr>');
    
    })  
}

hewan.penghapusanSimpan = function(){
    var kode            = hewan.dataAllFromId().KodeHewan;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = hewan.dataAllFromId().KodeBarang;
    var jumlah          = hewan.dataAllFromId().Jumlah;
    var harga           = hewan.dataAllFromId().NilaiPerolehan;
    var kodebidang      = hewan.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = hewan.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/hewan/hewan_penghapusan.php",
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
                    hewan.cancel();
                }); 
            }else{
                $("#DataTableAsetHewan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

hewan.ajaxGetDataHewan = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetHewan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/hewan/hewan_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetHewan-error").html("");
                $("#DataTableAsetHewan").append('<tbody class="DataTableAsetHewan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetHewan").css("display","none");
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
            // { 
            //     targets: [9],
            //     "render" : function( data, type, full ) {
            //         // you could prepend a dollar sign before returning, or do it
            //         // in the formatNumber method itself
            //         return kondisipersentase(data); 
            //     }
            // },
            { 
                targets: [11],
                
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
    hewan.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetHewan' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetHewan-'+moment().format("DD-MM-YYYY");
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

hewan.clickRow = function(){
    var table = $('#DataTableAsetHewan').DataTable();
    $('#DataTableAsetHewan tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','hewan.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','hewan.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','hewan.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','hewan.penghapusan("'+data[0]+'")');
            hewan.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    hewan.prepareAll();
});
