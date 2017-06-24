<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kodeLokasi"];
	$sql = "DELETE FROM masterlokasi WHERE KodeLokasi = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>