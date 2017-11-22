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
      $w = array(7.1, 37, 19, 7.5, 14, 10, 28, 15.9, 17.6, 19.8, 25, 14.1, 28, 35);
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
          $this->Cell($w[0],6,$row[0],1,0,'C');
          $this->Cell($w[1],6,limit_text($row[1], 25),1,0,'LR');
          $this->Cell($w[2],6,$row[2],1,0,'LR');
          $this->Cell($w[3],6,$row[3],1,0,'LR');
          $this->Cell($w[4],6,$row[4],1,0,'LR');
          $this->Cell($w[5],6,$row[5],1,0,'LR');
          $this->Cell($w[6],6,limit_text(ucwords(strtolower($row[6])), 20),1,0,'LR');
          $this->Cell($w[7],6,$row[7],1,0,'LR');
          $this->Cell($w[8],6,date("d/m/Y", strtotime($row[8])),1,0,'LR');
          $this->Cell($w[9],6,limit_text($row[9],13),1,0,'LR');
          $this->Cell($w[10],6,limit_text(ucwords(strtolower($row[10])),17),1,0,'LR');
          $this->Cell($w[11],6,$row[11],1,0,'LR');
          $this->Cell($w[12],6,'Rp '.number_format($row[12], 2, ",", "."),1,0,'LR');
          $this->Cell($w[13],6,limit_text(ucwords(strtolower($row[13])), 25),1,0,'LR');
          // USD format
          $this->Ln();
          $tot += $row[12];
      }
      // Closing line
      
      // number_format($row['NilaiPerolehan'], 2, ",", ".")

      // $this->Cell(array_sum($w), 0, 'Rp '.number_format($tot, 2, ",", "."),'T');
      $this->SetFont('Times','b',9);
      $this->setCellPaddings(1, 1, 1, 0);
      // if($tot=0){
        // $this->SetFillColor(249,249,249);
      if ($tot == 0)  $this->Cell(278, 7, 'DATA TIDAK DITEMUKAN', 1, 1, 'C', 0, '', 0);
        // $this->Ln();
      // }else{
      if ($tot != 0)  $this->MultiCell(215, 6, 'Total', 1, 'R', 0, 0, '', '', true);
      if ($tot != 0)  $this->MultiCell(63, 6,'Rp '.number_format($tot, 2, ",", ".") , 1, 'L', 0, 0, '', '', true);
      // }
  }
}

// $pdf = new PDF();
$pdf = new MYPDF('l','mm','A4');

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('unknown');
$pdf->SetTitle('Kartu Inventaris Barang B.Peralatan dan Mesin');
$pdf->SetSubject('Kartu Inventaris Barang B.Peralatan dan Mesin');
$pdf->SetKeywords('Kartu Inventaris Barang B.Peralatan dan Mesin');

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
$pdf->MultiCell(92, 5, 'KARTU INVENTARIS BARANG (KIB) B', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, 'MODEL INV.2', 0, 'R', 0, 1, '', '', true);

$pdf->MultiCell(93, 5, '', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 5, 'PERALATAN DAN MESIN', 0, 'C', 0, 0, '', '', true);
$pdf->SetFont('Times', '', 10);
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
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2" width="20.1">No</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2" width="104.9">Jenis Barang / Nama Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2">No Register</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2">Merk / Type</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2">Ukuran / CC</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2">Bahan</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2">Tahun Pembelian</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" colspan="5">Nomor</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2">Asal-Usul Cara Perolehan</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2">Harga</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2">Keterangan</th>
    </tr>
    <tr>
      <th align="center" style=" font-weight: bold; background-color: #ededed">Pabrik</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed">Rangka</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed">Mesin</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed">Polisi</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed">BPKB</th>
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






