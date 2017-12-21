<?php
	require '../../../engine/db_config.php';
	$id  = $_POST["kode"];
	$idd = substr($id, 0, 2);

	switch ($idd){
		case "TN":
			$sql = "DELETE FROM datatanah WHERE KodeTanah = '".$id."'";
			break;
		case "JL":
			$sql = "DELETE FROM datajalan WHERE Kodejalan = '".$id."'";
			break;
		case "JM":
			$sql = "DELETE FROM datajembatan WHERE KodeJembatan = '".$id."'";
			break;
		case "BA":
			$sql = "DELETE FROM databangunanair WHERE KodeBangunanAir = '".$id."'";
			break;
		case "IN":
			$sql = "DELETE FROM datainstalasi WHERE KodeInstalasi = '".$id."'";
			break;
		case "JR":
			$sql = "DELETE FROM datajaringan WHERE KodeJaringan = '".$id."'";
			break;
		case "GD":
			//Hapus dalam table ruangan
			$sqlruang = "DELETE FROM dataruangan WHERE KodeBangunanGedung = '".$id."'";
			$resultruang = $mysqli->query($sqlruang);

			$sql = "DELETE FROM databangunangedung WHERE KodeBangunanGedung = '".$id."'";
			break;
		case "MO":
			$sql = "DELETE FROM datamonumen WHERE KodeMonumen = '".$id."'";
			break;
		case "AB":
			$sql = "DELETE FROM dataalatbesar WHERE KodeAlatBesar = '".$id."'";
			break;
		case "AA":
			$sql = "DELETE FROM dataalatangkutan WHERE KodeAlatAngkutan = '".$id."'";
			break;
		case "AE":
			$sql = "DELETE FROM dataalatbengkel WHERE KodeAlatBengkel = '".$id."'";
			break;
		case "AT":
			$sql = "DELETE FROM dataalatpertanian WHERE KodeAlatPertanian = '".$id."'";
			break;
		case "AK":
			$sql = "DELETE FROM dataalatkantor WHERE KodeAlatKantor = '".$id."'";
			break;
		case "AS":
			$sql = "DELETE FROM dataalatstudio WHERE KodeAlatStudio = '".$id."'";
			break;
		case "AD":
			$sql = "DELETE FROM dataalatkedokteran WHERE KodeAlatKedokteran = '".$id."'";
			break;
		case "AL":
			$sql = "DELETE FROM dataalatlab WHERE KodeAlatLab = '".$id."'";
			break;
		case "BU":
			$sql = "DELETE FROM databuku WHERE KodeBuku = '".$id."'";
			break;
		case "BS":
			$sql = "DELETE FROM databarangkesenian WHERE KodeBarangKesenian = '".$id."'";
			break;
		case "HW":
			$sql = "DELETE FROM datahewan WHERE KodeHewan = '".$id."'";
			break;
		case "TM":
			$sql = "DELETE FROM datatanaman WHERE KodeTanaman = '".$id."'";
			break;
		case "AM":
			$sql = "DELETE FROM dataalatkeamanan WHERE KodeAlatKeamanan = '".$id."'";
			break;
		case "KS":
			$sql = "DELETE FROM datakonstruksi WHERE KodeKonstruksi = '".$id."'";
			break;
	}
	$result = $mysqli->query($sql);

	//Hapus dalam table mutasi
	$sqlmutasi = "DELETE FROM datamutasi WHERE KodeItem = '".$id."'";
	$resultmutasi = $mysqli->query($sqlmutasi);
	echo json_encode([$id]);
?>