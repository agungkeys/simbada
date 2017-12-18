<?php
  require '../../../engine/db_config.php';
  $post = $_POST;
  $kodejembatan = $post["1"];
  $sql = "UPDATE datajembatan SET  
      KodeLokasi  = '".$post["3"]."', 
      Keterangan  = '".$post["12"]."' WHERE KodeJembatan = '".$kodejembatan."' ";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM datajembatan WHERE KodeJembatan = '".$kodejembatan."'"; 
  $result = $mysqli->query($sql);
  // echo json_encode($data);






  //Insert Ke Table data mutasi sebagai Mutasi OUT=================================
  $dmuts = "SELECT KodeMutasi FROM datamutasi"; 
  $resmuts = $mysqli->query($dmuts);

  $jsonmuts = [];
  while($rowmts = $resmuts->fetch_assoc()){
       $jsonmuts[] = ['kode'=>substr($rowmts['KodeMutasi'], 2, 8)];
  }

  if($jsonmuts != null){
    $res = json_encode(max($jsonmuts));
    $res1 = json_decode($res, true);
    $res2 = $res1['kode'];
    $res3 = intval($res2);
    $res4 = $res3+1;
    $char = "MU";
    $residmts = $char . sprintf("%08s", $res4);
  }else{
    $residmts = "MU00000001";
  }
  $semestermt = 1;
  $statusmt = NULL;
  //START insert into datamutasi OUT===============================================
  $sqlmt = "INSERT INTO datamutasi (KodeMutasi, KodeLokasi, NoItem, KodeItem, KodeBarang, Jumlah, Harga, KodeBidang, KodePemilik, Tahun, Semester, Status, Ket)
  VALUES (
    '".$residmts."',
    '".$post['2']."',
    '1',
    '".$kodejembatan."',
    '".$post['4']."',
    '1',
    '".$post['6']."',
    '".mb_substr($post['4'], 0, 4)."',
    '".$post['8']."',
    '".$post['9']."',
    '".$semestermt."',
    '".$statusmt."',
    'MOT'

  )";
  $resultmt = $mysqli->query($sqlmt);
 
  //END insert into datamutasi OUT===============================================
  //=============================================================================







//Insert Ke Table data mutasi sebagai Mutasi IN==================================
  $myfakeid = $residmts;
  $resultin = substr($myfakeid, 2, 8);
  $resultin++;
  $charin = "MU";
  $residmtsin = $charin . sprintf("%08s", $resultin);

  $semestermtin = 1;
  $statusmtin = NULL;
  //START insert into datamutasi IN==============================================
  $sqlmtin = "INSERT INTO datamutasi (KodeMutasi, KodeLokasi, NoItem, KodeItem, KodeBarang, Jumlah, Harga, KodeBidang, KodePemilik, Tahun, Semester, Status, Ket)
  VALUES (
    '".$residmtsin."',
    '".$post['3']."', 
    '1',
    '".$kodejembatan."',
    '".$post['4']."',
    '1',
    '".$post['6']."',
    '".mb_substr($post['4'], 0, 4)."',
    '".$post['8']."',
    '".$post['9']."',
    '".$semestermtin."',
    '".$statusmtin."',
    'MIN'
  )";
  $resultmtin = $mysqli->query($sqlmtin);
  
  //END insert into datamutasi IN===============================================

  
  $sqlmtr = "SELECT * FROM datamutasi WHERE KodeMutasi = '".$residmtsin."'"; 
  $resultmtr = $mysqli->query($sqlmtr);
  $datamtr = $resultmtr->fetch_assoc();
  //END insert into datamutasi===============================================
  echo json_encode($datamtr);
?>