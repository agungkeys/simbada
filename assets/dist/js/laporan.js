var src = {
    kepunitsatuankerja: ko.observable(""),
    statusalldata: ko.observable(""),
    tahunawal: ko.observable(""),
    tahunakhir: ko.observable(""),
    semester: ko.observable("")
}

var kib_a = {

}

var kib_b = {

}

var lap_tanah = {

}


function openSearchKib(){
}

function callTree(){
	$.fn.extend({
        treed: function (o) {

            var openedClass = 'fa-folder-open-o';
            var closedClass = 'fa-folder-o';

            if (typeof o !== 'undefined') {
                if (typeof o.openedClass !== 'undefined') {
                    openedClass = o.openedClass;
                }
                if (typeof o.closedClass !== 'undefined') {
                    closedClass = o.closedClass;
                }
            }
            ;

            //initialize each of the top levels
            var tree = $(this);
            tree.addClass("tree");
            tree.find('li').has("ul").each(function () {
                var branch = $(this); //li with children ul
                branch.prepend("<i class='indicator fa " + closedClass + "'></i>");
                branch.addClass('branch');
                branch.on('click', function (e) {
                    if (this === e.target) {
                        var icon = $(this).children('i:first');
                        icon.toggleClass(openedClass + " " + closedClass);
                        $(this).children().children().toggle();
                    }
                });
                branch.children().children().toggle();
            });
            //fire event from the dynamically added icon
            tree.find('.branch .indicator').each(function () {
                $(this).on('click', function () {
                    $(this).closest('li').click();
                });
            });
            //fire event to open branch if the li contains an anchor instead of text
            tree.find('.branch>a').each(function () {
                $(this).on('click', function (e) {
                    $(this).closest('li').click();
                    e.preventDefault();
                });
            });
            //fire event to open branch if the li contains a button instead of text
            tree.find('.branch>button').each(function () {
                $(this).on('click', function (e) {
                    $(this).closest('li').click();
                    e.preventDefault();
                });
            });
        }
    });
}

function selectKodeLokasi(){
    $('#kodelokasi').on('change', function (e) {
        // console.log(e.currentTarget.value)
        var a = e.currentTarget.value;
        $("#previewidlokasi").text(a)
    });
}

src.tanggalKIB = function(){
	$('#tanggalsurveikib').datepicker({
        language: "id",
        format: "dd MM yyyy",
        todayBtn: "linked",
        toggleActive: true
    });
}

src.selectKodeLokasi = function(){
    $('#kodelokasi').select2({
        placeholder: 'Pilih Data Lokasi...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/laporan/src/select_kodelokasi.php',
            dataType: 'json',
            delay: 250,
            processResults: function (data) {
                return {
                    results: data
                };
                
            },
            cache: true
        }
    });
}

src.kepemilikan = function(){
    $('#kepemilikan').select2({
        placeholder: 'Pilih Data Kepemilikan...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/laporan/src/select_kepemilikan.php',
            dataType: 'json',
            delay: 250,
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });
}

src.sumberdana = function(){
    $('#sumberdana').select2({
        placeholder: 'Pilih Data Sumber Dana...',
        minimumResultsForSearch: Infinity,
        ajax: {
            url: './controller/laporan/src/select_sumberdana.php',
            dataType: 'json',
            delay: 250,
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });
}

src.prepare = function(){
    src.tanggalKIB();
    src.selectKodeLokasi();
    src.kepemilikan();
    src.sumberdana();
    $("#alldatacustom").hide();
}

src.embedpdf = function(){
    var $container = $("#pdfRenderer");
    PDFObject.embed("laporan_kib.php", $container);
}

src.selectAllData = function(){
    var a = $("#alldata");
    a.change(function() {
        var ab = a.prop('checked');
        if(ab != true) {
            $("#alldatacustom").show();
        }else{
            $("#alldatacustom").hide();
        }
    });
}

src.searchData = function(){
    var tglreport = $("#tanggalsurveikib").data('datepicker').getFormattedDate('yyyy-mm-dd');
    var kepunit = src.kepunitsatuankerja();
    
    var kodelok = $("#kodelokasi").select2().val();
    var sumbdana = $("#sumberdana").select2().text();
    var tahunawal = src.tahunawal();
    var tahunakhir = src.tahunakhir();
    var smstr = src.semester();

    console.log(tglreport, kepunit, kodelok, sumbdana, tahunawal, tahunakhir, smstr)
}

$(document).ready(function () {
	callTree();
	$('#tree-1').treed({openedClass: 'fa-folder-open', closedClass: 'fa-folder'});
	$('#tree-2').treed({openedClass: 'fa-file-o', closedClass: 'fa-file'});
    src.prepare();
    src.embedpdf();
    src.selectAllData();
    selectKodeLokasi();

    
});