<?php
	require '../../engine/db_config.php';

	$post = $_POST;
	$sql = "INSERT INTO lookupmatauang (
		MataUang, Keterangan
	)
	VALUES (
		'".$post['currency']."', '".$post['keterangan']."'
	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM lookupmatauang WHERE MataUang = '".$post['currency']."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>