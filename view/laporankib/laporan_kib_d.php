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
  public function Header(){
      // NOP! Overrides default header
  }
  public function Footer(){
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
    $w = array( 8.82, 42.35, 17.65, 12.33, 17.64, 12.38, 12.32, 12.34, 26.45, 15.85, 12.35, 14.75, 26.4, 15.88, 31.85);
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
    foreach($data as $row)
    {
        $cellcount = array();
        //write text first
        $startX = $this->GetX();
        $startY = $this->GetY();
        //draw cells and record maximum cellcount
        //cell height is 6 and width is 80

        foreach ($row as $key => $column):
             // Mengatur text menjadi center
                $this->setCellPaddings(1, 0.5, 1, 0.5);
                if($key == 0 || $key == 2 || $key == 3 || $key == 5 || $key == 6 || $key == 7 || $key == 10 ){
                  $cellcount[] = $this->MultiCell($w[$key], 5, ($column), 0, 'C', $fill, 0, '', '', true, 0, false, true, 0, "M");
                }else if($key == 12){
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
          if ($i > 31) {
            $this->AddPage('L', 'A4');
            $this->Line(286, 10, 10, 10);
            // $this->Line($xc, $yc-50, $xc, $yc+50);
            $halaman++;
            $i = 0;
          }
        }else{
          if ($i > 22) {
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
    
    if ($tott == 0)  $this->Cell(279.3, 7, 'DATA TIDAK DITEMUKAN', 1, 1, 'C', 0, '', 0);
    $this->SetFillColor(199, 252, 186);
    $this->setCellPaddings(1, 1, 2, 0);
    if ($tott != 0)  $this->MultiCell(205.2, 7, 'Total', 1, 'R', 1, 0, '', '', true);
    $this->setCellPaddings(2, 1, 1, 0);
    if ($tott != 0)  $this->MultiCell(74.15, 7,number_format($tott, 0, "", ".") , 1, 'L', 1, 0, '', '', true);

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
$pdf->SetTitle('Kartu Inventaris Barang D. Jalan, Irigasi, dan Jaringan');
$pdf->SetSubject('Kartu Inventaris Barang D. Jalan, Irigasi, dan Jaringan');
$pdf->SetKeywords('Kartu Inventaris Barang D. Jalan, Irigasi, dan Jaringan');

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
      $valtahunbetween ="AND (TahunPerolehan BETWEEN \"".$tawal."\" AND \"".$takhir."\")";
    }else{
      $valtahunbetween ="";
    }

    // Data loading


    $sql = "SELECT view_kibd.KodeLokasi, masterbarang.NamaBarang, view_kibd.KodeBarang, view_kibd.GolonganBangunanGedung, view_kibd.Kondisi, view_kibd.Tingkat, view_kibd.Pondasi, view_kibd.PondasiLainnya, view_kibd.LuasBangunan, view_kibd.Letak, view_kibd.TanggalDokumen, view_kibd.NomorDokumen, view_kibd.StatusTanah, view_kibd.Nomor, view_kibd.AsalUsul, view_kibd.NilaiPerolehan, view_kibd.Keterangan, view_kibd.KodePemilik, view_kibd.KodeBangunanGedung, view_kibd.Status, view_kibd.NoReg, view_kibd.NamaJenisBangunan, view_kibd.NamaBangunan, view_kibd.AsalUsulLainnya, view_kibd.TahunPerolehan, view_kibd.Panjang, view_kibd.Lebar, view_kibd.LuasTanah FROM view_kibd INNER JOIN masterbarang ON view_kibd.KodeBarang = masterbarang.KodeBarang WHERE KodeLokasi IN({$data_arr_location}) {$valasalusul} {$valtahunbetween}"; 
    $result = $mysqli->query($sql);

  $json = [];
  $json1 = [];
  $no = 1;
  while($row = $result->fetch_assoc()){
    // $nmbarang = $row["NamaBarang"];

    //Kondisi Tingkat
    if($row["Tingkat"] > 0){$tingkat = 'Ya';}else{$tingkat = 'Tidak';}
    if($row["Kondisi"] < 30){$konbang = 'Rusak Berat';}
    if($row["Kondisi"] < 60){$konbang = 'Kurang Baik';}
    if($row["Kondisi"] <= 100){$konbang = 'Baik';}
    

    $json[] = [$no, $row["NamaJenisBangunan"]." ".$row["NamaBarang"], $row["KodeBarang"], $row["NoReg"], $row["Pondasi"], number_format($row["Panjang"], 0, "", "."), number_format($row["Lebar"], 0, "", "."), number_format($row["LuasTanah"], 0, "", "."), $row["Letak"], date("d/m/Y", strtotime($row["TanggalDokumen"])), $row["NomorDokumen"], $row["AsalUsul"],number_format($row["NilaiPerolehan"], 0, "", "."), $konbang, $row["Keterangan"]];
    $json1[] = [$row["NilaiPerolehan"]];
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
  $pdf->MultiCell(92, 5, 'KARTU INVENTARIS BARANG (KIB) D', 0, 'C', 0, 0, '', '', true);
  $pdf->MultiCell(93, 5, 'MODEL INV.4', 0, 'R', 0, 1, '', '', true);

  $pdf->MultiCell(93, 5, '', 0, 'L', 0, 0, '', '', true);
  $pdf->MultiCell(92, 5, 'JALAN, IRIGASI, DAN JARINGAN', 0, 'C', 0, 0, '', '', true);
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
  $pdf->MultiCell(93, 5, 'KODE BARANG: 04', 0, 'R', 0, 1, '', '', true);

  $pdf->Image($setlogo ,15 ,14 , -300);

  $pdf->Ln(5); 

  $pdf->SetFont('Times', '', 8);
  $tbl_header = '<table cellspacing="0" cellpadding="1" border="0.5" style="z-index=100">
      <tr>
      <th rowspan="2" width="25" style=" font-weight: bold; background-color: #ededed; height: 40px;" align="center">No</th>
      <th rowspan="2" width="120" style=" font-weight: bold; background-color: #ededed; height: 40px;" align="center">Jenis Barang / Nama Barang</th>
      <th colspan="2" width="85" align="center" style=" font-weight: bold; background-color: #ededed; height: 20px;">Nomor</th>
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="50">Konstruksi</th>
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="35">Panjang (Km)</th>
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="35">Lebar (M)</th>
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="35">Luas (M2)</th>
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="75">Letak / Lokasi Alamat</th>
      <th colspan="2" align="center" style=" font-weight: bold; background-color: #ededed;" width="80">Dokumen</th>



      
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="41.6">Asal-Usul</th>
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="75">Harga</th>
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="45">Kondisi</th>
      <th rowspan="2" align="center" style=" font-weight: bold; background-color: #ededed; height: 40px;" width="90.1">Keterangan</th>
    </tr>
    <tr>
      <td align="center" style=" font-weight: bold; background-color: #ededed" width="50">Kode Barang</td>
      <td align="center" style=" font-weight: bold; background-color: #ededed" width="35">Register</td>
      <td align="center" style=" font-weight: bold; background-color: #ededed" width="45">Tanggal</td>
      <td align="center" style=" font-weight: bold; background-color: #ededed" width="35">No</td>
    </tr></table>';



  $pdf->writeHTML($tbl_header, true, false, false, false, '');
  $pdf->Ln(-6.5); 
  $pdf->ImprovedTable($header, $data, $data1, $datasignature);

  $pdf->Output();

?>