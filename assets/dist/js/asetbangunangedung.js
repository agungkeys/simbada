var ged = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
    nmruangan: ko.observable(""),
    ruangan: ko.observableArray([]),
    dokumenimb: ko.observable("0"),
    tingkatgedung: ko.observable("0"),
    lastResult: ko.observableArray([]),
    nmruangan: ko.observable(""),
    ruangan: ko.observableArray([]),
    indexruangan: ko.observable(1),
}

ged.prepareAll = function(){
    ged.ajaxGetDataGedung();
    
}

ged.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/gedung/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        ged.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

ged.cancel = function(){
    //Table Grid
    $("#table_aset_bangunan").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetBangunan").DataTable().ajax.reload();
    
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
    $("#form_aset_bangunan").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

ged.spottedruangan = function(){
    $("#namaruangangedung").keyup(function(e){
        if(e.keyCode == 13){
            ged.addruangan();
        }
    });
    $("#namaruangangedung").on('keyup',function(){
        $(this).capitalize();
    }).capitalize();
}

ged.addruangan = function(){
    var valtext = ged.nmruangan();
    if (valtext != ""){
        ged.ruangan.push({ namaruangan: ged.nmruangan()});
        ged.nmruangan("");
    }else{
        swal({
            title: "Periksa Kembali",
            text: "Nama Ruangan Belum Terisi...",
            type: "error",
            confirmButtonText: "Ya"
        });
    }
    setTimeout(function(){
        $("#namaruangangedung").focus();
    })
}

ged.removeruangan = function(){
    ged.ruangan.remove(this);
}

ged.ubahSimpan = function(id){
    var kodeged        = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golgedung       = $("#golongangedung").select2('data')[0].text;
    var nmgedung        = $("#namagedung").val();
    var letak           = $("#alamatgedung option:last").html();
    var luastanah       = $("#luastanahgedung").val();
    var luasbangunan    = $("#luasbangunangedung").val();
    var thnperbangunan  = $("#tahunperolehangedung").val();
    var konstruksi      = $("#konstruksigedung").select2('data')[0].text
    var kondisi         = $("#kondisigedung").val();
    var dokimb          = ged.dokumenimb();
    var tanggalsertifikat = $("#tanggalimbgedung").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var asalusul        = $("#asalusulgedung").select2('data')[0].text;
    var asalusullainnya = $("#asalusulgedunglainnya").val();
    var tingkatgd       = ged.tingkatgedung();
    var nilaiperolehan  = toAngka($("#nilaiperolehangedung").val());
    var keterangan      = $("#keterangangedung").val();

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
                url: "./controller/pencarian_aset/gedung/gedung_ubah.php",
                data:{
                    kode: kodeged, 1: kodebarang, 2: kodelokasi, 3: golgedung, 4: nmgedung, 5: letak, 
                    6: luastanah, 7: luasbangunan, 8: konstruksi, 9: kondisi, 10: dokimb,
                    11: tanggalsertifikat, 12: asalusul, 13: asalusullainnya, 14: tingkatgd, 15: nilaiperolehan,
                    16: keterangan, 17: penanggungjawab, 18: lokasipjawab,
                    19: surveyor, 20: tanggalsurvei, 21: matauang, 22: satuankerja, 23: kodepemilik,
                    24: noregister, 25: status, 26: ketstatus, 27: entry, 28: entryuser, 29: thnperbangunan
            }
        }).done(function(data){
            var dt = data.KodeBangunanGedung;

            // insert data kode bangunan gedung to each array data
            var geds = ged.ruangan();
            _.each(geds, function(element, index) {
                _.extend(element, {no: index}, {kodegedung: dt});
            });

            // ajax for save data ruangan
            $.ajax({
                dataType: "json",
                type: "post",
                url: "./controller/pencarian_aset/gedung/ruangan_ubah.php",
                data: {data : geds, kdbgedung: dt},
            })

            swal({
                title: "Berhasil Dirubah!",
                text: "Data Bangunan Gedung Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            ged.cancel();
        });
    }
}

ged.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_bangunan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','ged.cancel()');
        $("#asetsaveubah").attr('onclick','ged.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(ged.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: ged.dataAllFromId().KodeBarang
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
                1: ged.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+ged.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(ged.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(ged.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(ged.dataAllFromId().NoReg);
        // $("#fdu_currency").val(ged.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+ged.dataAllFromId().MataUang+'>'+ged.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = ged.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(ged.dataAllFromId().Surveyor);

    //Replace Detail Bangunan Gedung======================================================

    //Replace Golongan Bangunan Gedung
    $('#golongangedung').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/gedung/select_bangunangedung.php',
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
        $('#golongangedung').empty().append('<option selected value='+ged.dataAllFromId().GolonganBangunanGedung+'>'+ged.dataAllFromId().GolonganBangunanGedung+'</option>');
    },500)

    //Replace Alamat Bangunan Gedung
    $("#namagedung").val(ged.dataAllFromId().NamaBangunan);

    //Replace Nama Bangunan Bangunan Gedung
    $('#alamatgedung').select2({
            placeholder: 'Pilih Data Lokasi...',
            tags: true,
            ajax: {
                url: './controller/entry_asset/gedung/select_alamat.php',
                dataType: 'json',
                delay: 250,
                processResults: function (data) {
                    return {
                        results: data
                    };
                },
                cache: false
            }
        });
    setTimeout(function(){
        $('#alamatgedung').empty().append('<option selected value='+ged.dataAllFromId().Letak+'>'+ged.dataAllFromId().Letak+'</option>');
    },500);

    $("#luastanahgedung").val(ged.dataAllFromId().LuasTanah);
    $("#luasbangunangedung").val(ged.dataAllFromId().LuasBangunan);
    $("#tahunperolehangedung").val(ged.dataAllFromId().TahunPerolehan);

    $('#konstruksigedung').select2({
        placeholder: 'Pilih Data Konstruksi Gedung...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/gedung/select_konstruksigedung.php',
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
        $('#konstruksigedung').empty().append('<option selected value='+ged.dataAllFromId().Konstruksi+'>'+ged.dataAllFromId().Konstruksi+'</option>');
    },500);

    $("#kondisigedung").val(ged.dataAllFromId().Kondisi);

    //Replace Tanggal
    setTimeout(function(){
        $('#tanggalimbgedung').datepicker({
            language: "id",
            format: "dd MM yyyy",
            todayBtn: "linked",
            toggleActive: true
        });
    },500)
    

    $("#tanggalimbgedung input").attr('disabled',true);
    $("#tanggalimbgedung input").val("").datepicker("update");

    $("#dokumenimb").change(function(){
        var sertifikat = $("#dokumenimb").is(':checked');
        if(sertifikat != true){
            ged.dokumenimb("0");
            $("#tanggalimbgedung input").attr('disabled',true);
            $("#tanggalimbgedung input").val("").datepicker("update");
        }else{
            ged.dokumenimb("1111111111111111111111111111111");
            $("#tanggalimbgedung input").attr('disabled',false);
            // $("#nosertifikat").attr('disabled',false);
        }  
    });

    var chklist = ged.dataAllFromId().Dokumen
    if(chklist > 1){
        $("#dokumenimb").prop('checked',true);
        $("#tanggalimbgedung input").attr('disabled',false);
        ged.dokumenimb("1111111111111111111111111111111");
    }else{
        $("#dokumenimb").prop('checked',false);
        $("#tanggalimbgedung input").attr('disabled',true);
        ged.dokumenimb("0");
        $("#tanggalimbgedung input").val("").datepicker("update");
    }

    //Replace Tanggal Survei
    var tanggalsur = ged.dataAllFromId().TanggalDokumen;
    var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

    var datepick = $("#tanggalimbgedung");
    datepick.datepicker({
            format: 'dd MM yyyy',
            language: 'id'
        });
    datepick.datepicker('setDate', tanggalrepl);

    //Replace Asal-Usul
    $('#asalusulgedung').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/gedung/select_asalusul.php',
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
        $('#asalusulgedung').empty().append('<option selected value='+ged.dataAllFromId().AsalUsul+'>'+ged.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#asalusulgedunglainnya").val(ged.dataAllFromId().AsalUsulLainnya);

    //Replace Data Checklist Tingkat Gedung
    $("#tingkatgedung").change(function(){
        var tingkatged = $("#tingkatgedung").is(':checked');
        if(tingkatged != true){
            ged.tingkatgedung("0");
        }else{
            ged.tingkatgedung("1111111111111111111111111111111");
        }  
    });
    var chktngkt = ged.dataAllFromId().Tingkat
    if(chktngkt > 1){
        $("#tingkatgedung").prop('checked',true);
        ged.tingkatgedung("1111111111111111111111111111111");
    }else{
        $("#tingkatgedung").prop('checked',false);
        ged.tingkatgedung("0");
    }

    //Replace Nilai Perolehan
    $('#nilaiperolehangedung').css("font-weight","bold");
    $('#nilaiperolehangedung').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehangedung").val(ged.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keterangangedung").val(ged.dataAllFromId().Keterangan);
    ged.spottedruangan();

    //Replace Data Ruangan From Database To UI Front
    // Reset dulu
    ged.ruangan([]);

    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/gedung/select_data_ruangan.php",
        data:{ koder: n}
    }).done(function(data){
        var rawdt = [];
        _.each(data, function(d){
            rawdt.push({koderuang: d.KodeRuangan, namaruangan: d.NamaRuangan, kodebangunan: d.KodeBangunanGedung})
        })
        // console.log(rawdt);
        ged.ruangan(rawdt);
    })
}

ged.resetLetak = function(){
    $('#alamatgedung').empty().append('<option selected></option>');
}

ged.hapus = function(n){
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
                url: 'controller/pencarian_aset/gedung/gedung_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetBangunan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetBangunan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

ged.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','ged.cancel()');
        $("#asetsavemutasi").attr('onclick','ged.mutasiSimpan("'+n+'")');
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
            1: ged.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(ged.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: ged.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        ged.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Gedung</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Gedung</th><th>Nama&nbsp;Gedung</th><th>Luas&nbsp;Tanah</th><th>Luas&nbsp;Bangunan</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+ged.dataAllFromId().KodeBangunanGedung+'</td><td>'+ged.dataAllFromId().KodeBarang+'</td><td>'+ged.NmBarangRow()+'</td><td>'+ged.dataAllFromId().GolonganBangunanGedung+'</td><td>'+ged.dataAllFromId().NamaBangunan+'</td><td>'+ged.dataAllFromId().LuasTanah+'</td><td>'+ged.dataAllFromId().LuasBangunan+'</td><td>'+toRpp(ged.dataAllFromId().NilaiPerolehan)+'</td><td>'+ged.dataAllFromId().NoReg+'</td><td>'+ged.dataAllFromId().TahunPerolehan+'</td><td>'+ged.dataAllFromId().AsalUsul+'</td><td>'+ged.dataAllFromId().Kondisi+'</td></tr>');
    
    })   
}

ged.mutasiSimpan = function(){
    var kodeged         = ged.dataAllFromId().KodeBangunanGedung;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = ged.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = ged.dataAllFromId().NilaiPerolehan;
    var kodebidang      = ged.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = ged.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/gedung/gedung_mutasi.php",
                    data:{
                        1: kodeged, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Bangunan Gedung Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    ged.cancel();
                });
            }else{
                $("#DataTableAsetBangunan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

ged.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_bangunan").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','ged.cancel()');
        $("#asetsavepenghapusan").attr('onclick','ged.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: ged.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(ged.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: ged.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        ged.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Gedung</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Gedung</th><th>Nama&nbsp;Gedung</th><th>Luas&nbsp;Tanah</th><th>Luas&nbsp;Bangunan</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+ged.dataAllFromId().KodeBangunanGedung+'</td><td>'+ged.dataAllFromId().KodeBarang+'</td><td>'+ged.NmBarangRow()+'</td><td>'+ged.dataAllFromId().GolonganBangunanGedung+'</td><td>'+ged.dataAllFromId().NamaBangunan+'</td><td>'+ged.dataAllFromId().LuasTanah+'</td><td>'+ged.dataAllFromId().LuasBangunan+'</td><td>'+toRpp(ged.dataAllFromId().NilaiPerolehan)+'</td><td>'+ged.dataAllFromId().NoReg+'</td><td>'+ged.dataAllFromId().TahunPerolehan+'</td><td>'+ged.dataAllFromId().AsalUsul+'</td><td>'+ged.dataAllFromId().Kondisi+'</td></tr>');
    
    })  
}

ged.penghapusanSimpan = function(){
    var kode            = ged.dataAllFromId().KodeBangunanGedung;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = ged.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = ged.dataAllFromId().NilaiPerolehan;
    var kodebidang      = ged.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = ged.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/gedung/gedung_penghapusan.php",
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
                    ged.cancel();
                }); 
            }else{
                $("#DataTableAsetBangunan").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

ged.ajaxGetDataGedung = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetBangunan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/gedung/gedung_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetBangunan-error").html("");
                $("#DataTableAsetBangunan").append('<tbody class="DataTableAsetBangunan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetBangunan_processing").css("display","none");
            },
            complete: function() {
            }
        },
        "order": [[ 0, 'asc' ]],
        "sScrollY": 400, //height
        "sScrollX": "100%",
        "columnDefs": [ 
            { 
                targets: [7],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return formatNumber(data);  
                }
            },
            { 
                targets: [8],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return formatNumber(data);  
                }
            },
            { 
                targets: [11],
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return tingkatgedung(data);  
                }
            },
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
    ged.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetBangunan' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetBangunanGedung-'+moment().format("DD-MM-YYYY");
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

ged.clickRow = function(){
    var table = $('#DataTableAsetBangunan').DataTable();
    $('#DataTableAsetBangunan tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','ged.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','ged.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','ged.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','ged.penghapusan("'+data[0]+'")');
            ged.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    ged.prepareAll();
});
