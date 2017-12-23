var mon = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
    dokumenimb: ko.observable("0"),
    tingkatmonumen: ko.observable("0")
}

mon.prepareAll = function(){
    mon.ajaxGetDataMonumen();
    
}

mon.getDataFromId = function(id){
    $.ajax({
        dataType: "json",
        type: "post",
        url: "./controller/entry_asset/monumen/select_all_from_id.php",
        data:{
            1: id
        }
    }).done(function(data){
        mon.dataAllFromId(data);
        fdu.tampungKodeLokasi(data.KodeLokasi)
    })
}

mon.cancel = function(){
    //Table Grid
    $("#table_aset_monumen").show();
    $("#asetnavigasiexport").show();
    $("#DataTableAsetMonumen").DataTable().ajax.reload();
    
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
    $("#form_aset_monumen").hide();

    $("#form_mutasi").hide();
    $("#form_penghapusan").hide();
}

mon.ubahSimpan = function(id){
    var kodemon        = id;
    var kodelokasi      = $("#fdu_kdlokasi").val();
    var kodebarang      = $("#fdu_kodebarang").val();

    var golmonumen      = $("#golonganmonumen").select2('data')[0].text;
    var nmmonumen       = $("#namamonumen").val();
    var letak           = $("#alamatmonumen").val();
    var luastanah       = $("#luastanahmonumen").val();
    var luasbangunan    = $("#luasmonumen").val();
    var thnperolehan    = $("#tahunperolehanmonumen").val();
    var konstruksi      = $("#konstruksimonumen").val();
    var kondisi         = $("#kondisimonumen").val();
    var dokimb          = mon.dokumenimb();
    var tanggalsertifikat = $("#tanggalimbmon").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var asalusul        = $("#asalusulmon").select2('data')[0].text;
    var asalusullainnya = $("#asalusulmonlainnya").val();
    var tingkatgd       = mon.tingkatmonumen();
    var nilaiperolehan  = toAngka($("#nilaiperolehanmon").val());
    var keterangan      = $("#keteranganmon").val();

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
                url: "./controller/pencarian_aset/monumen/monumen_ubah.php",
                data:{
                    kode: kodemon, 1: kodelokasi, 2: kodebarang, 3: golmonumen, 4: nmmonumen, 5: letak, 
                    6: luastanah, 7: luasbangunan, 8: thnperolehan, 9: konstruksi, 10: kondisi, 11: dokimb,
                    12: tanggalsertifikat, 13: asalusul, 14: asalusullainnya, 15: tingkatgd, 16: nilaiperolehan,
                    17: keterangan, 18: penanggungjawab, 19: lokasipjawab,
                    20: surveyor, 21: tanggalsurvei, 22: matauang, 23: satuankerja, 24: kodepemilik,
                    25: noregister, 26: entryuser 
            }
        }).done(function(data){
            // console.log("DATA TELAH BERHASIL DIINPUT")
            swal({
                title: "Berhasil Dirubah!",
                text: "Data Monumen Berhasil Dirubah",
                type: "success",
                confirmButtonText: "Ya"
            });
            mon.cancel();
        });
    }
}

mon.ubah = function(n){
    // console.log("Masuk Ubah "+n);

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_monumen").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Edit
    $("#form_data_utama").show();
    $("#form_aset_monumen").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsaveubah").show();
        $("#asetbatal").attr('onclick','mon.cancel()');
        $("#asetsaveubah").attr('onclick','mon.ubahSimpan("'+n+'")');
        $("#asetsavemutasi").hide();
        $("#asetsavepenghapusan").hide();
    });

    //Prepare Data Utama
        fdu.prepare();

        // Replace Data Barang
        $("#fdu_kodebarang").val(mon.dataAllFromId().KodeBarang);
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/pencarian_aset/_datautama/select_namabarang.php",
            data:{
                1: mon.dataAllFromId().KodeBarang
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
                1: mon.dataAllFromId().KodePemilik
            }
        }).done(function(data){
            $('#fdu_kepemilikan').empty().append('<option selected value='+mon.dataAllFromId().KodePemilik+'>'+data.NamaPemilik+'</option>');
        })

        //Replace Data Utama
        $("#fdu_penanggungjawab").val(mon.dataAllFromId().PenanggungJawab);
        $("#fdu_lokasipenanggungjawab").val(mon.dataAllFromId().LokasiPenanggungJawab);
        $("#fdu_noregister").val(mon.dataAllFromId().NoReg);
        // $("#fdu_currency").val(mon.dataAllFromId().MataUang);
        $('#fdu_currency').empty().append('<option selected value='+mon.dataAllFromId().MataUang+'>'+mon.dataAllFromId().MataUang+'</option>');

        //Replace Tanggal Survei
        var tanggalsur = mon.dataAllFromId().TglSurvey;
        var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');

        var datepick = $("#fdu_tanggalsurvei input");
        datepick.datepicker({
                format: 'dd MM yyyy',
                language: 'id'
            });
        datepick.datepicker('setDate', tanggalrepl);
        
        //Replace Surveyor
        $("#fdu_surveyor").val(mon.dataAllFromId().Surveyor);

    //Replace Detail Monumen======================================================

    //Replace Golongan Monumen
    $('#golonganmonumen').select2({
        placeholder: 'Pilih Data Golongan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/monumen/select_golonganmonumen.php',
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
        $('#golonganmonumen').empty().append('<option selected value='+mon.dataAllFromId().GolonganMonumen+'>'+mon.dataAllFromId().GolonganMonumen+'</option>');
    },500)

    //Replace Nama Bangunan Monumen
    $("#namamonumen").val(mon.dataAllFromId().NamaMonumen);

    //Replace Letak Monumen
    $("#alamatmonumen").val(mon.dataAllFromId().Letak);

    //Replace Tahun Perolehan dan Pembuatan
    $("#tahunperolehanmonumen").val(mon.dataAllFromId().TahunPerolehan);
    $("#kondisimonumen").val(mon.dataAllFromId().Kondisi);
    // $("#bahanbangunanjar").val(mon.dataAllFromId().Bahan);

    //Luas Tanah Monumen
    $("#luastanahmonumen").val(mon.dataAllFromId().LuasTanah);
    //Luas Bangunan Monumen
    $("#luasmonumen").val(mon.dataAllFromId().LuasBangunan);

    //Replace Konstruksi
    $('#konstruksimonumen').select2({
        placeholder: 'Pilih Konstruksi...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/monumen/select_konstruksimonumen.php',
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
        $('#konstruksimonumen').empty().append('<option selected value='+mon.dataAllFromId().Konstruksi+'>'+mon.dataAllFromId().Konstruksi+'</option>');
    },500);


    //Replace Tanggal
    setTimeout(function(){
        $('#tanggalimbmon').datepicker({
            language: "id",
            format: "dd MM yyyy",
            todayBtn: "linked",
            toggleActive: true
        });
    },500)
    

    $("#tanggalimbmon input").attr('disabled',true);
    $("#tanggalimbmon input").val("").datepicker("update");

    $("#dokumenmon").change(function(){
        var sertifikat = $("#dokumenmon").is(':checked');
        if(sertifikat != true){
            mon.dokumenimb("0");
            $("#tanggalimbmon input").attr('disabled',true);
            $("#tanggalimbmon input").val("").datepicker("update");
        }else{
            mon.dokumenimb("1111111111111111111111111111111");
            $("#tanggalimbmon input").attr('disabled',false);
            // $("#nosertifikat").attr('disabled',false);
        }  
    });

    var chklist = mon.dataAllFromId().Dokumen
    if(chklist > 1){
        $("#dokumenmon").prop('checked',true);
        $("#tanggalimbmon input").attr('disabled',false);
        mon.dokumenimb("1111111111111111111111111111111");
    }else{
        $("#dokumenmon").prop('checked',false);
        $("#tanggalimbmon input").attr('disabled',true);
        mon.dokumenimb("0");
        $("#tanggalimbmon input").val("").datepicker("update");
    }

    //Replace Tanggal Survei
    var tanggalsur = mon.dataAllFromId().TanggalDokumen;
    var tanggalrepl = moment(tanggalsur).format('DD MMMM YYYY');
    console.log(tanggalrepl)

    var datepick = $("#tanggalimbmon");
    datepick.datepicker({
            format: 'dd MM yyyy',
            language: 'id'
        });
    datepick.datepicker('setDate', tanggalrepl);

    

    //Replace Asal-Usul
    $('#asalusulmon').select2({
        placeholder: 'Pilih Asal Usul...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/monumen/select_asalusulmonumen.php',
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
        $('#asalusulmon').empty().append('<option selected value='+mon.dataAllFromId().AsalUsul+'>'+mon.dataAllFromId().AsalUsul+'</option>');
    },500);

    $("#asalusuljarlainnya").val(mon.dataAllFromId().AsalUsulLainnya);

    //Replace Data Checklist Tingkat Gedung
    $("#tingkatmon").change(function(){
        var tingkatged = $("#tingkatmon").is(':checked');
        if(tingkatged != true){
            mon.tingkatmonumen("0");
        }else{
            mon.tingkatmonumen("1111111111111111111111111111111");
        }  
    });
    var chktngkt = mon.dataAllFromId().Tingkat
    if(chktngkt > 1){
        $("#tingkatmon").prop('checked',true);
        mon.tingkatmonumen("1111111111111111111111111111111");
    }else{
        $("#tingkatmon").prop('checked',false);
        mon.tingkatmonumen("0");
    }

    //Replace Nilai Perolehan
    $('#nilaiperolehanmon').css("font-weight","bold");
    $('#nilaiperolehanmon').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    $("#nilaiperolehanmon").val(mon.dataAllFromId().NilaiPerolehan).trigger('mask.maskMoney');

    //Replace Keterangan
    $("#keteranganmon").val(mon.dataAllFromId().Keterangan);
}

mon.hapus = function(n){
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
                url: 'controller/pencarian_aset/monumen/monumen_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTableAsetMonumen").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTableAsetMonumen").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

mon.mutasi = function(n){
    // console.log("Masuk Mutasi "+n)

    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_monumen").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_mutasi").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavemutasi").show();
        $("#asetbatal").attr('onclick','mon.cancel()');
        $("#asetsavemutasi").attr('onclick','mon.mutasiSimpan("'+n+'")');
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
            1: mon.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#mlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#mkodelokasiasal").val(mon.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: mon.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        mon.NmBarangRow(data.NamaBarang);

        //Replace Data Table Mutasi
        $('#tablemutasidetails > thead').empty();
        $('#tablemutasidetails > tbody').empty();
        $('#tablemutasidetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Monumen</th><th>Luas&nbsp;Tanah</th><th>Luas&nbsp;Monumen</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablemutasidetails > tbody').append('<tr><td>'+mon.dataAllFromId().KodeMonumen+'</td><td>'+mon.dataAllFromId().KodeBarang+'</td><td>'+mon.NmBarangRow()+'</td><td>'+mon.dataAllFromId().GolonganMonumen+'</td><td>'+mon.dataAllFromId().LuasTanah+'</td><td>'+mon.dataAllFromId().LuasBangunan+'</td><td>'+toRpp(mon.dataAllFromId().NilaiPerolehan)+'</td><td>'+mon.dataAllFromId().NoReg+'</td><td>'+mon.dataAllFromId().TahunPerolehan+'</td><td>'+mon.dataAllFromId().AsalUsul+'</td><td>'+mon.dataAllFromId().Kondisi+'</td></tr>');
    
    })   
}

mon.mutasiSimpan = function(){
    var kodemon         = mon.dataAllFromId().KodeMonumen;
    var kodelokasal     = $("#mkodelokasiasal").val();
    var kodeloktujuan   = $("#mkodelokasitujuan").val();
    var kodebarang      = mon.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = mon.dataAllFromId().NilaiPerolehan;
    var kodebidang      = mon.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = mon.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/monumen/monumen_mutasi.php",
                    data:{
                        1: kodemon, 2: kodelokasal, 3: kodeloktujuan, 4: kodebarang, 
                        5: jumlah, 6: harga, 7: kodebidang, 8: kodepemilik, 9: tahunmutasi, 
                        10: semester, 11: status, 12: keterangan
                    }
                }).done(function(data){
                    // console.log("DATA TELAH BERHASIL DIINPUT")
                    swal({
                        title: "Berhasil Dimutasi!",
                        text: "Data Monumen Berhasil Dimutasi",
                        type: "success",
                        confirmButtonText: "Ya"
                    });
                    mon.cancel();
                });
            }else{
                $("#DataTableAsetMonumen").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dimutasi", "error");
            }
            
        });
    }
}

mon.penghapusan = function(n){
    // console.log("Masuk Penghapusan "+n)
    //Table Grid
    $("#modal-menu").modal('hide');
    $("#table_aset_monumen").hide();
    $("#asetnavigasiexport").hide();

    //Menu Navigasi
    $("#asetnavigasi").show();

    //Form Mutasi
    $("#form_penghapusan").show();

    //Navigasi
    setTimeout(function(){
        $("#asetbatal").show();
        $("#asetsavepenghapusan").show();
        $("#asetbatal").attr('onclick','mon.cancel()');
        $("#asetsavepenghapusan").attr('onclick','mon.penghapusanSimpan("'+n+'")');
        $("#asetsaveubah").hide();
        $("#asetsavemutasi").hide();
    });

    //Replace Data Penghapusan Lokasi Asal
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
        data:{
            1: mon.dataAllFromId().KodeLokasi
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        $("#hlokasiasal").val(data.SatuanKerja)
    })
    //Replace Kode Lokasi Asal
    $("#hkodelokasiasal").val(mon.dataAllFromId().KodeLokasi);

    //Get Nama Barang
    $.ajax({
        dataType: "json",
        type: "post",
        url: "controller/pencarian_aset/_datautama/select_namabarang.php",
        data:{
            1: mon.dataAllFromId().KodeBarang
        }
    }).done(function(data){
        //Replace Lokasi Asal Name
        mon.NmBarangRow(data.NamaBarang);

        //Replace Data Table Penghapusan
        $('#tablepenghapusandetails > thead').empty();
        $('#tablepenghapusandetails > tbody').empty();
        $('#tablepenghapusandetails > thead').append('<tr style="background: #eee;"><th>Kode&nbsp;Alat</th><th>Kode&nbsp;Barang</th><th>Nama&nbsp;Barang</th><th>Jenis&nbsp;Monumen</th><th>Luas&nbsp;Tanah</th><th>Luas&nbsp;Monumen</th><th>Nilai</th><th>No.&nbsp;Reg.</th><th>Tahun&nbsp;Perolehan</th><th>Asal&nbsp;Usul</th><th>Kondisi</th></tr>');
        $('#tablepenghapusandetails > tbody').append('<tr><td>'+mon.dataAllFromId().KodeMonumen+'</td><td>'+mon.dataAllFromId().KodeBarang+'</td><td>'+mon.NmBarangRow()+'</td><td>'+mon.dataAllFromId().GolonganMonumen+'</td><td>'+mon.dataAllFromId().LuasTanah+'</td><td>'+mon.dataAllFromId().LuasBangunan+'</td><td>'+toRpp(mon.dataAllFromId().NilaiPerolehan)+'</td><td>'+mon.dataAllFromId().NoReg+'</td><td>'+mon.dataAllFromId().TahunPerolehan+'</td><td>'+mon.dataAllFromId().AsalUsul+'</td><td>'+mon.dataAllFromId().Kondisi+'</td></tr>');
    
    })  
}

mon.penghapusanSimpan = function(){
    var kode            = mon.dataAllFromId().KodeMonumen;
    var kodelokasal     = $("#hkodelokasiasal").val();
    var kodebarang      = mon.dataAllFromId().KodeBarang;
    var jumlah          = "1";
    var harga           = mon.dataAllFromId().NilaiPerolehan;
    var kodebidang      = mon.dataAllFromId().KodeBarang.substring(0,4);
    var kodepemilik     = mon.dataAllFromId().KodePemilik;
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
                    url: "./controller/pencarian_aset/monumen/monumen_penghapusan.php",
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
                    mon.cancel();
                }); 
            }else{
                $("#DataTableAsetMonumen").DataTable().ajax.reload();
                swal("Batal", "Data Batal Dihapus", "error");
            }
            
        });
    }
}

mon.ajaxGetDataMonumen = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetMonumen").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/monumen/monumen_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetMonumen-error").html("");
                $("#DataTableAsetMonumen").append('<tbody class="DataTableAsetMonumen-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetMonumen_processing").css("display","none");
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
            { 
                targets: [10],
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
    mon.clickRow();

    //Custom Button for export data
    var dt = $('#DataTableAsetMonumen' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataAsetMonumen-'+moment().format("DD-MM-YYYY");
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

mon.clickRow = function(){
    var table = $('#DataTableAsetMonumen').DataTable();
    $('#DataTableAsetMonumen tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-menu").modal('show'); 
            // alert(avals);
            $("li.ubah").attr('onclick','mon.ubah("'+data[0]+'")');
            $("li.hapus").attr('onclick','mon.hapus("'+data[0]+'")');
            $("li.mutasi").attr('onclick','mon.mutasi("'+data[0]+'")');
            $("li.penghapusan").attr('onclick','mon.penghapusan("'+data[0]+'")');
            mon.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    mon.prepareAll();
});
