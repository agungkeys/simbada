<?php
    require ('engine/db_config.php');
    $sqll = "SELECT * FROM masterlokasi WHERE KodeLokasi = '".$locx."'"; 
    $resultt = $mysqli->query($sqll);
    $rowloks = mysqli_fetch_row($resultt);
?>
<script>
    page.pageDestination("Beranda")
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="header-icon">
        <i class="pe-7s-world"></i>
    </div>
    <div class="header-title">
        <!-- <h1>Selamat Datang - SIMBD v1.0.1</h1> -->
        <h1 style="font-family: arial">Sistem Informasi Manajemen Barang Daerah</h1>
        <span>Aplikasi Pengarsipan Aset <?php echo date('Y'); ?> Pemerintah Kabupaten Situbondo</span>
        <ol class="breadcrumb">
            <li><i class="pe-7s-home"></i> <span data-bind="text:page.pageDestination"></span></li>
        </ol>
    </div>
</section>
<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-sm-12 col-md-4">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-menu">
                        <i class="fa fa-bars"></i>
                    </div>
                    <div class="card-header-headshot">
                        <!-- <img src="./assets/dist/img/avatar-simbada.png"> -->
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-content-member">
                        <h4 class="m-t-0"><?php echo $row['full_name']; ?></h4>
                        <p class="m-0"><i class="pe-7s-map-marker"></i><?php echo $rowloks[3]; ?></p>
                        <p class="m-0" style="padding-top: 5px;">Anda Login Sebagai <b><?php echo $row['level']; ?></b></p>
                    </div>
                    <div class="card-content-languages">
                        <div class="card-content-languages-group" style="text-align: center;">
                            <span>Jangan lupa untuk selalu "Keluar" aplikasi setelah selesai dipergunakan.</span>
                            <!-- <div>
                                <h4>Speaks:</h4>
                            </div>
                            <div>
                                <ul>
                                    <li>English
                                        <div class="fluency fluency-4"></div>
                                    </li>
                                </ul>
                            </div> -->
                        </div>
                        <!-- <div class="card-content-languages-group">
                            <div>
                                <h4>Learning:</h4>
                            </div>
                            <div>
                                <ul>
                                    <li>Spanish,</li>
                                    <li>Russian,</li>
                                    <li>German</li>
                                </ul>
                            </div>
                        </div> -->
                    </div>
                    <!-- <div class="card-content-summary">
                        <p>Specialties are Creative UI, HTML5, CSS3, Semantic Web, Responsive Layouts, Web Standards Compliance, Performance Optimization, Cross Device Troubleshooting.</p>
                    </div> -->
                </div>
                <!-- <div class="card-footer">
                    <div class="card-footer-stats">
                        <div>
                            <p>PROJECTS:</p><i class="fa fa-users"></i><span>241</span>
                        </div>
                        <div>
                            <p>MESSAGES:</p><i class="fa fa-coffee"></i><span>350</span>
                        </div>
                        <div>
                            <p>Last online</p><span class="stats-small">3 days ago</span>
                        </div>
                    </div>
                    <div class="card-footer-message">
                        <h4><i class="fa fa-comments"></i> Message me</h4>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="col-sm-12 col-md-8">
            <div class="">
                <div class="col-md-6">
                    <div class="row">
                        <div class="social-widget">
                            <ul>
                                <li><a href="index.php?page=entryasset">
                                    <div class="fb_inner" style="background-color: #2ecc71;">
                                        <i class="pe-7s-note"></i>
                                        <span class="sc-num">Entry Aset</span>
                                        <small>Entry Aset Barang</small>
                                    </div>
                                </a></li>
                                <li><a href="index.php?page=datapenghapusan">
                                    <div class="g_plus_inner">
                                        <i class="pe-7s-trash"></i>
                                        <span class="sc-num">Penghapusan</span>
                                        <small>Data Penghapusan</small>
                                    </div>
                                </a></li>
                                <li><a href="index.php?page=bukuinventaris">
                                    <div class="g_plus_inner" style="background-color: #f39c12;">
                                        <i class="pe-7s-note2"></i>
                                        <span class="sc-num">Inventaris</span>
                                        <small>Laporan Inventaris</small>
                                    </div>
                                </a></li>
                                <li><a href="index.php?page=laporanrekapdinas">
                                    <div class="dribble_inner" style="background-color: #d35400;">
                                        <i class="pe-7s-notebook"></i>
                                        <span class="sc-num">Rekap Dinas</span>
                                        <small>Laporan Rekap Dinas</small>
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    </div>                
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="social-widget">
                            <ul>
                                <li><a href="index.php?page=laporankiba">
                                    <div class="fb_inner" style="background-color: #3498db;">
                                        <i class="pe-7s-server"></i>
                                        <span class="sc-num">KIB A</span>
                                        <small>Tanah</small>
                                    </div>
                                </a></li>
                                <li><a href="index.php?page=laporankibb">
                                    <div class="twitter_inner" style="background-color: #3498db;">
                                        <i class="pe-7s-server"></i>
                                        <span class="sc-num">KIB B</span>
                                        <small>Peralatan & Mesin</small>
                                    </div>
                                </a></li>
                                <li><a href="index.php?page=laporankibc">
                                    <div class="g_plus_inner" style="background-color: #3498db;">
                                        <i class="pe-7s-server"></i>
                                        <span class="sc-num">KIB C</span>
                                        <small>Gedung & Bangunan</small>
                                    </div>
                                </a></li>
                                <li><a href="index.php?page=laporankibd">
                                    <div class="dribble_inner" style="background-color: #3498db;">
                                        <i class="pe-7s-server"></i>
                                        <span class="sc-num">KIB D</span>
                                        <small>Jalan, Irigasi, Jaringan</small>
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</section> <!-- /.content -->