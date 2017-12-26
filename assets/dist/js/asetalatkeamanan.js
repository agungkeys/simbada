var keamanan = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

keamanan.prepareAll = function(){
    keamanan.ajaxGetDataKeamanan();
    
}

keamanan.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/alatkeamanan/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        keamanan.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

keamanan.cancel = function(){
    //Table Grid
    $("#table_aset_alatkeamanan").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatKeamanan").DataTable().ajax.reload();
    
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
    $("#form_aset_alatkeamanan").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

keamanan.ubahSimpan = function(id){
    var kodeakeamanan    = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golalatkeamanan    = $("#golonganalatkeamanan").select2('data')[0].text;
    var nmalatkeamanan     = $("#namabarangalatkeamanan").val();
    var mrkalatkeamanan    = $("#merkalatkeamanan").val();
    var tpalatkeamanan     = $("#tipealatkeamanan").val();
    var bhnalatkeamanan    = $("#bahanalatkeamanan").val();
    var thperolehanalatkeamanan    = $("#tahunperolehanalatkeamanan").val();
    var ukalatkeamanan     = $("#ukuranalatkeamanan").val();
    var jmlalatkeamanan    = $("#jumlahalatkeamanan").val();
    var konalatkeamanan    = $("#kondisialatkeamanan").val();
    var asalusulalatkeamanan       = $("#asalusulalatkeamanan").select2('data')[0].text;
    var nilaiperolehan   = toAngka($("#nilaiperolehanalatkeamanan").val());
    var keterangan       = $("#keteranganalatkeamanan").val();

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
                url: "./controller/pencarian_aset/alatkeamanan/alatkeamanan_ubah.php",
                data:{
                    kode: kodeakeamanan, 1: kodebarang, 2: kodelokasi, 3: golalatkeamanan, 4: nmalatkeamanan, 
                    5: mrkalatkeamanan, 6: tpalatkeamanan, 7: bhnalatkeamanan, 8: thperolehanalatkeamanan, 
                    9: ukalatkeamanan, 10: jmlalatkeamanan, 11: konalatkeamanan, 12: asalusulalatkeamanan, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Kantor Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            keamanan.cancel();
        });
    }
}

keamanan.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkeamanan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatkeamanan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','keamanan.cancel()');
        $("#asetsaveubah").attr('onclick','keamanan.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(keamanan.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: keamanan.dataAllFromId().KodeBarang
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
                1: keamanan.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+keamanan.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(keamanan.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(keamanan.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(keamanan.dataAllFromId().NoReg);
        // $("#fdu_currency").val(keamanan.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+keamanan.dataAllFromId().MataUang+'>'+keamanan.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = keamanan.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(keamanan.dataAllFromId().Surveyor);

    //Replace Detail Kantor======================================================

    //Replace Golongan Kantor
    $('#golonganalatkeamanan').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatkeamanan/select_golonganalatkeamanan.php',
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
        $('#golonganalatkeamanan').empty().append('<option selected value='+keamanan.dataAllFromId().GolonganAlatKeamanan+'>'+keamanan.dataAllFromId().GolonganAlatKeamanan+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namabarangalatkeamanan").val(keamanan.dataAllFromId().NamaBarang);

    //Replace Tahun Perolehan dan Pembuatan
    $("#merkalatkeamanan").val(keamanan.dataAllFromId().Merk);
    $("#tipealatkeamanan").val(keamanan.dataAllFromId().Tipe);
    $("#bahanalatkeamanan").val(keamanan.dataAllFromId().Bahan);
    $("#ukuranalatkeamanan").val(keamanan.dataAllFromId().Ukuran);
    $("#jumlahalatkeamanan").val(keamanan.dataAllFromId().Jumlah);

    $("#tahunperolehanalatkeamanan").val(keamanan.dataAllFromId().TahunPerolehan);

    $("#kondisialatkeamanan").val(keamanan.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusulalatkeamanan').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatkeamanan/select_asalusul.php',
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
        $('#asalusulalatkeamanan').empty().append('<option selected value='+keamanan.dataAllFromId().AsalUsul+'>'+keamanan.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehanalatkeamanan').css("font-weight","bold");
    $('#nilaiperolehanalatkeamanan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanalatkeamanan").val(keamanan.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganalatkeamanan").val(keamanan.dataAllFromId().Keterangan);
}

keamanan.hapus = function(n){
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
                url: 'controller/pencarian_aset/alatkeamanan/alatkeamanan_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatKeamanan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatKeamanan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

keamanan.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkeamanan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','keamanan.cancel()');
        $("#asetsavemutasi").attr('onclick','keamanan.mutasiSimpan("'+n+'")');
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
            1: keamanan.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(keamanan.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: keamanan.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        keamanan.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Kantor</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+keamanan.dataAllFromId().KodeAlatKeamanan+'</td><td>'+keamanan.dataAllFromId().KodeBarang+'</td><td>'+keamanan.NmBarangRow()+'</td><td>'+keamanan.dataAllFromId().GolonganAlatKeamanan+'</td><td>'+keamanan.dataAllFromId().Merk+'</td><td>'+keamanan.dataAllFromId().Tipe+'</td><td>'+keamanan.dataAllFromId().Bahan+'</td><td>'+keamanan.dataAllFromId().Ukuran+'</td><td>'+keamanan.dataAllFromId().Jumlah+'</td><td>'+toRpp(keamanan.dataAllFromId().NilaiPerolehan)+'</td><td>'+keamanan.dataAllFromId().NoReg+'</td><td>'+keamanan.dataAllFromId().TahunPerolehan+'</td><td>'+keamanan.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(keamanan.dataAllFromId().Kondisi)+'</td></tr>');
    
    })   
}

keamanan.mutasiSimpan = function(){
    var kodeakeamanan  = keamanan.dataAllFromId().KodeAlatKeamanan;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = keamanan.dataAllFromId().KodeBarang;
    var jumlah          = keamanan.dataAllFromId().Jumlah;
    var harga           = keamanan.dataAllFromId().NilaiPerolehan;
    var kodebidang      = keamanan.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = keamanan.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatkeamanan/alatkeamanan_mutasi.php",
                    data:{
                        1: kodeakeamanan, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Keamanan Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    keamanan.cancel();
                });
            }else{
                $("#DataTableAsetAlatKeamanan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

keamanan.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkeamanan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','keamanan.cancel()');
        $("#asetsavepenghapusan").attr('onclick','keamanan.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: keamanan.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(keamanan.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: keamanan.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        keamanan.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Kantor</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+keamanan.dataAllFromId().KodeAlatKeamanan+'</td><td>'+keamanan.dataAllFromId().KodeBarang+'</td><td>'+keamanan.NmBarangRow()+'</td><td>'+keamanan.dataAllFromId().GolonganAlatKeamanan+'</td><td>'+keamanan.dataAllFromId().Merk+'</td><td>'+keamanan.dataAllFromId().Tipe+'</td><td>'+keamanan.dataAllFromId().Bahan+'</td><td>'+keamanan.dataAllFromId().Ukuran+'</td><td>'+keamanan.dataAllFromId().Jumlah+'</td><td>'+toRpp(keamanan.dataAllFromId().NilaiPerolehan)+'</td><td>'+keamanan.dataAllFromId().NoReg+'</td><td>'+keamanan.dataAllFromId().TahunPerolehan+'</td><td>'+keamanan.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(keamanan.dataAllFromId().Kondisi)+'</td></tr>');
    
    })  
}

keamanan.penghapusanSimpan = function(){
    var kode            = keamanan.dataAllFromId().KodeAlatKeamanan;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = keamanan.dataAllFromId().KodeBarang;
    var jumlah          = keamanan.dataAllFromId().Jumlah;
    var harga           = keamanan.dataAllFromId().NilaiPerolehan;
    var kodebidang      = keamanan.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = keamanan.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatkeamanan/alatkeamanan_penghapusan.php",
                    data:{
                        1: kode, 2: kodelokasal, 3: jenispenghapusan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunpenghapusan, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dilakukan Penghapusan!",
                        text: "Data Keamanan Berhasil Dilakukan Penghapusan",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    keamanan.cancel();
                }); 
            }else{
                $("#DataTableAsetAlatKeamanan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

keamanan.ajaxGetDataKeamanan = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatKeamanan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/alatkeamanan/alatkeamanan_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatKeamanan-error").html("");
                $("#DataTableAsetAlatKeamanan").append('<tbody class="DataTableAsetAlatKeamanan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatKeamanan").css("display","none");
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
    keamanan.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatKeamanan' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetAlatKantorRumahTangga-'+moment().format("DD-MM-YYYY");
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

keamanan.clickRow = function(){
    var table = $('#DataTableAsetAlatKeamanan').DataTable();
    $('#DataTableAsetAlatKeamanan tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','keamanan.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','keamanan.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','keamanan.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','keamanan.penghapusan("'+data[0]+'")');
            keamanan.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    keamanan.prepareAll();
});
