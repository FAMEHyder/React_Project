import express from 'express';
import {addNotice,getAllNotices,deleteAllNotices} from '../Controller/noticeboard.controller.js';

const router = express.Router()

router.post ('/AddToBoard' ,addNotice)
router.get ('/GetFromBoard' ,getAllNotices)
router.delete ('/DeleteFromBoard' ,deleteAllNotices)

export default router;