import  express  from "express" 

import  Register  from '../Controller/admin.controller.js';
import { login } from "../Controller/admin.controller.js";
const router = express.Router();




router.post('/register',Register );
router.post('/login',login );





export default router;