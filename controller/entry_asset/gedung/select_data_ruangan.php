<?php
	require '../../../engine/db_config.php';

	$post 	= $_POST;
	$resid	= $post['koder'];
	$sql 	= "SELECT * FROM dataruangan WHERE KodeBangunanGedung = '".$resid."'"; 
	$result = $mysqli->query($sql);
	// $data 	= $result->fetch_assoc();
	
	while($row = $result->fetch_assoc()){
		$arrayName = array(
			'KodeRuangan' => $row['KodeRuangan'],
			'KodeBangunanGedung' => $row['KodeBangunanGedung'],
			'NamaRuangan' => $row['NamaRuangan']
		);
		$arraydt[] = $arrayName;
		// echo json_encode($arrayName);
		
	}
	echo json_encode($arraydt);
?>