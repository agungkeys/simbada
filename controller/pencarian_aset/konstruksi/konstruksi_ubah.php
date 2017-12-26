<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kode = $post["kode"];

  $sql = "UPDATE datakonstruksi SET
      KodeBarang ='".$post["1"]."', 
      KodeLokasi ='".$post["2"]."', 
      NamaBangunan ='".$post["3"]."', 
      Konstruksi ='".$post["4"]."', 
      Letak ='".$post["5"]."', 
      LuasBangunan ='".$post["6"]."', 
      Tingkat ='".$post["7"]."', 
      Beton ='".$post["8"]."', 
      StatusTanah ='".$post["9"]."',
      TglMulai ='".$post["10"]."', 
      KodeTanah ='".$post["11"]."', 
      Dokumen ='".$post["12"]."', 
      TanggalDokumen ='".$post["13"]."', 
      NomorDokumen ='".$post["14"]."', 
      AsalUsul ='".$post["15"]."', 
      Nilai ='".$post["16"]."', 
      Keterangan ='".$post["17"]."', 
      PenanggungJawab ='".$post["18"]."', 
      LokasiPenanggungJawab ='".$post["19"]."', 
      Surveyor ='".$post["20"]."', 
      TglSurvey ='".$post["21"]."', 
      MataUang ='".$post["22"]."', 
      SatuanKerja ='".$post["23"]."', 
      KodePemilik ='".$post["24"]."', 
      NoReg ='".$post["25"]."', 
      EntryUser ='".$post["26"]."' WHERE KodeKonstruksi = '".$kode."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datakonstruksi WHERE KodeKonstruksi = '".$kode."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
