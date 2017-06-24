<?php
include '../../engine/configdb_for_ajax_datatable.php';
// storing  request (ie, get/post) global array to a variable  
$requestData= $_REQUEST;


$columns = array( 
// datatable column index  => database column name
    0 => 'user_id',
    1 => 'user_name',
    2 => 'full_name', 
    3 => 'user_email',
    4 => 'level',
    5 => 'SatuanKerja',
    6 => 'DateCreate',   
);

// getting total number records without any search
$sql = "SELECT user.user_id, user.user_name, user.full_name, user.user_email, user.level, masterlokasi.SatuanKerja, user.DateCreate";
$sql.=" FROM user INNER JOIN masterlokasi ON user.location = masterlokasi.KodeLokasi";
$query=mysqli_query($conn, $sql) or die("master_user_controller: Get Data User #1");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.



if( !empty($requestData['search']['value']) ) {
    // if there is a search parameter
    $sql = "SELECT user.user_id, user.user_name, user.full_name, user.user_email, user.level, masterlokasi.SatuanKerja, user.DateCreate";
    $sql.=" FROM user INNER JOIN masterlokasi ON user.location = masterlokasi.KodeLokasi";
    $sql.=" WHERE user.user_name LIKE '".$requestData['search']['value']."%' ";
    // $requestData['search']['value'] contains search parameter
    $sql.=" OR user.full_name LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR user.user_email LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR user.level LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR masterlokasi.SatuanKerja LIKE '".$requestData['search']['value']."%' ";
    $query=mysqli_query($conn, $sql) or die("master_user_controller: Get User from Search #2");
    $totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result without limit in the query 

    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   "; // $requestData['order'][0]['column'] contains colmun index, $requestData['order'][0]['dir'] contains order such as asc/desc , $requestData['start'] contains start row number ,$requestData['length'] contains limit length.
    $query=mysqli_query($conn, $sql) or die("master_user_controller: Get User from Search #3"); // again run query with limit
    // $num_rows = mysql_num_rows($query);
    
} else {    

    $sql = "SELECT user.user_id, user.user_name, user.full_name, user.user_email, user.level, masterlokasi.SatuanKerja, user.DateCreate";
    $sql.=" FROM user INNER JOIN masterlokasi ON user.location = masterlokasi.KodeLokasi";
    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']." ";
    $query=mysqli_query($conn, $sql) or die("master_user_controller: Get User from Search false #4");
    // $num_rows = mysql_num_rows($query);
    
}




$data = array();
// for(i=1; i<=$totalFiltered; i++;)
while( $row=mysqli_fetch_array($query)) {  // preparing an array
    $nestedData=array();
    // $nestedData[] = "";
    $nestedData[] = $row["user_name"];
    $nestedData[] = $row["full_name"];
    $nestedData[] = $row["user_email"];
    $nestedData[] = $row["level"];
    $nestedData[] = $row["SatuanKerja"];
    // $nestedData[] = $row["NamaKu"];
    // $nestedData[] = $row["NipKu"];
    // $nestedData[] = $row["NamaKB"];
    // $nestedData[] = $row["NIPKB"];
    $nestedData[] = "<td><center>
                     <button data-toggle='tooltip' title='Ubah' class='btn btn-warning btn-sm btn-outline' onclick='editUser(\"".$row['user_name']."\")'> <i class='glyphicon glyphicon-pencil'></i> </button>
                     <button data-toggle='tooltip' title='Hapus' class='btn btn-danger btn-sm btn-outline' onclick='removeUser(\"".$row['user_name']."\")'> <i class='glyphicon glyphicon-trash'></i> </button>
                     </center></td>";  

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