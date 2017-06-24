<?php
  require '../../engine/db_config.php';
              
  $id = $_POST["iddet"];
  $idkat = $_POST["idkat"];
  $value = $_POST["val"];
  $ket1 = $_POST["k1"];
  $ket2 = $_POST["k2"];

  $timezone = "Asia/Singapore";
  date_default_timezone_set($timezone);
  $date = date('Y-m-d H:i:s');
  $sql = "UPDATE kategoridetailformsurvei SET IDKategori = '".$idkat."', Value = '".$value."', Ket_1 = '".$ket1."', Ket_2 = '".$ket2."', DateCreate = '".$date."' WHERE ID = '".$id."'";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM kategoridetailformsurvei WHERE ID = '".$id."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>