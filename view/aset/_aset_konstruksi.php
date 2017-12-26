<script>
    page.pageDestination("Konstruksi");
</script>
<script src="assets/dist/js/asetformdatautama.js" type="text/javascript"></script>
<script src="assets/dist/js/asetkonstruksi.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-news-paper"></i>
    </div>
    <div class="header-title">
        <h1>Aset Konstruksi Dalam Pengerjaan</h1>
        <small>Pencarian Aset Konstruksi Dalam Pengerjaan</small>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Aset Konstruksi Dalam Pengerjaan</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <?php include'form_navigasi_export.php'; ?>
        <div id="table_aset_alatkonstruksi" class="panel">
            <div id="gridasetalatkonstruksi" class="panel-body">
                <div class="table-responsive">
                    <table id="DataTableAsetAlatKonstruksi" class="table table-bordered table-striped table-hover" style="width: auto;">
                        <thead>
                            <tr>
                                <th>Kode&nbsp;Alat</th>
                                <th style="width: 250px;">Sub&nbsp;Unit</th>
                                <th style="width: 250px;">Satuan&nbsp;Kerja</th>
                                <th>Nama&nbsp;Pemilik</th>
                                <th style="width: 250px;">Nama&nbsp;Barang</th>
                                <th>Konstruksi</th>
                                <th style="width: 80px;">Letak</th>
                                <th>Luas&nbsp;Bangunan</th>
                                <th>Tingkat</th>
                                <th>Beton</th>
                                <th>Status&nbsp;Tanah</th>
                                <th>Tanggal&nbsp;Mulai</th>
                                <th style="width: 100px;">Kode&nbsp;Tanah</th>
                                <th>Dokumen</th>
                                <th>Tanggal&nbsp;Dokumen</th>
                                <th>Nomor&nbsp;Dokumen</th>
                                <!-- <th style="width: 100px;">Kondisi</th> -->
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
        <div id="form_aset_alatkonstruksi" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" hidden>
            <div class="panel panel-bd" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-10">
                                <h4>Perbaharui Detail Konstruksi</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <form>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama / Jenis Barang</label>
                                <input type="text" name="namajenisbarang" class="form-control" id="namajenisbarang" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Konstruksi Bangunan</label>
                                <select id="konstruksibangunan" name="konstruksibangunan" class="form-control"/>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Letak/ Alamat</label>
                                <input type="text" name="letakalamatkons" class="form-control" id="letakalamatkons" />
                            </div>
                        </div>
                        <div class="row col-md-12">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Luas Bangunan</label>
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="luaskonstruksi">
                                        <div class="input-group-addon" style="border-radius: 0px;">M</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label>&nbsp;</label>
                                </br>
                                <div class="checkbox checkbox-inline">
                                    <input type="checkbox" id="tingkatkonstruksi">
                                    <label for="tingkatkonstruksi"> Tingkat</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label>&nbsp;</label>
                                </br>
                                <div class="checkbox checkbox-inline">
                                    <input type="checkbox" id="betonkonstruksi">
                                    <label for="betonkonstruksi"> Beton</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Status Tanah</label>
                                <select id="statustanahkons" name="statustanahkons" class="form-control"/>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Mulai Proyek</label>
                                <div id="tanggalmulai" class="input-group date">
                                    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Kode Tanah</label>
                                <select id="kodetanahkons" name="kodetanahkons" class="form-control"/>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label>Dokumen Konstruksi</label>
                            </br>
                            <div class="checkbox checkbox-inline">
                                <input type="checkbox" id="dokkonstruksi">
                                <label for="dokkonstruksi"> Ada</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tanggal Dokumen</label>
                                <div id="tanggaldokkons-replace">
                                    <div id="tanggaldokkons" class="input-group date">
                                        <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Nomor Dokumen</label>
                                <input type="text" name="nodokumen" class="form-control" id="nodokumen" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Asal - Usul</label>
                                <select id="asalusulkonstruksi" name="asalusulkonstruksi" class="form-control"/>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <!-- <input type="text" maxlength="15" class="form-control" id="nilaiperolehan"> -->
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp </div>
                                    <input type="text" class="form-control" id="nilaiperolehankons">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Catatan / Keterangan</label>
                                <textarea class="form-control" id="keterangankons" rows="3"></textarea>
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