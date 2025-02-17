import React, { useState } from "react";
import { Button } from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import DialogBox from "./DialogBox";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
    designation: "",
  });
  const [entries, setEntries] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setIsModalOpen(false);
    setFormData({ name: "", age: "", dob: "", gender: "", designation: "" });
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleEdit = (index) => {
    const entryToEdit = entries[index];
    setFormData(entryToEdit);
    handleDelete(index);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen w-screen relative">
      <nav className="bg-gray-800 p-4 text-center text-xl font-bold">
        Securin Assessment
      </nav>

      {/* Add Button */}
      <div className="flex justify-center mt-6">
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => setIsModalOpen(true)}>
          Add
        </Button>
      </div>

      {/* Background blur when modal is open */}
      <div className={`transition-all ${isModalOpen ? "pointer-events-none opacity-50" : "opacity-100"}`}>
        {/* Responsive Table */}
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
                entries.map((entry, index) => (
                  <tr key={index} className="border-t border-gray-700 hover:bg-gray-600 transition">
                    <td className="p-3">{entry.name}</td>
                    <td className="p-3">{entry.age}</td>
                    <td className="p-3">{entry.dob}</td>
                    <td className="p-3">{entry.gender}</td>
                    <td className="p-3">{entry.designation}</td>
                    <td className="p-3 flex justify-center gap-2">
                      <Button variant="contained" color="warning" onClick={() => handleEdit(index)} size="small">
                        <Edit />
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleDelete(index)} size="small">
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

      {/* Dialog Box */}
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
