var tanaman = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

tanaman.prepareAll = function(){
    tanaman.ajaxGetDataTanaman();
    
}

tanaman.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/tanaman/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        tanaman.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

tanaman.cancel = function(){
    //Table Grid
    $("#table_aset_tanaman").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetTanaman").DataTable().ajax.reload();
    
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
    $("#form_aset_tanaman").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

tanaman.ubahSimpan = function(id){
    var kodetanaman = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var goltanaman            = $("#golongantanaman").select2('data')[0].text;
    var jntanaman             = $("#jenistanaman").val();
    var luastanaman           = $("#luastanaman").val();
    var jmltanaman            = $("#jumlahtanaman").val();
    var thperolehantanaman    = $("#tahunperolehantanaman").val();
    var kontanaman            = $("#kondisitanaman").val();
    var asalusultanaman       = $("#asalusultanaman").select2('data')[0].text;
    var nilaiperolehan        = toAngka($("#nilaiperolehantanaman").val());
    var keterangan            = $("#keterangantanaman").val();

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
                url: "./controller/pencarian_aset/tanaman/tanaman_ubah.php",
                data:{
                    kode: kodetanaman, 1: kodebarang, 2: kodelokasi, 3: goltanaman, 4: jntanaman, 
                    5: luastanaman, 6: jmltanaman, 7: thperolehantanaman, 
                    8: kontanaman, 9: asalusultanaman, 10: nilaiperolehan, 
                    11: keterangan, 12: penanggungjawab, 13: lokasipjawab, 
                    14: surveyor, 15: tanggalsurvei, 16: matauang, 17: satuankerja, 
                    18: kodepemilik, 19: noregister, 20: entryuser
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Hewan Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            tanaman.cancel();
        });
    }
}

tanaman.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_tanaman").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_tanaman").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','tanaman.cancel()');
        $("#asetsaveubah").attr('onclick','tanaman.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(tanaman.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: tanaman.dataAllFromId().KodeBarang
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
                1: tanaman.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+tanaman.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(tanaman.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(tanaman.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(tanaman.dataAllFromId().NoReg);
        // $("#fdu_currency").val(tanaman.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+tanaman.dataAllFromId().MataUang+'>'+tanaman.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = tanaman.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(tanaman.dataAllFromId().Surveyor);

    //Replace Detail Hewan======================================================

    //Replace Golongan Hewan
    $('#golongantanaman').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/tanaman/select_golongantanaman.php',
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
        $('#golongantanaman').empty().append('<option selected value='+tanaman.dataAllFromId().GolonganTanaman+'>'+tanaman.dataAllFromId().GolonganTanaman+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#jenistanaman").val(tanaman.dataAllFromId().JenisTanaman);

    //Replace Tahun Perolehan dan Pembuatan
    $("#tahunperolehantanaman").val(tanaman.dataAllFromId().TahunPerolehan);
    $("#luastanaman").val(tanaman.dataAllFromId().LuasTanam);
    $("#jumlahtanaman").val(tanaman.dataAllFromId().Jumlah);
    $("#kondisitanaman").val(tanaman.dataAllFromId().Kondisi);
    

    

    //Replace Asal-Usul
    $('#asalusultanaman').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/tanaman/select_asalusul.php',
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
        $('#asalusultanaman').empty().append('<option selected value='+tanaman.dataAllFromId().AsalUsul+'>'+tanaman.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehantanaman').css("font-weight","bold");
    $('#nilaiperolehantanaman').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehantanaman").val(tanaman.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keterangantanaman").val(tanaman.dataAllFromId().Keterangan);
}

tanaman.hapus = function(n){
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
                url: 'controller/pencarian_aset/tanaman/tanaman_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetTanaman").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetTanaman").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

tanaman.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_tanaman").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','tanaman.cancel()');
        $("#asetsavemutasi").attr('onclick','tanaman.mutasiSimpan("'+n+'")');
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
            1: tanaman.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(tanaman.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: tanaman.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        tanaman.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Tanaman</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Tanaman</th><th>Jenis&nbsp;Kelamin</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+tanaman.dataAllFromId().KodeTanaman+'</td><td>'+tanaman.dataAllFromId().KodeBarang+'</td><td>'+tanaman.NmBarangRow()+'</td><td>'+tanaman.dataAllFromId().GolonganTanaman+'</td><td>'+tanaman.dataAllFromId().JenisKelamin+'</td><td>'+tanaman.dataAllFromId().Jumlah+'</td><td>'+toRpp(tanaman.dataAllFromId().NilaiPerolehan)+'</td><td>'+tanaman.dataAllFromId().NoReg+'</td><td>'+tanaman.dataAllFromId().TahunPerolehan+'</td><td>'+tanaman.dataAllFromId().AsalUsul+'</td><td>'+tanaman.dataAllFromId().Kondisi+'</td></tr>');
    
    })   
}

tanaman.mutasiSimpan = function(){
    var kodetanaman  = tanaman.dataAllFromId().KodeTanaman;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = tanaman.dataAllFromId().KodeBarang;
    var jumlah          = tanaman.dataAllFromId().Jumlah;
    var harga           = tanaman.dataAllFromId().NilaiPerolehan;
    var kodebidang      = tanaman.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = tanaman.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/tanaman/tanaman_mutasi.php",
                    data:{
                        1: kodetanaman, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Tanaman Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    tanaman.cancel();
                });
            }else{
                $("#DataTableAsetTanaman").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

tanaman.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_tanaman").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','tanaman.cancel()');
        $("#asetsavepenghapusan").attr('onclick','tanaman.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: tanaman.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(tanaman.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: tanaman.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        tanaman.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Tanaman</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Tanaman</th><th>Jenis&nbsp;Kelamin</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+tanaman.dataAllFromId().KodeTanaman+'</td><td>'+tanaman.dataAllFromId().KodeBarang+'</td><td>'+tanaman.NmBarangRow()+'</td><td>'+tanaman.dataAllFromId().GolonganTanaman+'</td><td>'+tanaman.dataAllFromId().JenisKelamin+'</td><td>'+tanaman.dataAllFromId().Jumlah+'</td><td>'+toRpp(tanaman.dataAllFromId().NilaiPerolehan)+'</td><td>'+tanaman.dataAllFromId().NoReg+'</td><td>'+tanaman.dataAllFromId().TahunPerolehan+'</td><td>'+tanaman.dataAllFromId().AsalUsul+'</td><td>'+tanaman.dataAllFromId().Kondisi+'</td></tr>');
    
    })  
}

tanaman.penghapusanSimpan = function(){
    var kode            = tanaman.dataAllFromId().KodeTanaman;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = tanaman.dataAllFromId().KodeBarang;
    var jumlah          = tanaman.dataAllFromId().Jumlah;
    var harga           = tanaman.dataAllFromId().NilaiPerolehan;
    var kodebidang      = tanaman.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = tanaman.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/tanaman/tanaman_penghapusan.php",
                    data:{
                        1: kode, 2: kodelokasal, 3: jenispenghapusan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunpenghapusan, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dilakukan Penghapusan!",
                        text: "Data Tanaman Berhasil Dilakukan Penghapusan",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    tanaman.cancel();
                }); 
            }else{
                $("#DataTableAsetTanaman").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

tanaman.ajaxGetDataTanaman = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetTanaman").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/tanaman/tanaman_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetTanaman-error").html("");
                $("#DataTableAsetTanaman").append('<tbody class="DataTableAsetTanaman-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetTanaman").css("display","none");
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
    tanaman.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetTanaman' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetTanaman-'+moment().format("DD-MM-YYYY");
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

tanaman.clickRow = function(){
    var table = $('#DataTableAsetTanaman').DataTable();
    $('#DataTableAsetTanaman tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','tanaman.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','tanaman.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','tanaman.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','tanaman.penghapusan("'+data[0]+'")');
            tanaman.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    tanaman.prepareAll();
});
