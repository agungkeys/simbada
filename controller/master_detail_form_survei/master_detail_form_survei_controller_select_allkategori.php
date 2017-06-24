<?php
	require '../../engine/db_config.php';

	$sql = "SELECT ID, Kategori FROM kategoriformsurvei"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['ID'], 'text'=>$row['Kategori']];
	}

	echo json_encode($json);
?>