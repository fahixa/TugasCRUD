Siswa = require("./siswaModel");

// handle index action
exports.index = function (req, res) {
    Siswa.get(function (err, siswa) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }

        res.json({
            status: "success",
            message: "Data Siswa Berhasil Di Ambil!",
            data: siswa,
        });
    });
}

// handle create siswa
exports.new = function (req, res) {
    let siswa = new Siswa();
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;
    siswa.save().then(data => {
        res.json({
            status: "Success",
            message: "Siswa Berhasil Di Tambahkan!",
            Siswa: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Internal Server Error"
        });
    });
}

// handle view siswa info
exports.view = function (req, res) {
    Siswa.findByid(req.param.siswa_id, function (err, siswa) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            message: "Detail Data Siswa Sedang Diproses ...",
            data: siswa,
        });
    });
};

// handle update siswa info
exports.update = function (req, res) {
    Siswa.findById(req.params.siswa_id, function (err, siswa) {
        if (err) {
            res.json({
                status: "error",
                message: "ID Tidak Ditemukan!",
            });
        }
        siswa.nama = req.body.nama;
        siswa.tanggallahir = req.body.tanggallahir;
        siswa.jeniskelamin = req.body.jeniskelamin;
        siswa.hobi = req.body.hobi;
        siswa.save()
            .then((data) => {
                res.json({
                    status: "Success",
                    message: "Data Siswa Telah Diperbarui!",
                    Contact: data,
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || "Internal Server Error",
                });
            }); 
    })
}

// handle delete siswa info
exports.delete = function (req, res) {
    Siswa.remove({
        _id: req.param.siswa_id,

    }, function(err, siswa){
        if (err)
        res.send(err);

        res.json({
            status: "Sukses",
            message: "Data Siswa Berhasil Dihapus!"
        });
    });
}
