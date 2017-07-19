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
    	<div class="col-md-12">
    		<div class="mailbox">
    			<div class="mailbox-body">
    				<div class="row m-0">
    					<div class="col-sm-4 p-0 inbox-nav">
    						<div class="mailbox-sidebar" style="padding: 12px 0 12px 0;">
    							<div class="profile-usermenu">
    								<h6>Navigasi</h6>
    							</div>
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
    					<div class="col-sm-12 p-0 inbox-mail">
    						<div class="mailbox-content">
    							<div class="col-md-12" style="padding-top: 15px;">
    								<div class="alert alert-info alert-dismissible" role="alert">
						                <strong><i class="fa fa-info-circle"></i></strong> Silahkan pilih item laporan pada menu navigasi disamping, untuk menampilkan laporan.
						            </div>
	    						</div>

	    						<div class="col-md-12">
	    							<div class="panel panel-primary">
	    								<div class="panel-heading">Input Lokasi</div>
	    								<div class="panel-body">
	    									<div class="form-group row">
						                        <label class="col-md-3 col-form-label">Tanggal Report</label>
						                        <div class="col-md-4">
						                            <div id="tanggalsurveikib" class="input-group date">
						                                <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						                            </div>
						                        </div>
						                    </div>
						                    <div class="form-group row">
						                        <label class="col-md-3 col-form-label">Kep. Unit/ Satker</label>
						                        <div class="col-md-4">
						                            <input type="text" name="tanggalreport" class="form-control" id="tanggalreport" />
						                        </div>
						                    </div>
						                    <hr>
						                    <div class="row">
							                    <div class="col-md-6">
							                    	<div class="form-group row">
								                    	<div class="col-md-12">
									                    	<div class="i-check">
			                                                    <input tabindex="7" type="radio" id="minimal-radio-1" name="minimal-radio" checked>
			                                                    <label for="minimal-radio-1">Input Kode Lokasi</label>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div class="form-group row">
								                        <label class="col-md-4 col-form-label">Kode Lokasi</label>
								                        <div class="col-md-8">
								                            <select id="kodelokasi" name="kodelokasi" class="form-control"></select>
								                        </div>
								                    </div>
							                    </div>
							                    <div class="col-md-6">
							                    	<div class="form-group row">
			                                            <div class="col-md-12">
			                                                <div class="i-check">
			                                                    <input tabindex="8" type="radio" id="minimal-radio-2" name="minimal-radio">
			                                                    <label for="minimal-radio-2">Pilih Bagian</label>
			                                                </div>
					                                    </div>     
								                    </div>
								                    <div class="form-group row">
								                        <label class="col-md-4 col-form-label">Unit</label>
								                        <div class="col-md-8">
								                            <input type="text" name="tanggalreport" class="form-control" id="tanggalreport" />
								                        </div>
								                    </div>
								                    <div class="form-group row">
								                        <label class="col-md-4 col-form-label">Sub Unit</label>
								                        <div class="col-md-8">
								                            <input type="text" name="tanggalreport" class="form-control" id="tanggalreport" />
								                        </div>
								                    </div>
								                    <div class="form-group row">
								                        <label class="col-md-4 col-form-label">Satuan Kerja</label>
								                        <div class="col-md-8">
								                            <input type="text" name="tanggalreport" class="form-control" id="tanggalreport" />
								                        </div>
								                    </div>
							                    </div>
							                </div>
						                    <hr>
	                                       	<div class="row">
	                                       		<div class="col-md-6">
	                                       			<div class="form-group row">
								                        <label class="col-md-4 col-form-label">Kepemilikan</label>
								                        <div class="col-md-8">
								                            <select id="kepemilikan" name="kepemilikan" class="form-control"></select>
								                        </div>
								                    </div>
	                                       		</div>
	                                       		<div class="col-md-6">
	                                       			<div class="form-group row">
								                        <label class="col-md-4 col-form-label">Sumber Dana</label>
								                        <div class="col-md-8">
								                            <select id="sumberdana" name="sumberdana" class="form-control"></select>
								                        </div>
								                    </div>
	                                       		</div>
	                                       	</div>
	    								</div>
	    								<div class="panel-footer"><button class="btn btn-primary">Cari</button></div>
	    							</div>
	    						</div>
    						</div>	
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</section>
<style type="text/css">
	/*#tree-1 li:hover{
		background: #eee;
	}*/
	/*#tree-1 li ul li:hover{
		background: #fff;
	}*/
	/*#tree-2 li:hover{
		background: #eee;
	}*/
	.menu-laporan-scroll{
		height: 600px;
		overflow: scroll;
	}
</style>