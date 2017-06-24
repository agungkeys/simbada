<?php
	require '../../engine/db_config.php';

	$sql = "SELECT KodeBarang, NamaBarang FROM masterbarang"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['KodeBarang'], 'text'=>$row['NamaBarang']];
	}

	echo json_encode($json);
?>