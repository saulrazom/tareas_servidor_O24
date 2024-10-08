import { Router } from 'express';
import upload from '../middlewares/upload';
import express from 'express';  
import path from 'path';
import uploadController from '../controllers/upload.controller';
import downloadController from '../controllers/download.controller';

const router = Router();


router.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Carga de archivos PDF
router.post('/upload', upload.single('file'), uploadController.uploadSingle);
router.post('/uploads', upload.array('files'), uploadController.uploadMultiple);

// Descarga de archivos PDF
router.get('/download', downloadController.downloadSingle);

export default router;