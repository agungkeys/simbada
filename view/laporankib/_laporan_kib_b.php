<script>
    page.pageDestination("LaporanKIBB")
</script>
<script src="assets/dist/js/laporankibb.js" type="text/javascript"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-display2"></i>
    </div>
    <div class="header-title">
        <h1>Laporan KIB B</h1>
        <small>Laporan KIB B. Peralatan dan Mesin</small>
        <ol class="breadcrumb">
            <li><a href="index.php"><i class="pe-7s-home"></i> Beranda</a></li>
            <li class="active">Laporan KIB B</li>
        </ol>
    </div>
</section>
<!-- Main content -->

<section class="content">
    <div class="row">
        <div id="pencarian-laporan" class="col-md-12" style="padding-top: 15px;">
			<div class="panel panel-primary">
				<div class="panel-heading"><h4>Input Lokasi <span id="textinputkib"></span></h4></div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-4">
							<div class="form-group">
                                <label>Tanggal Laporan</label>
                                <div id="tanggalsurveikib" class="input-group date">
	                                <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	                            </div>
                            </div>
                           <!--  <div class="form-group">
                                <label>Kep. Unit/ Satker</label>
                                <input type="text" name="tanggalreport" class="form-control" id="kepunitsatkerja"/>
                            </div> -->
						</div>
	                    <div class="col-md-4">
	                    	<div class="form-group">
                                <label>Sumber Dana</label>
                                <select id="sumberdana" name="sumberdana" class="form-control"></select>
                            </div>
                        </div>
                        <div class="col-md-4">
	                    	<div class="form-group">
                                <label>Satuan Kerja</label>
                                <select id="kodelokasi" name="kodelokasi" class="form-control"></select>
                            </div>
	                    </div>
	                    <div class=" col-md-12" id="lokasi-preview" hidden>
	                    	<div class="row" style="display: -webkit-box;">
	                    		<div class="col-md-4" style="background-color: rgba(66, 177, 202, 0.22)">
			                    	<div class="form-group">
                                        <label>Kode Lokasi:</label><div class=""> <span id="previewidlokasi"></span></div>
                                    </div>
			                    </div>
			                    <div class="col-md-4" style="background-color: rgba(51, 123, 183, 0.27)">
			                    	<div class="form-group">
                                        <label>Unit:</label><div class=""> <span id="previewunitlokasi"></span></div>
                                    </div>
			                    </div>
			                    <div class="col-md-4" style="background-color: rgba(51, 73, 183, 0.25)">
			                    	<div class="form-group">
                                        <label>Sub Unit:</label><div class=""> <span id="previewsublokasi"></span></div>
                                    </div>
			                    </div>
	                    	</div>
		                    <div class="row" style="display: -webkit-box;">
		                    	<div class="col-md-6" style="background-color: rgba(85, 183, 51, 0.33)">
			                    	<div class="form-group">
                                        <label>Kepala Unit/ Satuan Kerja:</label><div class=""> <span id="previewkepunit"></span></div>
                                    </div>
			                    </div>
			                    <div class="col-md-6" style="background-color: rgba(183, 123, 51, 0.18)">
			                    	<div class="form-group">
                                        <label>Kepala Bidang/ Pengurus Barang:</label><div class=""> <span id="previewkepbid"></span></div>
                                    </div>
			                    </div>
		                    </div>
		                    </br>
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
                                        <select name="tahunawal" id="tahunawal" class="form-control" data-bind="value: src.valuetawal" onchange="selectTahunAll();">
			                                <option value="">Pilih Tahun...</option>
			                                <script>
			                                    var tahunawal = 1800;
			                                    var y = new Date();
			                                    for(i=y.getFullYear();i>=tahunawal;i--){
			                                        document.write("<option>" + i + "</option>");
			                                    }
			                                </script>
			                                <option value="0">0</option>
			                            </select>
                                    </div>
                               	</div>
                               	<div class="col-md-4">
                               		<div id="tahunakhirfilter" class="form-group" hidden>
                                        <label>Tahun Akhir</label>
                                        <select name="tahunakhir" id="tahunakhir" class="form-control">
			                                <option value="">Pilih Tahun...</option>
			                               
			                            </select>
                                    </div>
                               	</div>
	                    	</div>
	                    </div>
	                    
	                    <!-- <hr> -->
                       	
                   	</div>
				</div>
				<div class="panel-footer" style="text-align: right;"><button type="button" class="btn btn-default w-md m-b-5" style="border-radius: 3px;" onclick="src.resetFormSearch();"><i class="fa fa-times"></i> Bersihkan</button> <button type="button" class="btn btn-primary w-md m-b-5" style="border-radius: 3px;" onclick="src.generatepdf();"><i class="fa fa-search"></i> Cari</button></div>
			</div>
		</div>
		<div id="kibakembali" class="col-md-12 text-right" hidden>
			<button class="btn btn-primary" onclick="src.backtosearch();"><i class="fa fa-refresh"></i> Cari Kembali</button>
		</div>
		<div class="col-md-12">
			<div id="viewpdf-laporan" hidden>
				<div id="pdfRenderer">
				</div>
			</div>
		</div>	
    </div>
</section>
<style type="text/css">
	#pdfRenderer{
		background-image: url("assets/svg-loaders/oval.svg");
		background-repeat: no-repeat;
		background-position: center top;
	}
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
	.toggle.btn.btn-primary{
		width: 100px;
	}
	th {
	    vertical-align: middle;
	    text-align:center;
	}
</style>