<?php
require('../../assets/tcpdf/tcpdf.php');
require ('../../engine/db_config.php');
require ('../../controller/global_function.php');

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
  function ImprovedTable($header, $data, $data1, $datasignature){
    // Column widths
    $w = array(10.6, 17.65, 14.1, 35.3, 21.15, 21.20, 17.6, 14.1, 10.6, 12.3, 15.9, 14.1, 10.63, 24.65, 37.1);
    $tot = 0;
    // Header
    $this->SetFont('Times','',5);
    for($i=0;$i<count($header);$i++)
      $this->Cell($w[$i],0,$header[$i],0,0,'C');
    $this->Ln();

    // Data
    $this->SetFont('Times','',8);
    $this->SetFillColor(239, 245, 245);
    $this->SetTextColor(0);

    $fill = 0;
    $i = 0;
    $halaman = 0;
    foreach($data as $row){
      $cellcount = array();
      //write text first
      $startX = $this->GetX();
      $startY = $this->GetY();
      //draw cells and record maximum cellcount
      //cell height is 6 and width is 80

      foreach ($row as $key => $column):
       // Mengatur text menjadi center
        $this->setCellPaddings(1, 0.5, 1, 0.5);
        if($key == 0 || $key == 2 || $key == 5 || $key == 8 ){
          $cellcount[] = $this->MultiCell($w[$key], 5, ($column), 0, 'C', $fill, 0, '', '', true, 0, false, true, 0, "M");
        }else if($key == 13){
          $cellcount[] = $this->MultiCell($w[$key], 5, ($column), 0, 'R', $fill, 0, '', '', true, 0, false, true, 0, "M");
        }else{
          $cellcount[] = $this->MultiCell($w[$key], 5, ($column), 0, 'L', $fill, 0, '', '', true, 0, false, true, 0, "M");
        }
      endforeach;

      $this->SetXY($startX,$startY);

      //now do borders and fill
      //cell height is 6 times the max number of cells
  
      $maxnocells = max($cellcount);
  
      foreach ($row as $key => $column):
        $this->MultiCell($w[$key], $maxnocells * 5, '', 1, 'L', $fill, 0, '', '', true, 0, false, true, 0, "M");
      endforeach;

      $this->Ln();
      // fill equals not fill (flip/flop)
      $fill=!$fill;

      //Membuat auto page next
      $i += $maxnocells;

      if($halaman >= 1){
        if ($i > 32) {
          $this->AddPage('L', 'A4');
          $this->Line(286, 10, 10, 10);
          // $this->Line($xc, $yc-50, $xc, $yc+50);
          $halaman++;
          $i = 0;
        }
      }else{
        if ($i > 23) {
          $this->AddPage('L', 'A4');
          $this->Line(286, 10, 10, 10);
          $halaman++;
          $i = 0;
        }
      }
    }
    //Line Penutub Tabel Akhir
    $this->Cell(array_sum($w), 0, '', 'T');
    

    //Menghitung Total
    $tott = 0;
    foreach($data1 as $row)
    {
        $row[0];
        $tott += $row[0];
    }
    //End Menghitung Total
    
    $this->SetFont('Times','b',9);
    $this->setCellPaddings(1, 1, 1, 0);
    $this->Ln(0);
    if ($tott == 0)  $this->Cell(277, 7, 'DATA TIDAK DITEMUKAN', 1, 1, 'C', 0, '', 0);
    $this->SetFillColor(199, 252, 186);
    $this->setCellPaddings(1, 1, 2, 0);
    if ($tott != 0)  $this->MultiCell(215.3, 7, 'Total', 1, 'R', 1, 0, '', '', true);
    $this->setCellPaddings(2, 1, 1, 0);
    if ($tott != 0)  $this->MultiCell(61.7, 7, number_format($tott, 0, "", ".") , 1, 'L', 1, 0, '', '', true);

    //JIKA i > 20 MAKA ASIGN DI PRINT DI NEXT PAGE
    if($i > 22) $this->AddPage('L', 'A4');
    // Area Tanda Tangan
    foreach($datasignature as $ds){
      $this->Ln(5);
      $this->SetFont('Times', '', 11);
      $this->Cell(278, 6, '', 0, 1, 'C', 0, '', 0);
      $this->MultiCell(93, 6, 'MENGETAHUI :', 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(92, 6, '', 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(93, 6, 'Situbondo, '.$ds[4], 0, 'C', 0, 1, '', '', true);

      $this->MultiCell(93, 6, 'KEPALA UNIT / SATUAN KERJA', 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(92, 6, '', 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(93, 6, 'KEPALA BIDANG / PENGURUSAN BARANG', 0, 'C', 0, 1, '', '', true);

      $this->MultiCell(93, 20, '', 0, 'L', 0, 0, '', '', true);
      $this->MultiCell(92, 20, '', 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(93, 20, '', 0, 'L', 0, 1, '', '', true);

      $this->SetFont('Times', 'ub', 11);
      $this->MultiCell(93, 6, $ds[0], 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(92, 6, '', 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(93, 6, $ds[2], 0, 'C', 0, 1, '', '', true);
      $this->SetFont('Times', 'b', 11);
      $this->MultiCell(93, 6, $ds[1], 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(92, 6, '', 0, 'C', 0, 0, '', '', true);
      $this->MultiCell(93, 6, $ds[3], 0, 'C', 0, 1, '', '', true);
    }
  }
}


// $pdf = new PDF();
$pdf = new MYPDF('l','mm','A4');

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('unknown');
$pdf->SetTitle('Laporan Kemitraan Dengan Pihak Ke 3');
$pdf->SetSubject('Laporan Kemitraan Dengan Pihak Ke 3');
$pdf->SetKeywords('Laporan Kemitraan Dengan Pihak Ke 3');

// Column headings
$header = array( '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

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
    $valtahunbetween ="AND (TahunPembelian BETWEEN \"".$tawal."\" AND \"".$takhir."\")";
  }else{
    $valtahunbetween ="";
  }

// Data loading

$sql = "SELECT KodeLokasi, KodeBarang, NoReg, JenisNamaBarang, NamaBarang, Merk, NomorPabrik, Bahan, AsalUsul, TahunPembelian, Ukuran, Satuan, Kondisi, Jumlah, Nilai, KetStatus FROM view_invallhapus WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween}  AND Status IN('XXXX') "; 
$result = $mysqli->query($sql);

$json = [];
$json1 = [];
$no = 1;
while($row = $result->fetch_assoc()){
  // $nmbarang = $row["NamaBarang"];
  //Kondisi Tingkat
  // if($row["Tingkat"] > 0){$tingkat = 'Ya';}else{$tingkat = 'Tidak';}
  if($row["Kondisi"] < 30){$konbang = 'Rusak Berat';}
  if($row["Kondisi"] < 60){$konbang = 'Kurang Baik';}
  if($row["Kondisi"] <= 100){$konbang = 'Baik';}

  $json[] = [$no, $row["KodeBarang"], $row["NoReg"], $row["JenisNamaBarang"].' '.$row["NamaBarang"], $row["Merk"], $row["NomorPabrik"], $row["Bahan"], $row["AsalUsul"], $row["TahunPembelian"], $row["Ukuran"], $row["Satuan"], $konbang, $row["Jumlah"], number_format($row["Nilai"], 0, "", "."), $row["KetStatus"]];

  $json1[] = [$row["Nilai"]];
  $no++;
}


//Start Data Signature
$jsonsignature = [];
$sqlsignature = "SELECT * FROM masterlokasi WHERE KodeLokasi = '".$satuankerja."'"; 
$resultsignature = $mysqli->query($sqlsignature);
while($row = $resultsignature->fetch_assoc()){
  // $nmbarang = $row["NamaBarang"];
  $jsonsignature[] = [$row["NamaKu"], $row["NipKu"], $row["NamaKB"], $row["NIPKB"], $tanggal];
}
//End Data Signature


//Replace Data
$data = $json;
$data1 = $json1;
$datasignature = $jsonsignature;

$pdf->SetFont('Times', 'B', 12);
$pdf->AddPage();

$pdf->MultiCell(93, 5, '', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 5, 'LAPORAN PENGHAPUSAN', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, '', 0, 'R', 0, 1, '', '', true);

$pdf->MultiCell(93, 5, '', 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(92, 5, 'KEMITRAAN DENGAN PIHAK KE 3', 0, 'C', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, '', 0, 'R', 0, 1, '', '', true);

$pdf->SetFont('Times', '', 11);
$pdf->MultiCell(30, 5, '', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(33, 5, 'KODE LOKASI', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(122, 5, ': '.$satuankerja, 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, '', 0, 'R', 0, 1, '', '', true);

$pdf->MultiCell(30, 5, '', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(33, 5, 'SUB UNIT', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(122, 5, ': '.$roww[2], 0, 'L', 0, 0, '', '', true);
$pdf->MultiCell(93, 5, '', 0, 'R', 0, 1, '', '', true);

$pdf->MultiCell(30, 5, '', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(33, 5, 'SATUAN KERJA', 0, '', 0, 0, '', '', true);
$pdf->MultiCell(122, 5, ': '.$roww[3], 0, 'L', 0, 0, '', '', true);
$pdf->SetFont('Times', '', 11);
$pdf->MultiCell(93, 5, $tanggal, 0, 'R', 0, 1, '', '', true);

$pdf->Image($setlogo ,15 ,14 , -300);

$pdf->Ln(5); 

$pdf->SetFont('Times', '', 8);
$tbl_header = '<table cellspacing="0" cellpadding="1" border="0.5" style="z-index=100">
    <tr>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="120" colspan="3">Nomor</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="220" colspan="3">Spesifikasi Barang</th>


      <th align="center" style=" font-weight: bold; background-color: #ededed" width="50" rowspan="2">Bahan</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="40" rowspan="2">Asal Usul <br>/<br> Cara Perolehan</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2" width="30">Tahun Beli / Tahun Perolehan</th>

      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2" width="35">Ukuran</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2" width="45">Satuan</th>

      <th align="center" style=" font-weight: bold; background-color: #ededed" rowspan="2" width="40">Kondisi (B/KB/RB)</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="100" colspan="2">Jumlah</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="105" rowspan="2">Keterangan</th>
    </tr>
    
    <tr>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="30">No.</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="50">Kode Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="40">Reg.</th>

      <th align="center" style=" font-weight: bold; background-color: #ededed" width="100">Jenis Barang / Nama Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="60">Merk / Tipe</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="60">No. Pabrik / No. Mesin / No. Sertifikat</th>

      <th align="center" style=" font-weight: bold; background-color: #ededed" width="30">Barang</th>
      <th align="center" style=" font-weight: bold; background-color: #ededed" width="70">Nilai</th>

    </tr></table>';



$pdf->writeHTML($tbl_header, true, false, false, false, '');
$pdf->Ln(-6.5); 
$pdf->ImprovedTable($header, $data, $data1, $datasignature);
$pdf->Output();

?>






