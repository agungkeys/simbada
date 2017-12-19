<script>
    page.pageDestination("DataPenghapusan");
</script>
<script src="assets/dist/js/asetformdatautama.js" type="text/javascript"></script>
<script src="assets/dist/js/datapenghapusan.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-trash"></i>
    </div>
    <div class="header-title">
        <h1>Data Penghapusan</h1>
        <small>Pencarian Data Aset Yang Telah Dihapuskan</small>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Data Penghapusan</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <?php include'view/aset/form_navigasi_export.php'; ?>
        <div id="table_penghapusan" class="panel">
            <div id="gridpenghapusan" class="panel-body">
                <div class="table-responsive">
                    <table id="DataTablePenghapusan" class="table table-bordered table-striped table-hover" style="width: auto;">
                        <thead>
                            <tr>
                                <th>Kode&nbsp;Alat</th>
                                <th style="width: 250px;">Sub&nbsp;Unit</th>
                                <th style="width: 250px;">Satuan&nbsp;Kerja</th>
                                <th>Jenis&nbsp;Barang</th>
                                <th>Nama&nbsp;Barang</th>
                                <th>Merk</th>
                                <th>Bahan</th>
                                <th>Ukuran</th>
                                <th>Tahun&nbsp;Pembelian</th>
                                <th>Jumlah</th>
                                <th>Nilai&nbsp;Perolehan</th>
                                <th>Asal&nbsp;Usul</th>
                                <th>Asal&nbsp;Usul&nbsp;Lainnya</th>
                                <th style="width: 200px;">Keterangan&nbsp;</th>
                                <th style="width: 200px;">Status&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="modal fade" id="modal-penghapusan" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <!-- <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Satuan Kerja Perangkat Daerah (SKPD)</h4>
            </div> -->
            <div class="modal-body">
                <div class="panel-body">
                    <div class="flag-icon-inner">
                        <ul class="icon_list text-center">
                            <li class="kembalikan">
                                <i class="glyphicon glyphicon-export"></i>
                                <span class="icon_name"><h5>KEMBALIKAN</h5></span>
                            </li>
                            <li class="hapus">
                                <i class="glyphicon glyphicon-trash"></i>
                                <span class="icon_name"><h5>HAPUS PERMANEN</h5></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
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