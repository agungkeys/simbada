<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kdUser"];
	$sql = "SELECT * FROM user WHERE user_name = '".$id."'"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
		$json[] =['user_id'=>$row['user_id'], 'user_name'=>$row['user_name'], 'full_name'=>$row['full_name'], 'user_email'=>$row['user_email'], 'user_password'=> base64_decode($row['user_password']), 'level'=>$row['level'], 'location'=>$row['location'], 'DateCreate'=>$row['DateCreate']];}
	echo json_encode($json);
?>