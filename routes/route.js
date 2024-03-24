import express from 'express';
import cors from 'cors';
import {Signup,Login} from '../controllers/userControllers.js'
const router = express.Router();
router.use(cors());

router.post("/Signup", Signup);
router.post('/Login', Login);
export default router;
