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

    $dw1 = 'WHERE view_invallhapus.KodeLokasi IN('.$data_arr_location.')';
    $dw2a = 'view_invallhapus.KodeLokasi IN('.$data_arr_location.') AND';
    $dw2b = 'AND view_invallhapus.KodeLokasi IN('.$data_arr_location.')';
    $dw3 = 'WHERE view_invallhapus.KodeLokasi IN('.$data_arr_location.')';
}


include '../../../engine/configdb_for_ajax_datatable.php';
$columns = array( 
// datatable column index  => database column name\

    0 => 'KodeAlat',
    1 => 'SubUnit',
    2 => 'SatuanKerja',
    3 => 'JenisNamaBarang',
    4 => 'NamaBarang',
    5 => 'Merk',
    6 => 'Bahan',
    7 => 'Ukuran',
    8 => 'TahunPembelian',
    9 => 'Jumlah',
    10 => 'Nilai',
    11 => 'AsalUsul',
    12 => 'AsalUsulLainnya',
    13 => 'KetStatus',
    14 => 'KodeLokasi',
    15 => 'Status'
);


// getting total number records without any search
$sql = "SELECT view_invallhapus.KodeAlat, masterlokasi.SubUnit, masterlokasi.SatuanKerja, view_invallhapus.JenisNamaBarang, view_invallhapus.NamaBarang, view_invallhapus.Merk, view_invallhapus.Bahan, view_invallhapus.Ukuran, view_invallhapus.TahunPembelian, view_invallhapus.Jumlah, view_invallhapus.Nilai, view_invallhapus.AsalUsul, view_invallhapus.AsalUsulLainnya, view_invallhapus.KetStatus, view_invallhapus.KodeLokasi, view_invallhapus.Status";

$sql.=" FROM view_invallhapus";
$sql.=" INNER JOIN masterlokasi ON masterlokasi.KodeLokasi = view_invallhapus.KodeLokasi";
$sql.=" {$dw1}";


$query=mysqli_query($conn, $sql) or die("data_penghapusan_controller: Get Data Penghapusan 1st");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.



if( !empty($requestData['search']['value']) ) {
    // if there is a search parameter
    $sql = "SELECT view_invallhapus.KodeAlat, masterlokasi.SubUnit, masterlokasi.SatuanKerja, view_invallhapus.JenisNamaBarang, view_invallhapus.NamaBarang, view_invallhapus.Merk, view_invallhapus.Bahan, view_invallhapus.Ukuran, view_invallhapus.TahunPembelian, view_invallhapus.Jumlah, view_invallhapus.Nilai, view_invallhapus.AsalUsul, view_invallhapus.AsalUsulLainnya, view_invallhapus.KetStatus, view_invallhapus.KodeLokasi, view_invallhapus.Status";
    $sql.=" FROM view_invallhapus INNER JOIN masterlokasi ON masterlokasi.KodeLokasi = view_invallhapus.KodeLokasi WHERE {$dw2a}";

    $sql.=" KodeAlat LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  SubUnit LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  SatuanKerja LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  JenisNamaBarang LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  NamaBarang LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Merk LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Bahan LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    
    $sql.=" OR  Ukuran LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  TahunPembelian LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Jumlah LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Nilai LIKE '%".$requestData['search']['value']."%' {$dw2b}";

    $sql.=" OR  AsalUsul LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  AsalUsulLainnya LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  KetStatus LIKE '%".$requestData['search']['value']."%' {$dw2b}";
    $sql.=" OR  Status LIKE '%".$requestData['search']['value']."%' {$dw2b}";

    

    $query=mysqli_query($conn, $sql) or die("data_penghapusan_controller: Get Penghapusan from Search 1");
    $totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result without limit in the query 

    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   "; // $requestData['order'][0]['column'] contains colmun index, $requestData['order'][0]['dir'] contains order such as asc/desc , $requestData['start'] contains start row number ,$requestData['length'] contains limit length.
    $query=mysqli_query($conn, $sql) or die("data_penghapusan_controller: Get Penghapusan from Search 2"); // again run query with limit
    // $num_rows = mysql_num_rows($query);
    
} else {    
    $sql = "SELECT view_invallhapus.KodeAlat, masterlokasi.SubUnit, masterlokasi.SatuanKerja, view_invallhapus.JenisNamaBarang, view_invallhapus.NamaBarang, view_invallhapus.Merk, view_invallhapus.Bahan, view_invallhapus.Ukuran, view_invallhapus.TahunPembelian, view_invallhapus.Jumlah, view_invallhapus.Nilai, view_invallhapus.AsalUsul, view_invallhapus.AsalUsulLainnya, view_invallhapus.KetStatus, view_invallhapus.KodeLokasi, view_invallhapus.Status";
    $sql.=" FROM view_invallhapus INNER JOIN masterlokasi ON masterlokasi.KodeLokasi = view_invallhapus.KodeLokasi {$dw3}";
    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
    $query=mysqli_query($conn, $sql) or die("master_view_invallhapus_controller: Get Aset Jembatan from Search false");
    // $num_rows = mysql_num_rows($query);
}


$data = array();
// for(i=1; i<=$totalFiltered; i++;)
while( $row=mysqli_fetch_array($query)) {  // preparing an array
    $nestedData=array();  

    $nestedData[] = $row["KodeAlat"];
    $nestedData[] = $row["SubUnit"];
    $nestedData[] = $row["SatuanKerja"];
    $nestedData[] = $row["JenisNamaBarang"];
    $nestedData[] = $row["NamaBarang"];
    $nestedData[] = $row["Merk"];
    $nestedData[] = $row["Bahan"];
    $nestedData[] = $row["Ukuran"];
    $nestedData[] = $row["TahunPembelian"];
    $nestedData[] = $row["Jumlah"];
    $nestedData[] = $row["Nilai"];
    $nestedData[] = $row["AsalUsul"];
    $nestedData[] = $row["AsalUsulLainnya"];
    $nestedData[] = $row["KetStatus"];
    $nestedData[] = $row["Status"];
       
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
