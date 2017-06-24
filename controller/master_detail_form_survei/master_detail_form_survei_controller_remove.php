<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kode"];
	$sql = "DELETE FROM kategoridetailformsurvei WHERE ID = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>