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
│   │   ├── 17_JulyProject_task1.spec.ts
│   │   ├── 17_July_ProjectTask_OrangeHRM_Webtable.spec.ts
│   │   ├── 252_Webtables_Dynamic_XPath.spec.ts
│   │   ├── 253_Webtable_Dynamic.spec.ts
│   │   ├── 254_Filter_PageLoc.spec.ts
│   │   ├── 255_WebTable_Xpath.spec.ts
│   │   ├── 256_WebTable_Xpath_Pagination.spec.ts
│   │   ├── 257_WebTable_Xpath._Pagination.spec.ts
│   │   └── 258_WebTable_Xpath_Pagination_Fn.spec.ts
│   ├── 08_Web_Select_Frames_Iframe/  # Web select, frames, and iframe handling
│   │   ├── 259_Select.spec.ts
│   │   ├── 260_Custom_DD_Select.spec.ts
│   │   └── 261_Advanced_Select_pro.spec.ts
│   ├── 09_Frame_Iframe/             # Frame and iframe handling
│   │   ├── 262_Iframe.spec.ts
│   │   ├── 263_IframeSet.spec.ts
│   │   └── 264_Iframe_part2.spec.ts
│   ├── 10__Keyboard_Hover_Drag_Drop/ # Keyboard, hover, and drag drop actions
│   │   ├── 22_July_Task.spec.ts
│   │   ├── 265_Keyboard.spec.ts
│   │   ├── 266_SpiceJet_Hover.spec.ts
│   │   ├── 267_Drag_Drop.spec.ts
│   │   ├── 268_Advance_Drag_Drop.spec.ts
│   │   ├── 269_Context_Munu.spec.ts
│   │   └── learning.md
│   ├── 11_JS_Alerts/                 # JavaScript alert handling
│   │   └── 270_JS_Alert.spec.ts
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
- Web table pagination with page navigation controls
- Filtering web table data by page locator
- OrangeHRM web table project task
- XPath-based pagination functions for large datasets

### 08 - Web Select, Frames & Iframe
- HTML `<select>` element handling with Playwright
- Custom dropdown select implementations
- Advanced select interaction patterns
- Frame and iframe navigation and element interaction

### 09 - Frames & Iframe
- Working with iframe elements
- Nested iframe handling
- Frame set navigation
- Accessing elements inside iframes

### 10 - Keyboard, Hover & Drag Drop
- Keyboard actions (press, type, key down/up)
- Modifier keys (Ctrl, Shift, Alt combinations)
- Mouse actions (click, dblclick, right-click, mouse down/up)
- Mouse move and scroll operations
- Drag and drop with dragTo and manual mouse events
- Hover actions for dropdown menus
- Context menu interactions
- Learning guide with examples and quick reference

### 11 - JS Alerts
- Handling JavaScript alert, confirm, and prompt dialogs
- Using `page.once('dialog', ...)` to intercept dialogs
- Accepting and dismissing dialogs
- Reading dialog type and message
- Sending input text to JS prompts

## Reporters

This project uses multiple reporters configured in `playwright.config.ts`:

- **Line reporter** - Real-time console output during test execution
- **Allure reporter** - Generates Allure HTML reports for detailed test analysis
- **Custom TTA Reporter** - Custom HTML report with steps, screenshots, videos, and trace support (generates reports in `tta-report/` directory)
