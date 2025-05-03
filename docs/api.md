# API Documentation

## Authentication

### Login
- **Endpoint**: `/auth/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "accessToken": "string"
  }
  ```

### Register
- **Endpoint**: `/auth/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "id": "number",
    "username": "string"
  }
  ```

## Calculators

### Calculate
- **Endpoint**: `/calculators`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "operation": "add" | "subtract" | "multiply" | "divide",
    "operands": [number, number]
  }
  ```
- **Response**:
  ```json
  {
    "result": "number"
  }
  ```

## Users

### Create User
- **Endpoint**: `/users`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "id": "number",
    "username": "string"
  }
  ```

### Get All Users
- **Endpoint**: `/users`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "id": "number",
      "username": "string"
    }
  ]
  ```

### Get User by ID
- **Endpoint**: `/users/{id}`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "id": "number",
    "username": "string"
  }
  ```

### Update User
- **Endpoint**: `/users/{id}`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "id": "number",
    "username": "string"
  }
  ```

### Delete User
- **Endpoint**: `/users/{id}`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "message": "string"
  }
  ```
