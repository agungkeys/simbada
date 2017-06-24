<?php
  require '../../engine/db_config.php';
              
  $id = $_POST["idval"];
  $kat = $_POST["katval"];
  $ket = $_POST["ketval"];
  $timezone = "Asia/Singapore";
  date_default_timezone_set($timezone);
  $date = date('Y-m-d H:i:s');
  $sql = "UPDATE kategoriformsurvei SET Kategori = '".$kat."', Keterangan = '".$ket."', DateCreate = '".$date."' WHERE ID = '".$id."'";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM kategoriformsurvei WHERE ID = '".$id."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>