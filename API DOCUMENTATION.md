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





