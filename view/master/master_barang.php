<script>
    page.pageDestination("Barang")
</script>
<!-- Content Header (Page header) -->

<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-note"></i>
    </div>
    <div class="header-title">
        <h1>Master Barang</h1>
        <small>Entry Master Barang</small>
        <ol class="breadcrumb">
            <li><a href="#"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Master Barang</li>
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
                                <span id="titlePanelBarang"></span>
                            </div>
                            <div class="col-md-6 text-right">
                                <button id="brgtambah" class="btn btn-primary" onclick="addBarang();"> Tambah</button>
                                <button id="brgbatal" class="btn btn-danger" onclick="cancelBarang();"> Batal</button>
                                <button id="brgsimpan" class="btn btn-primary" onclick="addBarangSave();"> Simpan</button>
                                
                                <button id="brgperbarui" class="btn btn-primary" onclick="editBarangSave();"> Perbarui</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gridbarang" class="panel-body">
                    <div class="table-responsive">
                        <table id="DataTableBarang" class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <!-- <th>No</th> -->
                                    <th>Kode Barang</th>
                                    <th>Nama Barang</th>
                                    <!-- <th>ID</th>
                                    <th>Kode Rekening</th>
                                    <th>Kode Baru</th>
                                    <th>Kode Rekening Lama</th> -->
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="addbarang" class="panel-body" hidden>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form method="post" id="form-add-barang">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kode Barang</label>
                                <div class="col-md-8">
                                    <input type="text" name="kdBarang" class="form-control" id="kdBarang"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Nama Barang</label>
                                <div class="col-md-8">
                                    <input type="text" name="nmBarang" class="form-control" id="nmBarang"/> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="editbarang" class="panel-body" hidden>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form method="post" id="form-edit-barang">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kode Barang</label>
                                <div class="col-md-8">
                                    <input type="text" name="kdBarangEdit" class="form-control" id="kdBarangEdit"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Nama Barang</label>
                                <div class="col-md-8">
                                    <input type="text" name="nmBarangEdit" class="form-control" id="nmBarangEdit"/> 
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
                    <li><strong>Berhati-hatilah</strong> jika anda memperbarui data master barang, atau menghapus data barang</li>
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

<script src="assets/dist/js/master_barang.js" type="text/javascript"></script>