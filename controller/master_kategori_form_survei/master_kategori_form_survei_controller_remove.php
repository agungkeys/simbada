<?php
	require '../../engine/db_config.php';
	$id  = $_POST["value"];
	$sql = "DELETE FROM kategoriformsurvei WHERE ID = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>