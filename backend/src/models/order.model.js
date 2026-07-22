const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, required: true},
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: Number
    }],

    totalPrice: { type: Number, required: true },

    shippingAddress: {
        fullName: String,
        street: String,
        city: String,
        country: String,
        postalCode: String
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: false
    }
});