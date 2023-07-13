# BMO - Study Application

BMO is an interactive study application that helps you improve your knowledge through quizzes. With BMO, you can create custom quizzes, add questions and answers, and test yourself using different modes. The application offers three main modes: flashcard mode, quiz mode, and write mode, each catering to different learning preferences.

## Features

- **Flashcard Mode:** This mode allows you to flip through flashcards, displaying questions on one side and answers on the other. It's a great way to quickly review and memorize information.

- **Quiz Mode:** In this mode, BMO generates a set of multiple-choice questions based on the questions you provide. The ChatGPT API is used to generate plausible answer choices to enhance the quiz experience.

- **Write Mode:** This mode tests your knowledge by requiring you to type the correct answer instead of selecting it from a list. BMO checks the similarity between your answer and the correct answer to provide feedback on how close you are.

## Technologies Used

BMO is built using the following technologies:

- **Next.js:** BMO is a Next.js application, which provides a powerful framework for building React applications with server-side rendering and other advanced features.

- **TypeScript:** The entire codebase of BMO is written in TypeScript, which adds static typing and improves code maintainability.

- **Prisma:** BMO utilizes Prisma, an open-source database toolkit, to handle database operations and interact with the SQLite database.

- **SQLite:** BMO stores its data in a SQLite database, providing a lightweight and easy-to-use solution for local data storage.

- **NextAuth:** User authentication is implemented using NextAuth, a flexible authentication library for Next.js applications. It provides features like password hashing and secure user sessions.

## Installation

To run BMO locally on your machine, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/bmo.git`
2. Navigate to the project directory: `cd bmo`
3. Start the application: `npm run dev`
6. Access BMO in your browser at `http://localhost:3000`

## Configuration

Before running the application, you need to set up the following environment variables:

- `CHATGPT_API_KEY`: Your API key for the ChatGPT API. You can obtain one by signing up on the ChatGPT website (https://www.chatgpt.com/).

- `DATABASE_URL`: The URL or path to your SQLite database file.

Make sure to create a `.env` file in the project root and set these variables accordingly.

## Contributing

Contributions to BMO are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue on the GitHub repository.

---

Thank you for using BMO! We hope it enhances your studying experience. If you have any questions or need further assistance, please don't hesitate to reach out.
