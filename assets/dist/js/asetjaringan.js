var jar = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

jar.prepareAll = function(){
    jar.ajaxGetDataJaringan();
    
}

jar.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/jaringan/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        jar.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

jar.cancel = function(){
    //Table Grid
    $("#table_aset_jaringan").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetJaringan").DataTable().ajax.reload();
    
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
    $("#form_aset_jaringan").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

jar.ubahSimpan = function(id){
    var kodejar        = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var goljaringan     = $("#goljaringan").select2('data')[0].text;
    var nmjaringan      = $("#namajaringan").val();
    var letak           = $("#alamatjaringan").val();
    var tahunperolehan  = $("#tahunperolehanjar").val();
    var kondisi         = $("#kondisibangunanjar").val();
    var bahan           = $("#bahanbangunanjar").val();
    var panjang         = $("#panjangjar").val();
    var asalusul        = $("#asalusuljar").select2('data')[0].text;
    var asalusullainnya = $("#asalusuljarlainnya").val();
    var nilaiperolehan  = toAngka($("#nilaiperolehanjar").val());
    var keterangan      = $("#keteranganjar").val();

    var tahunpembuatan  = "";
    var konstruksi      = "";
    var diameter        = "";
    var fasilitaspenun  = "";
    var dataawal        = "";
    var nilaiperm2      = "";
    var nilaibaru       = "";
    var nilaipasar      = "";

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
                url: "./controller/pencarian_aset/jaringan/jaringan_ubah.php",
                data:{
                    kode: kodejar, 1: kodebarang, 2: kodelokasi, 3: goljaringan, 4: nmjaringan, 5: letak, 
                    6: tahunpembuatan, 7: tahunperolehan, 8: kondisi, 9: konstruksi, 10: bahan,
                    11: panjang, 12: diameter, 13: fasilitaspenun, 14: asalusul, 15: asalusullainnya,
                    16: dataawal, 17: nilaiperm2, 18: nilaiperolehan, 19: nilaibaru, 20: nilaipasar, 21: keterangan, 22: penanggungjawab, 23: lokasipjawab,
                    24: surveyor, 25: tanggalsurvei, 26: matauang, 27: satuankerja, 28: kodepemilik,
                    29: noregister, 30: status, 31: ketstatus, 32: entry, 33: entryuser 
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Jaringan Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            jar.cancel();
        });
    }
}

jar.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jaringan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_jaringan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','jar.cancel()');
        $("#asetsaveubah").attr('onclick','jar.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(jar.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: jar.dataAllFromId().KodeBarang
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
                1: jar.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+jar.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(jar.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(jar.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(jar.dataAllFromId().NoReg);
        // $("#fdu_currency").val(jar.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+jar.dataAllFromId().MataUang+'>'+jar.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = jar.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(jar.dataAllFromId().Surveyor);

    //Replace Detail Jaringan======================================================

    //Replace Golongan Jaringan
    $('#goljaringan').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jaringan/select_golonganjaringan.php',
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
        $('#goljaringan').empty().append('<option selected value='+jar.dataAllFromId().GolonganJaringan+'>'+jar.dataAllFromId().GolonganJaringan+'</option>');
    },500)

    //Replace Nama Bangunan Jaringan
    $("#namajaringan").val(jar.dataAllFromId().NamaJaringan);

    //Replace Letak B.Instalasi
    $("#alamatjaringan").val(jar.dataAllFromId().Letak);

    //Replace Tahun Perolehan dan Pembuatan
    $("#tahunperolehanjar").val(jar.dataAllFromId().TahunPerolehan);
    $("#kondisibangunanjar").val(jar.dataAllFromId().Kondisi);
    $("#bahanbangunanjar").val(jar.dataAllFromId().Bahan);

    //Replace Panjang Jaringan
    $("#panjangjar").val(jar.dataAllFromId().Panjang);
    //Replace Lebar Jaringan
    // $("#lebarbangunaninst").val(jar.dataAllFromId().Lebar);
    //Replace Tinggi Jaringan
    // $("#tinggibangunaninst").val(jar.dataAllFromId().Tinggi);

    $("#fasilitasbangunaninst").val(jar.dataAllFromId().FasilitasPenunjang);

    //Replace Asal-Usul
    $('#asalusuljar').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/jaringan/select_asalusul.php',
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
        $('#asalusuljar').empty().append('<option selected value='+jar.dataAllFromId().AsalUsul+'>'+jar.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#asalusuljarlainnya").val(jar.dataAllFromId().AsalUsulLainnya);

    //Replace Nilai Perolehan
    $('#nilaiperolehanjar').css("font-weight","bold");
    $('#nilaiperolehanjar').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanjar").val(jar.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganjar").val(jar.dataAllFromId().Keterangan);
}

jar.hapus = function(n){
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
                url: 'controller/pencarian_aset/jaringan/jaringan_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetJaringan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetJaringan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

jar.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jaringan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','jar.cancel()');
        $("#asetsavemutasi").attr('onclick','jar.mutasiSimpan("'+n+'")');
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
            1: jar.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(jar.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: jar.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        jar.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Jaringan</th><th>Panjng</th><th>Diameter</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+jar.dataAllFromId().KodeJaringan+'</td><td>'+jar.dataAllFromId().KodeBarang+'</td><td>'+jar.NmBarangRow()+'</td><td>'+jar.dataAllFromId().GolonganJaringan+'</td><td>'+jar.dataAllFromId().Panjang+'</td><td>'+jar.dataAllFromId().Diameter+'</td><td>'+toRpp(jar.dataAllFromId().NilaiPerolehan)+'</td><td>'+jar.dataAllFromId().NoReg+'</td><td>'+jar.dataAllFromId().TahunPerolehan+'</td><td>'+jar.dataAllFromId().AsalUsul+'</td><td>'+jar.dataAllFromId().Kondisi+'</td></tr>');
    
    })   
}

jar.mutasiSimpan = function(){
    var kodejar         = jar.dataAllFromId().KodeJaringan;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = jar.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = jar.dataAllFromId().NilaiPerolehan;
    var kodebidang      = jar.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = jar.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/jaringan/jaringan_mutasi.php",
                    data:{
                        1: kodejar, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Jaringan Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    jar.cancel();
                });
            }else{
                $("#DataTableAsetJaringan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

jar.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_jaringan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','jar.cancel()');
        $("#asetsavepenghapusan").attr('onclick','jar.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: jar.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(jar.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: jar.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        jar.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Jaringan</th><th>Panjng</th><th>Diameter</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+jar.dataAllFromId().KodeJaringan+'</td><td>'+jar.dataAllFromId().KodeBarang+'</td><td>'+jar.NmBarangRow()+'</td><td>'+jar.dataAllFromId().GolonganJaringan+'</td><td>'+jar.dataAllFromId().Panjang+'</td><td>'+jar.dataAllFromId().Diameter+'</td><td>'+toRpp(jar.dataAllFromId().NilaiPerolehan)+'</td><td>'+jar.dataAllFromId().NoReg+'</td><td>'+jar.dataAllFromId().TahunPerolehan+'</td><td>'+jar.dataAllFromId().AsalUsul+'</td><td>'+jar.dataAllFromId().Kondisi+'</td></tr>');
    
    })  
}

jar.penghapusanSimpan = function(){
    var kode            = jar.dataAllFromId().KodeJaringan;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = jar.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = jar.dataAllFromId().NilaiPerolehan;
    var kodebidang      = jar.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = jar.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/jaringan/jaringan_penghapusan.php",
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
                    jar.cancel();
                }); 
            }else{
                $("#DataTableAsetBangunanAir").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

jar.ajaxGetDataJaringan = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetJaringan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/jaringan/jaringan_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetJaringan-error").html("");
                $("#DataTableAsetJaringan").append('<tbody class="DataTableAsetJaringan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetJaringan_processing").css("display","none");
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
                targets: [14],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return kondisipersentase(data); 
                }
            },
            { 
                targets: [16],
                
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
    jar.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetJaringan' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetJaringan-'+moment().format("DD-MM-YYYY");
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

jar.clickRow = function(){
    var table = $('#DataTableAsetJaringan').DataTable();
    $('#DataTableAsetJaringan tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','jar.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','jar.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','jar.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','jar.penghapusan("'+data[0]+'")');
            jar.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    jar.prepareAll();
});
