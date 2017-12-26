var konstruksi = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumen: ko.observable("0"),
    NmBarangRow: ko.observable(""),
    tingkat: ko.observable("0"),
    beton: ko.observable("0")
}

konstruksi.prepareAll = function(){
    konstruksi.ajaxGetDataKonstruksi();
    
}

konstruksi.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/konstruksi/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        konstruksi.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

konstruksi.cancel = function(){
    //Table Grid
    $("#table_aset_alatkonstruksi").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetAlatKonstruksi").DataTable().ajax.reload();
    
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
    $("#form_aset_alatkonstruksi").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

konstruksi.ubahSimpan = function(id){
    var kodekonstruksi  = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var jnbarang        = $("#namajenisbarang").val();
    var konsbangunan    = $("#konstruksibangunan").select2('data')[0].text;
    var ltkalmtkons     = $("#letakalamatkons").val();
    var luaskons        = $("#luaskonstruksi").val();
    var tingkatkons     = konstruksi.tingkat();
    var betonkons       = konstruksi.beton();
    var ststanahkons    = $("#statustanahkons").select2('data')[0].text;
    var tglmulproyek    = $("#tanggalmulai input").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var kdtanahkons     = $("#kodetanahkons").select2('data')[0].text;
    var adadokkons      = konstruksi.dokumen();
    var tgldokkons      = $("#tanggaldokkons input").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var nodokumenkons   = $("#nodokumen").val();
    var asalusulkons    = $("#asalusulkonstruksi").select2('data')[0].text;
    var nilaiperolehan        = toAngka($("#nilaiperolehankons").val());
    var keterangan            = $("#keterangankons").val();

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
                url: "./controller/pencarian_aset/konstruksi/konstruksi_ubah.php",
                data:{
                    kode: kodekonstruksi, 1: kodebarang, 2: kodelokasi, 3: jnbarang, 4: konsbangunan, 
                    5: ltkalmtkons, 6: luaskons, 7: tingkatkons, 8: betonkons, 
                    9: ststanahkons, 10: tglmulproyek, 11: kdtanahkons, 12: adadokkons, 
                    13: tgldokkons, 14: nodokumenkons, 15: asalusulkons, 16: nilaiperolehan, 
                    17: keterangan, 18: penanggungjawab, 19: lokasipjawab, 20: surveyor, 
                    21: tanggalsurvei, 22: matauang, 23: satuankerja, 24: kodepemilik, 
                    25: noregister, 26: entryuser
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Konstruksi Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            konstruksi.cancel();
        });
    }
}

konstruksi.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkonstruksi").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_alatkonstruksi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','konstruksi.cancel()');
        $("#asetsaveubah").attr('onclick','konstruksi.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(konstruksi.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: konstruksi.dataAllFromId().KodeBarang
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
                1: konstruksi.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+konstruksi.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(konstruksi.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(konstruksi.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(konstruksi.dataAllFromId().NoReg);
        // $("#fdu_currency").val(konstruksi.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+konstruksi.dataAllFromId().MataUang+'>'+konstruksi.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = konstruksi.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(konstruksi.dataAllFromId().Surveyor);

    //Replace Detail Kantor======================================================

    // Replace Golongan Kantor
    $('#konstruksibangunan').select2({
        placeholder: 'Pilih Data konstruksi...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/konstruksi/select_konstruksibangunan.php',
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
        $('#konstruksibangunan').empty().append('<option selected value='+konstruksi.dataAllFromId().Konstruksi+'>'+konstruksi.dataAllFromId().Konstruksi+'</option>');
    },500)

    //Replace Nama Alat Besar
    $("#namajenisbarang").val(konstruksi.dataAllFromId().NamaBangunan);

    //Replace Tahun Perolehan dan Pembuatan
    $("#letakalamatkons").val(konstruksi.dataAllFromId().Letak);
    $("#luaskonstruksi").val(konstruksi.dataAllFromId().LuasBangunan);

    //Replace Tingkat Checkbox
    $("#tingkatkonstruksi").change(function(){
        var sesuai = $("#tingkatkonstruksi").is(':checked');
        if(sesuai != true){
            konstruksi.tingkat("0");
        }else{
            konstruksi.tingkat("1111111111111111111111111111111");
        }  
    })
    var dtawal = konstruksi.dataAllFromId().Tingkat;
    if(dtawal > 0){
        $("#tingkatkonstruksi").prop('checked', true);
        konstruksi.tingkat("1111111111111111111111111111111");
    }else{
        $("#tingkatkonstruksi").prop('checked', false);
        konstruksi.tingkat("0");
    }


    //Replace Beton Checkbox
    $("#betonkonstruksi").change(function(){
        var sesuai = $("#betonkonstruksi").is(':checked');
        if(sesuai != true){
            konstruksi.beton("0");
        }else{
            konstruksi.beton("1111111111111111111111111111111");
        }  
    })
    var dtawal = konstruksi.dataAllFromId().Beton;
    if(dtawal > 0){
        $("#betonkonstruksi").prop('checked', true);
        konstruksi.beton("1111111111111111111111111111111");
    }else{
        $("#betonkonstruksi").prop('checked', false);
        konstruksi.beton("0");
    }


    $('#statustanahkons').select2({
        placeholder: 'Pilih Data Status Tanah...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/konstruksi/select_statustanah.php',
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
        $('#statustanahkons').empty().append('<option selected value='+konstruksi.dataAllFromId().StatusTanah+'>'+konstruksi.dataAllFromId().StatusTanah+'</option>');
    },500);

    //Replace Tanggal Mulai Proyek
    var tanggaldokx = konstruksi.dataAllFromId().TglMulai;
    var tanggalrepldokx = moment(tanggaldokx).format('DD MMMM YYYY');

    var datepickx = $("#tanggalmulai input");
    datepickx.datepicker({
            format: 'dd MM yyyy',
            language: 'id'
        });
    datepickx.datepicker('setDate', tanggalrepldokx);

    $('#kodetanahkons').select2({
        placeholder: 'Pilih Data Status Tanah...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/konstruksi/select_kodetanah.php',
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
        $('#kodetanahkons').empty().append('<option selected value='+konstruksi.dataAllFromId().KodeTanah+'>'+konstruksi.dataAllFromId().KodeTanah+'</option>');
    },500);

    //Replace Dokumen Konstruksi Checkbox
    $("#dokkonstruksi").change(function(){
        var sesuai = $("#dokkonstruksi").is(':checked');
        if(sesuai != true){
            konstruksi.dokumen("0");
            $("#tanggaldokkons input").prop('readonly', true);
            $("#nodokumen").prop('readonly', true);
            $("#tanggaldokkons input").val("").datepicker("update");
            $("#nodokumen").val('');
        }else{
            konstruksi.dokumen("1111111111111111111111111111111");
            $("#tanggaldokkons input").prop('readonly', false);
            $("#nodokumen").prop('readonly', false);
        }  
    })
    var dtawal = konstruksi.dataAllFromId().Dokumen;
    if(dtawal > 0){
        $("#dokkonstruksi").prop('checked', true);
        konstruksi.dokumen("1111111111111111111111111111111");
        $("#tanggaldokkons input").prop('readonly', false);
        $("#nodokumen").prop('readonly', false);
    }else{
        $("#dokkonstruksi").prop('checked', false);
        konstruksi.dokumen("0");
        $("#tanggaldokkons input").prop('readonly', true);
        $("#nodokumen").prop('readonly', true);
    }

    //Replace Tanggal Dokumen
    var tanggaldokxx = konstruksi.dataAllFromId().TanggalDokumen;
    var tanggalrepldokxx = moment(tanggaldokxx).format('DD MMMM YYYY');

    var datepickxx = $("#tanggaldokkons input");
    datepickxx.datepicker({
            format: 'dd MM yyyy',
            language: 'id'
        });
    datepickxx.datepicker('setDate', tanggalrepldokxx);

    $("#nodokumen").val(konstruksi.dataAllFromId().NomorDokumen);

    //Replace Asal-Usul
    $('#asalusulkonstruksi').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/konstruksi/select_asalusul.php',
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
        $('#asalusulkonstruksi').empty().append('<option selected value='+konstruksi.dataAllFromId().AsalUsul+'>'+konstruksi.dataAllFromId().AsalUsul+'</option>');
    },500);

    //Replace Nilai Perolehan
    $('#nilaiperolehankons').css("font-weight","bold");
    $('#nilaiperolehankons').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehankons").val(konstruksi.dataAllFromId().Nilai).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keterangankons").val(konstruksi.dataAllFromId().Keterangan);
}

konstruksi.hapus = function(n){
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
                url: 'controller/pencarian_aset/konstruksi/konstruksi_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetAlatKonstruksi").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetAlatKonstruksi").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

konstruksi.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkonstruksi").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','konstruksi.cancel()');
        $("#asetsavemutasi").attr('onclick','konstruksi.mutasiSimpan("'+n+'")');
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
            1: konstruksi.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(konstruksi.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: konstruksi.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        konstruksi.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Kantor</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+konstruksi.dataAllFromId().KodeAlatKeamanan+'</td><td>'+konstruksi.dataAllFromId().KodeBarang+'</td><td>'+konstruksi.NmBarangRow()+'</td><td>'+konstruksi.dataAllFromId().GolonganAlatKeamanan+'</td><td>'+konstruksi.dataAllFromId().Merk+'</td><td>'+konstruksi.dataAllFromId().Tipe+'</td><td>'+konstruksi.dataAllFromId().Bahan+'</td><td>'+konstruksi.dataAllFromId().Ukuran+'</td><td>'+konstruksi.dataAllFromId().Jumlah+'</td><td>'+toRpp(konstruksi.dataAllFromId().NilaiPerolehan)+'</td><td>'+konstruksi.dataAllFromId().NoReg+'</td><td>'+konstruksi.dataAllFromId().TahunPerolehan+'</td><td>'+konstruksi.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(konstruksi.dataAllFromId().Kondisi)+'</td></tr>');
    
    })   
}

konstruksi.mutasiSimpan = function(){
    var kodeakeamanan  = konstruksi.dataAllFromId().KodeAlatKeamanan;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = konstruksi.dataAllFromId().KodeBarang;
    var jumlah          = konstruksi.dataAllFromId().Jumlah;
    var harga           = konstruksi.dataAllFromId().NilaiPerolehan;
    var kodebidang      = konstruksi.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = konstruksi.dataAllFromId().KodePemilik;
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
                    konstruksi.cancel();
                });
            }else{
                $("#DataTableAsetAlatKonstruksi").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

konstruksi.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_alatkonstruksi").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','konstruksi.cancel()');
        $("#asetsavepenghapusan").attr('onclick','konstruksi.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: konstruksi.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(konstruksi.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: konstruksi.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        konstruksi.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Alat&nbsp;Kantor</th><th>Merk</th><th>Tipe</th><th>Bahan</th><th>Ukuran</th><th>Jumlah</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+konstruksi.dataAllFromId().KodeAlatKeamanan+'</td><td>'+konstruksi.dataAllFromId().KodeBarang+'</td><td>'+konstruksi.NmBarangRow()+'</td><td>'+konstruksi.dataAllFromId().GolonganAlatKeamanan+'</td><td>'+konstruksi.dataAllFromId().Merk+'</td><td>'+konstruksi.dataAllFromId().Tipe+'</td><td>'+konstruksi.dataAllFromId().Bahan+'</td><td>'+konstruksi.dataAllFromId().Ukuran+'</td><td>'+konstruksi.dataAllFromId().Jumlah+'</td><td>'+toRpp(konstruksi.dataAllFromId().NilaiPerolehan)+'</td><td>'+konstruksi.dataAllFromId().NoReg+'</td><td>'+konstruksi.dataAllFromId().TahunPerolehan+'</td><td>'+konstruksi.dataAllFromId().AsalUsul+'</td><td>'+kondisipersentase(konstruksi.dataAllFromId().Kondisi)+'</td></tr>');
    
    })  
}

konstruksi.penghapusanSimpan = function(){
    var kode            = konstruksi.dataAllFromId().KodeAlatKeamanan;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = konstruksi.dataAllFromId().KodeBarang;
    var jumlah          = konstruksi.dataAllFromId().Jumlah;
    var harga           = konstruksi.dataAllFromId().NilaiPerolehan;
    var kodebidang      = konstruksi.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = konstruksi.dataAllFromId().KodePemilik;
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
                    konstruksi.cancel();
                }); 
            }else{
                $("#DataTableAsetAlatKonstruksi").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

konstruksi.ajaxGetDataKonstruksi = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetAlatKonstruksi").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/konstruksi/konstruksi_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetAlatKonstruksi-error").html("");
                $("#DataTableAsetAlatKonstruksi").append('<tbody class="DataTableAsetAlatKonstruksi-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetAlatKonstruksi").css("display","none");
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
                    return tingkatgedung(data); 
                }
            },
            { 
                targets: [9],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return tingkatgedung(data); 
                }
            },
            { 
                targets: [11],
                render: function(d){
                    return moment(d).format("DD/MM/YYYY");
                }
            },
            { 
                targets: [13],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return tingkatgedung(data); 
                }
            },
            { 
                targets: [14],
                render: function(d){
                    return moment(d).format("DD/MM/YYYY");
                }
            },
            { 
                targets: [17],
                
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
    konstruksi.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetAlatKonstruksi' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetKonstruksi-'+moment().format("DD-MM-YYYY");
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

konstruksi.clickRow = function(){
    var table = $('#DataTableAsetAlatKonstruksi').DataTable();
    $('#DataTableAsetAlatKonstruksi tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','konstruksi.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','konstruksi.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','konstruksi.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','konstruksi.penghapusan("'+data[0]+'")');
            konstruksi.getDataFromId(data[0]);
            $("li.mutasi").hide();
            $("li.penghapusan").hide();
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    konstruksi.prepareAll();
});
