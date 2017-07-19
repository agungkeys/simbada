<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT KodePemilik, NamaPemilik FROM masterpemilik"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['KodePemilik'], 'text'=>$row['NamaPemilik']];
	}

	echo json_encode($json);
?>