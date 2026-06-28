import express from 'express';
import { getMyRecommendations, executeRecommendation } from '../controllers/recommendationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(protect);

router.get('/', getMyRecommendations);
router.patch('/:id/execute', executeRecommendation);

export default router;