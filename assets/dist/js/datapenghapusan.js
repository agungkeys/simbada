var dp = {
    dataAllFromId: ko.observableArray([]),
    dataawal: ko.observable("0"),
    dokumentanah: ko.observable("0"),
    NmBarangRow: ko.observable(""),
}

dp.prepareAll = function(){
    dp.ajaxGetDataPenghapusan();
    
}

dp.kembalikan = function(n){
    $("#modal-penghapusan").modal('hide');
    // console.log("Masuk Hapus "+n)
    swal({
        title: "Data Akan Dikembalikan?",
        text: "Anda Akan Mengembalikan Data '"+n+"'!?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function (isConfirm) {
        // controller/pencarian_aset/_datautama/select_namapemilik.php
        if (isConfirm) {
            $.ajax({
                dataType: 'json',
                type:'post',
                url: 'controller/pencarian_aset/penghapusan/penghapusan_kembalikan.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTablePenghapusan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dikembalikan!",
                    text: "Data Berhasil Dikembalikan",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTablePenghapusan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dikembalikan", "error");
        }
    });
}

dp.hapus = function(n){
    $("#modal-penghapusan").modal('hide');
    // console.log("Masuk Hapus "+n)
    swal({
        title: "Data Akan Dihapus Permanen?",
        text: "Anda Akan Menghapus '"+n+"' Permanen!?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function (isConfirm) {
        // controller/pencarian_aset/_datautama/select_namapemilik.php
        if (isConfirm) {
            $.ajax({
                dataType: 'json',
                type:'post',
                url: 'controller/pencarian_aset/penghapusan/penghapusan_hapus.php',
                data:{kode: n}
            }).done(function(data){
                $("#DataTablePenghapusan").DataTable().ajax.reload();
                // swal("Berhasil Dihapus!", "Data Berhasil Dihapus", "success");
                swal({
                    title: "Berhasil Dihapus!",
                    text: "Data Berhasil Dihapus",
                    type: "success",
                    confirmButtonText: "Ya",
                })
            });
        } else {
            $("#DataTablePenghapusan").DataTable().ajax.reload();
            swal("Batal", "Data Batal Dihapus", "error");
        }
    });
}

dp.ajaxGetDataPenghapusan = function(){
    var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTablePenghapusan").dataTable({
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/penghapusan/penghapusan_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTablePenghapusan-error").html("");
                $("#DataTablePenghapusan").append('<tbody class="DataTablePenghapusan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTablePenghapusan_processing").css("display","none");
            },
            complete: function() {
            }
        },
        "order": [[ 0, 'asc' ]],
        "sScrollY": 400, //height
        "sScrollX": "100%",
        "columnDefs": [ 
            // { 
            //     targets: [9],
            //     "render" : function( data, type, full ) {
            //         // you could prepend a dollar sign before returning, or do it
            //         // in the formatNumber method itself
            //         return formatNumber(data);  
            //     }
            // },
            // { 
            //     targets: [10],
            //     "render" : function( data, type, full ) {
            //         // you could prepend a dollar sign before returning, or do it
            //         // in the formatNumber method itself
            //         return formatNumber(data);  
            //     }
            // },
            { 
                targets: [10],
                "className": "text-right",
                "render" : function( data, type, full ) {
                    // you could prepend a dollar sign before returning, or do it
                    // in the formatNumber method itself
                    return formatNumber(data);  
                }
            },
            { 
                targets: [14],
                "className":"statusgotomiddle",
                "render" : function( data, type, full ) {
                    return formatKet(data);
                }
            }
        ],
        lengthMenu: [
            [ 10, 25, 50, 100, 500, 1000, 5000, 10000],
            [ '10 rows', '25 rows', '50 rows', '100 rows', '500 rows', '1K rows', '5K rows', '10K rows' ]
        ],
        // "dom": 'Blfrtip',
        // "buttons": ['excel'],
        // initComplete: function () {
        //     $('.buttons-pdf').html('<span class="glyphicon glyphicon-file" data-toggle="tooltip" title="Export To Excel"/>')
        // }
    });  
    dp.clickRow();

    //Custom Button for export data
    var dt = $('#DataTablePenghapusan' ).DataTable();
    // Name of the filename when exported (except for extension
    var export_filename = 'DataPenghapusan-'+moment().format("DD-MM-YYYY");
    // Configure Export Buttons
    new $.fn.dataTable.Buttons( dt, {
        buttons: [
            {
                text: '<i class="fa fa-lg fa-clipboard"></i> Copy Data',
                extend: 'copy',
                className: 'btn btn-default p-5 m-0 width-35 assets-export-btn export-copy ttip'
            }, {
                text: '<i class="fa fa-lg fa-file-excel-o"></i> Export Excel',
                extend: 'excel',
                className: 'btn btn-default p-5 m-0 width-35 assets-export-btn export-xls ttip',
                title: export_filename,
                extension: '.xls'
            }
        ]
    } );
     
    // Add the Export buttons to the toolbox
    dt.buttons( 0, null ).container().appendTo( '#asetnavigasiexport .text-left' );
}

dp.clickRow = function(){
    var table = $('#DataTablePenghapusan').DataTable();
    $('#DataTablePenghapusan tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );

        var data=[];
        data=table.row( this ).data();
        // console.log(data)

        if(data != undefined){
            $("#modal-penghapusan").modal('show'); 
            // alert(avals);
            $("li.kembalikan").attr('onclick','dp.kembalikan("'+data[0]+'")');
            $("li.hapus").attr('onclick','dp.hapus("'+data[0]+'")');
            // dp.getDataFromId(data[0])
        }
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

function formatKet(datas){
    var data = datas.toUpperCase();
    switch (datas.toUpperCase()) {
        case "X":
            return "<center><span class='label label-pill label-default-outline'>Aset Dihapuskan</span></center>";
            break;
        case "XX":
            return "<center><span class='label label-pill label-warning-outline'>Aset Yang Telah Dihibahkan</span></center>";
            break;
        case "XXX":
            return "<center><span class='label label-pill label-danger-outline'>Aset Rusak Berat</span></center>";
            break;
        case "XXXX":
            return "<center><span class='label label-pill label-success-outline'>Kemitraan Dengan Pihak Ke-3 </span></center>";
            break;
        case "XXXXX":
            return "<center><span class='label label-pill label-info-outline'>Aset Tidak Berwujud</span></center>";
            break;
        case "XXXXXX":
            return "<center><span class='label label-pill label-primary-outline'>Aset Lain-Lainnya</span></center>";
            break;
        case "XXXXXXX":
            return "<center><span class='label label-pill label-primary-outline'>Aset Extra Countable (Kapitalisasi)</span></center>";
    }
}

$(document).ready(function () {
    dp.prepareAll();
});
