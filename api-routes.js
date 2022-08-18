// api-routes.js

// import express routes
const express = require('express');
const router = express.Router();

// set default api response
router.get('/', (req, res) => {
    res.json({
        status: "API Berfungsi",
        message: "Selamat Datang Di CRUD BackEnd App"
    });
});

// import contact controller
const siswaController = require('./siswaController');

// Contact Routes
router.route('/siswa')
.get(siswaController.index)
.post(siswaController.new);

router.route("/siswa/:siswa_id")
.get(siswaController.view)
.patch(siswaController.update)
.put(siswaController.update)
.delete(siswaController.delete)


// export API routes
module.exports = router;