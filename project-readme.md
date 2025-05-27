# Simple Task API

A RESTful API for task management built with Node.js, Express, and MongoDB.

## Description

Simple Task API provides endpoints for managing tasks with features like:
- CRUD operations for tasks
- Task filtering by status and priority
- Basic user authentication and authorization
- MongoDB for data persistence

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simple-task-api.git
cd simple-task-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/task-api
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
```

## API Endpoints

### Authentication

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "password123"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "password123"
}
```

### Tasks

#### Get All Tasks
```
GET /api/tasks
Authorization: Bearer <token>
Query Parameters:
  - status: filter by status (pending, in-progress, completed)
  - priority: filter by priority (low, medium, high)
  - page: page number (default: 1)
  - limit: items per page (default: 10)
```

#### Get Task by ID
```
GET /api/tasks/:id
Authorization: Bearer <token>
```

#### Create Task
```
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Task title",
  "description": "Task description",
  "priority": "high",
  "status": "pending"
}
```

#### Update Task
```
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated title",
  "status": "in-progress"
}
```

#### Delete Task
```
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Error message",
    "code": "ERROR_CODE"
  }
}
```

## Task Schema

```javascript
{
  title: String,
  description: String,
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed']
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high']
  },
  dueDate: Date,
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  createdAt: Date,
  updatedAt: Date
}
```

## Development

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.