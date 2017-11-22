<?php
require('master_config.php');
class DB{
	private $dbHost     = $_DBHOST;
	private $dbUsername = $_DBUSERNAME;
	private $dbPassword = $_DBPASSWORD;
	private $dbName     = $_DBNAME;
	
	public function __construct(){
		if(!isset($this->db)){
			// Connect to the database
			$conn = new mysqli($this->dbHost, $this->dbUsername, $this->dbPassword, $this->dbName);
			if($conn->connect_error){
				die("Failed to connect with MySQL: " . $conn->connect_error);
			}else{
				$this->db = $conn;
			}
		}
	}
?>