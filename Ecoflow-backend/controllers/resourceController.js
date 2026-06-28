import Resource from '../models/Resource.js';
import Notification from '../models/Notification.js';
import { analyzeResourceVision } from '../services/geminiService.js';
import cloudinary from '../config/cloudinary.js';
import AppError from '../utils/appError.js';

export const getAllResources = async (req, res, next) => {
  try {
    const resources = await Resource.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: resources.length, data: resources });
  } catch (error) { next(error); }
};

export const createResource = async (req, res, next) => {
  try {
    const { title, category, quantity, location, price } = req.body;
    
    const newResource = await Resource.create({
      title, category, quantity, location, price,
      owner: req.user._id,
      ownerName: req.user.company,
      image: req.body.image || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=60'
    });

    res.status(201).json({ success: true, data: newResource });
  } catch (error) { next(error); }
};

export const scanWithGeminiVision = async (req, res, next) => {
  try {
    if (!req.file) return next(new AppError('Upload a raw image file frame parameter.', 400));
    
    // Cloudinary pipeline deployment wrapper
    const base64Image = req.file.buffer.toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${base64Image}`;
    
    const uploadResponse = await cloudinary.uploader.upload(dataURI, { folder: "ecoflow_assets" });
    const aiPrediction = await analyzeResourceVision(req.file.buffer, req.body.categoryHint);

    res.status(200).json({
      success: true,
      imageUrl: uploadResponse.secure_url,
      predictions: aiPrediction
    });
  } catch (error) { next(error); }
};