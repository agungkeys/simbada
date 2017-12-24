<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE datatanaman SET
      KodeBarang = '".$post["1"]."', 
      KodeLokasi = '".$post["2"]."', 
      GolonganTanaman = '".$post["3"]."', 
      JenisTanaman = '".$post["4"]."', 
      LuasTanam = '".$post["5"]."', 
      Jumlah = '".$post["6"]."', 
      TahunPerolehan = '".$post["7"]."', 
      Kondisi = '".$post["8"]."', 
      AsalUsul = '".$post["9"]."', 
      NilaiPerolehan = '".$post["10"]."', 
      Keterangan = '".$post["11"]."', 
      PenanggungJawab = '".$post["12"]."', 
      LokasiPenanggungJawab = '".$post["13"]."', 
      Surveyor = '".$post["14"]."', 
      TglSurvey = '".$post["15"]."', 
      MataUang = '".$post["16"]."', 
      SatuanKerja = '".$post["17"]."', 
      KodePemilik = '".$post["18"]."', 
      Entry = '".$post["19"]."', 
      EntryUser = '".$post["20"]."' WHERE KodeTanaman = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datatanaman WHERE KodeTanaman = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
