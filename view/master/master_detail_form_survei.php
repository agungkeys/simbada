<script>
    page.pageDestination("DetailFormSurvei")
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-news-paper"></i>
    </div>
    <div class="header-title">
        <h1>Master Detail Form Survei</h1>
        <small>Entry Master Detail Form Survei</small>
        <ol class="breadcrumb">
            <li><a href="#"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Master Detail Form Survei</li>
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
                                <span id="">Data Master Detail Form Survei</span>
                            </div>
                            <div class="col-md-6 text-right">
                                <div class="statistic-box">
			                        <button id="detailbatal" class="btn btn-danger" onclick="cancelDetail();"> Batal</button>
			                        <button id="detailsimpan" class="btn btn-primary" onclick="saveDetail();"> Simpan</button>
			                        <button id="detailtambah" class="btn btn-primary" onclick="addDetail();"> Tambah</button>
			                        <button id="detailperbarui" class="btn btn-primary"> Perbarui</button>
			                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="griddetail" class="panel-body">
                    <div class="table-responsive">
                        <table id="DataTableDetail" class="table table-bordered table-striped table-hover display">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Kategori</th>
                                    <th>Value</th>
                                    <th>Keterangan 1</th>
                                    <th>Keterangan 2</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="adddetail" class="panel-body" hidden>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form method="post" id="form-add-user">
                        	<div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kategori Form</label>
                                <div class="col-md-8">
                                    <select id="kategoriform" name="kategoriform" class="form-control"></select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Value</label>
                                <div class="col-md-8">
                                    <input type="text" name="value" class="form-control" id="value" placeholder="" /> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Keterangan 1</label>
                                <div class="col-md-8">
                                    <input type="text" name="ket1" class="form-control" id="ket1"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Keterangan 2</label>
                                <div class="col-md-8">
                                    <input type="text" name="ket2" class="form-control" id="ket2"/> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="editdetail" class="panel-body" hidden>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form method="post" id="form-add-user">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Kategori Form</label>
                                <div class="col-md-8">
                                    <select id="edkategoriform" name="edkategoriform" class="form-control"></select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Value</label>
                                <div class="col-md-8">
                                    <input type="text" name="edvalue" class="form-control" id="edvalue" placeholder="" /> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Keterangan 1</label>
                                <div class="col-md-8">
                                    <input type="text" name="edket1" class="form-control" id="edket1"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Keterangan 2</label>
                                <div class="col-md-8">
                                    <input type="text" name="edket2" class="form-control" id="edket2"/> 
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
                    <li><strong>Berhati-hatilah</strong> jika anda memperbarui data master detail kategori form survei, atau menghapus data master detail kategori form survei</li>
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

<script src="assets/dist/js/master_detail_form_survei.js" type="text/javascript"></script>