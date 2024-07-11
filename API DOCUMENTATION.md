# 🛡️ Authentication and Task Management API

Welcome to the Authentication and Task Management API! This API provides endpoints for user authentication (registration and login) and managing tasks. Below is a comprehensive guide on how to use the various endpoints provided by this API.

## 📋 Table of Contents

- [Authentication](#authentication)
  - [Register](#register)
  - [Login](#login)
- [Tasks](#tasks)
  - [Create Task](#create-task)
  - [Get All Tasks](#get-all-tasks)
  - [Get Task by ID](#get-task-by-id)
  - [Update Task](#update-task)
  - [Change Task Status](#change-task-status)
  - [Delete Task](#delete-task)
  - [Search Tasks](#search-tasks)

## 🛡️ Authentication

### Register

**Endpoint:** `POST /api/v1/user/register`

**Example Request:**
```json
{
  "username": "user",
  "email": "user@gmail.com",
  "password": "password"  //Password must be at least 8 characters long, contain at least one number, one uppercase and one lowercase letter. 
}
```
**Response:**
```json
{
    "message": "User registered successfully"
}
```



### Login

**Endpoint:** `POST /api/v1/user/register`

**Example Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
    "token": "JWT Token",
    "user": {
        "id": "userId",
        "username": "exampleUser",
        "email": "user@example.com"
    }
}
```

## Task Management

### Create Task
**Endpoint:** `POST /api/tasks`

**Example Request:**
```json
{
    "title": "Task Title",
    "description": "Task Description",
    "dueDate": "2024-07-20",
    "status": "pending"
}
```
```json
{
    "message": "Task created successfully",
    "task": {
        "id": "taskId",
        "title": "Task Title",
        "description": "Task Description",
        "dueDate": "2024-07-20",
        "status": "pending",
        "userId": "userId"
    }
}
```

### Get All Tasks
**Endpoint:** `GET /api/tasks`

**Response**
```json
[
    {
        "id": "taskId",
        "title": "Task Title",
        "description": "Task Description",
        "dueDate": "2024-07-20",
        "status": "pending",
        "userId": "userId"
    },
    ...
]
```

### Get Task by ID
**Endpoint:** `GET /api/tasks/:id`

**Response**
```json
{
    "id": "taskId",
    "title": "Task Title",
    "description": "Task Description",
    "dueDate": "2024-07-20",
    "status": "pending",
    "userId": "userId"
}
```
### Update Task
**Endpoint:** `PUT /api/tasks/:id`

**Example Request:**
```json
{
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "dueDate": "2024-07-21",
    "status": "completed"
}
```
```json
{
    "message": "Task updated successfully",
    "task": {
        "id": "taskId",
        "title": "Updated Task Title",
        "description": "Updated Task Description",
        "dueDate": "2024-07-21",
        "status": "completed",
        "userId": "userId"
    }
}
```

### Delete Task
**Endpoint:** `DELETE /api/tasks/:id`

**Response**
```json
{
    "message": "Task deleted successfully"
}
```




