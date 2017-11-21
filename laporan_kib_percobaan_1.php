<?php
require('assets/fpdf/fpdf.php');

class PDF extends FPDF
{
  // function LoadData($file)
  // {
  //     // Read file lines
  //     $lines = file($file);
  //     $data = array();
  //     foreach($lines as $line)
  //         $data[] = explode(',',trim($line));
  //     return $data;
  // }

  // Simple table
  function BasicTable($header, $data)
  {
      // Header
      foreach($header as $col)
          $this->Cell(50,7,$col,1);
      $this->Ln();
      // Data
      foreach($data as $row)
      {
          foreach($row as $col)
              $this->Cell(50,6,$col,1);
          $this->Ln();
      }
  }

  // Better table
  function ImprovedTable($header, $data)
  {
      // Column widths
      $w = array(30, 70, 60, 65);
      // Header
      $this->SetFont('Times','',12);
      for($i=0;$i<count($header);$i++)
          $this->Cell($w[$i],7,$header[$i],1,0,'C');
      $this->Ln();
      // Data
      $this->SetFont('Times','',11);
      foreach($data as $row)
      {
          $this->Cell($w[0],6,$row[0],1,0,'LR');
          $this->Cell($w[1],6,$row[1],1,0,'LR');
          $this->Cell($w[2],6,$row[2],1,0,'LR');
          $this->Cell($w[3],6,$row[3],1,0,'LR');
          $this->Ln();
      }
      // Closing line
      $this->Cell(array_sum($w),0,'','T');
  }
}

// $pdf = new PDF();
$pdf = new PDF('l','mm','A4');

// Column headings
$header = array('', '', '', '');
// Data loading


require 'engine/db_config.php';

$sql = "SELECT KodeLokasi, SatuanKerja, SubUnit, Unit FROM masterlokasi ORDER BY KodeLokasi ASC "; 
$result = $mysqli->query($sql);

$json = [];
while($row = $result->fetch_assoc()){
     
  $json[] = [$row["KodeLokasi"], $row["SatuanKerja"], $row["SubUnit"], $row["Unit"]];
}

// echo json_encode($json);

// $a = array('<foo>',"'bar'",'"baz"','&blong&', "\xc3\xa9");
$data = $json;
$pdf->SetFont('Arial','',14);
$pdf->AddPage();
// $pdf->BasicTable($header, $data);
$pdf->ImprovedTable($header,$data);
$pdf->Output();

?>