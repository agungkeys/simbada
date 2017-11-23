SELECT datatanah.KodeTanah, masterlokasi.SubUnit, masterlokasi.SatuanKerja, masterpemilik.NamaPemilik, datatanah.GolonganTanah, masterbarang.NamaBarang, datatanah.Letak, datatanah.LuasTanah, datatanah.StatusTanah, datatanah.Tanggal, datatanah.Nomor, datatanah.TahunPerolehan, datatanah.Penggunaan, datatanah.BatasUtara, datatanah.BatasTimur, datatanah.BatasSelatan, datatanah.BatasBarat, datatanah.RangeHarga1, datatanah.RangeHarga2, datatanah.HargaTanahM2, datatanah.HargaTanah, datatanah.NilaiPerolehan, datatanah.NilaiBaru, datatanah.Keterangan, datatanah.PenanggungJawab, datatanah.EntryUser

FROM datatanah 
INNER JOIN masterlokasi ON datatanah.KodeLokasi = masterlokasi.KodeLokasi
INNER JOIN masterpemilik ON datatanah.KodePemilik = masterpemilik.KodePemilik
INNER JOIN masterbarang ON datatanah.KodeBarang = masterbarang.KodeBarang




SELECT kategoridetailformsurvei.ID, kategoriformsurvei.Kategori, kategoridetailformsurvei.Value, kategoridetailformsurvei.Ket_1, kategoridetailformsurvei.Ket_2, kategoridetailformsurvei.DateCreate
FROM kategoridetailformsurvei 
INNER JOIN kategoriformsurvei ON kategoridetailformsurvei.IDKategori = kategoriformsurvei.ID

===========================================================================
//Jalan Sukses

CREATE VIEW temp_datatanah 
AS SELECT KodeTanah, KodeLokasi as KodeLok, SubUnit, SatuanKerja, KodePemilik, NamaPemilik, GolonganTanah, KodeBarang, NamaBarang, Letak, LuasTanah, StatusTanah, Tanggal, Nomor, TahunPerolehan, Penggunaan, BatasUtara, BatasTimur, BatasSelatan, BatasBarat, RangeHarga1, RangeHarga2, HargaTanahM2, HargaTanah, NilaiPerolehan, NilaiBaru, Keterangan, PenanggungJawab, EntryUser

FROM datatanah, masterlokasi, masterpemilik, masterbarang
WHERE datatanah.KodeLokasi = masterlokasi.KodeLokasi AND datatanah.KodePemilik = masterpemilik.KodePemilik AND datatanah.KodeBarang = masterbarang.KodeBarang;



===========================================================================

SELECT KodeTanah, SubUnit, SatuanKerja, NamaPemilik, GolonganTanah, NamaBarang, Letak, LuasTanah, StatusTanah, Tanggal, Nomor, TahunPerolehan, Penggunaan, BatasUtara, BatasTimur, BatasSelatan, BatasBarat, RangeHarga1, RangeHarga2, HargaTanahM2, HargaTanah, NilaiPerolehan, NilaiBaru, Keterangan, PenanggungJawab, EntryUser

FROM datatanah, masterlokasi, masterpemilik, masterbarang
WHERE datatanah.KodeLokasi = masterlokasi.KodeLokasi AND datatanah.KodePemilik = masterpemilik.KodePemilik AND datatanah.KodeBarang = masterbarang.KodeBarang;




//datatanah
KodeTanah
KodeLokasi
KodeBarang
GolonganTanah
LuasTanah
TahunPerolehan
Letak
StatusTanah
StatusTanahLainnya
Bersertifikat
Tanggal
Nomor
Penggunaan
AsalUsul
AsalUsulLainnya
DataAwal
BatasUtara
BatasTimur
BatasSelatan
BatasBarat
TipePermukaan
TipePermukaanLainnya
LebarJalan
NamaBangunanPetunjuk
JarakBangunanPetunjuk
LingkunganSekitar
LingkunganSekitarLainnya
RangeHarga1
RangeHarga2
HargaTanahM2
HargaTanah
NilaiBaru
NilaiPasar
NilaiPerolehan
Keterangan
PenanggungJawab
LokasiPenanggungJawab
Surveyor
TglSurvey
MataUang
Satker
KodeTanahLama
KodePemilik
NoReg
Status
KetStatus
Entry
EntryUser

//masterlokasi
KodeLokasi
Unit
SubUnit
SatuanKerja
NamaKu
NipKu
NamaKB
NIPKB
Stat
ID
DateCreate

//masterbarang
KodeBarang
NamaBarang
stat
ID
KodeRekening
KodeBaru
KodeRekeningLama
DateCreate

//masterpemilik
KodePemilik
NamaPemilik




KodeTanah',
SubUnit',
SatuanKerja',
NamaPemilik',
GolonganTanah',
NamaBarang',
Letak',
LuasTanah',
StatusTanah',
Tanggal',
Nomor',
TahunPerolehan',
Penggunaan',
BatasUtara',
BatasTimur',
BatasSelatan',
BatasBarat',
RangeHarga1',
RangeHarga2',
HargaTanahM2',
HargaTanah',
NilaiPerolehan',
NilaiBaru',
Keterangan',
PenanggungJawab',
EntryUser' 