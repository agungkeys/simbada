<?php
	require '../../engine/db_config.php';
	$val1  = $_POST["lok"];
	$val2  = $_POST["val"];

	$sql = "SELECT * FROM kategoridetailformsurvei WHERE IDKategori = '".$val1."' AND Value = '".$val2."' ";
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
  	echo json_encode($data);
?>