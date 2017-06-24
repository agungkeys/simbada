<script>
    page.pageDestination("Lokasi")
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-map-marker"></i>
    </div>
    <div class="header-title">
        <h1>Master Lokasi</h1>
        <small>Entry Master Lokasi</small>
        <ol class="breadcrumb">
            <li><a href="#"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Master Lokasi</li>
        </ol>
    </div>
</section>
<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-bd">
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-6">
                                <span id="titlePanelLokasi"></span>
                            </div>
                            <div class="col-md-6 text-right">
                                <button id="lokasitambah" class="btn btn-primary" onclick="addLokasi();"> Tambah</button>
                                <button id="lokasibatal" class="btn btn-danger" onclick="cancelLokasi();"> Batal</button>
                                <button id="lokasisimpan" class="btn btn-primary" onclick="simpanLokasi();"> Simpan</button>
                                <button id="lokasiperbarui" class="btn btn-primary" onclick="editLokasiSave();"> Perbarui</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gridlokasi" class="panel-body">
                    <div class="table-responsive">
                        <table id="DataTableLokasi" class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <!-- <th>No</th> -->
                                    <th>Kode Lokasi</th>
                                    <th>Lokasi/Unit</th>
                                    <th>Sat. Kerja</th>
                                    <!-- <th>Kep. Unit/Sat. Kerja</th>
                                    <th>NIP</th>
                                    <th>Kep. Bag. Peng. Bid</th>
                                    <th>NIP</th> -->
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="addlokasi" class="panel-body" hidden>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form method="post" id="form-add-lokasi">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kode Lokasi</label>
                                <div class="col-md-8">
                                    <input type="text" name="kdLokasi" class="form-control" id="kdLokasi"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Lokasi/Unit</label>
                                <div class="col-md-8">
                                    <input type="text" name="nmLokasiUnit" class="form-control" id="nmLokasiUnit"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Satuan Kerja</label>
                                <div class="col-md-8">
                                    <input type="text" name="satuanKerja" class="form-control" id="satuanKerja"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kepala Unit/Sat. Kerja</label>
                                <div class="col-md-8">
                                    <input type="text" name="kepUnitSatKerja" class="form-control" id="kepUnitSatKerja"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">NIP</label>
                                <div class="col-md-8">
                                    <input type="text" name="nipA" class="form-control" id="nipA"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kepala Bag. Peng. Bid.</label>
                                <div class="col-md-8">
                                    <input type="text" name="kabagpengbid" class="form-control" id="kabagpengbid"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">NIP</label>
                                <div class="col-md-8">
                                    <input type="text" name="nipB" class="form-control" id="nipB"/> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="editlokasi" class="panel-body" hidden>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form method="post" id="form-edit-lokasi">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kode Lokasi</label>
                                <div class="col-md-8">
                                    <input type="text" name="edkdLokasi" class="form-control" id="edkdLokasi"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Lokasi/Unit</label>
                                <div class="col-md-8">
                                    <input type="text" name="ednmLokasiUnit" class="form-control" id="ednmLokasiUnit"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Satuan Kerja</label>
                                <div class="col-md-8">
                                    <input type="text" name="edsatuanKerja" class="form-control" id="edsatuanKerja"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kepala Unit/Sat. Kerja</label>
                                <div class="col-md-8">
                                    <input type="text" name="edkepUnitSatKerja" class="form-control" id="edkepUnitSatKerja"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">NIP</label>
                                <div class="col-md-8">
                                    <input type="text" name="ednipA" class="form-control" id="ednipA"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kepala Bag. Peng. Bid.</label>
                                <div class="col-md-8">
                                    <input type="text" name="edkabagpengbid" class="form-control" id="edkabagpengbid"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">NIP</label>
                                <div class="col-md-8">
                                    <input type="text" name="ednipB" class="form-control" id="ednipB"/> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Modal Information -->
<div class="modal fade modal-danger" id="information" tabindex="-1" role="dialog" data-backdrop="static">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
                <h2 class="modal-title"><span class="pe-7s-attention"></span> Perhatian</h2>
            </div>
            <div class="modal-body">
                <ul>
                    <li><strong>Berhati-hatilah</strong> jika anda memperbarui data master lokasi, atau menghapus data lokasi</li>
                    <li><strong>Data Tidak Diketahui</strong> atas perubahan dan penghapusan data, dapat mengakibatkan loss data atau data tidak diketahui pada "Transaksi Entry Asset"</li>
                    <li><strong>Telitilah</strong> jika melakukan perubahan, jika ragu hubungi IT Support.</li>
                </ul>
            </div>
            <div class="modal-footer">
                <button id="cancel" type="button" class="btn btn-labeled btn-primary" data-dismiss="modal"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>Saya Mengerti</button>
                <!-- <button id="save" type="button" class="btn btn-primary" onclick="addAgamaSave();">Simpan</button> -->
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal --> 

<script src="assets/dist/js/master_lokasi.js" type="text/javascript"></script>