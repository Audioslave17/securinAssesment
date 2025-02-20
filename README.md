# Securin Assessment (Anurag Kumar)
[Overview of the Completed Task](https://drive.google.com/file/d/1celKxI5eyWJw5oq4UQ2VR5VADd3UscRJ/view?usp=sharing)

## Description

This is a simple Employee Management web application built using React.js for the frontend and Django for the backend. It allows users to add, edit, delete, and view employees in a structured data table.


## Features

-> Display employees in a table format

-> Show "No Result Found" with an Add Employee button if no employee exists

-> Add new employees via a form in a modal dialog

-> Edit employee details using a pre-populated form in a modal dialog

-> Delete employees with a confirmation prompt

-> API integration using Axios for CRUD operations


## Tech Stack

### FrontEnd

-- React.js

-- Axios (for API calls)

-- Material UI 

-- Tailwind CSS

### Backend

-- Django

-- SQLite



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

![Screenshot 2025-02-19 012504](https://github.com/user-attachments/assets/e8be419f-5911-4ba8-a841-14cfef9fee20)

On clicking Delete the Information of That employee will get deleted from the databse and the table



## This is the database after the Addition and deletion and Editing

![Screenshot 2025-02-19 012836](https://github.com/user-attachments/assets/f18cbec6-7a08-40eb-9148-6daf9b08a55a)

![Screenshot 2025-02-19 012845](https://github.com/user-attachments/assets/6c6e0be2-fb2e-4178-9217-340b54667b8f)

