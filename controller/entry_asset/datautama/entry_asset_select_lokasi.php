<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT KodeLokasi, SatuanKerja, SubUnit FROM masterlokasi 
			WHERE SatuanKerja LIKE '%".$_GET['q']."%' ORDER BY KodeLokasi ASC LIMIT 100"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['KodeLokasi'], 'text'=>$row['SatuanKerja']];
	}

	echo json_encode($json);
?>