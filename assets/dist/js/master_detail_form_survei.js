function prepareLoad(){
	$("#detailbatal").hide();
	$("#detailperbarui").hide();
	$("#detailsimpan").hide();
}

function cancelDetail(){
	$("#griddetail").show();
	$("#editdetail").hide();
	$("#adddetail").hide();

	$("#detailbatal").hide();
	$("#detailperbarui").hide();
	$("#detailtambah").show();
	$("#detailsimpan").hide();

	$('#kategoriform').empty();
	$('#value').val("");
	$('#ket1').val("");
	$('#ket2').val("");
	$('#edkategoriform').empty();
	$("#edvalue").val("");
 	$("#edket1").val("");
 	$("#edket2").val("");
}

function prepareSelectKategori(){
	$('#kategoriform').select2({
	    placeholder: 'Pilih Kategori...',
	    ajax: {
			url: './controller/master_detail_form_survei/master_detail_form_survei_select_kategori.php',
			dataType: 'json',
			delay: 250,
			processResults: function (data) {
				return {
					results: data
				};
			},
			cache: true
	    }
	})
}

function prepareSelectKategoriEdit(){
	$('#edkategoriform').select2({
	    placeholder: 'Pilih Kategori...',
	    ajax: {
			url: './controller/master_detail_form_survei/master_detail_form_survei_select_kategori.php',
			dataType: 'json',
			delay: 250,
			processResults: function (data) {
				return {
					results: data
				};
			},
			cache: true
	    }
	})
}

function addDetail(){
	$("#griddetail").hide();
	$("#editdetail").hide();
	$("#adddetail").show();

	$("#detailbatal").show();
	$("#detailperbarui").hide();
	$("#detailtambah").hide();
	$("#detailsimpan").show();

	prepareSelectKategori();
}

function editDetail(a){
	$("#griddetail").hide();
	$("#editdetail").show();
	$("#adddetail").hide();

	$("#detailbatal").show();
	$("#detailperbarui").show();
	$("#detailtambah").hide();
	$("#detailsimpan").hide();

	prepareSelectKategoriEdit();

	$.ajax({
		dataType: 'json',
		type: 'post',
		url: './controller/master_detail_form_survei/master_detail_form_survei_controller_show_edit.php',
		data: {kd:a}
	}).done(function(data){

		$("#edvalue").val(data[0].Value);
	 	$("#edket1").val(data[0].Ket_1);
	 	$("#edket2").val(data[0].Ket_2);

	 	var idkat = data[0].IDKategori;
		var dataLokasi = [];
		$.getJSON("controller/master_detail_form_survei/master_detail_form_survei_controller_select_allkategori.php", function(data, index){
			// console.log(data)
			dataLokasi = data;

			function findDtKategori(dt) { 
			    return dt.id === idkat;
			}

			// console.log(data.find(findDtLokasi));

			var vala = data.find(findDtKategori).id
			var valb = data.find(findDtKategori).text
			$('#edkategoriform').empty().append('<option selected value='+vala+'>'+valb+'</option>');
		})
	})

	$("#detailperbarui").attr('onclick','saveEditDetail("'+a+'")')
}

function saveEditDetail(id){
	var kategori		= $("#edkategoriform").select2().val();
	var value		= $("#edvalue").val();
	var ket1		= $("#edket1").val();
	var ket2		= $("#edket2").val();

	// $.ajax({
 //        dataType: 'json',
 //        type:'post',
 //        url: './controller/master_detail_form_survei/master_detail_form_survei_controller_select_find.php',
 //        data:{lok: kategori, val: value}
 //    }).done(function(data){
    	
 //    	var idkat = data.IDKategori;
 //    	var valdesc = data.Value;
 //    	console.log(idkat, valdesc);
 //    	console.log(lokasi, value);

	// 	if(data != null){
 //            swal({
 //                title: "Tidak Diizinkan",
 //                text: "Data Telah Digunakan...",
 //                type: "error",
 //                confirmButtonText: "Ya"
 //            });
 //        }else if(data.IDKategori == lokasi && data.Value == value){
 //    		$.ajax({
	// 			dataType: "json",
	// 			type: "post",
	// 			url: "./controller/master_detail_form_survei/master_detail_form_survei_controller_edit.php",
	// 			data:{iddet: id, idkat: lokasi, val: value, k1: ket1, k2: ket2}
	// 		}).done(function(data){
	// 			swal({
	// 					title: "Berhasil Disimpan!",
	//                     text: "Data Kategori Berhasil Disimpan",
	//                     type: "success",
	//                     confirmButtonText: "Ya",
	// 			});
	// 			cancelDetail();
	// 			$("#DataTableDetail").DataTable().ajax.reload();
	// 		})
 //    	}else{
        	
 //        }
 //    })

 	if(kategori==null || value==""){
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
			url: "./controller/master_detail_form_survei/master_detail_form_survei_controller_edit.php",
			data:{iddet: id, idkat: kategori, val: value, k1: ket1, k2: ket2}
		}).done(function(data){
			swal({
					title: "Berhasil Disimpan!",
                    text: "Data Kategori Berhasil Disimpan",
                    type: "success",
                    confirmButtonText: "Ya",
			});
			cancelDetail();
			$("#DataTableDetail").DataTable().ajax.reload();
		})
	}


}

function removeDetail(id){
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
                url: './controller/master_detail_form_survei/master_detail_form_survei_controller_remove.php',
                data:{kode:id}
            }).done(function(data){
                $("#DataTableDetail").DataTable().ajax.reload();
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
            $("#DataTableDetail").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

function saveDetail(){
	var lokasi		= $("#kategoriform").select2().val();
	var value		= $("#value").val();
	var ket1		= $("#ket1").val();
	var ket2		= $("#ket2").val();

	$.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_detail_form_survei/master_detail_form_survei_controller_select_find.php',
        data:{lok: lokasi, val: value}
    }).done(function(data){
        if(data != null){
            swal({
                title: "Tidak Diizinkan",
                text: "Data Telah Digunakan...",
                type: "error",
                confirmButtonText: "Ya"
            });
        }else{
        	if(lokasi==null || value==""){
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
					url: "./controller/master_detail_form_survei/master_detail_form_survei_controller_add.php",
					data:{idkat: lokasi, val: value, k1: ket1, k2: ket2}
				}).done(function(data){
					swal({
							title: "Berhasil Disimpan!",
		                    text: "Data Kategori Berhasil Disimpan",
		                    type: "success",
		                    confirmButtonText: "Ya",
					});
					cancelDetail();
					$("#DataTableDetail").DataTable().ajax.reload();
				})
			}
		}
    });
}

function ajaxGetDataDetail(){
	var dataTable = $("#DataTableDetail").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/master_detail_form_survei/master_detail_form_survei_controller.php",
            type: "post",
            error: function(){
                $(".DataTableDetail-error").html("");
                $("#DataTableDetail").append('<tbody class="DataTableDetail-grid-error"><tr><th colspan="6">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableDetail_processing").css("display","none");
            },
            complete: function(){}
        },
        "order": [[ 0, 'desc' ]],
        "columnDefs": [ { orderable: false, targets: [5] }]
    });
}

// function resetSearchTable(){
// 	$("input").attr("type","search").keypress(function(){
// 		var src = $(".removesearch").length
// 		if(src == 0){
// 			$("input").attr("type","search").after("<button class='btn btn-default btn-circle removesearch' onclick=resetField();><i class='glyphicon glyphicon-remove'></i></button>")
// 		}
// 	});
// }

// function resetField(){
// 	$("input").attr("type","search").val("");
// 	$(".removesearch").remove();
// 	resetTableDetail();
// }

function resetTableDetail(){
	$("#DataTableDetail").DataTable().destroy();
	$("#DataTableDetail").DataTable();
}

$("a.sidebar-toggle").click(function(){
	resetTableDetail();
});

$(document).ready(function(){
	prepareLoad();
	prepareSelectKategori();
	ajaxGetDataDetail();
	$("#information").modal('show');
})