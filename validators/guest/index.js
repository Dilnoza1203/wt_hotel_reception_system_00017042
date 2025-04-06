const { body, param } = require('express-validator');
const guest_service = require('../../services/guest')

const addGuestValidation = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name cannot be empty')
            .isLength({ min: 4, max: 255 }).withMessage('Name must be between 4 and 255 characters long'),
        body('phone')
            .notEmpty().withMessage('Contact phone number cannot be empty')
            .matches(/^\+998\d{9}$/).withMessage('Invalid phone number, it must start with +998'),
        body('quantity')
            .notEmpty().withMessage('Guests quantity cannot be 0 or empty')
            .isInt({ min: 0, max: 10 }).withMessage('Guests quantity must be between 1 and 10 whole numbers'),
        body('stay')
            .notEmpty().withMessage('Number of days to stay cannot be 0 or empty')
            .isInt({ min: 0, max: 10 }).withMessage('Number of days to stay must be between 1 and 10 whole numbers'),
        body('datetime')
            .notEmpty().withMessage('Date time cannot be empty')
            .matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)
            .withMessage('Invalid date and time format. Please use "YYYY-MM-DD HH:mm" format'),
    ];
};

const deleteGuestValidation = () => {
    return [
        param('id').custom(async (id) => {
            const exists = await guest_service.getById(id);
            if (!exists) {
                throw new Error('Registered guest not found');
            }
        })
    ];
};

const updateGuestValidation = () => {
    return [
        param('id').custom(async (id) => {
            const exists = await guest_service.getById(id);
            if (!exists) {
                throw new Error('Registered guest not found');
            }
        }),
        body('name')
            .notEmpty().withMessage('Name cannot be empty')
            .isLength({ min: 4, max: 255 }).withMessage('Name must be between 4 and 255 characters long'),
        body('phone')
            .notEmpty().withMessage('Contact phone number cannot be empty')
            .matches(/^\+998\d{9}$/).withMessage('Invalid phone number, it must start with +998'),
        body('quantity')
            .notEmpty().withMessage('Guests quantity cannot be 0 or empty')
            .isInt({ min: 0, max: 10 }).withMessage('Guests quantity must be between 1 and 10 whole numbers'),
        body('stay')
            .notEmpty().withMessage('Number of days to stay cannot be 0 or empty')
            .isInt({ min: 0, max: 10 }).withMessage('Number of days to stay must be between 1 and 10 whole numbers'),
        body('datetime')
            .notEmpty().withMessage('Date time cannot be empty')
            .matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)
            .withMessage('Invalid date and time format. Please use "YYYY-MM-DD HH:mm" format'),
    ];
};

module.exports = {
    addGuestValidation,
    updateGuestValidation,
    deleteGuestValidation
};