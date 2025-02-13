import { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../src/api';
import Proptypes from "prop-types";

const StudentList = ({ onEdit }) => {
  const [students, setStudents] = useState([]);

  // Fetch students when the component mounts
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        fetchStudents(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul className="student-list">
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          students.map((student) => (
            <li key={student._id} className="student-item">
              <span>{student.studentID} - {student.studentName} ({student.course})</span>
              <button onClick={() => onEdit(student)}>Edit</button>
              <button onClick={() => handleDelete(student._id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

StudentList.propTypes = {
    onEdit: Proptypes.func.isRequired,
}

export default StudentList;
