import Transaction from '../models/Transaction.js';
import Resource from '../models/Resource.js';
import Notification from '../models/Notification.js';

export const getMyTransactions = async (req, res, next) => {
  try {
    const txns = await Transaction.find({
      $or: [{ buyerNode: req.user._id }, { sellerNode: req.user._id }]
    }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: txns });
  } catch (error) { next(error); }
};

export const claimResourceTransaction = async (req, res, next) => {
  try {
    const resource = await Resource.findById(req.params.resourceId);
    if (!resource || resource.status === 'Claimed') {
      return res.status(400).json({ success: false, message: 'Resource unavailable for lock sequence.' });
    }

    resource.status = 'Claimed';
    await resource.save();

    const txn = await Transaction.create({
      resource: resource.title,
      resourceId: resource._id,
      partner: resource.ownerName,
      buyerNode: req.user._id,
      sellerNode: resource.owner,
      type: 'Inbound Claim',
      date: new Date().toISOString().split('T')[0],
      impact: resource.quantity
    });

    // Notify Supplier Node
    await Notification.create({
      title: 'Asset Claimed Successfully',
      message: `Your listed resource [${resource.title}] has been secured by ${req.user.company}.`,
      user: resource.owner
    });

    res.status(201).json({ success: true, data: txn });
  } catch (error) { next(error); }
};