<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE datainstalasi SET
      KodeBarang = '".$post["1"]."', 
      KodeLokasi = '".$post["2"]."', 
      GolonganInstalasi = '".$post["3"]."', 
      NamaInstalasi = '".$post["4"]."', 
      Letak = '".$post["5"]."', 
      TahunPembuatan = '".$post["6"]."', 
      TahunPerolehan = '".$post["7"]."', 
      Kondisi = '".$post["8"]."', 
      Konstruksi = '".$post["9"]."', 
      Bahan = '".$post["10"]."', 
      Panjang = '".$post["11"]."', 
      Lebar = '".$post["12"]."', 
      Tinggi = '".$post["13"]."', 
      FasilitasPenunjang = '".$post["14"]."', 
      AsalUsul = '".$post["15"]."', 
      AsalUsulLainnya = '".$post["16"]."', 
      DataAwal = '".$post["17"]."', 
      NilaiPerM2 = '".$post["18"]."', 
      NilaiPerolehan = '".$post["19"]."', 
      NilaiPasar = '".$post["20"]."', 
      NilaiBaru = '".$post["21"]."', 
      Keterangan = '".$post["22"]."', 
      PenanggungJawab = '".$post["23"]."', 
      LokasiPenanggungJawab = '".$post["24"]."', 
      Surveyor = '".$post["25"]."', 
      TglSurvey = '".$post["26"]."', 
      MataUang = '".$post["27"]."', 
      SatuanKerja = '".$post["28"]."', 
      KodePemilik = '".$post["29"]."', 
      NoReg = '".$post["30"]."', 
      EntryUser = '".$post["34"]."' WHERE KodeInstalasi = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datainstalasi WHERE KodeInstalasi = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
