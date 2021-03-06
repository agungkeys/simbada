<script>
    page.pageDestination("AsetTanah");
</script>
<script src="assets/dist/js/asetformdatautama.js" type="text/javascript"></script>
<script src="assets/dist/js/asettanah.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-news-paper"></i>
    </div>
    <div class="header-title">
        <h1>Aset Tanah</h1>
        <small>Pencarian Aset Tanah</small>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Aset Tanah</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <?php include'form_navigasi_export.php'; ?>
        <div id="table_aset_tanah" class="panel">
            <div id="gridasettanah" class="panel-body">
                <div class="table-responsive">
                    <table id="DataTableAsetTanah" class="table table-bordered table-striped table-hover" style="width: auto;">
                        <thead>
                            <tr>
                                <th>Kode&nbsp;Tanah</th>
                                <th style="width: 250px;">Sub&nbsp;Unit</th>
                                <th style="width: 250px;">Satuan&nbsp;Kerja</th>
                                <th>Nama&nbsp;Pemilik</th>
                                <th>Golongan&nbsp;Tanah</th>
                                <th style="width: 250px;">Nama&nbsp;Barang</th>
                                <th style="width: 250px;">Letak&nbsp;</th>
                                <th>Luas&nbsp;Tanah</th>
                                <th>Status&nbsp;Tanah</th>
                                <th>Tanggal&nbsp;</th>
                                <th>Nomor&nbsp;</th>
                                <th>Tahun&nbsp;Perolehan</th>
                                <th style="width: 100px;">Penggunaan&nbsp;</th>
                                <!-- <th>Batas&nbsp;Utara</th>
                                <th>Batas&nbsp;Timur</th>
                                <th>Batas&nbsp;Selatan</th> -->
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
        <div id="form_aset_tanah" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" hidden>
            <div class="panel panel-bd" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-10">
                                <h4>Perbaharui Detail Tanah</h4>
                            </div>
                            <!-- <div class="col-md-2 text-right">
                                <a href="#" onclick="tanah.clear();"><i class="panel-control-icon ti-reload"></i></a>
                            </div> -->
                        </div>
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
                                    <!-- <div class="col-md-12">
                                        
                                    </div> -->
                                    <div class="col-md-6">
                                        <label>Status Tanah</label>
                                        <select id="statustanah" name="statustanah" class="form-control"></select>
                                    </div>
                                    <div class="col-md-6 statustanahlainnya">
                                        <label>Status Tanah Lainnya</label>
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
                                <div id="tanggaldok-replace">
                                    <div id="tanggaldokumentanah" class="input-group date">
                                        <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                                    </div>
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
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Penggunaan</label>
                                <input type="text" name="penggunaan" class="form-control" id="penggunaan" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Asal Usul</label>
                                        <select id="asalusul" name="asalusul" class="form-control" ></select>
                                    </div>
                                    <div class="col-md-6 asalusullainnya">
                                        <label>Asal Usul Lainnya</label>
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