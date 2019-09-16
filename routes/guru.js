var express = require('express');
var router = express.Router();
let {
  viewGuru,
  actionCreate,
  actionUpdate,
  actionDetele
} = require("../controllers/guruController")

router.get("/admin/guru", viewGuru)
router.post("/admin/guru", actionCreate)
router.post("/admin/guru/update", actionUpdate)
router.get("/admin/guru/delete/:id", actionDetele)


module.exports = router;
