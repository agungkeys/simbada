<script>
    page.pageDestination("AsetMonumen");
</script>
<script src="assets/dist/js/asetformdatautama.js" type="text/javascript"></script>
<script src="assets/dist/js/asetmonumen.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-news-paper"></i>
    </div>
    <div class="header-title">
        <h1>Aset Monumen</h1>
        <small>Pencarian Aset Monumen</small>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Aset Monumen</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <?php include'form_navigasi_export.php'; ?>
        <div id="table_aset_monumen" class="panel">
            <div id="gridasetmonumen" class="panel-body">
                <div class="table-responsive">
                    <table id="DataTableAsetMonumen" class="table table-bordered table-striped table-hover" style="width: auto;">
                        <thead>
                            <tr>
                                <th>Kode&nbsp;Monumen</th>
                                <th style="width: 250px;">Sub&nbsp;Unit</th>
                                <th style="width: 250px;">Satuan&nbsp;Kerja</th>
                                <th>Nama&nbsp;Pemilik</th>
                                <th>Jenis&nbsp;Monumen</th>
                                <th style="width: 250px;">Nama&nbsp;Monumen</th>
                                <th style="width: 250px;">Alamat</th>

                                <th>Konstruksi</th>
                                <th>Luas&nbsp;Tanah</th>
                                <th>Luas&nbsp;Monumen</th>
                                <th>Tingkat</th>

                                <th>Tanggal&nbsp;Dokumen</th>
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
        <div id="form_aset_monumen" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" hidden>
            <div class="panel panel-bd" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-10">
                                <h4>Perbaharui Detail Monumen</h4>
                            </div>
                        </div>
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
                                <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
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
      word-wrap:break-word;
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