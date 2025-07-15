# 🔍 Test Framework Comparison: Cypress vs Playwright vs WebdriverIO

This project compares three widely used JavaScript-based end-to-end (E2E) test automation frameworks:

- Cypress  
- Playwright  
- WebdriverIO  

Each framework is configured to test the same target website: `https://vizja.pl/en/`  
The goal is to evaluate their ease of use, performance, configuration options, and reporting capabilities.

🌐 **View Live Project:**  
🔗 [https://mirgb.github.io/vizja-university-cypress-webdriverio-playwright/](https://mirgb.github.io/vizja-university-cypress-webdriverio-playwright/)

---

## 📁 Project Structure

test-framework-comparison/  
├── `cypress-tests/`        - Cypress tests and configuration  
├── `playwright-tests/`     - Playwright tests and configuration  
├── `webdriverio-tests/`    - WebdriverIO tests and configuration  
├── `package.json`          - Main project runner  
├── `README.md`             - Project documentation  
└── `.gitignore`, `LICENSE` - Standard files  

---

## 🚀 Getting Started

To install all dependencies for every framework, run:

`npm run install:all`

This will install packages in all three subdirectories: `cypress-tests`, `playwright-tests`, and `webdriverio-tests`.

---

## ▶️ Running Tests

You can run tests for each framework independently or all together from the root directory.

- Run Cypress tests:  
  `npm run test:cypress`

- Run Playwright tests (headed mode):  
  `npm run test:playwright`

- Run Playwright tests in CI mode (headless):  
  `npm --prefix ./playwright-tests run test:ci`

- Open Playwright test UI:  
  `npm --prefix ./playwright-tests run ui`

- Run WebdriverIO tests:  
  `npm run test:wdio`

- Run all tests sequentially:  
  `npm run test:all`

---

## 📊 Generating and Collecting Test Reports

Each framework produces HTML reports, which you can generate and gather into the main `docs` folder:

### Cypress (Mochawesome)  
To generate the Cypress report, simply run:  
`npm run report:cypress`

The raw report is generated inside:  
`cypress-tests/cypress/reports/mochawesome/html/`

### Playwright (Built-in HTML reporter)  
After running Playwright tests, open the report with:  
`npm run report:playwright`

Report location:  
`playwright-tests/playwright-report/`

### WebdriverIO (Allure)  
Generate the Allure report:  
`npm run report:wdio`

Report location:  
`webdriverio-tests/allure-report/`

---

### Collect all reports into a single `docs` folder

To clean previous docs and copy fresh reports from all frameworks into the root `docs` directory, run:

`npm run build:reports`

After this, your reports will be available in:

docs/  
├── cypress/  
├── webdriverio/  
└── playwright/

You can open these reports via your browser by opening their respective `index.html` files.

---

## ⚙️ Summary of npm scripts in root `package.json`

- `npm run install:all` — install dependencies for all test projects  
- `npm run test:cypress` — run Cypress tests  
- `npm run report:cypress` — run Cypress tests + generate Mochawesome report  
- `npm run test:playwright` — run Playwright tests (headed)  
- `npm run report:playwright` — open Playwright HTML report  
- `npm run test:wdio` — run WebdriverIO tests  
- `npm run report:wdio` — generate Allure report  
- `npm run test:all` — run all tests sequentially  
- `npm run report:all` — generate reports for all frameworks  
- `npm run build:reports` — clean and copy all reports into `docs/`  

---

## ⚙️ Configuration Summary

All three frameworks are configured to use the same base URL: `https://vizja.pl/en/`  
Browsers used by default:

- Cypress uses Chrome (Electron or full browser)  
- Playwright uses Chromium (can be extended to Firefox or WebKit)  
- WebdriverIO runs tests on Chrome via WebDriver protocol  

Cypress disables retries by default, Playwright enables retries on CI, and WebdriverIO allows retry customization.  
Viewport and animation settings are set for realistic desktop browsing scenarios.

---

## 🧪 Example Test Cases

Each framework includes test cases that interact with the same website and validate similar flows, such as:

- Navigating to a page  
- Checking visibility of elements  
- Interacting with UI components  
- Validating navigation or content  

Test files are located in:

- `cypress-tests/cypress/e2e/`  
- `playwright-tests/tests/`  
- `webdriverio-tests/src/spec/`  

---

## 🧰 Tooling

- Cypress with Mochawesome reports  
- Playwright with built-in reporting and trace viewer  
- WebdriverIO with Allure integration  
- JSConfig files for IDE support  
- Central `package.json` to run or install all frameworks with one command

---

## 📚 Official Documentation

For more details, refer to the official documentation of each framework:

- [Cypress Documentation](https://docs.cypress.io)  
- [Playwright Documentation](https://playwright.dev/docs/intro)  
- [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted/)

---

## 📈 Purpose of This Project

This project is intended for:

- Comparing automation frameworks in a consistent test environment  
- Demonstrating hands-on experience with test tools  
- Educational use and portfolio presentation  
- Recruiter or reviewer evaluation  

---

## 🔧 Ideas for Further Development

- Add support for mobile and tablet viewports  
- Enable multi-browser testing (Firefox, WebKit, etc.)  
- Expand test cases to include forms, user input, and edge cases  
- Integrate with CI/CD pipelines for automated execution  
- Measure test execution performance and resource usage  

---

## 📄 License

⚠️ This project is not open source. All rights reserved.  
For review purposes only. See the [LICENSE](./LICENSE) file for full terms.
