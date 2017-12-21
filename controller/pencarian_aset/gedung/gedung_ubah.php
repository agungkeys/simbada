<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE databangunangedung SET
      KodeBarang = '".$post["1"]."', 
      KodeLokasi = '".$post["2"]."', 
      GolonganBangunanGedung = '".$post["3"]."', 
      NamaBangunan = '".$post["4"]."', 
      Letak = '".$post["5"]."', 
      LuasTanah = '".$post["6"]."', 
      LuasBangunan = '".$post["7"]."', 
      Konstruksi = '".$post["8"]."', 
      Kondisi = '".$post["9"]."', 
      Dokumen = '".$post["10"]."', 
      TanggalDokumen = '".$post["11"]."', 
      AsalUsul = '".$post["12"]."', 
      AsalUsulLainnya = '".$post["13"]."', 
      Tingkat = '".$post["14"]."', 
      NilaiPerolehan = '".$post["15"]."', 
      Keterangan = '".$post["16"]."', 
      PenanggungJawab = '".$post["17"]."', 
      LokasiPenanggungJawab = '".$post["18"]."', 
      Surveyor = '".$post["19"]."', 
      TglSurvey = '".$post["20"]."', 
      MataUang = '".$post["21"]."', 
      SatuanKerja = '".$post["22"]."', 
      KodePemilik = '".$post["23"]."', 
      NoReg = '".$post["24"]."', 
      EntryUser = '".$post["28"]."', 
      TahunPerolehan = '".$post["29"]."' WHERE KodeBangunanGedung = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM databangunangedung WHERE KodeBangunanGedung = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
