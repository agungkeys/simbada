<?php
  require '../../engine/db_config.php';
              
  $id = $_POST["idval"];
  $pemilik = $_POST["pemilikval"];
  $timezone = "Asia/Singapore";
  date_default_timezone_set($timezone);
  $date = date('Y-m-d H:i:s');
  $sql = "UPDATE masterpemilik SET NamaPemilik = '".$pemilik."' WHERE KodePemilik = '".$id."'";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM masterpemilik WHERE KodePemilik = '".$id."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>