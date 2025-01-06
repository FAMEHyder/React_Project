import  express  from "express" 

import  Register  from '../Controller/user.controller.js';

const router = express.Router();




router.post('/register',Register );




export default router;