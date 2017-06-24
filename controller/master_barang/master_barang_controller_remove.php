<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kodeBarang"];
	$sql = "DELETE FROM masterbarang WHERE KodeBarang = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>