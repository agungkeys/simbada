<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT KodeBarang, NamaBarang FROM masterbarang 
			WHERE NamaBarang LIKE '%".$_GET['q']."%' ORDER BY KodeBarang ASC LIMIT 100"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['KodeBarang'], 'text'=>$row['NamaBarang']];
	}

	echo json_encode($json);
?>