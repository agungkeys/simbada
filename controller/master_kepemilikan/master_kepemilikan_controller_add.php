<?php
	require '../../engine/db_config.php';

	$post = $_POST;
	$sql = "INSERT INTO masterpemilik (
		KodePemilik, NamaPemilik
	)
	VALUES (
		'".$post['kdpemilik']."', '".$post['nmpemilik']."'
	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM masterpemilik WHERE KodePemilik = '".$post['kdpemilik']."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>