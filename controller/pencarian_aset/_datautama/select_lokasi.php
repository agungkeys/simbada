<?php
	require '../../../engine/db_config.php';
	//Biasanya get P text search error di console, namun result yang di cari sesuai dan benar.

	$_level = $_GET['level'];
	$_location = $_GET['location'];

	if($_level == "Admin"){
    $dw ='';
	}else{
	    $tkdlok     = $_location;
	    $tkdlokflat = rtrim($tkdlok, "0"); 
	    $sqllok = "SELECT KodeLokasi FROM masterlokasi WHERE KodeLokasi LIKE '%{$tkdlokflat}%'"; 
	    $resultlok = $mysqli->query($sqllok);
	    $loknum = $mysqli->affected_rows;
	    // echo $loknum;
	    if( $loknum > 0)
	    {
	        $dtlok_arr = array();
	        while ( $row = mysqli_fetch_array($resultlok) )
	            $dtlok_arr[] = $row[0];
	        if( count($dtlok_arr) > 0){
	            $data_arr_location = implode(',', $dtlok_arr);
	        }else{
	            echo 'No number is there';
	        }
	    }

	    $dw = 'KodeLokasi IN('.$data_arr_location.') AND';
	}


	$sql = "SELECT KodeLokasi, SatuanKerja, SubUnit FROM masterlokasi 
			WHERE {$dw} SatuanKerja LIKE '%".$_GET['q']."%' ORDER BY KodeLokasi ASC LIMIT 100"; 
	$result = $mysqli->query($sql);

	$json = [];
	while($row = $result->fetch_assoc()){
	     $json[] = ['id'=>$row['KodeLokasi'], 'text'=>$row['SatuanKerja']];
	}

	echo json_encode($json);
?>