const Promotion = require('../models/Promotion');

exports.createPromotion = async (req, res) => {
  const newPromotion = new Promotion(req.body);
  try {
    await newPromotion.save();
    res.status(201).json(newPromotion);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find({});
    res.json(promotions);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Asegúrate de que estas funciones también estén definidas si las usas:
exports.getPromotionById = async (req, res) => {
  // Código aquí
};

exports.updatePromotion = async (req, res) => {
  // Código aquí
};

exports.deletePromotion = async (req, res) => {
  // Código aquí
};
