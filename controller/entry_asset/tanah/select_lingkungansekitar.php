<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT ID, IDKategori, Value FROM kategoridetailformsurvei WHERE IDKategori='30'"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['ID'], 'text'=>$row['Value']];
	}

	echo json_encode($json);
?>