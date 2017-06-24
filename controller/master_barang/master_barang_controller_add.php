<?php
require '../../engine/db_config.php';

$post = $_POST;
$sql = "INSERT INTO masterbarang (KodeBarang,NamaBarang) 
VALUES ('".$post['kodeBarang']."','".$post['namaBarang']."')";
$result = $mysqli->query($sql);
$sql = "SELECT * FROM masterbarang Order by DateCreate desc LIMIT 1"; 
$result = $mysqli->query($sql);
$data = $result->fetch_assoc();
echo json_encode($data);
?>