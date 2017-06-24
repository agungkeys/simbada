<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT KodeBarang, NamaBarang FROM masterbarang"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['kodebarang'=>$row['KodeBarang'], 'namabarang'=>$row['NamaBarang']];
	}

	echo json_encode($json);
?>