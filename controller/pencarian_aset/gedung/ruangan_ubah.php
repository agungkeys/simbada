<?php
	require '../../../engine/db_config.php';	

	//Hapus Data Sebelumnya
	$post = $_POST;
	$sqlhpsrecov = "DELETE FROM dataruangan WHERE KodeBangunanGedung = '".$post["kdbgedung"]."'";
	$sqlhpsrecovr = $mysqli->query($sqlhpsrecov);

	$data = $_REQUEST['data'];
	// echo json_encode($array);


	if(is_array($data)){

	    $sql = "INSERT INTO dataruangan (KodeRuangan, KodeBangunanGedung, NamaRuangan) values ";


	    //Create ID for KodeRuangan
		$sq = "SELECT KodeRuangan FROM dataruangan"; 
		$ress = $mysqli->query($sq);

		$json = [];
		while($row = $ress->fetch_assoc()){
		     $json[] = ['kode'=>substr($row['KodeRuangan'], 2, 8)];
		}

		if($json != null){
			$res = json_encode(max($json));
			$res1 = json_decode($res, true);
			$res2 = $res1['kode'];
			$res3 = intval($res2);
			$res4 = $res3+1;
			$char = "BR";
			$resid = $char . sprintf("%08s", $res4);
		}else{
			$resid = "BR00000001";
		}


	    $valuesArr = array();
	    foreach($data as $row){

	        $kr = mysqli_real_escape_string( $mysqli, $resid );
	        $kbg = mysqli_real_escape_string( $mysqli, $row['kodegedung'] );
	        $nr = mysqli_real_escape_string( $mysqli, $row['namaruangan'] );

	        $valuesArr[] = "('$kr', '$kbg', '$nr')";
	        $resid++;
	    }

	    $sql .= implode(',', $valuesArr);

	    // mysql_query($sql) or exit(mysql_error()); 
	    // $mysqli->query($sql);


	    $result = $mysqli->query($sql);
		$sqll = "SELECT * FROM dataruangan WHERE KodeBangunanGedung = '".$kbg."'"; 
		$resultt = $mysqli->query($sqll);
		$printdata = [];
		while($rowz = $resultt->fetch_assoc()){

			$printdata[] = ['KodeRuang'=>$rowz['KodeRuangan'], 
			'KodeBangunan'=>$rowz['KodeBangunanGedung'], 
			'NamaRuangan'=>$rowz['NamaRuangan']];
		}
		// $data = $result->fetch_assoc();
		echo json_encode($printdata);
	}
?>