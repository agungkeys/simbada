<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT MataUang, Keterangan FROM lookupmatauang"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['MataUang'], 'text'=>$row['MataUang']];
	}

	echo json_encode($json);
?>