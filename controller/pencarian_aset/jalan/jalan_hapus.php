<?php
	require '../../../engine/db_config.php';
	$id  = $_POST["kodeJalan"];
	$sql = "DELETE FROM datajalan WHERE kodeJalan = '".$id."'";
	$result = $mysqli->query($sql);
	//Hapus dalam table mutasi
	$sqlmutasi = "DELETE FROM datamutasi WHERE KodeItem = '".$id."'";
	$resultmutasi = $mysqli->query($sqlmutasi);
	echo json_encode([$id]);
?>