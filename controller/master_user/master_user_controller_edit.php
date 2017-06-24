<?php
  require '../../engine/db_config.php';
  
  $_ednp    = $_POST["ednmPengguna"];
  $_edps    = $_POST["edpass"];
  $_ednml   = $_POST["ednmLengkap"];
  $_edmail  = $_POST["edmail"];
  $_edlv    = $_POST["edlvl"];
  $_edlok   = $_POST["edlokasi"];

  $timezone = "Asia/Singapore";
  date_default_timezone_set($timezone);
  $date = date('Y-m-d H:i:s');
  $sql = "UPDATE user SET  
      full_name     = '".$_ednml."', 
      user_email    = '".$_edmail."', 
      user_password = '".base64_encode($_edps)."', 
      level         = '".$_edlv."', 
      location      = '".$_edlok."', 
      DateCreate = '".$date."' WHERE user_name = '".$_ednp."'";
  $result = $mysqli->query($sql);
  $sql = "SELECT * FROM user WHERE user_name = '".$_ednp."'"; 
  $result = $mysqli->query($sql);
  $data = $result->fetch_assoc();
  echo json_encode($data);
?>