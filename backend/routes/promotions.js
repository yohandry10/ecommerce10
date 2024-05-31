const express = require('express');
const router = express.Router();
const promotionsController = require('../controllers/promotionsController');

router.post('/', promotionsController.createPromotion);
router.get('/', promotionsController.getAllPromotions);
// Middleware de validación separado para las promociones
const validatePromotion = [
    // Define tus validaciones para las promociones aquí
];
router.get('/:id', validatePromotion, promotionsController.getPromotionById);
router.put('/:id', validatePromotion, promotionsController.updatePromotion);
router.delete('/:id', validatePromotion, promotionsController.deletePromotion);

module.exports = router;
