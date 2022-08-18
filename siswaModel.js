// contactModel.js
const mongoose = require('mongoose');

// setup schema
const SiswaSchema = mongoose.Schema({
    nama : {
        type: String,
        required: true,
    },
    tanggallahir : {
        type: String,
        required: true,
    },
    jeniskelamin: String,
    hobi: String,
    create_date : {
        type: Date,
        default: Date.now,
    },
});

// export Siswa model
const Siswa = module.exports = mongoose.model('siswa', SiswaSchema);
module.exports.get = function(callback, limit){
    Siswa.find(callback).limit(limit);
}
