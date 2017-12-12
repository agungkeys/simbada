
        <div id="form_data_utama" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" hidden>
            <div class="panel panel-bd">
                <div class="panel-heading">
                    <div class="panel-title">
                        <h4>Perbaharui Data Utama</h4>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kode Lokasi</label>
                        <div class="col-md-8">
                            <input type="text" name="fdu_kdlokasi" class="form-control" id="fdu_kdlokasi" readonly />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Unit</label>
                        <div class="col-md-8">
                            <input type="text" name="fdu_unit" class="form-control" id="fdu_unit" readonly/>    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Sub Unit</label>
                        <div class="col-md-8">
                            <input type="text" name="fdu_subunit" class="form-control" id="fdu_subunit" readonly/>    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Satuan Kerja</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <select id="fdu_asetlokasi" name="fdu_asetlokasi" class="form-control"></select>
                                <div class="input-group-addon" style="border-radius: 0px; color: #9999a2;" onclick="fdu.openSKModal();"><i class="glyphicon glyphicon-list"></i></div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Kode Barang</label>
                        <div class="col-md-8">
                            <input type="text" name="fdu_kodebarang" class="form-control" id="fdu_kodebarang" readonly />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Barang</label>
                        <div class="col-md-8">
                            <input type="text" name="fdu_namabarang" class="form-control" id="fdu_namabarang" readonly />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Nama Kepemilikan</label>
                        <div class="col-md-8">
                            <select id="fdu_kepemilikan" name="fdu_kepemilikan" class="form-control"></select>   
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Penanggung Jawab</label>
                        <div class="col-md-8">
                            <input type="text" name="fdu_penanggungjawab" class="form-control" id="fdu_penanggungjawab" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Lokasi P. Jawab</label>
                        <div class="col-md-8">
                            <input type="" name="" class="form-control" id="fdu_lokasipenanggungjawab" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">No. Register</label>
                        <div class="col-md-8">
                            <input type="text" name="fdu_noregister" class="form-control" id="fdu_noregister" />    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Mata Uang</label>
                        <div class="col-md-8">
                            <select id="fdu_currency" name="fdu_currency" class="form-control"></select>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Tanggal Survei</label>
                        <div class="col-md-8">
                            <div id="fdu_tanggalsurvei" class="input-group date">
                                <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Surveyor</label>
                        <div class="col-md-8">
                            <input type="text" name="surveyor" class="form-control" id="fdu_surveyor" />
                        </div>
                    </div>
                </div>
            </div>
        </div>