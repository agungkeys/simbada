<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE datamonumen SET
      KodeLokasi = '".$post["1"]."', 
      KodeBarang = '".$post["2"]."', 
      GolonganMonumen = '".$post["3"]."', 
      NamaMonumen = '".$post["4"]."', 
      Letak = '".$post["5"]."', 
      LuasTanah = '".$post["6"]."', 
      LuasBangunan = '".$post["7"]."', 
      TahunPerolehan = '".$post["8"]."', 
      Konstruksi = '".$post["9"]."', 
      Kondisi = '".$post["10"]."', 
      Dokumen = '".$post["11"]."', 
      TanggalDokumen = '".$post["12"]."', 
      AsalUsul = '".$post["13"]."', 
      AsalUsulLainnya = '".$post["14"]."', 
      Tingkat = '".$post["15"]."', 
      NilaiPerolehan = '".$post["16"]."', 
      Keterangan = '".$post["17"]."', 
      PenanggungJawab = '".$post["18"]."', 
      LokasiPenanggungJawab = '".$post["19"]."', 
      Surveyor = '".$post["20"]."', 
      TglSurvey = '".$post["21"]."', 
      MataUang = '".$post["22"]."', 
      SatuanKerja = '".$post["23"]."', 
      KodePemilik = '".$post["24"]."', 
      NoReg = '".$post["25"]."', 
      EntryUser = '".$post["26"]."' WHERE KodeMonumen = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datamonumen WHERE KodeMonumen = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
