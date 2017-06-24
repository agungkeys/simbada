function cancelKepemilikan(){
	$("#val-kode").val("");
	$("#val-pemilik").val("");
	$("#tambahKepemilikan").modal('hide');
	$("#val-kode").attr('readonly',false);
}

function addKepemilikan(){
	$(".modal-title").text("Tambah Master Kepemilikan");
	$("#val-kode").val("");
	$("#val-pemilik").val("");
	$("#save").show();
	$("#update").hide();
}

function addKepemilikanSave(){
	var kode = $("#val-kode").val();
	var pemilik = $("#val-pemilik").val();
	$.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_kepemilikan/master_kepemilikan_controller_select_find.php',
        data:{val:kode}
    }).done(function(data){
        if(data != null){
            swal({
                title: "Tidak Diizinkan",
                text: "Kode Kepemilikan Telah Digunakan...",
                type: "error",
                confirmButtonText: "Ya"
            });
        }else{
        	if(kode=="" || pemilik==""){
				swal({
		                title: "Tidak Diizinkan",
		                text: "Mohon Periksa Kembali...",
		                type: "error",
		                confirmButtonText: "Ya"
		            });
			}else{
				$.ajax({
					dataType: "json",
					type: "post",
					url: "./controller/master_kepemilikan/master_kepemilikan_controller_add.php",
					data:{kdpemilik: kode, nmpemilik: pemilik}
				}).done(function(data){
					swal({
							title: "Berhasil Disimpan!",
		                    text: "Data User Berhasil Disimpan",
		                    type: "success",
		                    confirmButtonText: "Ya",
					});
					cancelKepemilikan();
					$("#DataTableKepemilikan").DataTable().ajax.reload();
				})
			}
        }
    });
}

function editKepemilikan(a,b){
	$("#tambahKepemilikan").modal({show: 'true'});
	$(".modal-title").text("Ubah Master Kepemilikan");
	$("#val-kode").val("");
	$("#val-kode").val(a);
	$("#val-pemilik").val(b);
	$("#save").hide();
	$("#update").show();
	$("#val-kode").attr('readonly',true);
	$("#update").attr('onclick','editKepemilikanSave("'+a+'")');
}

function editKepemilikanSave(id){
	var value = $("#val-pemilik").val();
	if(value==""){
		swal({
                title: "Tidak Diizinkan",
                text: "Mohon Periksa Kembali...",
                type: "error",
                confirmButtonText: "Ya"
            });
	}else{
		$.ajax({
            dataType: 'json',
            type: 'post',
            url: './controller/master_kepemilikan/master_kepemilikan_controller_edit.php',
            data:{
            	idval: id,
            	pemilikval: value
            }
        }).done(function(data){
            swal({
                    title: "Berhasil Diubah!",
                    text: "Data Berhasil Diubah",
                    type: "success",
                    confirmButtonText: "Ya",
                });
            cancelKepemilikan();
            $("#DataTableKepemilikan").DataTable().ajax.reload();
        });
	}
}

function removeKepemilikan(id){
	swal({
        title: "Data Akan Dihapus ?",
        text: "Anda Akan Menghapus '"+id+"' !?",
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
                url: './controller/master_kepemilikan/master_kepemilikan_controller_remove.php',
                data:{value:id}
            }).done(function(data){
                $("#DataTableKepemilikan").DataTable().ajax.reload();
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
            $("#DataTableKepemilikan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

function ajaxGetDataKepemilikan(){
	var dataTable = $("#DataTableKepemilikan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/master_kepemilikan/master_kepemilikan_controller.php",
            type: "post",
            error: function(){
                $(".DataTableKepemilikan-error").html("");
                $("#DataTableKepemilikan").append('<tbody class="DataTableKepemilikan-grid-error"><tr><th colspan="6">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableKepemilikan_processing").css("display","none");
            },
            complete: function(){}
        },
        "order": [[ 0, 'desc' ]],
        "columnDefs": [ { orderable: false, targets: [2] }]
    });
}

$(document).ready(function(){
	ajaxGetDataKepemilikan();
})