const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // Authentication fields
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, trim: true },

    // Profile fields
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },

    // Authorization fields
    roles: [{ type: String, enum: ['user', 'admin'], default: 'user' }],

    // Addresses
    addresses: [{
        street: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        state: { type: String, required: true, trim: true },
        zipCode: { type: String, required: true, trim: true },
        country: { type: String, required: true, trim: true }
    }],

    // Timestamps
    createdAt: { type: Date, default: Date.now, immutable: true },
    updatedAt: { type: Date, default: Date.now },
}); 

module.exports = mongoose.model('User', userSchema)