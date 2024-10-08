import { Router } from 'express';
import upload from '../middlewares/upload';
import express from 'express';  
import path from 'path';

const router = Router();


router.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Carga de archivos PDF
router.post('/upload', upload.single('file'), (req, res) => {
  console.log('Archivo', req.file)
  if (req.file){
    res.send("File uploaded");
  }
  else{
    res.status(400).send("Unsoported file");
  }

});

router.post('/uploads', upload.array('files'), (req, res) => {
    if (req.files && req.files.length) {
      console.log('Archivos', req.files);
      res.send("Files uploaded");
    } else {
      res.status(400).send("Unsupported files");
    }
  });


 // Descarga de archivos PDF
  router.get('/download', (req, res) => {
    const fileName = req.query.file as string;

    if (!fileName) {
      res.status(400).send('Missing file name');
      return;
    }
    const filePath = path.join(__dirname, '../../documents', fileName);

    res.download(filePath, (e: NodeJS.ErrnoException | null) => {
      if (e) {
        if (e.code === 'ENOENT') {
          res.status(404).send('File not found');
        } else {
          res.status(500).send('Error downloading the file');
        }
      }});
  
  });

export default router;