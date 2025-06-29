# Task Manager API

This is a simple **Express.js** backend for a Task Manager application. It allows users to:

-   Register and login
-   Create, read, update, and delete their own tasks

Each user can only access and manage their own tasks.

## Features

-   User Authentication (Login/Register)
-   JWT-based session management
-   Task CRUD operations
-   MongoDB for data storage

## Getting Started

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/)
-   [MongoDB](https://www.mongodb.com/) (local or cloud MongoDB URI)

### Installation

1. **Install dependencies**

    - Open your terminal on the server and type in

    ```bash
    npm install

    ```

2. **Set up environment variables**

    - In the root directory of the server folder, create a file named .env and add the following line:

    ```bash
      SECRET_KEY=typeanystringhere

    ```

3. **Run the app**

    - Open your terminal on the server and type in

    ```bash
    nodemon server

    ```
