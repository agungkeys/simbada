<?php
	require '../../engine/db_config.php';

	$post = $_POST;
	$sql = "INSERT INTO masterlokasi (
		KodeLokasi, 
		Unit, 
		SatuanKerja, 
		NamaKu, 
		NipKu, 
		NamaKB, 
		NIPKB
	)
	VALUES (
		'".$post['kdLokasi']."',
		'".$post['unt']."',
		'".$post['satKerja']."',
		'".$post['kepuSk']."',
		'".$post['nipA']."',
		'".$post['kabagPengBid']."',
		'".$post['nipB']."'
	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM masterlokasi Order by DateCreate desc LIMIT 1"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>