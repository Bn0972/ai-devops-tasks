# Users API Documentation

## Get Users List
Retrieves a paginated list of users with optional role filtering.

### Endpoint
```
GET /api/users
```

### Query Parameters

| Parameter | Type    | Required | Default | Description                    |
|-----------|---------|----------|---------|--------------------------------|
| page      | integer | No       | 1       | Page number for pagination     |
| limit     | integer | No       | 10      | Results per page (max: 100)    |
| role      | string  | No       | null    | Filter users by role           |

### Sample Request
```bash
# Basic request
curl -X GET "http://api.example.com/api/users"

# With pagination
curl -X GET "http://api.example.com/api/users?page=2&limit=20"

# With role filter
curl -X GET "http://api.example.com/api/users?role=admin"
```

### Sample Response
```json
{
  "data": [
    {
      "id": "123",
      "username": "john_doe",
      "email": "john@example.com",
      "role": "user",
      "createdAt": "2024-01-15T10:30:00Z",
      "lastLogin": "2024-03-19T08:45:00Z"
    },
    {
      "id": "124",
      "username": "jane_smith",
      "email": "jane@example.com",
      "role": "admin",
      "createdAt": "2024-01-16T14:20:00Z",
      "lastLogin": "2024-03-19T09:15:00Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 48,
    "itemsPerPage": 10,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

### Response Fields

#### Data Array
| Field      | Type   | Description                    |
|------------|--------|--------------------------------|
| id         | string | Unique user identifier         |
| username   | string | User's username               |
| email      | string | User's email address          |
| role       | string | User's role in the system     |
| createdAt  | string | Account creation timestamp     |
| lastLogin  | string | Last login timestamp          |

#### Pagination Object
| Field           | Type    | Description                          |
|-----------------|---------|--------------------------------------|
| currentPage     | integer | Current page number                  |
| totalPages      | integer | Total number of pages                |
| totalItems      | integer | Total number of items                |
| itemsPerPage    | integer | Number of items per page             |
| hasNextPage     | boolean | Whether there is a next page         |
| hasPreviousPage | boolean | Whether there is a previous page     |

### Error Responses

#### 400 Bad Request
```json
{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Limit must be between 1 and 100"
  }
}
```

#### 401 Unauthorized
```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Authentication required"
  }
}
```

#### 403 Forbidden
```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Insufficient permissions to access users"
  }
}
```

### Notes
- The API uses UTC timestamps
- Results are sorted by creation date (newest first)
- Role filter is case-insensitive
- Maximum of 100 items per page to prevent performance issues
