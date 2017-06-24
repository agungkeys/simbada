<?php
  require '../../engine/db_config.php';
  $id = $_POST["idBarangEdit"];
  $kdBarang  = $_POST["kodeBarang"];
  $nmBarang = $_POST["namaBarang"];
  $timezone = "Asia/Singapore";
  date_default_timezone_set($timezone);
  $date = date('Y-m-d H:i:s');
  $sql = "UPDATE masterbarang SET KodeBarang = '".$kdBarang."'
    ,NamaBarang = '".$nmBarang."', DateCreate = '".$date."'
    WHERE KodeBarang = '".$id."'";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM masterbarang WHERE KodeBarang = '".$kdBarang."' Order by DateCreate"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>