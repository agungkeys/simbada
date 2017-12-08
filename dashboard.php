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
        <h1 style="font-family: arial">Selamat Datang - Sistem Informasi Manajemen Barang Daerah v1.0.1</h1>
        <span><b><?php echo $row['full_name']; ?></b> anda masuk sebagai: <b><?php echo $row['level']; ?></b> SKPD: <b><?php echo $rowloks[3]; ?></b></span>
        <ol class="breadcrumb">
            <li><i class="pe-7s-home"></i> <span data-bind="text:page.pageDestination"></span></li>
        </ol>
    </div>
</section>
<!-- Main content -->
<section class="content">
    <div class="row">
        <!-- <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="button panel panel-bd">
                <div class="panel-body">
                    <div class="statistic-box">
                        <h2>Entry Data Asset</h2>
                        <div class="small">% New Sessions</div>
                        <div class="sparkline1 text-center"></div>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="panel panel-bd">
                <div class="panel-body">
                    <div class="statistic-box">
                        <h2><span class="count-number">321</span> <span class="slight"><i class="fa fa-play fa-rotate-90 c-white"> </i> +10%</span> </h2>
                        <div class="small">Total visitors</div>
                        <div class="sparkline2 text-center"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="panel panel-bd">
                <div class="panel-body">
                    <div class="statistic-box">
                        <h2><span class="count-number">789</span> <span class="slight"><i class="fa fa-play fa-rotate-270 text-warning"> </i> +29%</span></h2>
                        <div class="small">Total users</div>
                        <div class="sparkline3 text-center"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="panel panel-bd">
                <div class="panel-body">
                    <div class="statistic-box">
                        <h2><span class="count-number">171</span><span class="slight"><i class="fa fa-play fa-rotate-90 c-white"> </i> +24%</span></h2>
                        <div class="small">Bounce Rate</div>
                        <div class="sparkline4 text-center"></div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</section> <!-- /.content -->