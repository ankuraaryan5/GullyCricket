import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'organizer'],
        default: 'user',
    },
    profileImage: {
        type: String,
        default: '',
    },
    phone: {
        type: String, // ✅ Changed from Number to String
        required: true,
    },
}, { timestamps: true });

// Password validation method
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Hash password before saving to DB
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); // ✅ Important fix to ensure the function proceeds properly
});

const User = mongoose.model('User', userSchema);
export default User;
