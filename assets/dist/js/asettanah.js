var at = {

}

at.prepareAll = function(){
	at.ajaxGetDataTanah();
}

at.ajaxGetDataTanah = function(){
	var lv = $(".user_level").text();
    var loc = $(".user_location").text();
    var dataTableTanah = $("#DataTableAsetTanah").dataTable({
    	
        "processing": true,
        "serverSide": true,
        "ajax":{
            url: "./controller/pencarian_aset/tanah/tanah_controller.php",
            type: "post",
            data:{
                level: lv, location: loc
            },
            error: function() {
                $(".DataTableAsetTanah-error").html("");
                $("#DataTableAsetTanah").append('<tbody class="DataTableAsetTanah-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                $("#DataTableAsetTanah_processing").css("display","none");
            },
            complete: function() {
            }
        },
        "order": [[ 0, 'asc' ]],
        "sScrollY": 400, //height
		"sScrollX": "100%",
 		"columnDefs": [ 
 			{ 
 				targets: [7],
 				"render" : function( data, type, full ) {
			        // you could prepend a dollar sign before returning, or do it
			        // in the formatNumber method itself
			        return formatNumber(data);  
			    }
 			},
 			{ 
 				targets: [9],
 				render: function(d){
	                return moment(d).format("DD/MM/YYYY");
	            }
 			},
 			{ 
 				targets: [17],
 				"render" : function( data, type, full ) {
			        // you could prepend a dollar sign before returning, or do it
			        // in the formatNumber method itself
			        return "Rp "+formatNumber(data);  
			    }
 			}
 		]
    });  
    at.clickRow();
}

at.clickRow = function(){
	var table = $('#DataTableAsetTanah').DataTable();
    $('#DataTableAsetTanah tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data() );
        var data=[];
        data=table.row( this ).data();
        
        
        var avals = data[0];
        $("#modal-menu").modal('show');
        // alert(avals);
    });
}

function formatNumber(n) {
  return n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

$(document).ready(function () {
    at.prepareAll();
});
