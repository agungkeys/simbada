function prepareLoadLokasi(){
	$("#titlePanelLokasi").text("Data Master Lokasi");
	$("#lokasitambah").show();
	$("#lokasibatal").hide();
	$("#lokasisimpan").hide();
	$("#lokasiperbarui").hide();

	$("#gridlokasi").show();
	$("#addlokasi").hide();
	$("#editlokasi").hide();
}

function addLokasi(){
	$("#titlePanelLokasi").text("Tambah Master Lokasi");
	$("#lokasitambah").hide();
	$("#lokasibatal").show();
	$("#lokasisimpan").show();
	$("#lokasiperbarui").hide();

	$("#gridlokasi").hide();
	$("#addlokasi").show();
}

function editLokasi(){
	$("#titlePanelLokasi").text("Ubah Master Lokasi");
	$("#lokasitambah").hide();
	$("#lokasibatal").show();
	$("#lokasisimpan").hide();
	$("#lokasiperbarui").show();

	$("#gridlokasi").hide();
	$("#addlokasi").hide();
	$("#editlokasi").show();
}

function cancelLokasi(){
	$("#titlePanelLokasi").text("Data Master Lokasi");
	$("#lokasitambah").show();
	$("#lokasibatal").hide();
	$("#lokasisimpan").hide();
	$("#lokasiperbarui").hide();

	$("#gridlokasi").show();
	$("#addlokasi").hide();
	$("#editlokasi").hide();
}

function prepareValidationLokasi(){
	$("#form-add-lokasi").validate({
		rules:
            {
                kdLokasi: {
                    required: true,
                },
                nmLokasiUnit: {
                	required: true,
                // email: true
            	},
                satuanKerja: {
                	required: true,
                },
                kepUnitSatKerja: {
                	required: true,
                },
                nipA: {
                	required: true,
                },
                kabagpengbid: {
                	required: true,
                },
                nipB: {
                	required: true,
                }
            },
        messages:
            {
                kdLokasi:"Kode Lokasi Tidak Boleh Kosong...",
                nmLokasiUnit: "Nama Lokasi / Unit Tidak Boleh Kosong...",
                satuanKerja: "Satuan Kerja Tidak Boleh Kosong...",
                kepUnitSatKerja: "Kep. Unit Sat. Kerja Tidak Boleh Kosong...",
                nipA: " NIP Tidak Boleh Kosong...",
                kabagpengbid: " Kabag. Pengbid. Tidak Boleh Kosong...",
                nipB: " NIP Tidak Boleh Kosong...",
            },
	});
	$("#form-edit-lokasi").validate({
		rules:
            {
                edkdLokasi: {
                    required: true,
                },
                ednmLokasiUnit: {
                	required: true,
                // email: true
            	},
                edsatuanKerja: {
                	required: true,
                },
                edkepUnitSatKerja: {
                	required: true,
                },
                ednipA: {
                	required: true,
                },
                edkabagpengbid: {
                	required: true,
                },
                ednipB: {
                	required: true,
                }
            },
        messages:
            {
                edkdLokasi:"Kode Lokasi Tidak Boleh Kosong...",
                ednmLokasiUnit: "Nama Lokasi / Unit Tidak Boleh Kosong...",
                edsatuanKerja: "Satuan Kerja Tidak Boleh Kosong...",
                edkepUnitSatKerja: "Kep. Unit Sat. Kerja Tidak Boleh Kosong...",
                ednipA: " NIP Tidak Boleh Kosong...",
                edkabagpengbid: " Kabag. Pengbid. Tidak Boleh Kosong...",
                ednipB: " NIP Tidak Boleh Kosong...",
            },
	});
}

function simpanLokasi(){
	var kdl  = $("#kdLokasi").val();
    var nlu = $("#nmLokasiUnit").val();
    var sk = $("#satuanKerja").val();
    var kepusk = $("#kepUnitSatKerja").val();
    var nipa = $("#nipA").val();
    var kabagpengbid = $("#kabagpengbid").val();
    var nipb = $("#nipB").val();

    $.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_lokasi/master_lokasi_controller_select_find.php',
        data:{kodeLokasi:kdl}
    }).done(function(data){
        if(data != null){
            swal({
                title: "Tidak Diizinkan",
                text: "Kode Lokasi Telah Digunakan...",
                type: "error",
                confirmButtonText: "Ya"
            });
        }else{
            if(kdl=="" || nlu=="" || sk=="" || kepusk=="" || nipa=="" || kabagpengbid=="" || nipb==""){
                swal({
                        title: "Tidak Diizinkan",
                        text: "Mohon Periksa Kembali...",
                        type: "error",
                        confirmButtonText: "Ya"
                    });
            }else{
                $.ajax({
                    dataType: "json",
                    type:"post",
                    url: "./controller/master_lokasi/master_lokasi_controller_add.php",
                    data:{kdLokasi: kdl, unt: nlu, satKerja: sk, kepuSk: kepusk, nipA: nipa, kabagPengBid: kabagpengbid, nipB: nipb}
                }).done(function(data){
                    swal({
                            title: "Berhasil Disimpan!",
                            text: "Data Lokasi Berhasil Disimpan",
                            type: "success",
                            confirmButtonText: "Ya",
                        });
                    cancelLokasi();
                    $("#DataTableLokasi").DataTable().ajax.reload();
                    // toastr.success('Item Created Successfully.', 'Success Alert', {timeOut: 3000});
                });
            }
        }
    });
}

function removeLokasi(id,nb){
    // console.log("Lempar Kode barang dan kodenya ="+ id);
    // console.log(id)
    swal({
        title: "Data Akan Dihapus ?",
        text: "Anda Akan Menghapus '"+nb+"' !?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function (isConfirm) {
        if (isConfirm) {
            $.ajax({
                dataType: 'json',
                type:'post',
                url: './controller/master_lokasi/master_lokasi_controller_remove.php',
                data:{kodeLokasi:id}
            }).done(function(data){
                $("#DataTableLokasi").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
                // toastr.success('Item Deleted Successfully.', 'Success Alert', {timeOut: 5000});
            });
        } else {
            $("#DataTableLokasi").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

var kdLokasiOriginal = "";

function editLokasi(id){
	// console.log(id);
	$("#gridlokasi").hide();
	$("#addlokasi").hide();
	$("#editlokasi").show();

	$("#titlePanelLokasi").text("Ubah Master Lokasi");
	$("#lokasitambah").hide();
	$("#lokasibatal").show();
	$("#lokasisimpan").hide();
	$("#lokasiperbarui").show();

	$.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_lokasi/master_lokasi_controller_show_edit.php',
        data:{kdLokasi:id}
    }).done(function(data){
    	// console.log(data);
    	// var a = data.
    	// insert to field
        kdLokasiOriginal = data.KodeLokasi;
    	$("#edkdLokasi").val(kdLokasiOriginal);
    	$("#ednmLokasiUnit").val(data.Unit);
    	$("#edsatuanKerja").val(data.SatuanKerja);
    	$("#edkepUnitSatKerja").val(data.NamaKu);
    	$("#ednipA").val(data.NipKu);
    	$("#edkabagpengbid").val(data.NamaKB);
    	$("#ednipB").val(data.NIPKB);
        $("#edkdLokasi").attr('readonly',true);
    });
}

function editLokasiSave(){
    var edkdlok= $("#edkdLokasi").val();
    var ednmlokunit= $("#ednmLokasiUnit").val();
    var edsatker= $("#edsatuanKerja").val();
    var edkepunit= $("#edkepUnitSatKerja").val();
    var ednipa= $("#ednipA").val();
    var edkabagpengbid= $("#edkabagpengbid").val();
    var ednipb= $("#ednipB").val();

    if(edkdlok=="" || ednmlokunit=="" || edsatker=="" || edkepunit=="" || ednipa=="" || edkabagpengbid=="" || ednipb==""){
        swal({
                title: "Tidak Diizinkan",
                text: "Mohon Periksa Kembali...",
                type: "error"
            });
    }else{
        $.ajax({
            dataType: 'json',
            type: 'post',
            url: './controller/master_lokasi/master_lokasi_controller_edit.php',
            data:{
                edidoriginal: kdLokasiOriginal,
                edid: edkdlok, 
                ednm: ednmlokunit, 
                edsat: edsatker,
                edkep: edkepunit,
                ednipa: ednipa,
                edkabag: edkabagpengbid,
                ednipb: ednipb
            }
        }).done(function(data){
            swal({
                    title: "Berhasil Diubah!",
                    text: "Data Berhasil Diubah",
                    type: "success",
                    confirmButtonText: "Ya",
                });
            cancelLokasi();
            $("#DataTableLokasi").DataTable().ajax.reload();
        });
    }
}

function ajaxGetDataLokasi(){
	var dataTableLokasi = $("#DataTableLokasi").dataTable({
		"processing": true,
		"serverSide": true,
		"ajax":{
			url: "./controller/master_lokasi/master_lokasi_controller.php",
			type: "post",
			error: function() {
				$(".DataTableLokasi-error").html("");
                $("#DataTableLokasi").append('<tbody class="DataTableLokasi-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableLokasi_processing").css("display","none");
			},
			complete: function() {
			}
		},
            "order": [[ 0, 'desc' ]],
            "columnDefs": [ { orderable: false, targets: [3] }]
	});
}

$("a.sidebar-toggle").click(function(){
        $("#DataTableLokasi").DataTable().destroy();
        $("#DataTableLokasi").DataTable();
});

$(document).ready(function(){
	prepareLoadLokasi();
	ajaxGetDataLokasi();
	prepareValidationLokasi();
    $("#information").modal('show');
})