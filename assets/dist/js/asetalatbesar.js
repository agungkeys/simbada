var abes = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

abes.prepareAll = function(){
    abes.ajaxGetDataJaringan();
    
}

abes.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/alatbesar/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        abes.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

abes.cancel = function(){
    //Table Grid
    $("#table_aset_alatbesar").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatBesar").DataTable().ajax.reload();
    
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
    $("#form_aset_alatbesar").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

abes.ubahSimpan = function(id){
    var kodeabesar        = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golalatbesar    = $("#golonganalatbesar").select2('data')[0].text;
    var nmalatbesar     = $("#namaalatbesar").val();
    var mrkalatbesar    = $("#merkalatbesar").val();
    var tpalatbesar     = $("#tipealatbesar").val();
    var ukalatbesar     = $("#ukuranalatbesar").val();
    var bhnalatbesar    = $("#bahanalatbesar").val();
    var norkalatbesar   = $("#norangkaalatbesar").val();
    var nomsnalatbesar  = $("#nomesinalatbesar").val();
    var thperolehanalatbesar    = $("#tahunperolehanalatbesar").val();
    var konalatbesar    = $("#kondisialatberat").val();
    var asalusulalatbesar       = $("#asalusulalatbesar").select2('data')[0].text;
    var nilaiperolehan  = toAngka($("#nilaiperolehanalatbesar").val());
    var keterangan      = $("#keteranganalatbesar").val();

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
                url: "./controller/pencarian_aset/alatbesar/alatbesar_ubah.php",
                data:{
                    kode: kodeabesar, 1: kodebarang, 2: kodelokasi, 3: golalatbesar, 4: nmalatbesar, 5: mrkalatbesar, 
                    6: tpalatbesar, 7: ukalatbesar, 8: bhnalatbesar, 9: norkalatbesar, 10: nomsnalatbesar, 11: thperolehanalatbesar,
                    12: konalatbesar, 13: asalusulalatbesar, 14: nilaiperolehan, 15: keterangan, 16: penanggungjawab,
                    17: lokasipjawab, 18: surveyor, 19: tanggalsurvei,
                    20: matauang, 21: satuankerja, 22: kodepemilik, 23: noregister, 24: status,
                    25: ketstatus, 26: entry, 27: entryuser 
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Jaringan Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            abes.cancel();
        });
    }
}

abes.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatbesar").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatbesar").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','abes.cancel()');
        $("#asetsaveubah").attr('onclick','abes.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(abes.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: abes.dataAllFromId().KodeBarang
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
                1: abes.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+abes.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(abes.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(abes.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(abes.dataAllFromId().NoReg);
        // $("#fdu_currency").val(abes.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+abes.dataAllFromId().MataUang+'>'+abes.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = abes.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(abes.dataAllFromId().Surveyor);

    //Replace Detail Jaringan======================================================

    //Replace Golongan Jaringan
    $('#golonganalatbesar').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatbesar/select_golongan_alatbesar.php',
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
        $('#golonganalatbesar').empty().append('<option selected value='+abes.dataAllFromId().GolonganAlatBesar+'>'+abes.dataAllFromId().GolonganAlatBesar+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namaalatbesar").val(abes.dataAllFromId().NamaAlatBesar);

    //Replace Tahun Perolehan dan Pembuatan
    $("#merkalatbesar").val(abes.dataAllFromId().Merk);
    $("#tipealatbesar").val(abes.dataAllFromId().Tipe);
    $("#ukuranalatbesar").val(abes.dataAllFromId().Kapasitas);
    $("#bahanalatbesar").val(abes.dataAllFromId().Model);
    $("#norangkaalatbesar").val(abes.dataAllFromId().NomorRangka);
    $("#nomesinalatbesar").val(abes.dataAllFromId().NomorMesin);

    $("#tahunperolehanalatbesar").val(abes.dataAllFromId().TahunPerolehan);
    $("#kondisialatberat").val(abes.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusulalatbesar').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatbesar/select_asalusul.php',
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
        $('#asalusulalatbesar').empty().append('<option selected value='+abes.dataAllFromId().AsalUsul+'>'+abes.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#asalusuljarlainnya").val(abes.dataAllFromId().AsalUsulLainnya);

    //Replace Nilai Perolehan
    $('#nilaiperolehanalatbesar').css("font-weight","bold");
    $('#nilaiperolehanalatbesar').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanalatbesar").val(abes.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganalatbesar").val(abes.dataAllFromId().Keterangan);
}

abes.hapus = function(n){
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
                url: 'controller/pencarian_aset/alatbesar/alatbesar_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatBesar").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatBesar").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

abes.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatbesar").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','abes.cancel()');
        $("#asetsavemutasi").attr('onclick','abes.mutasiSimpan("'+n+'")');
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
            1: abes.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(abes.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: abes.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        abes.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Besar</th><th>Merk</th><th>Tipe</th><th>Ukuran</th><th>Bahan</th><th>No.&nbsp;Rangka</th><th>No.&nbspMesin</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+abes.dataAllFromId().KodeAlatBesar+'</td><td>'+abes.dataAllFromId().KodeBarang+'</td><td>'+abes.NmBarangRow()+'</td><td>'+abes.dataAllFromId().GolonganAlatBesar+'</td><td>'+abes.dataAllFromId().Merk+'</td><td>'+abes.dataAllFromId().Tipe+'</td><td>'+abes.dataAllFromId().Kapasitas+'</td><td>'+abes.dataAllFromId().Model+'</td><td>'+abes.dataAllFromId().NomorRangka+'</td><td>'+abes.dataAllFromId().NomorMesin+'</td><td>'+toRpp(abes.dataAllFromId().NilaiPerolehan)+'</td><td>'+abes.dataAllFromId().NoReg+'</td><td>'+abes.dataAllFromId().TahunPerolehan+'</td><td>'+abes.dataAllFromId().AsalUsul+'</td><td>'+abes.dataAllFromId().Kondisi+'</td></tr>');
    
    })   
}

abes.mutasiSimpan = function(){
    var kodeabess       = abes.dataAllFromId().KodeAlatBesar;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = abes.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = abes.dataAllFromId().NilaiPerolehan;
    var kodebidang      = abes.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = abes.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatbesar/alatbesar_mutasi.php",
                    data:{
                        1: kodeabess, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
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
                    abes.cancel();
                });
            }else{
                $("#DataTableAsetAlatBesar").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

abes.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatbesar").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','abes.cancel()');
        $("#asetsavepenghapusan").attr('onclick','abes.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: abes.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(abes.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: abes.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        abes.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Besar</th><th>Merk</th><th>Tipe</th><th>Ukuran</th><th>Bahan</th><th>No.&nbsp;Rangka</th><th>No.&nbspMesin</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+abes.dataAllFromId().KodeAlatBesar+'</td><td>'+abes.dataAllFromId().KodeBarang+'</td><td>'+abes.NmBarangRow()+'</td><td>'+abes.dataAllFromId().GolonganAlatBesar+'</td><td>'+abes.dataAllFromId().Merk+'</td><td>'+abes.dataAllFromId().Tipe+'</td><td>'+abes.dataAllFromId().Kapasitas+'</td><td>'+abes.dataAllFromId().Model+'</td><td>'+abes.dataAllFromId().NomorRangka+'</td><td>'+abes.dataAllFromId().NomorMesin+'</td><td>'+toRpp(abes.dataAllFromId().NilaiPerolehan)+'</td><td>'+abes.dataAllFromId().NoReg+'</td><td>'+abes.dataAllFromId().TahunPerolehan+'</td><td>'+abes.dataAllFromId().AsalUsul+'</td><td>'+abes.dataAllFromId().Kondisi+'</td></tr>');
    
    })  
}

abes.penghapusanSimpan = function(){
    var kode            = abes.dataAllFromId().KodeAlatBesar;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = abes.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = abes.dataAllFromId().NilaiPerolehan;
    var kodebidang      = abes.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = abes.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatbesar/alatbesar_penghapusan.php",
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
                    abes.cancel();
                }); 
            }else{
                $("#DataTableAsetAlatBesar").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

abes.ajaxGetDataJaringan = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatBesar").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/alatbesar/alatbesar_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatBesar-error").html("");
                $("#DataTableAsetAlatBesar").append('<tbody class="DataTableAsetAlatBesar-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatBesar_processing").css("display","none");
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
                targets: [13],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return kondisipersentase(data); 
                }
            },
            { 
                targets: [15],
                
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
    abes.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatBesar' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetAlatBesar-'+moment().format("DD-MM-YYYY");
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

abes.clickRow = function(){
    var table = $('#DataTableAsetAlatBesar').DataTable();
    $('#DataTableAsetAlatBesar tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','abes.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','abes.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','abes.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','abes.penghapusan("'+data[0]+'")');
            abes.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    abes.prepareAll();
});
