var express = require('express');
var router = express.Router();
var Calc = require('../controller/sum_ansor');

/* GET users listing. */
let calc = new Calc();
router.post('/', calc.sum);

module.exports = router;
