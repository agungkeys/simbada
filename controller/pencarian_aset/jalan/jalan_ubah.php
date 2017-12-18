<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kodejalan = $post["kj"];

  $sql = "UPDATE datajalan SET   
		KodeBarang = '".$post["1"]."', 
		KodeLokasi = '".$post["2"]."', 
		JenisJalan = '".$post["3"]."', 
		NamaJalan = '".$post["4"]."', 
		NamaPangkalRuas = '".$post["5"]."', 

		NamaUjungRuas = '".$post["6"]."', 
		TitikPengenalPangkal = '".$post["7"]."', 
		TitikPengenalUjung = '".$post["8"]."', 
		TahunPerolehan = '".$post["9"]."', 
		TahunPembuatan = '".$post["10"]."',

		PanjangRuas = '".$post["11"]."', 
		KilometerRuasAwal = '".$post["12"]."', 
		KilometerRuasAkhir = '".$post["13"]."', 
		ROW = '".$post["14"]."', 
		LebarPerkerasan = '".$post["15"]."', 

		TipePermukaan = '".$post["16"]."', 
		KondisiJalan = '".$post["18"]."', 
		AsalUsul = '".$post["19"]."', 
		AsalUsulLainnya = '".$post["20"]."', 
		DataAwal = '".$post["21"]."', 

		HargaperBahan = '".$post["22"]."', 
		NilaiPasar = '".$post["23"]."', 
		NilaiPerolehan = '".$post["24"]."', 
		NilaiBaru = '".$post["25"]."', 
		Keterangan = '".$post["26"]."',

		PenanggungJawab = '".$post["27"]."', 
		LokasiPenanggungJawab = '".$post["28"]."', 
		Surveyor = '".$post["29"]."', 
		TglSurvey = '".$post["30"]."', 
		MataUang = '".$post["31"]."', 

		SatuanKerja = '".$post["32"]."', 
		KodePemilik = '".$post["33"]."', 
		NoReg = '".$post["34"]."',  
		EntryUser = '".$post["35"]."' WHERE KodeJalan = '".$kodejalan."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datajalan WHERE KodeJalan = '".$kodejalan."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>
