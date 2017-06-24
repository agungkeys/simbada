function addCurrency(){
	$(".modal-title").text("Tambah Master Mata Uang");
	$("#val-curr").val("");
	$("#val-ket").val("");

	$("#cancel").show();
	$("#save").show();
	$("#update").hide();

	$("#val-curr").attr('readonly',false);
}

function cancelCurrency(){
	$("#val-curr").val("");
	$("#val-ket").val("");
	$("#tambahCurrency").modal('hide');
}

function addCurrencySave(){
	// console.log("Masuk Kog");
	var cur = $("#val-curr").val();
	var ket = $("#val-ket").val();

	$.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_currency/master_currency_controller_select_find.php',
        data:{val: cur}
    }).done(function(data){
        if(data != null){
            swal({
                title: "Tidak Diizinkan",
                text: "Currency Telah Digunakan...",
                type: "error",
                confirmButtonText: "Ya"
            });
        }else{
        	if(cur=="" || ket==""){
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
					url: "./controller/master_currency/master_currency_controller_add.php",
					data:{currency: cur, keterangan: ket}
				}).done(function(data){
					swal({
							title: "Berhasil Disimpan!",
		                    text: "Data Kategori Berhasil Disimpan",
		                    type: "success",
		                    confirmButtonText: "Ya",
					});
					cancelCurrency();
					$("#DataTableCurrency").DataTable().ajax.reload();
				})
			}
        }
    })
}

function editCurrency(a,b){
	$("#tambahCurrency").modal({show: 'true'});
	$(".modal-title").text("Ubah Master Agama");

	$("#cancel").show();
	$("#save").hide();
	$("#update").show();

	$("#val-curr").val(a);
	$("#val-ket").val(b);

	$("#val-curr").attr('readonly',true);
}

function editCurrencySave(){
	var cur = $("#val-curr").val();
	var ket = $("#val-ket").val();

	if(ket==""){
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
            url: './controller/master_currency/master_currency_controller_edit.php',
            data:{
            	idval: cur,
            	edval: ket
            }
        }).done(function(data){
            swal({
                    title: "Berhasil Diubah!",
                    text: "Data Berhasil Diubah",
                    type: "success",
                    confirmButtonText: "Ya",
                });
            cancelCurrency();
            $("#DataTableCurrency").DataTable().ajax.reload();
        });
	}
}

function removeCurrency(id){
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
                url: './controller/master_currency/master_currency_controller_remove.php',
                data:{value:id}
            }).done(function(data){
                $("#DataTableCurrency").DataTable().ajax.reload();
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
            $("#DataTableCurrency").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

function ajaxGetDataCurrency(){
	var dataTable = $("#DataTableCurrency").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/master_currency/master_currency_controller.php",
            type: "post",
            error: function(){
                $(".DataTableCurrency-error").html("");
                $("#DataTableCurrency").append('<tbody class="DataTableCurrency-grid-error"><tr><th colspan="6">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableCurrency_processing").css("display","none");
            },
            complete: function(){}
        },
        "order": [[ 0, 'desc' ]],
        // "columnDefs": [ { orderable: false, targets: [1] }]
    });
}

$("a.sidebar-toggle").click(function(){
        $("#DataTableCurrency").DataTable().destroy();
        $("#DataTableCurrency").DataTable();
});

$(document).ready(function(){
	ajaxGetDataCurrency();
	$("#information").modal('show');
});