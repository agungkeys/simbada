var du = {
}

var tanah = {
    // save: ko.observable(true),
    bersertifikat: ko.observable("0"),
    datawal: ko.observable("0"),
    statustanahlainnya: ko.observable(""),
    asalusullainnya: ko.observable(""),
    tppermukaanlainnya: ko.observable(""),
    lingksekitarlainnya: ko.observable("")
}

var jalan = {
    tppermukaanlainnya: ko.observable(""),
    asalusullainnyajalan: ko.observable(""),
    datawal: ko.observable("0"),
    tppermukaanlainnya: ko.observable(""),
    asalusullainnya: ko.observable(""),
    dataawal: ko.observable("0"),
}

var jembatan = {
    pondasilainnya: ko.observable(""),
    bahanpondasilainnya: ko.observable(""),
    lantaitypelainnya: ko.observable(""),
    bahankonstruksilainnya: ko.observable(""),
    asalusuljembatanlainnya: ko.observable(""),
    datawal: ko.observable("0"),
}

var air = {
    asalusullainnya: ko.observable(""),
    datawal: ko.observable("0"),
}

var instalasi = {
    asalusullainnya: ko.observable(""),
    datawal: ko.observable("0"),
}

var jaringan = {
    asalusullainnya: ko.observable(""),
    datawal: ko.observable("0"),
}

var gedung = {
    dokumenimb: ko.observable("0"),
    tingkatgedung: ko.observable("0"),
    dataawal: ko.observable("0"),
    plngedung: ko.observable("0"),
    pamgedung: ko.observable("0"),
    telpgedung: ko.observable("0"),
    pondasigedunglainnya: ko.observable(""),
    lantaigedunglainnya: ko.observable(""),
    dindinggedunglainnya: ko.observable(""),
    plafongedunglainnya: ko.observable(""),
    atapgedunglainnya: ko.observable(""),
    plafongedunglainnya: ko.observable(""),
    atapgedunglainnya: ko.observable(""),
    asalusullainnya: ko.observable(""),
    lastResult: ko.observableArray([]),
    nmruangan: ko.observable(""),
    ruangan: ko.observableArray([]),
    indexruangan: ko.observable(1),
}

var monumen = {
    asalusullainnya: ko.observable(""),
    dokumenimb: ko.observable("0"),
    tingkatmon: ko.observable("0"),
}

var alatbesar = {}
var alatangkutan = {}
var alatbengkel = {}
var alatpertanian = {}
var alatkantor = {}
var alatstudio = {}
var alatkedokteran = {}
var alatlab = {}
var bukuperpus = {}
var kesenian = {}
var hewan = {}
var tanaman = {}
var alatkeamanan = {}
var konstruksi = {
    tingkat : ko.observable("0"),
    beton   : ko.observable("0"),
    dok   : ko.observable("0")
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
        // $('#tanggaldokumen').datepicker('setDate', null);

        $("#tanggaldok-replace").empty()
        $("#tanggaldok-replace").append("<div id='tanggaldokumen' class='input-group date'><input type='text' class='form-control'><span class='input-group-addon'><i class='glyphicon glyphicon-th'></i></span></div>");
        tanah.prepareDatePicker();

        $("#tanggaldokumen input").attr('disabled',true);
        $("#nosertifikat").attr('disabled',true);

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
            tanah.statustanahlainnya("")
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
            tanah.asalusullainnya("")
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
            tanah.tppermukaanlainnya("");
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
            tanah.lingksekitarlainnya("")
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
        $('#nilaiperolehan').css("font-weight","bold");
        $('#nilaiperolehan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
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
        var golongantanah   = $("#golongantanah").select2('data')[0].text;
        var luastanah       = $("#luastanah").val();
        var tahunperolehan  = $("#tahunperolehantanah").val();
        var letak           = $("#letakalamat").val();
        var statustanah     = $("#statustanah").select2('data')[0].text;
        var statustanahlain = tanah.statustanahlainnya();
        var bersertifikat   = tanah.bersertifikat();
        var tanggalsertifikat = $("#tanggaldokumen").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var nosertifikat    = $('#nosertifikat').val();
        var penggunaan      = $('#penggunaan').val();
        var asalusul        = $("#asalusul").select2('data')[0].text;
        var asalusullainnya = tanah.asalusullainnya();
        var dataawal        = tanah.datawal();
        var nilaiperolehan  = toAngka($('#nilaiperolehan').val());
        var keterangan      = $('#keterangan').val();

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;
        var kodetanahlama   = "";
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       ="";
        var entry           ="";
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
        $("#tahunperolehan").val("");
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
            jalan.tppermukaanlainnya("");
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
            jalan.asalusullainnyajalan("")
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
        $('#nilaiperolehanjalan').css("font-weight","bold");
        $('#nilaiperolehanjalan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
        
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

        var jenisjalan      = $("#jenisjalan").select2('data')[0].text;
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
        var tppermukaan     = $("#tppermukaan").select2('data')[0].text;
        var tppermukaanlain = jalan.tppermukaanlainnya();
        var kondisijalan    = $("#kondisijalan").val();
        var asalusul        = $("#tppermukaan").select2('data')[0].text;
        var asalusullainnya = jalan.asalusullainnyajalan();
        var nilaiperolehan  = toAngka($("#nilaiperolehanjalan").val());
        var keterangan      = $("#keteranganjalan").val();
        

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       = "";
        var entry           = "";
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
                    16: tppermukaan, 18: kondisijalan, 19: asalusul, 20: asalusullainnya, 21: dataawal, 22: hargaperbahan, 23: nilaipasar,
                    24: nilaiperolehan, 25: nilaibaru, 26: keterangan, 27: penanggungjawab, 28: lokasipjawab,
                    29: surveyor, 30: tanggalsurvei, 31: matauang, 32: satuankerja, 33: kodepemilik,
                    34: noregister, 35: entryuser
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
            jembatan.pondasilainnya("");
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
            jembatan.bahanpondasilainnya("");
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
            jembatan.lantaitypelainnya("");
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
            jembatan.bahankonstruksilainnya("");
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
            jembatan.asalusuljembatanlainnya("");
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
        $('#nilaiperolehanjembatan').css("font-weight","bold");
        $('#nilaiperolehanjembatan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
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
        var jenisjembatan   = $("#jenisjembatan").select2('data')[0].text;
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
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       = "";
        var entry           = "";
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
            air.asalusullainnya("");
        }
    }

    air.replaceCurrency = function(){
        $('#nilaiperolehanair').css("font-weight","bold");
        $('#nilaiperolehanair').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
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
        var golbangunanair  = $("#golbangunanair").select2('data')[0].text;
        var nmbangunanair   = $("#namabangunanair").val();
        var letak           = $("#alamatbangunanair").val();
        var tahunperolehan  = $("#tahunperolehanair").val();
        var kondisi         = $("#kondisibangunanair").val();
        var bahan           = $("#bahanbangunanair").val();
        var panjang         = $("#panjangbangunanair").val();
        var lebar           = $("#lebarbangunanair").val();
        var tinggi          = $("#tinggibangunanair").val();
        var fasilitaspenun  = $("#fasilitasbangunanair").val();
        var asalusul        = $("#asalusulair").select2('data')[0].text;
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
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       = "";
        var entry           = "";
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
            instalasi.asalusullainnya("");
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
        $('#nilaiperolehaninst').css("font-weight","bold");
        $('#nilaiperolehaninst').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
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
        var golinstalasi    = $("#golinstalasi").select2('data')[0].text;
        var nminstalasi     = $("#namainstalasi").val();
        var letak           = $("#alamatinstalasi").val();
        var tahunperolehan  = $("#tahunperolehaninst").val();
        var kondisi         = $("#kondisibangunaninst").val();
        var bahan           = $("#bahanbangunaninst").val();
        var panjang         = $("#panjangbangunaninst").val();
        var lebar           = $("#lebarbangunaninst").val();
        var tinggi          = $("#tinggibangunaninst").val();
        var fasilitaspenun  = $("#fasilitasbangunaninst").val();
        var asalusul        = $("#asalusulinst").select2('data')[0].text;
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
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       = "";
        var entry           = "";
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
        $("#asalusuljar").empty();
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
            jaringan.asalusullainnya("");
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
        $('#nilaiperolehanjar').css("font-weight","bold");
        $('#nilaiperolehanjar').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});

        
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
        

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       = "";
        var entry           = "";
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
            gedung.asalusullainnya("");
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
    }

    gedung.replaceCurrency = function(){
        $('#nilaiperolehangedung').css("font-weight","bold");
        $('#nilaiperolehangedung').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
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

        var golgedung       = $("#golongangedung").select2('data')[0].text;
        var nmgedung        = $("#namagedung").val();
        var letak           = $("#alamatgedung option:last").html();
        var luastanah       = $("#luastanahgedung").val();
        var luasbangunan    = $("#luasbangunangedung").val();
        var thnperbangunan  = $("#tahunperolehanmonumen").val();
        var konstruksi      = $("#konstruksigedung").val();
        var kondisi         = $("#kondisigedung").val();
        var dokimb          = gedung.dokumenimb();
        var tanggalsertifikat = $("#tanggalimb").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var asalusul        = $("#asalusulgedung").select2('data')[0].text;
        var asalusullainnya = $("#asalusulgedunglainnya").val();
        var tingkatgd       = gedung.tingkatgedung();
        var nilaiperolehan  = toAngka($("#nilaiperolehangedung").val());
        var keterangan      = $("#keterangangedung").val();
        

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       = "";
        var entry           = "";
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
                    24: noregister, 25: status, 26: ketstatus, 27: entry, 28: entryuser, 29: thnperbangunan
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
            monumen.asalusullainnya("");
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
        $('#nilaiperolehanmon').css("font-weight","bold");
        $('#nilaiperolehanmon').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    monumen.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();

        var golmonumen      = $("#golonganmonumen").select2('data')[0].text;
        var nmmonumen       = $("#namamonumen").val();
        var letak           = $("#alamatmonumen").val();
        var luastanah       = $("#luastanahmonumen").val();
        var luasbangunan    = $("#luasmonumen").val();
        var thnperolehan    = $("#tahunperolehanmonumen").val();
        var konstruksi      = $("#konstruksimonumen").val();
        var kondisi         = $("#kondisimonumen").val();
        var dokimb          = monumen.dokumenimb();
        var tanggalsertifikat = $("#tanggalimbmon").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var asalusul        = $("#asalusulmon").select2('data')[0].text;
        var asalusullainnya = $("#asalusulmonlainnya").val();
        var tingkatgd       = monumen.tingkatmon();
        var nilaiperolehan  = toAngka($("#nilaiperolehanmon").val());
        var keterangan      = $("#keteranganmon").val();
        
        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       = "";
        var entry           = "";
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
                    1: kodelokasi, 2: kodebarang, 3: golmonumen, 4: nmmonumen, 5: letak, 
                    6: luastanah, 7: luasbangunan, 8: thnperolehan, 9: konstruksi, 10: kondisi, 11: dokimb,
                    12: tanggalsertifikat, 13: asalusul, 14: asalusullainnya, 15: tingkatgd, 16: nilaiperolehan,
                    17: keterangan, 18: penanggungjawab, 19: lokasipjawab,
                    20: surveyor, 21: tanggalsurvei, 22: matauang, 23: satuankerja, 24: kodepemilik,
                    25: noregister, 26: entryuser 
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

// Start Alat Besar
    alatbesar.selectGolonganAlatBesar = function(){
        $('#golonganalatbesar').select2({
            placeholder: 'Pilih Data Golongan Alat Besar...',
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
    }

    alatbesar.selectAsalusul = function(){
        $('#asalusulalatbesar').select2({
            placeholder: 'Pilih Data Asal-usul Alat Besar...',
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
    }

    alatbesar.replaceCurrency = function(){
        $('#nilaiperolehanalatbesar').css("font-weight","bold");
        $('#nilaiperolehanalatbesar').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0}); 
    }

    alatbesar.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();
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
        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "";
        var ketstatus       = "";
        var entry           = "";
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
                url: "./controller/entry_asset/alatbesar/alatbesar_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatbesar, 4: nmalatbesar, 5: mrkalatbesar, 
                    6: tpalatbesar, 7: ukalatbesar, 8: bhnalatbesar, 9: norkalatbesar, 10: nomsnalatbesar, 11: thperolehanalatbesar,
                    12: konalatbesar, 13: asalusulalatbesar, 14: nilaiperolehan, 15: keterangan, 16: penanggungjawab,
                    17: lokasipjawab, 18: surveyor, 19: tanggalsurvei,
                    20: matauang, 21: satuankerja, 22: kodepemilik, 23: noregister, 24: status,
                    25: ketstatus, 26: entry, 27: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Besar Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatbesar.clear = function(){
        $("#golonganalatbesar").empty();
        alatbesar.selectGolonganAlatBesar();
        $("#namaalatbesar").val("");
        $("#merkalatbesar").val("");
        $("#tipealatbesar").val("");
        $("#ukuranalatbesar").val("");
        $("#bahanalatbesar").val("");
        $("#norangkaalatbesar").val("");
        $("#nomesinalatbesar").val("");
        $("#tahunperolehanalatbesar").val("");
        $("#kondisialatberat").val("");
        $("#asalusulalatbesar").empty();
        alatbesar.selectAsalusul();
        $("#nilaiperolehanalatbesar").val("");
        $("#keteranganalatbesar").val("");
    }
// End Alat Besar

// Start Alat Angkutan
    alatangkutan.prepareAll = function(){
        alatangkutan.prepareDatePicker();
        alatangkutan.selectGolonganAlatAngkutan();
        alatangkutan.selectAsalUsul();
        alatangkutan.replaceCurrency();
    }

    alatangkutan.prepareDatePicker = function(){
        $('#tglalatangkut').datepicker({
            language: "id",
            format: "dd MM yyyy",
            todayBtn: "linked",
            toggleActive: true
        });
    }

    alatangkutan.selectGolonganAlatAngkutan = function(){
        $('#golonganalatangkut').select2({
            placeholder: 'Pilih Data Alat Angkut...',
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
    }

    alatangkutan.selectAsalUsul = function(){
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
    }

    alatangkutan.replaceCurrency = function(){
        $('#nilaiperolehanalatangkut').css("font-weight","bold");
        $('#nilaiperolehanalatangkut').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    alatangkutan.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();
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
        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        var status           = "";
        var ketstatus        = "";
        var entry            = "";
        var entryuser        = $(".user_name").html();
        var npolalatangkut   = $("#nopolalatangkut").val();
        var tglalatangkut    = $("#tglalatangkut").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var nobpkbalatangkut = $("#nobpkb").val();

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
                url: "./controller/entry_asset/alatangkut/alatangkut_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatangkut, 4: nmalatangkut, 5: mrkalatangkut, 
                    6: tpalatangkut, 7: ukalatangkut, 8: bhnalatangkut, 9: norkalatangkut, 10: nomsnalatangkut, 
                    11: thperolehanalatangkut, 12: konalatangkut, 13: asalusulalatangkut, 14: nilaiperolehan, 
                    15: keterangan, 16: penanggungjawab, 17: lokasipjawab, 18: surveyor, 19: tanggalsurvei, 
                    20: matauang, 21: satuankerja, 22: kodepemilik, 23: noregister, 24: status, 
                    25: ketstatus, 26: entry, 27: entryuser, 28: npolalatangkut, 29: tglalatangkut, 30: nobpkbalatangkut
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Angkut Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatangkutan.clear = function(){
        $("#golonganalatangkut").empty();
        alatangkutan.selectGolonganAlatAngkutan();
        $("#namaalatangkut").val("");
        $("#merkalatalatangkut").val("");
        $("#tipealatangkut").val("");
        $("#ukuranalatangkut").val("");
        $("#bahanalatangkut").val("");
        $("#norangkaalatangkut").val("");
        $("#nomesinalatangkut").val("");
        $("#tahunperolehanalatangkut").val("");
        $("#nopolalatangkut").val("");
        $('#tglalatangkut').datepicker('setDate', null);
        $("#nobpkb").val("");
        $("#kondisialatangkut").val("");
        $("#asalusulalatangkut").empty();
        alatangkutan.selectAsalUsul();
        $("#nilaiperolehanalatangkut").val("");
        $("#keteranganalatangkut").val("");
    }
// End Alat Angkutan

// Start Alat Bengkel
    alatbengkel.prepareAll = function(){
        alatbengkel.selectGolonganAlatBengkel();
        alatbengkel.selectAsalUsul();
        alatbengkel.replaceCurrency();
    }

    alatbengkel.selectGolonganAlatBengkel = function(){
        $('#golonganalatbengkel').select2({
            placeholder: 'Pilih Data Alat Bengkel...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatbengkel/select_golonganalatbengkel.php',
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

    alatbengkel.selectAsalUsul = function(){
        $('#asalusulalatbengkel').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatbengkel/select_asalusul.php',
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

    alatbengkel.replaceCurrency = function(){
        $('#nilaiperolehanalatbengkel').css("font-weight","bold");
        $('#nilaiperolehanalatbengkel').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    alatbengkel.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();
        var golalatbengkel    = $("#golonganalatbengkel").select2('data')[0].text;
        var nmalatbengkel     = $("#namabarangalatbengkel").val();
        var mrkalatbengkel    = $("#merkalatbengkel").val();
        var tpalatbengkel     = $("#tipealatbengkel").val();
        var bhnalatbengkel    = $("#bahanalatbengkel").val();
        var thperolehanalatbengkel    = $("#tahunperolehanalatbengkel").val();
        var ukalatbengkel     = $("#ukuranalatbengkel").val();
        var jmlalatbengkel    = $("#jumlahalatbengkel").val();
        var konalatbengkel    = $("#kondisialatbengkel").val();
        var asalusulalatbengkel       = $("#asalusulalatbengkel").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehanalatbengkel").val());
        var keterangan       = $("#keteranganalatbengkel").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        var status           = "";
        var ketstatus        = "";
        var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/alatbengkel/alatbengkel_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatbengkel, 4: nmalatbengkel, 
                    5: mrkalatbengkel, 6: tpalatbengkel, 7: bhnalatbengkel, 8: thperolehanalatbengkel, 
                    9: ukalatbengkel, 10: jmlalatbengkel, 11: konalatbengkel, 12: asalusulalatbengkel, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Bengkel Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatbengkel.clear = function(){
        $("#golonganalatbengkel").empty();
        alatbengkel.selectGolonganAlatBengkel();
        $("#namabarangalatbengkel").val("");
        $("#merkalatbengkel").val("");
        $("#tipealatbengkel").val("");
        $("#bahanalatbengkel").val("");
        $("#tahunperolehanalatbengkel").val("");
        $("#ukuranalatbengkel").val("");
        $("#jumlahalatbengkel").val("");
        $("#kondisialatbengkel").val("");
        $("#asalusulalatbengkel").empty();
        alatbengkel.selectAsalUsul();
        $("#nilaiperolehanalatbengkel").val("");
        $("#keteranganalatbengkel").val("");
    }
// End Alat Bengkel

// Start Alat Pertanian
    alatpertanian.selectGolonganAlatPertanian = function(){
        $('#golonganalatpertanian').select2({
            placeholder: 'Pilih Data Alat Pertanian...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatpertanian/select_golonganalatpertanian.php',
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

    alatpertanian.selectAsalUsul = function(){
        $('#asalusulalatpertanian').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatpertanian/select_asalusul.php',
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

    alatpertanian.replaceCurrency = function(){
        $('#nilaiperolehanalatpertanian').css("font-weight","bold");
        $('#nilaiperolehanalatpertanian').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    alatpertanian.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var golalatpertanian    = $("#golonganalatpertanian").select2('data')[0].text;
        var nmalatpertanian     = $("#namabarangalatpertanian").val();
        var mrkalatpertanian    = $("#merkalatpertanian").val();
        var tpalatpertanian     = $("#tipealatpertanian").val();
        var bhnalatpertanian    = $("#bahanalatpertanian").val();
        var thperolehanalatpertanian    = $("#tahunperolehanalatpertanian").val();
        var ukalatpertanian     = $("#ukuranalatpertanian").val();
        var jmlalatpertanian    = $("#jumlahalatpertanian").val();
        var konalatpertanian    = $("#kondisialatpertanian").val();
        var asalusulalatpertanian       = $("#asalusulalatpertanian").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehanalatpertanian").val());
        var keterangan       = $("#keteranganalatpertanian").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/alatpertanian/alatpertanian_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatpertanian, 4: nmalatpertanian, 
                    5: mrkalatpertanian, 6: tpalatpertanian, 7: bhnalatpertanian, 8: thperolehanalatpertanian, 
                    9: ukalatpertanian, 10: jmlalatpertanian, 11: konalatpertanian, 12: asalusulalatpertanian, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Pertanian Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatpertanian.clear = function(){
        $("#golonganalatpertanian").empty();
        alatpertanian.selectGolonganAlatPertanian();
        $("#namabarangalatpertanian").val("");
        $("#merkalatpertanian").val("");
        $("#tipealatpertanian").val("");
        $("#bahanalatpertanian").val("");
        $("#tahunperolehanalatpertanian").val("");
        $("#ukuranalatpertanian").val("");
        $("#jumlahalatpertanian").val("");
        $("#kondisialatpertanian").val("");
        $("#asalusulalatpertanian").empty();
        alatpertanian.selectAsalUsul();
        $("#nilaiperolehanalatpertanian").val("");
        $("#keteranganalatpertanian").val("");
    }

    alatpertanian.prepareAll = function(){
        alatpertanian.selectGolonganAlatPertanian();
        alatpertanian.replaceCurrency();
        alatpertanian.selectAsalUsul();
    }
// End Alat Pertanian

// Start Alat Kantor
    alatkantor.selectGolonganAlatKantor = function(){
        $('#golonganalatkantor').select2({
            placeholder: 'Pilih Data Alat Kantor...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatkantor/select_golonganalatkantor.php',
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

    alatkantor.selectAsalUsul = function(){
        $('#asalusulalatkantor').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatkantor/select_asalusul.php',
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

    alatkantor.replaceCurrency = function(){
        $('#nilaiperolehanalatkantor').css("font-weight","bold");
        $('#nilaiperolehanalatkantor').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    alatkantor.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var golalatkantor    = $("#golonganalatkantor").select2('data')[0].text;
        var nmalatkantor     = $("#namabarangalatkantor").val();
        var mrkalatkantor    = $("#merkalatkantor").val();
        var tpalatkantor     = $("#tipealatkantor").val();
        var bhnalatkantor    = $("#bahanalatkantor").val();
        var thperolehanalatkantor    = $("#tahunperolehanalatkantor").val();
        var ukalatkantor     = $("#ukuranalatkantor").val();
        var jmlalatkantor    = $("#jumlahalatkantor").val();
        var konalatkantor    = $("#kondisialatkantor").val();
        var asalusulalatkantor       = $("#asalusulalatkantor").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehanalatkantor").val());
        var keterangan       = $("#keteranganalatkantor").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/alatkantor/alatkantor_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatkantor, 4: nmalatkantor, 
                    5: mrkalatkantor, 6: tpalatkantor, 7: bhnalatkantor, 8: thperolehanalatkantor, 
                    9: ukalatkantor, 10: jmlalatkantor, 11: konalatkantor, 12: asalusulalatkantor, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Kantor Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatkantor.prepareAll = function(){
        alatkantor.selectGolonganAlatKantor();
        alatkantor.selectAsalUsul();
        alatkantor.replaceCurrency();
    }

    alatkantor.clear = function(){
        $("#golonganalatkantor").empty();
        alatkantor.selectGolonganAlatKantor();
        $("#namabarangalatkantor").val("");
        $("#merkalatkantor").val("");
        $("#tipealatkantor").val("");
        $("#bahanalatkantor").val("");
        $("#tahunperolehanalatkantor").val("");
        $("#ukuranalatkantor").val("");
        $("#jumlahalatkantor").val("");
        $("#kondisialatkantor").val("");
        $("#asalusulalatkantor").empty();
        alatkantor.selectAsalUsul();
        $("#nilaiperolehanalatkantor").val("");
        $("#keteranganalatkantor").val("");
    }
// End Alat Pertanian

// Start Alat Studio
    alatstudio.selectGolonganAlatStudio = function(){
        $('#golonganalatstudio').select2({
            placeholder: 'Pilih Data Alat Studio...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatstudio/select_golonganalatstudio.php',
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

    alatstudio.selectAsalUsul = function(){
        $('#asalusulalatstudio').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatstudio/select_asalusul.php',
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

    alatstudio.replaceCurrency = function(){
        $('#nilaiperolehanalatstudio').css("font-weight","bold");
        $('#nilaiperolehanalatstudio').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    alatstudio.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var golalatstudio    = $("#golonganalatstudio").select2('data')[0].text;
        var nmalatstudio     = $("#namabarangalatstudio").val();
        var mrkalatstudio    = $("#merkalatstudio").val();
        var tpalatstudio     = $("#tipealatstudio").val();
        var bhnalatstudio    = $("#bahanalatstudio").val();
        var thperolehanalatstudio    = $("#tahunperolehanalatstudio").val();
        var ukalatstudio     = $("#ukuranalatstudio").val();
        var jmlalatstudio    = $("#jumlahalatstudio").val();
        var konalatstudio    = $("#kondisialatstudio").val();
        var asalusulalatstudio       = $("#asalusulalatstudio").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehanalatstudio").val());
        var keterangan       = $("#keteranganalatstudio").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/alatstudio/alatstudio_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatstudio, 4: nmalatstudio, 
                    5: mrkalatstudio, 6: tpalatstudio, 7: bhnalatstudio, 8: thperolehanalatstudio, 
                    9: ukalatstudio, 10: jmlalatstudio, 11: konalatstudio, 12: asalusulalatstudio, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Kantor Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatstudio.prepareAll = function(){
        alatstudio.selectGolonganAlatStudio();
        alatstudio.replaceCurrency();
        alatstudio.selectAsalUsul();
    }

    alatstudio.clear = function(){
        $("#golonganalatstudio").empty();
        alatstudio.selectGolonganAlatStudio();
        $("#namabarangalatstudio").val("");
        $("#merkalatstudio").val("");
        $("#tipealatstudio").val("");
        $("#bahanalatstudio").val("");
        $("#tahunperolehanalatstudio").val("");
        $("#ukuranalatstudio").val("");
        $("#jumlahalatstudio").val("");
        $("#kondisialatstudio").val("");
        $("#asalusulalatstudio").empty();
        alatstudio.selectAsalUsul();
        $("#nilaiperolehanalatstudio").val("");
        $("#keteranganalatstudio").val("");
    }
// End Alat Studio

// Start Alat Kedokteran
    alatkedokteran.selectGolonganAlatKedokteran = function(){
        $('#golonganalatkedokteran').select2({
            placeholder: 'Pilih Data Alat Kedokteran...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatkedokteran/select_golonganalatkedokteran.php',
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

    alatkedokteran.selectAsalUsul = function(){
        $('#asalusulalatkedokteran').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatkedokteran/select_asalusul.php',
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

    alatkedokteran.replaceCurrency = function(){
        $('#nilaiperolehanalatkedokteran').css("font-weight","bold");
        $('#nilaiperolehanalatkedokteran').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    alatkedokteran.prepareAll = function(){
        alatkedokteran.selectGolonganAlatKedokteran();
        alatkedokteran.selectAsalUsul();
        alatkedokteran.replaceCurrency();
    }

    alatkedokteran.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var golalatkedokteran    = $("#golonganalatkedokteran").select2('data')[0].text;
        var nmalatkedokteran     = $("#namabarangalatkedokteran").val();
        var mrkalatkedokteran    = $("#merkalatkedokteran").val();
        var tpalatkedokteran     = $("#tipealatkedokteran").val();
        var bhnalatkedokteran    = $("#bahanalatkedokteran").val();
        var thperolehanalatkedokteran    = $("#tahunperolehanalatkedokteran").val();
        var ukalatkedokteran     = $("#ukuranalatkedokteran").val();
        var jmlalatkedokteran    = $("#jumlahalatkedokteran").val();
        var konalatkedokteran    = $("#kondisialatkedokteran").val();
        var asalusulalatkedokteran       = $("#asalusulalatkedokteran").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehanalatkedokteran").val());
        var keterangan       = $("#keteranganalatkedokteran").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/alatkedokteran/alatkedokteran_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatkedokteran, 4: nmalatkedokteran, 
                    5: mrkalatkedokteran, 6: tpalatkedokteran, 7: bhnalatkedokteran, 8: thperolehanalatkedokteran, 
                    9: ukalatkedokteran, 10: jmlalatkedokteran, 11: konalatkedokteran, 12: asalusulalatkedokteran, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Kedokteran Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatkedokteran.clear = function(){
        $("#golonganalatkedokteran").empty();
        alatkedokteran.selectGolonganAlatKedokteran();
        $("#namabarangalatkedokteran").val("");
        $("#merkalatkedokteran").val("");
        $("#tipealatkedokteran").val("");
        $("#bahanalatkedokteran").val("");
        $("#tahunperolehanalatkedokteran").val("");
        $("#ukuranalatkedokteran").val("");
        $("#jumlahalatkedokteran").val("");
        $("#kondisialatkedokteran").val("");
        $("#asalusulalatkedokteran").empty();
        alatkedokteran.selectAsalUsul();
        $("#nilaiperolehanalatkedokteran").val("");
        $("#keteranganalatkedokteran").val("");
    }

    //TINGGAL SAVE DATA SAJA
// End Alat Kedokteran

// Start Alat Lab
    alatlab.selectGolonganAlatLab = function(){
        $('#golonganalatlab').select2({
            placeholder: 'Pilih Data Alat Laboratorium...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatlab/select_golonganalatlab.php',
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

    alatlab.selectAsalUsul = function(){
        $('#asalusulalatlab').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/alatlab/select_asalusul.php',
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

    alatlab.replaceCurrency = function(){
        $('#nilaiperolehanalatlab').css("font-weight","bold");
        $('#nilaiperolehanalatlab').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    alatlab.prepareAll = function(){
        alatlab.selectGolonganAlatLab();
        alatlab.selectAsalUsul();
        alatlab.replaceCurrency();
    }

    alatlab.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var golalatlab       = $("#golonganalatlab").select2('data')[0].text;
        var nmalatlab        = $("#namabarangalatlab").val();
        var mrkalatlab       = $("#merkalatlab").val();
        var tpalatlab        = $("#tipealatlab").val();
        var bhnalatlab       = $("#bahanalatlab").val();
        var thperolehanalatlab  = $("#tahunperolehanalatlab").val();
        var ukalatlab        = $("#ukuranalatlab").val();
        var jmlalatlab       = $("#jumlahalatlab").val();
        var konalatlab       = $("#kondisialatlab").val();
        var asalusulalatlab  = $("#asalusulalatlab").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehanalatlab").val());
        var keterangan       = $("#keteranganalatlab").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/alatlab/alatlab_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatlab, 4: nmalatlab, 
                    5: mrkalatlab, 6: tpalatlab, 7: bhnalatlab, 8: thperolehanalatlab, 
                    9: ukalatlab, 10: jmlalatlab, 11: konalatlab, 12: asalusulalatlab, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Laboratorium Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatlab.clear = function(){
        $("#golonganalatlab").empty();
        alatlab.selectGolonganAlatLab();
        $("#namabarangalatlab").val("");
        $("#merkalatlab").val("");
        $("#tipealatlab").val("");
        $("#bahanalatlab").val("");
        $("#tahunperolehanalatlab").val("");
        $("#ukuranalatlab").val("");
        $("#jumlahalatlab").val("");
        $("#kondisialatlab").val("");
        $("#asalusulalatlab").empty();
        alatlab.selectAsalUsul();
        $("#nilaiperolehanalatlab").val("");
        $("#keteranganalatlab").val("");
    }
// End Alat Lab

// Start Buku Perpus
    bukuperpus.selectGolonganBukuPerpus = function(){
        $('#golonganbukuperpus').select2({
            placeholder: 'Pilih Data Buku...',
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
    }

    bukuperpus.selectAsalUsul = function(){
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
    }

    bukuperpus.replaceCurrency = function(){
        $('#nilaiperolehanbukuperpus').css("font-weight","bold");
        $('#nilaiperolehanbukuperpus').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    bukuperpus.prepareAll = function(){
        bukuperpus.selectGolonganBukuPerpus();
        bukuperpus.selectAsalUsul();
        bukuperpus.replaceCurrency();
    }

    bukuperpus.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var golbukuperpus       = $("#golonganbukuperpus").select2('data')[0].text;
        var nmbukuperpus        = $("#namabarangbukuperpus").val();
        // var mrkbukuperpus       = $("#merkbukuperpus").val();
        // var tpbukuperpus        = $("#tipebukuperpus").val();
        // var bhnbukuperpus       = $("#bahanbukuperpus").val();
        var thperolehanbukuperpus  = $("#tahunperolehanbukuperpus").val();
        // var ukbukuperpus        = $("#ukuranbukuperpus").val();
        var jmlbukuperpus       = $("#jumlahbukuperpus").val();
        var konbukuperpus       = $("#kondisibukuperpus").val();
        var asalusulbukuperpus  = $("#asalusulbukuperpus").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehanbukuperpus").val());
        var keterangan       = $("#keteranganbukuperpus").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/bukuperpus/bukuperpus_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golbukuperpus, 4: nmbukuperpus, 
                    5: thperolehanbukuperpus, 6: jmlbukuperpus, 7: konbukuperpus, 8: asalusulbukuperpus, 
                    9: nilaiperolehan, 10: keterangan, 11: penanggungjawab, 12: lokasipjawab, 13: surveyor, 
                    14: tanggalsurvei, 15: matauang, 16: satuankerja, 17: kodepemilik, 18: noregister, 19: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Buku Perpustakaan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    bukuperpus.clear = function(){
        $("#golonganbukuperpus").empty();
        bukuperpus.selectGolonganBukuPerpus();
        $("#namabarangbukuperpus").val("");
        // $("#merkbukuperpus").val("");
        // $("#tipebukuperpus").val("");
        // $("#bahanbukuperpus").val("");
        $("#tahunperolehanbukuperpus").val("");
        // $("#ukuranbukuperpus").val("");
        $("#jumlahbukuperpus").val("");
        $("#kondisibukuperpus").val("");
        $("#asalusulbukuperpus").empty();
        bukuperpus.selectAsalUsul();
        $("#nilaiperolehanbukuperpus").val("");
        $("#keteranganbukuperpus").val("");
    }
// End Buku Perpus

// Start Barang Kesenian
    kesenian.selectGolonganKesenian = function(){
        $('#golongankesenian').select2({
            placeholder: 'Pilih Data Kesenian...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/kesenian/select_golongankesenian.php',
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

    kesenian.selectAsalUsul = function(){
        $('#asalusulkesenian').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/kesenian/select_asalusul.php',
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

    kesenian.replaceCurrency = function(){
        $('#nilaiperolehankesenian').css("font-weight","bold");
        $('#nilaiperolehankesenian').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    kesenian.prepareAll = function(){
        kesenian.selectGolonganKesenian();
        kesenian.selectAsalUsul();
        kesenian.replaceCurrency();
    }

    kesenian.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var golkesenian       = $("#golongankesenian").select2('data')[0].text;
        var nmkesenian        = $("#namabarangkesenian").val();
        var mrkkesenian       = $("#merkkesenian").val();
        var tpkesenian        = $("#tipekesenian").val();
        var bhnkesenian       = $("#bahankesenian").val();
        var thperolehankesenian  = $("#tahunperolehankesenian").val();
        var ukkesenian        = $("#ukurankesenian").val();
        var jmlkesenian       = $("#jumlahkesenian").val();
        var konkesenian       = $("#kondisikesenian").val();
        var asalusulkesenian  = $("#asalusulkesenian").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehankesenian").val());
        var keterangan       = $("#keterangankesenian").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/kesenian/kesenian_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golkesenian, 4: nmkesenian, 
                    5: mrkkesenian, 6: tpkesenian, 7: bhnkesenian, 8: thperolehankesenian, 
                    9: ukkesenian, 10: jmlkesenian, 11: konkesenian, 12: asalusulkesenian, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Bercorak Kesenian Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    kesenian.clear = function(){
        $("#golongankesenian").empty();
        kesenian.selectGolonganKesenian();
        $("#namabarangkesenian").val("");
        $("#merkkesenian").val("");
        $("#tipekesenian").val("");
        $("#bahankesenian").val("");
        $("#tahunperolehankesenian").val("");
        $("#ukurankesenian").val("");
        $("#jumlahkesenian").val("");
        $("#kondisikesenian").val("");
        $("#asalusulkesenian").empty();
        kesenian.selectAsalUsul();
        $("#nilaiperolehankesenian").val("");
        $("#keterangankesenian").val("");
    }
// End Barang Kesenian

// Start Hewan
    hewan.selectGolonganHewan = function(){
        $('#golonganhewan').select2({
            placeholder: 'Pilih Data Hewan...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/hewan/select_golonganhewan.php',
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

    hewan.selectAsalUsul = function(){
        $('#asalusulhewan').select2({
            placeholder: 'Pilih Asal Usul...',
            minimumResultsForSearch: Infinity,
            ajax: {
                url: './controller/entry_asset/hewan/select_asalusul.php',
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

    hewan.replaceCurrency = function(){
        $('#nilaiperolehanhewan').css("font-weight","bold");
        $('#nilaiperolehanhewan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    hewan.prepareAll = function(){
        hewan.selectGolonganHewan();
        hewan.selectAsalUsul();
        hewan.replaceCurrency();
    }

    hewan.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var golhewan            = $("#golonganhewan").select2('data')[0].text;
        var jnhewan             = $("#jenishewan").val();
        var thperolehanhewan    = $("#tahunperolehanhewan").val();
        var klmnhewan           = $("#kelaminhewan").val();
        var jmlhewan            = $("#jumlahhewan").val();
        var konhewan            = $("#kondisihewan").val();
        var asalusulhewan       = $("#asalusulhewan").select2('data')[0].text;
        var nilaiperolehan   = toAngka($("#nilaiperolehanhewan").val());
        var keterangan       = $("#keteranganhewan").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/hewan/hewan_add.php",
                data:{
                    1 : kodebarang, 2 : kodelokasi, 3 : golhewan, 4 : jnhewan, 
                    5 : thperolehanhewan, 6 : klmnhewan, 7 : jmlhewan, 8 : konhewan, 
                    9 : asalusulhewan, 10 : nilaiperolehan, 11 : keterangan, 
                    12 : penanggungjawab, 13 : lokasipjawab, 14 : surveyor, 
                    15 : tanggalsurvei, 16 : matauang, 17 : satuankerja, 
                    18 : kodepemilik, 19 : noregister, 20 : entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Hewan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    hewan.clear = function(){
        $("#golonganhewan").empty();
        hewan.selectGolonganHewan();
        $("#jenishewan").val("");
        $("#kelaminhewan").val("");
        $("#tipehewan").val("");
        $("#bahanhewan").val("");
        $("#tahunperolehanhewan").val("");
        $("#ukuranhewan").val("");
        $("#jumlahhewan").val("");
        $("#kondisihewan").val("");
        $("#asalusulhewan").empty();
        hewan.selectAsalUsul();
        $("#nilaiperolehanhewan").val("");
        $("#keteranganhewan").val("");
    }
// End Hewan

// Start Tanaman
    tanaman.selectGolonganTanaman = function(){
        $('#golongantanaman').select2({
            placeholder: 'Pilih Data Tanaman...',
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
    }

    tanaman.selectAsalUsul = function(){
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
    }

    tanaman.replaceCurrency = function(){
        $('#nilaiperolehantanaman').css("font-weight","bold");
        $('#nilaiperolehantanaman').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    tanaman.prepareAll = function(){
        tanaman.selectGolonganTanaman();
        tanaman.selectAsalUsul();
        tanaman.replaceCurrency();
    }

    tanaman.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

        var goltanaman            = $("#golongantanaman").select2('data')[0].text;
        var jntanaman             = $("#jenistanaman").val();
        var luastanaman           = $("#luastanaman").val();
        var jmltanaman            = $("#jumlahtanaman").val();
        var thperolehantanaman    = $("#tahunperolehantanaman").val();
        var kontanaman            = $("#kondisitanaman").val();
        var asalusultanaman       = $("#asalusultanaman").select2('data')[0].text;
        var nilaiperolehan        = toAngka($("#nilaiperolehantanaman").val());
        var keterangan            = $("#keterangantanaman").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/tanaman/tanaman_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: goltanaman, 4: jntanaman, 
                    5: luastanaman, 6: jmltanaman, 7: thperolehantanaman, 
                    8: kontanaman, 9: asalusultanaman, 10: nilaiperolehan, 
                    11: keterangan, 12: penanggungjawab, 13: lokasipjawab, 
                    14: surveyor, 15: tanggalsurvei, 16: matauang, 17: satuankerja, 
                    18: kodepemilik, 19: noregister, 20: entryuser
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Tanaman Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    tanaman.clear = function(){
        $("#golongantanaman").empty();
        tanaman.selectGolonganTanaman();
        $("#jenistanaman").val("");
        $("#luastanaman").val("");
        $("#jumlahtanaman").val("");
        $("#tahunperolehantanaman").val("");
        $("#kondisitanaman").val("");
        $("#asalusultanaman").empty();
        tanaman.selectAsalUsul();
        $("#nilaiperolehantanaman").val("");
        $("#keterangantanaman").val("");
    }
// End Tanaman

// Start Alat Keamanan
    alatkeamanan.selectGolonganAlatKeamanan = function(){
        $('#golonganalatkeamanan').select2({
            placeholder: 'Pilih Data Alat Keamanan...',
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
    }

    alatkeamanan.selectAsalUsul = function(){
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
    }

    alatkeamanan.replaceCurrency = function(){
        $('#nilaiperolehanalatkeamanan').css("font-weight","bold");
        $('#nilaiperolehanalatkeamanan').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    alatkeamanan.prepareAll = function(){
        alatkeamanan.selectGolonganAlatKeamanan();
        alatkeamanan.selectAsalUsul();
        alatkeamanan.replaceCurrency();
    }  

    alatkeamanan.saveForm = function(){
        var kodebarang       = $("#kodebarang").val();
        var kodelokasi       = $("#kdlokasi").val();

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

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        // var status           = "";
        // var ketstatus        = "";
        // var entry            = "";
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/alatkeamanan/alatkeamanan_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: golalatkeamanan, 4: nmalatkeamanan, 
                    5: mrkalatkeamanan, 6: tpalatkeamanan, 7: bhnalatkeamanan, 8: thperolehanalatkeamanan, 
                    9: ukalatkeamanan, 10: jmlalatkeamanan, 11: konalatkeamanan, 12: asalusulalatkeamanan, 
                    13: nilaiperolehan, 14: keterangan, 15: penanggungjawab, 16: lokasipjawab, 17: surveyor, 
                    18: tanggalsurvei, 19: matauang, 20: satuankerja, 21: kodepemilik, 22: noregister, 23: entryuser 
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Alat Keamanan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    alatkeamanan.clear = function(){
        $("#golonganalatkeamanan").empty();
        alatkeamanan.selectGolonganAlatKeamanan();
        $("#namabarangalatkeamanan").val("");
        $("#merkalatkeamanan").val("");
        $("#tipealatkeamanan").val("");
        $("#bahanalatkeamanan").val("");
        $("#tahunperolehanalatkeamanan").val("");
        $("#ukuranalatkeamanan").val("");
        $("#jumlahalatkeamanan").val("");
        $("#kondisialatkeamanan").val("");
        $("#asalusulalatkeamanan").empty();
        alatkeamanan.selectAsalUsul();
        $("#nilaiperolehanalatkeamanan").val("");
        $("#keteranganalatkeamanan").val("");
    }
// End Alat Keamanan

// Start Konstruksi Dalam Pengerjaan
    konstruksi.selectKonstruksiBangunan = function(){
        $('#konstruksibangunan').select2({
            placeholder: 'Pilih Data Konstruksi Bangunan...',
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
    }

    konstruksi.selectStatusTanah = function(){
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
    }

    konstruksi.selectKodeTanah = function(){
        $('#kodetanahkons').select2({
            placeholder: 'Pilih Data Kode Tanah...',
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
    }

    konstruksi.selectAsalUsul = function(){
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
    }

    konstruksi.prepareCheckBox = function(){
        $("#tingkatkonstruksi").change(function(){
            var sesuai = $("#tingkatkonstruksi").is(':checked');
            if(sesuai != true){
                konstruksi.tingkat("0");
            }else{
                konstruksi.tingkat("1111111111111111111111111111111");
            }  
        })

        $("#betonkonstruksi").change(function(){
            var sesuai = $("#betonkonstruksi").is(':checked');
            if(sesuai != true){
                konstruksi.beton("0");
            }else{
                konstruksi.beton("1111111111111111111111111111111");
            }  
        })

        $("#tanggaldokkons input").attr('disabled',true);
        $("#tanggaldokkons input").val("");

        $("#nodokumen").attr('disabled',true);
        $("#nodokumen").val("");

        $("#dokkonstruksi").change(function(){
            var sertifikat = $("#dokkonstruksi").is(':checked');
            if(sertifikat != true){
                konstruksi.dok("0");
                $("#tanggaldokkons-replace").empty()
                $("#tanggaldokkons-replace").append("<div id='tanggaldokkons' class='input-group date'><input type='text' class='form-control'><span class='input-group-addon'><i class='glyphicon glyphicon-th'></i></span></div>");
                konstruksi.prepareDatePicker();
                $("#tanggaldokkons input").attr('disabled',true);
        
                $("#nodokumen").attr('disabled',true);
                $("#nodokumen").val("");

            }else{
                konstruksi.dok("1111111111111111111111111111111");
                $("#tanggaldokkons input").attr('disabled',false);
                $("#nodokumen").attr('disabled',false);
                // $("#nosertifikat").attr('disabled',false);
            }  
        });
    }

    konstruksi.prepareDatePicker = function(){
        setTimeout(function(){
            $('#tanggalmulai').datepicker({
                language: "id",
                format: "dd MM yyyy",
                todayBtn: "linked",
                toggleActive: true
            });
        })

        setTimeout(function(){
            $('#tanggaldokkons').datepicker({
                language: "id",
                format: "dd MM yyyy",
                todayBtn: "linked",
                toggleActive: true
            });
        },100) 
    }

    konstruksi.replaceCurrency = function(){
        $('#nilaiperolehankons').css("font-weight","bold");
        $('#nilaiperolehankons').maskMoney({prefix:'', thousands:'.', decimal:',', precision:0});
    }

    konstruksi.prepareAll = function(){
        konstruksi.replaceCurrency();
        konstruksi.prepareCheckBox();
        konstruksi.prepareDatePicker();
        konstruksi.selectKonstruksiBangunan();
        konstruksi.selectStatusTanah();
        konstruksi.selectKodeTanah();
        konstruksi.selectAsalUsul();
        konstruksi.prepareCheckBox();
    }

    konstruksi.saveForm = function(){
        var kodebarang      = $("#kodebarang").val();
        var kodelokasi      = $("#kdlokasi").val();

        var jnbarang        = $("#namajenisbarang").val();
        var konsbangunan    = $("#konstruksibangunan").select2('data')[0].text;
        var ltkalmtkons     = $("#letakalamatkons").val();
        var luaskons        = $("#luaskonstruksi").val();
        var tingkatkons     = konstruksi.tingkat();
        var betonkons       = konstruksi.beton();
        var ststanahkons    = $("#statustanahkons").select2('data')[0].text;
        var tglmulproyek    = $("#tanggalmulai").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var kdtanahkons     = $("#kodetanahkons").select2('data')[0].text;
        var adadokkons      = konstruksi.dok();
        var tgldokkons      = $("#tanggaldokkons").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var nodokumenkons   = $("#nodokumen").val();
        var asalusulkons    = $("#asalusulkonstruksi").select2('data')[0].text;
        var nilaiperolehan        = toAngka($("#nilaiperolehankons").val());
        var keterangan            = $("#keterangankons").val();

        var penanggungjawab  = $('#penanggungjawab').val();
        var lokasipjawab     = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor         = $('#surveyor').val();
        var tanggalsurvei    = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang         = $("#currency").val();
        var satuankerja      = $("#assetlokasi").select2('data')[0].text;
        var kodepemilik      = $("#kepemilikan").val();
        var noregister       = $("#noregister").val();
        var entryuser        = $(".user_name").html();

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
                url: "./controller/entry_asset/konstruksi/konstruksi_add.php",
                data:{
                    1: kodebarang, 2: kodelokasi, 3: jnbarang, 4: konsbangunan, 
                    5: ltkalmtkons, 6: luaskons, 7: tingkatkons, 8: betonkons, 
                    9: ststanahkons, 10: tglmulproyek, 11: kdtanahkons, 12: adadokkons, 
                    13: tgldokkons, 14: nodokumenkons, 15: asalusulkons, 16: nilaiperolehan, 
                    17: keterangan, 18: penanggungjawab, 19: lokasipjawab, 20: surveyor, 
                    21: tanggalsurvei, 22: matauang, 23: satuankerja, 24: kodepemilik, 
                    25: noregister, 26: entryuser
                }
            }).done(function(data){
                swal({
                    title: "Berhasil Disimpan!",
                    text: "Data Konstruksi Dalam Pengerjaan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            })
        }
    }

    konstruksi.clear = function(){
        $("#tanggaldokkons-replace").empty()
        $("#tanggaldokkons-replace").append("<div id='tanggaldokkons' class='input-group date'><input type='text' class='form-control'><span class='input-group-addon'><i class='glyphicon glyphicon-th'></i></span></div>");
        konstruksi.prepareDatePicker();

        $("#namajenisbarang").val("");
        $("#konstruksibangunan").empty();
        konstruksi.selectKonstruksiBangunan();
        $("#letakalamatkons").val("");
        $("#luaskonstruksi").val("");
        $("#tingkatkonstruksi").prop('checked', false);
        $("#betonkonstruksi").prop('checked', false);
        $("#statustanahkons").empty();
        konstruksi.selectStatusTanah();
        $("#tanggalmulai input").val("");
        $("#kodetanahkons").empty();
        konstruksi.selectKodeTanah();
        $("#dokkonstruksi").prop('checked', false);
        $("#tanggaldokkons input").attr('disabled',true);
        $("#tanggaldokkons input").val("");
        $("#nodokumen").attr('disabled',true);
        $("#nodokumen").val("");
        $("#asalusulkonstruksi").empty();
        konstruksi.selectAsalUsul();
        $("#nilaiperolehankons").val("");
        $("#keterangankons").val("");
    }
// End Konstruksi Dalam Pengerjaan


//BATAS DATA UTAMA FORM
du.prepareAllPanel = function(){
    $('.tanah').hide();
    $('.jalan').hide();
    $('.jembatan').hide();
    $('.bangunanair').hide();
    $('.instalasi').hide();
    $('.jaringan').hide(); 
    $('.bangunangedung').hide(); 
    $('.monumen').hide(); 
    $('.alatbesar').hide();
    $('.alatangkutan').hide();
    $('.alatbengkel').hide();
    $('.alatpertanian').hide();
    $('.alatkantor').hide();
    $('.alatstudio').hide();
    $('.alatkedokteran').hide();
    $('.alatlab').hide();
    $('.bukuperpus').hide();
    $('.kesenian').hide();
    $('.hewan').hide();
    $('.tanaman').hide();
    $('.keamanan').hide();
    $('.konstruksi').hide();
}

du.prepareForm = function(){
    $("#kdlokasi").attr('readonly',true);
    $("#unit").attr('readonly',true);
    $("#subunit").attr('readonly',true);
    $("#satuankerja").attr('readonly',true);
    $("#kodebarang").attr('readonly', true);

    $("#namabarang").attr('readonly',true);

    $("#lpj").val("KAB.");
    $("#lokasipenanggungjawab").val("Situbondo");
    $('#currency').empty().append('<option selected value=IDR>IDR</option>');
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
    var avals;
    $('#assetlokasi').select2().on('change', function(e){
        avals=e.currentTarget.value;
        
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/entry_asset/datautama/entry_asset_select_alllokasi.php",
            data:{
                1: avals
            }
        }).done(function(data){
            // console.log(data);
            $("#kdlokasi").val(data.KodeLokasi)
            $("#unit").val(data.Unit);
            $("#subunit").val(data.SubUnit);
            $("#satuankerja").val(data.SatuanKerja);
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
    var aval;
    $('#assetbarang').select2().on('change', function(e){
        aval=e.currentTarget.value;
        
        $.ajax({
            dataType: "json",
            type: "post",
            url: "controller/entry_asset/datautama/entry_asset_select_allbarang.php",
            data:{
                1: aval
            }
        }).done(function(data){
            // console.log(data);
            $("#namabarang").val(data.NamaBarang);
            $("#kodebarang").val(data.KodeBarang);
            var kdbarang = data.KodeBarang
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
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        tanah.prepare();
    }else if(kode=="0413"){
        var k = id.substring(0,6);
        if (k=="041301"){
            console.log("JALAN ");
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
            $(".alatangkutan").hide();
            $(".alatbengkel").hide();
            $(".alatpertanian").hide();
            $(".alatkantor").hide();
            $(".alatstudio").hide();
            $(".alatkedokteran").hide();
            $(".alatlab").hide();
            $(".bukuperpus").hide();
            $(".kesenian").hide();
            $(".hewan").hide(); 
            $(".tanaman").hide();
            $(".keamanan").hide(); 
            $(".konstruksi").hide();
            jalan.prepare();
        }else if(k=="041302"){
            console.log("JEMBATAN ");
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
            $(".alatangkutan").hide();
            $(".alatbengkel").hide();
            $(".alatpertanian").hide();
            $(".alatkantor").hide();
            $(".alatstudio").hide();
            $(".alatkedokteran").hide();
            $(".alatlab").hide();
            $(".bukuperpus").hide();
            $(".kesenian").hide();
            $(".hewan").hide(); 
            $(".tanaman").hide();
            $(".keamanan").hide(); 
            $(".konstruksi").hide();
            jembatan.prepare();
        }
    }else if(kode=="0414"){
        console.log("BANGUNAN AIR");
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
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
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
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
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
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
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
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
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
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        monumen.prepare();
    }else if(kode=="0202"){
        console.log("ALAT BESAR");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatbesar.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").show();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        alatbesar.prepare();
    }else if(kode=="0203"){
        console.log("ALAT ANGKUTAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatangkutan.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").show();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        alatangkutan.prepare();
    }else if(kode=="0204"){
        console.log("ALAT BENGKEL DAN UKUR");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatbengkel.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").show();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        alatbengkel.prepare();
    }else if(kode=="0205"){
        console.log("ALAT PERTANIAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatpertanian.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").show();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        alatpertanian.prepare();
    }else if(kode=="0206"){
        console.log("ALAT KANTOR DAN RUMAH TANGGA");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatkantor.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").show();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        alatkantor.prepare();
    }else if(kode=="0207"){
        console.log("ALAT STUDIO DAN KOMUNIKASI");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatstudio.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").show();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        alatstudio.prepare();
    }else if(kode=="0208"){
        console.log("ALAT KEDOKTERAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatkedokteran.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").show();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        alatkedokteran.prepare();
    }else if(kode=="0209"){
        console.log("ALAT LABORATURIUM");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatlab.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").show();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        alatlab.prepare();
    }else if(kode=="0517"){
        console.log("BUKU PERPUSTAKAAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','bukuperpus.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").show();
        $(".kesenian").hide();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        bukuperpus.prepare();
    }else if(kode=="0518"){
        console.log("BARANG BERCORAK KEBUDAYAAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','kesenian.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").show();
        $(".hewan").hide(); 
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").hide();
        kesenian.prepare();
    }else if(kode=="0519"){
        var k = id.substring(0,6);
        if (k=="051901"){
            console.log("HEWAN");
            $(".alert.alert-info").hide();
            $(".alert.alert-danger").hide();
            $("#cancelform").removeClass("hidden");
            $("#saveform").removeClass("hidden");
            $("#saveform").attr('onclick','hewan.saveForm();');
            $(".tanah").hide();
            $(".jalan").hide();
            $(".jembatan").hide();
            $(".bangunanair").hide();
            $(".instalasi").hide();
            $(".jaringan").hide();
            $(".bangunangedung").hide();
            $(".monumen").hide();
            $(".alatbesar").hide();
            $(".alatangkutan").hide();
            $(".alatbengkel").hide();
            $(".alatpertanian").hide();
            $(".alatkantor").hide();
            $(".alatstudio").hide();
            $(".alatkedokteran").hide();
            $(".alatlab").hide();
            $(".bukuperpus").hide();
            $(".kesenian").hide();
            $(".hewan").show();
            $(".tanaman").hide();
            $(".keamanan").hide(); 
            $(".konstruksi").hide();        
            hewan.prepare();
        }else if(k=="051902"){
            console.log("TANAMAN");
            $(".alert.alert-info").hide();
            $(".alert.alert-danger").hide();
            $("#cancelform").removeClass("hidden");
            $("#saveform").removeClass("hidden");
            $("#saveform").attr('onclick','tanaman.saveForm();');
            $(".tanah").hide();
            $(".jalan").hide();
            $(".jembatan").hide();
            $(".bangunanair").hide();
            $(".instalasi").hide();
            $(".jaringan").hide();
            $(".bangunangedung").hide();
            $(".monumen").hide();
            $(".alatbesar").hide();
            $(".alatangkutan").hide();
            $(".alatbengkel").hide();
            $(".alatpertanian").hide();
            $(".alatkantor").hide();
            $(".alatstudio").hide();
            $(".alatkedokteran").hide();
            $(".alatlab").hide();
            $(".bukuperpus").hide();
            $(".kesenian").hide();
            $(".hewan").hide();
            $(".tanaman").show();
            $(".keamanan").hide(); 
            $(".konstruksi").hide();         
            tanaman.prepare();
        }
    }else if(kode=="0210"){
        console.log("ALAT PERSENJATAAN/KEAMANAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','alatkeamanan.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide();
        $(".tanaman").hide();
        $(".keamanan").show(); 
        $(".konstruksi").hide();         
        alatkeamanan.prepare();
    }else if(kode==null){
        console.log("BARANG PERSEDIAAN");
        cancelForm(); 
    }else if(kode=="06"){
        console.log("KONSTRUKSI DALAM PENGERJAAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $("#cancelform").removeClass("hidden");
        $("#saveform").removeClass("hidden");
        $("#saveform").attr('onclick','konstruksi.saveForm();');
        $(".tanah").hide();
        $(".jalan").hide();
        $(".jembatan").hide();
        $(".bangunanair").hide();
        $(".instalasi").hide();
        $(".jaringan").hide();
        $(".bangunangedung").hide();
        $(".monumen").hide();
        $(".alatbesar").hide();
        $(".alatangkutan").hide();
        $(".alatbengkel").hide();
        $(".alatpertanian").hide();
        $(".alatkantor").hide();
        $(".alatstudio").hide();
        $(".alatkedokteran").hide();
        $(".alatlab").hide();
        $(".bukuperpus").hide();
        $(".kesenian").hide();
        $(".hewan").hide();
        $(".tanaman").hide();
        $(".keamanan").hide(); 
        $(".konstruksi").show();          
        konstruksi.prepare();
    }else{
        cancelForm();
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
    $('#kepemilikan').empty().append('<option selected value=12>Kabupaten</option>');
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

    $("#lpj").val("KAB.");
    $("#lokasipenanggungjawab").val("Situbondo");
    $('#currency').empty().append('<option selected value=IDR>IDR</option>');
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
    alatbesar.clear();
    alatangkutan.clear();
    alatbengkel.clear();
    alatpertanian.clear();
    alatkantor.clear();
    alatkedokteran.clear();
    alatlab.clear();
    bukuperpus.clear();
    kesenian.clear();
    hewan.clear();
    tanaman.clear();
    alatkeamanan.clear();
    konstruksi.clear();

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

//All prepare function

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

alatbesar.prepare = function(){
    alatbesar.selectGolonganAlatBesar();
    alatbesar.selectAsalusul();
    alatbesar.replaceCurrency();
}

alatangkutan.prepare = function(){
    alatangkutan.prepareAll();
}

alatbengkel.prepare = function(){
    alatbengkel.prepareAll();
}

alatpertanian.prepare = function(){
    alatpertanian.prepareAll();
}

alatkantor.prepare = function(){
    alatkantor.prepareAll();
}

alatstudio.prepare = function(){
    alatstudio.prepareAll();
}

alatkedokteran.prepare = function(){
    alatkedokteran.prepareAll();
}

alatlab.prepare = function(){
    alatlab.prepareAll();
}

bukuperpus.prepare = function(){
    bukuperpus.prepareAll();
}

kesenian.prepare = function(){
    kesenian.prepareAll();
}

hewan.prepare = function(){
    hewan.prepareAll();
}

tanaman.prepare = function(){
    tanaman.prepareAll();
}

alatkeamanan.prepare = function(){
    alatkeamanan.prepareAll();
}

konstruksi.prepare = function(){
    konstruksi.prepareAll();
}

$(document).ready(function () {
	"use strict"; // Start of use strict
    du.prepare();
});