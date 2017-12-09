<script>
    page.pageDestination("Agama")
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-moon"></i>
    </div>
    <div class="header-title">
        <h1>Master Agama</h1>
        <small>Entry Master Agama</small>
        <ol class="breadcrumb">
            <li><a href="#"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Master Agama</li>
        </ol>
    </div>
</section>
<!-- Main content -->
<section class="content">
    <div class="row">
        <!-- <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="button panel panel-bd">
                <div class="panel-body text-right">
                    <div class="statistic-box">
                        <button id="userbatal" class="btn btn-danger"> Batal</button>
                        <button id="usersimpan" class="btn btn-primary"> Simpan</button>
                        <button id="usertambah" class="btn btn-primary"> Tambah</button>
                        <button id="userperbarui" class="btn btn-primary"> Perbarui</button>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-bd">
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-6">
                                <span id="">Data Master Agama</span>
                            </div>
                            <div class="col-md-6 text-right">
                                <button id="agamatambah" class="btn btn-primary" data-toggle="modal" data-target="#tambahAgama" onclick="addAgama();"> Tambah</button>
                                <!-- <button id="agamabatal" class="btn btn-danger" onclick="cancelAgama();"> Batal</button>
                                <button id="agamasimpan" class="btn btn-primary" onclick="addAgamaSave();"> Simpan</button>
                                <button id="agamaperbarui" class="btn btn-primary" onclick="editAgamaSave();"> Perbarui</button> -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Add Agama -->
                <div class="modal fade" id="tambahAgama" tabindex="-1" role="dialog" data-backdrop="static">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
                                <h4 class="modal-title"></h4>
                            </div>
                            <div class="modal-body">
                                <div class="form-group row">
                                    <label style="padding-top: 5px;" class="col-sm-3 col-form-label">Agama</label>
                                    <div class="col-md-9">
                                        <input type="text" name="val-agama" class="form-control" id="val-agama" placeholder="ie: Islam" /> 
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button id="cancel" type="button" class="btn btn-danger" data-dismiss="modal" onclick="cancelAgama();">Batal</button>
                                <button id="save" type="button" class="btn btn-primary" onclick="addAgamaSave();">Simpan</button>
                                <button id="update" type="button" class="btn btn-primary" onclick="editAgamaSave(id);">Perbarui</button>
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                </div><!-- /.modal -->

                <div id="griduser" class="panel-body">
                    <div class="table-responsive">
                        <table id="DataTableAgama" class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Agama</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
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
                    <li><strong>Berhati-hatilah</strong> jika anda memperbarui data master agama, atau menghapus data agama</li>
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

<script src="assets/dist/js/master_agama.js" type="text/javascript"></script>