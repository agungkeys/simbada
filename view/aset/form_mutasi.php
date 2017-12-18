        <div id="form_mutasi" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" hidden>
        	<div class="panel panel-bd" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-10">
                                <h4>Mutasi Barang</h4>
                            </div>
                            <!-- <div class="col-md-2 text-right">
                                <a href="#" onclick="tanah.clear();"><i class="panel-control-icon ti-reload"></i></a>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <form>
                        <div class="col-md-5" style="padding-top: 10px;">
                            <div class="form-group">
                                <label>Lokasi Asal</label>
                                <input type="text" name="mlokasiasal" class="form-control" id="mlokasiasal" readonly/>
                            </div>
                            <div class="form-group">
                                <label>Kode Lokasi Asal</label>
                                <input type="text" name="mkodelokasiasal" class="form-control" id="mkodelokasiasal" readonly/>
                            </div>
                        </div>
                        <div class="col-md-2 text-center" style="margin-top: 7%;">
                            <i style="font-size: 30px;" class="glyphicon glyphicon-random"></i>
                        </div>
                        <div class="col-md-5" style="padding-top: 10px;">
                            <div class="form-group">
                                <label>Lokasi Tujuan</label>
                                <div class="input-group">
                                    <select id="mlokasitujuan" name="mlokasitujuan" class="form-control"></select>
                                    <div class="input-group-addon" style="border-radius: 0px; color: #9999a2;" onclick="fm.openSKModal();"><i class="glyphicon glyphicon-list"></i></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Kode Lokasi Tujuan</label>
                                <input type="text" name="mkodelokasitujuan" class="form-control" id="mkodelokasitujuan" readonly/>
                            </div>
                        </div>
                    </form>
                    <div class="col-md-12">
                        <div class="table-responsive" style="width: 100%; overflow: auto;">
                            <table id="tablemutasidetails" class="table table-bordered">
                                <thead></thead>
                                <tbody></tbody>
                            </table>
                        </div> 
                    </div>
                    
                    <form>
                        <div class="col-md-5" style="padding-top: 10px;">
                            <div class="form-group">
                                <label>Tahun Mutasi</label>
                                <select name="mtahunperolehan" id="mtahunperolehan" class="form-control">
                                    <option value="">Pilih Tahun...</option>
                                    <script>
                                        var tahun = 1800;
                                        var y = new Date();
                                        for(i=y.getFullYear();i>=tahun;i--){
                                            document.write("<option>" + i + "</option>");
                                        }
                                    </script>
                                    <option value="0">0</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Catatan / Keterangan</label>
                                <textarea class="form-control" id="mketerangan" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modal-sk" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Satuan Kerja Perangkat Daerah (SKPD)</h4>
                    </div>
                    <div class="modal-body">
                        <div id="gridsk" class="panel-body">
                            <div class="table-responsive">
                                <table id="DataTableSatuanKerja" class="table table-bordered table-striped table-hover" style="width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>Kode Lokasi</th>
                                            <th>Unit</th>
                                            <th>Sub Unit</th>
                                            <th>Satuan Kerja</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            var fm = {}

            fm.openSKModal = function(){
                $("#modal-sk").modal('show');
                $("#DataTableSatuanKerja").DataTable().ajax.reload();

                //Untuk Reset Search Filter
                $('input[type=search]').val('');
                var table = $('#DataTableSatuanKerja').DataTable({
                    retrieve: true
                });
                table.search('').draw();
            }

            //Select 2 Dropdown
            fm.prepareSelectLokasi = function(){
                var lv = $(".user_level").text();
                var loc = $(".user_location").text();
                $('#mlokasitujuan').select2({
                    placeholder: 'Pilih Data Lokasi...',
                    ajax: {
                        url: './controller/entry_asset/datautama/entry_asset_select_lokasi.php',
                        dataType: 'json',
                        delay: 250,
                        data: function (params) {
                            return {
                                q: params.term, // search term
                                level: 'Admin',
                                location:loc,
                            };
                        },
                        processResults: function (data) {
                            return {
                                results: data
                            };
                        },
                        cache: true
                    }
                });

                $('#mlokasitujuan').on("select2:selecting", function(e) { 
                   // console.log(e.params.args.data.id)
                   $("#mkodelokasitujuan").val(e.params.args.data.id);
                });
            }

            //Select Table View
            fm.ajaxGetDataLokasi = function(){
                $('#DataTableSatuanKerja').DataTable().destroy();
                var dataTableLokasi = $("#DataTableSatuanKerja").dataTable({
                    "processing": true,
                    "serverSide": true,
                    "ajax":{
                        url: "./controller/entry_asset/formmutasi/entry_asset_select_lokasi_satuan_kerja_controller.php",
                        type: "post",
                        error: function() {
                            $(".DataTableSatuanKerja-error").html("");
                            $("#DataTableSatuanKerja").append('<tbody class="DataTableSatuanKerja-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                            $("#DataTableSatuanKerja_processing").css("display","none");
                        },
                        complete: function() {
                        }
                    },
                        "order": [[ 0, 'asc' ]],
                        // "columnDefs": [ { orderable: false, targets: [0] }]
                });
                fm.clickDataLokasi();
            }

            fm.clickDataLokasi = function(){
                var table = $('#DataTableSatuanKerja').DataTable();
                $('#DataTableSatuanKerja tbody').on( 'click', 'tr', function () {
                    // console.log( table.row( this ).data() );
                    var id = $(this).find("td")
                    
                    $("#modal-sk").modal('hide');
                    $("#mkodelokasitujuan").val(id[0].innerHTML);
                    $('#mlokasitujuan').empty().append('<option selected value='+id[3].innerHTML+'>'+id[3].innerHTML+'</option>');
                });
            }

            fm.prepare = function(){
                fm.prepareSelectLokasi();
                fm.ajaxGetDataLokasi();
            }

            $(document).ready(function () {
                
            });
        </script>