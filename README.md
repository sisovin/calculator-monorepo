# Calculator Monorepo

A monorepo for a modular and scalable calculator project designed to simplify development and deployment. This repository organizes the calculator functionality into a monorepo structure, making it easier to manage shared code, utilities, and services across multiple packages or applications.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Development](#development)
8. [Contributing](#contributing)
9. [License](#license)

---

## Overview

The **Calculator Monorepo** is a TypeScript-based project that provides a modular approach to building calculator-related applications, libraries, and utilities. This repository leverages a monorepo structure to centralize development, testing, and deployment for all calculator-related components.

### Key Objectives
- Maintainability: Modular structure ensures that each part of the project is self-contained and easy to maintain.
- Scalability: Supports adding new calculator features or modules without disrupting existing functionality.
- Reusability: Shared code and utilities are centralized, reducing redundancy across the project.

---

## Features

- **Modular Design**: Organized into separate packages for core functionality, utilities, and shared components.
- **TypeScript-first**: Ensures type safety and modern JavaScript practices.
- **Cross-platform Compatibility**: Works in browser, Node.js, and other environments.
- **Shell Scripting**: Includes shell scripts for automation and deployment tasks.
- **Comprehensive Testing Suite**: Ensures robustness and reliability of calculator features.

---

## Tech Stack

This project uses the following technologies:

- **Language**: TypeScript (96% of the codebase)
- **Scripting**: Shell (2.5% of the codebase)
- **Other Tools**: For configuration and auxiliary tasks.

---

## Project Structure

The repository is organized into the following structure:

```
calculator-monorepo/
├── packages/
│   ├── core/              # Core calculator logic and operations
│   ├── ui/                # UI components for the calculator (if applicable)
│   ├── api/               # API for calculator as a service
│   ├── shared/            # Shared utilities and libraries
├── scripts/               # Shell scripts for automation
├── tests/                 # End-to-end and integration tests
├── .github/               # GitHub workflows and issue templates
├── docs/                  # Documentation files
├── package.json           # Root package.json for dependency management
└── README.md              # Project documentation
```

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Yarn](https://yarnpkg.com/) (preferred package manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/sisovin/calculator-monorepo.git
   cd calculator-monorepo
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Setup environment variables:
   Create a `.env` file in the root directory and configure it based on the provided `.env.example` file.

---

## Usage

### Running Locally

1. Start the core calculator service:
   ```bash
   cd packages/core
   yarn start
   ```

2. (Optional) Start the API service:
   ```bash
   cd packages/api
   yarn start
   ```

3. (Optional) Start the UI components:
   ```bash
   cd packages/ui
   yarn start
   ```

---

## Development

### Code Formatting

This project uses **Prettier** and **ESLint** for code formatting and linting. Run the following to fix linting issues:
```bash
yarn lint --fix
```

### Tests

To run tests:
```bash
yarn test
```

---

## Contributing

We welcome contributions to the **Calculator Monorepo**! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or support, please contact the repository owner at [sisovin](https://github.com/sisovin).

--- 
