<?php
	require '../../engine/db_config.php';

	$query1 = "SELECT max(ID) as maxKode FROM kategoriformsurvei";
	$hasil = $mysqli->query($query1);
	$data1 = $hasil->fetch_assoc();
	$id_kategori = $data1['maxKode'];
	$id_kategori++;

	$timezone = "Asia/Singapore";
	date_default_timezone_set($timezone);
	$date = date('Y-m-d H:i:s');

	$post = $_POST;
	$sql = "INSERT INTO kategoriformsurvei (ID, Kategori, Keterangan, DateCreate)
	VALUES (
		'".$id_kategori."',
		'".$post['valkat']."',
		'".$post['valket']."',
		'".$date."'

	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM kategoriformsurvei WHERE Kategori = '".$post['valkat']."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>