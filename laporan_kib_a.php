<?php
require('assets/fpdf/fpdf.php');
// include 'assets/fpdi/fpdi.php';
include 'assets/fpdf-easytable/exfpdf.php';
include 'assets/fpdf-easytable/easyTable.php';

// class PDF extends FPDF
class PDF extends FPDF
{
    // Page header
    function Header()
    {
        // Logo
        $this->Image('logo_head.png',25,25,12);
        // Arial bold 15
        $this->SetFont('Times','B',13);
        // Move to the right
        $this->Cell(125);
        // Title
        $this->Cell(30,5,'Kartu Invertaris Barang (KIB)',0,0,'C');
        $this->Cell(0,5,'MODEL INV.2',0,0,'R');
        $this->Ln(8);
        $this->Cell(122);
        $this->Cell(30,5,'A. Tanah',0,0,'C');

        $this->Ln(7);
        $this->SetFont('Times','',13);
        $this->Cell(35);
        $this->Cell(20,5,'Kode Lokasi',0,0,'L');
        $this->Cell(6);
        $this->Cell(9,5,':',0,0,'C');
        $this->Cell(3);
        $this->Cell(0,5,'1039010002234',0,0,'L');

        $this->Ln(6);
        $this->Cell(35);
        $this->Cell(13,5,'Sub Unit',0,0,'L');
        $this->Cell(13);
        $this->Cell(9,5,':',0,0,'C');
        $this->Cell(3);
        $this->Cell(0,5,'Kab. Situbondo',0,0,'L');

        $this->Ln(6);
        $this->Cell(35);
        $this->Cell(21,5,'Satuan Kerja',0,0,'L');
        $this->Cell(5);
        $this->Cell(9,5,':',0,0,'C');
        $this->Cell(3);
        $this->Cell(0,5,'Pendopo Bupati Situbondo',0,0,'L');
        $this->Cell(0,5,'KODE BARANG: 01',0,0,'R');

        
        // Line break
        $this->Ln(25);

    }

    // Page footer
    function Footer()
    {
        // Position at 1.5 cm from bottom
        $this->SetY(-15);
        // Arial italic 8
        $this->SetFont('Arial','I',8);
        // Page number
        $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
    }
}

 $pdf=new exFPDF('L','mm','A4');
 $pdf->AddPage(); 
 $pdf->SetFont('helvetica','',10);

 $table1=new easyTable($pdf, 2);
 $table1->easyCell('Sales Invoice', 'font-size:30; font-style:B; font-color:#00bfff;');
 $table1->easyCell('', 'img:logo_head.png, w10; align:R;');
 $table1->printRow();

 $table1->rowStyle('font-size:15; font-style:B;');
 $table1->easyCell('Customer details');
 $table1->easyCell('FPDF Generator Ltd', 'align:R;');
 $table1->printRow();
 
 $table1->rowStyle('font-size:12;');
 $table1->easyCell("Mr. Rasmus Lerdorf\n123 Some Street\nSome City\nABC 123\nSome Country");
 $table1->easyCell("Mr. Olivier PLATHEY\n123 Some other Street\nSome other City\nABC 123\nSome other Country", 'align:R;');
 $table1->printRow(); 
 $table1->endTable(5);


// Instanciation of inherited class
// $pdf = new PDF('L','mm','A4');
// $pdf = new exFPDF('L','mm','A4');
// $pdf->AliasNbPages();
// $pdf->AddPage();
// $pdf->SetFont('Times','',12);

// for($i=1;$i<=40;$i++)
//     $pdf->Cell(0,10,'Printing line number '.$i,0,1);

// $pdf->Cell(0,10,'Line Paling Akhir ',0,1);
$pdf->Output();
?>