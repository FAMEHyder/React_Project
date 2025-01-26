import express from 'express';
import upload from "../utills/multer.js"// Multer config
import { Createform } from '../Controller/user.controller.js';

const router = express.Router();


router.post('/createform',upload.array("images", 5), Createform);

export default router;