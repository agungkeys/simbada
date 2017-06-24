<?php
	require '../../engine/db_config.php';

	$sql = "SELECT ID, Kategori FROM kategoriformsurvei 
			WHERE Kategori LIKE '%".$_GET['q']."%'
			LIMIT 50"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['ID'], 'text'=>$row['Kategori']];
	}

	echo json_encode($json);
?>