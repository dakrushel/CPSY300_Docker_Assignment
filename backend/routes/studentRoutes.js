const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

//CREATE a new student
router.post('/student', async (req, res) => {
  try {
    const { studentID, studentName, course } = req.body;

    //Validate input; no blank fields
    if (!studentID || !studentName || !course) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    //No duplicate students; studentID must be unique
    const existingStudent = await Student.findOne({ studentID });
    if (existingStudent) {
      return res.status(409).json({ message: 'Student with this ID already exists.' });
    }

    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating student.', error: error.message });
  }
});

//GET all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching students.', error: error.message });
  }
});

//GET student by ID (ID is _id, not studentID)
router.get('/student/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: 'Invalid student ID', error: error.message });
  }
});

//UPDATE student by ID
router.put('/student/:id', async (req, res) => {
  try {
    const { studentName, course } = req.body;

    // Validate input
    if (!studentName || !course) {
      return res.status(400).json({ message: 'Both studentName and course are required.' });
    }

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student updated successfully', updatedStudent });
  } catch (error) {
    res.status(400).json({ message: 'Invalid student ID or update error', error: error.message });
  }
});

//DELETE student by ID
router.delete('/student/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid student ID or deletion error', error: error.message });
  }
});

module.exports = router;
