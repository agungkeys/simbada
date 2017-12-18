<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kodejembatan = $post["kj"];

  $sql = "UPDATE datajembatan SET
  		KodeBarang = '".$post["1"]."', 
  		KodeLokasi = '".$post["2"]."', 
  		JenisJembatan = '".$post["3"]."', 
  		NamaJembatan = '".$post["4"]."', 
  		NamaRuas = '".$post["5"]."', 
  		PosisiRuas = '".$post["6"]."', 
  		TahunPembuatan = '".$post["7"]."', 
  		TahunPerolehan = '".$post["8"]."', 
  		Tinggi = '".$post["9"]."', 
  		Lebar = '".$post["10"]."', 
  		Panjang = '".$post["11"]."', 
  		TipePondasi = '".$post["12"]."', 
  		TipePondasiLainnya = '".$post["13"]."', 
  		BahanPondasi = '".$post["14"]."', 
  		BahanPondasiLainnya = '".$post["15"]."', 
  		TipeKonstruksi = '".$post["16"]."', 
  		TipeKonstruksiLainnya = '".$post["17"]."', 
  		BahanKonstruksi = '".$post["18"]."', 
  		BahanKonstruksiLainnya = '".$post["19"]."', 
  		Kondisi = '".$post["20"]."', 
  		AsalUsul = '".$post["21"]."', 
  		AsalUsulLainnya = '".$post["22"]."', 
  		DataAwal = '".$post["23"]."', 
  		PerBahan = '".$post["24"]."', 
  		NilaiPasar = '".$post["25"]."', 
  		NilaiPerolehan = '".$post["26"]."', 
  		NilaiBaru = '".$post["27"]."', 
  		Keterangan = '".$post["28"]."', 
  		PenanggungJawab = '".$post["29"]."', 
  		LokasiPenanggungJawab = '".$post["30"]."', 
  		Surveyor = '".$post["31"]."', 
  		TglSurvey = '".$post["32"]."', 
  		MataUang = '".$post["33"]."', 
  		SatuanKerja = '".$post["34"]."', 
  		KodePemilik = '".$post["35"]."', 
  		NoReg = '".$post["36"]."', 
  		EntryUser = '".$post["40"]."' WHERE KodeJembatan = '".$kodejembatan."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datajembatan WHERE KodeJembatan = '".$kodejembatan."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
