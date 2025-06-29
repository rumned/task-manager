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

1. **Fork the repository**

    Click the **Fork** button on the top right of this repository to create a copy under your GitHub account.

2. **Clone your forked repository using GitHub Desktop**

    - Open [GitHub Desktop](https://desktop.github.com/)
    - Go to `File` > `Clone repository...`
    - In the **"GitHub.com"** tab, select **your forked repository** (e.g., `your-username/task-manager-api`)
    - Choose a **local path** where you want the project saved
    - Click **"Clone"**

3. **Install dependencies**

    - Open your terminal and type in

    ```bash
    npm install

    ```

4. **Set up environment variables**

    - In the root directory of the project, create a file named .env and add the following line:

    ```bash
      SECRET_KEY=your_jwt_secret_key_here

    ```

5. **Run the app**

    - Open your terminal and type in

    ```bash
    nodemon server

    ```
