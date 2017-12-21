<?php
	require '../../../engine/db_config.php';
	$id  = $_POST["kode"];
	$sql = "DELETE FROM databangunangedung WHERE KodeBangunanGedung = '".$id."'";
	$result = $mysqli->query($sql);

	//Hapus dalam table ruangan
	$sqlruang = "DELETE FROM dataruangan WHERE KodeBangunanGedung = '".$id."'";
	$resultruang = $mysqli->query($sqlruang);


	//Hapus dalam table mutasi
	$sqlmutasi = "DELETE FROM datamutasi WHERE KodeItem = '".$id."'";
	$resultmutasi = $mysqli->query($sqlmutasi);
	echo json_encode([$id]);
?>