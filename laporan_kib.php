<?php

// Include the main TCPDF library (search for installation path).
require_once('controller/global_function.php');
require_once('assets/tcpdf/tcpdf.php');
require 'engine/db_config.php';

$ftanggal = $_GET['tgl'];
// $tanggal = tanggal_indo($ftanggal);


$sumberdana = $_GET['sd'];
$satuankerja = $_GET['kdlok'];
$kepunitsatker = $_GET['kep'];
$tawal = $_GET['tawal'];
$takhir = $_GET['takhir'];
$semester = $_GET['semester'];

// $sqll = "SELECT * FROM masterlokasi WHERE KodeLokasi = '".$satuankerja."'"; 
// $resultt = $mysqli->query($sqll);

// $resultt = mysqli_query("SELECT * FROM masterlokasi WHERE KodeLokasi = '".$satuankerja."'");
// if (!$resultt) {
//     echo 'Could not run query: ' . mysqli_error();
//     exit;
// }
// $roww = mysqli_fetch_row($resultt);


  // Extend the TCPDF class to create custom Header and Footer
  class MYPDF extends TCPDF {

      //Page header
      public function Header() {

          
          // echo $row[0]; 
          // echo $row[1]; 



          // EXAMPLES SQL FETCH ROW
          // $result = mysql_query("SELECT id,email FROM people WHERE id = '42'");
          // if (!$result) {
          //     echo 'Could not run query: ' . mysql_error();
          //     exit;
          // }
          // $row = mysql_fetch_row($result);

          // echo $row[0]; 
          // echo $row[1]; 
          



          // while($roww = $resultt->fetch_assoc()){

          // Logo
          $image_file = K_PATH_IMAGES.'logo_head.png';

          $this->Image($image_file, 10, 30, 13, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
          // Set font
          $this->SetFont('helvetica', 'B', 14);
          // Title
          $this->Ln(-13); 
          $this->Cell(0,15, 'KARTU INVENTARIS BARANG (KIB)', 0, false, 'C', 0, '', 0, false, 'M', 'M');
          // $this->SetFont('times', '', 14);
          $this->Cell(0, 15, 'MODEL INV.2', 0, false, 'R', 0, '', 0, false, 'M', 'M');

          $this->Ln(8); 
          // $this->SetFont('times', 'B', 14);
          $this->Cell(0, 15, 'A. TANAH', 0, false, 'C', 0, '', 0, false, 'M', 'M');

          $this->Ln(4); 
          $this->SetX(25); 
          $this->SetFont('times', '', 12);
          $this->Cell(20, -5, ' KODE LOKASI', 0, false, '');
          $this->SetX(65);
          $this->Cell(0,0,': Kode Lokasi...',0,0,'');

          $this->Ln(6); 
          $this->SetX(25);
          $this->Cell(20, -5, ' SUB UNIT', 0, false, '');
          $this->SetX(65);
          $this->Cell(0,0,': Sub Unit...',0,0,'');

          $this->Ln(6); 
          $this->SetX(25);
          $this->Cell(20, -5, ' SATUAN KERJA', 0, false, '');
          $this->SetX(65);
          $this->Cell(0,0,': Satuan Kerja...',0,0,'');
          $this->Cell(0,5,'KODE BARANG: 01',0,0,'R');

          $this->SetMargins(0, 55, 0, 0);
          // }
      }

      // Page footer
      public function Footer() {
          // Position at 15 mm from bottom
          $this->SetY(-15);
          // Set font
          $this->SetFont('helvetica', 'I', 8);
          // Page number
          $this->Cell(0, 10, 'Page '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
      }
  }

// create new PDF document
$pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Admin');
$pdf->SetTitle('Kartu Inventaris Barang A.Tanah');
$pdf->SetSubject('Kartu Inventaris Barang A.Tanah');
$pdf->SetKeywords('Kartu Inventaris Barang A.Tanah');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE, PDF_HEADER_STRING);

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
    require_once(dirname(__FILE__).'/lang/eng.php');
    $pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf->SetFont('times', '', 11);


// $pdf->SetMargins(5, 30, 10, true);
// add a page
$pdf->AddPage();
// $pdf->Ln(25);
$pdf->SetX(10);  

// set some text to print
// $txt = <<<EOD
// TCPDF Example 003

// Custom page header and footer are defined by extending the TCPDF class and overriding the Header() and Footer() methods.
// EOD;

// print a block of text using Write()
// $pdf->Write(0, $txt, '', 0, 'C', true, 0, false, false, 0);

// ---------------------------------------------------------



// $tbl = <<<EOD
// <table cellspacing="0" cellpadding="1" border="1">
//     <tr>
//       <th align="center" style="font-weight: bold; background-color: #ededed" width="40" rowspan="3">No</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" width="120" rowspan="3">Jenis Barang / Nama Barang</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" width="110" colspan="2">Nomor</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" width="40" rowspan="3">Luas (m)</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="3">Tahun Pengadaan</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="3">Letak / Alamat</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" colspan="3">Status Tanah</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="3">Penggunaan</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="3">Asal-usul</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" width="90" rowspan="3">Nilai</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" width="80" rowspan="3">Keterangan</th>
//     </tr>
//     <tr>
//       <th align="center" style="font-weight: bold; background-color: #ededed" width="60" rowspan="2">Kode Barang</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" width="50" rowspan="2">Register</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="2">Hak</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed" colspan="2">Sertifikat</th>
//     </tr>
//     <tr>
//       <th align="center" style="font-weight: bold; background-color: #ededed">Tanggal</th>
//       <th align="center" style="font-weight: bold; background-color: #ededed">Nomor</th>
//     </tr>
//     <tr>
//       <td style="font-size: 10px;" align="center">12392</td>
//       <td style="font-size: 10px;" align="center">Tanah Bangunan Kantor Pemerintahan</td>
//       <td style="font-size: 10px;" align="center">1039010001</td>
//       <td style="font-size: 10px;" align="center">00001</td>
//       <td style="font-size: 10px;" align="center">4.020</td>
//       <td style="font-size: 10px;" align="center">1981</td>
//       <td style="font-size: 10px;" align="center">JLN. KENANGA 1 SITUBONDO</td>
//       <td style="font-size: 10px;" align="center">Hak Pakai</td>
//       <td style="font-size: 10px;" align="center">20/08/1991</td>
//       <td style="font-size: 10px;" align="center">SHP NO 13</td>
//       <td style="font-size: 10px;" align="center">KANTOR SEKRETARIAT DPRD</td>
//       <td style="font-size: 10px;" align="center">APBD</td>
//       <td style="font-size: 10px;" align="center">3.015.000.000,00</td>
//       <td style="font-size: 10px;" align="center">KANTOR SEKRETARIAT DPRD</td>
//     </tr>

// </table>
// EOD;

// $pdf->writeHTML($tbl, true, false, false, false, '');









$tbl_header = '<table cellspacing="0" cellpadding="1" border="1">
    <tr>
      <th align="center" style="font-weight: bold; background-color: #ededed" width="40" rowspan="3">No</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" width="120" rowspan="3">Jenis Barang / Nama Barang</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" width="110" colspan="2">Nomor</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" width="40" rowspan="3">Luas (m)</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="3">Tahun Pengadaan</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="3">Letak / Alamat</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" colspan="3">Status Tanah</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="3">Penggunaan</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="3">Asal-usul</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" width="90" rowspan="3">Nilai</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" width="80" rowspan="3">Keterangan</th>
    </tr>
    <tr>
      <th align="center" style="font-weight: bold; background-color: #ededed" width="60" rowspan="2">Kode Barang</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" width="50" rowspan="2">Register</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" rowspan="2">Hak</th>
      <th align="center" style="font-weight: bold; background-color: #ededed" colspan="2">Sertifikat</th>
    </tr>
    <tr>
      <th align="center" style="font-weight: bold; background-color: #ededed">Tanggal</th>
      <th align="center" style="font-weight: bold; background-color: #ededed">Nomor</th>
    </tr>';


$sql = "SELECT * FROM datatanah WHERE KodeLokasi = '".$satuankerja."'"; 
$result = $mysqli->query($sql);

// $json = [];
$i=1;
$tbl ='';
$totalnya = 0;
while($row = $result->fetch_assoc()){
    // $json[] = ['no'=>$i, 'kodetanah'=>$row['KodeTanah'], 'goltanah'=>$row['GolonganTanah']];
$tbl .='
<tr>
      <td style="font-size: 10px;" align="center">'.$i.'</td>
      <td style="font-size: 10px;" align="center">'.$row['KodeBarang'].'</td>
      <td style="font-size: 10px;" align="center">'.$row['KodeBarang'].'</td>
      <td style="font-size: 10px;" align="center">'.$row['NoReg'].'</td>
      <td style="font-size: 10px;" align="center">'.$row['LuasTanah'].'</td>
      <td style="font-size: 10px;" align="center">'.$row['TahunPerolehan'].'</td>
      <td style="font-size: 10px;" align="center">'.$row['Letak'].'</td>
      <td style="font-size: 10px;" align="center">'.$row['StatusTanah'].'</td>
      <td style="font-size: 10px;" align="center">'.tanggal_indo(date('Y-m-d', strtotime($row['Tanggal']))).'</td>
      <td style="font-size: 10px;" align="center">'.$row['Nomor'].'</td>
      <td style="font-size: 10px;" align="center">'.$row['Penggunaan'].'</td>
      <td style="font-size: 10px;" align="center">'.$row['AsalUsul'].'</td>
      <td style="font-size: 10px;" align="center">Rp '.number_format($row['NilaiPerolehan'], 2, ",", ".").'</td>
      <td style="font-size: 10px;" align="center">'.$row['Keterangan'].'</td>
    </tr>
';

$i++;
$totalnya += $row['NilaiPerolehan'];
}

// echo json_encode($json);

$tbl_footer = '<tr style="line-height:30px; background-color: #ededed;">
    <td colspan="12" align="right" style="font-size: 11px; font-weight: bold;">Total &nbsp;&nbsp;</td>
    <td colspan="2" style="font-size: 11px; font-weight: bold;" align="left"> Rp '.number_format($totalnya, 2, ",", ".").'</td>
    
  </tr>
</table>';


//SETTING WITH SELECT FROM MYSQL DAN TARUH DI $TBL
// while ($row_Pro_Record = mysql_fetch_assoc($Pro_Record)) {
// $tbl .= '
//     <tr>
//         <td>'.$p_title.'</td>
//         <td>'.$p_size.'</td>
//         <td>'.$p_price.'</td>
//         <td><img width="120"src="http://localhost/product/images/'.$c_name.'/'.$p_image.'.jpg"></td>
//     </tr>
// ';
// }
// output the HTML content
$pdf->SetFont('helvetica', '');
$pdf->writeHTML($tbl_header . $tbl . $tbl_footer, true, false, false, false, '');


$pdf->Ln(10);
$pdf->SetX(10);  
$pdf->SetFont('times', '', 11);
$pdf->Cell(0, 0, 'MENGETAHUI :', 0, false, 'M');
$pdf->SetX(200); 
// $pdf->Cell(0, 0, 'Situbondo, '.$tanggal, 0, false, 'M');
$pdf->Cell(0, 0, 'Situbondo, ...............', 0, false, 'M');

$pdf->Ln(6);
$pdf->SetX(10);
$pdf->Cell(0, 0, 'KEPALA UNIT / SATUAN KERJA', 0, false, 'M');
$pdf->SetX(200); 
$pdf->Cell(0, 0, 'KEPALA BIDANG / PENGURUSAN BARANG', 0, false, 'M');


$pdf->Ln(20);
$pdf->SetX(10);  
$pdf->SetFont('times', 'B', 11);
$pdf->Cell(0, 0, '(Drs. H. SOFWAN HADI M.Si)', 0, false, 'M');
$pdf->SetX(200); 
$pdf->Cell(0, 0, '(SUGENG PRASETYO, SH)', 0, false, 'M');
$pdf->Ln(5);
$pdf->SetX(10);  
$pdf->SetFont('times', 'B', 11);
$pdf->Cell(0, 0, 'Nip. 10928 12738 1230 02', 0, false, 'M');
$pdf->SetX(200); 
$pdf->Cell(0, 0, 'Nip. 4567 454634 3473 34', 0, false, 'M');






// $pdf->writeHTML('<script type="text/javascript">loader.image(false)</script>');
//Close and output PDF document
$pdf->Output('example_003.pdf', 'I');



//============================================================+
// END OF FILE
//============================================================+

?>
<style type="text/css">
  .tanah-value{
    font-size: 20px;
  }
</style>