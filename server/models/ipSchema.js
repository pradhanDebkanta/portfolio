import mongoose from 'mongoose';
const { Schema } = mongoose;

const ipSchema = new Schema({
    ip: {
        type: String,
        required: [true, 'ip address is required.'],
        unique: true,
    },
    hitted: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

export default mongoose.models.ip_address || mongoose.model('ip_address', ipSchema);