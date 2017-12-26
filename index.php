<?php
session_start();

if(!isset($_SESSION['user_session']))
{
 header("Location: login.html");
}

include_once 'engine/configdb.php';
include_once 'controller/global_function.php';

$stmt = $db_con->prepare("SELECT * FROM user WHERE user_id=:uid");
$stmt->execute(array(":uid"=>$_SESSION['user_session']));
$row=$stmt->fetch(PDO::FETCH_ASSOC);

$usr= $row['user_name'];
$fn= $row['full_name'];
$level= $row['level'];
$locx= $row['location'];

$stmtl = $db_con->prepare("SELECT * FROM masterlokasi WHERE KodeLokasi = :loccxx");
$stmtl->execute(array(":loccxx"=>$locx));
$rowl=$stmtl->fetch(PDO::FETCH_ASSOC);
$locations= $rowl['SatuanKerja'];

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>SIMBADA v1.0 | Sistem Informasi Manajemen Barang Daerah</title>

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
                        <img src="assets/dist/img/logo-new-1.png" alt="">
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
                                    <li><a><i class="pe-7s-user"></i> <?php echo $fn; ?></a></li>
                                    <li><a><i class="pe-7s-culture"></i> <?php echo limit_text($locations, 20); ?></a></li>
                                    <!-- <li><a href="index.html#"><i class="pe-7s-settings"></i> Pengaturan</a></li> -->
                                    <li> <a href="index.php?page=keluar"><i class="pe-7s-key" style="padding-right: 5px; padding-left: 4px;"></i> Keluar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <!-- =============================================== -->
            <!-- Left side column. contains the sidebar -->
            <?php
                if($level != 'Admin'){
                    include 'menu_pegawai.php';
                }else{
                    include 'menu_admin.php';
                }
            ?>
            
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

                    case 'datapenghapusan': include "view/datapenghapusan/datapenghapusan.php"; break;

                    case 'laporankiba': include "view/laporankib/_laporan_kib_a.php"; break;
                    case 'laporankibb': include "view/laporankib/_laporan_kib_b.php"; break;
                    case 'laporankibc': include "view/laporankib/_laporan_kib_c.php"; break;
                    case 'laporankibd': include "view/laporankib/_laporan_kib_d.php"; break;
                    case 'laporankibe': include "view/laporankib/_laporan_kib_e.php"; break;
                    case 'laporankibf': include "view/laporankib/_laporan_kib_f.php"; break;
                    case 'bukuinventaris': include "view/bukuinventaris/_buku_inventaris.php"; break;
                    case 'laporanrekapdinas': include "view/laporanrekapdinas/_laporan_rekap_dinas.php"; break;
                    // case 'laporanmutasi': include "_laporan_mutasi.php"; break;

                    case 'lapasetdihapuskan': include "view/laporanpenghapusan/_laporan_x.php"; break;
                    case 'lapasettelahdihibahkan': include "view/laporanpenghapusan/_laporan_xx.php"; break;
                    case 'lapasetrusakberat': include "view/laporanpenghapusan/_laporan_xxx.php"; break;
                    case 'lapasetkemitraan': include "view/laporanpenghapusan/_laporan_xxxx.php"; break;
                    case 'lapasettidakberwujud': include "view/laporanpenghapusan/_laporan_xxxxx.php"; break;
                    case 'lapasetlainlainnya': include "view/laporanpenghapusan/_laporan_xxxxxx.php"; break;
                    case 'lapasetextracountable': include "view/laporanpenghapusan/_laporan_xxxxxxx.php"; break;

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
                <div class="pull-right hidden-xs">SIMBADA <b>Version</b> 1.0 | Aplikasi Pengarsipan Aset <?php echo date('Y'); ?> Pemerintah Kabupaten Situbondo</div>
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
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
                    
                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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
                    
                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="DataPenghapusan"){
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

                    $(".pencarianaset ").removeClass("active");
                    $(".asettanah").removeClass("active");
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

                    $(".datapenghapusan").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
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

                    $(".datapenghapusan").removeClass("active");
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

                    $(".datapenghapusan").removeClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AsetInstalasi"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AsetJaringan"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AsetBangunanGedung"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AsetMonumen"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatBesar"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatAngkutan"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").removeClass("active");
                    $(".asetalatangkut").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatBengkel"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").removeClass("active");
                    $(".asetalatangkut").removeClass("active");
                    $(".asetalatbengkel").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatPertanian"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").removeClass("active");
                    $(".asetalatangkut").removeClass("active");
                    $(".asetalatbengkel").removeClass("active");
                    $(".asetalatpertanian").addClass("active");
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

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatKantorRumahTangga"){
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
                    $(".asetbangunanair").removeClass("active");
                    $(".asetinstalasi").removeClass("active");
                    $(".asetjaringan").removeClass("active");
                    $(".asetbangunangedung").removeClass("active");
                    $(".asetmonumen").removeClass("active");
                    $(".asetalatbesar").removeClass("active");
                    $(".asetalatangkut").removeClass("active");
                    $(".asetalatbengkel").removeClass("active");
                    $(".asetalatpertanian").removeClass("active");
                    $(".asetalatkantor").addClass("active");
                    $(".asetalatstudio").removeClass("active");
                    $(".asetalatkedokteran").removeClass("active");
                    $(".asetalatlab").removeClass("active");
                    $(".asetbuku").removeClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatStudio"){
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
                    $(".asetalatstudio").addClass("active");
                    $(".asetalatkedokteran").removeClass("active");
                    $(".asetalatlab").removeClass("active");
                    $(".asetbuku").removeClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatKedokteran"){
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
                    $(".asetalatkedokteran").addClass("active");
                    $(".asetalatlab").removeClass("active");
                    $(".asetbuku").removeClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatLaboratorium"){
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
                    $(".asetalatlab").addClass("active");
                    $(".asetbuku").removeClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatBuku"){
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
                    $(".asetbuku").addClass("active");
                    $(".asetbarangkesenian").removeClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatKesenian"){
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
                    $(".asetbarangkesenian").addClass("active");
                    $(".asethewan").removeClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="Hewan"){
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
                    $(".asethewan").addClass("active");
                    $(".asettanaman").removeClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="Tanaman"){
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
                    $(".asettanaman").addClass("active");
                    $(".asetalatkeamanan").removeClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="AlatKeamanan"){
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
                    $(".asetalatkeamanan").addClass("active");
                    $(".asetkonstruksi").removeClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="Konstruksi"){
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

                    $(".laporanpenghapusan").removeClass("active");
                    $(".asetdihapuskan").removeClass("active");
                    $(".asetyangtelahdihibahkan").removeClass("active");
                    $(".asetrusakberat").removeClass("active");
                    $(".kemitraandenganpihak3").removeClass("active");
                    $(".asettidakberwujud").removeClass("active");
                    $(".asetlainlain").removeClass("active");
                    $(".asetextracountable").removeClass("active");

                    $(".pencarianaset ").addClass("active");
                    $(".asettanah").removeClass("active");
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
                    $(".asetkonstruksi").addClass("active");

                    $(".datapenghapusan").removeClass("active");
                }else if(pgMenu=="LaporanX"){
                    $("ul.sidebar-menu").find("li").removeClass("active");

                    $("ul.sidebar-menu").find("li.transaksi").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanasset").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanpenghapusan").addClass("active");
                    $("ul.sidebar-menu").find("li.asetdihapuskan").addClass("active");
                }else if(pgMenu=="LaporanXX"){
                    $("ul.sidebar-menu").find("li").removeClass("active");

                    $("ul.sidebar-menu").find("li.transaksi").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanasset").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanpenghapusan").addClass("active");
                    $("ul.sidebar-menu").find("li.asetyangtelahdihibahkan").addClass("active");
                }else if(pgMenu=="LaporanXXX"){
                    $("ul.sidebar-menu").find("li").removeClass("active");

                    $("ul.sidebar-menu").find("li.transaksi").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanasset").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanpenghapusan").addClass("active");
                    $("ul.sidebar-menu").find("li.asetrusakberat").addClass("active");
                }else if(pgMenu=="LaporanXXXX"){
                    $("ul.sidebar-menu").find("li").removeClass("active");

                    $("ul.sidebar-menu").find("li.transaksi").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanasset").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanpenghapusan").addClass("active");
                    $("ul.sidebar-menu").find("li.kemitraandenganpihak3").addClass("active");
                }else if(pgMenu=="LaporanXXXXX"){
                    $("ul.sidebar-menu").find("li").removeClass("active");

                    $("ul.sidebar-menu").find("li.transaksi").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanasset").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanpenghapusan").addClass("active");
                    $("ul.sidebar-menu").find("li.asettidakberwujud").addClass("active");
                }else if(pgMenu=="LaporanXXXXXX"){
                    $("ul.sidebar-menu").find("li").removeClass("active");

                    $("ul.sidebar-menu").find("li.transaksi").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanasset").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanpenghapusan").addClass("active");
                    $("ul.sidebar-menu").find("li.asetlainlain").addClass("active");
                }else if(pgMenu=="LaporanXXXXXXX"){
                    $("ul.sidebar-menu").find("li").removeClass("active");

                    $("ul.sidebar-menu").find("li.transaksi").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanasset").addClass("active");
                    $("ul.sidebar-menu").find("li.laporanpenghapusan").addClass("active");
                    $("ul.sidebar-menu").find("li.asetextracountable").addClass("active");
                }

            }

            

            function capit(){
                
            }
            
            function tingkatgedung(n){
                if(n > 1){
                    return "Ya";
                }else{
                    return "Tidak";
                }
            }

            function kondisipersentase(n){
                if(n < 30){
                    return "Rusak Berat";
                }else if(n < 60){
                    return "Kurang Baik";
                }else if(n <= 100){
                    return "Baik";
                }
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
//                     toastr.success('Beta Version', 'Welcome to SIMBD v1.0');

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