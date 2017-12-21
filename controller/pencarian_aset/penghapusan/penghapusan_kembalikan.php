<?php
	require '../../../engine/db_config.php';
	$id  = $_POST["kode"];
	$idd = substr($id, 0, 2);

	switch ($idd){
		case "TN":
			$sql = "UPDATE datatanah SET Status  = '', KetStatus  = '' WHERE KodeTanah = '".$id."' ";
			break;
		case "JL":
			$sql = "UPDATE datajalan SET Status  = '', KetStatus  = '' WHERE Kodejalan = '".$id."' ";
			break;
		case "JM":
			$sql = "UPDATE datajembatan SET Status  = '', KetStatus  = '' WHERE KodeJembatanKodeJembatan = '".$id."' ";
			break;
		case "BA":
			$sql = "UPDATE databangunanair SET Status  = '', KetStatus  = '' WHERE KodeBangunanAir = '".$id."' ";
			break;
		case "IN":
			$sql = "UPDATE datainstalasi SET Status  = '', KetStatus  = '' WHERE KodeInstalasi = '".$id."' ";
			break;
		case "JR":
			$sql = "UPDATE datajaringan SET Status  = '', KetStatus  = '' WHERE KodeJaringan = '".$id."' ";
			break;
		case "GD":
			$sql = "UPDATE databangunangedung SET Status  = '', KetStatus  = '' WHERE KodeBangunanGedung = '".$id."' ";
			break;
		case "MO":
			$sql = "UPDATE datamonumen SET Status  = '', KetStatus  = '' WHERE KodeMonumen = '".$id."' ";
			break;
		case "AB":
			$sql = "UPDATE dataalatbesar SET Status  = '', KetStatus  = '' WHERE KodeAlatBesar = '".$id."' ";
			break;
		case "AA":
			$sql = "UPDATE dataalatangkutan SET Status  = '', KetStatus  = '' WHERE KodeAlatAngkutan = '".$id."' ";
			break;
		case "AE":
			$sql = "UPDATE dataalatbengkel SET Status  = '', KetStatus  = '' WHERE KodeAlatBengkel = '".$id."' ";
			break;
		case "AT":
			$sql = "UPDATE dataalatpertanian SET Status  = '', KetStatus  = '' WHERE KodeAlatPertanian = '".$id."' ";
			break;
		case "AK":
			$sql = "UPDATE dataalatkantor SET Status  = '', KetStatus  = '' WHERE KodeAlatKantor = '".$id."' ";
			break;
		case "AS":
			$sql = "UPDATE dataalatstudio SET Status  = '', KetStatus  = '' WHERE KodeAlatStudio = '".$id."' ";
			break;
		case "AD":
			$sql = "UPDATE dataalatkedokteran SET Status  = '', KetStatus  = '' WHERE KodeAlatKedokteran = '".$id."' ";
			break;
		case "AL":
			$sql = "UPDATE dataalatlab SET Status  = '', KetStatus  = '' WHERE KodeAlatLab = '".$id."' ";
			break;
		case "BU":
			$sql = "UPDATE databuku SET Status  = '', KetStatus  = '' WHERE KodeBuku = '".$id."' ";
			break;
		case "BS":
			$sql = "UPDATE databarangkesenian SET Status  = '', KetStatus  = '' WHERE KodeBarangKesenian = '".$id."' ";
			break;
		case "HW":
			$sql = "UPDATE datahewan SET Status  = '', KetStatus  = '' WHERE KodeHewan = '".$id."' ";
			break;
		case "TM":
			$sql = "UPDATE datatanaman SET Status  = '', KetStatus  = '' WHERE KodeTanaman = '".$id."' ";
			break;
		case "AM":
			$sql = "UPDATE dataalatkeamanan SET Status  = '', KetStatus  = '' WHERE KodeAlatKeamanan = '".$id."' ";
			break;
		case "KS":
			$sql = "UPDATE datakonstruksi SET Status  = '', KetStatus  = '' WHERE KodeKonstruksi = '".$id."' ";
			break;
	}
	$result = $mysqli->query($sql);

	//Hapus dalam table mutasi
	$sqlmutasi = "DELETE FROM datamutasi WHERE KodeItem = '".$id."' AND Status ='X'";
	$resultmutasi = $mysqli->query($sqlmutasi);
	echo json_encode([$id]);
?>