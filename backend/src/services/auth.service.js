const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.register = async ({ email, password, firstName, lastName }) => {
    if (!email || !password || !firstName || !lastName){
        throw new Error("All fields are required!");
    }

    const existingUser = User.findOne({ email });

    if (existingUser) {
        throw new Error("Email already registered.");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        email,
        password: hashedPassword,
        firstName,
        lastName
    });

    return {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    };
}