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
                            <input type="text" name="kdlokasi" class="form-control" id="kdlokasi" />    
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
                            <select id="assetlokasi" name="assetlokasi" class="form-control"></select>
                        </div>
                    </div>
                    <hr>
                    <!-- <div class="form-group row">
                        <label class="col-sm-4 col-form-label"></label>
                        <div class="col-md-8">
                            <button class="btn btn-primary col-md-12">Cek Data Barang</button> 
                        </div>
                    </div> -->
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kode Barang</label>
                        <div class="col-md-8">
                            <input type="text" name="kodebarang" class="form-control" id="kodebarang" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Barang</label>
                        
                        <div class="col-md-8">
                            <div class="form-group bootstrap-selectpicker">
                                <select id="assetbarang" name="assetbarang" class="form-control"></select>
                            </div>   
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
        <!-- Modal -->
        <div class="modal fade" id="databarang" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h3 class="modal-title">Data Barang</h3>
                    </div>
                    <div class="modal-body">
                        Data Beserta Table
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Keluar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <!-- START ALERT -->
            <div class="alertsimbada">
                <div class="alert alert-info alert-dismissible" role="alert">
                    <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> -->
                    <strong><i class="fa fa-info-circle"></i></strong> Silahkan pilih kode barang untuk menampilkan detail form.
                </div>
                <div class="alert alert-danger alert-dismissible" role="alert" hidden>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <strong><i class="fa fa-exclamation-circle"></i></strong> Detail form tidak tersedia untuk kode barang tersebut.
                </div>
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
                    <form>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Golongan Tanah</label>
                                <select id="golongantanah" name="golongantanah" class="form-control"/>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Luas Tanah</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="luastanah">
                                    <div class="input-group-addon" style="border-radius: 0px;">m<sup>2</sup></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label>Kesesuaian Data Awal</label>
                            </br>
                            <div class="checkbox checkbox-inline">
                                <input type="checkbox" id="kesesuaiandata">
                                <label for="kesesuaiandata"> Sama </label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Letak/ Alamat</label>
                                <input type="text" name="letakalamat" class="form-control" id="letakalamat" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Status Tanah</label>
                                    </div>
                                    <div class="col-md-6">
                                        <select id="statustanah" name="statustanah" class="form-control" onchange="tanah.selectStatusTanahLainnya();"></select>
                                    </div>
                                    <div class="col-md-6 statustanahlainnya" hidden>
                                        <input type="text" name="" class="form-control" id="ststanahlainnya" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label>Dokumen Tanah</label>
                            </br>
                            <div class="checkbox checkbox-inline">
                                <input type="checkbox" id="sertifikat">
                                <label for="sertifikat"> Bersertifikat</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tanggal Dokumen</label>
                                <div id="tanggaldokumen" class="input-group date">
                                    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>No. Sertifikat Tanah</label>
                                <input type="text" name="nosertifikat" class="form-control" id="nosertifikat" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tahun Perolehan</label>
                                <select name="tahunperolehantanah" id="tahunperolehantanah" class="form-control">
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
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Penggunaan</label>
                                <input type="text" name="penggunaan" class="form-control" id="penggunaan" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Asal Usul</label>
                                    </div>
                                    <div class="col-md-6">
                                        <select id="asalusul" name="asalusul" class="form-control" onchange="tanah.selectAsalUsulLainnya();"></select>
                                    </div>
                                    <div class="col-md-6 asalusullainnya" hidden>
                                        <input type="text" name="aslusul" class="form-control" id="aslusul" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <!-- <input type="text" maxlength="15" class="form-control" id="nilaiperolehan"> -->
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp </div>
                                    <input type="text" class="form-control" id="nilaiperolehan">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Catatan / Keterangan</label>
                                <textarea class="form-control" id="keterangan" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
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
                    <form>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Jenis Jalan / Klafikasi Ruas</label>
                                <select id="jenisjalan" name="jenisjalan" class="form-control"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Jalan</label>
                                <input type="text" name="namajalan" class="form-control" id="namajalan" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Pangkal Ruas</label>
                                <input type="text" name="namapangkalruas" class="form-control" id="namapangkalruas" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Ujung Ruas</label>
                                <input type="text" name="namaujungruas" class="form-control" id="namaujungruas" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tahun Perolehan</label>
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
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tahun Pembuatan</label>
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
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Panjang Ruas Jalan</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="panjangruasjalan" onchange="jalan.hitungNilaiPasar();">
                                    <div class="input-group-addon" style="border-radius: 0px;">Km</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>KM Awal</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="ruasawal">
                                    <div class="input-group-addon" style="border-radius: 0px;">Km</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>KM Akhir</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="ruasakhir">
                                    <div class="input-group-addon" style="border-radius: 0px;">Km</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>ROW (Damija)</label>
                                <input type="number" name="rowdamija" class="form-control" id="rowdamija" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Lebar Perkerasan</label>
                                <input type="number" name="lebarperkerasan" class="form-control" id="lebarperkerasan" onchange="jalan.hitungNilaiPasar();" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tipe Permukaan</label>
                                <select id="tppermukaan" name="tppermukaan" class="form-control" onchange="jalan.selectTipePermukaanLainnya();"></select>
                            </div>
                        </div>
                        <div class="col-md-6 tipepermukaanlainnyajalan" hidden>
                            <div class="form-group">
                                <label>&nbsp;</label>
                                <input type="text" name="tppermukaanlainnyajalan" class="form-control" id="tppermukaanlainnyajalan" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Kondisi Jalan</label>
                                <select name="kondisijalan" id="kondisijalan" class="form-control" style="width: 100%;">
                                    <option value="">Pilih Kondisi...</option>
                                    <option value="100">Baik</option>
                                    <option value="50">Kurang Baik</option>
                                    <option value="1">Rusak Berat</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Asal - Usul</label>
                                        <select id="asalusuljalan" name="asalusuljalan" class="form-control" onchange="jalan.selectAsalUsulLainnya();"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 asalusullainnyajalan" hidden>
                                    <div class="form-group">
                                        <label>&nbsp;</label>
                                        <input type="text" name="aslusullainnyajalan" class="form-control" id="aslusullainnyajalan" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                    <input type="text" name="nilaiperolehanjalan" class="form-control" id="nilaiperolehanjalan" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Keterangan</label>
                                <textarea class="form-control" id="keteranganjalan" rows="3"></textarea>
                            </div>
                        </div>
                        <!-- <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label></label>
                                        <select id="tppermukaan" name="tppermukaan" class="form-control" onchange="jalan.selectTipePermukaanLainnya();"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 tipepermukaanlainnyajalan" hidden>
                                    <div class="form-group">
                                        <label>&nbsp;</label>
                                        <input type="text" name="tppermukaanlainnyajalan" class="form-control" id="tppermukaanlainnyajalan" />
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        
                    </form>


                    
                    
                    
                    
                    <!-- <div class="form-group row">
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
                    </div> -->
                    <!-- <div class="form-group row">
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
                    </div> -->
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
                    <form>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Jenis Jembatan</label>
                                <select id="jenisjembatan" name="jenisjembatan" class="form-control"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Jembatan</label>
                                <input type="text" name="namajembatan" class="form-control" id="namajembatan" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Jalan</label>
                                <input type="text" name="namajalanjembatan" class="form-control" id="namajalanjembatan" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Panjang</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="panjangjembatan">
                                    <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Lebar</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="lebarjembatan">
                                    <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Tinggi Ramp</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="tinggirampjembatan">
                                    <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Tahun Perolehan</label>
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
                                <div class="col-md-6">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Bahan Pondasi</label>
                                        <select id="bahanpondasi" name="bahanpondasi" class="form-control" onchange="jembatan.selectBahanJembatanLainnya();"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 bahanpondasilainnya" hidden>
                                    <div class="form-group">
                                        <label>&nbsp;</label>
                                        <input type="text" name="bahanpondasilainnya" class="form-control" id="bahanpondasilainnya" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Bahan</label>
                                        <select id="bahankonstruksijembatan" name="bahankonstruksijembatan" class="form-control" onchange="jembatan.selectBahanKonstruksiLainnya();"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 bahankonstruksijembatanlainnya" hidden>
                                    <div class="form-group">
                                        <label>&nbsp;</label>
                                        <input type="text" name="bahankonstruksijembatanlainnya" class="form-control" id="bahankonstruksijembatanlainnya" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Kondisi</label>
                                        <select name="kondisijembatan" id="kondisijembatan" class="form-control" style="width: 100%;">
                                            <option value="">Pilih Kondisi...</option>
                                            <option value="100">Baik</option>
                                            <option value="50">Kurang Baik</option>
                                            <option value="1">Rusak Berat</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Asal- Usul</label>
                                        <select id="asalusuljembatan" name="asalusuljembatan" class="form-control" onchange="jembatan.selectAsalusulLainnya();"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 asalusuljembatanlainnya" hidden>
                                    <div class="form-group">
                                        <label>&nbsp;</label>
                                        <input type="text" name="asalusuljembatanlainnya" class="form-control" id="asalusuljembatanlainnya" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                    <input type="text" name="nilaiperolehanjembatan" class="form-control" id="nilaiperolehanjembatan" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Keterangan</label>
                                <textarea class="form-control" id="keteranganjembatan" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
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
                    <form>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Gol. Bangunan Air</label>
                                <select id="golbangunanair" name="golbangunanair" class="form-control"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Bangunan Air</label>
                                <input type="text" name="namabangunanair" class="form-control" id="namabangunanair" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Letak / Alamat</label>
                                <input type="text" name="alamatbangunanair" class="form-control" id="alamatbangunanair" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Tahun Perolehan</label>
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
                                <div class="col-md-6">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Kondisi</label>
                                        <select name="kondisibangunanair" id="kondisibangunanair" class="form-control" style="width: 100%;">
                                            <option value="">Pilih Kondisi...</option>
                                            <option value="100">Baik</option>
                                            <option value="50">Kurang Baik</option>
                                            <option value="1">Rusak Berat</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Bahan</label>
                                <input type="text" name="bahanbangunanair" class="form-control" id="bahanbangunanair" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Dimensi</label>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <div class="input-group-addon" style="border-radius: 0px;">P</div>
                                            <input type="number" class="form-control" id="panjangbangunanair">
                                            <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <div class="input-group-addon" style="border-radius: 0px;">L</div>
                                            <input type="number" class="form-control" id="lebarbangunanair">
                                            <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <div class="input-group-addon" style="border-radius: 0px;">T</div>
                                            <input type="number" class="form-control" id="tinggibangunanair">
                                            <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Fasilitas Penunjang</label>
                                <input type="text" name="fasilitasbangunanair" class="form-control" id="fasilitasbangunanair" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Asal- Usul</label>
                                        <select id="asalusulair" name="asalusulair" class="form-control" onchange="air.selectAsalusulLainnya();"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 asalusulairlainnya" hidden>
                                    <div class="form-group">
                                        <label>&nbsp;</label>
                                        <input type="text" name="asalusulairlainnya" class="form-control" id="asalusulairlainnya" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                    <input type="text" name="nilaiperolehanair" class="form-control" id="nilaiperolehanair" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Keterangan</label>
                                <textarea class="form-control" id="keteranganair" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
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
                    <form>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Golongan Instalasi</label>
                                <select id="golinstalasi" name="golinstalasi" class="form-control"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Instalasi</label>
                                <input type="text" name="namainstalasi" class="form-control" id="namainstalasi" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Letak / Alamat</label>
                                <input type="text" name="alamatinstalasi" class="form-control" id="alamatinstalasi" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Tahun Perolehan</label>
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
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Kondisi Bangunan</label>
                                        <select name="kondisibangunaninst" id="kondisibangunaninst" class="form-control" style="width: 100%;">
                                            <option value="">Pilih Kondisi...</option>
                                            <option value="100">Baik</option>
                                            <option value="50">Kurang Baik</option>
                                            <option value="1">Rusak Berat</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Bahan</label>
                                <input type="text" name="bahanbangunaninst" class="form-control" id="bahanbangunaninst" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Dimensi</label>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <div class="input-group-addon" style="border-radius: 0px;">P</div>
                                            <input type="number" class="form-control" id="panjangbangunaninst">
                                            <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <div class="input-group-addon" style="border-radius: 0px;">L</div>
                                            <input type="number" class="form-control" id="lebarbangunaninst">
                                            <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <div class="input-group-addon" style="border-radius: 0px;">T</div>
                                            <input type="number" class="form-control" id="tinggibangunaninst">
                                            <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Fasilitas Penunjang</label>
                                <input type="text" name="fasilitasbangunaninst" class="form-control" id="fasilitasbangunaninst" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Asal- Usul</label>
                                        <select id="asalusulinst" name="asalusulinst" class="form-control" onchange="instalasi.selectAsalusulLainnya();"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 asalusulinstlainnya" hidden>
                                    <div class="form-group">
                                        <label>&nbsp;</label>
                                        <input type="text" name="asalusulinstlainnya" class="form-control" id="asalusulinstlainnya" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                    <input type="text" name="nilaiperolehaninst" class="form-control" id="nilaiperolehaninst" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Keterangan</label>
                                <textarea class="form-control" id="keteranganinst" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
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
                    <form>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Golongan Jaringan</label>
                                <select id="goljaringan" name="goljaringan" class="form-control"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Jaringan</label>
                                <input type="text" name="namajaringan" class="form-control" id="namajaringan" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Letak / Alamat</label>
                                <input type="text" name="alamatjaringan" class="form-control" id="alamatjaringan" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Tahun Perolehan</label>
                                        <select name="tahunperolehanjar" id="tahunperolehanjar" class="form-control">
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
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Kondisi Bangunan</label>
                                        <select name="kondisibangunanjar" id="kondisibangunanjar" class="form-control" style="width: 100%;">
                                            <option value="">Pilih Kondisi...</option>
                                            <option value="100">Baik</option>
                                            <option value="50">Kurang Baik</option>
                                            <option value="1">Rusak Berat</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Bahan</label>
                                <input type="text" name="bahanbangunanjar" class="form-control" id="bahanbangunanjar" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Ukuran</label>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <div class="input-group-addon" style="border-radius: 0px;">P</div>
                                            <input type="number" class="form-control" id="panjangjar">
                                            <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Asal- Usul</label>
                                        <select id="asalusuljar" name="asalusuljar" class="form-control" onchange="jaringan.selectAsalusulLainnya();"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 asalusuljarlainnya" hidden>
                                    <div class="form-group">
                                        <label>&nbsp;</label>
                                        <input type="text" name="asalusuljarlainnya" class="form-control" id="asalusuljarlainnya" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                    <input type="text" name="nilaiperolehanjar" class="form-control" id="nilaiperolehanjar" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Keterangan</label>
                                <textarea class="form-control" id="keteranganjar" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
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
                    <!-- <form> -->
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Golongan Bangunan</label>
                                <select id="golongangedung" name="golongangedung" class="form-control"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Bangunan</label>
                                <input type="text" name="namagedung" class="form-control" id="namagedung" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Letak Alamat</label>
                                <!-- <div class="row"> -->
                                    <div class="input-group">
                                        <!-- <input type="text" name="nilaiperolehangedung" class="form-control" id="nilaiperolehangedung" /> -->
                                        <select type="text" name="alamatgedung" class="form-control" id="alamatgedung"></select>
                                        <div class="input-group-addon" style="border-radius: 0px; background-color: #E5343D; color: #fff;" onclick="gedung.resetLetak();"><i class="glyphicon glyphicon-remove"></i></div>
                                        
                                    </div>
                                    
                                    <!-- <button class="btn btn-danger btn-sm"></button> -->
                                <!-- </div> -->
                                
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Luas Tanah</label>
                                <input type="number" class="form-control" id="luastanahgedung">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Luas Bangunan</label>
                                <input type="number" class="form-control" id="luasbangunangedung">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Konstruksi Bangunan</label>
                                <select id="konstruksigedung" name="konstruksigedung" class="form-control" style="width: 100%;"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Kondisi Bangunan</label>
                                <select name="kondisigedung" id="kondisigedung" class="form-control" style="width: 100%;">
                                                <option value="">Pilih Kondisi...</option>
                                                <option value="100">Baik</option>
                                                <option value="50">Kurang Baik</option>
                                                <option value="1">Rusak Berat</option>
                                            </select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label>Dokumen Bangunan</label>
                            </br>
                            <div class="checkbox checkbox-inline">
                                <input type="checkbox" id="dokumenimb">
                                <label for="dokumenimb"> Bersertifikat</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tanggal Dokumen</label>
                                <div id="tanggalimb" class="input-group date">
                                    <input id="tglimb" type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Asal-usul</label>
                                <select id="asalusulgedung" name="asalusulgedung" class="form-control" onchange="gedung.asalusulLainnya();"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group asalusulgedunglainnya" hidden>
                                <label>&nbsp;</label>
                                <input type="text" name="asalusulgedunglainnya" class="form-control" id="asalusulgedunglainnya" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Bangunan</label>
                                </br>
                                <div class="checkbox checkbox-inline">
                                    <input type="checkbox" id="tingkatgedung">
                                    <label for="tingkatgedung"> Tingkat</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                    <input type="text" name="nilaiperolehangedung" class="form-control" id="nilaiperolehangedung" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Catatan / Keterangan</label>
                                <textarea class="form-control" id="keterangangedung" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Tambah Ruangan</label>
                                <div class="input-group">
                                    <input type="text" name="namaruangangedung[]" class="form-control" id="namaruangangedung" data-bind="value: gedung.nmruangan" />
                                    <div class="input-group-addon" style="border-radius: 0px; background-color: #337ab7; color: #f9f9f9" data-bind="click: gedung.addruangan"><i class="glyphicon glyphicon-plus"></i></div>
                                </div>
                            </div>
                            <div class="row">
                                <!-- <div class="col-md-12 text-right">
                                    <button type="button" class="btn btn-labeled btn-primary m-b-5">
                                        <span class="btn-label">
                                            <i class="glyphicon glyphicon-plus"></i>
                                        </span>
                                        Tambah Ruangan                
                                    </button>
                                </div> -->
                                <div class="col-md-12">
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nama Ruangan</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody data-bind="foreach: gedung.ruangan">
                                            <tr>
                                                <td data-bind="text: ($index()+1), attr:{name:($index()+1)}"></td>
                                                <td data-bind="text: namaruangan, attr: {id:'nmrg_'+($index()+1)}"></td>
                                                <td class="text-center"><button class="btn btn-danger btn-sm" data-bind="click: gedung.removeruangan">
                                                <i class="glyphicon glyphicon-trash"></i></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    <!-- </form>   -->
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
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Golongan Monumen</label>
                            <select id="golonganmonumen" name="golonganmonumen" class="form-control"></select>
                            <input type="" name="" hidden>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Nama Monumen</label>
                            <input type="text" name="namamonumen" class="form-control" id="namamonumen" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Letak Alamat</label>
                            <input type="text" name="alamatmonumen" class="form-control" id="alamatmonumen" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Luas Tanah</label>
                            <input type="text" name="luastanahmonumen" class="form-control" id="luastanahmonumen" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Luas Monumen</label>
                            <input type="text" name="luasmonumen" class="form-control" id="luasmonumen" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Tahun Perolehan</label>
                            <select name="tahunperolehanmonumen" id="tahunperolehanmonumen" class="form-control">
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
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Kontruksi Monumen</label>
                            <select id="konstruksimonumen" name="konstruksimonumen" class="form-control"></select>
                            <input type="" name="" hidden>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Kondisi</label>
                            <select name="kondisimonumen" id="kondisimonumen" class="form-control" style="width: 100%;">
                                <option value="">Pilih Kondisi...</option>
                                <option value="100">Baik</option>
                                <option value="50">Kurang Baik</option>
                                <option value="1">Rusak Berat</option>
                            </select>
                            <input type="" name="" hidden>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label>Dokumen Monumen</label>
                        </br>
                        <div class="checkbox checkbox-inline">
                            <input type="checkbox" id="dokumenmon">
                            <label for="dokumenmon"> IMB</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Tanggal Dokumen</label>
                            <div id="tanggalimbmon" class="input-group date">
                                <input id="tglimbmon" type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Asal-usul</label>
                            <select id="asalusulmon" name="asalusulmon" class="form-control" onchange="monumen.asalusulLainnya();"></select>
                            <input type="" name="" hidden>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group asalusulmonlainnya" hidden>
                            <label>&nbsp;</label>
                            <input type="text" name="asalusulmonlainnya" class="form-control" id="asalusulmonlainnya" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Bangunan</label>
                            </br>
                            <div class="checkbox checkbox-inline">
                                <input type="checkbox" id="tingkatmon">
                                <label for="tingkatmon"> Tingkat</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Nilai Perolehan</label>
                            <div class="input-group">
                                <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                <input type="text" name="nilaiperolehanmon" class="form-control" id="nilaiperolehanmon" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Catatan / Keterangan</label>
                            <textarea class="form-control" id="keteranganmon" rows="3"></textarea>
                        </div>
                    </div>
                    <!-- <div class="col-md-6">
                        <div class="form-group">
                            <label></label>
                            
                        </div>
                    </div> -->
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
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Golongan Alat Besar</label>
                            <select id="golonganalatbesar" name="golonganalatbesar" class="form-control"></select>
                            <input type="" name="" hidden>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Nama Alat Besar</label>
                            <input type="text" name="namaalatbesar" class="form-control" id="namaalatbesar" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Merk</label>
                            <input type="text" name="merkalatbesar" class="form-control" id="merkalatbesar" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Tipe</label>
                            <input type="text" name="tipealatbesar" class="form-control" id="tipealatbesar" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Ukuran</label>
                            <input type="number" name="ukuranalatbesar" class="form-control" id="ukuranalatbesar" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Bahan</label>
                            <input type="text" name="bahanalatbesar" class="form-control" id="bahanalatbesar" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Nomor Rangka</label>
                            <input type="text" name="norangkaalatbesar" class="form-control" id="norangkaalatbesar" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Nomor Mesin</label>
                            <input type="text" name="nomesinalatbesar" class="form-control" id="nomesinalatbesar" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Tahun Perolehan</label>
                            <select name="tahunperolehanalatbesar" id="tahunperolehanalatbesar" class="form-control">
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
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Kondisi Alat Berat</label>
                            <select name="kondisialatberat" id="kondisialatberat" class="form-control" style="width: 100%;">
                                <option value="">Pilih Kondisi...</option>
                                <option value="100">Baik</option>
                                <option value="50">Kurang Baik</option>
                                <option value="1">Rusak Berat</option>
                            </select>
                            <input type="" name="" hidden>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Asal-usul</label>
                            <select id="asalusulalatbesar" name="asalusulalatbesar" class="form-control"></select>
                            <input type="" name="" hidden>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Nilai Perolehan</label>
                            <div class="input-group">
                                <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                <input type="text" name="nilaiperolehanalatbesar" class="form-control" id="nilaiperolehanalatbesar" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Catatan / Keterangan</label>
                            <textarea class="form-control" id="keteranganalatbesar" rows="3"></textarea>
                        </div>
                    </div>
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