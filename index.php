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
$locx= $row['location'];

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
        <!-- Bootstrap toggle css -->
        <link href="assets/plugins/bootstrap-toggle/bootstrap-toggle.min.css" rel="stylesheet" type="text/css"/>
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

        <!-- Bootstrap toggle -->
        <script src="assets/plugins/bootstrap-toggle/bootstrap-toggle.min.js" type="text/javascript"></script>

        <!-- PdfObject -->
        <script src="assets/pdfobject/pdfobject.min.js" type="text/javascript"></script>

        <!-- jsPDF master -->
        <!-- <script src="assets/plugins/jspdf/jspdfdebug.js" type="text/javascript"></script> -->
        <script src="assets/plugins/jspdf/jspdf.min.js" type="text/javascript"></script>


        <!-- MaskMoney -->
        <script src="assets/plugins/maskmoney/jquery.maskMoney.min.js" type="text/javascript"></script>


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
                <i class="user_level hidden"><?php echo $row['level']; ?></i>
                <i class="user_location hidden"><?php echo $row['location']; ?></i>
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
                                <li class="entryasset"><a href="index.php?page=entryasset">Entri Aset</a></li>
                                <li class="pencarianaset">
                                    <a href="">Pencarian Aset
                                        <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li class="asettanah"><a href="index.php?page=asettanah">Tanah</a></li>
                                        <li class="asetjalan"><a href="index.php?page=asetjalan">Jalan</a></li>
                                        <li class="asetjembatan"><a href="index.php?page=asetjembatan">Jembatan</a></li>
                                        <li class="asetbangunanair"><a href="index.php?page=asetbangunanair">Bangunan Air</a></li>
                                        <li class="asetinstalasi"><a href="index.php?page=asetinstalasi">Instalasi</a></li>
                                        <li class="asetjaringan"><a href="index.php?page=asetjaringan">Jaringan</a></li>
                                        <li class="asetbangunangedung"><a href="index.php?page=asetbangunangedung">Bangunan Gedung</a></li>
                                        <li class="asetmonumen"><a href="index.php?page=asetmonumen">Monumen</a></li>
                                        <li class="asetalatbesar"><a href="index.php?page=asetalatbesar">Alat Besar</a></li>
                                        <li class="asetalatangkut"><a href="index.php?page=asetalatangkutan">Alat Angkutan</a></li>
                                        <li class="asetalatbengkel"><a href="index.php?page=asetalatbengkel">Alat Bengkel</a></li>
                                        <li class="asetalatpertanian"><a href="index.php?page=asetalatpertanian">Alat Pertanian</a></li>
                                        <li class="asetalatkantor"><a href="index.php?page=asetalatkantor">Alat Kantor dan Rumah Tangga</a></li>
                                        <li class="asetalatstudio"><a href="index.php?page=asetalatstudio">Alat Studio dan Komunikasi</a></li>
                                        <li class="asetalatkedokteran"><a href="index.php?page=asetalatkedokteran">Alat Kedokteran</a></li>
                                        <li class="asetalatlab"><a href="index.php?page=asetalatlaboratorium">Alat Laboratorium</a></li>
                                        <li class="asetbuku"><a href="index.php?page=asetbuku">Buku</a></li>
                                        <li class="asetbarangkesenian"><a href="index.php?page=asetbarangkesenian">Barang Bercorak Kesenian</a></li>
                                        <li class="asethewan"><a href="index.php?page=asethewan">Hewan</a></li>
                                        <li class="asettanaman"><a href="index.php?page=asettanaman">Tanaman</a></li>
                                        <li class="asetalatkeamanan"><a href="index.php?page=asetalatkeamanan">Alat Keamanan</a></li>
                                        <li class="asetkonstruksi"><a href="index.php?page=asetkonstruksi">Konstruksi Dalam Pengerjaan</a></li>
                                    </ul>
                                </li>
                                <li class="datapenghapusan"><a href="index.php?page=datapenghapusan">Data Penghapusan</a></li>
                                <li class="laporanasset">
                                    <a href="index.php?page=laporanasset">Laporan Aset
                                        <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li class="laporankib">
                                            <a href="">Laporan KIB
                                                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                            </a>
                                            <ul class="treeview-menu">
                                                <li class="laporankiba"><a href="index.php?page=laporankiba">KIB A</a></li>
                                                <li class="laporankibb"><a href="index.php?page=laporankibb">KIB B</a></li>
                                                <li class="laporankibc"><a href="index.php?page=laporankibc">KIB C</a></li>
                                                <li class="laporankibd"><a href="index.php?page=laporankibd">KIB D</a></li>
                                                <li class="laporankibe"><a href="index.php?page=laporankibe">KIB E</a></li>
                                                <li class="laporankibf"><a href="index.php?page=laporankibf">KIB F</a></li>
                                            </ul>
                                        </li>
                                        <li class="bukuinventaris"><a href="index.php?page=bukuinventaris">Buku Inventaris</a></li>
                                        <!-- <li class="laporankir"><a href="">Laporan KIR</a></li> -->
                                        <li class="laporanrekapdinas"><a href="index.php?page=laporanrekapdinas">Laporan Rekap Dinas</a></li>
                                        <!-- <li class="laporanrekapmutasi"><a href="">Laporan Rekap Mutasi</a></li> -->

                                        <!-- <li class="laporanmutasi"><a href="index.php?page=laporanmutasi">Laporan Mutasi</a></li> -->

                                        <!-- <li class="koderekening"><a href="">Kode Rekening</a></li> -->
                                        
                                        <li class="laporanpenghapusan">
                                            <a href="index.php?page=laporanpenghapusan">Laporan Penghapusan <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                            </a>
                                            <ul class="treeview-menu">
                                                <li class="asetdihapuskan"><a href="index.php?page=asetdihapuskan">Aset Dihapuskan</a></li>
                                                <li class="asetyangtelahdihibahkan"><a href="index.php?page=asetyangtelahdihibahkan">Aset Telah Dihibahkan</a></li>
                                                <li class="asetrusakberat"><a href="index.php?page=asetrusakberat">Aset Rusak Berat</a></li>
                                                <li class="kemitraandenganpihak3"><a href="index.php?page=kemitraandenganpihak3">Kemitraan Pihak Ke-3</a></li>
                                                <li class="asettidakberwujud"><a href="index.php?page=asettidakberwujud">Aset Tidak Berwujud</a></li>
                                                <li class="asetlainlain"><a href="index.php?page=asetlainlain">Aset Lain-Lainnya</a></li>
                                                <li class="asetextracountable"><a href="index.php?page=asetextracountable">Extra Countable (Kapitalisasi)</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

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
                    case 'entryasset': include "view/entryaset/entry_asset.php"; break;
                    // case 'laporanasset': include "laporan_asset.php"; break;
                    case 'masterbarang': include "view/master/master_barang.php"; break;
                    case 'masterlokasi': include "view/master/master_lokasi.php"; break;
                    case 'masteruser': include "view/master/master_user.php"; break;
                    case 'masteragama': include "view/master/master_agama.php"; break;
                    case 'masterkepemilikan': include "view/master/master_kepemilikan.php"; break;
                    case 'mastercurrency': include "view/master/master_currency.php"; break;
                    case 'masterkategoriformsurvei': include "view/master/master_kategori_form_survei.php"; break;
                    case 'masterdetailformsurvei': include "view/master/master_detail_form_survei.php"; break;

                    case 'laporankiba': include "view/laporankib/_laporan_kib_a.php"; break;
                    case 'laporankibb': include "view/laporankib/_laporan_kib_b.php"; break;
                    case 'laporankibc': include "view/laporankib/_laporan_kib_c.php"; break;
                    case 'laporankibd': include "view/laporankib/_laporan_kib_d.php"; break;
                    case 'laporankibe': include "view/laporankib/_laporan_kib_e.php"; break;
                    case 'laporankibf': include "view/laporankib/_laporan_kib_f.php"; break;
                    case 'bukuinventaris': include "view/bukuinventaris/_buku_inventaris.php"; break;
                    case 'laporanrekapdinas': include "view/laporanrekapdinas/_laporan_rekap_dinas.php"; break;
                    case 'laporanmutasi': include "_laporan_mutasi.php"; break;
                    case 'laporanpenghapusan': include "_laporan_penghapusan.php"; break;

                    case 'asettanah': include "view/aset/_aset_tanah.php"; break;
                    case 'asetjalan': include "view/aset/_aset_jalan.php"; break;
                    case 'asetjembatan': include "view/aset/_aset_jembatan.php"; break;
                    case 'asetbangunanair': include "view/aset/_aset_bangunan_air.php"; break;
                    case 'asetinstalasi': include "view/aset/_aset_instalasi.php"; break;
                    case 'asetjaringan': include "view/aset/_aset_jaringan.php"; break;
                    case 'asetbangunangedung': include "view/aset/_aset_bangunan_gedung.php"; break;
                    case 'asetmonumen': include "view/aset/_aset_monumen.php"; break;
                    case 'asetalatbesar': include "view/aset/_aset_alat_besar.php"; break;
                    case 'asetalatangkutan': include "view/aset/_aset_alat_angkutan.php"; break;
                    case 'asetalatbengkel': include "view/aset/_aset_alat_bengkel.php"; break;
                    case 'asetalatpertanian': include "view/aset/_aset_alat_pertanian.php"; break;
                    case 'asetalatkantor': include "view/aset/_aset_alat_kantor.php"; break;
                    case 'asetalatstudio': include "view/aset/_aset_alat_studio.php"; break;
                    case 'asetalatkedokteran': include "view/aset/_aset_alat_kedokteran.php"; break;
                    case 'asetalatlaboratorium': include "view/aset/_aset_alat_laboratorium.php"; break;
                    case 'asetbuku': include "view/aset/_aset_buku.php"; break;
                    case 'asetbarangkesenian': include "view/aset/_aset_barang_kesenian.php"; break;
                    case 'asethewan': include "view/aset/_aset_hewan.php"; break;
                    case 'asettanaman': include "view/aset/_aset_tanaman.php"; break;
                    case 'asetalatkeamanan': include "view/aset/_aset_alat_keamanan.php"; break;
                    case 'asetkonstruksi': include "view/aset/_aset_konstruksi.php"; break;


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
            function toRp(a,b,c,d,e){e=function(f){return f.split('').reverse().join('')};b=e(parseInt(a,10).toString());for(c=0,d='';c<b.length;c++){d+=b[c];if((c+1)%3===0&&c!==(b.length-1)){d+='.';}}return''+e(d)+',00'}
            function toRpp(a,b,c,d,e){e=function(f){return f.split('').reverse().join('')};b=e(parseInt(a,10).toString());for(c=0,d='';c<b.length;c++){d+=b[c];if((c+1)%3===0&&c!==(b.length-1)){d+='.';}}return''+e(d)}

            function toAngka(rp){return parseInt(rp.replace(/,.*|\D/g,''),10)}

            function callStyleMenu(){
                var pgMenu = page.pageDestination();
                // console.log(pgMenu)
                
                if (pgMenu=="Beranda"){
                    $(".beranda").addClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="Transaksi"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").addClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="Laporan"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }
                else if(pgMenu=="Barang"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="Lokasi"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="User"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="Agama"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="Kepemilikan"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="Currency"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="KategoriFormSurvei"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                }else if(pgMenu=="DetailFormSurvei"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").removeClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");
                }else if(pgMenu=="LaporanKIBA"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").addClass("active");
                    $(".laporankib").addClass("active");
                    $(".laporankiba").addClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");
                }else if(pgMenu=="LaporanKIBB"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").addClass("active");
                    $(".laporankib").addClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").addClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");
                }else if(pgMenu=="LaporanKIBC"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").addClass("active");
                    $(".laporankib").addClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").addClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");
                }else if(pgMenu=="LaporanKIBD"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").addClass("active");
                    $(".laporankib").addClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").addClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");
                }else if(pgMenu=="LaporanKIBE"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").addClass("active");
                    $(".laporankib").addClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").addClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");
                }else if(pgMenu=="LaporanKIBF"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").addClass("active");
                    $(".laporankib").addClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").addClass("active");

                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");
                }else if(pgMenu=="LaporanInventaris"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").addClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");

                    $(".bukuinventaris").addClass("active");
                    $(".laporanrekapdinas").removeClass("active");
                }else if(pgMenu=="LaporanRekapDinas"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").addClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");
                    
                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").addClass("active");
                }else if(pgMenu=="AsetTanah"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");
                    
                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                    $(".pencarianaset ").addClass("active");
                    $(".asettanah").addClass("active");
                    $(".asetjalan").removeClass("active");
                    $(".asetjembatan").removeClass("active");
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").removeClass("active");
                    $(".asetalatangkut").removeClass("active");
                    $(".asetalatbengkel").removeClass("active");
                    $(".asetalatpertanian").removeClass("active");
                    $(".asetalatkantor").removeClass("active");
                    $(".asetalatstudio").removeClass("active");
                    $(".asetalatkedokteran").removeClass("active");
                    $(".asetalatlab").removeClass("active");
                    $(".asetbuku").removeClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");
                }else if(pgMenu=="AsetJalan"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");
                    
                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                    $(".pencarianaset ").addClass("active");
                    $(".asettanah").removeClass("active");
                    $(".asetjalan").addClass("active");
                    $(".asetjembatan").removeClass("active");
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").removeClass("active");
                    $(".asetalatangkut").removeClass("active");
                    $(".asetalatbengkel").removeClass("active");
                    $(".asetalatpertanian").removeClass("active");
                    $(".asetalatkantor").removeClass("active");
                    $(".asetalatstudio").removeClass("active");
                    $(".asetalatkedokteran").removeClass("active");
                    $(".asetalatlab").removeClass("active");
                    $(".asetbuku").removeClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");
                }else if(pgMenu=="AsetJembatan"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");
                    
                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                    $(".pencarianaset ").addClass("active");
                    $(".asettanah").removeClass("active");
                    $(".asetjalan").removeClass("active");
                    $(".asetjembatan").addClass("active");
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").removeClass("active");
                    $(".asetalatangkut").removeClass("active");
                    $(".asetalatbengkel").removeClass("active");
                    $(".asetalatpertanian").removeClass("active");
                    $(".asetalatkantor").removeClass("active");
                    $(".asetalatstudio").removeClass("active");
                    $(".asetalatkedokteran").removeClass("active");
                    $(".asetalatlab").removeClass("active");
                    $(".asetbuku").removeClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");
                }else if(pgMenu=="AsetBangunanAir"){
                    $(".beranda").removeClass("active");
                    $(".transaksi").addClass("active");
                    $(".entryasset").removeClass("active");
                    
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

                    $(".laporanasset").removeClass("active");
                    $(".laporankib").removeClass("active");
                    $(".laporankiba").removeClass("active");
                    $(".laporankibb").removeClass("active");
                    $(".laporankibc").removeClass("active");
                    $(".laporankibd").removeClass("active");
                    $(".laporankibe").removeClass("active");
                    $(".laporankibf").removeClass("active");
                    
                    $(".bukuinventaris").removeClass("active");
                    $(".laporanrekapdinas").removeClass("active");

                    $(".pencarianaset ").addClass("active");
                    $(".asettanah").removeClass("active");
                    $(".asetjalan").removeClass("active");
                    $(".asetjembatan").removeClass("active");
                    $(".asetbangunanair").addClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").removeClass("active");
                    $(".asetalatangkut").removeClass("active");
                    $(".asetalatbengkel").removeClass("active");
                    $(".asetalatpertanian").removeClass("active");
                    $(".asetalatkantor").removeClass("active");
                    $(".asetalatstudio").removeClass("active");
                    $(".asetalatkedokteran").removeClass("active");
                    $(".asetalatlab").removeClass("active");
                    $(".asetbuku").removeClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");
                }
            }

            

            function capit(){
                
            }

            $(document).ready(function () {
                "use strict"; // Start of use strict
                // setTimeout(function(){
                //     $("img").parent().parent().attr('alt','www.000webhost.com')[2].remove();        
                // },3000);
                
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
                $.fn.capitalize = function () {
                    $.each(this, function () {
                        var split = this.value.split(' ');
                        for (var i = 0, len = split.length; i < len; i++) {
                            split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
                        }
                        this.value = split.join(' ');
                    });
                    return this;
                };


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