import React from "react";
import { Button } from "@mui/material";

const DialogBox = ({ formData, handleInputChange, handleSubmit, setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl text-center mb-4">Enter Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-sm">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="designation" className="block text-sm">Designation:</label>
            <select
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              required
            >
              <option value="">Select Designation</option>
              <option value="HR">HR</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Manager">Manager</option>
              <option value="CEO">CEO</option>
            </select>
          </div>

          <div className="flex justify-between">
            <Button variant="contained" color="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogBox;
