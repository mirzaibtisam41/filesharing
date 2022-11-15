const express = require('express');
const upload = require('../middleware/index');
const router = express.Router();
const { Controllers } = require('../controllers/index');

router.get('/', Controllers.homeRoute);
router.get('/file/:id', Controllers.downloadRoute);
router.get('/download/:id', Controllers.downloadFile);
router.post('/upload', upload.single('file'), Controllers.uploadFile);

module.exports = router;