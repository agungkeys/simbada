<?php
	require '../../../engine/db_config.php';
	$id  = $_POST["kodeJalan"];
	$sql = "DELETE FROM datajalan WHERE kodeJalan = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>