<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE dataalatangkutan SET

      KodeBarang = '".$post["1"]."', 
      KodeLokasi = '".$post["2"]."', 
      GolonganAlatAngkutan = '".$post["3"]."', 
      NamaAlatAngkutan = '".$post["4"]."', 
      Merk = '".$post["5"]."', 
      Tipe = '".$post["6"]."', 
      Kapasitas = '".$post["7"]."', 
      Warna = '".$post["8"]."', 
      NomorRangka = '".$post["9"]."', 
      NomorMesin = '".$post["10"]."', 
      TahunPerolehan = '".$post["11"]."', 
      Kondisi = '".$post["12"]."', 
      AsalUsul = '".$post["13"]."', 
      NilaiPerolehan = '".$post["14"]."', 
      Keterangan = '".$post["15"]."', 
      PenanggungJawab = '".$post["16"]."', 
      LokasiPenanggungJawab = '".$post["17"]."', 
      Surveyor = '".$post["18"]."', 
      TglSurvey = '".$post["19"]."', 
      MataUang = '".$post["20"]."', 
      SatuanKerja = '".$post["21"]."', 
      KodePemilik = '".$post["22"]."', 
      NoReg = '".$post["23"]."', 
      EntryUser = '".$post["27"]."', 
      NomorPolisi = '".$post["28"]."', 
      TanggalBPKB = '".$post["29"]."', 
      NomorBPKB = '".$post["30"]."' WHERE KodeAlatAngkutan = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM dataalatangkutan WHERE KodeAlatAngkutan = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
