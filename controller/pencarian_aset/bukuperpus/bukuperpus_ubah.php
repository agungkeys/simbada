<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE databuku SET
      KodeBarang = '".$post["1"]."',
      KodeLokasi = '".$post["2"]."',
      GolonganBuku = '".$post["3"]."',
      JenisBuku = '".$post["4"]."',
      TahunPerolehan = '".$post["5"]."',
      Jumlah = '".$post["6"]."',
      Kondisi = '".$post["7"]."',
      AsalUsul = '".$post["8"]."',
      NilaiPerolehan = '".$post["9"]."',
      Keterangan = '".$post["10"]."',
      PenanggungJawab = '".$post["11"]."',
      LokasiPenanggungJawab = '".$post["12"]."',
      Surveyor = '".$post["13"]."',
      TglSurvey = '".$post["14"]."',
      MataUang = '".$post["15"]."',
      SatuanKerja = '".$post["16"]."',
      KodePemilik = '".$post["17"]."',
      NoReg = '".$post["18"]."',
      EntryUser = '".$post["19"]."' WHERE KodeBuku = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM databuku WHERE KodeBuku = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
