import  express  from "express" 

import  Register  from '../Controllers/user.controller.js';
import Login from '../Controllers/user.controller.js';
const router = express.Router();




router.post('/register',Register );
router.post('/login',Login );



export default router;