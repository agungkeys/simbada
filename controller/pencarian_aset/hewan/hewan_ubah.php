<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE datahewan SET
      KodeBarang = '".$post["1"]."', KodeLokasi = '".$post["2"]."', GolonganHewan = '".$post["3"]."', JenisHewan = '".$post["4"]."', TahunPerolehan = '".$post["5"]."', JenisKelamin = '".$post["6"]."', Jumlah = '".$post["7"]."', Kondisi = '".$post["8"]."', AsalUsul = '".$post["9"]."', NilaiPerolehan = '".$post["10"]."', Keterangan = '".$post["11"]."', PenanggungJawab = '".$post["12"]."', LokasiPenanggungJawab = '".$post["13"]."', Surveyor = '".$post["14"]."',  TglSurvey = '".$post["15"]."', MataUang = '".$post["16"]."', SatuanKerja = '".$post["17"]."', KodePemilik = '".$post["18"]."', NoReg = '".$post["19"]."', EntryUser = '".$post["20"]."'

      WHERE KodeHewan = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datahewan WHERE KodeHewan = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
