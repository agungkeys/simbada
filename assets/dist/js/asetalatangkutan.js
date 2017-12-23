var angkutan = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

angkutan.prepareAll = function(){
    angkutan.ajaxGetDataAngkutan();
    
}

angkutan.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/alatangkut/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        angkutan.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

angkutan.cancel = function(){
    //Table Grid
    $("#table_aset_alatangkutan").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatAngkutan").DataTable().ajax.reload();
    
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
    $("#form_aset_alatangkutan").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

angkutan.ubahSimpan = function(id){
    var kodeaangkutan   = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golalatangkut    = $("#golonganalatangkut").select2('data')[0].text;
    var nmalatangkut     = $("#namaalatangkut").val();
    var mrkalatangkut    = $("#merkalatalatangkut").val();
    var tpalatangkut     = $("#tipealatangkut").val();
    var ukalatangkut     = $("#ukuranalatangkut").val();
    var bhnalatangkut    = $("#bahanalatangkut").val();
    var norkalatangkut   = $("#norangkaalatangkut").val();
    var nomsnalatangkut  = $("#nomesinalatangkut").val();
    var thperolehanalatangkut    = $("#tahunperolehanalatangkut").val();
    var konalatangkut    = $("#kondisialatangkut").val();
    var asalusulalatangkut       = $("#asalusulalatangkut").select2('data')[0].text;
    var nilaiperolehan   = toAngka($("#nilaiperolehanalatangkut").val());
    var keterangan       = $("#keteranganalatangkut").val();
    var npolalatangkut   = $("#nopolalatangkut").val();
    var tglalatangkut    = $("#tglalatangkut").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var nobpkbalatangkut = $("#nobpkb").val();

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
                url: "./controller/pencarian_aset/alatangkutan/alatangkutan_ubah.php",
                data:{
                    kode: kodeaangkutan, 1: kodebarang, 2: kodelokasi, 3: golalatangkut, 4: nmalatangkut, 5: mrkalatangkut, 
                    6: tpalatangkut, 7: ukalatangkut, 8: bhnalatangkut, 9: norkalatangkut, 10: nomsnalatangkut, 
                    11: thperolehanalatangkut, 12: konalatangkut, 13: asalusulalatangkut, 14: nilaiperolehan, 
                    15: keterangan, 16: penanggungjawab, 17: lokasipjawab, 18: surveyor, 19: tanggalsurvei, 
                    20: matauang, 21: satuankerja, 22: kodepemilik, 23: noregister, 24: status, 
                    25: ketstatus, 26: entry, 27: entryuser, 28: npolalatangkut, 29: tglalatangkut, 30: nobpkbalatangkut
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Jaringan Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            angkutan.cancel();
        });
    }
}

angkutan.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatangkutan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatangkutan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','angkutan.cancel()');
        $("#asetsaveubah").attr('onclick','angkutan.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(angkutan.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: angkutan.dataAllFromId().KodeBarang
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
                1: angkutan.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+angkutan.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(angkutan.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(angkutan.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(angkutan.dataAllFromId().NoReg);
        // $("#fdu_currency").val(angkutan.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+angkutan.dataAllFromId().MataUang+'>'+angkutan.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = angkutan.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(angkutan.dataAllFromId().Surveyor);

    //Replace Detail Jaringan======================================================

    //Replace Golongan Jaringan
    $('#golonganalatangkut').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatangkut/select_golonganalatangkut.php',
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
        $('#golonganalatangkut').empty().append('<option selected value='+angkutan.dataAllFromId().GolonganAlatAngkutan+'>'+angkutan.dataAllFromId().GolonganAlatAngkutan+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namaalatangkut").val(angkutan.dataAllFromId().NamaAlatAngkutan);

    //Replace Tahun Perolehan dan Pembuatan
    $("#merkalatalatangkut").val(angkutan.dataAllFromId().Merk);
    $("#tipealatangkut").val(angkutan.dataAllFromId().Tipe);
    $("#ukuranalatangkut").val(angkutan.dataAllFromId().Kapasitas);
    $("#bahanalatangkut").val(angkutan.dataAllFromId().Warna);
    $("#norangkaalatangkut").val(angkutan.dataAllFromId().NomorRangka);
    $("#nomesinalatangkut").val(angkutan.dataAllFromId().NomorMesin);

    $("#tahunperolehanalatangkut").val(angkutan.dataAllFromId().TahunPerolehan);

    $("#nopolalatangkut").val(angkutan.dataAllFromId().NomorPolisi);
    //Replace Tanggal Dokumen
    $('#tglalatangkut').datepicker({
        language: "id",
        format: "dd MM yyyy",
        todayBtn: "linked",
        toggleActive: true
    });

    var tanggaldokx = angkutan.dataAllFromId().TanggalBPKB;
    var tanggalrepldokx = moment(tanggaldokx).format('DD MMMM YYYY');

    var datepickx = $("#tglalatangkut input");
    datepickx.datepicker({
            format: 'dd MM yyyy',
            language: 'id'
        });
    datepickx.datepicker('setDate', tanggalrepldokx);

    $("#nobpkb").val(angkutan.dataAllFromId().NomorBPKB);

    $("#kondisialatangkut").val(angkutan.dataAllFromId().Kondisi);

    //Replace Asal-Usul
    $('#asalusulalatangkut').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/alatangkut/select_asalusul.php',
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
        $('#asalusulalatangkut').empty().append('<option selected value='+angkutan.dataAllFromId().AsalUsul+'>'+angkutan.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#asalusuljarlainnya").val(angkutan.dataAllFromId().AsalUsulLainnya);

    //Replace Nilai Perolehan
    $('#nilaiperolehanalatangkut').css("font-weight","bold");
    $('#nilaiperolehanalatangkut').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanalatangkut").val(angkutan.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganalatangkut").val(angkutan.dataAllFromId().Keterangan);
}

angkutan.hapus = function(n){
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
                url: 'controller/pencarian_aset/alatangkutan/alatangkutan_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatAngkutan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatAngkutan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

angkutan.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatangkutan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','angkutan.cancel()');
        $("#asetsavemutasi").attr('onclick','angkutan.mutasiSimpan("'+n+'")');
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
            1: angkutan.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(angkutan.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: angkutan.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        angkutan.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Angkutan</th><th>Merk</th><th>Tipe</th><th>Ukuran</th><th>Bahan</th><th>No.&nbsp;Rangka</th><th>No.&nbspMesin</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+angkutan.dataAllFromId().KodeAlatAngkutan+'</td><td>'+angkutan.dataAllFromId().KodeBarang+'</td><td>'+angkutan.NmBarangRow()+'</td><td>'+angkutan.dataAllFromId().GolonganAlatAngkutan+'</td><td>'+angkutan.dataAllFromId().Merk+'</td><td>'+angkutan.dataAllFromId().Tipe+'</td><td>'+angkutan.dataAllFromId().Kapasitas+'</td><td>'+angkutan.dataAllFromId().Warna+'</td><td>'+angkutan.dataAllFromId().NomorRangka+'</td><td>'+angkutan.dataAllFromId().NomorMesin+'</td><td>'+toRpp(angkutan.dataAllFromId().NilaiPerolehan)+'</td><td>'+angkutan.dataAllFromId().NoReg+'</td><td>'+angkutan.dataAllFromId().TahunPerolehan+'</td><td>'+angkutan.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(angkutan.dataAllFromId().Kondisi)+'</td></tr>');
    
    })   
}

angkutan.mutasiSimpan = function(){
    var kodeaangk       = angkutan.dataAllFromId().KodeAlatAngkutan;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = angkutan.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = angkutan.dataAllFromId().NilaiPerolehan;
    var kodebidang      = angkutan.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = angkutan.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatangkutan/alatangkutan_mutasi.php",
                    data:{
                        1: kodeaangk, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
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
                    angkutan.cancel();
                });
            }else{
                $("#DataTableAsetAlatAngkutan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

angkutan.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatangkutan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','angkutan.cancel()');
        $("#asetsavepenghapusan").attr('onclick','angkutan.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: angkutan.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(angkutan.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: angkutan.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        angkutan.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Angkutan</th><th>Merk</th><th>Tipe</th><th>Ukuran</th><th>Bahan</th><th>No.&nbsp;Rangka</th><th>No.&nbspMesin</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+angkutan.dataAllFromId().KodeAlatAngkutan+'</td><td>'+angkutan.dataAllFromId().KodeBarang+'</td><td>'+angkutan.NmBarangRow()+'</td><td>'+angkutan.dataAllFromId().GolonganAlatAngkutan+'</td><td>'+angkutan.dataAllFromId().Merk+'</td><td>'+angkutan.dataAllFromId().Tipe+'</td><td>'+angkutan.dataAllFromId().Kapasitas+'</td><td>'+angkutan.dataAllFromId().Warna+'</td><td>'+angkutan.dataAllFromId().NomorRangka+'</td><td>'+angkutan.dataAllFromId().NomorMesin+'</td><td>'+toRpp(angkutan.dataAllFromId().NilaiPerolehan)+'</td><td>'+angkutan.dataAllFromId().NoReg+'</td><td>'+angkutan.dataAllFromId().TahunPerolehan+'</td><td>'+angkutan.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(angkutan.dataAllFromId().Kondisi)+'</td></tr>');
    
    })  
}

angkutan.penghapusanSimpan = function(){
    var kode            = angkutan.dataAllFromId().KodeAlatAngkutan;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = angkutan.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = angkutan.dataAllFromId().NilaiPerolehan;
    var kodebidang      = angkutan.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = angkutan.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/alatangkutan/alatangkutan_penghapusan.php",
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
                    angkutan.cancel();
                }); 
            }else{
                $("#DataTableAsetAlatAngkutan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

angkutan.ajaxGetDataAngkutan = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatAngkutan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/alatangkutan/alatangkutan_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatAngkutan-error").html("");
                $("#DataTableAsetAlatAngkutan").append('<tbody class="DataTableAsetAlatAngkutan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatAngkutan_processing").css("display","none");
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
    angkutan.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatAngkutan' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetAlatAngkutan-'+moment().format("DD-MM-YYYY");
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

angkutan.clickRow = function(){
    var table = $('#DataTableAsetAlatAngkutan').DataTable();
    $('#DataTableAsetAlatAngkutan tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','angkutan.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','angkutan.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','angkutan.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','angkutan.penghapusan("'+data[0]+'")');
            angkutan.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    angkutan.prepareAll();
});
