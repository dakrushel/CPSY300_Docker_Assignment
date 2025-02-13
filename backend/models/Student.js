const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentID: { type: String, required: true, unique: true },
    studentName: { type: String, required: true },
    course: { type: String, required: true },
    presentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', StudentSchema);