import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import DialogBox from "./DialogBox";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    age: "",
    dob: "",
    gender: "",
    designation: "",
  });
  const [entries, setEntries] = useState([]);

  // Fetch existing data
  const fetchEntries = () => {
    axios.get("http://localhost:8000/api/list/")
      .then(response => setEntries(response.data))
      .catch(error => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.id) {
      // If formData has an ID, update the existing entry
      axios.put(`http://localhost:8000/api/edit/${formData.id}/`, formData)
        .then(response => {
          fetchEntries();  // Refresh table
          setIsModalOpen(false); // Close modal
          setFormData({ id: null, name: "", age: "", dob: "", gender: "", designation: "" }); // Reset form
        })
        .catch(error => console.error("Error updating data:", error));
    } else {
      // Otherwise, create a new entry
      axios.post("http://localhost:8000/api/add/", formData)
        .then(response => {
          fetchEntries(); // Refresh table
          setIsModalOpen(false); // Close modal
          setFormData({ id: null, name: "", age: "", dob: "", gender: "", designation: "" }); // Reset form
        })
        .catch(error => console.error("Error adding data:", error));
    }
  };

  // Handle edit action
  const handleEdit = (id) => {
    const entryToEdit = entries.find(entry => entry.id === id);
    if (entryToEdit) {
      setFormData({ ...entryToEdit }); // Fill form with existing data
      setIsModalOpen(true);
    }
  };

  // Handle delete action
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}/`)
      .then(() => fetchEntries()) // Refresh table
      .catch(error => console.error("Error deleting data:", error));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen w-screen relative">
      <nav className="bg-gray-800 p-4 text-center text-xl font-bold">
        Securin Assessment
      </nav>

      <div className="flex justify-center mt-6">
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => setIsModalOpen(true)}>
          Add
        </Button>
      </div>

      <div className={`transition-all ${isModalOpen ? "pointer-events-none opacity-50" : "opacity-100"}`}>
        <div className="mt-10 px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg shadow-md">
            <thead>
              <tr className="text-left bg-gray-700 text-white">
                <th className="p-3 text-sm">Name</th>
                <th className="p-3 text-sm">Age</th>
                <th className="p-3 text-sm">DOB</th>
                <th className="p-3 text-sm">Gender</th>
                <th className="p-3 text-sm">Designation</th>
                <th className="p-3 text-sm text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-sm text-gray-400">
                    No results found
                  </td>
                </tr>
              ) : (
                entries.map((entry) => (
                  <tr key={entry.id} className="border-t border-gray-700 hover:bg-gray-600 transition">
                    <td className="p-3">{entry.name}</td>
                    <td className="p-3">{entry.age}</td>
                    <td className="p-3">{entry.dob}</td>
                    <td className="p-3">{entry.gender}</td>
                    <td className="p-3">{entry.designation}</td>
                    <td className="p-3 flex justify-center gap-2">
                      <Button variant="contained" color="warning" onClick={() => handleEdit(entry.id)} size="small">
                        <Edit />
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleDelete(entry.id)} size="small">
                        <Delete />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <DialogBox
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Home;
