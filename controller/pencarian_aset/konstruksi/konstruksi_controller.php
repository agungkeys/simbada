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
    0 => 'KodeKonstruksi', 
    1 => 'SubUnit',
    2 => 'SatuanKerja',
    3 => 'NamaPemilik', 
    4 => 'NamaBangunan', 
    5 => 'Konstruksi',
    6 => 'Letak',
    7 => 'LuasBangunan',
    8 => 'Tingkat',
    9 => 'Beton', 
    10 => 'StatusTanah',
    11 => 'TglMulai',
    12 => 'KodeTanah',
    13 => 'Dokumen',
    14 => 'TanggalDokumen',
    15 => 'NomorDokumen',
     
    16 => 'AsalUsul',
    17 => 'NilaiPerolehan', 
    18 => 'Keterangan', 
    19 => 'PenanggungJawab', 
    20 => 'EntryUser'  
);




// getting total number records without any search
$sql = "SELECT KodeKonstruksi, KodeLokasi, SubUnit, SatuanKerja, NamaPemilik, NamaBangunan, Konstruksi, Letak, LuasBangunan, Tingkat, Beton, StatusTanah, TglMulai, KodeTanah, Dokumen, TanggalDokumen, NomorDokumen, AsalUsul, NilaiPerolehan, Keterangan, PenanggungJawab, EntryUser, Status";
$sql.=" FROM aset_konstruksi {$dw1}";


$query=mysqli_query($conn, $sql) or die("aset_alat_konstruksi_controller: Get Aset Alat Konstruksi");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.



if( !empty($requestData['search']['value']) ) {
    // if there is a search parameter
    $sql = "SELECT KodeKonstruksi, KodeLokasi, SubUnit, SatuanKerja, NamaPemilik, NamaBangunan, Konstruksi, Letak, LuasBangunan, Tingkat, Beton, StatusTanah, TglMulai, KodeTanah, Dokumen, TanggalDokumen, NomorDokumen, AsalUsul, NilaiPerolehan, Keterangan, PenanggungJawab, EntryUser, Status";
    $sql.=" FROM aset_konstruksi WHERE {$dw2a}";
    $sql.=" KodeKonstruksi LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  SubUnit LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  SatuanKerja LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NamaPemilik LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NamaBangunan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Konstruksi LIKE '%".$requestData['search']['value']."%' {$dw2b}";

    $sql.=" OR  Letak LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  LuasBangunan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Tingkat LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Beton LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  StatusTanah LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  TglMulai LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  KodeTanah LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Dokumen LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  TanggalDokumen LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NomorDokumen LIKE '%".$requestData['search']['value']."%' {$dw2b}";

    $sql.=" OR  AsalUsul LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NilaiPerolehan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Keterangan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  PenanggungJawab LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  EntryUser LIKE '%".$requestData['search']['value']."%' {$dw2b}";

    

    $query=mysqli_query($conn, $sql) or die("aset_alat_konstruksi_controller: Get Aset Alat Konstruksi from Search 1");
    $totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result without limit in the query 

    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   "; // $requestData['order'][0]['column'] contains colmun index, $requestData['order'][0]['dir'] contains order such as asc/desc , $requestData['start'] contains start row number ,$requestData['length'] contains limit length.
    $query=mysqli_query($conn, $sql) or die("aset_alat_konstruksi_controller: Get Aset Alat Konstruksi from Search 2"); // again run query with limit
    // $num_rows = mysql_num_rows($query);
    
} else {    
    $sql = "SELECT KodeKonstruksi, KodeLokasi, SubUnit, SatuanKerja, NamaPemilik, NamaBangunan, Konstruksi, Letak, LuasBangunan, Tingkat, Beton, StatusTanah, TglMulai, KodeTanah, Dokumen, TanggalDokumen, NomorDokumen, AsalUsul, NilaiPerolehan, Keterangan, PenanggungJawab, EntryUser, Status";
    $sql.=" FROM aset_konstruksi {$dw3}";
    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
    $query=mysqli_query($conn, $sql) or die("aset_alat_konstruksi_controller: Get Alat Konstruksi from Search false");
    // $num_rows = mysql_num_rows($query);
}


$data = array();
// for(i=1; i<=$totalFiltered; i++;)
while( $row=mysqli_fetch_array($query)) {  // preparing an array
    $nestedData=array();
    $nestedData[] = $row["KodeKonstruksi"]; 
    $nestedData[] = $row["SubUnit"];
    $nestedData[] = $row["SatuanKerja"];
    $nestedData[] = $row["NamaPemilik"]; 
    $nestedData[] = $row["NamaBangunan"]; 
    $nestedData[] = $row["Konstruksi"];
    $nestedData[] = $row["Letak"];
    $nestedData[] = $row["LuasBangunan"];
    $nestedData[] = $row["Tingkat"];
    $nestedData[] = $row["Beton"];
    $nestedData[] = $row["StatusTanah"]; 
    $nestedData[] = $row["TglMulai"]; 
    $nestedData[] = $row["KodeTanah"]; 
    $nestedData[] = $row["Dokumen"]; 
    $nestedData[] = $row["TanggalDokumen"]; 
    $nestedData[] = $row["NomorDokumen"]; 
   
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
