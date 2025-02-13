import axios from 'axios';

// Use Vite's environment variable for flexibility
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Create a reusable Axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET - Fetch all students
export const getStudents = async () => {
  try {
    const response = await apiClient.get('/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// POST - Create a new student
export const createStudent = async (studentData) => {
  try {
    const response = await apiClient.post('/student', studentData);
    return response.data;
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};

// PUT - Update a student by ID
export const updateStudent = async (id, updatedData) => {
  try {
    const response = await apiClient.put(`/student/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating student with ID ${id}:`, error);
    throw error;
  }
};

// DELETE - Remove a student by ID
export const deleteStudent = async (id) => {
  try {
    const response = await apiClient.delete(`/student/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting student with ID ${id}:`, error);
    throw error;
  }
};
