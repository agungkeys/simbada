function cancelAgama(){
	$("#val-agama").val("");
	$("#tambahAgama").modal('hide');
}

function addAgama(){
	$(".modal-title").text("Tambah Master Agama");
	$("#val-agama").val("");
	$("#save").show();
	$("#update").hide();
}

function editAgama(id){
	$("#tambahAgama").modal({show: 'true'});
	$(".modal-title").text("Ubah Master Agama");
	$("#val-agama").val("");
	$("#val-agama").val(id);
	$("#save").hide();
	$("#update").show();

	$("#update").attr('onclick','editAgamaSave("'+id+'")')
}

function addAgamaSave(){
	var val_agama 	= $("#val-agama").val();
	$.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_agama/master_agama_controller_select_find.php',
        data:{val:val_agama}
    }).done(function(data){
        if(data != null){
            swal({
                title: "Tidak Diizinkan",
                text: "Agama Telah Digunakan...",
                type: "error",
                confirmButtonText: "Ya"
            });
        }else{
        	if(val_agama==""){
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
					url: "./controller/master_agama/master_agama_controller_add.php",
					data:{val: val_agama}
				}).done(function(data){
					swal({
							title: "Berhasil Disimpan!",
		                    text: "Data User Berhasil Disimpan",
		                    type: "success",
		                    confirmButtonText: "Ya",
					});
					cancelAgama();
					$("#DataTableAgama").DataTable().ajax.reload();
				})
			}
        }
    });
}

function editAgamaSave(id){
	var value = $("#val-agama").val();
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
            url: './controller/master_agama/master_agama_controller_edit.php',
            data:{
            	idval: id,
            	edval: value
            }
        }).done(function(data){
            swal({
                    title: "Berhasil Diubah!",
                    text: "Data Berhasil Diubah",
                    type: "success",
                    confirmButtonText: "Ya",
                });
            cancelAgama();
            $("#DataTableAgama").DataTable().ajax.reload();
        });
	}
}

function removeAgama(id){
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
                url: './controller/master_agama/master_agama_controller_remove.php',
                data:{value:id}
            }).done(function(data){
                $("#DataTableAgama").DataTable().ajax.reload();
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
            $("#DataTableAgama").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

function ajaxGetDataAgama(){
	var dataTable = $("#DataTableAgama").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/master_agama/master_agama_controller.php",
            type: "post",
            error: function(){
                $(".DataTableAgama-error").html("");
                $("#DataTableAgama").append('<tbody class="DataTableAgama-grid-error"><tr><th colspan="6">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAgama_processing").css("display","none");
            },
            complete: function(){}
        },
        "order": [[ 0, 'desc' ]],
        "columnDefs": [ { orderable: false, targets: [1] }]
    });
}

$("a.sidebar-toggle").click(function(){
        $("#DataTableAgama").DataTable().destroy();
        $("#DataTableAgama").DataTable();
});

$(document).ready(function(){
   ajaxGetDataAgama();
   $("#information").modal('show');
})