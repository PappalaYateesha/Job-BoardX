const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['JobSeeker', 'Employer'],
    default: 'JobSeeker'
  },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company' } // ✅ New field
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
