<?php
	require '../../../engine/db_config.php';

	$sq = "SELECT KodeBangunanGedung FROM databangunangedung"; 
	$ress = $mysqli->query($sq);

	$json = [];
	while($row = $ress->fetch_assoc()){
	     $json[] = ['kode'=>substr($row['KodeBangunanGedung'], 2, 8)];
	}

	if($json != null){
		$res = json_encode(max($json));
		$res1 = json_decode($res, true);
		$res2 = $res1['kode'];
		$res3 = intval($res2);
		$res4 = $res3+1;
		$char = "GD";
		$resid = $char . sprintf("%08s", $res4);
	}else{
		$resid = "GD00000001";
	}

	
	// echo $resid;

	$post = $_POST;
	$sql = "INSERT INTO databangunangedung (KodeBangunanGedung, KodeBarang, KodeLokasi, GolonganBangunanGedung, NamaBangunan, Letak, LuasTanah, LuasBangunan, Konstruksi, Kondisi, Dokumen, TanggalDokumen, AsalUsul, AsalUsulLainnya, Tingkat, NilaiPerolehan, Keterangan, PenanggungJawab, LokasiPenanggungJawab, Surveyor, TglSurvey, MataUang, SatuanKerja, KodePemilik, NoReg, EntryUser, TahunPerolehan)
	VALUES (
		'".$resid."',
		'".$post['1']."',
		'".$post['2']."',
		'".$post['3']."',
		'".$post['4']."',
		'".$post['5']."',
		'".$post['6']."',
		'".$post['7']."',
		'".$post['8']."',
		'".$post['9']."',
		'".$post['10']."',
		'".$post['11']."',
		'".$post['12']."',
		'".$post['13']."',
		'".$post['14']."',
		'".$post['15']."',
		'".$post['16']."',
		'".$post['17']."',
		'".$post['18']."',
		'".$post['19']."',
		'".$post['20']."',
		'".$post['21']."',
		'".$post['22']."',
		'".$post['23']."',
		'".$post['24']."',
		'".$post['28']."',
		'".$post['29']."'

	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM databangunangedung WHERE KodeBangunanGedung = '".$resid."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	// echo json_encode($data);

	//Insert Ke Table data mutasi sebagai penambahan============================================
	$dmuts = "SELECT KodeMutasi FROM datamutasi"; 
	$resmuts = $mysqli->query($dmuts);

	$jsonmuts = [];
	while($rowmts = $resmuts->fetch_assoc()){
	     $jsonmuts[] = ['kode'=>substr($rowmts['KodeMutasi'], 2, 8)];
	}

	if($jsonmuts != null){
		$res = json_encode(max($jsonmuts));
		$res1 = json_decode($res, true);
		$res2 = $res1['kode'];
		$res3 = intval($res2);
		$res4 = $res3+1;
		$char = "MU";
		$residmts = $char . sprintf("%08s", $res4);
	}else{
		$residmts = "MU00000001";
	}
	$semestermt = 1;
	$statusmt = NULL;
	//START insert into datamutasi===============================================
	$sqlmt = "INSERT INTO datamutasi (KodeMutasi, KodeLokasi, NoItem, KodeItem, KodeBarang, Jumlah, Harga, KodeBidang, KodePemilik, Tahun, Semester, Status, Ket)
	VALUES (
		'".$residmts."',
		'".$post['2']."',
		'1',
		'".$resid."',
		'".$post['1']."',
		'1',
		'".$post['15']."',
		'".mb_substr($post['1'], 0, 4)."',
		'".$post['23']."',
		'".$post['29']."',
		'".$semestermt."',
		'".$statusmt."',
		'ADD'

	)";
	$resultmt = $mysqli->query($sqlmt);
	$sqlmtr = "SELECT * FROM datamutasi WHERE KodeMutasi = '".$residmts."'"; 
	$resultmtr = $mysqli->query($sqlmtr);
	$datamtr = $resultmtr->fetch_assoc();
	//END insert into datamutasi===============================================

	//Yang di echo harus hasil dari add gedung, karena ruangan_add.php membutuhkan kode gedung untuk disimpan :))
	echo json_encode($data);
	// echo json_encode($datamtr);
?>
