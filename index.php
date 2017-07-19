<?php
session_start();

if(!isset($_SESSION['user_session']))
{
 header("Location: login.html");
}

include_once 'engine/configdb.php';

$stmt = $db_con->prepare("SELECT * FROM user WHERE user_id=:uid");
$stmt->execute(array(":uid"=>$_SESSION['user_session']));
$row=$stmt->fetch(PDO::FETCH_ASSOC);

$usr= $row['user_name'];
$fn= $row['full_name'];
$level= $row['level'];
$loc= $row['location'];

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>SIMBADA v1.0.1 | Sistem Informasi Manajemen Barang Daerah</title>

        <!-- Favicon and touch icons -->
        <link rel="shortcut icon" href="assets/dist/img/ico/favicon.png" type="image/x-icon">
        <!-- <link rel="apple-touch-icon" type="image/x-icon" href="assets/dist/img/ico/apple-touch-icon-57-precomposed.png">
        <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="assets/dist/img/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="assets/dist/img/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="assets/dist/img/ico/apple-touch-icon-144-precomposed.png"> -->

        <!-- Start Global Mandatory Style
        =====================================================================-->
        <!-- jquery-ui css -->
        <link href="assets/plugins/jquery-ui-1.12.1/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
        <!-- Bootstrap -->
        <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/bootstrap-select/css/bootstrap-select.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css"/>
        <!-- Bootstrap rtl -->
        <!--<link href="assets/bootstrap-rtl/bootstrap-rtl.min.css" rel="stylesheet" type="text/css"/>-->
        <!-- Lobipanel css -->
        <link href="assets/plugins/lobipanel/lobipanel.min.css" rel="stylesheet" type="text/css"/>
        <!-- Pace css -->
        <link href="assets/plugins/pace/flash.css" rel="stylesheet" type="text/css"/>
        <!-- Font Awesome -->
        <link href="assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <!-- Pe-icon -->
        <link href="assets/pe-icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet" type="text/css"/>
        <!-- Themify icons -->
        <link href="assets/themify-icons/themify-icons.css" rel="stylesheet" type="text/css"/>
        <!-- modals css -->
        <link href="assets/plugins/modals/component.css" rel="stylesheet" type="text/css"/>

        <!-- Tooltipster -->
        <link href="assets/tooltipster/dist/css/tooltipster.bundle.min.css" rel="stylesheet" type="text/css"/>

        <!-- End Global Mandatory Style
        =====================================================================-->
        <!-- Start page Label Plugins 
        =====================================================================-->
        <!-- Toastr css -->
        <link href="assets/plugins/toastr/toastr.css" rel="stylesheet" type="text/css"/>
        <!-- Emojionearea -->
        <link href="assets/plugins/emojionearea/emojionearea.min.css" rel="stylesheet" type="text/css"/>
        <!-- Monthly css -->
        <link href="assets/plugins/monthly/monthly.css" rel="stylesheet" type="text/css"/>
        <!-- End page Label Plugins 
        =====================================================================-->
        <!-- Start Theme Layout Style
        =====================================================================-->
        <!-- Theme style -->
        <link href="assets/dist/css/styleBD.css" rel="stylesheet" type="text/css"/>
        <!-- dataTables css -->
        <link href="assets/plugins/datatables/dataTables.min.css" rel="stylesheet" type="text/css"/>
        <!-- Sweet Alert CSS -->
        <link href="assets/plugins/sweetalert/sweetalert.css" rel="stylesheet" type="text/css"/>
        <link href="assets/plugins/toastr/toastr.css" rel="stylesheet" type="text/css"/>
        <!-- Select2CSS -->
        <link href="assets/select2/select2.min.css" rel="stylesheet" type="text/css"/>
        <!-- Theme style rtl -->
        <!--<link href="assets/dist/css/styleBD-rtl.css" rel="stylesheet" type="text/css"/>-->
        <!-- End Theme Layout Style
        =====================================================================-->

        <!-- Start Core Plugins
        =====================================================================-->
        <!-- jQuery -->
        <script src="assets/plugins/jQuery/jquery-1.12.4.min.js" type="text/javascript"></script>
        <!-- jquery-ui --> 
        <script src="assets/plugins/jquery-ui-1.12.1/jquery-ui.min.js" type="text/javascript"></script>
        <!-- Bootstrap -->
        <script src="assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="assets/bootstrap-select/js/bootstrap-select.min.js" type="text/javascript"></script>
        <script src="assets/bootstrap-datepicker/js/bootstrap-datepicker.min.js" type="text/javascript"></script>
        <script src="assets/bootstrap-datepicker/locales/bootstrap-datepicker.id.min.js" type="text/javascript"></script>
        <!-- lobipanel -->
        <script src="assets/plugins/lobipanel/lobipanel.min.js" type="text/javascript"></script>
        <!-- Pace js -->
        <script src="assets/plugins/pace/pace.min.js" type="text/javascript"></script>
        <!-- SlimScroll -->
        <script src="assets/plugins/slimScroll/jquery.slimscroll.min.js" type="text/javascript"></script>
        <!-- FastClick -->
        <script src="assets/plugins/fastclick/fastclick.min.js" type="text/javascript"></script>
        <!-- AdminBD frame -->
        <script src="assets/dist/js/frame.js" type="text/javascript"></script>
        <!-- Select2 -->
        <script src="assets/select2/select2.min.js" type="text/javascript"></script>
        <!-- End Core Plugins
        =====================================================================-->
        <!-- Start Page Lavel Plugins
        =====================================================================-->
        <!-- iCheck js -->
        <script src="assets/plugins/icheck/icheck.min.js" type="text/javascript"></script>
        <!-- dataTables js -->
        <script src="assets/plugins/datatables/dataTables.min.js" type="text/javascript"></script>
        <!-- Toastr js -->
        <script src="assets/plugins/toastr/toastr.min.js" type="text/javascript"></script>
        <!-- Sparkline js -->
        <script src="assets/plugins/sparkline/sparkline.min.js" type="text/javascript"></script>
        <!-- Data maps js -->
        <!-- <script src="assets/plugins/datamaps/d3.min.js" type="text/javascript"></script>
        <script src="assets/plugins/datamaps/topojson.min.js" type="text/javascript"></script>
        <script src="assets/plugins/datamaps/datamaps.all.min.js" type="text/javascript"></script> -->
        <!-- Counter js -->
        <script src="assets/plugins/counterup/waypoints.js" type="text/javascript"></script>
        <script src="assets/plugins/counterup/jquery.counterup.min.js" type="text/javascript"></script>
        <!-- Emojionearea -->
        <script src="assets/plugins/emojionearea/emojionearea.min.js" type="text/javascript"></script>
        <!-- Monthly js -->
        <script src="assets/plugins/monthly/monthly.js" type="text/javascript"></script>
        <!-- Tooltipster -->
        <script src="assets/tooltipster/dist/js/tooltipster.bundle.min.js" type="text/javascript"></script>
        <!-- End Page Lavel Plugins
        =====================================================================-->
        <!-- Start Theme label Script
        =====================================================================-->
        <!-- Moment js -->
        <script src="assets/dist/js/moment.min.js" type="text/javascript"></script>
        <!-- Dashboard js -->
        <script src="assets/dist/js/dashboard.js" type="text/javascript"></script>
        <!-- Jquery Validate -->
        <script src="assets/bootstrap/js/jquery.validate.min.js" type="text/javascript"></script>
        <!-- Sweet Alert -->
        <script src="assets/plugins/sweetalert/sweetalert.min.js" type="text/javascript"></script>
        <script src="assets/plugins/toastr/toastr.min.js" type="text/javascript"></script>
        <!-- Underscore -->
        <script src="assets/underscore/underscore.js" type="text/javascript"></script>
        <!-- KnockoutJs -->
        <script src="assets/knockoutjs/knockout-3.4.2.js" type="text/javascript"></script>

        <!-- Modal js -->
        <script src="assets/plugins/modals/classie.js" type="text/javascript"></script>
        <script src="assets/plugins/modals/modalEffects.js" type="text/javascript"></script>

        <!-- PdfObject -->
        <script src="assets/pdfobject/pdfobject.min.js" type="text/javascript"></script>

        <!-- End Theme label Script
        =====================================================================-->
        <script type="text/javascript">
            var page = {
                pageDestination:ko.observable("")
            };
            // if()
        </script>

    </head>
    <body class="hold-transition sidebar-mini">
        <!-- Site wrapper -->
        <div class="wrapper">
            <header class="main-header"> 
                <i class="user_name hidden"><?php echo $row['user_name']; ?></i>
                <a href="index.php?page=dashboard" class="logo" style="
    border-bottom: 3px solid rgba(55, 160, 0, 0.50);
"> <!-- Logo -->
                    <span class="logo-mini">
                        <!--<b>A</b>BD-->
                        <img src="assets/dist/img/mini-logo.png" alt="">
                    </span>
                    <span class="logo-lg">
                        <!--<b>Admin</b>BD-->
                        <img src="assets/dist/img/logo-new.png" alt="">
                    </span>
                </a>
                <!-- Header Navbar -->
                <nav class="navbar navbar-static-top">
                    <a href="index.html#" class="sidebar-toggle" data-toggle="offcanvas" role="button"> <!-- Sidebar toggle button-->
                        <span class="sr-only">Toggle navigation</span>
                        <span class="pe-7s-keypad"></span>
                    </a>
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">

                            <!-- Messages -->

                            <!-- Notifications -->

                            <!-- Tasks -->
                            
                            <!-- settings -->
                            <li class="dropdown dropdown-user">
                                <a href="index.html#" class="dropdown-toggle" data-toggle="dropdown"> <i class="pe-7s-settings"></i></a>
                                <ul class="dropdown-menu">
                                    <!-- <li><a href="profile.html"><i class="pe-7s-users"></i> User Profile</a></li> -->
                                    <!-- <li><a href="index.html#"><i class="pe-7s-settings"></i> Pengaturan</a></li> -->
                                    <li><a href="index.php?page=keluar"><i class="pe-7s-key"></i> Keluar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <!-- =============================================== -->
            <!-- Left side column. contains the sidebar -->
            <aside class="main-sidebar">
                <!-- sidebar -->
                <div class="sidebar">
                    <!-- Sidebar user panel -->
                    <!-- <div class="user-panel text-center">
                        <div class="image">
                            <img src="assets/dist/img/user2-160x160.png" class="img-circle" alt="User Image">
                        </div>
                        <div class="info">
                            <p>Admin</p>
                            <a href="index.html#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div> -->
                    <!-- search form -->
                    <!-- <form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search...">
                            <span class="input-group-btn">
                                <button type="submit" name="search" id="search-btn" class="btn"><i class="fa fa-search"></i></button>
                            </span>
                        </div>
                    </form> --> 
                    <!-- /.search form -->

                    <!-- sidebar menu -->
                    <ul class="sidebar-menu">
                        <!-- <li class="header">MAIN NAVIGATION</li> -->
                        <li class="beranda">
                            <a href="index.php?page=dashboard"><i class="ti-home"></i> <span>Beranda</span>
                                <!-- <span class="pull-right-container">
                                    <span class="label label-success pull-right">v.1</span>
                                </span> -->
                            </a>
                        </li>
                        <li class="transaksi treeview">
                            <a href="#"><i class="ti-pencil-alt"></i> <span>Transaksi</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li class="entryasset"><a href="index.php?page=entryasset">Entry Asset</a></li>
                                <li class="laporanasset"><a href="index.php?page=laporanasset">Laporan Asset</a></li>
                            </ul>
                        </li>
                        <li class="referensi treeview">
                            <a href="#">
                                <i class="ti-package"></i> <span>Referensi</span>
                                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                            </a>
                            <ul class="treeview-menu">
                                <li class="master">
                                    <a href="#">Master
                                        <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li class="barang"><a href="index.php?page=masterbarang"> Barang</a></li>
                                        <li class="lokasi"><a href="index.php?page=masterlokasi"> Lokasi</a></li>
                                        <li class="user"><a href="index.php?page=masteruser"> User</a></li>
                                        <li class="agama"><a href="index.php?page=masteragama"> Agama</a></li>
                                    </ul>
                                </li>
                                <li class="kepemilikan"><a href="index.php?page=masterkepemilikan">Kepemilikan</a></li>
                                <li class="currency"><a href="index.php?page=mastercurrency">Mata Uang</a></li>
                                <li class="dataformsurvei">
                                    <a href="#">Data Form Survei
                                        <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li class="kategoriformsurvei"><a href="index.php?page=masterkategoriformsurvei"> Kategori Survei</a></li>
                                        <li class="detailformsurvei"><a href="index.php?page=masterdetailformsurvei"> Detail Survei</a></li>
                                        <!-- <li class=""><a href="#"> ==================</a></li>
                                        <li class="golalatangkutan"><a href="#"> Gol. Alat Angkutan</a></li>
                                        <li class="golalatbengkel"><a href="#"> Gol. Alat Bengkel</a></li>
                                        <li class="golalatbesar"><a href="#"> Gol. Alat Besar</a></li>
                                        <li class="golalatkantor"><a href="#"> Gol. Alat Kantor</a></li>
                                        <li class="golalatkeamanan"><a href="#"> Gol. Alat Keamanan</a></li>
                                        <li class="golalatkedokteran"><a href="#"> Gol. Alat Kedokteran</a></li>
                                        <li class="golalatlaboraturium"><a href="#"> Gol. Alat Laboraturium</a></li>
                                        <li class="golalatpertanian"><a href="#"> Gol. Alat Pertanian</a></li>
                                        <li class="golalatstudio"><a href="#"> Gol. Alat Studio</a></li>
                                        <li class="golbangunan"><a href="#"> Gol. Bangunan</a></li>
                                        <li class="golbangunanair"><a href="#"> Gol. Bangunan Air</a></li>
                                        <li class="golbangunangedung"><a href="#"> Gol. Bangunan Gedung</a></li>
                                        <li class="golbarangkesenian"><a href="#"> Gol. Barang Kesenian</a></li>
                                        <li class="golbuku"><a href="#"> Gol. Buku</a></li>
                                        <li class="golhewan"><a href="#"> Gol. Hewan</a></li>
                                        <li class="golinstalasi"><a href="#"> Gol. Instalasi</a></li>
                                        <li class="goljaringan"><a href="#"> Gol. Jaringan</a></li>
                                        <li class="golmonumen"><a href="#"> Gol. Monumen</a></li>
                                        <li class="goltanah"><a href="#"> Gol. Tanah</a></li>
                                        <li class="goltanaman"><a href="#"> Gol. Tanaman</a></li>
                                        <li class="jenisdinding"><a href="#"> Jenis Dinding</a></li>
                                        <li class="jenisjalan"><a href="#"> Jenis Jalan</a></li>
                                        <li class="jenisjembatan"><a href="#"> Jenis Jembatan</a></li>
                                        <li class="klarifikasijembatan"><a href="#"> Klarifikasi Jembatan</a></li>
                                        <li class="jeniskonstruksi"><a href="#"> Jenis Konstruksi</a></li> -->
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="keluar">
                            <a href="index.php?page=keluar"><i class="ti-key"></i> <span>Keluar</span>
                            </a>
                        </li>
                    </ul>
                </div> <!-- /.sidebar -->
            </aside>
            <!-- =============================================== -->
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
            <?php
                $page = (isset($_GET['page']))? $_GET['page'] : "main";
                switch ($page) {
                    case 'entryasset': include "entry_asset.php"; break;
                    case 'laporanasset': include "laporan_asset.php"; break;
                    case 'masterbarang': include "master_barang.php"; break;
                    case 'masterlokasi': include "master_lokasi.php"; break;
                    case 'masteruser': include "master_user.php"; break;
                    case 'masteragama': include "master_agama.php"; break;
                    case 'masterkepemilikan': include "master_kepemilikan.php"; break;
                    case 'mastercurrency': include "master_currency.php"; break;

                    case 'masterkategoriformsurvei': include "master_kategori_form_survei.php"; break;
                    case 'masterdetailformsurvei': include "master_detail_form_survei.php"; break;

                    case 'keluar': include "controller/logout.php"; break;
                    default : include 'dashboard.php'; 
                }
            ?>
            </div> <!-- /.content-wrapper -->
            <footer class="main-footer" style="height: 50px;">
                <div class="pull-right hidden-xs">SIMBADA <b>Version</b> 1.0.1 | Aplikasi Pengarsipan Aset 2017 Pemerintah Kabupaten Situbondo</div>
                <!-- <strong>Copyright &copy; 2017 <a href="index.html#">Web Application Solution</a>.</strong> All rights reserved. <i class="fa fa-heart color-green"></i> -->
            </footer>
        </div>
        <!-- ./wrapper -->
        <style type="text/css">
            label.error{
                color: red;
                font-weight: none!important;
                font-size: 11px;
            }
            .selection .select2-selection{
                border-radius: 0px;
                height: 32px;
                border: 1px solid #ddd;
            }
            .select2-dropdown{
                border-color: #ddd !important;
            }   
            .select2-dropdown .select2-search__field{
                border-color: #ddd !important;
            }
            .bootstrap-selectpicker {
                margin-bottom: 0px; 
                border-radius: 0px;
            }
            .btn-group.bootstrap-select{
                width: 100% !important;
            }
            .btn.dropdown-toggle.btn-default{
                border-radius: 0px !important;
            }
            .input-group-addon{
                border-radius: 0px !important;
            }
            li.dropdown-header{
                font-weight: bold !important;
                font-size: 14px !important;
            }
        </style>
        <script>
            
            function toRp(a,b,c,d,e){e=function(f){return f.split('').reverse().join('')};b=e(parseInt(a,10).toString());for(c=0,d='';c<b.length;c++){d+=b[c];if((c+1)%3===0&&c!==(b.length-1)){d+='.';}}return'Rp\t'+e(d)+',00'}

            function toAngka(rp){return parseInt(rp.replace(/,.*|\D/g,''),10)}

            function callStyleMenu(){
                var pgMenu = page.pageDestination();
                // console.log(pgMenu)
                
                if (pgMenu=="Beranda"){
                    $(".beranda").addClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").removeClass("active");
                    $(".master").removeClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="Transaksi"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").addClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").removeClass("active");
                    $(".master").removeClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="Laporan"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").addClass("active");
                    $(".referensi").removeClass("active");
                    $(".master").removeClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }
                else if(pgMenu=="Barang"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").addClass("active");
                    $(".master").addClass("active");
                    $(".barang").addClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="Lokasi"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").addClass("active");
                    $(".master").addClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").addClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="User"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").addClass("active");
                    $(".master").addClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").addClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="Agama"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").addClass("active");
                    $(".master").addClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").addClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="Kepemilikan"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").addClass("active");
                    $(".master").removeClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").addClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="Currency"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").addClass("active");
                    $(".master").removeClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").addClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").removeClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="KategoriFormSurvei"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").addClass("active");
                    $(".master").removeClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").addClass("active");
                    $(".kategoriformsurvei").addClass("active");
                    $(".detailformsurvei").removeClass("active");
                }else if(pgMenu=="DetailFormSurvei"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    $(".laporanasset").removeClass("active");
                    $(".referensi").addClass("active");
                    $(".master").removeClass("active");
                    $(".barang").removeClass("active");
                    $(".lokasi").removeClass("active");
                    $(".user").removeClass("active");
                    $(".agama").removeClass("active");
                    $(".currency").removeClass("active");
                    $(".kepemilikan").removeClass("active");
                    $(".matauang").removeClass("active");
                    $(".dataformsurvei").addClass("active");
                    $(".kategoriformsurvei").removeClass("active");
                    $(".detailformsurvei").addClass("active");
                }  
            }
            $(document).ready(function () {
                "use strict"; // Start of use strict
                callStyleMenu();
                // notification
//                 setTimeout(function () {
//                     toastr.options = {
//                         closeButton: true,
//                         progressBar: true,
//                         showMethod: 'slideDown',
//                         timeOut: 1500
// //                        positionClass: "toast-top-left"
//                     };
//                     toastr.success('Beta Version', 'Welcome to SIMBD v1.0.1');

//                 }, 1300);

                //counter
                $('.count-number').counterUp({
                    delay: 10,
                    time: 5000
                });

                //data maps
                // var basic_choropleth = new Datamap({
                //     element: document.getElementById("map1"),
                //     projection: 'mercator',
                //     fills: {
                //         defaultFill: "#37a000",
                //         authorHasTraveledTo: "#fa0fa0"
                //     },
                //     data: {
                //         USA: {fillKey: "authorHasTraveledTo"},
                //         JPN: {fillKey: "authorHasTraveledTo"},
                //         ITA: {fillKey: "authorHasTraveledTo"},
                //         CRI: {fillKey: "authorHasTraveledTo"},
                //         KOR: {fillKey: "authorHasTraveledTo"},
                //         DEU: {fillKey: "authorHasTraveledTo"}
                //     }
                // });

                // var colors = d3.scale.category10();

                // window.setInterval(function () {
                //     basic_choropleth.updateChoropleth({
                //         USA: colors(Math.random() * 10),
                //         RUS: colors(Math.random() * 100),
                //         AUS: {fillKey: 'authorHasTraveledTo'},
                //         BRA: colors(Math.random() * 50),
                //         CAN: colors(Math.random() * 50),
                //         ZAF: colors(Math.random() * 50),
                //         IND: colors(Math.random() * 50)
                //     });
                // }, 2000);
                ko.applyBindings(page);
                $('.tooltip').tooltipster();
            });
        </script>
    </body>
</html>