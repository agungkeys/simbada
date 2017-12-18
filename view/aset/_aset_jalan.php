<script>
    page.pageDestination("AsetJalan");
</script>
<script src="assets/dist/js/asetformdatautama.js" type="text/javascript"></script>
<script src="assets/dist/js/asetjalan.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-news-paper"></i>
    </div>
    <div class="header-title">
        <h1>Aset Jalan</h1>
        <small>Pencarian Aset Jalan</small>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Aset Jalan</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <?php include'form_navigasi_export.php'; ?>
        <div id="table_aset_jalan" class="panel">
            <div id="gridasetjalan" class="panel-body">
                <div class="table-responsive">
                    <table id="DataTableAsetJalan" class="table table-bordered table-striped table-hover" style="width: auto;">
                        <thead>
                            <tr>
                                <th>Kode&nbsp;Jalan</th>
                                <th style="width: 250px;">Sub&nbsp;Unit</th>
                                <th style="width: 250px;">Satuan&nbsp;Kerja</th>
                                <th>Nama&nbsp;Pemilik</th>
                                <th>Jenis&nbsp;Jalan</th>
                                <th style="width: 250px;">Nama&nbsp;Jalan</th>

                                <th>Panjang&nbsp;(Km)</th>
                                <th>Lebar&nbsp;(M)</th>
                                <th>Ruas&nbsp;Awal</th>
                                <th>Ruas&nbsp;Akhir</th>
                                <th>ROW&nbsp;</th>

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
        <div id="form_aset_jalan" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" hidden>
            <div class="panel panel-bd" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-10">
                                <h4>Perbaharui Detail Jalan</h4>
                            </div>
                        </div>
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
                            <div class="form-group">
                                <label>Tahun Pembuatan</label>
                                <select name="tahunpembuatan" id="tahunpembuatan" class="form-control">
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
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Panjang Ruas</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="panjangruasjalan">
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
                                <input type="number" name="lebarperkerasan" class="form-control" id="lebarperkerasan" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tipe Permukaan</label>
                                <select id="tppermukaan" name="tppermukaan" class="form-control"></select>
                            </div>
                        </div>
                        <div class="col-md-6">
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
                                        <select id="asalusuljalan" name="asalusuljalan" class="form-control"></select>
                                    </div>
                                </div>
                                <div class="col-md-6 asalusullainnyajalan">
                                    <div class="form-group">
                                        <label>Asal - Usul Lainnya</label>
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