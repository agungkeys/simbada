<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT KodeLokasi, SatuanKerja, SubUnit, Unit FROM masterlokasi 
			WHERE  SatuanKerja LIKE '%".$_GET['q']."%' ORDER BY KodeLokasi ASC LIMIT 200"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['KodeLokasi'], 'text'=>$row['SatuanKerja'], 'val1'=>$row['SubUnit'], 'val2'=>$row['Unit'],];
	}

	echo json_encode($json);
?>