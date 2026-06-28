import express from 'express';
import { getAllResources, createResource, scanWithGeminiVision } from '../controllers/resourceController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router();

router.route('/')
  .get(getAllResources)
  .post(protect, createResource);

router.post('/vision-scan', protect, upload.single('frame'), scanWithGeminiVision);

export default router;