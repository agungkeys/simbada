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
}


// $pdf = new PDF();
$pdf = new MYPDF('l','mm','A4');

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('unknown');
$pdf->SetTitle('Laporan Rekap Dinas');
$pdf->SetSubject('Laporan Rekap Dinas');
$pdf->SetKeywords('Laporan Rekap Dinas');


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
    $valtahunbetweenkons ="AND (TglMulai BETWEEN '".$tawal."-01-01' AND '".$takhir."-12-31')";
  }else{
    $valtahunbetween ="";
    $valtahunbetweenkons ="";
  }


$pdf->SetFont('Times', 'B', 12);
$pdf->AddPage();

$pdf->MultiCell(93, 5, '', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 5, 'REKAPITULASI BUKU INVENTARIS', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, '', 0, 'R', 0, 1, '', '', true);

$pdf->MultiCell(93, 5, '', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 5, '(REKAP HASIL SENSUS '.date("Y").')', 0, 'C', 0, 0, '', '', true);
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

$pdf->SetFont('Times', '', 10);
$tbl_header = '<table cellspacing="0" cellpadding="3" border="0" style="z-index=100">
    <tr>
      <th align="center" style=" font-weight: bold; background-color: #ededed;" width="30" height="20">No</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="70">Golongan</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="100">Kode Bidang Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="290">Nama Bidang Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="80">Jumlah Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="120">Jumlah Harga</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="95">Keterangan</th>
    </tr>
  </table>';



$pdf->writeHTML($tbl_header, true, false, false, false, '');
//Space antara header dan body
$pdf->Ln(-6); 
// $pdf->ImprovedTable($header, $data, $data1, $datasignature);
$w = array( 10.60, 24.70, 35.27, 102.32, 28.20, 42.35, 33.5);
$h = 5.5;
$paddingtop = 5;
$pdf->SetFillColor(239, 245, 245);
$pdf->SetFont('Helvetica','',8);

//DATA #1 ==============================================================================
$sqltanah = "SELECT COUNT(NilaiPerolehan) AS JumlahTanah, SUM(NilaiPerolehan) AS NilaiTanah FROM datatanah WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resulttanah  = $mysqli->query($sqltanah);
$rowtanah     = mysqli_fetch_row($resulttanah);

$pdf->MultiCell($w[0], $h, '1', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[1], $h, '01', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','');
$pdf->MultiCell($w[2], $h, '01', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[3], $h, 'TANAH', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowtanah[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowtanah[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();


//DATA #2 ==============================================================================
$sqlkibb = "SELECT COUNT(NilaiPerolehan) AS JumlahKIBB, SUM(NilaiPerolehan) AS NilaiKIBB FROM view_kibb WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween}"; 
$resultkibb  = $mysqli->query($sqlkibb);
$rowkibb     = mysqli_fetch_row($resultkibb);

$pdf->MultiCell($w[0], $h, '2', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[1], $h, '02', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[2], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[3], $h, 'PERALATAN DAN MESIN', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowkibb[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowkibb[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #2.2 ===========================================================================
$sqlalatbesar = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatBesar, SUM(NilaiPerolehan) AS NilaiAlatBesar FROM dataalatbesar WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatbesar  = $mysqli->query($sqlalatbesar);
$rowalatbesar     = mysqli_fetch_row($resultalatbesar);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '02', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Besar', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatbesar[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowalatbesar[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #2.3============================================================================
$sqlalatangkutan = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatAngkutan, SUM(NilaiPerolehan) AS NilaiAlatAngkutan FROM dataalatangkutan WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatangkutan  = $mysqli->query($sqlalatangkutan);
$rowalatangkutan     = mysqli_fetch_row($resultalatangkutan);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '03', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Angkutan', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatangkutan[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h,  'Rp '.number_format($rowalatangkutan[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();


//DATA #2.4 ============================================================================
$sqlalatbengkel = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatBengkel, SUM(NilaiPerolehan) AS NilaiAlatBengkel FROM dataalatbengkel WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatbengkel  = $mysqli->query($sqlalatbengkel);
$rowalatbengkel     = mysqli_fetch_row($resultalatbengkel);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '04', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Bengkel dan Alat Ukur', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatbengkel[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowalatbengkel[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #2.5 ============================================================================
$sqlalatpertanian = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatPertanian, SUM(NilaiPerolehan) AS NilaiAlatPertanian FROM dataalatpertanian WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatpertanian  = $mysqli->query($sqlalatpertanian);
$rowalatpertanian     = mysqli_fetch_row($resultalatpertanian);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '05', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Pertanian / Peternakan', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatpertanian[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h,  'Rp '.number_format($rowalatpertanian[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #2.6 ============================================================================
$sqlalatkantor = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatKantor, SUM(NilaiPerolehan) AS NilaiAlatKantor FROM dataalatkantor WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatkantor  = $mysqli->query($sqlalatkantor);
$rowalatkantor     = mysqli_fetch_row($resultalatkantor);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '06', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Kantor dan Rumah Tangga', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatkantor[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowalatkantor[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #2.7 ===========================================================================
$sqlalatstudio = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatStudio, SUM(NilaiPerolehan) AS NilaiAlatStudio FROM dataalatstudio WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatstudio  = $mysqli->query($sqlalatstudio);
$rowalatstudio     = mysqli_fetch_row($resultalatstudio);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '07', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Studio dan Komunikasi', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatstudio[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h,  'Rp '.number_format($rowalatstudio[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #2.8 ===========================================================================
$sqlalatkedokteran = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatKedokteran, SUM(NilaiPerolehan) AS NilaiAlatKedokteran FROM dataalatkedokteran WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatkedokteran  = $mysqli->query($sqlalatkedokteran);
$rowalatkedokteran     = mysqli_fetch_row($resultalatkedokteran);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '08', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Kedokteran', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatkedokteran[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowalatkedokteran[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #2.9 ==========================================================================
$sqlalatlab = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatLab, SUM(NilaiPerolehan) AS NilaiAlatLab FROM dataalatlab WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatlab  = $mysqli->query($sqlalatlab);
$rowalatlab     = mysqli_fetch_row($resultalatlab);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '09', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Laboratorium', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatlab[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h,  'Rp '.number_format($rowalatlab[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #2.10 ===========================================================================
$sqlalatkeamanan = "SELECT COUNT(NilaiPerolehan) AS JumlahAlatKeamanan, SUM(NilaiPerolehan) AS NilaiAlatKeamanan FROM dataalatkeamanan WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultalatkeamanan  = $mysqli->query($sqlalatkeamanan);
$rowalatkeamanan     = mysqli_fetch_row($resultalatkeamanan);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '10', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Alat-alat Keamanan', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowalatkeamanan[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowalatkeamanan[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #3 =============================================================================
$sqlkibc = "SELECT COUNT(NilaiPerolehan) AS JumlahKIBC, SUM(NilaiPerolehan) AS NilaiKIBC FROM view_kibc WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween}"; 
$resultkibc  = $mysqli->query($sqlkibc);
$rowkibc     = mysqli_fetch_row($resultkibc);
$pdf->MultiCell($w[0], $h, '3', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[1], $h, '03', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[2], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[3], $h, 'GEDUNG DAN BANGUNAN', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowkibc[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowkibc[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #3.11 ==========================================================================
$sqldatabangunangedung = "SELECT COUNT(NilaiPerolehan) AS JumlahBangunanGedung, SUM(NilaiPerolehan) AS NilaiBangunanGedung FROM databangunangedung WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatabangunangedung  = $mysqli->query($sqldatabangunangedung);
$rowdatabangunangedung     = mysqli_fetch_row($resultdatabangunangedung);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '11', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Bangunan Gedung', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatabangunangedung[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowdatabangunangedung[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #3.12 ===========================================================================
$sqldatamonumen = "SELECT COUNT(NilaiPerolehan) AS JumlahBangunanMonumen, SUM(NilaiPerolehan) AS NilaiBangunanMonumen FROM datamonumen WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatamonumen  = $mysqli->query($sqldatamonumen);
$rowdatamonumen     = mysqli_fetch_row($resultdatamonumen);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '12', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Bangunan Monumen', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatamonumen[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h,  'Rp '.number_format($rowdatamonumen[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #4 ============================================================================
$sqlkibd = "SELECT COUNT(NilaiPerolehan) AS JumlahKIBD, SUM(NilaiPerolehan) AS NilaiKIBD FROM view_kibd WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween}"; 
$resultkibd  = $mysqli->query($sqlkibd);
$rowkibd     = mysqli_fetch_row($resultkibd);
$pdf->MultiCell($w[0], $h, '4', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[1], $h, '04', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','');
$pdf->MultiCell($w[2], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[3], $h, 'JALAN, IRIGASI DAN JARINGAN', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowkibd[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowkibd[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #4.13 ==========================================================================
$sqldatajalan = "SELECT COUNT(NilaiPerolehan) AS JumlahJalan, SUM(NilaiPerolehan) AS NilaiJalan FROM datajalan WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatajalan  = $mysqli->query($sqldatajalan);
$rowdatajalan     = mysqli_fetch_row($resultdatajalan);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '13', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Jalan dan Jembatan', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatajalan[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h,  'Rp '.number_format($rowdatajalan[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #4.14 ==========================================================================
$sqldatabangunanair = "SELECT COUNT(NilaiPerolehan) AS JumlahBangunanAir, SUM(NilaiPerolehan) AS NilaiBangunanAir FROM databangunanair WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatabangunanair  = $mysqli->query($sqldatabangunanair);
$rowdatabangunanair     = mysqli_fetch_row($resultdatabangunanair);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '14', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Bangunan Air / Irigasi', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatabangunanair[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowdatabangunanair[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #4.15 ==========================================================================
$sqldatainstalasi = "SELECT COUNT(NilaiPerolehan) AS JumlahBangunanInstalasi, SUM(NilaiPerolehan) AS NilaiBangunanInstalasi FROM datainstalasi WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatainstalasi  = $mysqli->query($sqldatainstalasi);
$rowdatainstalasi     = mysqli_fetch_row($resultdatainstalasi);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '15', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Instalasi', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatainstalasi[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h,  'Rp '.number_format($rowdatainstalasi[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #4.16 ===========================================================================
$sqldatajaringan = "SELECT COUNT(NilaiPerolehan) AS JumlahBangunanJaringan, SUM(NilaiPerolehan) AS NilaiBangunanJaringan FROM datajaringan WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatajaringan  = $mysqli->query($sqldatajaringan);
$rowdatajaringan     = mysqli_fetch_row($resultdatajaringan);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '16', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Jaringan', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatajaringan[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowdatajaringan[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #5 ==============================================================================
$sqlkibe = "SELECT COUNT(NilaiPerolehan) AS JumlahKIBE, SUM(NilaiPerolehan) AS NilaiKIBE FROM view_kibe WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween}"; 
$resultkibe  = $mysqli->query($sqlkibe);
$rowkibe     = mysqli_fetch_row($resultkibe);
$pdf->MultiCell($w[0], $h, '5', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[1], $h, '05', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[2], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[3], $h, 'ASET TETAP LAINNYA', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowkibe[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowkibe[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #5.17 ==========================================================================
$sqldatabuku = "SELECT COUNT(NilaiPerolehan) AS JumlahBuku, SUM(NilaiPerolehan) AS NilaiBuku FROM databuku WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatabuku  = $mysqli->query($sqldatabuku);
$rowdatabuku     = mysqli_fetch_row($resultdatabuku);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '17', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Buku Perpustakaan', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatabuku[0], 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowdatabuku[1], 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #5.18 =========================================================================
$sqldatabarangkesenian = "SELECT COUNT(NilaiPerolehan) AS JumlahBarangKesenian, SUM(NilaiPerolehan) AS NilaiBarangKesenian FROM databarangkesenian WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatabarangkesenian  = $mysqli->query($sqldatabarangkesenian);
$rowdatabarangkesenian     = mysqli_fetch_row($resultdatabarangkesenian);
$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '18', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Barang Bercorak Kesenian / Kebudayaan', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatabarangkesenian[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h,  'Rp '.number_format($rowdatabarangkesenian[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #5.19 ===========================================================================
$sqldatahewan = "SELECT COUNT(NilaiPerolehan) AS JumlahDataHewan, SUM(NilaiPerolehan) AS NilaiDataHewan FROM datahewan WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatahewan  = $mysqli->query($sqldatahewan);
$rowdatahewan     = mysqli_fetch_row($resultdatahewan);

$sqldatatanaman = "SELECT COUNT(NilaiPerolehan) AS JumlahDataTanaman, SUM(NilaiPerolehan) AS NilaiDataTanaman FROM datatanaman WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatatanaman  = $mysqli->query($sqldatatanaman);
$rowdatatanaman     = mysqli_fetch_row($resultdatatanaman);

$jumlahHT = $rowdatahewan[0]+$rowdatatanaman[0];
$NilaiHT  = $rowdatahewan[1]+$rowdatatanaman[1];

$pdf->SetFont('', 8);
$pdf->MultiCell($w[0], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[1], $h, '', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[2], $h, '19', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[3], $h, 'Hewan Ternak dan Tumbuhan', 0, 'L', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $jumlahHT, 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($NilaiHT, 2, ",", "."), 0, 'R', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 0, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();

//DATA #6 ==========================================================================

$sqldatakonstruksi = "SELECT COUNT(Nilai) AS JumlahDataKonstruksi, SUM(Nilai) AS NilaiDataKonstruksi FROM datakonstruksi WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetweenkons} AND (Status <> 'X' OR Status IS NULL OR Status ='')"; 
$resultdatakonstruksi  = $mysqli->query($sqldatakonstruksi);
$rowdatakonstruksi     = mysqli_fetch_row($resultdatakonstruksi);

$pdf->MultiCell($w[0], $h, '6', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[1], $h, '06', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[2], $h, '', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','BI',8);
$pdf->MultiCell($w[3], $h, 'KONSTRUKSI DALAM PENGERJAAN', 0, 'L', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[4], $h, $rowdatakonstruksi[0], 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->MultiCell($w[5], $h, 'Rp '.number_format($rowdatakonstruksi[1], 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->SetFont('','',8);
$pdf->MultiCell($w[6], $h, '-', 0, 'C', 1, 0, '', '', true, 0, false, true, $paddingtop, 'M');
$pdf->Ln();
$pdf->SetFillColor(199, 252, 186);
//TOTAL

$totalbarang  = $rowtanah[0]+$rowkibb[0]+$rowkibc[0]+$rowkibd[0]+$rowkibe[0]+$rowdatakonstruksi[0];
$totalharga   = $rowtanah[1]+$rowkibb[1]+$rowkibc[1]+$rowkibd[1]+$rowkibe[1]+$rowdatakonstruksi[1];
$pdf->SetFont('','B',9);
$pdf->MultiCell(172.88, 7, 'Total', 0, 'R', 1, 0, '', '', true, 0, false, true, 5, 'M');
$pdf->MultiCell(28.2, 7, $totalbarang, 0, 'C', 1, 0, '', '', true, 0, false, true, 5, 'M');
$pdf->MultiCell(42.35, 7, 'Rp '.number_format($totalharga, 2, ",", "."), 0, 'R', 1, 0, '', '', true, 0, false, true, 5, 'M');
$pdf->MultiCell(33.5, 7, '', 0, 'C', 1, 0, '', '', true, 0, false, true, 5, 'M');
//Create content table body










//Data Signature
$pdf->Ln(5);
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






