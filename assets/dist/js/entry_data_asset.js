var du = {
}
var tanah = {
    // save: ko.observable(true),
    bersertifikat: ko.observable("0"),
    datawal: ko.observable("0"),
    statustanahlainnya: ko.observable("NULL"),
    asalusullainnya: ko.observable("NULL"),
    tppermukaanlainnya: ko.observable("NULL"),
    lingksekitarlainnya: ko.observable("NULL")
}
var jalan = {
    tppermukaanlainnya: ko.observable("NULL"),
    asalusullainnyajalan: ko.observable("NULL"),
    datawal: ko.observable("0"),
    tppermukaanlainnya: ko.observable("NULL"),
    asalusullainnya: ko.observable("NULL"),
    dataawal: ko.observable("0"),
}
var jembatan = {
    pondasilainnya: ko.observable("NULL"),
    bahanpondasilainnya: ko.observable("NULL"),
    lantaitypelainnya: ko.observable("NULL"),
    bahankonstruksilainnya: ko.observable("NULL"),
    asalusuljembatanlainnya: ko.observable("NULL"),
    datawal: ko.observable("0"),
}
var air = {
    asalusullainnya: ko.observable("NULL"),
    datawal: ko.observable("0"),
}
var instalasi = {
    asalusullainnya: ko.observable("NULL"),
    datawal: ko.observable("0"),
}
var jaringan = {
    asalusullainnya: ko.observable("NULL"),
    datawal: ko.observable("0"),
}
var gedung = {
    dokumenimb: ko.observable("0"),
    tingkatgedung: ko.observable("0"),
    dataawal: ko.observable("0"),
    plngedung: ko.observable("0"),
    pamgedung: ko.observable("0"),
    telpgedung: ko.observable("0"),
    pondasigedunglainnya: ko.observable("NULL"),
    lantaigedunglainnya: ko.observable("NULL"),
    dindinggedunglainnya: ko.observable("NULL"),
    plafongedunglainnya: ko.observable("NULL"),
    atapgedunglainnya: ko.observable("NULL"),
    plafongedunglainnya: ko.observable("NULL"),
    atapgedunglainnya: ko.observable("NULL"),
    asalusullainnya: ko.observable("NULL"),
    lastResult: ko.observableArray([]),
    nmruangan: ko.observable(""),
    ruangan: ko.observableArray([]),
    indexruangan: ko.observable(1),
}

var monumen = {
    asalusullainnya: ko.observable("NULL"),
    dokumenimb: ko.observable("0"),
    tingkatmon: ko.observable("0"),
}
var alatbesar = {

}

// Start Tanah

    tanah.clear = function(){
        $("#golongantanah").empty();
        tanah.selectGolonganTanah();
        $("#luastanah").val("");
        $("#kesesuaiandata").prop('checked', false);
        $("#letakalamat").val("");

        $("#statustanah").empty();
        tanah.selectStatusTanah();
        $("#ststanahlainnya").val("");
        $(".statustanahlainnya").hide();

        $("#sertifikat").prop('checked', false);
        $('#tanggaldokumen').datepicker('setDate', null);
        $("#nosertifikat").val("");
        $("#tahunperolehan").val("");
        $("#penggunaan").val("");

        $("#asalusul").empty()
        tanah.selectAsalUsul();
        $("#aslusul").val("");
        $(".asalusullainnya").hide();

        $("#batasutara").val("");
        $("#batastimur").val("");
        $("#batasselatan").val("");
        $("#batasbarat").val("");

        $("#tipepermukaan").empty()
        tanah.selectTipePermukaan();
        $("#tppermukaanlainnya").val("");
        $(".tipepermukaanlainnya").hide();

        $("#lebarjalandepan").val("");
        $("#jarakkelokasi").val("");
        $("#bangunanpetunjuk").val("");

        $("#lingkungansekitar").empty()
        tanah.selectLingkunganSekitar();
        $("#lingksekitarlainnya").val("");
        $(".lingkungansekitarlainnya").hide();

        $("#hargatanah").val("");
        $("#rangeharga1").val("");
        $("#rangeharga2").val("");
        $("#nilaibaru").val("");
        $("#nilaiperolehan").val("");
        $("#hargapasar").val("");
        $("#keterangan").val("");
    }

    tanah.selectGolonganTanah = function(){
        $('#golongantanah').select2({
            placeholder: 'Pilih Data Golongan...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/tanah/select_golongantanah.php',
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
    }

    tanah.selectStatusTanah = function(){
        $('#statustanah').select2({
            placeholder: 'Pilih Status Tanah...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/tanah/select_statustanah.php',
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
    }

    tanah.selectStatusTanahLainnya = function(){
        var st = $("#statustanah").val();
        if(st == "163"){
            $(".statustanahlainnya").show();
            setTimeout(function(){
                $("#ststanahlainnya").focus();
                $('#ststanahlainnya').change(function(){
                    var a = $("#ststanahlainnya").val();
                    tanah.statustanahlainnya(a);
                });
            })
            
        }else{
            $(".statustanahlainnya").hide();
            tanah.statustanahlainnya("NULL")
        }
    }

    tanah.selectAsalUsul = function(){
        $('#asalusul').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/tanah/select_asalusul.php',
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
    }

    tanah.selectAsalUsulLainnya = function(){
        var st = $("#asalusul").val();
        if(st == "215"){
            $(".asalusullainnya").show();
            setTimeout(function(){
                $("#aslusul").focus();
                $('#aslusul').change(function(){
                    var a = $("#aslusul").val();
                    tanah.asalusullainnya(a);
                });
            });
        }else{
            $(".asalusullainnya").hide();
            tanah.asalusullainnya("NULL")
        }
    }

    tanah.selectTipePermukaan = function(){
        $('#tipepermukaan').select2({
            placeholder: 'Pilih Tipe Permukaan...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/tanah/select_tipepermukaan.php',
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
    }

    tanah.selectTipePermukaanLainnya = function(){
        var st = $("#tipepermukaan").val();
        if(st == "174"){
            $(".tipepermukaanlainnya").show();
            setTimeout(function(){
                $("#tppermukaanlainnya").focus();
                $('#tppermukaanlainnya').change(function(){
                    var a = $("#tppermukaanlainnya").val();
                    tanah.tppermukaanlainnya(a);
                });
            })
        }else{
            $(".tipepermukaanlainnya").hide();
            tanah.tppermukaanlainnya("NULL");
        }
    }

    tanah.selectLingkunganSekitar = function(){
        $('#lingkungansekitar').select2({
            placeholder: 'Pilih Lingkungan Sekitar...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/tanah/select_lingkungansekitar.php',
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
    }

    tanah.selectLingkunganSekitarLainnya = function(){
        var v = $("#lingkungansekitar").val();
        if(v == "139"){
            $(".lingkungansekitarlainnya").show();
            setTimeout(function(){
                $("#lingksekitarlainnya").focus();
                $('#lingksekitarlainnya').change(function(){
                    var a = $("#lingksekitarlainnya").val();
                    tanah.lingksekitarlainnya(a);
                });
            })
        }else{
            $(".lingkungansekitarlainnya").hide();
            tanah.lingksekitarlainnya("NULL")
        }
    }

    tanah.prepareDatePicker = function(){
        $('#tanggaldokumen').datepicker({
            language: "id",
            format: "dd MM yyyy",
            todayBtn: "linked",
            toggleActive: true
        });
    }

    tanah.replaceCurrency = function(){
        $("#nilaiperolehan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehan").val();
                var b = toRp(a);
                $("#nilaiperolehan").val(b);
            }
            $("#keterangan").focus(function(){
                var a = $("#nilaiperolehan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehan").val(c);
            })
        });
    }

    tanah.prepareCheckBox = function(){
        // $("#tanggaldokumen").prop('disabled', true);

        $("#kesesuaiandata").change(function(){
            var sesuai = $("#kesesuaiandata").is(':checked');
            if(sesuai != true){
                tanah.datawal("0");
            }else{
                tanah.datawal("1111111111111111111111111111111");
            }  
        });

        $("#tanggaldokumen input").attr('disabled',true);
        $("#nosertifikat").attr('disabled',true);

        $("#sertifikat").change(function(){
            var sertifikat = $("#sertifikat").is(':checked');
            if(sertifikat != true){
                tanah.bersertifikat("0");
                $("#tanggaldokumen input").attr('disabled',true);
                $("#nosertifikat").attr('disabled',true);
                $("#tanggaldokumen input").val("");
                $("#nosertifikat").val("");
            }else{
                tanah.bersertifikat("1111111111111111111111111111111");
                $("#tanggaldokumen input").attr('disabled',false);
                $("#nosertifikat").attr('disabled',false);
            }  
        });


    }

    tanah.saveForm = function(){
        var kodelokasi      = $("#kdlokasi").val();
        var kodebarang      = $("#kodebarang").val();
        var golongantanah   = $("#golongantanah").select2().text();
        var luastanah       = $("#luastanah").val();
        var tahunperolehan  = $("#tahunperolehantanah").val();
        var letak           = $("#letakalamat").val();
        var statustanah     = $("#statustanah").select2().text();
        var statustanahlain = tanah.statustanahlainnya();
        var bersertifikat   = tanah.bersertifikat();
        var tanggalsertifikat = $("#tanggaldokumen").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var nosertifikat    = $('#nosertifikat').val();
        var penggunaan      = $('#penggunaan').val();
        var asalusul        = $("#asalusul").select2().text();
        var asalusullainnya = tanah.asalusullainnya();
        var dataawal        = tanah.datawal();
        var nilaiperolehan  = toAngka($('#nilaiperolehan').val());
        var keterangan      = $('#keterangan').val();

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2().text();
        var kodetanahlama   = "NULL";
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       ="NULL";
        var entry           ="NULL";
        var entryuser       = $(".user_name").html();

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
                url: "./controller/entry_asset/tanah/tanah_add.php",
                data:{
                    1: kodelokasi, 2: kodebarang, 3: golongantanah, 4: luastanah, 5: tahunperolehan, 
                    6: letak, 7: statustanah, 8: statustanahlain, 9: bersertifikat, 10: tanggalsertifikat,
                    11: nosertifikat, 12: penggunaan, 13: asalusul, 14: asalusullainnya, 15: dataawal,
                    16: nilaiperolehan, 17: keterangan, 18: penanggungjawab, 19: lokasipjawab, 20: surveyor,
                    21: tanggalsurvei, 22: matauang, 23: satuankerja, 24: kodetanahlama, 25: kodepemilik,
                    26: noregister, 27: status, 28: ketstatus, 29: entry, 30: entryuser
                }
            }).done(function(data){
                // console.log("DATA TELAH BERHASIL DIINPUT")
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Tanah Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            });
        }
    }

// End Tanah


// Start Jalan

    jalan.clear = function(){
        $("#jenisjalan").empty();
        jalan.selectJenisJalan();
        $("#namajalan").val("");
        $("#namapangkalruas").val("");
        $("#namaujungruas").val("");
        $("#titikpengenalpangkal").val("");
        $("#titikpengenalujung").val("");
        $("#tahunperolehantanah").val("");
        $("#tahunpembuatan").val("");

        $("#panjangruasjalan").val("");
        $("#ruasawal").val("");
        $("#ruasakhir").val("");
        $("#rowdamija").val("");
        $("#lebarperkerasan").val("");

        $("#tppermukaan").empty();
        tanah.selectTipePermukaan();
        $("#tppermukaanlainnyajalan").val("");
        $(".tipepermukaanlainnyajalan").hide();

        $("#kondisijalan").val("");
        $("#dataawaljalan").prop('checked', false);

        $("#asalusuljalan").empty();
        tanah.selectAsalUsul();
        $("#aslusullainnyajalan").val("");
        $(".asalusullainnyajalan").hide();

        $("#hargabahanjalan").val("");
        $("#nilaibarujalan").val("");
        $("#nilaiperolehanjalan").val("");
        $("#nilaipasarjalan").val("");
        $("#keteranganjalan").val("");
    }

    jalan.selectJenisJalan = function(){
        $('#jenisjalan').select2({
            placeholder: 'Pilih Data Jenis Jalan...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jalan/select_jenisjalan.php',
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
    }

    jalan.selectTipePermukaan = function(){
        $('#tppermukaan').select2({
            placeholder: 'Pilih Tipe Permukaan...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jalan/select_tipepermukaan.php',
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
    }

    jalan.selectTipePermukaanLainnya = function(){
        var st = $("#tppermukaan").val();
        if(st == "174"){
            $(".tipepermukaanlainnyajalan").show();
            setTimeout(function(){
                $("#tppermukaanlainnyajalan").focus();
                $('#tppermukaanlainnyajalan').change(function(){
                    var a = $("#tppermukaanlainnyajalan").val();
                    jalan.tppermukaanlainnya(a);
                });
            })
        }else{
            $(".tipepermukaanlainnyajalan").hide();
            jalan.tppermukaanlainnya("NULL");
        }
    }

    jalan.selectAsalUsul = function(){
        $('#asalusuljalan').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jalan/select_asalusul.php',
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
    }

    jalan.selectAsalUsulLainnya = function(){
        var st = $("#asalusuljalan").val();
        if(st == "215"){
            $(".asalusullainnyajalan").show();
            setTimeout(function(){
                $("#aslusullainnyajalan").focus();
                $('#aslusullainnyajalan').change(function(){
                    var a = $("#aslusullainnyajalan").val();
                    jalan.asalusullainnyajalan(a);
                });
            });
        }else{
            $(".asalusullainnyajalan").hide();
            jalan.asalusullainnyajalan("NULL")
        }
    }

    jalan.prepareCheckBox = function(){
        $("#dataawaljalan").change(function(){
            var sesuai = $("#dataawaljalan").is(':checked');
            if(sesuai != true){
                jalan.datawal("0");
            }else{
                jalan.datawal("1111111111111111111111111111111");
            }  
        })
    }

    jalan.replaceCurrency = function(){
        // $("#hargabahanjalan").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#hargabahanjalan").val();
        //         var b = toRp(a);
        //         $("#hargabahanjalan").val(b);
        //     }
        //     $("#nilaibarujalan").focus(function(){
        //         var a = $("#hargabahanjalan").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#hargabahanjalan").val(c);
        //     })
        // });

        // $("#nilaibarujalan").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaibarujalan").val();
        //         var b = toRp(a);
        //         $("#nilaibarujalan").val(b);
        //     }
        //     $("#nilaiperolehanjalan").focus(function(){
        //         var a = $("#nilaibarujalan").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaibarujalan").val(c);
        //     })
        // });

        // $("#nilaiperolehanjalan").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaiperolehanjalan").val();
        //         var b = toRp(a);
        //         $("#nilaiperolehanjalan").val(b);
        //     }
        //     $("#nilaipasarjalan").focus(function(){
        //         var a = $("#nilaiperolehanjalan").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaiperolehanjalan").val(c);
        //     })
        // });

        // $("#nilaipasarjalan").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaipasarjalan").val();
        //         var b = toRp(a);
        //         $("#nilaipasarjalan").val(b);
        //     }
        //     $("#keteranganjalan").focus(function(){
        //         var a = $("#nilaipasarjalan").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaipasarjalan").val(c);
        //     })
        // });

        $("#nilaiperolehanjalan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehanjalan").val();
                var b = toRp(a);
                $("#nilaiperolehanjalan").val(b);
            }
            $("#keteranganjalan").focus(function(){
                var a = $("#nilaiperolehanjalan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehanjalan").val(c);
            })
        });
    }

    jalan.hitungNilaiPasar = function(){
        // var a = $("#panjangruasjalan").val();
        // var b = $("#lebarperkerasan").val();
        // var c = $("#kondisijalan").val();
        // var d = $("#hargabahanjalan").val();

        // if(a!="" & b!="" & c!="" & d!=""){
        //     var e = a*b*toAngka(d)*c / 100 
        //     $("#nilaipasarjalan").val(toRp(e));
        //     console.log(e);
        // } 
    }

    jalan.prepareCheckBox = function(){
        $("#dataawaljalan").change(function(){
            var sesuai = $("#dataawaljalan").is(':checked');
            if(sesuai != true){
                jalan.datawal("0");
            }else{
                jalan.datawal("1111111111111111111111111111111");
            }  
        })
    }

    jalan.saveForm = function(){
        var kodebarang      = $("#assetbarang").select2().val();
        var kodelokasi      = $("#assetlokasi").select2().val();
        var jenisjalan      = $("#jenisjalan").select2().text();
        var namajalan       = $("#namajalan").val();
        var namapangkalruas = $("#namapangkalruas").val();
        var namaujungruas   = $("#namaujungruas").val();
        var tahunperolehan  = $("#tahunperolehan").val();
        var tahunpembuatan  = $("#tahunpembuatan").val();
        var panjangruas     = $("#panjangruasjalan").val();
        var kmruasawal      = $("#ruasawal").val();
        var kmruasakhir     = $("#ruasakhir").val();
        var row             = $("#rowdamija").val();
        var lbrperkerasan   = $("#lebarperkerasan").val();
        var tppermukaan     = $("#tppermukaan").select2().text();
        var tppermukaanlain = jalan.tppermukaanlainnya();
        var kondisijalan    = $("#kondisijalan").val();
        var asalusul        = $("#tppermukaan").select2().text();
        var asalusullainnya = jalan.asalusullainnyajalan();
        var nilaiperolehan  = toAngka($("#nilaiperolehanjalan").val());
        var keterangan      = $("#keteranganjalan").val();


        var tpengenalpangkal= ""; 
        var tpengenalujung  = ""; 
        var dataawal        = ""; 
        var hargaperbahan   = ""; 
        var nilaipasar      = ""; 
        var nilaibaru       = ""; 
        

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2().text();
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       = "NULL";
        var entry           = "NULL";
        var entryuser       = $(".user_name").html();

        if(kodelokasi == null || kodebarang == null){
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
                url: "./controller/entry_asset/jalan/jalan_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: jenisjalan, 4: namajalan, 5: namapangkalruas, 
                    6: namaujungruas, 7: tpengenalpangkal, 8: tpengenalujung, 9: tahunperolehan, 10: tahunpembuatan,
                    11: panjangruas, 12: kmruasawal, 13: kmruasakhir, 14: row, 15: lbrperkerasan,
                    16: tppermukaan, 17: tppermukaanlain, 18: kondisijalan, 19: asalusul, 20: asalusullainnya, 21: dataawal, 22: hargaperbahan, 23: nilaipasar,
                    24: nilaiperolehan, 25: nilaibaru, 26: keterangan, 27: penanggungjawab, 28: lokasipjawab,
                    29: surveyor, 30: tanggalsurvei, 31: matauang, 32: satuankerja, 33: kodepemilik,
                    34: noregister, 35: status, 36: ketstatus, 37: entry, 38: entryuser
                }
            }).done(function(data){
                // console.log("DATA TELAH BERHASIL DIINPUT")
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Jalan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            });
        }
    }

// End Jalan


// Start Jembatan

    jembatan.clear = function(){
        $("#jenisjembatan").empty();
        jembatan.selectJenisJembatan();
        $("#namajembatan").val("");
        $("#namajalanjembatan").val("");
        $("#posisijembatan").val("");
        $("#tinggirampjembatan").val("");
        $("#lebarjembatan").val("");
        $("#panjangjembatan").val("");
        $("#tahunperolehanjembatan").val("");
        $("#tahunpembuatanjembatan").val("");

        $("#pondasijembatan").empty();
        jembatan.selectPondasiJembatan();
        $("#pondasijembatanlainnya").val("");
        $(".pondasijembatanlainnya").hide();

        $("#bahanpondasi").empty();
        jembatan.selectBahanPondasi();
        $("#bahanpondasilainnya").val("");
        $(".bahanpondasilainnya").hide();

        $("#lantaitypejembatan").empty();
        jembatan.selectLantaiType();
        $("#lantaitypejembatanlainnya").val("");
        $(".lantaitypejembatanlainnya").hide();

        $("#bahankonstruksijembatan").empty();
        jembatan.selectBahanKonstruksi();
        $("#bahankonstruksijembatanlainnya").val("");
        $(".bahankonstruksijembatanlainnya").hide();

        $("#kondisijembatan").val("");
        $("#dataawaljembatan").prop('checked', false);

        $("#asalusuljembatan").empty();
        jembatan.selectAsalusul();
        $("#asalusuljembatanlainnya").val("");
        $(".asalusuljembatanlainnya").hide();

        $("#hargaperbahanjembatan").val("");
        $("#nilaibukujembatan").val("");
        $("#nilaiperolehanjembatan").val("");
        $("#nilaipasarjembatan").val("");
        $("#keteranganjembatan").val("");
    }

    jembatan.selectJenisJembatan = function(){
        $('#jenisjembatan').select2({
            placeholder: 'Pilih Data Jenis Jembatan...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jembatan/select_jenisjembatan.php',
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
    }

    jembatan.selectPondasiJembatan = function(){
        $('#pondasijembatan').select2({
            placeholder: 'Pilih Data Pondasi...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jembatan/select_pondasi.php',
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
    } 

    jembatan.selectPondasiJembatanLainnya = function(){
        var st = $("#pondasijembatan").val();
        if(st == "151"){
            $(".pondasijembatanlainnya").show();
            setTimeout(function(){
                $("#pondasijembatanlainnya").focus();
                $('#pondasijembatanlainnya').change(function(){
                    var a = $("#pondasijembatanlainnya").val();
                    jembatan.pondasilainnya(a);
                });
            })
        }else{
            $(".pondasijembatanlainnya").hide();
            jembatan.pondasilainnya("NULL");
        }
    }

    jembatan.selectBahanPondasi = function(){
        $('#bahanpondasi').select2({
            placeholder: 'Pilih Data Bahan Pondasi...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jembatan/select_bahanpondasi.php',
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
    }

    jembatan.selectBahanJembatanLainnya = function(){
        var st = $("#bahanpondasi").val();
        if(st == "195"){
            $(".bahanpondasilainnya").show();
            setTimeout(function(){
                $("#bahanpondasilainnya").focus();
                $('#bahanpondasilainnya').change(function(){
                    var a = $("#bahanpondasilainnya").val();
                    jembatan.bahanpondasilainnya(a);
                });
            })
        }else{
            $(".bahanpondasilainnya").hide();
            jembatan.bahanpondasilainnya("NULL");
        }
    }

    jembatan.selectLantaiType = function(){
        $('#lantaitypejembatan').select2({
            placeholder: 'Pilih Data Bahan Pondasi...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jembatan/select_lantaitype.php',
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
    }

    jembatan.selectLantaiTypeLainnya = function(){
        var st = $("#lantaitypejembatan").val();
        if(st == "166"){
            $(".lantaitypejembatanlainnya").show();
            setTimeout(function(){
                $("#lantaitypejembatanlainnya").focus();
                $('#lantaitypejembatanlainnya').change(function(){
                    var a = $("#lantaitypejembatanlainnya").val();
                    jembatan.lantaitypelainnya(a);
                });
            })
        }else{
            $(".lantaitypejembatanlainnya").hide();
            jembatan.lantaitypelainnya("NULL");
        }
    }

    jembatan.selectBahanKonstruksi = function(){
        $('#bahankonstruksijembatan').select2({
            placeholder: 'Pilih Data Bahan Konstruksi...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jembatan/select_bahankonstruksi.php',
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
    }

    jembatan.selectBahanKonstruksiLainnya = function(){
        var st = $("#bahankonstruksijembatan").val();
        if(st == "201"){
            $(".bahankonstruksijembatanlainnya").show();
            setTimeout(function(){
                $("#bahankonstruksijembatanlainnya").focus();
                $('#bahankonstruksijembatanlainnya').change(function(){
                    var a = $("#bahankonstruksijembatanlainnya").val();
                    jembatan.bahankonstruksilainnya(a);
                });
            })
        }else{
            $(".bahankonstruksijembatanlainnya").hide();
            jembatan.bahankonstruksilainnya("NULL");
        }
    }

    jembatan.selectAsalusul = function(){
        $('#asalusuljembatan').select2({
            placeholder: 'Pilih Data Asalusul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/jembatan/select_asalusul.php',
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
    }

    jembatan.selectAsalusulLainnya = function(){
        var st = $("#asalusuljembatan").val();
        if(st == "215"){
            $(".asalusuljembatanlainnya").show();
            setTimeout(function(){
                $("#asalusuljembatanlainnya").focus();
                $('#asalusuljembatanlainnya').change(function(){
                    var a = $("#asalusuljembatanlainnya").val();
                    jembatan.asalusuljembatanlainnya(a);
                });
            })
        }else{
            $(".asalusuljembatanlainnya").hide();
            jembatan.asalusuljembatanlainnya("NULL");
        }
    }

    jembatan.prepareCheckBox = function(){
        $("#dataawaljembatan").change(function(){
            var sesuai = $("#dataawaljembatan").is(':checked');
            if(sesuai != true){
                jembatan.datawal("0");
            }else{
                jembatan.datawal("1111111111111111111111111111111");
            }  
        });
    }

    jembatan.replaceCurrency = function(){
        // $("#hargaperbahanjembatan").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#hargaperbahanjembatan").val();
        //         var b = toRp(a);
        //         $("#hargaperbahanjembatan").val(b);
        //     }
        //     $("#nilaibukujembatan").focus(function(){
        //         var a = $("#hargaperbahanjembatan").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#hargaperbahanjembatan").val(c);
        //     })
        // });

        // $("#nilaibukujembatan").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaibukujembatan").val();
        //         var b = toRp(a);
        //         $("#nilaibukujembatan").val(b);
        //     }
        //     $("#nilaiperolehanjembatan").focus(function(){
        //         var a = $("#nilaibukujembatan").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaibukujembatan").val(c);
        //     })
        // });

        // $("#nilaiperolehanjembatan").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaiperolehanjembatan").val();
        //         var b = toRp(a);
        //         $("#nilaiperolehanjembatan").val(b);
        //     }
        //     $("#nilaipasarjembatan").focus(function(){
        //         var a = $("#nilaiperolehanjembatan").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaiperolehanjembatan").val(c);
        //     })
        // });

        $("#nilaiperolehanjembatan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehanjembatan").val();
                var b = toRp(a);
                $("#nilaiperolehanjembatan").val(b);
            }
            $("#keteranganjembatan").focus(function(){
                var a = $("#nilaiperolehanjembatan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehanjembatan").val(c);
            })
        });
    }

    jembatan.hitungNilaiPasar = function(){
        var a = $("#panjangjembatan").val();
        var b = $("#lebarjembatan").val();
        var c = $("#kondisijembatan").val();
        var d = $("#hargaperbahanjembatan").val();

        if(a!="" & b!="" & c!="" & d!=""){
            var e = a*b*toAngka(d)*c / 100 
            $("#nilaipasarjembatan").val(toRp(e));
            // console.log(e);
        } 
    }

    jembatan.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();
        var jenisjembatan   = $("#jenisjembatan").select2().text();
        var namajembatan    = $("#namajembatan").val();
        var namajalan       = $("#namajalanjembatan").val();
        var panjang         = $("#lebarjembatan").val();
        var lebar           = $("#lebarjembatan").val();
        var tinggiramp      = $("#tinggirampjembatan").val();
        var tahunperolehan  = $("#tahunperolehanjembatan").val();
        var bahanpondasi    = $("#bahanpondasi").text();
        var bahanpondasilain= $("#bahanpondasilainnya").val();
        var bahankonst      = $("#bahankonstruksijembatan").text();
        var bahankonstlain  = $("#bahankonstruksijembatanlainnya").val();
        var kondisi         = $("#kondisijembatan").val();
        var asalusul        = $("#asalusuljembatan").text();
        var asalusullain    = $("#asalusuljembatanlainnya").val();
        var nilaiperolehan  = toAngka($("#nilaiperolehanjembatan").val());
        var keterangan      = $("#keteranganjembatan").val();

        var posisi          = "";
        var tahunpembuatan  = "";
        var pondasi         = "";
        var pondasilain     = "";
        var typekonst       = "";
        var typekonstlain   = "";
        var dataawal        = "";
        var hargabahan      = "";
        var nilaipasar      = "";
        var nilaibuku       = "";
        


        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2().text();
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       = "NULL";
        var entry           = "NULL";
        var entryuser       = $(".user_name").html();

        if(kodelokasi == null || kodebarang == null){
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
                url: "./controller/entry_asset/jembatan/jembatan_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: jenisjembatan, 4: namajembatan, 5: namajalan, 
                    6: posisi, 7: tahunpembuatan, 8: tahunperolehan, 9: tinggiramp, 10: lebar,
                    11: panjang, 12: pondasi, 13: pondasilain, 14: bahanpondasi, 15: bahanpondasilain,
                    16: typekonst, 17: typekonstlain, 18: bahankonst, 19: bahankonstlain, 20: kondisi, 21: asalusul, 22: asalusullain, 23: dataawal,
                    24: hargabahan, 25: nilaipasar, 26: nilaiperolehan, 27: nilaibuku, 28: keterangan,
                    29: penanggungjawab, 30: lokasipjawab, 31: surveyor, 32: tanggalsurvei, 33: matauang,
                    34: satuankerja, 35: kodepemilik, 36: noregister, 37: status, 38: ketstatus, 39: entry, 40: entryuser
                }
            }).done(function(data){
                // console.log("DATA TELAH BERHASIL DIINPUT")
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Jembatan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            });
        }
    }

// End Jembatan


// Start Air

    air.clear = function(){
        $("#golbangunanair").empty();
        air.selectGolonganAir();
        $("#namabangunanair").val("");
        $("#alamatbangunanair").val("");
        $("#tahunperolehanair").val("");
        $("#tahunpembuatanair").val("");
        $("#kondisibangunanair").val("");
        $("#konstruksibangunanair").empty();
        air.selectKonstruksiAir();
        $("#bahanbangunanair").val("");
        $("#panjangbangunanair").val("");
        $("#lebarbangunanair").val("");
        $("#tinggibangunanair").val("");
        $("#fasilitasbangunanair").val("");
        $("#asalusulair").empty();
        air.asalusul();
        $("#asalusulairlainnya").val("");
        $(".asalusulairlainnya").hide();
        $("#dataawalair").prop('checked', false);
        $("#hargaperbahanair").val("");
        $("#nilaibukuair").val("");
        $("#nilaiperolehanair").val("");
        $("#nilaipasarair").val("");
        $("#keteranganair").val("");
    }

    air.selectGolonganAir = function(){
        $('#golbangunanair').select2({
            placeholder: 'Pilih Data Golongan Bangunan Air...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/air/select_golonganair.php',
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
    }

    air.selectKonstruksiAir = function(){
        $('#konstruksibangunanair').select2({
            placeholder: 'Pilih Data Konstruksi Bangunan Air...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/air/select_konstruksiair.php',
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
    }

    air.asalusul = function(){
        $('#asalusulair').select2({
            placeholder: 'Pilih Data Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/air/select_asalusul.php',
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
    }

    air.selectAsalusulLainnya = function(){
        var st = $("#asalusulair").val();
        if(st == "215"){
            $(".asalusulairlainnya").show();
            setTimeout(function(){
                $("#asalusulairlainnya").focus();
                $('#asalusulairlainnya').change(function(){
                    var a = $("#asalusulairlainnya").val();
                    air.asalusullainnya(a);
                });
            })
        }else{
            $(".asalusulairlainnya").hide();
            air.asalusullainnya("NULL");
        }
    }

    air.replaceCurrency = function(){
        

        $("#nilaiperolehanair").keyup(function(e){
            if(e.keyCode == 13){
                var a = $("#nilaiperolehanair").val();
                var b = toRp(a);
                $("#nilaiperolehanair").val(b);
            }
            $("#keteranganair").focus(function(){
                var a = $("#nilaiperolehanair").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehanair").val(c);
            })
        });
    }

    air.hitungNilaiPasar = function(){
        var p = $("#panjangbangunanair").val();
        var l = $("#lebarbangunanair").val();
        var t = $("#tinggibangunanair").val();
        var c = $("#kondisibangunanair").val();
        var d = $("#hargaperbahanair").val();

        if(p!="" & l!="" & t!="" & c!="" & d!=""){
            var e = p*l*t*toAngka(d)*c / 100 
            $("#nilaipasarair").val(toRp(e));
            console.log(e);
        } 
    }

    air.prepareCheckBox = function(){
        $("#dataawalair").change(function(){
            var sesuai = $("#dataawalair").is(':checked');
            if(sesuai != true){
                air.datawal("0");
            }else{
                air.datawal("1111111111111111111111111111111");
            }  
        });
    }

    air.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();
        var golbangunanair  = $("#golbangunanair").select2().text();
        var nmbangunanair   = $("#namabangunanair").val();
        var letak           = $("#alamatbangunanair").val();
        var tahunperolehan  = $("#tahunperolehanair").val();
        var kondisi         = $("#kondisibangunanair").val();
        var bahan           = $("#bahanbangunanair").val();
        var panjang         = $("#panjangbangunanair").val();
        var lebar           = $("#lebarbangunanair").val();
        var tinggi          = $("#tinggibangunanair").val();
        var fasilitaspenun  = $("#fasilitasbangunanair").val();
        var asalusul        = $("#asalusulair").select2().text();
        var asalusullainnya = $("#asalusulairlainnya").val();
        var nilaiperolehan  = toAngka($("#nilaiperolehanair").val());
        var keterangan      = $("#keteranganair").val();


        var konstruksi      = "";
        var dataawal        = "";
        var nilaiperm2      = "";
        var nilaipasar      = "";
        var nilaibaru       = "";
        var tahunpembuatan  = "";

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2().text();;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       = "NULL";
        var entry           = "NULL";
        var entryuser       = $(".user_name").html();

        if(kodelokasi == null || kodebarang == null){
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
                url: "./controller/entry_asset/air/air_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golbangunanair, 4: nmbangunanair, 5: letak, 
                    6: tahunperolehan, 7: tahunpembuatan, 8: kondisi, 9: konstruksi, 10: bahan,
                    11: panjang, 12: lebar, 13: tinggi, 14: fasilitaspenun, 15: asalusul,
                    16: asalusullainnya, 17: dataawal, 18: nilaiperm2, 19: nilaiperolehan, 20: nilaipasar, 21: nilaibaru, 22: keterangan, 23: penanggungjawab,
                    24: lokasipjawab, 25: surveyor, 26: tanggalsurvei, 27: matauang, 28: satuankerja,
                    29: kodepemilik, 30: noregister, 31: status, 32: ketstatus, 33: entry,
                    34: entryuser 
                }
            }).done(function(data){
                // console.log("DATA TELAH BERHASIL DIINPUT")
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Bangunan Air Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            });
        }
    }

// End Air


// Start Instalasi

    instalasi.clear = function(){
        $("#golinstalasi").empty();
        instalasi.selectGolonganInstalasi();
        $("#namainstalasi").val("");
        $("#alamatinstalasi").val("");
        $("#tahunperolehaninst").val("");
        $("#tahunpembuataninst").val("");
        $("#kondisibangunaninst").val("");
        $("#konstruksibangunaninst").empty();
        instalasi.selectKonstruksiInstalasi();
        $("#bahanbangunaninst").val("");
        $("#panjangbangunaninst").val("");
        $("#lebarbangunaninst").val("");
        $("#tinggibangunaninst").val("");
        $("#fasilitasbangunaninst").val("");
        $("#asalusulinst").empty();
        instalasi.asalusul();
        $("#asalusulinstlainnya").val("");
        $(".asalusulinstlainnya").hide();
        $("#dataawalinst").prop('checked', false);
        $("#hargaperbahaninst").val("");
        $("#nilaibukuinst").val("");
        $("#nilaiperolehaninst").val("");
        $("#nilaipasarinst").val("");
        $("#keteranganinst").val("");
    } 

    instalasi.selectGolonganInstalasi = function(){
        $('#golinstalasi').select2({
            placeholder: 'Pilih Data Golongan Instalasi...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/instalasi/select_golonganinstalasi.php',
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
    }

    instalasi.selectKonstruksiInstalasi = function(){
        $('#konstruksibangunaninst').select2({
            placeholder: 'Pilih Data Konstruksi Instalasi...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/instalasi/select_konstruksiinst.php',
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
    }

    instalasi.asalusul = function(){
        $('#asalusulinst').select2({
            placeholder: 'Pilih Data Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/instalasi/select_asalusul.php',
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
    }

    instalasi.selectAsalusulLainnya = function(){
        var st = $("#asalusulinst").val();
        if(st == "215"){
            $(".asalusulinstlainnya").show();
            setTimeout(function(){
                $("#asalusulinstlainnya").focus();
                $('#asalusulinstlainnya').change(function(){
                    var a = $("#asalusulinstlainnya").val();
                    instalasi.asalusullainnya(a);
                });
            })
        }else{
            $(".asalusulinstlainnya").hide();
            instalasi.asalusullainnya("NULL");
        }
    }

    instalasi.prepareCheckBox = function(){
        $("#dataawalinst").change(function(){
            var sesuai = $("#dataawalinst").is(':checked');
            if(sesuai != true){
                instalasi.datawal("0");
            }else{
                instalasi.datawal("1111111111111111111111111111111");
            }  
        });
    }

    instalasi.replaceCurrency = function(){
        // $("#hargaperbahaninst").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#hargaperbahaninst").val();
        //         var b = toRp(a);
        //         $("#hargaperbahaninst").val(b);
        //     }
        //     $("#nilaibukuinst").focus(function(){
        //         var a = $("#hargaperbahaninst").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#hargaperbahaninst").val(c);
        //     })
        // });

        // $("#nilaibukuinst").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaibukuinst").val();
        //         var b = toRp(a);
        //         $("#nilaibukuinst").val(b);
        //     }
        //     $("#nilaiperolehaninst").focus(function(){
        //         var a = $("#nilaibukuinst").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaibukuinst").val(c);
        //     })
        // });

        // $("#nilaiperolehaninst").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaiperolehaninst").val();
        //         var b = toRp(a);
        //         $("#nilaiperolehaninst").val(b);
        //     }
        //     $("#nilaipasarinst").focus(function(){
        //         var a = $("#nilaiperolehaninst").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaiperolehaninst").val(c);
        //     })
        // });

        $("#nilaiperolehaninst").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehaninst").val();
                var b = toRp(a);
                $("#nilaiperolehaninst").val(b);
            }
            $("#keteranganinst").focus(function(){
                var a = $("#nilaiperolehaninst").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehaninst").val(c);
            })
        });
    }

    instalasi.hitungNilaiPasar = function(){
        var p = $("#panjangbangunaninst").val();
        var l = $("#lebarbangunaninst").val();
        var t = $("#tinggibangunaninst").val();
        var c = $("#kondisibangunaninst").val();
        var d = $("#hargaperbahaninst").val();

        if(p!="" & l!="" & t!="" & c!="" & d!=""){
            var e = p*l*t*toAngka(d)*c / 100 
            $("#nilaipasarinst").val(toRp(e));
            // console.log(e);
        } 
    }

    instalasi.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();
        var golinstalasi    = $("#golinstalasi").select2().text();
        var nminstalasi     = $("#namainstalasi").val();
        var letak           = $("#alamatinstalasi").val();
        var tahunperolehan  = $("#tahunperolehaninst").val();
        var kondisi         = $("#kondisibangunaninst").val();
        var bahan           = $("#bahanbangunaninst").val();
        var panjang         = $("#panjangbangunaninst").val();
        var lebar           = $("#lebarbangunaninst").val();
        var tinggi          = $("#tinggibangunaninst").val();
        var fasilitaspenun  = $("#fasilitasbangunaninst").val();
        var asalusul        = $("#asalusulinst").select2().text();
        var asalusullainnya = $("#asalusulinstlainnya").val();
        var nilaiperolehan  = toAngka($("#nilaiperolehaninst").val());
        var keterangan      = $("#keteranganinst").val();

        var tahunpembuatan  = "";
        var konstruksi      = "";
        var dataawal        = "";
        var nilaiperm2      = "";
        var nilaipasar      = "";
        var nilaibaru       = "";
        
        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2().text();
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       = "NULL";
        var entry           = "NULL";
        var entryuser       = $(".user_name").html();

        if(kodelokasi == null || kodebarang == null){
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
                url: "./controller/entry_asset/instalasi/instalasi_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golinstalasi, 4: nminstalasi, 5: letak, 
                    6: tahunpembuatan, 7: tahunperolehan, 8: kondisi, 9: konstruksi, 10: bahan,
                    11: panjang, 12: lebar, 13: tinggi, 14: fasilitaspenun, 15: asalusul,
                    16: asalusullainnya, 17: dataawal, 18: nilaiperm2, 19: nilaiperolehan, 20: nilaipasar, 21: nilaibaru, 22: keterangan, 23: penanggungjawab,
                    24: lokasipjawab, 25: surveyor, 26: tanggalsurvei, 27: matauang, 28: satuankerja,
                    29: kodepemilik, 30: noregister, 31: status, 32: ketstatus, 33: entry, 34: entryuser
                }
            }).done(function(data){
                // console.log("DATA TELAH BERHASIL DIINPUT")
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Instalasi Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            });
        }
    }

// End Instalasi


// Start Jaringan

    jaringan.clear = function(){
        $("#goljaringan").empty();
        jaringan.selectGolonganJaringan();
        $("#namajaringan").val("");
        $("#alamatjaringan").val("");
        $("#tahunperolehanjar").val("");
        $("#tahunpembuatanjar").val("");
        $("#kondisibangunanjar").val("");
        $("#bahanbangunanjar").val("");
        $("#panjangjar").val("");
        $("#diajar").val("");
        $("#fasilitasjar").val("");
        $("#asalusulinst").empty();
        instalasi.asalusul();
        $("#asalusuljarlainnya").val("");
        $(".asalusuljarlainnya").hide();
        $("#dataawaljar").prop('checked', false);
        $("#hargaperbahanjar").val("");
        $("#nilaibukujar").val("");
        $("#nilaiperolehanjar").val("");
        $("#nilaipasarjar").val("");
        $("#keteranganjar").val("");
    }
    
    jaringan.selectGolonganJaringan = function(){
        $('#goljaringan').select2({
            placeholder: 'Pilih Data Golongan Jaringan...',
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
    }

    jaringan.asalusul = function(){
        $('#asalusuljar').select2({
            placeholder: 'Pilih Data Asal Usul...',
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
    }

    jaringan.selectAsalusulLainnya = function(){
        var st = $("#asalusuljar").val();
        if(st == "215"){
            $(".asalusuljarlainnya").show();
            setTimeout(function(){
                $("#asalusuljarlainnya").focus();
                $('#asalusuljarlainnya').change(function(){
                    var a = $("#asalusuljarlainnya").val();
                    jaringan.asalusullainnya(a);
                });
            })
        }else{
            $(".asalusuljarlainnya").hide();
            jaringan.asalusullainnya("NULL");
        }
    }

    jaringan.prepareCheckBox = function(){
        $("#dataawaljar").change(function(){
            var sesuai = $("#dataawaljar").is(':checked');
            if(sesuai != true){
                jaringan.datawal("0");
            }else{
                jaringan.datawal("1111111111111111111111111111111");
            }  
        });
    }

    jaringan.replaceCurrency = function(){
        // $("#hargaperbahanjar").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#hargaperbahanjar").val();
        //         var b = toRp(a);
        //         $("#hargaperbahanjar").val(b);
        //     }
        //     $("#nilaibukujar").focus(function(){
        //         var a = $("#hargaperbahanjar").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#hargaperbahanjar").val(c);
        //     })
        // });

        // $("#nilaibukujar").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaibukujar").val();
        //         var b = toRp(a);
        //         $("#nilaibukujar").val(b);
        //     }
        //     $("#nilaiperolehanjar").focus(function(){
        //         var a = $("#nilaibukujar").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaibukujar").val(c);
        //     })
        // });

        // $("#nilaiperolehanjar").keyup(function(e){
        //     // console.log(e)
        //     if(e.keyCode == 13){
        //         var a = $("#nilaiperolehanjar").val();
        //         var b = toRp(a);
        //         $("#nilaiperolehanjar").val(b);
        //     }
        //     $("#nilaipasarjar").focus(function(){
        //         var a = $("#nilaiperolehanjar").val();
        //         var b = toAngka(a);
        //         var c = toRp(b);
        //         $("#nilaiperolehanjar").val(c);
        //     })
        // });

        $("#nilaiperolehanjar").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehanjar").val();
                var b = toRp(a);
                $("#nilaiperolehanjar").val(b);
            }
            $("#keteranganjar").focus(function(){
                var a = $("#nilaiperolehanjar").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehanjar").val(c);
            })
        });
    }

    jaringan.hitungNilaiPasar = function(){
        var p = $("#panjangjar").val();
        var l = $("#diajar").val();
        var c = $("#kondisibangunanjar").val();
        var d = $("#hargaperbahanjar").val();

        if(p!="" & l!="" & c!="" & d!=""){
            var e = p*l*toAngka(d)*c / 100 
            $("#nilaipasarjar").val(toRp(e));
            // console.log(e);
        } 
    }

    jaringan.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();
        var goljaringan     = $("#goljaringan").select2().text();
        var nmjaringan      = $("#namajaringan").val();
        var letak           = $("#alamatjaringan").val();
        var tahunperolehan  = $("#tahunperolehanjar").val();
        var kondisi         = $("#kondisibangunanjar").val();
        var bahan           = $("#bahanbangunanjar").val();
        var panjang         = $("#panjangjar").val();
        var asalusul        = $("#asalusuljar").select2().text();
        var asalusullainnya = $("#asalusuljarlainnya").val();
        var nilaiperolehan  = toAngka($("#nilaiperolehanjar").val());
        var keterangan      = $("#keteranganjar").val();




        var tahunpembuatan  = "";
        var konstruksi      = "NULL";
        var diameter        = "";
        var fasilitaspenun  = "";
        var dataawal        = "";
        var nilaiperm2      = "";
        var nilaibaru       = "";
        var nilaipasar      = "";
        

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2().text();
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       = "NULL";
        var entry           = "NULL";
        var entryuser       = $(".user_name").html();

        if(kodelokasi == null || kodebarang == null){
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
                url: "./controller/entry_asset/jaringan/jaringan_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: goljaringan, 4: nmjaringan, 5: letak, 
                    6: tahunpembuatan, 7: tahunperolehan, 8: kondisi, 9: konstruksi, 10: bahan,
                    11: panjang, 12: diameter, 13: fasilitaspenun, 14: asalusul, 15: asalusullainnya,
                    16: dataawal, 17: nilaiperm2, 18: nilaiperolehan, 19: nilaibaru, 20: nilaipasar, 21: keterangan, 22: penanggungjawab, 23: lokasipjawab,
                    24: surveyor, 25: tanggalsurvei, 26: matauang, 27: satuankerja, 28: kodepemilik,
                    29: noregister, 30: status, 31: ketstatus, 32: entry, 33: entryuser 
                }
            }).done(function(data){
                // console.log("DATA TELAH BERHASIL DIINPUT")
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Jaringan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            });
        }
    }

// End Jaringan


// Start Gedung

    gedung.selectBangunanGedung = function(){
        $('#golongangedung').select2({
            placeholder: 'Pilih Data Golongan Bangunan...',
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
    }

    gedung.selectLetak = function(){
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
    }

    gedung.resetLetak = function(){
        $("#alamatgedung").empty();
        gedung.selectLetak();
    }

    gedung.selectKonstruksiGedung = function(){
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
    }

    gedung.selectAsalUsul = function(){
        $('#asalusulgedung').select2({
            placeholder: 'Pilih Data Asal Usul...',
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
    }
    gedung.asalusulLainnya = function(){
        var st = $("#asalusulgedung").val();
        // console.log(st)
        if(st == "215"){
            $(".asalusulgedunglainnya").show();
            setTimeout(function(){
                $("#asalusulgedunglainnya").focus();
                $('#asalusulgedunglainnya').change(function(){
                    var a = $("#asalusulgedunglainnya").val();
                    gedung.asalusullainnya(a);
                });
            })
        }else{
            $(".asalusulgedunglainnya").hide();
            gedung.asalusullainnya("NULL");
        }
    }

    gedung.prepareDatePicker = function(){
        $('#tanggalimb').datepicker({
            language: "id",
            format: "dd MM yyyy",
            todayBtn: "linked",
            toggleActive: true
        });
    }

    gedung.prepareCheckBox = function(){

        $("#tanggalimb input").attr('disabled',true);
        $("#tanggalimb input").val("");

        $("#dokumenimb").change(function(){
            var sertifikat = $("#dokumenimb").is(':checked');
            if(sertifikat != true){
                gedung.dokumenimb("0");
                $("#tanggalimb input").attr('disabled',true);
                $("#tanggalimb input").val("");
            }else{
                gedung.dokumenimb("1111111111111111111111111111111");
                $("#tanggalimb input").attr('disabled',false);
                // $("#nosertifikat").attr('disabled',false);
            }  
        });


        $("#tingkatgedung").change(function(){
            var sesuai = $("#tingkatgedung").is(':checked');
            if(sesuai != true){
                gedung.tingkatgedung("0");
            }else{
                gedung.tingkatgedung("1111111111111111111111111111111");
            }  
        });

        $("#datawalgedung").change(function(){
            var sesuai = $("#datawalgedung").is(':checked');
            if(sesuai != true){
                gedung.dataawal("0");
            }else{
                gedung.dataawal("1111111111111111111111111111111");
            }  
        });

        $("#plngedung").change(function(){
            var sesuai = $("#plngedung").is(':checked');
            if(sesuai != true){
                gedung.plngedung("0");
            }else{
                gedung.plngedung("1111111111111111111111111111111");
            }  
        });
        $("#pamgedung").change(function(){
            var sesuai = $("#pamgedung").is(':checked');
            if(sesuai != true){
                gedung.pamgedung("0");
            }else{
                gedung.pamgedung("1111111111111111111111111111111");
            }  
        });
        $("#telpgedung").change(function(){
            var sesuai = $("#telpgedung").is(':checked');
            if(sesuai != true){
                gedung.telpgedung("0");
            }else{
                gedung.telpgedung("1111111111111111111111111111111");
            }  
        });
    }

    gedung.replaceCurrency = function(){
        $("#nilaiperolehangedung").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehangedung").val();
                var b = toRp(a);
                $("#nilaiperolehangedung").val(b);
            }
            $("#keterangangedung").focus(function(){
                var a = $("#nilaiperolehangedung").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehangedung").val(c);
            })
        });
    }

    gedung.spottedruangan = function(){
        $("#namaruangangedung").keyup(function(e){
            if(e.keyCode == 13){
                gedung.addruangan();
            }
        });
        $("#namaruangangedung").on('keyup',function(){
            $(this).capitalize();
        }).capitalize();
    }

    gedung.addruangan = function(){
        var valtext = gedung.nmruangan();
        if (valtext != ""){
            gedung.ruangan.push({ namaruangan: gedung.nmruangan()});
            gedung.nmruangan("");
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

    gedung.removeruangan = function(){
        gedung.ruangan.remove(this);
    }


    gedung.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();

        var golgedung       = $("#golongangedung").select2().text();
        var nmgedung        = $("#namagedung").val();
        var letak           = $("#alamatgedung option:last").html();
        var luastanah       = $("#luastanahgedung").val();
        var luasbangunan    = $("#luasbangunangedung").val();
        var konstruksi      = $("#konstruksigedung").val();
        var kondisi         = $("#kondisigedung").val();
        var dokimb          = gedung.dokumenimb();
        var tanggalsertifikat = $("#tanggalimb").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var asalusul        = $("#asalusulgedung").select2().text();
        var asalusullainnya = $("#asalusulgedunglainnya").val();
        var tingkatgd       = gedung.tingkatgedung();
        var nilaiperolehan  = toAngka($("#nilaiperolehangedung").val());
        var keterangan      = $("#keterangangedung").val();
        

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2().text();
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       = "NULL";
        var entry           = "NULL";
        var entryuser       = $(".user_name").html();

        if(kodelokasi == null || kodebarang == null){
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
                url: "./controller/entry_asset/gedung/gedung_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golgedung, 4: nmgedung, 5: letak, 
                    6: luastanah, 7: luasbangunan, 8: konstruksi, 9: kondisi, 10: dokimb,
                    11: tanggalsertifikat, 12: asalusul, 13: asalusullainnya, 14: tingkatgd, 15: nilaiperolehan,
                    16: keterangan, 17: penanggungjawab, 18: lokasipjawab,
                    19: surveyor, 20: tanggalsurvei, 21: matauang, 22: satuankerja, 23: kodepemilik,
                    24: noregister, 25: status, 26: ketstatus, 27: entry, 28: entryuser 
                }
            }).done(function(data){
                
                var dt = data.KodeBangunanGedung 

                // insert data kode bangunan gedung to each array data
                var ged = gedung.ruangan();
                _.each(ged, function(element, index) {
                    _.extend(element, {no: index}, {kodegedung: dt});
                });
                
                // console.log(ged)
                // var dtged = JSON.stringify(ged);

                // ajax for save data ruangan
                $.ajax({
                    dataType: "json",
                    type: "post",
                    url: "./controller/entry_asset/gedung/ruangan_add.php",
                    data: {data : ged},
                })


                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Jaringan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            });
        }
    }

    gedung.clear = function(){
        $("#golongangedung").empty();
        gedung.selectBangunanGedung();
        $("#namagedung").val("");
        gedung.resetLetak();
        $("#luastanahgedung").val("");
        $("#luasbangunangedung").val("");
        $("#konstruksigedung").empty("");
        $("#kondisigedung").val("");
        $("#dokumenimb").prop('checked', false);
        $("#tanggalimb input").attr('disabled',true);
        $("#tanggalimb input").val("");
        $("#asalusulgedung").empty();
        gedung.selectAsalUsul();
        $(".asalusulgedunglainnya").hide();
        $("#asalusulgedunglainnya").val("");
        $("#tingkatgedung").prop('checked', false);
        $("#nilaiperolehangedung").val("");
        $("#keterangangedung").val("");
        gedung.ruangan([]);
    }

// End Gedung

// Start Monumen
    monumen.selectGolonganMonumen = function(){
        $('#golonganmonumen').select2({
            placeholder: 'Pilih Data Golongan Monumen...',
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
    }

    monumen.selectAsalusul = function(){
        $('#asalusulmon').select2({
            placeholder: 'Pilih Data Asal-usul Monumen...',
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
    }

    monumen.asalusulLainnya = function(){
        var st = $("#asalusulmon").val();
        // console.log(st)
        if(st == "215"){
            $(".asalusulmonlainnya").show();
            setTimeout(function(){
                $("#asalusulmonlainnya").focus();
                $('#asalusulmonlainnya').change(function(){
                    var a = $("#asalusulmonlainnya").val();
                    monumen.asalusullainnya(a);
                });
            })
        }else{
            $(".asalusulmonlainnya").hide();
            monumen.asalusullainnya("NULL");
        }
    }

    monumen.selectKonstruksiGedung = function(){
        $('#konstruksimonumen').select2({
            placeholder: 'Pilih Data Konstruksi Monumen...',
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
    }

    monumen.selectDatepicker = function(){
        $('#tanggalimbmon').datepicker({
            language: "id",
            format: "dd MM yyyy",
            todayBtn: "linked",
            toggleActive: true
        });
    }

    monumen.prepareCheckBox = function(){
        $("#tanggalimbmon input").attr('disabled',true);
        $("#tanggalimbmon input").val("");

        $("#dokumenmon").change(function(){
            var sertifikat = $("#dokumenmon").is(':checked');
            if(sertifikat != true){
                monumen.dokumenimb("0");
                $("#tanggalimbmon input").attr('disabled',true);
                $("#tanggalimbmon input").val("");
            }else{
                monumen.dokumenimb("1111111111111111111111111111111");
                $("#tanggalimbmon input").attr('disabled',false);
                // $("#nosertifikat").attr('disabled',false);
            }  
        });

        $("#tingkatmon").change(function(){
            var sesuai = $("#tingkatmon").is(':checked');
            if(sesuai != true){
                monumen.tingkatmon("0");
            }else{
                monumen.tingkatmon("1111111111111111111111111111111");
            }  
        });
    }

    monumen.replaceCurrency = function(){
        $("#nilaiperolehanmon").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehanmon").val();
                var b = toRp(a);
                $("#nilaiperolehanmon").val(b);
            }
            $("#keteranganmon").focus(function(){
                var a = $("#nilaiperolehanmon").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehanmon").val(c);
            })
        });
    }

    monumen.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();

        var golmonumen      = $("#golonganmonumen").select2().text();
        var nmmonumen       = $("#namamonumen").val();
        var letak           = $("#alamatmonumen").val();
        var luastanah       = $("#luastanahmonumen").val();
        var luasbangunan    = $("#luasmonumen").val();
        var thnperolehan    = $("#tahunperolehanmonumen").val();
        var konstruksi      = $("#konstruksimonumen").val();
        var kondisi         = $("#kondisimonumen").val();
        var dokimb          = monumen.dokumenimb();
        var tanggalsertifikat = $("#tanggalimbmon").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var asalusul        = $("#asalusulmon").select2().text();
        var asalusullainnya = $("#asalusulmonlainnya").val();
        var tingkatgd       = monumen.tingkatmon();
        var nilaiperolehan  = toAngka($("#nilaiperolehanmon").val());
        var keterangan      = $("#keteranganmon").val();
        
        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2().text();
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       = "NULL";
        var entry           = "NULL";
        var entryuser       = $(".user_name").html();

        if(kodelokasi == null || kodebarang == null){
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
                url: "./controller/entry_asset/monumen/monumen_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golmonumen, 4: nmmonumen, 5: letak, 
                    6: luastanah, 7: luasbangunan, 8: thnperolehan, 9: konstruksi, 10: kondisi, 11: dokimb,
                    12: tanggalsertifikat, 13: asalusul, 14: asalusullainnya, 15: tingkatgd, 16: nilaiperolehan,
                    17: keterangan, 18: penanggungjawab, 19: lokasipjawab,
                    20: surveyor, 21: tanggalsurvei, 22: matauang, 23: satuankerja, 24: kodepemilik,
                    25: noregister, 26: status, 27: ketstatus, 28: entry, 29: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Jaringan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    monumen.clear = function(){
        $("#golonganmonumen").empty();
        monumen.selectGolonganMonumen();
        $("#namamonumen").val("");
        $("#alamatmonumen").val("");
        $("#luastanahmonumen").val("");
        $("#luasmonumen").val("");
        $("#tahunperolehanmonumen").val("");
        $("#konstruksimonumen").empty("");
        $("#kondisimonumen").val("");
        $("#dokumenmon").prop('checked', false);
        $("#tanggalimbmon input").attr('disabled',true);
        $("#tanggalimbmon input").val("");
        $("#asalusulmon").empty();
        monumen.selectAsalusul();
        $(".asalusulmonlainnya").hide();
        $("#asalusulmonlainnya").val("");
        $("#tingkatmon").prop('checked', false);
        $("#nilaiperolehanmon").val("");
        $("#keteranganmon").val("");
    }
// End Monumen

du.prepareAllPanel = function(){
    $('.tanah').hide();
    $('.jalan').hide();
    $('.jembatan').hide();
    $('.bangunanair').hide();
    $('.instalasi').hide();
    $('.jaringan').hide(); 
    $('.bangunangedung').hide(); 
    $('.monumen').hide(); 
}

du.prepareForm = function(){
    $("#kdlokasi").attr('readonly',true);
    $("#unit").attr('readonly',true);
    $("#subunit").attr('readonly',true);
    $("#satuankerja").attr('readonly',true);
    $("#kodebarang").attr('readonly', true);

    $("#namabarang").attr('readonly',true);
}

du.prepareCheckBox = function(){
    $('.skin-minimal .i-check input').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
        increaseArea: '20%'
    });

    $('.skin-square .i-check input').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });


    $('.skin-flat .i-check input').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });

    $('.skin-line .i-check input').each(function () {
        var self = $(this),
        label = self.next(),
        label_text = label.text();
        label.remove();
        self.iCheck({
            checkboxClass: 'icheckbox_line-blue',
            radioClass: 'iradio_line-blue',
            insert: '<div class="icheck_line-icon"></div>' + label_text
        });
    });
}

du.prepareDatePicker = function(){
    $('#tanggalsurvei').datepicker({
        language: "id",
        format: "dd MM yyyy",
        todayBtn: "linked",
        toggleActive: true
    });
}

du.selectLokasi = function(){
    $('#assetlokasi').select2({
        placeholder: 'Pilih Data Lokasi...',
        ajax: {
            url: './controller/entry_asset/datautama/entry_asset_select_lokasi.php',
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
}

du.replaceDataLokasi = function(){
    var a;
    $('#assetlokasi').select2().on('change', function(e){
        a=e.currentTarget.value;
        // console.log(a)

        var dataLokasi = []
        $.getJSON("controller/entry_asset/datautama/entry_asset_select_alllokasi.php", function(data, index){
            dataLokasi = data;
            var arr = Object.keys(dataLokasi).map(function(k) { return dataLokasi[k] });
            // console.log(arr)
            var result = _.find(arr, function(num){ return num.kodelokasi == a; });
            // console.log(result);
            $("#kdlokasi").val(result.kodelokasi)
            $("#unit").val(result.unit);
            $("#subunit").val(result.subuni);
            $("#satuankerja").val(result.satker);
        })
    });
}

du.selectBarang = function(){
    $('#assetbarang').select2({
        placeholder: 'Pilih Data Barang...',
        ajax: {
            url: './controller/entry_asset/datautama/entry_asset_select_barang.php',
            dataType: 'json',
            delay: 250,
            // data: function(params){
            //  return{
            //      q: params.id,
            //      page:params.text
            //  }
            // },
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
            // data: function (param){
            //  // console.log("Data "+par)
            //  return {
            //      q: param.id,
            //      page: param.text
            //  }
            // },
        }
    });
}

du.replaceDataBarang = function(){
    var a;
    $('#assetbarang').select2().on('change', function(e){
        a=e.currentTarget.value;

        var dataLokasi = []
        $.getJSON("controller/entry_asset/datautama/entry_asset_select_allbarang.php", function(data, index){
            dataBarang = data;
            var arr = Object.keys(dataBarang).map(function(k) { return dataBarang[k] });

            var result = _.find(arr, function(num){ return num.kodebarang == a; });   

            $("#namabarang").val(result.namabarang);
            $("#kodebarang").val(result.kodebarang);
            var kdbarang = result.kodebarang
            du.changeForm(kdbarang);
        })
    });
}

du.changeForm = function(id){
    // swal(id)
    var kode = id.substring(0,4);
    // swal(kode)
    if(kode=="0101"){
        console.log("TANAH");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','tanah.saveForm();');
        $(".tanah").show();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".alatbesar").hide();
        tanah.prepare();
    }else if(kode=="0413"){
        var k = id.substring(0,6);
        if (k=="041301"){
            // console.log("JALAN "+k);
            $(".alert.alert-info").hide();
            $(".alert.alert-danger").hide();
            $("#cancelform").removeClass("hidden");
            $("#saveform").removeClass("hidden");
            $("#saveform").attr('onclick','jalan.saveForm();');
            $(".tanah").hide();
            $(".jalan").show();
            $(".jembatan").hide();
            $(".bangunanair").hide();
            $(".jaringan").hide();
            $(".instalasi").hide();
            $(".jaringan").hide();
            $(".bangunangedung").hide();
            $(".monumen").hide();
            $(".alatbesar").hide();
            jalan.prepare();
        }else if(k=="041302"){
            // console.log("JEMBATAN "+k);
            $(".alert.alert-info").hide();
            $(".alert.alert-danger").hide();
            $("#cancelform").removeClass("hidden");
            $("#saveform").removeClass("hidden");
            $("#saveform").attr('onclick','jembatan.saveForm();');
            $(".tanah").hide();
            $(".jalan").hide();
            $(".jembatan").show();
            $(".bangunanair").hide();
            $(".instalasi").hide();
            $(".jaringan").hide();
            $(".bangunangedung").hide();
            $(".alatbesar").hide();
            jembatan.prepare();
        }
    }else if(kode=="0414"){
        // console.log("BANGUNAN AIR");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','air.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").show();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        air.prepare();
    }else if(kode=="0415"){
        // console.log("INSTALASI");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','instalasi.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").show();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        instalasi.prepare();
    }else if(kode=="0416"){
        console.log("JARINGAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','jaringan.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").show();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        jaringan.prepare();
    }else if(kode=="0311"){
        console.log("BANGUNAN GEDUNG");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','gedung.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").show();
        $(".monumen").hide();
        $(".alatbesar").hide();
        gedung.prepare();
    }else if(kode=="0312"){
        console.log("MONUMEN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','monumen.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").show();
        $(".alatbesar").hide();
        monumen.prepare();
    }else if(kode=="0202"){
        console.log("ALAT BESAR");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','monumen.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").show();
        alatbesar.prepare();
    }else if(kode=="0203"){
        console.log("ALAT ANGKUTAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0204"){
        console.log("ALAT BENGKEL DAN ALAT UKUR");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0205"){
        console.log("ALAT PERTANIAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0206"){
        console.log("ALAT KANTOR DAN RUMAH TANGGA");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0207"){
        console.log("ALAT STUDIO DAN KOMUNIKASI");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0208"){
        console.log("ALAT KEDOKTERAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0209"){
        console.log("ALAT LABORATURIUM");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0517"){
        console.log("BUKU PERPUSTAKAAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0518"){
        console.log("BARANG BERCORAK KEBUDAYAAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0519"){
        console.log("HEWAN DAN TERNAK SERTA TANAMAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0210"){
        console.log("ALAT PERSENJATAAN/KEAMANAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode==null){
        console.log("BARANG PERSEDIAAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="06"){
        console.log("KONSTRUKSI DALAM PENGERJAAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else{
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").show();
        $(".tanah").hide();
        $(".jalan").hide();
    }
}

du.selectCurrency = function(){
    $('#currency').select2({
        placeholder: 'Pilih Mata Uang...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/datautama/entry_asset_select_currency.php',
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
}

du.selectKepemilikan = function(){
    $('#kepemilikan').select2({
        placeholder: 'Pilih Kepemilikan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/datautama/entry_asset_select_kepemilikan.php',
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
}

du.clear = function(){
    $(".alert.alert-info").show();
    $("#cancelform").addClass("hidden");
    $("#saveform").addClass("hidden");

    // $(".tanah").hide();
    // $(".jalan").hide();
    // $(".jembatan").hide();
    // $(".bangunanair").hide();
    // $(".instalasi").hide();
    // $(".jaringan").hide();
    // $(".bangunangedung").hide();
    du.prepareAllPanel();
    
    $("#assetlokasi").empty("");
    du.selectLokasi();
    $("#kdlokasi").val("");
    $("#unit").val("");
    $("#subunit").val("");
    $("#satuankerja").val("");

    $("#assetbarang").empty("");
    du.selectBarang();
    $("#kodebarang").val("");

    $("#kepemilikan").empty("");
    du.selectKepemilikan();

    $("#penanggungjawab").val("");
    $("#lpj").val("PROP.");
    $("#lokasipenanggungjawab").val("");
    $("#noregister").val("");

    $("#currency").empty("");
    du.selectCurrency();

    $('#tanggalsurvei').datepicker('setDate', null);
    $("#surveyor").val("");
}

function cancelForm(){
    tanah.clear();
    jalan.clear();
    jembatan.clear();
    air.clear();
    instalasi.clear();
    jaringan.clear();
    gedung.clear()
    monumen.clear();

    du.clear();
}

du.prepare = function(){
    du.prepareAllPanel();
    du.replaceDataLokasi();
    du.replaceDataBarang();
    du.selectLokasi();
    du.selectBarang();
    du.selectCurrency();
    du.selectKepemilikan();
    du.prepareCheckBox();
    du.prepareDatePicker();
    du.prepareForm();
}

tanah.prepare = function(){
    tanah.selectGolonganTanah();
    tanah.selectStatusTanah();
    tanah.prepareDatePicker();
    tanah.selectAsalUsul();
    tanah.selectTipePermukaan();
    tanah.selectLingkunganSekitar();
    tanah.replaceCurrency();
    tanah.prepareCheckBox();
}

jalan.prepare = function(){
    jalan.selectJenisJalan();
    jalan.selectTipePermukaan();
    jalan.selectAsalUsul();
    jalan.prepareCheckBox();
    jalan.replaceCurrency();
    jalan.prepareCheckBox();
}

jembatan.prepare = function(){
    jembatan.selectJenisJembatan();
    jembatan.selectPondasiJembatan();
    jembatan.selectBahanPondasi();
    jembatan.selectLantaiType();
    jembatan.selectBahanKonstruksi();
    jembatan.selectAsalusul();
    jembatan.replaceCurrency();
    jembatan.prepareCheckBox();
}

air.prepare = function(){
    air.selectGolonganAir();
    air.selectKonstruksiAir();
    air.asalusul();
    air.replaceCurrency();
    air.prepareCheckBox();
}

instalasi.prepare = function(){
    instalasi.selectGolonganInstalasi();
    instalasi.selectKonstruksiInstalasi();
    instalasi.asalusul();
    instalasi.replaceCurrency();
    instalasi.prepareCheckBox();
}

jaringan.prepare = function(){
    jaringan.prepareCheckBox()
    jaringan.selectGolonganJaringan();
    jaringan.asalusul();
    jaringan.replaceCurrency();
}

gedung.prepare = function(){
    gedung.selectBangunanGedung();
    gedung.selectKonstruksiGedung();
    gedung.prepareDatePicker();
    gedung.prepareCheckBox();
    gedung.selectAsalUsul();
    gedung.selectLetak();
    gedung.replaceCurrency();
    gedung.spottedruangan();
}

monumen.prepare = function(){
    monumen.selectGolonganMonumen();
    monumen.selectAsalusul();
    monumen.selectKonstruksiGedung();
    monumen.selectDatepicker();
    monumen.prepareCheckBox();
    monumen.replaceCurrency();
}

$(document).ready(function () {
	"use strict"; // Start of use strict
    du.prepare();
});