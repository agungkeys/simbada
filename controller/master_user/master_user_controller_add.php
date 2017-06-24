<?php
	require '../../engine/db_config.php';

	$post = $_POST;
	$sql = "INSERT INTO user (
		user_name, 
		full_name,
		user_email,
		user_password,
		level,
		location
	)
	VALUES (
		'".$post['usNm']."',
		'".$post['usNmFull']."',
		'".$post['usMail']."',
		'".base64_encode($post['usPass'])."',
		'".$post['usLvl']."',
		'".$post['usLok']."'
	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM user Order by DateCreate desc LIMIT 1"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>