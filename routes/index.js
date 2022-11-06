var express = require('express');
var router = express.Router();
var indexModule=require('../controllers/index')
var joi=require('../joiValidation/index')
/* GET home page. */
router.post('/',joi.addData,indexModule.addData );

router.get('/items',indexModule.itemsList)

router.get('/select',indexModule.select_by_item)

router.get('/getData',indexModule.GetData)

module.exports = router;
