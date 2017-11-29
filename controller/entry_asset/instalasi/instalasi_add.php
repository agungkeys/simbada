<?php
	require '../../../engine/db_config.php';

	$sq = "SELECT KodeInstalasi FROM datainstalasi"; 
	$ress = $mysqli->query($sq);

	$json = [];
	while($row = $ress->fetch_assoc()){
	     $json[] = ['kode'=>substr($row['KodeInstalasi'], 2, 8)];
	}

	if($json != null){
		$res = json_encode(max($json));
		$res1 = json_decode($res, true);
		$res2 = $res1['kode'];
		$res3 = intval($res2);
		$res4 = $res3+1;
		$char = "IN";
		$resid = $char . sprintf("%08s", $res4);
	}else{
		$resid = "IN00000001";
	}

	
	// echo $resid;

	$post = $_POST;
	$sql = "INSERT INTO datainstalasi (KodeInstalasi, KodeBarang, KodeLokasi, GolonganInstalasi, NamaInstalasi, Letak, TahunPembuatan, TahunPerolehan, Kondisi, Konstruksi, Bahan, Panjang, Lebar, Tinggi, FasilitasPenunjang, AsalUsul, AsalUsulLainnya, DataAwal, NilaiPerM2, NilaiPerolehan, NilaiPasar, NilaiBaru, Keterangan, PenanggungJawab, LokasiPenanggungJawab, Surveyor, TglSurvey, MataUang, SatuanKerja, KodePemilik, NoReg, EntryUser)
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
		'".$post['25']."',
		'".$post['26']."',
		'".$post['27']."',
		'".$post['28']."',
		'".$post['29']."',
		'".$post['30']."',
		'".$post['34']."'

	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM datainstalasi WHERE KodeInstalasi = '".$resid."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
// ?>