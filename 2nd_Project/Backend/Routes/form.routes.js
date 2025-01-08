import express from 'express';
import CreateForm from '../Controller/form.controller.js';
const router = express.Router();

import upload from "../utills/multer.js"// Multer config

router.post('/createform',upload.array("images", 5), CreateForm);

export default router;