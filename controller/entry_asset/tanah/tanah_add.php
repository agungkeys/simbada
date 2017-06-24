<?php
	require '../../../engine/db_config.php';

	$sq = "SELECT KodeTanah FROM datatanah"; 
	$ress = $mysqli->query($sq);

	$json = [];
	while($row = $ress->fetch_assoc()){
	     $json[] = ['kode'=>substr($row['KodeTanah'], 2, 7)];
	}

	$res = json_encode(max($json));
	$res1 = json_decode($res, true);
	$res2 = $res1['kode'];
	$res3 = intval($res2);
	$res4 = $res3+1;
	$char = "TN";
	$resid = $char . sprintf("%06s", $res4);
	// echo $resid;

	$post = $_POST;
	$sql = "INSERT INTO datatanah (KodeTanah, KodeLokasi, KodeBarang, GolonganTanah, LuasTanah, TahunPerolehan, Letak, StatusTanah, StatusTanahLainnya, Bersertifikat, Tanggal, Nomor, Penggunaan, AsalUsul, AsalUsulLainnya, DataAwal, BatasUtara, BatasTimur, BatasSelatan, BatasBarat, TipePermukaan, TipePermukaanLainnya, LebarJalan, NamaBangunanPetunjuk, JarakBangunanPetunjuk, LingkunganSekitar, LingkunganSekitarLainnya, RangeHarga1, RangeHarga2, HargaTanahM2, HargaTanah, NilaiBaru, NilaiPasar, NilaiPerolehan, Keterangan, PenanggungJawab, LokasiPenanggungJawab, Surveyor, TglSurvey, MataUang, Satker, KodeTanahLama, KodePemilik, NoReg, Status, KetStatus, Entry, EntryUser)
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
		'".$post['31']."',
		'".$post['32']."',
		'".$post['33']."',
		'".$post['34']."',
		'".$post['35']."',
		'".$post['36']."',
		'".$post['37']."',
		'".$post['38']."',
		'".$post['39']."',
		'".$post['40']."',
		'".$post['41']."',
		'".$post['42']."',
		'".$post['43']."',
		'".$post['44']."',
		'".$post['45']."',
		'".$post['46']."',
		'".$post['47']."'

	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM datatanah WHERE KodeTanah = '".$resid."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>