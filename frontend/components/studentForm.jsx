import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStudent, updateStudent } from '../src/api';

const StudentForm = ({ editingStudent, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ studentID: '', studentName: '', course: '' });

  // Update form when editing an existing student
  useEffect(() => {
    if (editingStudent) {
      setFormData({
        studentID: editingStudent.studentID || '',
        studentName: editingStudent.studentName || '',
        course: editingStudent.course || '',
      });
    } else {
      setFormData({ studentID: '', studentName: '', course: '' });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingStudent) {
        await updateStudent(editingStudent._id, formData);
      } else {
        await createStudent(formData);
      }

      setFormData({ studentID: '', studentName: '', course: '' });
      onSave();
    } catch (error) {
      console.error('Error saving student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input type="text" name="studentID" placeholder="Student ID" value={formData.studentID} onChange={handleChange} required disabled={!!editingStudent} />
      <input type="text" name="studentName" placeholder="Student Name" value={formData.studentName} onChange={handleChange} required />
      <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
      <button type="submit">{editingStudent ? 'Update Student' : 'Add Student'}</button>
      {editingStudent && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

//Add PropTypes for type checking
StudentForm.propTypes = {
  editingStudent: PropTypes.shape({
    _id: PropTypes.string,
    studentID: PropTypes.string,
    studentName: PropTypes.string,
    course: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,  // Callback after save
  onCancel: PropTypes.func.isRequired, // Callback to cancel editing
};

export default StudentForm;
