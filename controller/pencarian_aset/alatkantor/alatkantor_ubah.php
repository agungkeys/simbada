<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE dataalatkantor SET
      KodeBarang ='".$post["1"]."', 
      KodeLokasi ='".$post["2"]."', 
      GolonganAlatKantor ='".$post["3"]."', 
      NamaBarang ='".$post["4"]."', 
      Merk ='".$post["5"]."', 
      Tipe ='".$post["6"]."', 
      Bahan ='".$post["7"]."', 
      TahunPerolehan ='".$post["8"]."', 
      Ukuran ='".$post["9"]."',  
      Jumlah ='".$post["10"]."', 
      Kondisi ='".$post["11"]."', 
      AsalUsul ='".$post["12"]."', 
      NilaiPerolehan ='".$post["13"]."', 
      Keterangan ='".$post["14"]."', 
      PenanggungJawab ='".$post["15"]."', 
      LokasiPenanggungJawab ='".$post["16"]."', 
      Surveyor ='".$post["17"]."', 
      TglSurvey ='".$post["18"]."', 
      MataUang ='".$post["19"]."', 
      SatuanKerja ='".$post["20"]."', 
      KodePemilik ='".$post["21"]."', 
      NoReg ='".$post["22"]."', 
      EntryUser ='".$post["23"]."' WHERE KodeAlatKantor = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM dataalatkantor WHERE KodeAlatKantor = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
