const express = require('express');
const router = express.Router();
const api=require('./dataapi');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/set', api.myapi);

module.exports=router;