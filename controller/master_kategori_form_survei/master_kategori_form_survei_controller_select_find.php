<?php
	require '../../engine/db_config.php';
	$valkat  = $_POST["v_kat"];

	$sql = "SELECT * FROM kategoriformsurvei WHERE Kategori = '".$valkat."'";
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
  	echo json_encode($data);
?>