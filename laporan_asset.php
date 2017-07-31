<script>
    page.pageDestination("Laporan")
</script>
<script src="assets/dist/js/laporan.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-display2"></i>
    </div>
    <div class="header-title">
        <h1>Laporan</h1>
        <small>Pencarian dan Laporan</small>
        <ol class="breadcrumb">
            <li><a href="index.html"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Pencarian dan Laporan</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <div class="col-sm-12 col-md-3">
            <div class="panel panel-bd">
                <div class="panel-body">
                    <div id='external-events'>
                        <h4>Navigasi</h4>
                        <div class="menu-laporan-scroll">
							<ul id="tree-1">
                                <li><a href="tree-view.html#">Laporan KIB</a>
                                    <ul>
                                        <li onclick=""><span data-toggle="tooltip" data-placement="right" title="KIB-A (Tanah)"> KIB-A</span></li>
                                    	<li><span data-toggle="tooltip" data-placement="right" title="KIB-B (Peralatan dan Mesin)">KIB-B</span></li>
                                    	<li><span data-toggle="tooltip" data-placement="right" title="KIB-C (Gedung dan Bangunan)">KIB-C</span></li>
                                    	<li><span data-toggle="tooltip" data-placement="right" title="KIB-D (Jalan Irigasi dan Jaringan)">KIB-D</span></li>
                                    	<li><span data-toggle="tooltip" data-placement="right" title="KIB-E (Aset Tetap Lainnya)">KIB-E</span></li>
                                    	<li><span data-toggle="tooltip" data-placement="right" title="KIB-F (Konstruksi Dalam Pengerjaan)">KIB-F</span></li>

                                    </ul>
                                </li>
                                <li><i class="fa fa-folder-open"></i> Buku Inventaris</li>
                                <li><i class="fa fa-folder-open"></i> Lap. K I R</li>
                                <li><i class="fa fa-folder-open"></i> Lap. Rekap per Dinas</li>
                                <li><i class="fa fa-folder-open"></i> Lap. Rekap Mutasi</li>
                                <li><i class="fa fa-folder-open"></i> Daftar Mutasi Barang</li>
                                <li><i class="fa fa-folder-open"></i> Kode Rekening</li>
                            </ul>
                            <ul id="tree-2">
                                <li><a href="tree-view.html#">Pencarian Aset</a>
                                    <ul>
                                        <li>Tanah</li>
                                        <li>Jalan</li>
                                        <li>Jembatan</li>
                                        <li>Bangunan Air</li>
                                        <li>Instalasi</li>
                                        <li>Jaringan</li>
                                        <li>Bangunan Gedung</li>
                                        <li>Monumen</li>
                                        <li>Alat Besar</li>
                                        <li>Alat Angkutan</li>
                                        <li>Alat Bengkel</li>
                                        <li>Alat Pertanian</li>
                                        <li>Alat Kantor dan Rumah Tangga</li>
                                        <li>Alat Studio dan Komunikasi</li>
                                        <li>Alat Kedokteran</li>
                                        <li>Alat Laboratorium</li>
                                        <li>Buku</li>
                                        <li>Barang Bercorak Kesenian</li>
                                        <li>Hewan</li>
                                        <li>Tanaman</li>
                                        <li>Alat Keamanan</li>
                                        <li>Konstruksi Berjalan</li>
                                    </ul>
                                </li>
                                <li><i class="fa fa-file-o"></i> Data Penghapusan</li>
                            </ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-9">
            <div class="panel">
                <div class="panel-body">
                    <div id="notifikasi-laporan" hidden class="col-md-12" style="padding-top: 15px;">
						<div class="alert alert-info alert-dismissible" role="alert">
			                <strong><i class="fa fa-info-circle"></i></strong> Silahkan pilih item laporan pada menu navigasi disamping, untuk menampilkan laporan.
			            </div>
					</div>

					<div id="pencarian-laporan" class="col-md-12" style="padding-top: 15px;">
						<div class="panel panel-primary">
							<div class="panel-heading"><h4>Input Lokasi</h4></div>
							<div class="panel-body">
								<div class="row">
    								<div class="col-md-6">
    									<div class="form-group">
                                            <label>Tanggal Report</label>
                                            <div id="tanggalsurveikib" class="input-group date">
				                                <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
				                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Kep. Unit/ Satker</label>
                                            <input type="text" name="tanggalreport" class="form-control" id="kepunitsatkerja" data-bind="value: src.kepunitsatuankerja"/>
                                        </div>
    								</div>
				                    <div class="col-md-6">
				                    	<div class="form-group">
                                            <label>Kode Lokasi:</label><small class="text-muted"> <span id="previewidlokasi">-</span></small>
                                            <select id="kodelokasi" name="kodelokasi" class="form-control"></select>
                                        </div>
				                    	<div class="form-group">
                                            <label>Sumber Dana</label>
                                            <select id="sumberdana" name="sumberdana" class="form-control"></select>
                                        </div>
				                    </div>
				                    <hr>
				                    <div class="row">
				                    	<div class="col-md-12">
				                    		<div class="col-md-12">
				                    			<!-- <h4 class="m-t-0">Pilih Custom Tahun</h4> -->
	                                            <div class="toggle-example">
	                                                <input id="alldata" type="checkbox" checked data-toggle="toggle" data-on="All Data" data-off="Custom" data-onstyle="primary" data-offstyle="default">
	                                            </div>
				                    		</div>
                                        </div>
				                    	<div id="alldatacustom" class="col-md-12">
				                    		<div class="col-md-4">
	                                       		<div class="form-group">
		                                            <label>Tahun Awal</label>
		                                            <select name="tahunawal" id="tahunawal" class="form-control" data-bind="value: src.tahunawal">
						                                <option value="">Pilih Tahun...</option>
						                                <script>
						                                    var tahun = 2008;
						                                    var y = new Date();
						                                    for(i=y.getFullYear();i>=tahun;i--){
						                                        document.write("<option>" + i + "</option>");
						                                    }
						                                </script>
						                            </select>
		                                        </div>
	                                       	</div>
	                                       	<div class="col-md-4">
	                                       		<div class="form-group">
		                                            <label>Tahun Akhir</label>
		                                            <select name="tahunakhir" id="tahunakhir" class="form-control" data-bind="value: src.tahunakhir">
						                                <option value="">Pilih Tahun...</option>
						                                <script>
						                                    var tahun = 2008;
						                                    var y = new Date();
						                                    for(i=y.getFullYear();i>=tahun;i--){
						                                        document.write("<option>" + i + "</option>");
						                                    }
						                                </script>
						                            </select>
		                                        </div>
	                                       	</div>
	                                       	<div class="col-md-4">
	                                       		<div class="form-group">
		                                            <label>Semester</label>
		                                            <select name="semester" id="semester" class="form-control" data-bind="value: src.semester">
						                                <option value="">Pilih Semester...</option>
						                                <option value="1">1</option>
						                                <option value="2">2</option>
						                            </select>
		                                        </div>
	                                       	</div>
				                    	</div>
				                    </div>
				                    
				                    <!-- <hr> -->
                                   	
                               	</div>
							</div>
							<div class="panel-footer" style="text-align: right;"><button type="button" class="btn btn-primary w-md m-b-5" style="border-radius: 3px;" onclick="src.searchData();">Cari</button></div>
						</div>
					</div>
					<div id="viewpdf-laporan" class="col-md-12">
						<div id="pdfRenderer"></div>
					</div>
					<div id="tanah-laporan" hidden>
						<div class="col-md-12">
							<h4>Laporan Tanah</h4>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
</section>
<style type="text/css">
	#tree-1 li:hover{
		background: #eee;
	}
	/*#tree-1 li ul li:hover{
		background: #fff;
	}*/
	#tree-2 li:hover{
		background: #eee;
	}
	.menu-laporan-scroll{
		height: 600px;
		overflow: scroll;
	}
	#pdfRenderer {
	    max-width: 100%;
		height: 650px;
		/*border: 10px solid rgba(0,0,0,.2);*/
		margin: 15px 0 0 0;
	}
</style>