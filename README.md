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

You can run each framework independently or run all tests sequentially from the root project.

To run Cypress tests:

`npm run test:cypress`

To run Playwright tests (headed mode):

`npm run test:playwright`

To run Playwright tests in CI mode (headless):

`npm run test:playwright:ci`

To open Playwright test UI:

`npm run test:playwright:ui`

To run WebdriverIO tests:

`npm run test:wdio`

To run all tests one after another:

`npm run test:all`

---

## 📊 Generating Test Reports

Each framework supports generating readable HTML test reports.

**Cypress (Mochawesome)**  
- To merge reports (if needed):  
  `npm run report:cypress:merge`  
- To generate the report:  
  `npm run report:cypress:generate`  
- To run both steps together:  
  `npm run report:cypress`  

Report will be available at:  
`cypress-tests/cypress/reports/mochawesome/html/report.html`

---

**Playwright (built-in HTML reporter)**  
- To open the report after running tests:  
  `npm run report:playwright`  

Report is located at:  
`playwright-tests/playwright-report/`

---

**WebdriverIO (Allure)**  
- To generate the Allure report:  
  `npm run report:wdio:generate`  
- To open the generated report:  
  `npm run report:wdio:open`  
- To run tests and generate the report in one step:  
  `npm run report:wdio`  

Report will be available at:  
`webdriverio-tests/allure-report/index.html`

---

**All Reports at Once**  
To run tests and generate reports for all frameworks:  
`npm run report:all`

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
