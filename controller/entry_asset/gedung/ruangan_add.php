<?php
	require '../../../engine/db_config.php';

	// $sql = array(); 
	// foreach( $data as $row ) {
	//     $sql[] = '("'.mysql_real_escape_string($row['kodegedung']).'", '.$row['namaruangan'].')';
	// }
	// mysql_query('INSERT INTO dataruangan (KodeBangunanGedung, NamaRuangan) VALUES '.implode(',', $sql));
	// echo json_encode($sql);


	$data = $_REQUEST['data'];
	// echo json_encode($array);


	if(is_array($data)){

	    $sql = "INSERT INTO dataruangan (KodeRuangan, KodeBangunanGedung, NamaRuangan) values ";

	    $valuesArr = array();
	    foreach($data as $row){

	  //   	$sq = "SELECT dataruangan FROM KodeRuangan"; 
			// $ress = $mysqli->query($sq);

			// $json = [];
			// while($row = $ress->fetch_assoc()){
			//      $json[] = ['kode'=>substr($row['KodeRuangan'], 3, 7)];
			// }

			// $res = json_encode(max($json));
			// $res1 = json_decode($res, true);
			// $res2 = $res1['kode'];
			// $res3 = intval($res2);
			// $res4 = $res3+1;
			// $char = "R03";
			// $resid = $char . sprintf("%06s", $res4);


	        $kr = (int) $row['no'];
	        $kbg = mysqli_real_escape_string( $mysqli, $row['kodegedung'] );
	        $nr = mysqli_real_escape_string( $mysqli, $row['namaruangan'] );

	        $valuesArr[] = "('$kr', '$kbg', '$nr')";
	    }

	    $sql .= implode(',', $valuesArr);

	    // mysql_query($sql) or exit(mysql_error()); 
	    // $mysqli->query($sql);


	    $result = $mysqli->query($sql);
		$sql = "SELECT * FROM dataruangan WHERE KodeBangunanGedung = '".$kbg."'"; 
		$result = $mysqli->query($sql);
		$data = $result->fetch_assoc();
		echo json_encode($data);
	}
?>