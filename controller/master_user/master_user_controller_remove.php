<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kodeUserName"];
	$sql = "DELETE FROM user WHERE user_name = '".$id."'";
	$result = $mysqli->query($sql);
	echo json_encode([$id]);
?>