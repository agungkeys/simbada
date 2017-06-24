<?php
	require '../../engine/db_config.php';

	$sql = "SELECT masterlokasi.KodeLokasi, masterlokasi.SatuanKerja FROM masterlokasi 
			WHERE SatuanKerja LIKE '%".$_GET['q']."%'
			LIMIT 50"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['KodeLokasi'], 'text'=>$row['SatuanKerja']];
	}

	echo json_encode($json);
?>