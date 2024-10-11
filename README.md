# TaskWiz

TaskWiz is a modern, animated, and responsive Todo App built with **Vite**, **React.js**, **Tailwind CSS**, **React Redux**, and **Framer Motion**. The app allows users to create and manage tasks, with the ability to store task history using local storage so tasks persist even when the app is revisited.

## Features

- **Add and Delete Tasks**: Easily create and remove tasks with an intuitive interface.
- **Framer Motion Animations**: Smooth animations for task additions and deletions to enhance user experience.
- **Redux State Management**: Global state management for tasks, ensuring seamless performance.
- **Persistent Task Storage**: Tasks are saved in the browser's local storage, so you can revisit the app later and pick up where you left off.
- **Responsive Design**: Fully responsive interface using Tailwind CSS, making the app look great on any device.
- **Tech Stack Icons**: Icons at the bottom of the app display the technologies used to build the project (Tailwind CSS, Redux, and Framer Motion).

## Tech Stack

- **Vite**: Fast build tool for modern web development.
- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Redux**: State management library for managing application state.
- **Framer Motion**: Powerful library for animations in React applications.

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/taskwiz.git
   cd taskwiz
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the app in development mode:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## How to Use

1. **Add a Task**:
   - Enter a task in the input field and click "Add" to create a new task.
   
2. **Delete a Task**:
   - Click the trash icon next to any task to delete it.

3. **Task Persistence**:
   - Your tasks are stored locally in your browser. Even if you refresh or close the app, your tasks will be there when you return.

## Preview

Here's a quick look at the **TaskWiz** app:

![TaskWiz Preview](https://your-image-link.com)

## Technology Icons

At the bottom of the app, you'll find the icons representing the technologies used to build TaskWiz:

- **Tailwind CSS**: Styling and responsive design.
- **Redux**: State management.
- **Framer Motion**: Animations.

## Folder Structure

```bash
├── public/
│   └── index.html      # HTML file
├── src/
│   ├── features/
│   │   └── todoSlice.js # Redux slice for managing todos
│   ├── components/
│   └── App.jsx         # Main application component
│   └── main.jsx        # Entry point for React
│   └── store.js        # Redux store configuration
│   └── index.css       # Global styles (Tailwind CSS)
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Contributing

If you'd like to contribute to **TaskWiz**, feel free to submit a pull request. Whether it's bug fixes, new features, or improvements, all contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy building with **TaskWiz**! 🚀