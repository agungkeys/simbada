<?php
require('assets/tcpdf/tcpdf.php');
require ('engine/db_config.php');
require ('controller/global_function.php');

$setlogo      = 'logo_head_bw.png';
$tanggal = $_GET['tgl'];

$sumberdana = $_GET['sd'];
$satuankerja = $_GET['kdlok'];
$kepunitsatker = $_GET['kep'];
$tawal = $_GET['tawal'];
$takhir = $_GET['takhir'];
$semester = $_GET['semester'];

$sqll = "SELECT * FROM masterlokasi WHERE KodeLokasi = '".$satuankerja."'"; 
$resultt = $mysqli->query($sqll);
$roww = mysqli_fetch_row($resultt);

class MYPDF extends TCPDF
{
  public function Header()
   {
      // NOP! Overrides default header
   }
  public function Footer()
  {
    // Position at 15 mm from bottom
    $this->SetY(-20);
    // Set font
    $this->SetFont('helvetica', 'I', 7);
    $this->Cell(0, 10, 'Pengarsipan Aset '.date("Y").' Pemerintah Kabupaten Situbondo', 0, false, 'C', 0, '', 0, false, 'T', 'M');
    $this->Ln(4);
    $this->SetFont('helvetica', 'I', 8);
    // Page number
    $this->Cell(0, 10, 'Page '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');

  }

  // Better table
  function ImprovedTable($header, $data)
  {
      // Column widths
      $w = array(7.1, 37, 19, 9.2, 10.6, 9.9, 28, 15.9, 17.6, 19.8, 25, 14.1, 28, 35);
      $tot = 0;
      
      // Header
      $this->SetFont('Times','',5);
      for($i=0;$i<count($header);$i++)
          $this->Cell($w[$i],0,$header[$i],0,0,'C');
      $this->Ln();
      // Data
      $this->SetFont('Times','',8);
      foreach($data as $row)
      {
          //Check Data Terpanjang
          $lengths = array_map('strlen', $row);
          $alengths = max($lengths);
          // $aheightrow = 6;
          if($alengths < 20){
            $aheightrow = 6;
            $padtopjb = 6;
          }
          if($alengths > 20){
            $aheightrow = 9;
            $padtopjb = 12;
          }
          if($alengths > 23){
            $aheightrow = 11;
          }
          if($alengths > 25){
            $aheightrow = 11;
          }
          if($alengths > 31){
            $aheightrow = 13;
          }
          if($alengths > 40){
            $aheightrow = 15;
          }
          
          $this->Cell($w[0], $aheightrow, $alengths,1,0,'C');
          // $this->MultiCell($w[1], 10, $row[1], 1, 'L', 0, 0, '', '', true,'M');
          $this->MultiCell($w[1], $aheightrow,  $row[1], 1, '', 0, 0, '', '', true, 0, false, true, $padtopjb, 'M');
          $this->Cell($w[2], $aheightrow, $row[2],1,0,'LR');
          $this->Cell($w[3], $aheightrow, $row[3],1,0,'LR');
          $this->Cell($w[4], $aheightrow, $row[4],1,0,'LR');
          $this->Cell($w[5], $aheightrow, $row[5],1,0,'LR');
          // $this->Cell($w[6], 12,limit_text(ucwords(strtolower($row[6])), 20),1,0,'LR');
          $this->MultiCell($w[6], $aheightrow, $row[6], 1, '', 0, 0, '', '', true);
          $this->Cell($w[7], $aheightrow, $row[7],1,0,'LR');
          $this->Cell($w[8], $aheightrow, date("d/m/Y", strtotime($row[8])),1,0,'LR');
          // $this->Cell($w[9], 12,limit_text($row[9],13),1,0,'LR');
          $this->MultiCell($w[9], $aheightrow, $row[9], 1, '', 0, 0, '', '', true);
          $this->MultiCell($w[10], $aheightrow, $row[10], 1, 'L', 0, 0, '', '', true);
          $this->Cell($w[11], $aheightrow, $row[11],1,0,'LR');
          $this->Cell($w[12], $aheightrow,$aheightrow. 'Rp '.number_format($row[12], 2, ",", "."),1,0,'LR');
          // $this->Cell($w[13], 12,limit_text(ucwords(strtolower($row[13])), 25),1,0,'LR');
          $this->MultiCell($w[13], $aheightrow, $row[13], 1, '', 0, 0, '', '', true);

          
          // $this->Cell($w[0],10,$row[0],1,0,'C');
          // $this->Cell($w[1],10,limit_text($row[1], 25),1,0,'LR');
          // $this->Cell($w[2],10,$row[2],1,0,'LR');
          // $this->Cell($w[3],10,$row[3],1,0,'LR');
          // $this->Cell($w[4],10,$row[4],1,0,'LR');
          // $this->Cell($w[5],10,$row[5],1,0,'LR');
          // $this->Cell($w[6],10,limit_text(ucwords(strtolower($row[6])), 20),1,0,'LR');
          // $this->Cell($w[7],10,$row[7],1,0,'LR');
          // $this->Cell($w[8],10,date("d/m/Y", strtotime($row[8])),1,0,'LR');
          // $this->Cell($w[9],10,limit_text($row[9],13),1,0,'LR');
          // $this->Cell($w[10],10,limit_text(ucwords(strtolower($row[10])),17),1,0,'LR');
          // $this->Cell($w[11],10,$row[11],1,0,'LR');
          // $this->Cell($w[12],10,'Rp '.number_format($row[12], 2, ",", "."),1,0,'LR');
          // $this->Cell($w[13],10,limit_text(ucwords(strtolower($row[13])), 25),1,0,'LR');
          // USD format
          $this->Ln();
          $tot += $row[12];
      }
      // Closing line
      
      // number_format($row['NilaiPerolehan'], 2, ",", ".")

      // $this->Cell(array_sum($w), 0, 'Rp '.number_format($tot, 2, ",", "."),'T');
      $this->SetFont('Times','b',9);
      $this->setCellPaddings(1, 1, 1, 0);
    
      if ($tot == 0)  $this->Cell(278, 7, 'DATA TIDAK DITEMUKAN', 1, 1, 'C', 0, '', 0);
      if ($tot != 0)  $this->MultiCell(215, 6, 'Total', 1, 'R', 0, 0, '', '', true);
      if ($tot != 0)  $this->MultiCell(63, 6,'Rp '.number_format($tot, 2, ",", ".") , 1, 'L', 0, 0, '', '', true);
  }
}

// $pdf = new PDF();
$pdf = new MYPDF('l','mm','A4');

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('unknown');
$pdf->SetTitle('Kartu Inventaris Barang A.Tanah');
$pdf->SetSubject('Kartu Inventaris Barang A.Tanah');
$pdf->SetKeywords('Kartu Inventaris Barang A.Tanah');

// Column headings
$header = array( '', '', '', '', '', '', '', '', '', '', '', '', '', '');

// Tampung Filter
  //Filter Tampung Gabungan Kodelokasi
    $tkdlok     = $satuankerja;
    $tkdlokflat = rtrim($tkdlok, "0"); 
    // echo $tkdlokflat;
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

  //Filter Pengaturan Asal Usul
  if($sumberdana !=""){
    $valasalusul = "AND AsalUsul = \"".$sumberdana."\"";
  }else{
    $valasalusul = "";
  }

  //Filter Tahun Between
  if($tawal !=""){
    //Tampilkan Seluruhnya
    $valtahunbetween ="AND (TahunPerolehan BETWEEN \"".$tawal."\" AND \"".$takhir."\")";
  }else{
    $valtahunbetween ="";
  }

// Data loading


$sql = "SELECT datatanah.KodeLokasi, masterbarang.NamaBarang, datatanah.KodeBarang, datatanah.NoReg, datatanah.LuasTanah, datatanah.TahunPerolehan, datatanah.Letak, datatanah.StatusTanah, datatanah.Tanggal, datatanah.Nomor, datatanah.Penggunaan, datatanah.AsalUsul, datatanah.NilaiPerolehan, datatanah.Keterangan, datatanah.Status FROM datatanah INNER JOIN masterbarang ON datatanah.KodeBarang = masterbarang.KodeBarang WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween}  AND (Status <> 'X' OR Status IS NULL OR Status ='') "; 
$result = $mysqli->query($sql);

$json = [];
$no = 1;
while($row = $result->fetch_assoc()){
  // $nmbarang = $row["NamaBarang"];
  $json[] = [$no, $row["NamaBarang"], $row["KodeBarang"], $row["NoReg"], $row["LuasTanah"], $row["TahunPerolehan"], $row["Letak"], $row["StatusTanah"], $row["Tanggal"], $row["Nomor"], $row["Penggunaan"], $row["AsalUsul"], $row["NilaiPerolehan"], $row["Keterangan"]];
  $no++;
}


// echo json_encode($json);

// $a = array('<foo>',"'bar'",'"baz"','&blong&', "\xc3\xa9");
$data = $json;
$pdf->SetFont('Times', 'B', 12);
$pdf->AddPage();

$pdf->MultiCell(93, 5, '', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 5, 'KARTU INVENTARIS BARANG (KIB) A', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, 'MODEL INV.2', 0, 'R', 0, 1, '', '', true);

$pdf->MultiCell(93, 5, '', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 5, 'TANAH', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, '', 0, 'R', 0, 1, '', '', true);

$pdf->SetFont('Times', '', 11);
$pdf->MultiCell(30, 5, '', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(33, 5, 'KODE LOKASI', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(122, 5, ': '.$satuankerja, 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, '', 0, 'R', 0, 1, '', '', true);

$pdf->MultiCell(30, 5, '', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(33, 5, 'SUB UNIT', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(122, 5, ': '.$roww[2], 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, $tanggal, 0, 'R', 0, 1, '', '', true);

$pdf->MultiCell(30, 5, '', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(33, 5, 'SATUAN KERJA', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(122, 5, ': '.$roww[3], 0, 'L', 0, 0, '', '', true);
$pdf->SetFont('Times', '', 11);
$pdf->MultiCell(93, 5, 'KODE BARANG: 01', 0, 'R', 0, 1, '', '', true);

$pdf->Image($setlogo ,15 ,14 , -300);

$pdf->Ln(5); 

$pdf->SetFont('Times', '', 8);
$tbl_header = '<table cellspacing="0" cellpadding="1" border="0.5" style="z-index=100">
    <tr>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="20" rowspan="3">No</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="105" rowspan="3">Jenis Barang / Nama Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="80" colspan="2">Nomor</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="30" rowspan="3">Luas (m)</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="3" width="28">Tahun Pengadaan</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="3" width="79.5">Letak / Alamat</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" colspan="3" width="151">Status Tanah</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="3" width="71">Penggunaan</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="3" width="40">Asal-usul</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="79.5" rowspan="3">Nilai</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="99" rowspan="3">Keterangan</th>
    </tr>
    <tr>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="54" rowspan="2">Kode Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="26" rowspan="2">Reg.</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2" width="45">Hak</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" colspan="2" width="106">Sertifikat</th>
    </tr>
    <tr>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="50">Tanggal</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="56">Nomor</th>
    </tr></table>';



$pdf->writeHTML($tbl_header, true, false, false, false, '');
$pdf->Ln(-6.5); 
$pdf->ImprovedTable($header, $data);


// AREA TANDA TANGAN
$pdf->AddPage(); 
$pdf->SetFont('Times', '', 11);
$pdf->Cell(278, 6, '', 0, 1, 'C', 0, '', 0);
$pdf->MultiCell(93, 6, 'MENGETAHUI :', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 6, '', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 6, 'Situbondo, ....................', 0, 'L', 0, 1, '', '', true);

$pdf->MultiCell(93, 6, 'KEPALA UNIT / SATUAN KERJA', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 6, '', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 6, 'KEPALA BIDANG / PENGURUSAN BARANG', 0, 'L', 0, 1, '', '', true);

$pdf->MultiCell(93, 20, '', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 20, '', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 20, '', 0, 'L', 0, 1, '', '', true);

$pdf->SetFont('Times', 'b', 11);

$pdf->MultiCell(93, 6, $roww[4], 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 6, '', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 6, $roww[6], 0, 'L', 0, 1, '', '', true);

$pdf->MultiCell(93, 6, $roww[5], 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 6, '', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 6, $roww[7], 0, 'L', 0, 1, '', '', true);

$pdf->Output();

?>






