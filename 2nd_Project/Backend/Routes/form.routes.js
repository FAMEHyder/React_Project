import express from 'express';
import { Createform } from '../Controller/user.controller.js';
const router = express.Router();

import upload from "../utills/multer.js"// Multer config

router.post('/createform',upload.array("images", 5), Createform);

export default router;