import multer, { diskStorage, FileFilterCallback } from 'multer';
import { Request } from 'express';

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'documents')
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    const timestamp = new Date().getTime()
    cb(null, `${timestamp.toString()}.${ext}`)
  }
})

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const validExtensions = ['pdf'];
    const ext = file.originalname.split('.').pop()?.toLowerCase();
    const isValid = validExtensions.includes(ext as string);
    // const isValid = file.mimetype.startsWith('image/');
    cb(null, isValid);
};

const upload = multer({ storage, fileFilter });

export default upload