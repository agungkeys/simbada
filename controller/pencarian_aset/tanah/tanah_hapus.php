<?php
	require '../../../engine/db_config.php';
	$id  = $_POST["kodeTanah"];
	$sql = "DELETE FROM datatanah WHERE KodeTanah = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>