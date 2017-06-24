<?php
	require '../../engine/db_config.php';

	$query1 = "SELECT max(ID) as maxKode FROM kategoridetailformsurvei";
	$hasil = $mysqli->query($query1);
	$data1 = $hasil->fetch_assoc();
	$id_kategori = $data1['maxKode'];
	$id_kategori++;

	$timezone = "Asia/Singapore";
	date_default_timezone_set($timezone);
	$date = date('Y-m-d H:i:s');

	$post = $_POST;
	$sql = "INSERT INTO kategoridetailformsurvei (ID, IDKategori, Value, Ket_1, Ket_2, DateCreate)
	VALUES (
		'".$id_kategori."',
		'".$post['idkat']."',
		'".$post['val']."',
		'".$post['k1']."',
		'".$post['k2']."',
		'".$date."'

	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM kategoridetailformsurvei WHERE ID = '".$id_kategori."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>