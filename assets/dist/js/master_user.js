// var us = {
// 	test : ko.observable("Tester")
// }

// us.agung = function(){
// 	swal("Tester");
// }

function prepareLoadUser(){
	$("#titlePanelUser").text("Data Master User");
	$("#userbatal").hide();
	$("#usersimpan").hide();
	$("#usertambah").show();
	$("#userperbarui").hide();

	$("#griduser").show();
	$("#adduser").hide();
	$("#edituser").hide();
}

function addUser(){
	$("#titlePanelUser").text("Tambah Master User");
	$("#userbatal").show();
	$("#usersimpan").show();
	$("#usertambah").hide();
	$("#userperbarui").hide();

	$("#griduser").hide();
	$("#adduser").show();
	$("#edituser").hide();

	prepareSelectLokasi();

	// $("#username").focus();
}

function cancelUser(){
	$("#titlePanelUser").text("Data Master User");
	$("#userbatal").hide();
	$("#usersimpan").hide();
	$("#usertambah").show();
	$("#userperbarui").hide();

	$("#griduser").show();
	$("#adduser").hide();
	$("#edituser").hide();

	$('#lokasiunit').empty();

	$("#username").val("");
	$("#password").val("");
	$("#namalengkap").val("");
	$("#email").val("");
	$("#level").selectpicker('val',"");
	$('#lokasiunit').empty();

	$("#edusername").val("");
	$("#edpassword").val("");
	$("#ednamalengkap").val("");
	$("#edemail").val("");
	$("#edlevel").selectpicker('val',"");
	$('#edlokasiunit').empty();
}

function prepareValidationUser(){
	$("#form-add-user").validate({
        rules:
            {
                username: {
                    required: true,
                },
                password: {
                    required: true,
                },
                namalengkap: {
                	required: true,
                // email: true
            	},
                email: {
                    required: true,
                    email: true
                },
                level: {
                    required: true,
                },
                lokasiunit: {
                    required: true,
                },
            },
        messages:
            {
                username:"Username Tidak Boleh Kosong...",
                password:"Password Tidak Boleh Kosong...",
                namalengkap: "Nama Lengkap Tidak Boleh Kosong...",
                email: "Email Tidak Boleh Kosong...",
                level: "Level Wajib Dipilih...",
                lokasiunit: "Lokasi Unit Wajib DIpilih...",
            },
    });

    $("#form-edit-user").validate({
        rules:
            {
                edusername: {
                    required: true,
                },
                edpassword: {
                    required: true,
                },
                ednamalengkap: {
                	required: true,
                // email: true
            	},
                edemail: {
                    required: true,
                    email: true
                },
                edlevel: {
                    required: true,
                },
                edlokasiunit: {
                    required: true,
                },
            },
        messages:
            {
                edusername:"Username Tidak Boleh Kosong...",
                edpassword:"Password Tidak Boleh Kosong...",
                ednamalengkap: "Nama Lengkap Tidak Boleh Kosong...",
                edemail: "Email Tidak Boleh Kosong...",
                edlevel: "Level Wajib Dipilih...",
                edlokasiunit: "Lokasi Unit Wajib DIpilih...",
            },
    });
}

function addUserSave(){
	var nmPengguna 	= $("#username").val();
	var pass 		= $("#password").val();
	var nmLengkap 	= $("#namalengkap").val();
	var mail		= $("#email").val();
	var lvl			= $("#level").selectpicker('val')
	var lokasi		= $("#lokasiunit").select2().val();

	$.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_user/master_user_controller_select_find.php',
        data:{kodeUserName:nmPengguna}
    }).done(function(data){
        if(data != null){
            swal({
                title: "Tidak Diizinkan",
                text: "Username Telah Digunakan...",
                type: "error",
                confirmButtonText: "Ya"
            });
        }else{
        	if(nmPengguna=="" || pass=="" || nmLengkap=="" || mail=="" || lvl=="" || lokasi=="" || lokasi==null){
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
					url: "./controller/master_user/master_user_controller_add.php",
					data:{usNm: nmPengguna, usPass: pass, usNmFull: nmLengkap, usMail: mail, usLvl: lvl, usLok: lokasi}
				}).done(function(data){
					swal({
							title: "Berhasil Disimpan!",
		                    text: "Data User Berhasil Disimpan",
		                    type: "success",
		                    confirmButtonText: "Ya",
					})
					cancelUser();
					$("#DataTableUser").DataTable().ajax.reload();
				})
			}
        }
    });
}

function ajaxGetDataUser(){
	var dataTable = $("#DataTableUser").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/master_user/master_user_controller.php",
            type: "post",
            error: function(){
                $(".DataTableUser-error").html("");
                $("#DataTableUser").append('<tbody class="DataTableBarang-grid-error"><tr><th colspan="6">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableUser_processing").css("display","none");
            },
            complete: function(){}
        },
        "order": [[ 0, 'desc' ],[ 1, 'desc' ],[ 3, 'desc' ]],
        "columnDefs": [ { orderable: false, targets: [5] }]
    });
}

function prepareSelectLokasi(){
	$('#lokasiunit').select2({
	    placeholder: 'Pilih Data Lokasi...',
	    ajax: {
			url: './controller/master_user/master_user_controller_select_lokasi.php',
			dataType: 'json',
			delay: 250,
			// data: function(params){
			// 	return{
			// 		q: params.id,
			// 		page:params.text
			// 	}
			// },
			processResults: function (data) {
				return {
					results: data
				};
			},
			cache: true
			// data: function (param){
			// 	// console.log("Data "+par)
			// 	return {
			// 		q: param.id,
			// 		page: param.text
			// 	}
			// },
	    }
	})
}

function prepareSelectLokasii(){
	$('#edlokasiunit').select2({
	    placeholder: 'Pilih Data Lokasi...',
	    ajax: {
			url: './controller/master_user/master_user_controller_select_lokasi.php',
			dataType: 'json',
			delay: 250,
			// data: function(params){
			// 	return{
			// 		q: params.id,
			// 		page:params.text
			// 	}
			// },
			processResults: function (data) {
				return {
					results: data
				};
			},
			cache: true
			// data: function (param){
			// 	// console.log("Data "+par)
			// 	return {
			// 		q: param.id,
			// 		page: param.text
			// 	}
			// },
	    }
	});
}

// function prepareLokasi(){
// 	$("#satuantester").select2({
// 	    placeholder: 'Pilih Lokasi',
// 	    ajax: {
// 	        url: './controller/master_user/master_user_controller_select_lokasi.php',
// 	        dataType: 'json',
// 	        delay: 250,
// 	        cache: true,
// 	        data: function(params) {
// 	            return {
// 	                q: params.id,
// 	                page: params.text
// 	            }
// 	        },
// 	        processResults: function(data) {
// 	            return { 
// 	                results: $.map(data, function(obj) {
// 	                    return { id: obj.id, text: obj.text}
// 	                })
// 	            };
// 	        }
// 	    },
// 	});
// }

// function loadTestLokasi(){
// 	var idlok = 13230501010400;
// 	var dataLokasi = []
// 	$.getJSON("controller/master_user/master_user_controller_select_alllokasi.php", function(data, index){
// 		dataLokasi = data;
// 		var arr = Object.keys(dataLokasi).map(function(k) { return dataLokasi[k] });
// 		// console.log(arr)
// 		var result = _.find(arr, function(num){ return num.id % idlok; });
// 		// console.log(result)
// 		var vala = result.id
// 		var valb = result.text
// 		// setTimeout(function(){
// 		// 	$('#lokasiunit')
//   //     			.empty()
//   //     			.append('<option selected value='+vala+'>'+valb+'</option>');
// 		// },3000)
// 	})
// }

function editUser(id) {
	// console.log("Ini Data Value ==== "+id)
	$("#titlePanelUser").text("Edit Master User");
	$("#userbatal").show();
	$("#usersimpan").hide();
	$("#usertambah").hide();
	$("#userperbarui").show();

	$("#griduser").hide();
	$("#adduser").hide();
	$("#edituser").show();

	prepareSelectLokasii()

	$.ajax({
		dataType: 'json',
		type: 'post',
		url: './controller/master_user/master_user_controller_show_edit.php',
		data: {kdUser:id}
	}).done(function(data){
		// console.log(data);

		$("#edusername").val(data[0].user_name);
		$("#edpassword").val(data[0].user_password);
		$("#ednamalengkap").val(data[0].full_name);
		$("#edemail").val(data[0].user_email);
		$("#edlevel").selectpicker('val',data[0].level);
		$("#edusername").attr('readonly',true);

		var idlok = data[0].location;
		var dataLokasi = []
		$.getJSON("controller/master_user/master_user_controller_select_alllokasi.php", function(data, index){
			// console.log(data)
			dataLokasi = data;

			function findDtLokasi(dt) { 
			    return dt.id === idlok;
			}

			// console.log(data.find(findDtLokasi));

			var vala = data.find(findDtLokasi).id
			var valb = data.find(findDtLokasi).text
			$('#edlokasiunit').empty().append('<option selected value='+vala+'>'+valb+'</option>');
		})
	})
}

function editUserSave(){
	var nmPengguna 	= $("#edusername").val();
	var pass 		= $("#edpassword").val();
	var nmLengkap 	= $("#ednamalengkap").val();
	var mail		= $("#edemail").val();
	var lvl			= $("#edlevel").selectpicker('val')
	var lokasi		= $("#edlokasiunit").select2().val();

	if(nmPengguna=="" || pass=="" || nmLengkap=="" || mail=="" || lvl=="" || lokasi=="" || lokasi==null){
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
            url: './controller/master_user/master_user_controller_edit.php',
            data:{
                ednmPengguna: nmPengguna,
                edpass: pass, 
                ednmLengkap: nmLengkap, 
                edmail: mail,
                edlvl: lvl,
                edlokasi: lokasi
            }
        }).done(function(data){
            swal({
                    title: "Berhasil Diubah!",
                    text: "Data Berhasil Diubah",
                    type: "success",
                    confirmButtonText: "Ya",
                });
            cancelUser();
            $("#DataTableUser").DataTable().ajax.reload();
        });
	}
}

function removeUser(id, user){
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
                url: './controller/master_user/master_user_controller_remove.php',
                data:{kodeUserName:id}
            }).done(function(data){
                $("#DataTableUser").DataTable().ajax.reload();
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
            $("#DataTableUser").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

$("a.sidebar-toggle").click(function(){
        $("#DataTableUser").DataTable().destroy();
        $("#DataTableUser").DataTable();
});

$(document).ready(function(){
	// prepareLokasi();
	prepareValidationUser();
	prepareSelectLokasi();
	prepareSelectLokasii();
	prepareLoadUser();
	ajaxGetDataUser();
	$("#information").modal('show');
})