<script>
    page.pageDestination("Transaksi")
</script>
<script src="assets/dist/js/entry_data_asset.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-note2"></i>
    </div>
    <div class="header-title">
        <h1>Transaksi</h1>
        <small>Entry Data Asset</small>
        <ol class="breadcrumb">
            <li><a href="index.html"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Transaksi</li>
        </ol>
    </div>
</section>
<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding-bottom: 20px;">
            <div class="text-right">
                <button id="cancelform" class="btn btn-danger hidden" onclick="cancelForm();"> Batal</button>
                <button id="saveform" class="btn btn-primary hidden"> Simpan</button>
            </div>
            <!-- <div class="button panel panel-bd" style="background: none;">
                <div class="panel-body text-right" style="height: 64px;">
                    <div class="statistic-box">
                        <button id="cancelform" class="btn btn-danger hidden" onclick="cancelForm();"> Batal</button>
                        <button id="saveform" class="btn btn-primary hidden"> Simpan</button>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="panel panel-bd">
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Data Utama</h4>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kode Lokasi</label>
                        <div class="col-md-8">
                            <select id="assetlokasi" name="assetlokasi" class="form-control"></select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Unit</label>
                        <div class="col-md-8">
                            <input type="text" name="unit" class="form-control" id="unit" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Sub Unit</label>
                        <div class="col-md-8">
                            <input type="text" name="subunit" class="form-control" id="subunit" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Satuan Kerja</label>
                        <div class="col-md-8">
                            <input type="text" name="satuankerja" class="form-control" id="satuankerja" />    
                        </div>
                    </div>
                    <hr>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kode Barang</label>
                        <div class="col-md-8">
                            <div class="form-group bootstrap-selectpicker">
                                <select id="assetbarang" name="assetbarang" class="form-control"></select>
                            </div>   
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Barang</label>
                        <div class="col-md-8">
                            <input type="text" name="namabarang" class="form-control" id="namabarang" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Kepemilikan</label>
                        <div class="col-md-8">
                            <select id="kepemilikan" name="kepemilikan" class="form-control"></select>   
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Penanggung Jawab</label>
                        <div class="col-md-8">
                            <input type="text" name="penanggungjawab" class="form-control" id="penanggungjawab" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Lokasi P. Jawab</label>
                        <div class="col-md-3">
                            <select id="lpj" name="lpj" class="form-control">
                                <option>PROP.</option>
                                <option>KAB.</option>
                                <option>KEC.</option>
                                <option>KEL.</option>
                                <option>DESA</option>
                            </select> 
                        </div>
                        <div class="col-md-5">
                            <input type="" name="" class="form-control" id="lokasipenanggungjawab" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">No. Register</label>
                        <div class="col-md-8">
                            <input type="text" name="noregister" class="form-control" id="noregister" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Mata Uang</label>
                        <div class="col-md-8">
                            <select id="currency" name="currency" class="form-control"></select>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tanggal Survei</label>
                        <div class="col-md-8">
                            <div id="tanggalsurvei" class="input-group date">
                                <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Surveyor</label>
                        <div class="col-md-8">
                            <input type="text" name="surveyor" class="form-control" id="surveyor" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <!-- START ALERT -->
            <div class="alert alert-info alert-dismissible" role="alert">
                <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> -->
                <strong><i class="fa fa-info-circle"></i></strong> Silahkan pilih kode barang untuk menampilkan detail form.
            </div>
            <div class="alert alert-danger alert-dismissible" role="alert" hidden>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                <strong><i class="fa fa-exclamation-circle"></i></strong> Detail form tidak tersedia untuk kode barang tersebut.
            </div>
            <!-- END ALERT -->

            <!-- Detail Tanah -->
            <div class="panel panel-bd tanah" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Tanah</h4>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Golongan Tanah</label>
                        <div class="col-md-8">
                            <select id="golongantanah" name="golongantanah" class="form-control"></select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Luas Tanah</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="luastanah">
                                <div class="input-group-addon" style="border-radius: 0px;">m<sup>2</sup></div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kesesuaian Data</label>
                        <div class="col-md-8">
                            <div class="checkbox checkbox-inline">
                                <input type="checkbox" id="kesesuaiandata">
                                <label for="kesesuaiandata"> Sama </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Letak / Alamat</label>
                        <div class="col-md-8">
                            <input type="text" name="letakalamat" class="form-control" id="letakalamat" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Status Tanah</label>
                        <div class="col-md-4">
                            <select id="statustanah" name="statustanah" class="form-control" onchange="tanah.selectStatusTanahLainnya();"></select>
                        </div>
                        <div class="col-md-4 statustanahlainnya" hidden>
                            <input type="" name="" class="form-control" id="ststanahlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Dok. Tanah</label>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="checkbox checkbox-inline">
                                        <input type="checkbox" id="sertifikat">
                                        <label for="sertifikat"> Sertifikat </label>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div id="tanggaldokumen" class="input-group date">
                                        <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">No. Sertifikat Tanah</label>
                        <div class="col-md-8">
                            <input type="text" name="nosertifikat" class="form-control" id="nosertifikat" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Perolehan</label>
                        <div class="col-md-8">
                            <input type="number" name="tahunperolehanjalan" class="form-control" id="tahunperolehanjalan" maxlength="4" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Penggunaan</label>
                        <div class="col-md-8">
                            <input type="text" name="penggunaan" class="form-control" id="penggunaan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Asal Usul</label>
                        <div class="col-md-4">
                            <select id="asalusul" name="asalusul" class="form-control" onchange="tanah.selectAsalUsulLainnya();"></select>
                        </div>
                        <div class="col-md-4 asalusullainnya" hidden>
                            <input type="text" name="aslusul" class="form-control" id="aslusul" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Batas Utara</label>
                        <div class="col-md-8">
                            <input type="text" name="batasuatara" class="form-control" id="batasutara" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Batas Timur</label>
                        <div class="col-md-8">
                            <input type="text" name="batastimur" class="form-control" id="batastimur" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Batas Selatan</label>
                        <div class="col-md-8">
                            <input type="text" name="batasselatan" class="form-control" id="batasselatan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Batas Barat</label>
                        <div class="col-md-8">
                            <input type="text" name="batasbarat" class="form-control" id="batasbarat" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tipe Permukaan Depan Lokasi</label>
                        <div class="col-md-4">
                            <select id="tipepermukaan" name="tipepermukaan" class="form-control" onchange="tanah.selectTipePermukaanLainnya();"></select>
                        </div>
                        <div class="col-md-4 tipepermukaanlainnya" hidden>
                            <input type="text" name="tppermukaanlainnya" class="form-control" id="tppermukaanlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Lebar Jalan Depan Lokasi</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="lebarjalandepan">
                                <div class="input-group-addon" style="border-radius: 0px;">m<sup>2</sup></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Jarak Ke Lokasi</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="jarakkelokasi">
                                <div class="input-group-addon" style="border-radius: 0px;">m<sup>2</sup></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Bangunan Petunjuk</label>
                        <div class="col-md-8">
                            <input type="text" name="bangunanpetunjuk" class="form-control" id="bangunanpetunjuk" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Lingkungan Sekitar Lokasi</label>
                        <div class="col-md-4">
                            <select id="lingkungansekitar" name="lingkungansekitar" class="form-control" onchange="tanah.selectLingkunganSekitarLainnya();"></select>
                        </div>
                        <div class="col-md-4 lingkungansekitarlainnya" hidden>
                            <input type="text" name="lingksekitarlainnya" class="form-control" id="lingksekitarlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Harga Tanah</label>
                        <div class="col-md-8">
                            <input type="text" maxlength="15" class="form-control" id="hargatanah">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Range Harga Tanah Lokasi</label>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="rangeharga1">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="rangeharga2">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Baru</label>
                        <div class="col-md-8">
                            <input type="text" maxlength="15" class="form-control" id="nilaibaru">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Perolehan</label>
                        <div class="col-md-8">
                            <input type="text" maxlength="15" class="form-control" id="nilaiperolehan">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Harga Pasar</label>
                        <div class="col-md-8">
                            <input type="text" maxlength="15" class="form-control" id="hargapasar">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Catatan / Keterangan</label>
                        <div class="col-md-8">
                            <textarea class="form-control" id="keterangan" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detail Jalan -->
            <div class="panel panel-bd jalan" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Jalan</h4>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Jenis Jalan / Klafikasi Ruas</label>
                        <div class="col-md-8">
                            <select id="jenisjalan" name="jenisjalan" class="form-control"></select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Jalan</label>
                        <div class="col-md-8">
                            <input type="text" name="namajalan" class="form-control" id="namajalan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Pangkal Ruas</label>
                        <div class="col-md-8">
                            <input type="text" name="namapangkalruas" class="form-control" id="namapangkalruas" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Ujung Ruas</label>
                        <div class="col-md-8">
                            <input type="text" name="namaujungruas" class="form-control" id="namaujungruas" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Titik Pengenal Pangkal</label>
                        <div class="col-md-8">
                            <input type="text" name="titikpengenalpangkal" class="form-control" id="titikpengenalpangkal" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Titik Pengenal Ujung</label>
                        <div class="col-md-8">
                            <input type="text" name="titikpengenalujung" class="form-control" id="titikpengenalujung" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Perolehan</label>
                        <div class="col-md-8">
                            <select name="tahunperolehan" id="tahunperolehan" class="form-control">
                                <option value="">Pilih Tahun...</option>
                                <script>
                                    var tahun = 1940;
                                    var y = new Date();
                                    for(i=y.getFullYear();i>=tahun;i--){
                                        document.write("<option>" + i + "</option>");
                                    }
                                </script>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Pembuatan</label>
                        <div class="col-md-8">
                            <select name="tahunpembuatan" id="tahunpembuatan" class="form-control">
                                <option value="">Pilih Tahun...</option>
                                <script>
                                    var tahun = 1940;
                                    var y = new Date();
                                    for(i=y.getFullYear();i>=tahun;i--){
                                        document.write("<option>" + i + "</option>");
                                    }
                                </script>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Panjang Ruas Jalan</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="panjangruasjalan" onchange="jalan.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">Km</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Ruas Awal</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="ruasawal">
                                <div class="input-group-addon" style="border-radius: 0px;">Km</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Ruas Akhir</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="ruasakhir">
                                <div class="input-group-addon" style="border-radius: 0px;">Km</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">ROW (Damija)</label>
                        <div class="col-md-8">
                            <input type="number" name="rowdamija" class="form-control" id="rowdamija" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Lebar Perkerasan</label>
                        <div class="col-md-8">
                            <input type="number" name="lebarperkerasan" class="form-control" id="lebarperkerasan" onchange="jalan.hitungNilaiPasar();" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tipe Permukaan</label>
                        <div class="col-md-4">
                            <select id="tppermukaan" name="tppermukaan" class="form-control" onchange="jalan.selectTipePermukaanLainnya();"></select>
                        </div>
                        <div class="col-md-4 tipepermukaanlainnyajalan" hidden>
                            <input type="text" name="tppermukaanlainnyajalan" class="form-control" id="tppermukaanlainnyajalan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kondisi Jalan</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="kondisijalan" onchange="jalan.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">%</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kesesuaian Data Awal</label>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="checkbox checkbox-inline">
                                        <input type="checkbox" id="dataawaljalan">
                                        <label for="dataawaljalan"> Ada</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Asal Usul</label>
                        <div class="col-md-4">
                            <select id="asalusuljalan" name="asalusuljalan" class="form-control" onchange="jalan.selectAsalUsulLainnya();"></select>
                        </div>
                        <div class="col-md-4 asalusullainnyajalan" hidden>
                            <input type="text" name="aslusullainnyajalan" class="form-control" id="aslusullainnyajalan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Harga Bahan (M2)</label>
                        <div class="col-md-8">
                            <input type="text" name="hargabahanjalan" class="form-control" id="hargabahanjalan" onchange="jalan.hitungNilaiPasar();" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Baru</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaibarujalan" class="form-control" id="nilaibarujalan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Perolehan</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaiperolehanjalan" class="form-control" id="nilaiperolehanjalan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Pasar</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaipasarjalan" class="form-control" id="nilaipasarjalan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Keterangan</label>
                        <div class="col-md-8">
                            <textarea class="form-control" id="keteranganjalan" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detail Jembatan -->
            <div class="panel panel-bd jembatan" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Jembatan</h4>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Jenis Jembatan</label>
                        <div class="col-md-8">
                            <select id="jenisjembatan" name="jenisjembatan" class="form-control"></select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Jembatan</label>
                        <div class="col-md-8">
                            <input type="text" name="namajembatan" class="form-control" id="namajembatan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Jalan</label>
                        <div class="col-md-8">
                            <input type="text" name="namajalanjembatan" class="form-control" id="namajalanjembatan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Posisi</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="posisijembatan">
                                <div class="input-group-addon" style="border-radius: 0px;">Km</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tinggi Ramp</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="tinggirampjembatan">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Lebar</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="lebarjembatan" onchange="jembatan.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Panjang</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="panjangjembatan" onchange="jembatan.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Perolehan</label>
                        <div class="col-md-8">
                            <select name="tahunperolehanjembatan" id="tahunperolehanjembatan" class="form-control">
                                <option value="">Pilih Tahun...</option>
                                <script>
                                    var tahun = 1940;
                                    var y = new Date();
                                    for(i=y.getFullYear();i>=tahun;i--){
                                        document.write("<option>" + i + "</option>");
                                    }
                                </script>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Pembuatan</label>
                        <div class="col-md-8">
                            <select name="tahunpembuatanjembatan" id="tahunpembuatanjembatan" class="form-control">
                                <option value="">Pilih Tahun...</option>
                                <script>
                                    var tahun = 1940;
                                    var y = new Date();
                                    for(i=y.getFullYear();i>=tahun;i--){
                                        document.write("<option>" + i + "</option>");
                                    }
                                </script>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Pondasi Kep. Jemb.</label>
                        <div class="col-md-4">
                            <select id="pondasijembatan" name="pondasijembatan" class="form-control" onchange="jembatan.selectPondasiJembatanLainnya();"></select>
                        </div>
                        <div class="col-md-4 pondasijembatanlainnya" hidden>
                            <input type="text" name="pondasijembatanlainnya" class="form-control" id="pondasijembatanlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Bahan Pondasi</label>
                        <div class="col-md-4">
                            <select id="bahanpondasi" name="bahanpondasi" class="form-control" onchange="jembatan.selectBahanJembatanLainnya();"></select>
                        </div>
                        <div class="col-md-4 bahanpondasilainnya" hidden>
                            <input type="text" name="bahanpondasilainnya" class="form-control" id="bahanpondasilainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kontruksi Atas / Lantai Type</label>
                        <div class="col-md-4">
                            <select id="lantaitypejembatan" name="lantaitypejembatan" class="form-control" onchange="jembatan.selectLantaiTypeLainnya();"></select>
                        </div>
                        <div class="col-md-4 lantaitypejembatanlainnya" hidden>
                            <input type="text" name="lantaitypejembatanlainnya" class="form-control" id="lantaitypejembatanlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Bahan</label>
                        <div class="col-md-4">
                            <select id="bahankonstruksijembatan" name="bahankonstruksijembatan" class="form-control" onchange="jembatan.selectBahanKonstruksiLainnya();"></select>
                        </div>
                        <div class="col-md-4 bahankonstruksijembatanlainnya" hidden>
                            <input type="text" name="bahankonstruksijembatanlainnya" class="form-control" id="bahankonstruksijembatanlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kondisi</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="kondisijembatan" onchange="jembatan.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">%</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kesesuaian Data Awal</label>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="checkbox checkbox-inline">
                                        <input type="checkbox" id="dataawaljembatan">
                                        <label for="dataawaljembatan"> Sama</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Asal - usul</label>
                        <div class="col-md-4">
                            <select id="asalusuljembatan" name="asalusuljembatan" class="form-control" onchange="jembatan.selectAsalusulLainnya();"></select>
                        </div>
                        <div class="col-md-4 asalusuljembatanlainnya" hidden>
                            <input type="text" name="asalusuljembatanlainnya" class="form-control" id="asalusuljembatanlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Harga per Bahan (M2)</label>
                        <div class="col-md-8">
                            <input type="text" name="hargaperbahanjembatan" class="form-control" id="hargaperbahanjembatan" onchange="jembatan.hitungNilaiPasar();" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Buku</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaibukujembatan" class="form-control" id="nilaibukujembatan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Perolehan</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaiperolehanjembatan" class="form-control" id="nilaiperolehanjembatan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Pasar</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaipasarjembatan" class="form-control" id="nilaipasarjembatan" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Keterangan</label>
                        <div class="col-md-8">
                            <textarea class="form-control" id="keteranganjembatan" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detail Bangunan Air -->
            <div class="panel panel-bd bangunanair" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Bangunan Air</h4>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Gol. Bangunan Air</label>
                        <div class="col-md-8">
                            <select id="golbangunanair" name="golbangunanair" class="form-control"></select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Bangunan Air</label>
                        <div class="col-md-8">
                            <input type="text" name="namabangunanair" class="form-control" id="namabangunanair" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Letak / Alamat</label>
                        <div class="col-md-8">
                            <input type="text" name="alamatbangunanair" class="form-control" id="alamatbangunanair" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Perolehan</label>
                        <div class="col-md-8">
                            <select name="tahunperolehanair" id="tahunperolehanair" class="form-control">
                                <option value="">Pilih Tahun...</option>
                                <script>
                                    var tahun = 1940;
                                    var y = new Date();
                                    for(i=y.getFullYear();i>=tahun;i--){
                                        document.write("<option>" + i + "</option>");
                                    }
                                </script>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Pembuatan</label>
                        <div class="col-md-8">
                            <select name="tahunpembuatanair" id="tahunpembuatanair" class="form-control">
                                <option value="">Pilih Tahun...</option>
                                <script>
                                    var tahun = 1940;
                                    var y = new Date();
                                    for(i=y.getFullYear();i>=tahun;i--){
                                        document.write("<option>" + i + "</option>");
                                    }
                                </script>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kondisi Bangunan</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="kondisibangunanair" onchange="air.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">%</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Konstruksi</label>
                        <div class="col-md-8">
                            <select id="konstruksibangunanair" name="konstruksibangunanair" class="form-control"></select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Bahan</label>
                        <div class="col-md-8">
                            <input type="text" name="bahanbangunanair" class="form-control" id="bahanbangunanair" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Dimensi Panjang</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="panjangbangunanair" onchange="air.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Dimensi Lebar</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="lebarbangunanair" onchange="air.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Dimensi Tinggi</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="tinggibangunanair" onchange="air.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Fasilitas Penunjang</label>
                        <div class="col-md-8">
                            <input type="text" name="fasilitasbangunanair" class="form-control" id="fasilitasbangunanair" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Asal - usul</label>
                        <div class="col-md-4">
                            <select id="asalusulair" name="asalusulair" class="form-control" onchange="air.selectAsalusulLainnya();"></select>
                        </div>
                        <div class="col-md-4 asalusulairlainnya" hidden>
                            <input type="text" name="asalusulairlainnya" class="form-control" id="asalusulairlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kesesuaian Data Awal</label>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="checkbox checkbox-inline">
                                        <input type="checkbox" id="dataawalair">
                                        <label for="dataawalair"> Sama</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Harga per Bahan (M2)</label>
                        <div class="col-md-8">
                            <input type="text" name="hargaperbahanair" class="form-control" id="hargaperbahanair" onchange="air.hitungNilaiPasar();" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Buku</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaibukuair" class="form-control" id="nilaibukuair" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Perolehan</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaiperolehanair" class="form-control" id="nilaiperolehanair" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Pasar</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaipasarair" class="form-control" id="nilaipasarair" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Keterangan</label>
                        <div class="col-md-8">
                            <textarea class="form-control" id="keteranganair" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Detail Instalasi -->
            <div class="panel panel-bd instalasi" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Instalasi</h4>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Golongan Instalasi</label>
                        <div class="col-md-8">
                            <select id="golinstalasi" name="golinstalasi" class="form-control"></select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Instalasi</label>
                        <div class="col-md-8">
                            <input type="text" name="namainstalasi" class="form-control" id="namainstalasi" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Letak / Alamat</label>
                        <div class="col-md-8">
                            <input type="text" name="alamatinstalasi" class="form-control" id="alamatinstalasi" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Perolehan</label>
                        <div class="col-md-8">
                            <select name="tahunperolehaninst" id="tahunperolehaninst" class="form-control">
                                <option value="">Pilih Tahun...</option>
                                <script>
                                    var tahun = 1940;
                                    var y = new Date();
                                    for(i=y.getFullYear();i>=tahun;i--){
                                        document.write("<option>" + i + "</option>");
                                    }
                                </script>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tahun Pembuatan</label>
                        <div class="col-md-8">
                            <select name="tahunpembuataninst" id="tahunpembuataninst" class="form-control">
                                <option value="">Pilih Tahun...</option>
                                <script>
                                    var tahun = 1940;
                                    var y = new Date();
                                    for(i=y.getFullYear();i>=tahun;i--){
                                        document.write("<option>" + i + "</option>");
                                    }
                                </script>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kondisi Bangunan</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="kondisibangunaninst" onchange="instalasi.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">%</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Konstruksi</label>
                        <div class="col-md-8">
                            <select id="konstruksibangunaninst" name="konstruksibangunaninst" class="form-control"></select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Bahan</label>
                        <div class="col-md-8">
                            <input type="text" name="bahanbangunaninst" class="form-control" id="bahanbangunaninst" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Dimensi Panjang</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="panjangbangunaninst" onchange="instalasi.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Dimensi Lebar</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="lebarbangunaninst" onchange="instalasi.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Dimensi Tinggi</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" id="tinggibangunaninst" onchange="instalasi.hitungNilaiPasar();">
                                <div class="input-group-addon" style="border-radius: 0px;">M</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Fasilitas Penunjang</label>
                        <div class="col-md-8">
                            <input type="text" name="fasilitasbangunaninst" class="form-control" id="fasilitasbangunaninst" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Asal - usul</label>
                        <div class="col-md-4">
                            <select id="asalusulinst" name="asalusulinst" class="form-control" onchange="instalasi.selectAsalusulLainnya();"></select>
                        </div>
                        <div class="col-md-4 asalusulinstlainnya" hidden>
                            <input type="text" name="asalusulinstlainnya" class="form-control" id="asalusulinstlainnya" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kesesuaian Data Awal</label>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="checkbox checkbox-inline">
                                        <input type="checkbox" id="dataawalinst">
                                        <label for="dataawalinst"> Ada</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Harga per Bahan (M2)</label>
                        <div class="col-md-8">
                            <input type="text" name="hargaperbahaninst" class="form-control" id="hargaperbahaninst" onchange="instalasi.hitungNilaiPasar();" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Buku</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaibukuinst" class="form-control" id="nilaibukuinst" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Perolehan</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaiperolehaninst" class="form-control" id="nilaiperolehaninst" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nilai Pasar</label>
                        <div class="col-md-8">
                            <input type="text" name="nilaipasarinst" class="form-control" id="nilaipasarinst" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Keterangan</label>
                        <div class="col-md-8">
                            <textarea class="form-control" id="keteranganinst" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detail Jaringan -->
            <div class="panel panel-bd jaringan" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Jaringan</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Bangunan Gedung -->
            <div class="panel panel-bd bangunangedung" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Bangunan Gedung</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Monumen -->
            <div class="panel panel-bd monumen" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Monumen</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Besar -->
            <div class="panel panel-bd alatbesar" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat Besar</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Angkut -->
            <div class="panel panel-bd alatangkut" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat Angkut</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Bengkel -->
            <div class="panel panel-bd alatalatbengkel" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat - Alat Bengkel</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Pertanian -->
            <div class="panel panel-bd alatalatpertanian" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat - Alat Pertanian</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Kantor -->
            <div class="panel panel-bd alatalatkantor" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat - Alat Kantor dan Rumah Tangga</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Studio -->
            <div class="panel panel-bd alatalatstudio" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat - Alat Studio dan Alat Komunikasi</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Kedokteran -->
            <div class="panel panel-bd alatalatkedokteran" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat - Alat Kedokteran</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Laboratorium -->
            <div class="panel panel-bd alatlaboraturium" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat Laboraturium</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Buku -->
            <div class="panel panel-bd buku" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Buku</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Barang Bercorak -->
            <div class="panel panel-bd barangbercorakkesenian" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Barang Bercorak Kesenian</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Hewan -->
            <div class="panel panel-bd hewan" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Hewan</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Tanaman -->
            <div class="panel panel-bd tanaman" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Tanaman</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
            <!-- Detail Alat Keamanan -->
            <div class="panel panel-bd alatalatkeamanan" hidden>
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Detail Alat - Alat Keamanan</h4>
                    </div>
                </div>
                <div class="panel-body">
                    
                </div>
            </div>
        </div>

        

        <!-- <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="panel panel-bd">
                <div class="panel-body">
                    <div class="statistic-box">
                        <h2><span class="count-number">321</span> <span class="slight"><i class="fa fa-play fa-rotate-90 c-white"> </i> +10%</span> </h2>
                        <div class="small">Total visitors</div>
                        <div class="sparkline2 text-center"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="panel panel-bd">
                <div class="panel-body">
                    <div class="statistic-box">
                        <h2><span class="count-number">789</span> <span class="slight"><i class="fa fa-play fa-rotate-270 text-warning"> </i> +29%</span></h2>
                        <div class="small">Total users</div>
                        <div class="sparkline3 text-center"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="panel panel-bd">
                <div class="panel-body">
                    <div class="statistic-box">
                        <h2><span class="count-number">171</span><span class="slight"><i class="fa fa-play fa-rotate-90 c-white"> </i> +24%</span></h2>
                        <div class="small">Bounce Rate</div>
                        <div class="sparkline4 text-center"></div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</section> <!-- /.content -->

<style type="text/css">
    
</style>