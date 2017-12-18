<?php
	require '../../../engine/db_config.php';
	$id  = $_POST["kodeJembatan"];
	$sql = "DELETE FROM datajembatan WHERE kodeJembatan = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>