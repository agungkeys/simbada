<?php
	require '../../../engine/db_config.php';

	$sql = "SELECT Letak FROM databangunangedung 
			WHERE Letak LIKE '%".$_GET['q']."%' GROUP BY Letak LIMIT 300";
			// WHERE Letak LIKE '%".$_GET['q']."%' GROUP BY 'Letak'"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['Letak'], 'text'=>$row['Letak']];
	}

	echo json_encode($json);
?>