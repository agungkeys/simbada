<?php
	session_start();
	unset($_SESSION['user_session']);
 
	if(session_destroy()){
		// header("Location: index.html");
?>
		<script>
		setTimeout(function(){
			window.location.href = "index.html";
		})
		</script>
<?php
	}
?>