        <div id="form_penghapusan" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" hidden>
        	<div class="panel panel-bd" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <div class="row">
                            <div class="col-md-10">
                                <h4>Penghapusan Barang</h4>
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
                                <input type="text" name="hlokasiasal" class="form-control" id="hlokasiasal" readonly/>
                            </div>
                            <div class="form-group">
                                <label>Kode Lokasi Asal</label>
                                <input type="text" name="hkodelokasiasal" class="form-control" id="hkodelokasiasal" readonly/>
                            </div>
                        </div>
                    </form>
                    <div class="col-md-12">
                        <div class="table-responsive" style="width: 100%; overflow: auto;">
                            <table id="tablepenghapusandetails" class="table table-bordered">
                                <thead></thead>
                                <tbody></tbody>
                            </table>
                        </div> 
                    </div>
                    
                    <form>
                        <div class="col-md-5" style="padding-top: 10px;">
                            <div class="form-group">
                                <label>Tahun Penghapusan</label>
                                <select name="htahunperolehan" id="htahunperolehan" class="form-control">
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
                                <label>Jenis Penghapusan</label>
                                <select id="hjenis" name="hjenis" class="form-control">
                                    <option value="">Pilih Jenis Penghapusan...</option>
                                    <option value="X">Aset Dihapuskan</option>
                                    <option value="XX">Aset Yang Telah Dihibahkan</option>
                                    <option value="XXX">Aset Rusak Berat</option>
                                    <option value="XXXX">Kemitraan Dengan Pihak Ke-3</option>
                                    <option value="XXXXX">Aset Tidak Berwujud</option>
                                    <option value="XXXXXX">Aset Lain-Lainnya</option>
                                    <option value="XXXXXXX">Aset Extra Countable (Kapitalisasi)</option>
                                </select> 
                            </div>
                            <div class="form-group">
                                <label>Catatan / Keterangan</label>
                                <textarea class="form-control" id="hketerangan" rows="3"></textarea>
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
                                <table id="DataTableSatuanKerjaPenghapusan" class="table table-bordered table-striped table-hover" style="width: 100%;">
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
            var ph = {}

            ph.openSKModal = function(){
                $("#modal-sk").modal('show');
                $("#DataTableSatuanKerja").DataTable().ajax.reload();

                //Untuk Reset Search Filter
                $('input[type=search]').val('');
                var table = $('#DataTableSatuanKerja').DataTable({
                    retrieve: true
                });
                table.search('').draw();
            }

            ph.prepareDate = function(){
                $('#htanggal').datepicker({
                    language: "id",
                    format: "dd MM yyyy",
                    todayBtn: "linked",
                    toggleActive: true
                });
            }

            ph.prepareSelectLokasi = function(){
                $('#mlokasitujuan').select2({
                    placeholder: 'Pilih Data Lokasi...',
                    ajax: {
                        url: './controller/entry_asset/datautama/entry_asset_select_lokasi.php',
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

                $('#mlokasitujuan').on("select2:selecting", function(e) { 
                   // console.log(e.params.args.data.id)
                   $("#mkodelokasitujuan").val(e.params.args.data.id);
                });
            }

            ph.ajaxGetDataLokasi = function(){
                var dataTableLokasi = $("#DataTableSatuanKerjaPenghapusan").dataTable({
                    "processing": true,
                    "serverSide": true,
                    "ajax":{
                        url: "./controller/entry_asset/formmutasi/entry_asset_select_lokasi_satuan_kerja_controller.php",
                        type: "post",
                        error: function() {
                            $(".DataTableSatuanKerjaPenghapusan-error").html("");
                            $("#DataTableSatuanKerjaPenghapusan").append('<tbody class="DataTableSatuanKerjaPenghapusan-grid-error"><tr><th colspan="8">Data Tidak Ditemukan...</th></tr></tbody>');
                            $("#DataTableSatuanKerjaPenghapusan_processing").css("display","none");
                        },
                        complete: function() {
                        }
                    },
                        "order": [[ 0, 'asc' ]],
                        // "columnDefs": [ { orderable: false, targets: [0] }]
                });
                ph.clickDataLokasi();
            }

            ph.clickDataLokasi = function(){
                var table = $('#DataTableSatuanKerjaPenghapusan').DataTable();
                $('#DataTableSatuanKerjaPenghapusan tbody').on( 'click', 'tr', function () {
                    // console.log( table.row( this ).data() );
                    var data=[];
                    data=table.row( this ).data();
                    
                    $("#modal-sk").modal('hide');
                    var avals = data[0];
                    // console.log(data);
                    $("#hkodelokasitujuan").val(data[0]);
                    $('#hlokasitujuan').empty().append('<option selected value='+data[3]+'>'+data[3]+'</option>');
                });
            }

            $(document).ready(function () {
                ph.prepareDate();
                ph.prepareSelectLokasi();
                ph.ajaxGetDataLokasi();
            });
        </script>