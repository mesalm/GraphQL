# GraphQL with MongoDB Example

This is a simple example of using **GraphQL** with **MongoDB** to create a basic API. The project demonstrates how to set up an **Apollo Server** to interact with a MongoDB database, manage collections (authors, books, and users), and perform queries.

## Technologies Used
- **Node.js** (Backend)
- **Express** (Web server)
- **Apollo Server** (GraphQL server)
- **MongoDB** (Database)

## Features
- Query and fetch authors, books, and users.
- Use GraphQL to retrieve related data, like books with their authors.
- Supports basic CRUD operations (add, edit, delete) on authors, books, and users.

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/GraphQL.git

    Navigate into the project directory:

cd GraphQL

Install dependencies:

npm install

Set up environment variables:

    Create a .env file in the root directory of the project.
    Add your MongoDB connection URL:
    PORT = 4000
    DB_URL=mongodb://localhost:27017/your-database-name

Start the server:

npm start

Access the GraphQL Playground: Once the server is running, navigate to:

    http://localhost:4000/graphql

    You can now run GraphQL queries in the interactive Playground.

Example Queries

    Fetch all authors:

query {
  authors {
    name
    birth_year
  }
}

Fetch all books with their authors:

query {
  books {
    title
    genre
    author {
      name
    }
  }
}



  

License

This project is licensed under the MIT License.
