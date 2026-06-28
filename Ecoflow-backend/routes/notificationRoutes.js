import express from 'express';
import { getMyNotifications, clearNotificationsRead } from '../controllers/notificationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(protect);

router.get('/', getMyNotifications);
router.patch('/clear-flags', clearNotificationsRead);

export default router;