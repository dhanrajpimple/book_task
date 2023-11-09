# book_task
A simple CRUD application for managing books using MongoDB.

## API Endpoints and Usage

- **Add a New Book:**
  - Endpoint: `/api/book/createbook`
  - Method: `POST`
  - Parameters:
    - `title` (string): Title of the book
    - `author` (string): Author of the book
    - `summary` (string): Summary of the book

- **View All Books:**
  - Endpoint: `/api/book/getallbook`
  - Method: `GET`

- **View Details of a Specific Book:**
  - Endpoint: `/api/book/singlebook`
  - Method: `GET`
  -parameter:
     - `id`

- **Update a Book's Details:**
  - Endpoint: `/api/book/updatebook`
  - Method: `PUT`
  - Parameters (Optional):
  - 
    - `id`
    - `title` (string): New title of the book
    - `author` (string): New author of the book
    - `summary` (string): New summary of the book
 

- **Delete a Book:**
  - Endpoint: `/api/book/deletebook`
  - Method: `DELETE`
   -parameter:
     - `id

## Getting Started

### Prerequisites

- node.js
- npm
- MongoDB (cloud-based)

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/book-management-system.git
   cd book-management-system

   
