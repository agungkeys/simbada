<script>
    page.pageDestination("AsetJembatan");
</script>
<script src="assets/dist/js/asetformdatautama.js" type="text/javascript"></script>
<script src="assets/dist/js/asetjembatan.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-news-paper"></i>
    </div>
    <div class="header-title">
        <h1>Aset Jembatan</h1>
        <small>Pencarian Aset Jembatan</small>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Aset Jembatan</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <?php include'form_navigasi_export.php'; ?>
        <div id="table_aset_jembatan" class="panel">
            <div id="gridasetjembatan" class="panel-body">
                <div class="table-responsive">
                    <table id="DataTableAsetJembatan" class="table table-bordered table-striped table-hover" style="width: auto;">
                        <thead>
                            <tr>
                                <th>Kode&nbsp;Jembatan</th>
                                <th style="width: 250px;">Sub&nbsp;Unit</th>
                                <th style="width: 250px;">Satuan&nbsp;Kerja</th>
                                <th>Nama&nbsp;Pemilik</th>
                                <th>Jenis&nbsp;Jembatan</th>
                                <th style="width: 250px;">Nama&nbsp;Jembatan</th>
                                <th style="width: 250px;">Nama&nbsp;Jalan</th>

                                <th>Posisi&nbsp;Ruas</th>
                                <th>Panjang&nbsp;(Km)</th>
                                <th>Lebar&nbsp;(M)</th>
                                <th>Tinggi</th>

                                <th>Tahun&nbsp;Pembuatan</th>
                                <th>Tahun&nbsp;Perolehan</th>
                                <th style="width: 100px;">Kondisi&nbsp;</th>
                                <th>Asal&nbsp;Usul</th>
                                <th>Nilai&nbsp;Perolehan</th>
                                <th style="width: 200px;">Keterangan&nbsp;</th>
                                <th style="width: 250px;">Penanggung&nbsp;Jawab</th>
                                <th>Entry&nbsp;User</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <?php include'form_navigasi.php'; ?>
        <?php include'form_data_utama.php'; ?>
        <div id="form_aset_jembatan" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" hidden>
            <div class="panel panel-bd" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-10">
                                <h4>Perbaharui Detail Jembatan</h4>
                            </div>
                        </div>
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
                                                var tahun = 1800;
                                                var y = new Date();
                                                for(i=y.getFullYear();i>=tahun;i--){
                                                    document.write("<option>" + i + "</option>");
                                                }
                                            </script>
                                            <option value="0">0</option>
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
                                        <select id="bahanpondasi" name="bahanpondasi" class="form-control"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 bahanpondasilainnya">
                                    <div class="form-group">
                                        <label>Bahan Pondasi Lainnya</label>
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
                                        <select id="bahankonstruksijembatan" name="bahankonstruksijembatan" class="form-control"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 bahankonstruksijembatanlainnya">
                                    <div class="form-group">
                                        <label>Bahan Lainnya</label>
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
                                        <select id="asalusuljembatan" name="asalusuljembatan" class="form-control"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 asalusuljembatanlainnya">
                                    <div class="form-group">
                                        <label>Asal- Usul Lainnya</label>
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
        </div>
        <?php include'form_mutasi.php'; ?>
        <?php include'form_penghapusan.php'; ?>
    </div>
</section>
<?php include'modal_menu.php'; ?>
<style type="text/css">
    .icon_list li.ubah:hover {
        color: #fff;
        background-color: #428bca;
    }
    .icon_list li.mutasi:hover {
        color: #fff;
        background-color: #37a000;
    }
    .icon_list li.hapus:hover {
        color: #fff;
        background-color: #E5343D;
    }
    .icon_list li.penghapusan:hover {
        color: #fff;
        background-color: #FFB61E;
    }
    .icon_list li {
        width: 50%;
        font-size: 12px;
    }
    .icon_list li span{
        padding-top: 5px;
    }
    table{
      margin: 0 auto;
      width: 100%;
      clear: both;
      border-collapse: collapse;
      /*table-layout: fixed; // ***********add this*/
      word-wrap:break-word; // ***********and this
    }

    .table-striped>tbody>tr:nth-of-type(odd){
        background-color: #e6f7e6;
    }

    .table tbody tr.even:hover, .table tbody tr.even td.highlighted {
        background-color: #eed7b0;
    }

    .table tbody tr.odd:hover, .table tbody tr.odd td.highlighted {
    background-color: #eed7b0;
    }

    .table tr.even:hover {
    background-color: #eed7b0;
    }

    .table tr.even:hover td.sorting_1 {
    background-color: #eed7b0;
    }

    .table tr.even:hover td.sorting_2 {
    background-color: #eed7b0;
    }

    .table tr.even:hover td.sorting_3 {
    background-color: #eed7b0;
    }

    .table tr.odd:hover {
    background-color: #eed7b0;
    }

    .table tr.odd:hover td.sorting_1 {
    background-color: #eed7b0;
    }

    .table tr.odd:hover td.sorting_2 {
    background-color: #eed7b0;
    }

    .table tr.odd:hover td.sorting_3 {
    background-color: #eed7b0;
    }
</style>