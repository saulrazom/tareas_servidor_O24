import { Request, Response } from 'express';

class UploadController {

    async uploadSingle(req: Request, res: Response) {
        console.log('Archivo', req.file)
        if (req.file) {
            res.send("File uploaded");
        }
        else {
            res.status(400).send("Unsoported file");
        }
    }

    async uploadMultiple(req: Request, res: Response) {
        if (req.files && req.files.length) {
            console.log('Archivos', req.files);
            res.send("Files uploaded");
        } else {
            res.status(400).send("Unsupported files");
        }
    }
}

const controller = new UploadController();

export default controller;