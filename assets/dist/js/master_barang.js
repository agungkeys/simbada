
function prepareLoadBarang(){
    $("#titlePanelBarang").text("Data Master Barang");
    $("#brgbatal").hide();
    $("#brgsimpan").hide();
    $("#brgtambah").show();
    $("#brgperbarui").hide();

    $("#gridbarang").show();
    $("#addbarang").hide();
    $("#editbarang").hide();
}

function cancelBarang(){
    $("#titlePanelBarang").text("Data Master Barang");
    $("#kdBarang").val("");
    $("#nmBarang").val("");

    $("#kdBarangEdit").val("");
    $("#nmBarangEdit").val("");

    $("#brgbatal").hide();
    $("#brgsimpan").hide();
    $("#brgtambah").show();
    $("#brgperbarui").hide();

    $("#gridbarang").show();
    $("#addbarang").hide();
    $("#editbarang").hide();
}

function prepareValidationBarang(){
    $("#form-add-barang").validate({
        rules:
            {
                kdBarang: {
                    required: true,
                },
                nmBarang: {
                required: true,
                // email: true
            },
        },
        messages:
            {
                kdBarang:"Kode Barang Tidak Boleh Kosong...",
                nmBarang: "Nama Barang Tidak Boleh Kosong...",
            },
    });

    $("#form-edit-barang").validate({
        rules:
            {
                kdBarangEdit: {
                    required: true,
                },
                nmBarangEdit: {
                required: true,
                // email: true
            },
        },
        messages:
            {
                kdBarangEdit:"Kode Barang Tidak Boleh Kosong...",
                nmBarangEdit: "Nama Barang Tidak Boleh Kosong...",
            },
    }); 
}

function addBarang(){
    $("#titlePanelBarang").text("Tambah Master Barang");
    $("#brgbatal").show();
    $("#brgsimpan").show();
    $("#brgtambah").hide();
    $("#brgperbarui").hide();

    $("#gridbarang").hide();
    $("#addbarang").show();
}

function editBarang(){
    $("#titlePanelBarang").text("Ubah Master Barang");
    $("#brgbatal").show();
    $("#brgsimpan").hide();
    $("#brgtambah").hide();
    $("#brgperbarui").show();

    $("#gridbarang").hide();
    $("#addbarang").hide();
    $("#editbarang").show();
}

function addBarangSave(){
    var kdBar = $("#kdBarang").val();
    var nmBar = $("#nmBarang").val();
    var stsBarang = false;
    var dataBarang = [];

    $.ajax({
        dataType: 'json',
        type:'post',
        url: './controller/master_barang/master_barang_controller_select_find.php',
        data:{kodeBarang:kdBar}
    }).done(function(data){
        // console.log(data)
        if(data != null){
            swal({
                title: "Tidak Diizinkan",
                text: "Kode Barang Telah Digunakan...",
                type: "error",
                confirmButtonText: "Ya"
            });
        }else{
            if(kdBar=="" || nmBar==""){
                swal({
                    title: "Tidak Diizinkan",
                    text: "Mohon Periksa Kembali...",
                    type: "error",
                    confirmButtonText: "Ya"
                });
                return
            }else{
                $.ajax({
                    dataType: "json",
                    type:"post",
                    url: "./controller/master_barang/master_barang_controller_add.php",
                    data:{kodeBarang:kdBar, namaBarang:nmBar}
                }).done(function(data){
                    swal({
                            title: "Berhasil Disimpan!",
                            text: "Data Barang Berhasil Disimpan",
                            type: "success",
                            confirmButtonText: "Ya",
                        })
                    cancelBarang();
                    $("#DataTableBarang").DataTable().ajax.reload();
                    // toastr.success('Item Created Successfully.', 'Success Alert', {timeOut: 3000});
                });
            }
        }
    });
}
var kdBarangEdit = "";

function preparEditBarang(){
    setTimeout(function(){
        $(".editBarang").click(function(){
            var row= $(this).closest("tr");
            kdBarangEdit = row.find("td:eq(0)").text();
            var row1= $(this).closest("tr");
            var nmBarangEdit = row1.find("td:eq(1)").text();
            editBarang();
            $("#kdBarangEdit").val(kdBarangEdit);
            $("#nmBarangEdit").val(nmBarangEdit);
            $("#kdBarangEdit").attr('readonly',true);
        });
    },200)
}

function editBarangSave() {
    var kdedit = $("#kdBarangEdit").val();
    var nmedit = $("#nmBarangEdit").val();
    if(kdedit=="" || nmedit==""){
        swal({
                title: "Tidak Diizinkan",
                text: "Mohon Periksa Kembali...",
                type: "error"
            });
    }else{
        $.ajax({
            dataType: 'json',
            type: 'post',
            url: './controller/master_barang/master_barang_controller_edit.php',
            data:{idBarangEdit: kdBarangEdit, kodeBarang: kdedit, namaBarang: nmedit}
        }).done(function(data){
            swal({
                    title: "Berhasil Diubah!",
                    text: "Data Berhasil Diubah",
                    type: "success",
                    confirmButtonText: "Ya",
                });
            cancelBarang();
            $("#DataTableBarang").DataTable().ajax.reload();
            preparEditBarang();
        });
    }
}

function removeBarang(id,nb){
    // console.log("Lempar Kode barang dan kodenya ="+ id);
    console.log(id)
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
                url: './controller/master_barang/master_barang_controller_remove.php',
                data:{kodeBarang:id}
            }).done(function(data){
                $("#DataTableBarang").DataTable().ajax.reload();
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
            $("#DataTableBarang").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

function createNumberGrid(){
    var countFrom = $("#DataTableBarang").DataTable().data()[0][4];
    var countTo = $("#DataTableBarang").DataTable().data()[0][5];
   
    var a = 0;
    var tx = parseInt(countFrom);
    var b = parseInt(countTo);
    // while (a<b){
    //     a++
        // $("td:first").html(i+1);
        var f = $("#DataTableBarang tbody tr").find("td:first")
        $.each(f, function(w,e){
            e.append(w+1);
        })
    //     i++
    // }
}

function ajaxGetDataBarang() {
    var dataTable = $("#DataTableBarang").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/master_barang/master_barang_controller.php",
            type: "post",
            error: function(){
                $(".DataTableBarang-error").html("");
                $("#DataTableBarang").append('<tbody class="DataTableBarang-grid-error"><tr><th colspan="3">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableBarang_processing").css("display","none");
            },
            complete: function(){
                setTimeout(function(){
                    preparEditBarang();
                    // createNumberGrid();
                },400);

            }
        },
        // "fnRowCallback" : function(nRow, aData, iDisplayIndex){
        //         // console.log(iDisplayIndex)
        //         // var countFrom = $("#DataTableBarang").DataTable().data()[0][4]
        //         // var countTo = $("#DataTableBarang").DataTable().data()[0][5]
        //         // $("td:first", nRow).html(parseInt(countFrom) +1);
        //         // return nRow;
                
        //     },
        "order": [[ 0, 'desc' ]],
        "columnDefs": [ { orderable: false, targets: [2] }]
    });
}

$("a.sidebar-toggle").click(function(){
        $("#DataTableBarang").DataTable().destroy();
        $("#DataTableBarang").DataTable();
});

$(document).ready(function(){
    preparEditBarang();
    prepareLoadBarang();
    ajaxGetDataBarang();
    prepareValidationBarang();
    $("#information").modal('show');
})