<?php

require ('../../../engine/db_config.php');
// storing  request (ie, get/post) global array to a variable  
$requestData= $_REQUEST;

$dw1 = '';
$dw2a = '';
$dw2b = '';
$dw3 = '';



include '../../../engine/configdb_for_ajax_datatable.php';
$columns = array( 
// datatable column index  => database column name
    // 0 => '',
    0 => 'KodeLokasi',
    1 => 'Unit',
    2 => 'SubUnit', 
    3 => 'SatuanKerja',
    // 3 => 'NamaKu',
    // 4 => 'NipKu',
    // 5 => 'NamaKB',
    // 6 => 'NIPKB',
    // 3 => '', 
    // 4 => 'DateCreate',   
);

// getting total number records without any search
$sql = "SELECT KodeLokasi, Unit, SubUnit, SatuanKerja";
$sql.=" FROM masterlokasi {$dw1}";
$query=mysqli_query($conn, $sql) or die("master_lokasi_controller: Get Data Barang");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.



if( !empty($requestData['search']['value']) ) {
    // if there is a search parameter
    $sql = "SELECT KodeLokasi, Unit, SubUnit, SatuanKerja";
    $sql.=" FROM masterlokasi WHERE {$dw2a}";
    $sql.=" KodeLokasi LIKE '".$requestData['search']['value']."%' {$dw2b}";
    // $requestData['search']['value'] contains search parameter
    $sql.=" OR Unit LIKE '".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR SubUnit LIKE '".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR SatuanKerja LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $query=mysqli_query($conn, $sql) or die("master_lokasi_controller: Get Barang from Search");
    $totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result without limit in the query 

    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   "; // $requestData['order'][0]['column'] contains colmun index, $requestData['order'][0]['dir'] contains order such as asc/desc , $requestData['start'] contains start row number ,$requestData['length'] contains limit length.
    $query=mysqli_query($conn, $sql) or die("master_lokasi_controller: Get Lokasi from Search"); // again run query with limit
    // $num_rows = mysql_num_rows($query);
    
} else {    

    $sql = "SELECT KodeLokasi, Unit, SubUnit, SatuanKerja";
    $sql.=" FROM masterlokasi {$dw3}";
    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
    $query=mysqli_query($conn, $sql) or die("master_lokasi_controller: Get Barang from Search false");
    // $num_rows = mysql_num_rows($query);
    
}




$data = array();
// for(i=1; i<=$totalFiltered; i++;)
while( $row=mysqli_fetch_array($query)) {  // preparing an array
    $nestedData=array();
    // $nestedData[] = "";
    $nestedData[] = $row["KodeLokasi"];
    $nestedData[] = $row["Unit"];
    $nestedData[] = $row["SubUnit"];
    $nestedData[] = $row["SatuanKerja"];
    // $nestedData[] = $row["NamaKu"];
    // $nestedData[] = $row["NipKu"];
    // $nestedData[] = $row["NamaKB"];
    // $nestedData[] = $row["NIPKB"];
    // $nestedData[] = "<td><center>
    //                  <button data-toggle='tooltip' title='Ubah' class='btn btn-warning btn-sm btn-outline' onclick='editLokasi(\"".$row['KodeLokasi']."\")'> <i class='glyphicon glyphicon-pencil'></i> </button>
    //                  <button data-toggle='tooltip' title='Hapus' class='btn btn-danger btn-sm btn-outline' onclick='removeLokasi(\"".$row['KodeLokasi']."\",\"".$row['Unit']."\")'> <i class='glyphicon glyphicon-trash'></i> </button>
    //                  </center></td>";  

    // $nestedData[] = $row['DateCreate'];
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
