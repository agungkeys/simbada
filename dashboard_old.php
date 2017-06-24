<?php
session_start();

if(!isset($_SESSION['user_session']))
{
 header("Location: index.html");
}

include_once 'engine/configdb.php';

$stmt = $db_con->prepare("SELECT * FROM users WHERE user_id=:uid");
$stmt->execute(array(":uid"=>$_SESSION['user_session']));
$row=$stmt->fetch(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Dashboard SIMBD v1.0.1 | Sistem Informasi Manajemen Barang Daerah</title>

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
        <!-- Theme style rtl -->
        <!--<link href="assets/dist/css/styleBD-rtl.css" rel="stylesheet" type="text/css"/>-->
        <!-- End Theme Layout Style
        =====================================================================-->
    </head>
    <body class="hold-transition sidebar-mini">
        <!-- Site wrapper -->
        <div class="wrapper">
            <header class="main-header"> 
                <a href="dashboard.php" class="logo"> <!-- Logo -->
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
                                    <li><a href="index.html#"><i class="pe-7s-settings"></i> Settings</a></li>
                                    <li><a href="controller/logout.php"><i class="pe-7s-key"></i> Logout</a></li>
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
                        <li class="active">
                            <a href="index.html"><i class="ti-home"></i> <span>Beranda</span>
                                <!-- <span class="pull-right-container">
                                    <span class="label label-success pull-right">v.1</span>
                                </span> -->
                            </a>
                        </li>
                        <li class="treeview">
                            <a href="index.html"><i class="ti-pencil-alt"></i> <span>Transaksi</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="entry_data_asset.html">Entry Data Asset</a></li>
                                <li><a href="#">Pencarian dan Laporan Asset</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-package"></i> <span>Referensi</span>
                                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                            </a>
                            <ul class="treeview-menu">
                                <li>
                                    <a href="index.html#">Master
                                        <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li><a href="#"> Master Barang</a></li>
                                        <li><a href="#"> Master Lokasi</a></li>
                                        <li><a href="#"> Master User</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Kepemilikan</a></li>
                                <li><a href="#">Mata Uang</a></li>
                                <li>
                                    <a href="index.html#">Data Form Survei
                                        <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li><a href="#"> Gol. Alat Angkutan</a></li>
                                        <li><a href="#"> Gol. Alat Bengkel</a></li>
                                        <li><a href="#"> Gol. Alat Besar</a></li>
                                        <li><a href="#"> Gol. Alat Kantor</a></li>
                                        <li><a href="#"> Gol. Alat Keamanan</a></li>
                                        <li><a href="#"> Gol. Alat Kedokteran</a></li>
                                        <li><a href="#"> Gol. Alat Laboraturium</a></li>
                                        <li><a href="#"> Gol. Alat Pertanian</a></li>
                                        <li><a href="#"> Gol. Alat Studio</a></li>
                                        <li><a href="#"> Gol. Bangunan</a></li>
                                        <li><a href="#"> Gol. Bangunan Air</a></li>
                                        <li><a href="#"> Gol. Bangunan Gedung</a></li>
                                        <li><a href="#"> Gol. Barang Kesenian</a></li>
                                        <li><a href="#"> Gol. Buku</a></li>
                                        <li><a href="#"> Gol. Hewan</a></li>
                                        <li><a href="#"> Gol. Instalasi</a></li>
                                        <li><a href="#"> Gol. Jaringan</a></li>
                                        <li><a href="#"> Gol. Monumen</a></li>
                                        <li><a href="#"> Gol. Tanah</a></li>
                                        <li><a href="#"> Gol. Tanaman</a></li>
                                        <li><a href="#"> Jenis Dinding</a></li>
                                        <li><a href="#"> Jenis Jalan</a></li>
                                        <li><a href="#"> Jenis Jembatan</a></li>
                                        <li><a href="#"> Klarifikasi Jembatan</a></li>
                                        <li><a href="#"> Jenis Konstruksi</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <!-- <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-paint-bucket"></i><span>UI Elements</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="buttons.html">Buttons</a></li>
                                <li><a href="tabs.html">Tabs</a></li>
                                <li><a href="notification.html">Notification</a></li>
                                <li><a href="tree-view.html">Tree View</a></li>
                                <li><a href="progressbars.html">Progressber</a></li>
                                <li><a href="list.html">List View</a></li>
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="panels.html">Panels</a></li>
                                <li><a href="modals.html">Modals</a></li>
                                <li><a href="icheck_toggle_pagination.html">iCheck, Toggle, Pagination</a></li>
                                <li><a href="labels-badges-alerts.html">Labels, Badges, Alerts</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-pencil-alt"></i> <span>Forms</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="forms_basic.html">Basic Forms</a></li>
                                <li><a href="forms_validation.html">Validation Forms</a></li>
                                <li><a href="forms_cropper.html">Cropper</a></li>
                                <li><a href="form_file_upload.html">Forms File Upload</a></li>
                                <li><a href="forms_editor_ck.html">CK Editor</a></li>
                                <li><a href="forms_editor_summernote.html">Summernote</a></li>
                                <li><a href="form_wizard.html">Form Wizaed</a></li>
                                <li><a href="forms_editor_markdown.html">Markdown</a></li>
                                <li><a href="forms_editor_trumbowyg.html">Trumbowyg</a></li>
                                <li><a href="form_editor_wysihtml5.html">Wysihtml5</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-layout"></i> <span>Tables</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="table.html">Simple tables</a></li>
                                <li><a href="dataTables.html">Data tables</a></li>
                                <li><a href="footable.html">FooTable</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-location-pin"></i> <span>Maps</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="maps_data.html">Data Maps</a></li>
                                <li><a href="maps_jvector.html">Jvector Maps</a></li>
                                <li><a href="maps_google.html">Google map</a></li>
                                <li><a href="maps_snazzy.html">Snazzy Map</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-bar-chart-alt"></i><span>Charts</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="charts_flot.html">Flot Chart</a></li>
                                <li><a href="charts_Js.html">Chart js</a></li>
                                <li><a href="charts_morris.html">Morris Charts</a></li>
                                <li><a href="charts_sparkline.html">Sparkline Charts</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-email"></i> <span>Mailbox</span>
                                <span class="pull-right-container">
                                    <small class="label pull-right bg-yellow">19</small>
                                    <small class="label pull-right bg-green">13</small>
                                    <small class="label pull-right bg-red">3</small>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="mailbox.html">Mailbox</a></li>
                                <li class="disabled">
                                    <a href="index.html#">Mailbox 2
                                        <span class="pull-right-container">
                                            <small class="label pull-right bg-green">coming</small>
                                        </span>
                                    </a>
                                </li>
                                <li><a href="mailDetails.html">Mailbox Details</a></li>
                                <li><a href="compose.html">Compose</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-spray"></i>
                                <span>Icons</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="icons_bootstrap.html">Bootstrap Icons</a></li>
                                <li><a href="icons_fontawesome.html">Fontawesome Icon</a></li>
                                <li><a href="icons_flag.html">Flag Icons</a></li>
                                <li><a href="icons_material.html">Material Icons</a></li>
                                <li><a href="icons_weather.html">Weather Icons </a></li>
                                <li><a href="icons_line.html">Line Icons</a></li>
                                <li><a href="icons_pe.html">Pe Icons</a></li>
                                <li><a href="icon_socicon.html">Socicon Icons</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="widgets.html">
                                <i class="ti-microsoft"></i> <span>Widgets</span>
                                <span class="pull-right-container">
                                    <small class="label pull-right bg-green">new</small>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="calender.html">
                                <i class="ti-calendar"></i><span>Calendar</span>
                                <span class="pull-right-container">
                                    <small class="label pull-right bg-red">5</small>
                                    <small class="label pull-right bg-yellow">21</small>
                                </span>
                            </a>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-ruler-pencil"></i> <span>App Views</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="invoice.html">Invoice</a></li>
                                <li><a href="timeline.html">Vertical timeline</a></li>
                                <li><a href="pricing.html">Pricing Table</a></li>
                                <li><a href="slider.html">Slider</a></li>
                                <li><a href="carousel.html">Carousel</a></li>
                                <li><a href="code_editor.html">Code editor</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-layers"></i> <span>Other page</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="login.html">Login</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="forget_password.html">Forget password</a></li>
                                <li><a href="lockscreen.html">Lockscreen</a></li>
                                <li><a href="404.html">404 Error</a></li>
                                <li><a href="505.html">505 Error</a></li>
                                <li><a href="blank.html">Blank Page</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="gridSystem.html">
                                <i class="ti-layout-grid2"></i> <span>Grid Style</span>
                                <span class="pull-right-container">
                                    <small class="label pull-right bg-green">new</small>
                                </span>
                            </a>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-layout"></i> <span>Layout</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="layout_fixed.html">Layout Fixed</a></li>
                                <li><a href="layout_boxed.html">Layout Boxed</a></li>
                                <li><a href="layout_collapsed_sidebar.html">Layout Collapsed</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="index.html#">
                                <i class="ti-direction-alt"></i> <span>Multilevel</span>
                                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="index.html#">Level One</a></li>
                                <li>
                                    <a href="index.html#">Level One
                                        <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li><a href="index.html#"> Level Two</a></li>
                                        <li>
                                            <a href="index.html#">Level Two
                                                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                                            </a>
                                            <ul class="treeview-menu">
                                                <li><a href="index.html#">Level Three</a></li>
                                                <li><a href="index.html#">Level Three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="index.html#">Level One</a></li>
                            </ul>
                        </li>
                        <li><a href="documentation/index.html" target="_blank"><i class="ti-bookmark"></i><span>Documentation</span></a></li>
                        <li class="header">LABELS</li>
                        <li><a href="index.html#"><i class="fa fa-circle color-green"></i> <span>Important</span></a></li>
                        <li><a href="index.html#"><i class="fa fa-circle color-red"></i> <span>Warning</span></a></li>
                        <li><a href="index.html#"><i class="fa fa-circle color-yellow"></i> <span>Information</span></a></li> -->
                    </ul>
                </div> <!-- /.sidebar -->
            </aside>
            <!-- =============================================== -->
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <div class="header-icon">
                        <i class="pe-7s-world"></i>
                    </div>
                    <div class="header-title">
                        <!-- <h1>Selamat Datang - SIMBD v1.0.1</h1> -->
                        <h1 style="font-family: arial">Selamat Datang - Sistem Informasi Manajemen Barang Daerah v1.0.1</h1>
                        <span><b><?php echo $row['full_name']; ?></b> anda masuk sebagai: <i><?php echo $row['level']; ?></i></span>
                        <ol class="breadcrumb">
                            <li><i class="pe-7s-home"></i> Beranda</li>
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
            </div> <!-- /.content-wrapper -->
            <footer class="main-footer" style="height: 50px;">
                <div class="pull-right hidden-xs">SIMBD <b>Version</b> 1.0.1</div>
                <!-- <strong>Copyright &copy; 2017 <a href="index.html#">Web Application Solution</a>.</strong> All rights reserved. <i class="fa fa-heart color-green"></i> -->
            </footer>
        </div>
        <!-- ./wrapper -->
        <!-- Start Core Plugins
        =====================================================================-->
        <!-- jQuery -->
        <script src="assets/plugins/jQuery/jquery-1.12.4.min.js" type="text/javascript"></script>
        <!-- jquery-ui --> 
        <script src="assets/plugins/jquery-ui-1.12.1/jquery-ui.min.js" type="text/javascript"></script>
        <!-- Bootstrap -->
        <script src="assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
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
        <!-- End Core Plugins
        =====================================================================-->
        <!-- Start Page Lavel Plugins
        =====================================================================-->
        <!-- Toastr js -->
        <script src="assets/plugins/toastr/toastr.min.js" type="text/javascript"></script>
        <!-- Sparkline js -->
        <script src="assets/plugins/sparkline/sparkline.min.js" type="text/javascript"></script>
        <!-- Data maps js -->
        <script src="assets/plugins/datamaps/d3.min.js" type="text/javascript"></script>
        <script src="assets/plugins/datamaps/topojson.min.js" type="text/javascript"></script>
        <script src="assets/plugins/datamaps/datamaps.all.min.js" type="text/javascript"></script>
        <!-- Counter js -->
        <script src="assets/plugins/counterup/waypoints.js" type="text/javascript"></script>
        <script src="assets/plugins/counterup/jquery.counterup.min.js" type="text/javascript"></script>
        <!-- Emojionearea -->
        <script src="assets/plugins/emojionearea/emojionearea.min.js" type="text/javascript"></script>
        <!-- Monthly js -->
        <script src="assets/plugins/monthly/monthly.js" type="text/javascript"></script>
        <!-- End Page Lavel Plugins
        =====================================================================-->
        <!-- Start Theme label Script
        =====================================================================-->
        <!-- Dashboard js -->
        <script src="assets/dist/js/dashboard.js" type="text/javascript"></script>
        <!-- End Theme label Script
        =====================================================================-->
        <script>
            $(document).ready(function () {

                "use strict"; // Start of use strict

                // notification
                setTimeout(function () {
                    toastr.options = {
                        closeButton: true,
                        progressBar: true,
                        showMethod: 'slideDown',
                        timeOut: 4000
//                        positionClass: "toast-top-left"
                    };
                    toastr.success('Beta Version', 'Welcome to SIMBD v1.0.1');

                }, 1300);

                //counter
                $('.count-number').counterUp({
                    delay: 10,
                    time: 5000
                });

                //data maps
                var basic_choropleth = new Datamap({
                    element: document.getElementById("map1"),
                    projection: 'mercator',
                    fills: {
                        defaultFill: "#37a000",
                        authorHasTraveledTo: "#fa0fa0"
                    },
                    data: {
                        USA: {fillKey: "authorHasTraveledTo"},
                        JPN: {fillKey: "authorHasTraveledTo"},
                        ITA: {fillKey: "authorHasTraveledTo"},
                        CRI: {fillKey: "authorHasTraveledTo"},
                        KOR: {fillKey: "authorHasTraveledTo"},
                        DEU: {fillKey: "authorHasTraveledTo"}
                    }
                });

                var colors = d3.scale.category10();

                window.setInterval(function () {
                    basic_choropleth.updateChoropleth({
                        USA: colors(Math.random() * 10),
                        RUS: colors(Math.random() * 100),
                        AUS: {fillKey: 'authorHasTraveledTo'},
                        BRA: colors(Math.random() * 50),
                        CAN: colors(Math.random() * 50),
                        ZAF: colors(Math.random() * 50),
                        IND: colors(Math.random() * 50)
                    });
                }, 2000);

                //Chat list
                $('.chat_list').slimScroll({
                    size: '3px',
                    height: '305px',
                    allowPageScroll: true,
                    railVisible: true
                });

                // Message
                $('.message_inner').slimScroll({
                    size: '3px',
                    height: '320px',
                    allowPageScroll: true,
                    railVisible: true
                            // position: 'left'
                });

                //emojionearea
                $(".emojionearea").emojioneArea({
                    pickerPosition: "top",
                    tonesStyle: "radio"
                });

                //monthly calender
                $('#m_calendar').monthly({
                    mode: 'event',
                    //jsonUrl: 'events.json',
                    //dataType: 'json'
                    xmlUrl: 'events.xml'
                });


            });
        </script>
    </body>
</html>