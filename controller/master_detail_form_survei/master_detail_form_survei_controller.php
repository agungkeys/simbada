<?php
include '../../engine/configdb_for_ajax_datatable.php';
// storing  request (ie, get/post) global array to a variable  
$requestData= $_REQUEST;


$columns = array( 
// datatable column index  => database column name
    // 0 => '',
    0 => 'ID',
    1 => 'IDKategori', 
    2 => 'Value',
    3 => 'Ket_1',
    4 => 'Ket_2',
    5 => 'DateCreate',
    // 6 => 'KodeRekeningLama'   
);

// getting total number records without any search
$sql = "SELECT kategoridetailformsurvei.ID, kategoriformsurvei.Kategori, kategoridetailformsurvei.Value, kategoridetailformsurvei.Ket_1, kategoridetailformsurvei.Ket_2, kategoridetailformsurvei.DateCreate";
$sql.=" FROM kategoridetailformsurvei INNER JOIN kategoriformsurvei ON kategoridetailformsurvei.IDKategori = kategoriformsurvei.ID";
// $sql.= " FROM kategoridetailformsurvei";
$query = mysqli_query($conn, $sql) or die("master_detail_controller: Get Data Kategori #1");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.



if( !empty($requestData['search']['value']) ) {
    // if there is a search parameter
    $sql = "SELECT kategoridetailformsurvei.ID, kategoriformsurvei.Kategori, kategoridetailformsurvei.Value, kategoridetailformsurvei.Ket_1, kategoridetailformsurvei.Ket_2, kategoridetailformsurvei.DateCreate";
    $sql.=" FROM kategoridetailformsurvei INNER JOIN kategoriformsurvei ON kategoridetailformsurvei.IDKategori = kategoriformsurvei.ID";
    $sql.=" WHERE kategoridetailformsurvei.ID LIKE '".$requestData['search']['value']."%' ";
    // $requestData['search']['value'] contains search parameter
    $sql.=" OR kategoriformsurvei.Kategori LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR kategoridetailformsurvei.Value LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR kategoridetailformsurvei.Ket_1 LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR kategoridetailformsurvei.Ket_2 LIKE '".$requestData['search']['value']."%' ";
    // $sql.=" OR KodeRekeningLama LIKE '".$requestData['search']['value']."%' ";
    $query=mysqli_query($conn, $sql) or die("master_detail_controller: Get Detail from Search #1");
    $totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result without limit in the query 

    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   "; // $requestData['order'][0]['column'] contains colmun index, $requestData['order'][0]['dir'] contains order such as asc/desc , $requestData['start'] contains start row number ,$requestData['length'] contains limit length.
    $query=mysqli_query($conn, $sql) or die("master_detail_controller: Get Detail from Search"); // again run query with limit
    // $num_rows = mysql_num_rows($query);
    
} else {    

    $sql = "SELECT kategoridetailformsurvei.ID, kategoriformsurvei.Kategori, kategoridetailformsurvei.Value, kategoridetailformsurvei.Ket_1, kategoridetailformsurvei.Ket_2, kategoridetailformsurvei.DateCreate";
    $sql.=" FROM kategoridetailformsurvei INNER JOIN kategoriformsurvei ON kategoridetailformsurvei.IDKategori = kategoriformsurvei.ID";
    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
    $query=mysqli_query($conn, $sql) or die("master_detail_controller: Get Detail from Search false");
    // $num_rows = mysql_num_rows($query);
    
}




$data = array();
// for(i=1; i<=$totalFiltered; i++;)
while( $row=mysqli_fetch_array($query)) {  // preparing an array
    $nestedData=array();
    // $nestedData[] = "";
    $nestedData[] = $row["ID"];
    $nestedData[] = $row["Kategori"];
    $nestedData[] = $row["Value"];
    $nestedData[] = "<span class='label label-primary label-pill'>".$row["Ket_1"]."</span>";
    $nestedData[] = $row["Ket_2"];
    // $nestedData[] = $row["KodeRekeningLama"];
    $nestedData[] = "<td><center>
                     <button data-toggle='tooltip' title='Ubah' class='btn btn-warning btn-sm btn-outline' onclick='editDetail(\"".$row['ID']."\")'> <i class='glyphicon glyphicon-pencil'></i> </button>
                     <button data-toggle='tooltip' title='Hapus' class='btn btn-danger btn-sm btn-outline' onclick='removeDetail(\"".$row['ID']."\")'> <i class='glyphicon glyphicon-trash'></i> </button>
                     </center></td>";   
    $nestedData[] = $row["DateCreate"];
    // $nestedData[] = $requestData['DateCreate'];
    // $nestedData[] = $requestData['length'];
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
