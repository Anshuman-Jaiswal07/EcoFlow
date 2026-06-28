import Recommendation from '../models/Recommendation.js';

export const getMyRecommendations = async (req, res, next) => {
  try {
    const recs = await Recommendation.find({ targetUser: req.user._id });
    res.status(200).json({ success: true, data: recs });
  } catch (error) { next(error); }
};

export const executeRecommendation = async (req, res, next) => {
  try {
    const rec = await Recommendation.findByIdAndUpdate(
      req.params.id, 
      { status: 'Executed / Infrastructure Locked' }, 
      { new: true }
    );
    res.status(200).json({ success: true, data: rec });
  } catch (error) { next(error); }
};