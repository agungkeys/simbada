<?php
	require '../../engine/db_config.php';
	$id  = $_POST["value"];
	$sql = "DELETE FROM lookupagama WHERE Agama = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>