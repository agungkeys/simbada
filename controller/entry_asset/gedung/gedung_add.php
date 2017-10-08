<?php
	require '../../../engine/db_config.php';

	$sq = "SELECT KodeBangunanGedung FROM databangunangedung"; 
	$ress = $mysqli->query($sq);

	$json = [];
	while($row = $ress->fetch_assoc()){
	     $json[] = ['kode'=>substr($row['KodeBangunanGedung'], 2, 8)];
	}

	$res = json_encode(max($json));
	$res1 = json_decode($res, true);
	$res2 = $res1['kode'];
	$res3 = intval($res2);
	$res4 = $res3+1;
	$char = "GD";
	$resid = $char . sprintf("%06s", $res4);
	// echo $resid;

	$post = $_POST;
	$sql = "INSERT INTO databangunangedung (KodeBangunanGedung, KodeBarang, KodeLokasi, GolonganBangunanGedung , NamaBangunan, Letak, LuasTanah, LuasBangunan, Konstruksi, Kondisi, Dokumen, TanggalDokumen, AsalUsul, AsalUsulLainnya, Tingkat, NilaiPerolehan, Keterangan, PenanggungJawab, LokasiPenanggungJawab, Surveyor, TglSurvey, MataUang, SatuanKerja, KodePemilik, NoReg, Status, KetStatus, Entry, EntryUser)
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
		'".$post['28']."'

	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM databangunangedung WHERE KodeBangunanGedung = '".$resid."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>
