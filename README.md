# Project Overview

[Project Page](https://gila-xchallenge-nhgr.vercel.app/)

[Gila Challenge repo](https://github.com/joaolfr/gilaChallenge)

[Gila Challenge page](https://gila-challenge-9xikimast-joaolfrs-projects.vercel.app/)

This project is a improvement of the original Gilla Challenge repo, adding some better look UI components, componentization and more!

## Technologies Used

- **TypeScript**: Provides static typing to help catch errors early and improve code quality.
- **Vite**: Used as the compiler for React to enable fast development and optimized builds.
- **ESLint**: Configured to enforce consistent code style and improve readability.
- **Axios**: Used for making API requests in a simple and efficient manner.
- **ShadcnUI**: Utilized for enhanced and consistent UI components.
- **Responsivity**: Added to ensure the application works well on various screen sizes.
- **Node Version Management**: Ensured the correct Node.js version is used for the project.

## Setup and Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/joaolfr/gilaXchallenge
   cd gilaXchallenge
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Run the development server**:

   ```sh
   npm run dev
   ```

## Project Structure

- `src/`: Contains the source code.
- `public/`: Contains static assets.
- `.eslintrc.cjs`: ESLint configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `vite.config.ts`: Vite configuration file.
- `api/`: API configuration file using Axios.
- `.nvmrc`: Node version management file to ensure the correct Node.js version.

## Improvements

There are many improvements that could be done for this project, the first in my opinion would be add some tests for UI rendering and
API requests to make sure that everything is in place before a deploy. Also, we could add some pagination for the information listed
in the home screen and some search engine to easier find some specific user id for example.

## Additional Information

- **Code Quality**: ESLint is set up to ensure code quality and consistency across the project.
- **API Requests**: Axios is used for handling all API requests, providing a clean and simple way to interact with external services.
- **Enhanced UI**: ShadcnUI is used to provide a consistent and modern UI experience.
- **Responsivity**: The application is designed to be responsive, ensuring it works well on different devices and screen sizes.
- **Node Version Management**: Ensures the correct Node.js version is used, as specified in the `.nvmrc` file.
