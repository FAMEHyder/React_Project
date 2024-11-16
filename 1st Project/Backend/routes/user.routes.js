import  express  from "express" 

import  Register  from '../Controllers/user.controller.js';
import {login} from '../Controllers/login.controller.js';
import {getUserById} from '../Controllers/user.controller.js';
import { verifyUser } from "../utils/VerifyToken.js";
import { getAllUsers } from "../Controllers/user.controller.js";

const router = express.Router();



router.get('/getAllUsers', getAllUsers);
router.post('/register',Register );
router.post('/login',login );
router.get('/getuser/:id',getUserById );



export default router;