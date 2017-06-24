function cancelKategori(){
	$("#val-kategori").val("");
	$("#val-keterangan").val("");
	$("#tambahKategori").modal('hide');
}

function addKategori(){
	$(".modal-title").text("Tambah Master Kategori Form Survei");
	$("#val-kategori").val("Golongan ");
	$("#val-keterangan").val("");
	$("#save").show();
	$("#update").hide();
}

function removeKategori(id){
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
                url: './controller/master_kategori_form_survei/master_kategori_form_survei_controller_remove.php',
                data:{value:id}
            }).done(function(data){
                $("#DataTableKategori").DataTable().ajax.reload();
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
            $("#DataTableKategori").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

function editKategori(id, kat, ket){
	$("#tambahKategori").modal({show: 'true'});
	$(".modal-title").text("Ubah Master Kategori FOrm Survei");
	$("#val-kategori").val(kat);
	$("#val-keterangan").val(ket);
	$("#save").hide();
	$("#update").show();

	$("#update").attr('onclick','editKategoriSave("'+id+'")')
}

function addKategoriSave(){
	var val_kat = $("#val-kategori").val();
	var val_ket = $("#val-keterangan").val();

	$.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_kategori_form_survei/master_kategori_form_survei_controller_select_find.php',
        data:{v_kat: val_kat}
    }).done(function(data){
        if(data != null){
            swal({
                title: "Tidak Diizinkan",
                text: "Kategori Telah Digunakan...",
                type: "error",
                confirmButtonText: "Ya"
            });
        }else{
        	if(val_kat=="" || val_ket==""){
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
					url: "./controller/master_kategori_form_survei/master_kategori_form_survei_controller_add.php",
					data:{valkat: val_kat, valket: val_ket}
				}).done(function(data){
					swal({
							title: "Berhasil Disimpan!",
		                    text: "Data Kategori Berhasil Disimpan",
		                    type: "success",
		                    confirmButtonText: "Ya",
					});
					cancelKategori();
					$("#DataTableKategori").DataTable().ajax.reload();
				})
			}
		}
    });
}

function editKategoriSave(id){
	var valkat = $("#val-kategori").val();
	var valket = $("#val-keterangan").val();
	if(valkat=="" || valket==""){
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
            url: './controller/master_kategori_form_survei/master_kategori_form_survei_controller_edit.php',
            data:{
            	idval: id,
            	katval: valkat,
            	ketval: valket
            }
        }).done(function(data){
            swal({
                    title: "Berhasil Diubah!",
                    text: "Data Berhasil Diubah",
                    type: "success",
                    confirmButtonText: "Ya",
                });
            cancelKategori();
            $("#DataTableKategori").DataTable().ajax.reload();
        });
	}
}

function ajaxGetDataKategori(){
	var dataTable = $("#DataTableKategori").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/master_kategori_form_survei/master_kategori_form_survei_controller.php",
            type: "post",
            error: function(){
                $(".DataTableKategori-error").html("");
                $("#DataTableKategori").append('<tbody class="DataTableKategori-grid-error"><tr><th colspan="6">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableKategori_processing").css("display","none");
            },
            complete: function(){}
        },
        "order": [[ 0, 'asc' ]],
        "columnDefs": [ { orderable: false, targets: [3] }]
    });
}

$("a.sidebar-toggle").click(function(){
		$("#DataTableKategori").DataTable().destroy();
		$("#DataTableKategori").DataTable();
});

$(document).ready(function(){
	ajaxGetDataKategori();
    $("#information").modal('show');
})