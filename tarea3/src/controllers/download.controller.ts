import { Request, Response } from 'express';
import path from 'path';

class DownloadController {

    async downloadSingle(req: Request, res: Response) {
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
            }
        });
    }

}

const controller = new DownloadController();

export default controller;