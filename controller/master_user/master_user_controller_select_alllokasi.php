<?php
	require '../../engine/db_config.php';

	$sql = "SELECT KodeLokasi, SatuanKerja FROM masterlokasi"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['KodeLokasi'], 'text'=>$row['SatuanKerja']];
	}

	echo json_encode($json);
?>