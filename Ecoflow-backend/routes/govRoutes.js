import express from 'express';
import { getGovPanelMetrics } from '../controllers/govController.js';
import { protect, restrictTo } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', protect, restrictTo('Gov Administrator', 'Enterprise Partner'), getGovPanelMetrics);

export default router;