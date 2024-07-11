# Task CRUD Application
![ImageTask](https://github.com/sanjayagayan/TODO/assets/70587308/44511b73-6176-40b0-b6b6-6ae36a77bd63)

## Table of Contents
- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
  - [MVC Pattern](#mvc-pattern)
  - [Monolithic Structure](#monolithic-structure)
- [Design](#design)
  - [Figma Design](#figma-design)
- [Frontend](#frontend)
  - [React.js](#reactjs)
  - [Tailwind CSS](#tailwind-css)
- [Backend](#backend)
  - [Node.js](#nodejs)
  - [Express](#express)
- [Database](#database)
  - [MongoDB](#mongodb)
- [Authentication and Authorization](#authentication-and-authorization)
  - [JWT Tokens](#jwt-tokens)
- [Features](#features)
  - [Task Fields](#task-fields)
  - [Create Task](#create-task)
  - [Update Task](#update-task)
  - [Change Task Status](#change-task-status)
  - [Delete Task](#delete-task)
  - [Search and Filter Tasks](#search-and-filter-tasks)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Conclusion](#conclusion)

## Introduction
This documentation provides an overview of the Task CRUD Application, detailing its features, technology stack, and how to set it up and use it.

## Project Overview
The Task CRUD Application allows multiple users to create, update, change the status of, and delete tasks. It features user authentication and authorization using JWT tokens. The application is designed with a focus on simplicity and efficiency, using the MERN stack (MongoDB, Express, React.js, Node.js) and follows the MVC architectural pattern in a monolithic structure.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT Tokens
- **Design**: Figma

## Architecture

### MVC Pattern
The application follows the Model-View-Controller (MVC) design pattern:
- **Model**: Represents the application's data structure.
- **View**: Represents the UI of the application.
- **Controller**: Handles the logic and input/output of the application.

### Monolithic Structure
The application is built as a monolithic application, where all components are interconnected and managed as a single unit.

## Design

### Figma Design
The application’s UI was designed using Figma, ensuring a user-friendly and intuitive interface.

## Frontend

### React.js
The frontend of the application is built using React.js, a JavaScript library for building user interfaces.

### Tailwind CSS
Tailwind CSS is used for styling the application, providing a utility-first CSS framework.

## Backend

### Node.js
The backend of the application is developed using Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Express
Express is used as the web application framework for Node.js, providing robust features for building web and mobile applications.

## Database

### MongoDB
MongoDB is used as the database for storing user and task data, providing a flexible and scalable NoSQL solution.

## Authentication and Authorization

### JWT Tokens
JWT (JSON Web Token) is used for securing user authentication and authorization. Users must log in to create, update, delete, and change the status of tasks.

## Features

### Task Fields
Tasks have the following fields:
- **Title**
- **Description**
- **Due Date**
- **Status** (pending, completed)

### Create Task
Users can create new tasks by providing task details such as title, description, due date, and status.

### Update Task
Users can update existing tasks with new information, including changing the task details and status.

### Change Task Status
Users can change the status of tasks between 'pending' and 'completed'.

### Delete Task
Users can delete tasks that are no longer needed.

### Search and Filter Tasks
The application includes a search bar that allows users to filter tasks by:
- **Task Title**
- **Due Date**
- **Task Status**

## Setup and Installation
1. Clone the repository.
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables for the database connection and JWT secret.
4. Run the application:
    ```bash
    npm start
    ```

## Usage
1. Register a new user or log in with existing credentials.
2. Create, update, change the status of, search, filter, or delete tasks.

## Conclusion
The Task CRUD Application is a simple yet powerful tool for managing tasks, designed with modern web technologies and following best practices in software development. 🚀
```
