<script>
    page.pageDestination("User")
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-users"></i>
    </div>
    <div class="header-title">
        <h1>Master User</h1>
        <small>Entry Master User</small>
        <ol class="breadcrumb">
            <li><a href="#"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Master User</li>
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
                                <span id="titlePanelUser"></span>
                            </div>
                            <div class="col-md-6 text-right">
                                <button id="usertambah" class="btn btn-primary" onclick="addUser();"> Tambah</button>
                                <button id="userbatal" class="btn btn-danger" onclick="cancelUser();"> Batal</button>
                                <button id="usersimpan" class="btn btn-primary" onclick="addUserSave();"> Simpan</button>
                                
                                <button id="userperbarui" class="btn btn-primary" onclick="editUserSave();"> Perbarui</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="griduser" class="panel-body">
                    <div class="table-responsive">
                        <table id="DataTableUser" class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nama Pengguna</th>
                                    <th>Nama Lengkap</th>
                                    <th>Email</th>
                                    <th>Level</th>
                                    <th>Lokasi</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="adduser" class="panel-body" hidden>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form method="post" id="form-add-user">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Nama Pengguna</label>
                                <div class="col-md-8">
                                    <input type="text" name="username" class="form-control" id="username" placeholder="ie: surianto" /> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Password</label>
                                <div class="col-md-8">
                                    <input type="password" name="password" class="form-control" id="password"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Nama Lengkap</label>
                                <div class="col-md-8">
                                    <input type="text" name="namalengkap" class="form-control" id="namalengkap" placeholder="Surianto Lemantara" /> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Email</label>
                                <div class="col-md-8">
                                    <input type="text" name="email" class="form-control" id="email" placeholder="surianto.lemantara@gmail.com" /> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Level</label>
                                <div class="col-md-8">
                                    <select id="level" name="level" class="selectpicker" title="Pilih Level...">
                                        <option data-tokens="Admin">Admin</option>
                                        <option data-tokens="Pimpinan">Pimpinan</option>
                                        <option data-tokens="Pegawai">Pegawai</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Satuan Kerja</label>
                                <div class="col-md-8">
                                    <select id="lokasiunit" name="lokasiunit" class="form-control"></select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="edituser" class="panel-body" hidden>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form method="post" id="form-add-user">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Nama Pengguna</label>
                                <div class="col-md-8">
                                    <input type="text" name="edusername" class="form-control" id="edusername" /> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Password</label>
                                <div class="col-md-8">
                                    <input type="password" name="edpassword" class="form-control" id="edpassword"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Nama Lengkap</label>
                                <div class="col-md-8">
                                    <input type="text" name="ednamalengkap" class="form-control" id="ednamalengkap" /> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Email</label>
                                <div class="col-md-8">
                                    <input type="text" name="edemail" class="form-control" id="edemail"/> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Level</label>
                                <div class="col-md-8">
                                    <select id="edlevel" name="edlevel" class="selectpicker" title="Pilih Level...">
                                        <option data-tokens="Admin">Admin</option>
                                        <option data-tokens="Pimpinan">Pimpinan</option>
                                        <option data-tokens="Pegawai">Pegawai</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Satuan Kerja</label>
                                <div class="col-md-8">
                                    <select id="edlokasiunit" name="edlokasiunit" class="form-control"></select>
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
                    <li><strong>Berhati-hatilah</strong> jika anda memperbarui data master user, atau menghapus data user</li>
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

<script src="assets/dist/js/master_user.js" type="text/javascript"></script>