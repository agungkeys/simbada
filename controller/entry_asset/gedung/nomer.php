<?php
	require '../../../engine/db_config.php';

	$sq = "SELECT DataRuangan FROM KodeRuangan"; 
	$resilt = $mysqli->query($sq);

	$json = [];

	while($row = $resilt->fetch_assoc()) {
		$json[] = ['kode'=>substr($row['KodeRuangan'], 1, 10)];
	}

	// while($row = $ress->fetch_assoc()){
	//      $json[] = ['kode'=>substr($row['KodeRuangan'], 0, 9)];
	// }

	$res = json_encode(max($json));
	$res1 = json_decode($res, true);
	$res2 = $res1['kode'];
	$res3 = intval($res2);
	$res4 = $res3+1;
	$char = "R";
	$resid = $char . sprintf("%06s", $res4);
	echo $resid;




	// $sq = "SELECT KodeBangunanGedung FROM databangunangedung"; 
	// $ress = $mysqli->query($sq);

	// $json = [];
	// while($row = $ress->fetch_assoc()){
	//      $json[] = ['kode'=>substr($row['KodeBangunanGedung'], 2, 8)];
	// }

	// $res = json_encode(max($json));
	// $res1 = json_decode($res, true);
	// $res2 = $res1['kode'];
	// $res3 = intval($res2);
	// $res4 = $res3+1;
	// $char = "GD";
	// $resid = $char . sprintf("%06s", $res4);
	// echo $resid;
?>