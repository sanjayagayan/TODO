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
  - [Delete Task](#delete-task)

## 🛡️ Authentication

### Register

**Endpoint:** `POST /api/v1/user/register`

**Example Request**
```json
{
  "username": "username",
  "email": "user@gmail.com",
  "password": "Password"
}
```
**Response:**
```json
{
    "message": "User registered successfully"
}
```


### Login

**Endpoint:** `POST /api/v1/user/login`

**Example Request**
```json
{
    "email": "user@gmail.com",
    "password": "Password"
}
```
**Response**
```json
{
    "message": "User Login successfully!"
}
```

### Get User By ID

**Endpoint:** `POST /api/v1/user/:id`

**Response:**
```json
{
    "id": "userId",
    "username": "exampleUser",
    "email": "user@example.com",
    "createdAt": "2024-07-01T00:00:00.000Z",
    "updatedAt": "2024-07-10T00:00:00.000Z"
}
```

## 🛡️ Task Management

### Create Task

**Endpoint:** `POST /api/v1/add/task`

**Example Request**
```json
{
    "title": "Task Title",
    "description": "Task Description",
    "dueDate": "2024-07-20",
    "status": "pending"
}
```
**Response:**
```json
{
    "message": "Task Added Successfully!",
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

**Endpoint:** `GET /api/v1/get/alltasks`

**Response:**
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

**Endpoint:** `GET /api/v1/get/task/:id`

**Response:**
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

**Endpoint:** `PUT /api/v1/update/task/:id`

**Example Request:**
```json
{
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "dueDate": "2024-07-21",
    "status": "completed"
}
```
**Response:**
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

**Endpoint:** `DELETE /api/v1/delete/task/:id`

**Response**
```json
{
    "message": "Task deleted successfully!"
}
```
