<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT KodeLokasi, Unit, SubUnit, SatuanKerja FROM masterlokasi"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['kodelokasi'=>$row['KodeLokasi'], 'unit'=>$row['Unit'], 'subuni'=>$row['SubUnit'], 'satker'=>$row['SatuanKerja']];
	}

	echo json_encode($json);
?>