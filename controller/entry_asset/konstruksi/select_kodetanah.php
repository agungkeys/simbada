<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT ID, Ket_2, IDKategori, CONCAT(Ket_2,' - ',Value) AS Val_1 FROM kategoridetailformsurvei WHERE IDKategori='19' ORDER BY Ket_2 ASC"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['Ket_2'], 'text'=>$row['Val_1']];
	}

	echo json_encode($json);
?>