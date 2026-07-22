const authService = require('../controllers/auth.controller.js')

module.exports.register = async (req, res) => {
    try{
        const user = await authService.register(req.body);

        res.status(201).json({
            message: "Registration successful.",
            user
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};