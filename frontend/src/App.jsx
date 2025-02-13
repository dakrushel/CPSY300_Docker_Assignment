import { useEffect, useState } from 'react';
import StudentList from '../components/studentList';
import StudentForm from '../components/studentForm';
import { getStudents } from './api';
import './styles.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch students on component mount
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

  // Handle saving (either create or update)
  const handleSave = () => {
    fetchStudents();  // Refresh list after save
    setEditingStudent(null);  // Exit edit mode
  };

  // Handle edit click
  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  // Handle cancel edit
  const handleCancel = () => {
    setEditingStudent(null);
  };

  return (
    <div className="container">
      <h1>Student Management</h1>

      {/* Student Form */}
      <StudentForm editingStudent={editingStudent} onSave={handleSave} onCancel={handleCancel} />

      {/* Student List */}
      <StudentList onEdit={handleEdit} />
    </div>
  );
};

export default App;
