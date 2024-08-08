# Code Teacher Javascript

Code Teacher is an interactive web-based application designed to teach JavaScript programming through a series of incremental levels. Each level presents a coding challenge or a conceptual question, providing instant feedback to help users learn and understand JavaScript effectively.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Code Teacher project aims to create an engaging learning environment for beginners to learn JavaScript. Users progress through levels, starting with basic concepts like variables and progressing to more advanced topics such as event handling and asynchronous programming.

## Features

- Interactive code editor with syntax highlighting (powered by Monaco Editor)
- Incremental levels teaching various JavaScript concepts
- Instant feedback on code correctness
- Prevention of copy-pasting to encourage typing and learning
- Linear progression through levels, from basic to advanced topics
- Support for conceptual questions with Yes/No answers

## Project Structure

The project is organized as follows:

```
code-teacher-javascript/
│
├── css/
│   └── styles.css         # Styling for the application
│
├── js/
│   ├── levels.js          # Definitions of levels, including descriptions, code examples, explanations, and tests
│   ├── game.js            # Functions to load levels, run code, and display outputs
│   └── main.js            # Initialization and event listeners
│
├── index.html             # Main HTML file
│
└── README.md              # Project documentation
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Monaco Editor (for code editing)
- DOMParser (for testing HTML in levels)

## Getting Started

To get started with Code Teacher, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/code-teacher.git
    cd code-teacher
    ```

2. **Open `index.html` in your preferred web browser:**

    ```bash
    open index.html
    ```

## Usage

1. **Start the Game:**
   When the page loads, the game automatically starts from the first level.

2. **Navigate Through Levels:**
   Each level presents a coding challenge or a conceptual question. Read the description and the code example provided.

3. **Type Your Code:**
   Type your code in the editor. The editor will provide syntax highlighting and basic code editing functionalities.

4. **Run Your Code:**
   Click the "Run Code" button to check your solution. You will receive instant feedback on whether your solution is correct.

5. **Progress to the Next Level:**
   If your solution is correct, the game will automatically move to the next level. If not, try again until you get it right.

## Contributing

We welcome contributions to improve Code Teacher! To contribute, follow these steps:

1. **Fork the repository:**

    ```bash
    git fork https://github.com/iagolirapasssos/code-teacher-javascript.git
    ```

2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes and commit them:**

    ```bash
    git commit -m "Add your feature"
    ```

4. **Push your changes to your fork:**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Create a pull request:**

    Go to the original repository on GitHub and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy coding and learning! If you have any questions or feedback, feel free to reach out.