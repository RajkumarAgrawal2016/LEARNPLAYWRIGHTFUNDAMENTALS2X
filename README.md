# Learn Playwright Fundamentals 2X

This project contains Playwright test automation examples and exercises covering Playwright fundamentals.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/01_Basics/229_Basic_Test.spec.ts
```

Run tests with a specific browser:

```bash
npx playwright test --project=chromium
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run in debug mode:

```bash
npx playwright test --debug
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

View the test report:

```bash
npx playwright show-report
```

## Project Structure

```
├── tests/
│   ├── 01_Basics/              # Basic Playwright test examples
│   │   ├── 229_Basic_Test.spec.ts
│   │   └── 230_Test_Annotation.spec.ts
│   ├── 02_First_tests/         # First Playwright test patterns
│   │   ├── 06_July_Task.spec.ts
│   │   ├── 231_First_Running.spec.ts
│   │   ├── 232_BCP.spec.ts
│   │   ├── 233_BCP_MultipleContext.spec.ts
│   │   ├── 234_BCP_Multiple_Pages.spec.ts
│   │   ├── 235_Test_Interface_PW.spec.ts
│   │   ├── 236_BCP_TEST_PW.spec.ts
│   │   └── 237_BCP_Test_Options.spec.ts
│   ├── 03_Locators_Commands/   # Locators and navigation commands
│   │   ├── 10_July_Task.spec.ts
│   │   ├── 238_LS.spec.ts
│   │   ├── 239_Project_VWO_Login.spec.ts
│   │   ├── 240_Xpath.spec.ts
│   │   ├── 241_Project03_Signup_VWO.spec.ts
│   │   ├── 242_Project3_Signup_VWO.spec.ts
│   │   ├── 243_PW_Command.spec.ts
│   │   ├── 244_Referer_PW.spec.ts
│   │   ├── 245_GetByRole_PW.spec.ts
│   │   ├── 246_Press_Seq_PW.spec.ts
│   │   └── Xpath_TTA.pdf
│   ├── 04_Session_Storage/     # Session storage and authentication
│   │   ├── 247_SessionStorage.spec.ts
│   │   ├── 248_TestVWODashboard.spec.ts
│   │   └── 248_TestVWODashboard_NoCustomReport.spec.ts
│   ├── 05_Allure_Reporting/    # Allure reporting examples
│   │   └── 248_TestVWODashboard.spec.ts
│   ├── 06_Multiple_Element/    # Handling multiple elements
│   │   ├── 250_Multi_Element.spec.ts
│   │   └── 251_Multi_Element_Direct.spec.ts
│   ├── 07_WebTables/           # Web table handling
│   │   ├── 252_Webtable_Dynamic.spec.ts
│   │   └── 252_Webtables_Dynamic_XPath.spec.ts
│   ├── example.spec.ts
│   ├── Template.spec.ts
│   └── RunningTestCommand
├── utils/
│   └── CustomReporter.ts       # Custom TTA HTML reporter
├── playwright.config.ts        # Playwright configuration
├── package.json                # Project dependencies
└── .gitignore                  # Git ignore rules
```

## Topics Covered

### 01 - Basics
- Writing your first Playwright test
- Test annotations and configuration

### 02 - First Tests
- Running and verifying tests
- Browser Context and Page (BCP) concepts
- Multiple contexts and pages
- Playwright test interface
- Test options and configuration

### 03 - Locators & Commands
- Navigation commands (goBack, goForward, referer)
- Locator strategies (ID, CSS, XPath, getByRole)
- Lazy evaluation and auto-wait concepts
- waitUntil options (commit, domcontentloaded, load, networkidle)
- pressSequentially for typing simulation
- VWO login test with error validation
- VWO signup validation with XPath and getByRole
- Katalon CURA Healthcare demo task

### 04 - Session Storage
- Saving and reusing browser session storage
- Authentication state persistence with storageState
- VWO dashboard and settings tests with saved sessions
- VWO dashboard test without custom reporter

### 05 - Allure Reporting
- Allure report integration with Playwright
- Generating and viewing Allure reports
- Custom TTA HTML reporter for enhanced test reporting

### 06 - Multiple Elements
- Handling multiple elements with `all()` and `allInnerTexts()`
- Looping through elements and filtering by text
- Getting attributes from multiple elements
- Using `getByTestId` for direct element selection

### 07 - Web Tables
- Dynamic web table data extraction with row/column iteration
- XPath-based dynamic locator construction for tables
- Finding specific cell values in web tables
- Using `following-sibling` XPath for related data lookup

## Reporters

This project uses multiple reporters configured in `playwright.config.ts`:

- **Line reporter** - Real-time console output during test execution
- **Allure reporter** - Generates Allure HTML reports for detailed test analysis
- **Custom TTA Reporter** - Custom HTML report with steps, screenshots, videos, and trace support (generates reports in `tta-report/` directory)
