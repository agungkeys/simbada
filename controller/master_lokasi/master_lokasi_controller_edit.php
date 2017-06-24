<?php
  require '../../engine/db_config.php';
  $_edidori = $_POST["edidoriginal"];
  $_edid = $_POST["edid"];
  $_ednm  = $_POST["ednm"];
  $_edsat = $_POST["edsat"];
  $_edkep = $_POST["edkep"];
  $_ednipa = $_POST["ednipa"];
  $_edkabag = $_POST["edkabag"];
  $_ednipb = $_POST["ednipb"];
  $timezone = "Asia/Singapore";
  date_default_timezone_set($timezone);
  $date = date('Y-m-d H:i:s');
  $sql = "UPDATE masterlokasi SET KodeLokasi = '".$_edid."', Unit = '".$_ednm."', SatuanKerja = '".$_edsat."', NamaKu = '".$_edkep."', NipKu = '".$_ednipa."', NamaKB = '".$_edkabag."', NIPKB = '".$_ednipb."', DateCreate = '".$date."' WHERE KodeLokasi = '".$_edidori."'";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM masterlokasi WHERE KodeLokasi = '".$_edid."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>