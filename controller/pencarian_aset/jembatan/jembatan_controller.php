<?php

require ('../../../engine/db_config.php');
// storing  request (ie, get/post) global array to a variable  
$requestData= $_REQUEST;
$_level     = $requestData["level"];
$_location  = $requestData["location"];

if($_level == "Admin"){
    $dw1 ='';
    $dw2a ='';
    $dw2b ='';
    $dw3 ='';
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

    $dw1 = 'WHERE KodeLokasi IN('.$data_arr_location.')';
    $dw2a = 'KodeLokasi IN('.$data_arr_location.') AND';
    $dw2b = 'AND KodeLokasi IN('.$data_arr_location.')';
    $dw3 = 'WHERE KodeLokasi IN('.$data_arr_location.')';
}


include '../../../engine/configdb_for_ajax_datatable.php';
$columns = array( 
// datatable column index  => database column name
    0 => 'KodeJembatan', 
    1 => 'SubUnit',
    2 => 'SatuanKerja',
    3 => 'NamaPemilik', 
    4 => 'JenisJembatan', 
    5 => 'NamaJembatan', 
    6 => 'NamaRuas',
    7 => 'PosisiRuas',
    8 => 'Panjang',
    9 => 'Lebar',
    10 => 'Tinggi',
    11 => 'TahunPembuatan', 
    12 => 'TahunPerolehan', 
    13 => 'Kondisi',  
    14 => 'AsalUsul',
    15 => 'NilaiPerolehan', 
    16 => 'Keterangan', 
    17 => 'PenanggungJawab', 
    18 => 'EntryUser',    
);




// getting total number records without any search
$sql = "SELECT KodeJembatan, KodeLokasi, SubUnit, SatuanKerja, NamaPemilik, JenisJembatan, NamaJembatan, NamaRuas, PosisiRuas, Panjang, Lebar, Tinggi, TahunPembuatan, TahunPerolehan, Kondisi, AsalUsul, NilaiPerolehan, Keterangan, PenanggungJawab, EntryUser, Status";
$sql.=" FROM aset_jembatan {$dw1}";


$query=mysqli_query($conn, $sql) or die("master_aset_jalan_controller: Get Data Jembatan");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.



if( !empty($requestData['search']['value']) ) {
    // if there is a search parameter
    $sql = "SELECT KodeJembatan, KodeLokasi, SubUnit, SatuanKerja, NamaPemilik, JenisJembatan, NamaJembatan, NamaRuas, PosisiRuas, Panjang, Lebar, Tinggi, TahunPembuatan, TahunPerolehan, Kondisi, AsalUsul, NilaiPerolehan, Keterangan, PenanggungJawab, EntryUser, Status";
    $sql.=" FROM aset_jembatan WHERE {$dw2a}";
    $sql.=" KodeJembatan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  SubUnit LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  SatuanKerja LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NamaPemilik LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  JenisJembatan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NamaJembatan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NamaRuas LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    
    $sql.=" OR  PosisiRuas LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Panjang LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Lebar LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Tinggi LIKE '%".$requestData['search']['value']."%' {$dw2b}";

    $sql.=" OR  TahunPembuatan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  TahunPerolehan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Kondisi LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  AsalUsul LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NilaiPerolehan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Keterangan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  PenanggungJawab LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  EntryUser LIKE '%".$requestData['search']['value']."%' {$dw2b}";

    

    $query=mysqli_query($conn, $sql) or die("master_aset_tanah_controller: Get Aset Tanah from Search 1");
    $totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result without limit in the query 

    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   "; // $requestData['order'][0]['column'] contains colmun index, $requestData['order'][0]['dir'] contains order such as asc/desc , $requestData['start'] contains start row number ,$requestData['length'] contains limit length.
    $query=mysqli_query($conn, $sql) or die("master_aset_tanah_controller: Get Aset Tanah from Search 2"); // again run query with limit
    // $num_rows = mysql_num_rows($query);
    
} else {    
    $sql = "SELECT KodeJembatan, KodeLokasi, SubUnit, SatuanKerja, NamaPemilik, JenisJembatan, NamaJembatan, NamaRuas, PosisiRuas, Panjang, Lebar, Tinggi, TahunPembuatan, TahunPerolehan, Kondisi, AsalUsul, NilaiPerolehan, Keterangan, PenanggungJawab, EntryUser, Status";
    $sql.=" FROM aset_jembatan {$dw3}";
    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
    $query=mysqli_query($conn, $sql) or die("master_aset_jembatan_controller: Get Aset Jembatan from Search false");
    // $num_rows = mysql_num_rows($query);
}


$data = array();
// for(i=1; i<=$totalFiltered; i++;)
while( $row=mysqli_fetch_array($query)) {  // preparing an array
    $nestedData=array();
    $nestedData[] = $row["KodeJembatan"]; 
    $nestedData[] = $row["SubUnit"];
    $nestedData[] = $row["SatuanKerja"];
    $nestedData[] = $row["NamaPemilik"]; 
    $nestedData[] = $row["JenisJembatan"]; 
    $nestedData[] = $row["NamaJembatan"]; 
    $nestedData[] = $row["NamaRuas"];
    $nestedData[] = $row["PosisiRuas"];
    $nestedData[] = $row["Panjang"];
    $nestedData[] = $row["Lebar"];
    $nestedData[] = $row["Tinggi"];
    $nestedData[] = $row["TahunPembuatan"]; 
    $nestedData[] = $row["TahunPerolehan"]; 
    $nestedData[] = $row["Kondisi"];  
    $nestedData[] = $row["AsalUsul"];
    $nestedData[] = $row["NilaiPerolehan"]; 
    $nestedData[] = $row["Keterangan"]; 
    $nestedData[] = $row["PenanggungJawab"]; 
    $nestedData[] = $row["EntryUser"];  
    $data[] = $nestedData;
}

$json_data = array(
            "draw"            => intval( $requestData['draw'] ),   // for every request/draw by clientside , they send a number as a parameter, when they recieve a response/data they first check the draw number, so we are sending same number in draw. 
            "recordsTotal"    => intval( $totalData ),  // total number of records
            "recordsFiltered" => intval( $totalFiltered ), // total number of records after searching, if there is no searching then totalFiltered = totalData
            "data"            => $data   // total data array
            );

// for creat a number

echo json_encode($json_data);  // send data as json format

?>
