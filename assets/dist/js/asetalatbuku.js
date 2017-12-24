var buku = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

buku.prepareAll = function(){
    buku.ajaxGetDataBuku();
    
}

buku.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/bukuperpus/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        buku.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

buku.cancel = function(){
    //Table Grid
    $("#table_aset_alatbuku").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatBuku").DataTable().ajax.reload();
    
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
    $("#form_aset_alatbuku").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

buku.ubahSimpan = function(id){
    var kodebuku = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golbukuperpus       = $("#golonganbukuperpus").select2('data')[0].text;
    var nmbukuperpus        = $("#namabarangbukuperpus").val();
    var thperolehanbukuperpus  = $("#tahunperolehanbukuperpus").val();
    var jmlbukuperpus       = $("#jumlahbukuperpus").val();
    var konbukuperpus       = $("#kondisibukuperpus").val();
    var asalusulbukuperpus  = $("#asalusulbukuperpus").select2('data')[0].text;
    var nilaiperolehan   = toAngka($("#nilaiperolehanbukuperpus").val());
    var keterangan       = $("#keteranganbukuperpus").val();

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
                url: "./controller/pencarian_aset/bukuperpus/bukuperpus_ubah.php",
                data:{
                    kode: kodebuku, 1: kodebarang, 2: kodelokasi, 3: golbukuperpus, 4: nmbukuperpus, 
                    5: thperolehanbukuperpus, 6: jmlbukuperpus, 7: konbukuperpus, 8: asalusulbukuperpus, 
                    9: nilaiperolehan, 10: keterangan, 11: penanggungjawab, 12: lokasipjawab, 13: surveyor, 
                    14: tanggalsurvei, 15: matauang, 16: satuankerja, 17: kodepemilik, 18: noregister, 19: entryuser 
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Buku Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            buku.cancel();
        });
    }
}

buku.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatbuku").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatbuku").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','buku.cancel()');
        $("#asetsaveubah").attr('onclick','buku.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(buku.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: buku.dataAllFromId().KodeBarang
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
                1: buku.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+buku.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(buku.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(buku.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(buku.dataAllFromId().NoReg);
        // $("#fdu_currency").val(buku.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+buku.dataAllFromId().MataUang+'>'+buku.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = buku.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(buku.dataAllFromId().Surveyor);

    //Replace Detail Buku======================================================

    //Replace Golongan Buku
    $('#golonganbukuperpus').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/bukuperpus/select_golonganbukuperpus.php',
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
        $('#golonganbukuperpus').empty().append('<option selected value='+buku.dataAllFromId().GolonganBuku+'>'+buku.dataAllFromId().GolonganBuku+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namabarangbukuperpus").val(buku.dataAllFromId().JenisBuku);

    //Replace Tahun Perolehan dan Pembuatan
    
    $("#jumlahbukuperpus").val(buku.dataAllFromId().Jumlah);

    $("#tahunperolehanbukuperpus").val(buku.dataAllFromId().TahunPerolehan);

    $("#kondisibukuperpus").val(buku.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusulbukuperpus').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/bukuperpus/select_asalusul.php',
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
        $('#asalusulbukuperpus').empty().append('<option selected value='+buku.dataAllFromId().AsalUsul+'>'+buku.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehanbukuperpus').css("font-weight","bold");
    $('#nilaiperolehanbukuperpus').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanbukuperpus").val(buku.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganbukuperpus").val(buku.dataAllFromId().Keterangan);
}

buku.hapus = function(n){
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
                url: 'controller/pencarian_aset/bukuperpus/bukuperpus_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatBuku").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatBuku").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

buku.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatbuku").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','buku.cancel()');
        $("#asetsavemutasi").attr('onclick','buku.mutasiSimpan("'+n+'")');
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
            1: buku.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(buku.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: buku.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        buku.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Buku</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Buku</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+buku.dataAllFromId().KodeBuku+'</td><td>'+buku.dataAllFromId().KodeBarang+'</td><td>'+buku.NmBarangRow()+'</td><td>'+buku.dataAllFromId().JenisBuku+'</td><td>'+buku.dataAllFromId().Jumlah+'</td><td>'+toRpp(buku.dataAllFromId().NilaiPerolehan)+'</td><td>'+buku.dataAllFromId().NoReg+'</td><td>'+buku.dataAllFromId().TahunPerolehan+'</td><td>'+buku.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(buku.dataAllFromId().Kondisi)+'</td></tr>');
    
    })   
}

buku.mutasiSimpan = function(){
    var kodebuku  = buku.dataAllFromId().KodeBuku;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = buku.dataAllFromId().KodeBarang;
    var jumlah          = buku.dataAllFromId().Jumlah;
    var harga           = buku.dataAllFromId().NilaiPerolehan;
    var kodebidang      = buku.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = buku.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/bukuperpus/bukuperpus_mutasi.php",
                    data:{
                        1: kodebuku, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Buku Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    buku.cancel();
                });
            }else{
                $("#DataTableAsetAlatBuku").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

buku.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatbuku").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','buku.cancel()');
        $("#asetsavepenghapusan").attr('onclick','buku.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: buku.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(buku.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: buku.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        buku.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Buku</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Buku</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+buku.dataAllFromId().KodeBuku+'</td><td>'+buku.dataAllFromId().KodeBarang+'</td><td>'+buku.NmBarangRow()+'</td><td>'+buku.dataAllFromId().JenisBuku+'</td><td>'+buku.dataAllFromId().Jumlah+'</td><td>'+toRpp(buku.dataAllFromId().NilaiPerolehan)+'</td><td>'+buku.dataAllFromId().NoReg+'</td><td>'+buku.dataAllFromId().TahunPerolehan+'</td><td>'+buku.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(buku.dataAllFromId().Kondisi)+'</td></tr>');
    
    })  
}

buku.penghapusanSimpan = function(){
    var kode            = buku.dataAllFromId().KodeBuku;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = buku.dataAllFromId().KodeBarang;
    var jumlah          = buku.dataAllFromId().Jumlah;
    var harga           = buku.dataAllFromId().NilaiPerolehan;
    var kodebidang      = buku.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = buku.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/bukuperpus/bukuperpus_penghapusan.php",
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
                    buku.cancel();
                }); 
            }else{
                $("#DataTableAsetAlatBuku").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

buku.ajaxGetDataBuku = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatBuku").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/bukuperpus/bukuperpus_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatBuku-error").html("");
                $("#DataTableAsetAlatBuku").append('<tbody class="DataTableAsetAlatBuku-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatBuku").css("display","none");
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
                targets: [8],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return kondisipersentase(data); 
                }
            },
            { 
                targets: [10],
                
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
    buku.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatBuku' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetBukuPerpustakaan-'+moment().format("DD-MM-YYYY");
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

buku.clickRow = function(){
    var table = $('#DataTableAsetAlatBuku').DataTable();
    $('#DataTableAsetAlatBuku tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','buku.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','buku.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','buku.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','buku.penghapusan("'+data[0]+'")');
            buku.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    buku.prepareAll();
});
