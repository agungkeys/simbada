<?php

// Include the main TCPDF library (search for installation path).
require 'controller/global_function.php';
require 'assets/tcpdf/tcpdf.php';
require 'engine/db_config.php';


// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Dinas Aset Kabupaten Situbondo');
$pdf->SetTitle('Laporan KIB A. Tanah');
$pdf->SetSubject('Laporan KIB A. Tanah');
$pdf->SetKeywords('Laporan KIB A. Tanah');

$pdf->setPrintHeader(false);
// set default header data
// $pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 001', PDF_HEADER_STRING, array(0,64,255), array(0,64,128));
$pdf->setFooterData(array(0,64,0), array(0,64,128));

// set header and footer fonts
// $pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
// $pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
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

// set default font subsetting mode
$pdf->setFontSubsetting(true);

// Set font
// dejavusans is a UTF-8 Unicode font, if you only need to
// print standard ASCII chars, you can use core fonts like
// helvetica or times to reduce file size.
$pdf->SetFont('dejavusans', '', 14, '', true);

// Add a page
// This method has several options, check the source code documentation for more information.
$pdf->AddPage();

$image_file = K_PATH_IMAGES.'logo_head.png';
$pdf->Image($image_file, 10, 30, 13, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
// Set font
$pdf->SetFont('times', 'B', 14);
// Title
$pdf->Ln(-13); 
$pdf->Cell(0,15, 'KARTU INVENTARIS BARANG (KIB) A', 0, false, 'C', 0, '', 0, false, 'M', 'M');
// $pdf->SetFont('times', '', 14);
$pdf->Cell(0, 15, 'MODEL INV.2', 0, false, 'R', 0, '', 0, false, 'M', 'M');

$pdf->Ln(8); 
// $pdf->SetFont('times', 'B', 14);
$pdf->Cell(0, 15, 'TANAH', 0, false, 'C', 0, '', 0, false, 'M', 'M');

$pdf->Ln(4); 
$pdf->SetX(25); 
$pdf->SetFont('times', '', 12);
$pdf->Cell(20, -5, ' KODE LOKASI', 0, false, '');
$pdf->SetX(65);
$pdf->Cell(0,0, ':' ,0,0,'');

$pdf->Ln(6); 
$pdf->SetX(25);
$pdf->Cell(20, -5, ' SUB UNIT', 0, false, '');
$pdf->SetX(65);
$pdf->Cell(0,0,':',0,0,'');

$pdf->Ln(6); 
$pdf->SetX(25);
$pdf->Cell(20, -5, ' SATUAN KERJA', 0, false, '');
$pdf->SetX(65);
$pdf->Cell(0,0,':',0,0,'');
$pdf->Cell(0,5,'KODE BARANG: 01',0,0,'R');


$tbl_header = '<table cellspacing="0" cellpadding="1" border="1">
    <tr>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" width="40" rowspan="3">No</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" width="120" rowspan="3">Jenis Barang / Nama Barang</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" width="110" colspan="2">Nomor</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" width="40" rowspan="3">Luas (m)</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" rowspan="3">Tahun Pengadaan</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" rowspan="3">Letak / Alamat</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" colspan="3">Status Tanah</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" rowspan="3">Penggunaan</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" rowspan="3">Asal-usul</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" width="90" rowspan="3">Nilai</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" width="80" rowspan="3">Keterangan</th>
    </tr>
    <tr>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" width="60" rowspan="2">Kode Barang</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" width="50" rowspan="2">Register</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" rowspan="2">Hak</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed" colspan="2">Sertifikat</th>
    </tr>
    <tr>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed">Tanggal</th>
      <th align="center" style="font-size: 11px; font-weight: bold; background-color: #ededed">Nomor</th>
    </tr>';

$tbl .='
<tr>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">---</td>
      <td style="font-size: 10px;" align="center">Rp ---</td>
      <td style="font-size: 10px;" align="center">---</td>
    </tr>
';
$tbl .='
    <tr>
          <td style="font-size: 13px;" align="center" valign="middle" colspan="14"  style="line-height:30px; background-color:#F1A9A0;">Data Tidak Ditemukan</td>
    </tr>
';

$tbl_footer = '<tr style="line-height:30px; background-color: #ededed;">
    <td colspan="12" align="right" style="font-size: 11px; font-weight: bold;">Total &nbsp;&nbsp;</td>
    <td colspan="2" style="font-size: 11px; font-weight: bold;" align="left"> Rp ---</td>
    
  </tr>
</table>';

$pdf->SetFont('times', '');
$pdf->writeHTML($tbl_header, true, false, false, false, '');



// ---------------------------------------------------------

// Close and output PDF document
// This method has several options, check the source code documentation for more information.
$pdf->Output('KIB A Tanah.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+


?>
<style type="text/css">
  .tanah-value{
    font-size: 20px;
  }
</style>