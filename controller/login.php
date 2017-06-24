<?php
	@session_start();
	// session_start();
	include '../engine/configdb.php';

	if(isset($_POST['btn-login']))
	{
		$username = trim($_POST['username']);
		$user_password = trim($_POST['password']);
		$password = base64_encode($user_password);

		try
			{ 

				$stmt = $db_con->prepare("SELECT * FROM user WHERE user_name=:name");
				$stmt->execute(array(":name"=>$username));
				$row = $stmt->fetch(PDO::FETCH_ASSOC);
				$count = $stmt->rowCount();

				if($row['user_password']==$password){

				echo "ok"; // log in
				$_SESSION['user_session'] = $row['user_id'];
			}
		else
			{
				echo "Nama Pengguna atau Kata Sandi Tidak Terdaftar..."; // wrong details 
			}
		}
			catch(PDOException $e){
			echo $e->getMessage();
		}
	}
?>