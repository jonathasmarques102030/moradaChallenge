import * as express from 'express';
import { makeWithdraw } from '../controllers/withdrawController';

const router = express.Router();

router.post('/saque', makeWithdraw);

export default router;