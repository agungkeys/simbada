<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE datajaringan SET
      KodeBarang = '".$post["1"]."', 
      KodeLokasi = '".$post["2"]."', 
      GolonganJaringan = '".$post["3"]."', 
      NamaJaringan = '".$post["4"]."', 
      Letak = '".$post["5"]."', 
      TahunPembuatan = '".$post["6"]."', 
      TahunPerolehan = '".$post["7"]."', 
      Kondisi = '".$post["8"]."', 
      Konstruksi = '".$post["9"]."', 
      Bahan = '".$post["10"]."', 
      Panjang = '".$post["11"]."', 
      Diameter = '".$post["12"]."', 
      FasilitasPenunjang = '".$post["13"]."', 
      AsalUsul = '".$post["14"]."', 
      AsalUsulLainnya = '".$post["15"]."', 
      DataAwal = '".$post["16"]."', 
      NilaiPerBahan = '".$post["17"]."', 
      NilaiPerolehan = '".$post["18"]."', 
      NilaiBaru = '".$post["19"]."', 
      NilaiPasar = '".$post["20"]."', 
      Keterangan = '".$post["21"]."', 
      PenanggungJawab = '".$post["22"]."', 
      LokasiPenanggungJawab = '".$post["23"]."', 
      Surveyor = '".$post["24"]."', 
      TglSurvey = '".$post["25"]."', 
      MataUang = '".$post["26"]."', 
      SatuanKerja = '".$post["27"]."', 
      KodePemilik = '".$post["28"]."', 
      NoReg = '".$post["29"]."', 
      EntryUser = '".$post["33"]."' WHERE KodeJaringan = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datajaringan WHERE KodeJaringan = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
