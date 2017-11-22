<?php
	require('master_config.php');
 // $db_host = "localhost";
 // $db_name = "simbada";
 // $db_user = "root";
 // $db_pass = "";
 
 try{
  
  $db_con = new PDO("mysql:host={$_DBHOST};dbname={$_DBNAME}",$_DBUSERNAME,$_DBPASSWORD);
  $db_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 }
 catch(PDOException $e){
  echo $e->getMessage();
 }
?>