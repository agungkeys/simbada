<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kodetanah = $post["klok"];
  // $timezone = "Asia/Singapore";
  // date_default_timezone_set($timezone);
  // $date = date('Y-m-d H:i:s');
  $sql = "UPDATE datatanah SET  
      KodeLokasi  = '".$post["1"]."', 
      KodeBarang  = '".$post["2"]."', 
      GolonganTanah = '".$post["3"]."', 
      LuasTanah = '".$post["4"]."', 
      TahunPerolehan  = '".$post["5"]."', 
      Letak = '".$post["6"]."', 
      StatusTanah = '".$post["7"]."', 
      StatusTanahLainnya  = '".$post["8"]."', 
      Bersertifikat = '".$post["9"]."', 
      Tanggal = '".$post["10"]."', 
      Nomor = '".$post["11"]."', 
      Penggunaan  = '".$post["12"]."', 
      AsalUsul  = '".$post["13"]."', 
      AsalUsulLainnya = '".$post["14"]."', 
      DataAwal  = '".$post["15"]."', 
      NilaiPerolehan  = '".$post["16"]."', 
      Keterangan  = '".$post["17"]."', 
      PenanggungJawab = '".$post["18"]."', 
      LokasiPenanggungJawab = '".$post["19"]."', 
      Surveyor  = '".$post["20"]."', 
      TglSurvey = '".$post["21"]."', 
      MataUang  = '".$post["22"]."', 
      Satker  = '".$post["23"]."', 
      KodeTanahLama = '".$post["24"]."', 
      KodePemilik = '".$post["25"]."', 
      NoReg = '".$post["26"]."', 
      EntryUser = '".$post["30"]."' WHERE KodeTanah = '".$kodetanah."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datatanah WHERE KodeTanah = '".$kodetanah."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>