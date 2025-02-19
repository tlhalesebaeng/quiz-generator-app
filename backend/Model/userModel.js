const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A user must have a first name'],
    },
    lastName: {
        type: String,
        required: [true, 'A user must have a last name'],
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    username: {
        type: String,
        required: [true, 'A user must have a username'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (val) {
                return val === this.password;
            },
            message: 'Passwords do not match',
        },
    },
});

userSchema.pre('save', async function (next) {
    //only run this if the password was changed
    if (!this.isModified('password')) return next();

    //Hash the password
    this.password = await bcrypt.hash(this.password, 12);

    //Delete the confirm password field
    this.passwordConfirm = undefined;

    //call the next middleware
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
