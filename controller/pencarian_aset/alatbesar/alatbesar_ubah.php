<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE dataalatbesar SET
      KodeBarang = '".$post["1"]."', 
      KodeLokasi = '".$post["2"]."', 
      GolonganAlatBesar = '".$post["3"]."', 
      NamaAlatBesar = '".$post["4"]."', 
      Merk = '".$post["5"]."', 
      Tipe = '".$post["6"]."', 
      Kapasitas = '".$post["7"]."', 
      Model = '".$post["8"]."', 
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
      EntryUser = '".$post["27"]."' WHERE KodeAlatBesar = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM dataalatbesar WHERE KodeAlatBesar = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
