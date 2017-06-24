<?php
  require '../../engine/db_config.php';
  $idv = $_POST["idval"];
  $edv = $_POST["edval"];
  $timezone = "Asia/Singapore";
  date_default_timezone_set($timezone);
  $date = date('Y-m-d H:i:s');
  $sql = "UPDATE lookupagama SET Agama = '".$edv."' WHERE Agama = '".$idv."'";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM lookupagama WHERE Agama = '".$edv."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>