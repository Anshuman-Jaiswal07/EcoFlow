import express from 'express';
import { getTelemetryAnalytics } from '../controllers/analyticsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', protect, getTelemetryAnalytics);

export default router;