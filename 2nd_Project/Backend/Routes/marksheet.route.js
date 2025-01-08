import express from 'express';
import createMarksheet from '../Controller/marksheet.controller.js';
const router = express.Router();


router.post('/createmarksheet', createMarksheet);

export default router;