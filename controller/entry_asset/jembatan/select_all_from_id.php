<?php
	require '../../../engine/db_config.php';

	$post 	= $_POST;
	$resid	= $post['1'];
	$sql 	= "SELECT * FROM datajembatan WHERE KodeJembatan = '".$resid."'"; 
	$result = $mysqli->query($sql);
	$data 	= $result->fetch_assoc();
	echo json_encode($data);
?>