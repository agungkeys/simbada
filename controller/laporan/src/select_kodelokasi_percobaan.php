<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT KodeLokasi, SatuanKerja, SubUnit, Unit FROM masterlokasi ORDER BY KodeLokasi ASC "; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     
		$json[] = [$row["KodeLokasi"], $row["SatuanKerja"], $row["SubUnit"], $row["Unit"]];
	}

	echo json_encode($json);
?>