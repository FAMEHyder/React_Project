import  express  from "express" 

import  Register  from '../Controller/user.controller.js';
import { login } from "../Controller/user.controller.js";
import { getAllUsers , getUserById ,createMarksheet,getMarksheetById,getRegistrationById} from "../Controller/user.controller.js";
const router = express.Router();




router.post('/register',Register );
router.post('/login',login );
router.get('/getAllUsers', getAllUsers );
router.get('/users/:id', getUserById);
router.post('/marksheet/:userId', createMarksheet);
router.get('/marksheet/:Id', getMarksheetById);
router.get('/registration/:Id', getRegistrationById);




export default router;