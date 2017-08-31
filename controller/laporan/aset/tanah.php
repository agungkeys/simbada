<?php
include '../../../engine/configdb_for_ajax_datatable.php';
// storing  request (ie, get/post) global array to a variable  
$requestData= $_REQUEST;


$columns = array( 
// datatable column index  => database column name
    // 0 => '',
    0 => 'KodeTanah',1 => 'SubUnit', 2 => 'SatuanKerja',3 => 'NamaPemilik',4 => 'GolonganTanah',5 => 'NamaBarang',6 => 'Letak',7 => 'LuasTanah',8 => 'StatusTanah',9 => 'Tanggal',10 => 'Nomor',11 => 'TahunPerolehan',12 => 'Penggunaan',13 => 'BatasUtara',14 => 'BatasTimur',15 => 'BatasSelatan', 16 => 'BatasBarat', 17 => 'RangeHarga1', 18 => 'RangeHarga2', 19 => 'HargaTanahM2', 20 => 'HargaTanah', 21 => 'NilaiPerolehan', 22 => 'NilaiBaru', 23 => 'Keterangan', 24 => 'PenanggungJawab', 25 => 'EntryUser' 
);

// getting total number records without any search
$sql = "SELECT datatanah.KodeTanah, masterlokasi.SubUnit, masterlokasi.SatuanKerja, masterpemilik.NamaPemilik, datatanah.GolonganTanah, masterbarang.NamaBarang, datatanah.Letak, datatanah.LuasTanah, datatanah.StatusTanah, datatanah.Tanggal, datatanah.Nomor, datatanah.TahunPerolehan, datatanah.Penggunaan, datatanah.BatasUtara, datatanah.BatasTimur, datatanah.BatasSelatan, datatanah.BatasBarat, datatanah.RangeHarga1, datatanah.RangeHarga2, datatanah.HargaTanahM2, datatanah.HargaTanah, datatanah.NilaiPerolehan, datatanah.NilaiBaru, datatanah.Keterangan, datatanah.PenanggungJawab, datatanah.EntryUser";
$sql.=" FROM datatanah 
    INNER JOIN masterlokasi ON datatanah.KodeLokasi = masterlokasi.KodeLokasi
    INNER JOIN masterpemilik ON datatanah.KodePemilik = masterpemilik.KodePemilik
    INNER JOIN masterbarang ON datatanah.KodeBarang = masterbarang.KodeBarang";


// $sql = "SELECT kategoridetailformsurvei.ID, kategoriformsurvei.Kategori, kategoridetailformsurvei.Value, kategoridetailformsurvei.Ket_1, kategoridetailformsurvei.Ket_2, kategoridetailformsurvei.DateCreate";
// $sql.=" FROM kategoridetailformsurvei INNER JOIN kategoriformsurvei ON kategoridetailformsurvei.IDKategori = kategoriformsurvei.ID";
// $sql.= " FROM kategoridetailformsurvei";
$query = mysqli_query($conn, $sql) or die("aset_tanah_controller: Get Aset Tanah #1");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.



if( !empty($requestData['search']['value']) ) {
    // if there is a search parameter
    $sql = "SELECT datatanah.KodeTanah, masterlokasi.SubUnit, masterlokasi.SatuanKerja, masterpemilik.NamaPemilik, datatanah.GolonganTanah, masterbarang.NamaBarang, datatanah.Letak, datatanah.LuasTanah, datatanah.StatusTanah, datatanah.Tanggal, datatanah.Nomor, datatanah.TahunPerolehan, datatanah.Penggunaan, datatanah.BatasUtara, datatanah.BatasTimur, datatanah.BatasSelatan, datatanah.BatasBarat, datatanah.RangeHarga1, datatanah.RangeHarga2, datatanah.HargaTanahM2, datatanah.HargaTanah, datatanah.NilaiPerolehan, datatanah.NilaiBaru, datatanah.Keterangan, datatanah.PenanggungJawab, datatanah.EntryUser";
$sql.=" FROM datatanah 
    INNER JOIN masterlokasi ON datatanah.KodeLokasi = masterlokasi.KodeLokasi
    INNER JOIN masterpemilik ON datatanah.KodePemilik = masterpemilik.KodePemilik
    INNER JOIN masterbarang ON datatanah.KodeBarang = masterbarang.KodeBarang";


    $sql.=" WHERE datatanah.KodeTanah LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR masterlokasi.SubUnit LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR masterlokasi.SatuanKerja LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR masterpemilik.NamaPemilik LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.GolonganTanah LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR masterbarang.NamaBarang LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.Letak LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.LuasTanah LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.StatusTanah LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.Tanggal LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.Nomor LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.TahunPerolehan LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.Penggunaan LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.BatasUtara LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.BatasTimur LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.BatasSelatan LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.BatasBarat LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.RangeHarga1 LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.RangeHarga2 LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.HargaTanahM2 LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.HargaTanah LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.NilaiPerolehan LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.NilaiBaru LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.Keterangan LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.PenanggungJawab LIKE '".$requestData['search']['value']."%' ";
    $sql.=" OR datatanah.EntryUser LIKE '".$requestData['search']['value']."%' ";

    
    $query=mysqli_query($conn, $sql) or die("aset_tanah_controller: Get Aset Tanah From Search#1");
    $totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result without limit in the query 

    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   "; // $requestData['order'][0]['column'] contains colmun index, $requestData['order'][0]['dir'] contains order such as asc/desc , $requestData['start'] contains start row number ,$requestData['length'] contains limit length.
    $query=mysqli_query($conn, $sql) or die("aset_tanah_controller: Get Aset Tanah From Search#2"); // again run query with limit
    // $num_rows = mysql_num_rows($query);
    
} else {    
    $sql = "SELECT datatanah.KodeTanah, masterlokasi.SubUnit, masterlokasi.SatuanKerja, masterpemilik.NamaPemilik, datatanah.GolonganTanah, masterbarang.NamaBarang, datatanah.Letak, datatanah.LuasTanah, datatanah.StatusTanah, datatanah.Tanggal, datatanah.Nomor, datatanah.TahunPerolehan, datatanah.Penggunaan, datatanah.BatasUtara, datatanah.BatasTimur, datatanah.BatasSelatan, datatanah.BatasBarat, datatanah.RangeHarga1, datatanah.RangeHarga2, datatanah.HargaTanahM2, datatanah.HargaTanah, datatanah.NilaiPerolehan, datatanah.NilaiBaru, datatanah.Keterangan, datatanah.PenanggungJawab, datatanah.EntryUser";
    $sql.=" FROM datatanah 
    INNER JOIN masterlokasi ON datatanah.KodeLokasi = masterlokasi.KodeLokasi
    INNER JOIN masterpemilik ON datatanah.KodePemilik = masterpemilik.KodePemilik
    INNER JOIN masterbarang ON datatanah.KodeBarang = masterbarang.KodeBarang";

    $sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."   LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
    $query=mysqli_query($conn, $sql) or die("aset_tanah_controller: Get Aset Tanah From Search false");
    // $num_rows = mysql_num_rows($query);
    
}




$data = array();
// for(i=1; i<=$totalFiltered; i++;)
while( $row=mysqli_fetch_array($query)) {  // preparing an array
    $nestedData=array();
    // $nestedData[] = "";
    $nestedData[] = $row["KodeTanah"];
    $nestedData[] = $row["SubUnit"];
    $nestedData[] = $row["SatuanKerja"];
    $nestedData[] = $row["NamaPemilik"];
    $nestedData[] = $row["GolonganTanah"];
    $nestedData[] = $row["NamaBarang"];
    $nestedData[] = $row["Letak"];
    $nestedData[] = $row["LuasTanah"];
    $nestedData[] = $row["StatusTanah"];
    $nestedData[] = $row["Tanggal"];
    $nestedData[] = $row["Nomor"];
    $nestedData[] = $row["TahunPerolehan"];
    $nestedData[] = $row["Penggunaan"];
    $nestedData[] = $row["BatasUtara"];
    $nestedData[] = $row["BatasTimur"];
    $nestedData[] = $row["BatasSelatan"];
    $nestedData[] = $row["BatasBarat"];
    $nestedData[] = $row["RangeHarga1"];
    $nestedData[] = $row["RangeHarga2"];
    $nestedData[] = $row["HargaTanahM2"];
    $nestedData[] = $row["HargaTanah"];
    $nestedData[] = $row["NilaiPerolehan"];
    $nestedData[] = $row["NilaiBaru"];
    $nestedData[] = $row["Keterangan"];
    $nestedData[] = $row["PenanggungJawab"];
    $nestedData[] = $row["EntryUser"];
    // $nestedData[] = $row["KodeRekeningLama"];

    // $nestedData[] = "<td><center>
    //                  <button data-toggle='tooltip' title='Ubah' class='btn btn-warning btn-sm btn-outline' onclick='editDetail(\"".$row['ID']."\")'> <i class='glyphicon glyphicon-pencil'></i> </button>
    //                  <button data-toggle='tooltip' title='Hapus' class='btn btn-danger btn-sm btn-outline' onclick='removeDetail(\"".$row['ID']."\")'> <i class='glyphicon glyphicon-trash'></i> </button>
    //                  </center></td>";

    // $nestedData[] = $row["DateCreate"];
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
