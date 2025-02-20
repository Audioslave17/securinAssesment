# Securin Assessment (Anurag Kumar)
[Overview of the Completed Task](https://drive.google.com/file/d/1sPFwdLs5q-dAeuOHEYDOzhF7IO_1mu2x/view?usp=sharing)

## Problem Statement

Keeping an updated directory is crucial for workforce management, but manual record-keeping is time-consuming and error-prone. Organizations need a user-friendly system to efficiently add, update, and remove details while ensuring data persistence.

To address this need, we aim to develop a Full-Stack Employee Directory Management System using React.js for the frontend and Django/FastAPI for the backend, with a database to store employee information.

The system will provide the following functionalities:

-- A data table to display all available employees. If no employees exist, a "No Result Found" message will be shown along with an Add Employee button.

-- A dialog form to add new employees, capturing essential details like Name, Age, Date of Birth, Gender, and Department. Submitting this form will trigger a CREATE API request to store the data in the database.

-- Displaying the list of employees in the data table, with each row containing Edit and Delete actions.

-- Clicking the Edit icon will open a pre-filled dialog where users can modify employee details and submit an UPDATE API request to update the record in the database.

-- Clicking the Delete icon will prompt a confirmation dialog, and upon confirmation, a DELETE API request will remove the employee record from the database.

-- This system will simplify employee data management, reduce manual efforts, and ensure efficient record-keeping with a user-friendly interface.



## Approach

To address this problem, I developed a Full-Stack Employee Directory Management System using React.js, Tailwind CSS, and Material UI for the frontend and Django for the backend.

# Frontend Implementation

-- Built the interface using React.js with functional components and hooks.

-- Designed a Home component to display the employee list and an Add Employee button.

-- Implemented a Dialog Box component that appears on clicking the Add button, containing input fields for Name, Age, Date of Birth, Gender, and Department with appropriate data types.

-- Used Axios to interact with backend APIs for creating, updating, and deleting records.

# Backend Implementation

-- Developed the backend using Django, with a Model named Employee, containing fields for Name, Age, Date of Birth, Gender, and Department.

-- Created views with the following API endpoints:

-- POST API for adding a new record.

-- PUT API for updating existing records.

-- DELETE API for removing records.

-- GET API for retrieving the list of employees.

-- Used Django REST Framework serializers to handle data conversion and migrations to create the database schema.

-- Exposed API endpoints through Django URLs, which were integrated with the frontend via Axios for seamless communication.

This approach ensures an efficient and user-friendly system for managing workforce records while maintaining data persistence.

# Approach 2

There could be another approach to this problem:
A serverless approach which eliminates the need for backend management and scales automatically.

Frontend:

-- React.js with Firebase SDK for authentication and Firestore integration.

-- Uses Firebase Firestore as the NoSQL database for storing employee records.

Backend:

-- Instead of Django, use Firebase Cloud Functions to handle create, update, and delete operations.

-- Firestore triggers can be used for real-time updates.



## Challenge

The issue was ensuring that clicking the Edit button opened the correct employee data by fetching it using the ID and updating it via the PUT API.

Solution:

Store the Employee ID on Edit Click:
When the Edit button is clicked, store the corresponding employee ID in state.

Fetch Employee Data by ID:
Make an API call (GET /employee/{id}) to retrieve the specific employee's details.

Populate the Edit Form:
Use the API response to pre-fill the form fields.

Update Data Using the PUT API:
On form submission, send a PUT request (PUT /employee/{id}) to update the record.



### Input and Output



## Home Page
![Screenshot 2025-02-19 002146](https://github.com/user-attachments/assets/9da731f8-80e2-4fa6-9fdb-7b64557ffe14)
This is the Home page without the addition of any data in the table.



## Dialog Box (On clicking 'Add')
![Screenshot 2025-02-19 002210](https://github.com/user-attachments/assets/6203761d-47e8-4754-ac11-7087cdbda721)

This contains all the input fields with the suitable Data types of each field, and on clicking the submit button it adds the data to the Database and show it on the table.



## After clicking Submit ("POST API")
![Screenshot 2025-02-19 010919](https://github.com/user-attachments/assets/f33e1395-f43d-472c-a53d-590c6f056234)

After filling all the input(Required) fields and clicking on Submit, it will take you to the home page where you can see you input data.

![Screenshot 2025-02-19 010933](https://github.com/user-attachments/assets/9be1ff48-8849-4cb4-9bc7-3329640d9beb)



## How page looks after many submissions ("GET API")
![Screenshot 2025-02-19 011925](https://github.com/user-attachments/assets/1c63b165-a741-49f5-a895-8f96376c68a4)



## On clicking Edit ("PUT API")
![Screenshot 2025-02-19 012105](https://github.com/user-attachments/assets/0d9476c3-5300-4ade-83b4-d7cf4714a55e)

On clicking Edit button of a Employee, it will take you to the dialog box to edit the information.

![Screenshot 2025-02-19 012122](https://github.com/user-attachments/assets/3cd68875-95bc-4b77-9acf-e0af4cbbb796)

After editing and clicking on submit, it will take you to the table with updated Information

![Screenshot 2025-02-19 012134](https://github.com/user-attachments/assets/eb8514f9-c666-4ff1-abbc-554255f161f6)



## On clicking Delete ("DELETE API")
![Screenshot 2025-02-19 012105](https://github.com/user-attachments/assets/c786a425-29f9-4f13-b591-c8127c9c6ffc)
![Screenshot 2025-02-20 230236](https://github.com/user-attachments/assets/6b4a779a-159d-42b6-bf91-5d1264be37cb)
![Screenshot 2025-02-19 012504](https://github.com/user-attachments/assets/e8be419f-5911-4ba8-a841-14cfef9fee20)

On clicking Delete, a alert box will appear and on conferming that alert box the data will be removed from the database.



## This is the database after the Addition and deletion and Editing

![Screenshot 2025-02-19 012836](https://github.com/user-attachments/assets/f18cbec6-7a08-40eb-9148-6daf9b08a55a)

![Screenshot 2025-02-19 012845](https://github.com/user-attachments/assets/6c6e0be2-fb2e-4178-9217-340b54667b8f)

