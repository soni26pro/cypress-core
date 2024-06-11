# Cypress Testing

This project contains end-to-end tests written using Cypress.

## Getting Started

To get started with running the Cypress tests, follow the steps below.

### Prerequisites

Make sure you have the following installed:
- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/project-name.git
    ```

2. Navigate to the project directory:

    ```bash
    cd project-name
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Running Tests

### Using Cypress Test Runner

To open the Cypress Test Runner UI:

1. Run the following command:

    ```bash
    npx cypress open
    ```

2. In the Cypress Test Runner UI, click on a test file to run the tests in it.

### Running Tests from Command Line

You can run Cypress tests from the command line using different browsers and in headless mode.

#### Running Tests in Chrome

To run tests in Chrome:

```bash
npx cypress run --browser chrome
```

### Running Tests in Firefox
To run tests in Firefox:

```bash
npx cypress run --browser firefox
```

### Running Tests in Edge
To run tests in Edge:

```bash
npx cypress run --browser edge
```

### Running Tests in Headless Mode
Headless mode allows you to run the tests without opening a browser window.

#### Running Tests in Headless Chrome
To run tests in headless Chrome:

```bash
npx cypress run --browser chrome --headless
```

### Running Tests in Headless Firefox
To run tests in headless Firefox:

```bash
npx cypress run --browser firefox --headless
```

### Running Specific Tests
You can specify a particular test file to run by providing the path to the test file:

```bash
npx cypress run --spec "cypress/integration/web/my_test_spec.js"
```