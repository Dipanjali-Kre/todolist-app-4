# React Todo List App

This is a simple Todo List application built with React.js. It allows users to add, delete, and mark tasks as complete. The todo items are persisted in the browser's local storage.

## Features

-   **Add Todo**: Easily add new tasks to your list.
-   **Delete Todo**: Remove tasks you no longer need.
-   **Mark Complete**: Toggle the completion status of tasks.
-   **Persistence**: Your todo list is saved in local storage, so it remains even after closing the browser.

## Technologies Used

-   React.js
-   HTML5
-   CSS3

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

-   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository** (or download the code):

    ```bash
    git clone https://github.com/your-username/todolist-app.git
    cd todolist-app
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

### Running the Application

To start the development server:

```bash
npm start
```

This will open the application in your browser at `http://localhost:3000`.

### Building for Production

To create a production-ready build of the application:

```bash
npm run build
```

This command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure

-   `public/`: Contains the `index.html` file and other static assets.
-   `src/`:
    -   `App.js`: The main application component, managing state and rendering other components.
    -   `index.js`: The entry point of the React application.
    -   `App.css`, `index.css`: Global and main application styles.
    -   `components/`:
        -   `TodoForm.js`: Component for adding new todo items.
        -   `TodoForm.css`: Styles for `TodoForm`.
        -   `TodoItem.js`: Component for displaying a single todo item.
        -   `TodoItem.css`: Styles for `TodoItem`.

## How to Use

1.  Type your task into the input field.
2.  Click the "Add Todo" button or press Enter.
3.  Click the checkbox next to a task to mark it as complete or incomplete.
4.  Click the "Delete" button to remove a task from the list.

Your tasks will be saved automatically and loaded when you revisit the page.
