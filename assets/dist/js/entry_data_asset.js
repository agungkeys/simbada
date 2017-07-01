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
        $("#hargatanah").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#hargatanah").val();
                var b = toRp(a);
                $("#hargatanah").val(b);
            }
            $("#rangeharga1").focus(function(){
                var a = $("#hargatanah").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#hargatanah").val(c);
            })
        });

        $("#rangeharga1").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#rangeharga1").val();
                var b = toRp(a);
                $("#rangeharga1").val(b);
            }
            $("#rangeharga2").focus(function(){
                var a = $("#rangeharga1").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#rangeharga1").val(c);
            })
        });

        $("#rangeharga2").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#rangeharga2").val();
                var b = toRp(a);
                $("#rangeharga2").val(b);
            }
            $("#nilaibaru").focus(function(){
                var a = $("#rangeharga2").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#rangeharga2").val(c);
            })
        });

        $("#nilaibaru").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaibaru").val();
                var b = toRp(a);
                $("#nilaibaru").val(b);
            }
            $("#nilaiperolehan").focus(function(){
                var a = $("#nilaibaru").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaibaru").val(c);
            })
        });

        $("#nilaiperolehan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehan").val();
                var b = toRp(a);
                $("#nilaiperolehan").val(b);
            }
            $("#hargapasar").focus(function(){
                var a = $("#nilaiperolehan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehan").val(c);
            })
        });

        $("#hargapasar").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#hargapasar").val();
                var b = toRp(a);
                $("#hargapasar").val(b);
            }
            $("#keterangan").focus(function(){
                var a = $("#hargapasar").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#hargapasar").val(c);
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
        })
        $("#sertifikat").change(function(){
            var sertifikat = $("#sertifikat").is(':checked');
            if(sertifikat != true){
                tanah.bersertifikat("0");
            }else{
                tanah.bersertifikat("1111111111111111111111111111111");
            }  
        })
    }

    tanah.saveForm = function(){
        var kodelokasi      = $("#assetlokasi").select2().val();
        var kodebarang      = $("#assetbarang").select2().val();
        var golongantanah   = $("#golongantanah").select2().text();
        var luastanah       = $("#luastanah").val();
        var tahunperolehan  = $("#tahunperolehan").val();
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
        var utara           = $('#batasutara').val();
        var timur           = $('#batastimur').val();
        var selatan         = $('#batasselatan').val();
        var barat           = $('#batasbarat').val();
        var tipepermukaan   = $("#tipepermukaan").select2().text();
        var tppermukaanlainnya = tanah.tppermukaanlainnya();
        var lebarjalan      = $('#lebarjalandepan').val();
        var nmbangunanpetunjuk = $('#bangunanpetunjuk').val();
        var jarakbangunanpetunjuk = $('#jarakkelokasi').val();
        var lingksekitar = $("#lingkungansekitar").select2().text();
        var lingksekitarlainnya = tanah.lingksekitarlainnya();
        var rangeharga1     = toAngka($('#rangeharga1').val());
        var rangeharga2     = toAngka($('#rangeharga2').val());
        var hargatanahm2    = toAngka($('#hargatanah').val());
        var hargatanah      = toAngka($('#hargatanah').val());
        var nilaibaru       = toAngka($('#nilaibaru').val());
        var nilaipasar      = toAngka($('#hargapasar').val());
        var nilaiperolehan  = toAngka($('#nilaiperolehan').val());
        var keterangan      = $('#keterangan').val();

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#satuankerja").val();
        var kodetanahlama   = "NULL";
        var kodepemilik     = $("#kepemilikan").val();
        var noregister      = $("#noregister").val();
        var status          = "NULL";
        var ketstatus       ="NULL";
        var entry           ="NULL";
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
                url: "./controller/entry_asset/tanah/tanah_add.php",
                data:{
                    1: kodelokasi, 2: kodebarang, 3: golongantanah, 4: luastanah, 5: tahunperolehan, 
                    6: letak, 7: statustanah, 8: statustanahlain, 9: bersertifikat, 10: tanggalsertifikat,
                    11: nosertifikat, 12: penggunaan, 13: asalusul, 14: asalusullainnya, 15: dataawal,
                    16: utara, 17: timur, 18: selatan, 19: barat, 20: tipepermukaan,
                    21: tppermukaanlainnya, 22: lebarjalan, 23: nmbangunanpetunjuk, 24: jarakbangunanpetunjuk, 25: lingksekitar,
                    26: lingksekitarlainnya, 27: rangeharga1, 28: rangeharga2, 29: hargatanahm2, 30: hargatanah,
                    31: nilaibaru, 32: nilaipasar, 33: nilaiperolehan, 34: keterangan, 35: penanggungjawab,
                    36: lokasipjawab, 37: surveyor, 38: tanggalsurvei, 39: matauang, 40: satuankerja,
                    41: kodetanahlama, 42: kodepemilik, 43: noregister, 44: status, 45: ketstatus,
                    46: entry, 47: entryuser
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
        $("#hargabahanjalan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#hargabahanjalan").val();
                var b = toRp(a);
                $("#hargabahanjalan").val(b);
            }
            $("#nilaibarujalan").focus(function(){
                var a = $("#hargabahanjalan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#hargabahanjalan").val(c);
            })
        });

        $("#nilaibarujalan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaibarujalan").val();
                var b = toRp(a);
                $("#nilaibarujalan").val(b);
            }
            $("#nilaiperolehanjalan").focus(function(){
                var a = $("#nilaibarujalan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaibarujalan").val(c);
            })
        });

        $("#nilaiperolehanjalan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehanjalan").val();
                var b = toRp(a);
                $("#nilaiperolehanjalan").val(b);
            }
            $("#nilaipasarjalan").focus(function(){
                var a = $("#nilaiperolehanjalan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehanjalan").val(c);
            })
        });

        $("#nilaipasarjalan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaipasarjalan").val();
                var b = toRp(a);
                $("#nilaipasarjalan").val(b);
            }
            $("#keteranganjalan").focus(function(){
                var a = $("#nilaipasarjalan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaipasarjalan").val(c);
            })
        });
    }

    jalan.hitungNilaiPasar = function(){
        var a = $("#panjangruasjalan").val();
        var b = $("#lebarperkerasan").val();
        var c = $("#kondisijalan").val();
        var d = $("#hargabahanjalan").val();

        if(a!="" & b!="" & c!="" & d!=""){
            var e = a*b*toAngka(d)*c / 100 
            $("#nilaipasarjalan").val(toRp(e));
            console.log(e);
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

    jalan.saveForm = function(){
        var kodebarang      = $("#assetbarang").select2().val();
        var kodelokasi      = $("#assetlokasi").select2().val();
        var jenisjalan      = $("#jenisjalan").select2().text();
        var namajalan       = $("#namajalan").val();
        var namapangkalruas = $("#namapangkalruas").val();
        var namaujungruas   = $("#namaujungruas").val();
        var tpengenalpangkal= $("#titikpengenalpangkal").val();
        var tpengenalujung  = $("#titikpengenalujung").val();
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
        var dataawal        = jalan.datawal();
        var hargaperbahan   = toAngka($("#hargabahanjalan").val());
        var nilaipasar      = toAngka($("#nilaipasarjalan").val());
        var nilaiperolehan  = toAngka($("#nilaiperolehanjalan").val());
        var nilaibaru       = toAngka($("#nilaibarujalan").val());
        var keterangan      = $("#keteranganjalan").val();

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#satuankerja").val();
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
        $("#hargaperbahanjembatan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#hargaperbahanjembatan").val();
                var b = toRp(a);
                $("#hargaperbahanjembatan").val(b);
            }
            $("#nilaibukujembatan").focus(function(){
                var a = $("#hargaperbahanjembatan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#hargaperbahanjembatan").val(c);
            })
        });

        $("#nilaibukujembatan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaibukujembatan").val();
                var b = toRp(a);
                $("#nilaibukujembatan").val(b);
            }
            $("#nilaiperolehanjembatan").focus(function(){
                var a = $("#nilaibukujembatan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaibukujembatan").val(c);
            })
        });

        $("#nilaiperolehanjembatan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehanjembatan").val();
                var b = toRp(a);
                $("#nilaiperolehanjembatan").val(b);
            }
            $("#nilaipasarjembatan").focus(function(){
                var a = $("#nilaiperolehanjembatan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehanjembatan").val(c);
            })
        });

        $("#nilaipasarjembatan").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaipasarjembatan").val();
                var b = toRp(a);
                $("#nilaipasarjembatan").val(b);
            }
            $("#keteranganjembatan").focus(function(){
                var a = $("#nilaipasarjembatan").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaipasarjembatan").val(c);
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
        var kodebarang      = $("#assetbarang").select2().val();
        var kodelokasi      = $("#assetlokasi").select2().val();
        var jenisjembatan   = $("#jenisjembatan").select2().text();
        var namajembatan    = $("#namajembatan").val();
        var namajalan       = $("#namajalanjembatan").val();
        var posisi          = $("#posisijembatan").val();
        var tahunpembuatan  = $("#tahunpembuatanjembatan").val();
        var tahunperolehan  = $("#tahunperolehanjembatan").val();
        var tinggiramp      = $("#tinggirampjembatan").val();
        var lebar           = $("#lebarjembatan").val();
        var panjang         = $("#lebarjembatan").val();

        var pondasi         = $("#pondasijembatan").text();
        var pondasilain     = $("#pondasijembatanlainnya").val();

        var bahanpondasi    = $("#bahanpondasi").text();
        var bahanpondasilain= $("#bahanpondasilainnya").val();

        var typekonst       = $("#lantaitypejembatan").text();
        var typekonstlain   = $("#lantaitypejembatanlainnya").val();

        var bahankonst      = $("#bahankonstruksijembatan").text();
        var bahankonstlain  = $("#bahankonstruksijembatanlainnya").val();
        var kondisi         = $("#kondisijembatan").val();
        var asalusul        = $("#asalusuljembatan").text();
        var asalusullain    = $("#asalusuljembatanlainnya").val();

        var dataawal        = jembatan.datawal();
        
        var hargabahan      = toAngka($("#hargaperbahanjembatan").val());
        var nilaipasar      = toAngka($("#nilaipasarjembatan").val());
        var nilaiperolehan  = toAngka($("#nilaiperolehanjembatan").val());
        var nilaibuku       = toAngka($("#nilaibukujembatan").val());
        var keterangan      = $("#keteranganjembatan").val();

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#satuankerja").val();
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
        $("#hargaperbahanair").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#hargaperbahanair").val();
                var b = toRp(a);
                $("#hargaperbahanair").val(b);
            }
            $("#nilaibukuair").focus(function(){
                var a = $("#hargaperbahanair").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#hargaperbahanair").val(c);
            })
        });

        $("#nilaibukuair").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaibukuair").val();
                var b = toRp(a);
                $("#nilaibukuair").val(b);
            }
            $("#nilaiperolehanair").focus(function(){
                var a = $("#nilaibukuair").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaibukuair").val(c);
            })
        });

        $("#nilaiperolehanair").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaiperolehanair").val();
                var b = toRp(a);
                $("#nilaiperolehanair").val(b);
            }
            $("#nilaipasarair").focus(function(){
                var a = $("#nilaiperolehanair").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaiperolehanair").val(c);
            })
        });

        $("#nilaipasarair").keyup(function(e){
            // console.log(e)
            if(e.keyCode == 13){
                var a = $("#nilaipasarair").val();
                var b = toRp(a);
                $("#nilaipasarair").val(b);
            }
            $("#keteranganair").focus(function(){
                var a = $("#nilaipasarair").val();
                var b = toAngka(a);
                var c = toRp(b);
                $("#nilaipasarair").val(c);
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
        var kodebarang      = $("#assetbarang").select2().val();
        var kodelokasi      = $("#assetlokasi").select2().val();
        var golbangunanair  = $("#golbangunanair").select2().text();
        var nmbangunanair   = $("#namabangunanair").val();
        var letak           = $("#alamatbangunanair").val();
        var tahunperolehan  = $("#tahunperolehanair").val();
        var tahunpembuatan  = $("#tahunpembuatanair").val();
        var kondisi         = $("#kondisibangunanair").val();
        var konstruksi      = $("#konstruksibangunanair").select2().text();
        var bahan           = $("#bahanbangunanair").val();
        var panjang         = $("#panjangbangunanair").val();
        var lebar           = $("#lebarbangunanair").val();
        var tinggi          = $("#tinggibangunanair").val();
        var fasilitaspenun  = $("#fasilitasbangunanair").val();
        var asalusul        = $("#asalusulair").select2().text();
        var asalusullainnya = $("#asalusulairlainnya").val();
        var dataawal        = air.datawal();
        var nilaiperm2      = toAngka($("#hargaperbahanair").val());
        var nilaiperolehan  = toAngka($("#nilaiperolehanair").val());
        var nilaipasar      = toAngka($("#nilaipasarair").val());
        var nilaibaru       = toAngka($("#nilaibukuair").val());
        var keterangan      = $("#keteranganair").val();

        var penanggungjawab = $('#penanggungjawab').val();
        var lokasipjawab    = $("#lpj").val()+" "+$("#lokasipenanggungjawab").val();
        var surveyor        = $('#surveyor').val();
        var tanggalsurvei   = $("#tanggalsurvei").data('datepicker').getFormattedDate('yyyy-mm-dd');
        var matauang        = $("#currency").val();
        var satuankerja     = $("#satuankerja").val();
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
                    text: "Data Jembatan Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya"
                });
                cancelForm();
            });
        }
    }


// End Air

// Start Instalasi
    
    instalasi.select

// End Instalasi

du.prepareAllPanel = function(){
    $('.tanah').hide();
    $('.jalan').hide();
    $('.jembatan').hide();
    $('.bangunanair').hide();
    $('.instalasi').hide();
    $('.jaringan').hide(); 
}

du.prepareForm = function(){
    $("#unit").attr('readonly',true);
    $("#subunit").attr('readonly',true);
    $("#satuankerja").attr('readonly',true);

    // $("#assetbarang").prop("disabled", true);
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
            $("#unit").val(result.unit)
            $("#subunit").val(result.subuni)
            $("#satuankerja").val(result.satker)
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
        // console.log(a)

        var dataLokasi = []
        $.getJSON("controller/entry_asset/datautama/entry_asset_select_allbarang.php", function(data, index){
            dataBarang = data;
            var arr = Object.keys(dataBarang).map(function(k) { return dataBarang[k] });
            // console.log(arr)

            var result = _.find(arr, function(num){ return num.kodebarang == a; });
            // console.log(result);

            $("#namabarang").val(result.namabarang);
            // $("#subunit").val(result.subuni)
            // $("#satuankerja").val(result.satker)
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
        instalasi.prepare();
    }else if(kode=="0416"){
        console.log("JARINGAN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0311"){
        console.log("BANGUNAN GEDUNG");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0312"){
        console.log("MONUMEN");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
    }else if(kode=="0202"){
        console.log("ALAT BESAR");
        $(".alert.alert-info").hide();
        $(".alert.alert-danger").hide();
        $(".tanah").hide();
        $(".jalan").show();
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
    // $("#currency").select2({
    //     minimumResultsForSearch: Infinity
    // });
}

du.selectKepemilikan = function(){
    $('#kepemilikan').select2({
        placeholder: 'Pilih Kepemilikan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/entry_asset/datautama/entry_asset_select_kepemilikan.php',
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

du.clear = function(){
    $(".alert.alert-info").show();
    $("#cancelform").addClass("hidden");
    $("#saveform").addClass("hidden");

    $(".tanah").hide();
    $(".jalan").hide();
    $(".jembatan").hide();
    $(".bangunanair").hide();
    
    $("#assetlokasi").empty("");
    du.selectLokasi();
    $("#unit").val("");
    $("#subunit").val("");
    $("#satuankerja").val("");

    $("#assetbarang").empty("");
    du.selectBarang();
    $("#namabarang").val("");

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

}

$(document).ready(function () {
	"use strict"; // Start of use strict
    du.prepare();
});