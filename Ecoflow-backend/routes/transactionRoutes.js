import express from 'express';
import { getMyTransactions, claimResourceTransaction } from '../controllers/transactionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(protect);

router.get('/', getMyTransactions);
router.post('/claim/:resourceId', claimResourceTransaction);

export default router;