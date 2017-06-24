<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kd"];
	$sql = "SELECT * FROM kategoridetailformsurvei WHERE ID = '".$id."'"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
		$json[] =['ID'=>$row['ID'], 'IDKategori'=>$row['IDKategori'], 'Value'=>$row['Value'], 'Ket_1'=>$row['Ket_1'], 'Ket_2'=>$row['Ket_2'], 'DateCreate'=>$row['DateCreate']];}
	echo json_encode($json);
?>