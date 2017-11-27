<?php
	require '../../../engine/db_config.php';

	$sq = "SELECT KodeAlatAngkutan FROM dataalatangkutan"; 
	$ress = $mysqli->query($sq);

	$json = [];
	while($row = $ress->fetch_assoc()){
	     $json[] = ['kode'=>substr($row['KodeAlatAngkutan'], 2, 8)];
	}

	$res = json_encode(max($json));
	$res1 = json_decode($res, true);
	$res2 = $res1['kode'];
	$res3 = intval($res2);
	$res4 = $res3+1;
	$char = "AA";
	$resid = $char . sprintf("%05s", $res4);
	// echo $resid;

	$post = $_POST;
	$sql = "INSERT INTO dataalatangkutan (KodeAlatAngkutan, KodeBarang, KodeLokasi, GolonganAlatAngkutan, NamaAlatAngkutan, Merk, Tipe, Kapasitas, Warna, NomorRangka, NomorMesin, TahunPerolehan, Kondisi, AsalUsul, NilaiPerolehan, Keterangan, PenanggungJawab, LokasiPenanggungJawab, Surveyor, TglSurvey, MataUang, SatuanKerja, KodePemilik, NoReg, EntryUser, NomorPolisi, TanggalBPKB, NomorBPKB)
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
		'".$post['27']."',
		'".$post['28']."',
		'".$post['29']."',
		'".$post['30']."'
	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM dataalatangkutan WHERE KodeAlatAngkutan = '".$resid."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
// ?>