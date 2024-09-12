import  express  from "express" 

import  Register  from '../Controllers/user.controller.js';
const router = express.Router();




router.post('/register',Register );



export default router;