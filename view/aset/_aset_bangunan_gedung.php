<script>
    page.pageDestination("AsetBangunanGedung");
</script>
<script src="assets/dist/js/asetformdatautama.js" type="text/javascript"></script>
<script src="assets/dist/js/asetbangunangedung.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-news-paper"></i>
    </div>
    <div class="header-title">
        <h1>Aset Bangunan Gedung</h1>
        <small>Pencarian Aset Bangunan Gedung</small>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Aset Bangunan Gedung</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <?php include'form_navigasi_export.php'; ?>
        <div id="table_aset_bangunan" class="panel">
            <div id="gridasetbangunan" class="panel-body">
                <div class="table-responsive">
                    <table id="DataTableAsetBangunan" class="table table-bordered table-striped table-hover" style="width: auto;">
                        <thead>
                            <tr>
                                <th>Kode&nbsp;Bangunan</th>
                                <th style="width: 250px;">Sub&nbsp;Unit</th>
                                <th style="width: 250px;">Satuan&nbsp;Kerja</th>
                                <th>Nama&nbsp;Pemilik</th>
                                <th>Jenis&nbsp;Bangunan</th>
                                <th style="width: 250px;">Nama&nbsp;Bangunan</th>
                                <th style="width: 250px;">Alamat</th>
                                <th>Luas&nbsp;Tanah</th>
                                <th>Luas&nbsp;Bangunan</th>
                                <th>Konstruksi</th>
                                <th>Tanggal&nbsp;Dokumen</th>
                                <th>Tingkat</th>
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
        <div id="form_aset_bangunan" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" hidden>
            <div class="panel panel-bd" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-10">
                                <h4>Perbaharui Detail Bangunan Gedung</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <!-- <form> -->
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Golongan Bangunan</label>
                                <select id="golongangedung" name="golongangedung" class="form-control"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nama Bangunan</label>
                                <input type="text" name="namagedung" class="form-control" id="namagedung" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Letak Alamat</label>
                                <!-- <div class="row"> -->
                                    <div class="input-group">
                                        <!-- <input type="text" name="nilaiperolehangedung" class="form-control" id="nilaiperolehangedung" /> -->
                                        <select type="text" name="alamatgedung" class="form-control" id="alamatgedung"></select>
                                        <div class="input-group-addon" style="border-radius: 0px; background-color: #E5343D; color: #fff;" onclick="ged.resetLetak();"><i class="glyphicon glyphicon-remove"></i></div>
                                        
                                    </div>
                                    
                                    <!-- <button class="btn btn-danger btn-sm"></button> -->
                                <!-- </div> -->
                                
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Luas Tanah</label>
                                <input type="number" class="form-control" id="luastanahgedung">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Luas Bangunan</label>
                                <input type="number" class="form-control" id="luasbangunangedung">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tahun Perolehan</label>
                                <select name="tahunperolehangedung" id="tahunperolehangedung" class="form-control">
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
                                <label>Konstruksi Bangunan</label>
                                <select id="konstruksigedung" name="konstruksigedung" class="form-control" style="width: 100%;"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Kondisi Bangunan</label>
                                <select name="kondisigedung" id="kondisigedung" class="form-control" style="width: 100%;">
                                                <option value="">Pilih Kondisi...</option>
                                                <option value="100">Baik</option>
                                                <option value="50">Kurang Baik</option>
                                                <option value="1">Rusak Berat</option>
                                            </select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label>Dokumen Bangunan</label>
                            </br>
                            <div class="checkbox checkbox-inline">
                                <input type="checkbox" id="dokumenimb">
                                <label for="dokumenimb"> Bersertifikat</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tanggal Dokumen</label>
                                <div id="tanggalimbgedung" class="input-group date">
                                    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Asal-usul</label>
                                <select id="asalusulgedung" name="asalusulgedung" class="form-control"></select>
                                <input type="" name="" hidden>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group asalusulgedunglainnya">
                                <label>Asal-usul Lainnya</label>
                                <input type="text" name="asalusulgedunglainnya" class="form-control" id="asalusulgedunglainnya" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Bangunan</label>
                                </br>
                                <div class="checkbox checkbox-inline">
                                    <input type="checkbox" id="tingkatgedung">
                                    <label for="tingkatgedung"> Tingkat</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Nilai Perolehan</label>
                                <div class="input-group">
                                    <div class="input-group-addon" style="border-radius: 0px;">Rp</div>
                                    <input type="text" name="nilaiperolehangedung" class="form-control" id="nilaiperolehangedung" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Catatan / Keterangan</label>
                                <textarea class="form-control" id="keterangangedung" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Tambah Ruangan</label>
                                <div class="input-group">
                                    <input type="text" name="namaruangangedung[]" class="form-control" id="namaruangangedung" data-bind="value: ged.nmruangan" />
                                    <div class="input-group-addon" style="border-radius: 0px; background-color: #337ab7; color: #f9f9f9" data-bind="click: ged.addruangan"><i class="glyphicon glyphicon-plus"></i></div>
                                </div>
                            </div>
                            <div class="row">
                                <!-- <div class="col-md-12 text-right">
                                    <button type="button" class="btn btn-labeled btn-primary m-b-5">
                                        <span class="btn-label">
                                            <i class="glyphicon glyphicon-plus"></i>
                                        </span>
                                        Tambah Ruangan                
                                    </button>
                                </div> -->
                                <div class="col-md-12">
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nama Ruangan</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody data-bind="foreach: ged.ruangan">
                                            <tr>
                                                <td data-bind="text: ($index()+1), attr:{name:($index()+1)}"></td>
                                                <td data-bind="text: namaruangan, attr: {id:'nmrg_'+($index()+1)}"></td>
                                                <td class="text-center"><button class="btn btn-danger btn-sm" data-bind="click: ged.removeruangan">
                                                <i class="glyphicon glyphicon-trash"></i></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    <!-- </form>   -->
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