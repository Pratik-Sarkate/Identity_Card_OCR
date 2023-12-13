const express = require('express');
const OCRController = require('../controller/ocr_controller');
const UploadController = require('../controller/upload_controller');

const router = express.Router();

router.post('/upload', UploadController.upload);

// router.post('/', OCRController.create); // handled in upload
router.delete('/:id', OCRController.destroy);
router.get('/:id', OCRController.get);
router.patch('/:id', OCRController.update);

module.exports = router;