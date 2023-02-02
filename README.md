# Web e2e tests applications
_____

## Table of Contents
- [Description](#description)
- [Structure](#structure)
- [Composition](#composition)
- [Configuration](#configuration)
- [Usage](#usage)
- [Running setup](#running-setup)
- [Test structure](#test-structure)
- [Reports](#reports)

### Description
Single repository for tests automation of the CreditOnline project
* [tests](https://git.creditonline.eu/CreditOnline/tests) `repository - e2e tests`

### Structure
```console
├───allure-report
│	└───*.html,*.css,*.js,*.json,*.csv
├───allure-results
│	└───*.xml,*.json,*.png
├───config
│	└───*.config.js
├───environments
│	└───*.json,*.template
├───helper
├───node_modules
├───resources
│   └───upload
└───test
    ├───pages
    └───specs
        └───*
- .gitignore
- LICENSE
- package.json
- package-lock.json
- readme.md
```
- "allure-report" amd "allure-results" it's folder contains results and reports of our tests runs
- "config" folder contains configurations files to our framework
- "environments" folder contains variable environments to our framework
- "helper" folder contains javascript files with help functions it helps to test our project
- "node_modules" folder contains node.js modules needed to run tests
- "resources" folder contains files that are needed to test some of the project's functions
- "test" folder contains folders "pages" and "spec" in which are located: in "pages" there are pageobject files in which all the repeated testing functions are placed, in "spec" there are structured tests themselves
- ".gitignore" a file containing the names of files and folders that are excluded from uploading to github
- "LICENSE" a file containing text of license of project
- "package.json" the file contains all the basic data for the project, as well as the dependencies necessary to run the project and the test run commands
- "package-lock.json" the file contains fixed project dependencies for their quick installation.
- "readme.md" the file contains a description and brief documentation of the project

### Composition
* [webdriver.io](https://webdriver.io/docs/gettingstarted) `WebdriverIo`
* [chai](https://www.chaijs.com/guide/) `Chai`
* [mocha](https://mochajs.org/#getting-started) `Mocha`
* [allure-report](https://docs.qameta.io/allure/) `allure-report`
* [cross-env](https://www.npmjs.com/package/cross-env) `cross-env`
* [mysql2](https://www.npmjs.com/package/mysql2) `mysql`
* [path](https://www.npmjs.com/package/path) `path`
* [shortid](https://www.npmjs.com/package/shortid) `shortid`

In the "package.json" you see devDependencies that are directly related to our WebdriverIO test framework,
all have the @wdio prefix, in particular:

- "cli" - it's console line interface
- "local-runner" - it's a runner of tests
- "mocha-framework" - it is a framework for code testing
- "spec-reporter" - WebdriverIO Plugin for BOM Style Reporting
- "allure-reporter" - WebdriverIO reporter plugin for generating Allure test reports

And you see dependensi with prefix @types, in particular:

- "types/chai","types/mocha" - WebdriverIO types plugin for creating validations and testing
```console
"devDependencies": {
    "@types/chai": "*",
    "@types/mocha": "*",
    "@wdio/allure-reporter": "*",
    "@wdio/cli": "*",
    "@wdio/local-runner": "*",
    "@wdio/mocha-framework": "*",
    "@wdio/spec-reporter": "*"
  }
```
In the "package.json" you see dependencies that are needed to help create tests, in particular:

- "allure-commandline" - is a tool to generate Allure report from test results.
- "chai" - is a BDD / TDD assertion library that can be delightfully paired with any javascript testing framework.
- "cross-env" - run scripts that set and use environment variables across platforms
- "mysql2" - MySQL client for Node.js with focus on performance
- "path" - module for defining paths
- "shortid" - short non-sequential url-friendly unique id generator

```console
"dependencies": {
    "allure-commandline": "*",
    "chai": "*",
    "cross-env": "*",
    "mysql2": "*",
    "path": "*",
    "shortid": "*"
  }
```

to update all modules to last version you can use command:
```console
 npm i -g npm-check-updates && ncu -u && npm i
```

### Configuration
Config files contain settings to run tests with different parameters and settings in different browsers.
[Link](https://webdriver.io/docs/configurationfile/) to description config file.
If need to run tests in Chrome, you must use the config in the name of which the word chrome is present, similar to Firefox and Edge.
If you need a hidden mode without showing the browser, you must use a config containing the word headless.
You can set up a common config file for the entire project and separately set up other configs for firefox or for chrome,
the settings in additional configs override the settings in the main config, if there are any, or supplement them.
In the upper link, you can see template how to set up a config file

All test use config file, example you want to run tests in Chrome browser need use in cli
```console
./node_modules/.bin/wdio config/wdio.chrome.conf.js
```

### Usage
Before using the framework, you need to install a [node.js](https://nodejs.org/en/) version of at least 14
and install all the dependencies that are necessary for the full operation of the node.js.

>**WARNING**: Use only LTS version

Also, to create and support allure reports, we need to install [allure-report](https://docs.qameta.io/allure/#_installing_a_commandline) and [Java SE Development Kit](https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html)

Check allure and Java is installed
```console
allure --version
```
```console
java --version
```

Download the project from the [repository](https://git.creditonline.eu/CreditOnline/tests) and open the project folder in the console
and run command "npm install" in console. Wait until all modules are installed.

```console
npm install
```
After that we can run our tests, example of a simple login page test.

```console
npm run simplyTest
```

### Running setup

Scripts reduce the need for tools, hence reducing the number of configuration files
and other things that need to be kept track of. They are very versatile and also allow you to
automate many common tasks. Scripts that can be run to automate tasks in a project.

- "test" - a simple example that shows how 1 test works is used as an example.
- "test:with:parameter" - an example of running tests with passing parameters such as "MODE" "USER_NAME" "USER_PASS" with further use in tests
- "test:chrome:headless:ui" - this script runs tests in headless mode (without displaying the browser) is used to run on CI
- "test:chrome:ui" - this script runs tests with browser launch and display
- "allure:clean" - this script deletes recursively folders with reports and results in allure-report
- "allure:history" - this script copies run history and trend files for subsequent report generation in allure-report
- "allure:serve" - this script starts the allure-report virtual server and generates a report in a temporary directory and opens the report page in the browser
- "allure:generate" - this script generates an allure report for later viewing it in the browser or for deploying it to the gitlab page
- "config" - this script, depending on the setting of the $TESTS_ENV variable, the script copies the environment settings for the subsequent launch of tests
- "clean:node" - this script clears the folder with node_modules and also clears the npm cache and reinstall all modules specified in package.json dependencies

```console
"scripts": {
    "test": "cross-env TESTS_ENV=ui npm run config && ./node_modules/.bin/wdio config/wdio.chrome.conf.js --spec test/specs/Login.spec.js",
    "test:with:parameter": "export MODE=Aught0 USER_NAME='email@gmail.com' USER_PASS='Password!' && cross-env TESTS_ENV=sp_pl npm run config && ./node_modules/.bin/wdio config/wdio.chrome.conf.js",
    "test:chrome:headless:ui": "cross-env TESTS_ENV=ui npm run config && ./node_modules/.bin/wdio config/wdio.chrome.headless.conf.js",
    "test:chrome:ui": "cross-env TESTS_ENV=ui npm run config && ./node_modules/.bin/wdio config/wdio.chrome.conf.js",
    "allure:clean": "rm -rf allure-results allure-report",
    "allure:history": "cp -R allure-report/history allure-results",
    "allure:serve": "npx allure serve allure-results",
    "allure:generate": "npx allure generate allure-results --clean",
    "config": "sh -ac 'if test \"$TESTS_ENV\"; then cp environments/env.${TESTS_ENV}.json.template environments/env.json; fi'",
    "clean:node": "npm cache clean --force && rm -rf node_modules && rm ./package-lock.json && npm install"
  }
```

Let's take a closer look at what the test launch command consists of.
```console
"test:chrome:headless:ui": "cross-env TESTS_ENV=ui npm run config && ./node_modules/.bin/wdio config/wdio.chrome.headless.conf.js
```
- "test:chrome:headless:ui" - This is the short name of the command (alias) run (npm run + command name)
- "cross-env TESTS_ENV=ui" - Environment variables are special variables that are defined by the operating system itself. These variables are used by programs during their execution. Such variables can be set both by the system itself and by the user.
- "npm run config" - Apply environment settings for the current run
- "./node_modules/.bin/wdio" - the path to the runner of our framework
- "config/wdio.chrome.headless.conf.js" - relative path to configuration file to run tests

You can also add a specific folder or test file to run by specifying the path to it
```console
--spec test/specs/Login.spec.js
```

### Test structure

This description is called a specification (or, as they say in everyday life, "spec") and looks like this:

```console
describe("pow", function() {
  it("возводит в n-ю степень", function() {
    assert.equal(pow(2, 3), 8);
  });
});
```

The specification has three main building blocks, which you can see in the example above:

```console
describe(название, function() { ... })
```
Specifies what exactly we are describing, used to group it blocks. In this case, we are describing a function, "describe" can be nested.
```console
it(название, function() { ... })
```
The name of the "it" block describes in human language what the function should do, followed by a test that checks this.
```console
assert.equal(value1, value2)
```
The code inside "it", if the implementation is correct, should run without errors.
Various functions like assert.* are used to check if a function does what it is supposed to do. So far,
we are only interested in one of them - assert.equal, which compares its first argument with the second
and throws an error if they are not equal.

<details>
<summary>More detailed information about the test and its structure in TestCase ...</summary>
<h3> What does a test look like what is a test case</h3>

Let's first look at how the documentation for the test case looks like. To begin with, I will give an example of a standard test case for a general understanding of how the test will pass

![testCase](https://i.imgur.com/ViYTYse.png)

<h4>Standard Fields of a Sample Test Case</h4>

There are certain standard fields that need to be considered while preparing a Test case.

<b><i>Test case ID:</b></i> Unique ID is required for each test case. Follow some conventions to indicate the types of the test. For Example, ‘TC_UI_1’ indicating ‘user interface test case #1’.

<b><i>Test priority (Low/Medium/High):</b></i> This is very useful during test execution. Test priorities for business rules and functional test cases can be medium or higher, whereas minor user interface cases can be of a low priority. Testing priorities should always be set by the reviewer.

<b><i>Module Name:</b></i> Mention the name of the main module or the sub-module.

<b><i>Test Designed By:</b></i> Name of the Tester.

<b><i>Test Designed Date:</b></i> Date when it was written.

<b><i>Test Executed By:</b></i> Name of the Tester who executed this test. To be filled only after test execution.

<b><i>Test Execution Date:</b></i> Date when the test was executed.

<b><i>Test Title/Name:</b></i> Test case title. For example, verify the login page with a valid username and password.

<b><i>Test Summary/Description:</b></i> Describe the test objective in brief.

<b><i>Pre-conditions:</b></i> Any prerequisite that must be fulfilled before the execution of this test case. List all the pre-conditions in order to execute this test case successfully.

<b><i>Dependencies:</b></i> Mention any dependencies on other test cases or test requirements.

<b><i>Test Steps:</b></i> List all the test execution steps in detail. Write test steps in the order in which they should be executed. Make sure to provide as many details as you can.

<b><i>Test Data:</b></i> Use of test data as an input for this test case. You can provide different data sets with exact values to be used as an input.

<b><i>Expected Result:</b></i>  What should be the system output after test execution? Describe the expected result in detail including the message/error that should be displayed on the screen.

<b><i>Post-condition:</b></i> What should be the state of the system after executing this test case?

<b><i>Actual result:</b></i> The actual test result should be filled after test execution. Describe the system behavior after test execution.

<b><i>Status (Pass/Fail):</b></i> If the actual result is not as per the expected result, then mark this test as failed. Otherwise, update it as passed.

<b><i>Notes/Comments/Questions:</b></i> If there are any special conditions to support the above fields, which can’t be described above or if there are any questions related to expected or actual results then mention them here.

<h3>Here is a description of the login test case with data, now we will describe the same case in our autotests.</h3>

<details><summary>below test code</summary>

```javascript
const helper = require('../../helper/helper');
const brokenImages = require('../pages/BrokenImages.page');
const {expect} = require('chai');

const envURLs = helper.parseJsonFile('./environments/env.json');
const h3TitleTex = "Broken Images";
const h3Title = "h3";

//#region //Preparation
before('land to main url',async () => {
  await browser.url(envURLs.LOG_IN+"broken_images");
});
//#endregion
describe('Verify broken images',()=>{
  it('Verify Title', async ()=>{
    await expect(await brokenImages.isTitleDistpayed(h3Title)).true;
    await expect(await brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
});


```
</details>

At the beginning of the test file, we have imported dependencies and object pages that help us produce tests.

```console
const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const {expect} = require('chai');
```
More about these lines, here we import data from the JASON file, one of them is "env.json" which contains the main settings for launching and they can change on demand, as well as "accounts.json" which contains data for the test, namely for our login test.

```console
const envURLs = helper.parseJsonFile('./environments/env.json');
const accounts = helper.parseJsonFile('./environments/accounts.json');
```

After the imported dependencies, there are selector constants (moved to the file header for more convenient test maintenance) and environment variables, for example
<b>process.env.USER_NAME</b> username it is passed in the command line when running the test <b>export USER_NAME='sample @ email.eu'</b>

```console
const h3TitleTex = "Broken Images";
const h3Title = "h3";
```
Before the test, the name speaks for itself, this code prepares our instance for the test (in our case, it goes to the login page). The block consists of a function named <b>before</b> (executed before all tests, there is also beforeEach , it will be executed
before each "it") followed by a title that contains a brief description of the action, and inside curly braces the action itself.

```console
//#region //Preparation
before('land to main url',async () => {
  await browser.url(envURLs.LOG_IN+"broken_images");
});
//#endregion
```
Next comes the "describe" block, its name sounds like a description, this block combines several tests, the title gives a short description of what unites this block and also these blocks can be nested one into another, these blocks can also have inside themselves blocks of such a type as "before", "after" and the like. Also, at the top of this block, we can place a function that applies only to this block for code refactoring and testing convenience.

The first descriptor block checks the default data from the page - this is either visible input fields, links and buttons, etc.

```console
describe('Verify broken images',()=>{
  it('Verify Title', async ()=>{
    await expect(await brokenImages.isTitleDistpayed(h3Title)).true;
    await expect(await brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
});
```
The following are two "it" blocks, these are our tests. Let's take a look at them.

The title of the first block contains a description of what this block will test. Steps, stories and futures can also be added to the allure report.

in our first test, we combined the test of two login fields in the login form, this is the username and password field
since we are using a function that checks the visibility of the field and its content , the function is passed the name of the field , its selector, and the text of the field to be checked

The second "it" block checks the box part for visibility and whether it is checked.
In our example the first line checks the checkbox is visible and expects "true" to return the test if returned "true" we had passed the test.
The second line checks if the checkbox is checked expected "false" respectively the test returns "false" and expected passed the test.

```console
  it('Verify Title', async ()=>{
    await expect(await brokenImages.isTitleDistpayed(h3Title)).true;
    await expect(await brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
```

Let's analyze the functional test for login without a password in our case. We login on the login page and check whether the warning message about the absence of a password matches.
Шn our case, there are two response options, depending on the site configuration, we check for the text contained in the message and check it accordingly with the site configuration.
```console
     it('Login without password', async () => {
        await logInPage.addFeatureStoryAllure("01_Login page","Login page - login with credentials");
        await loginToPortal("testUserWOP", "");
        if(await logInPage.getWarnMessageText() == "Log in password is not specified"){
            AllureReporter.addStep(`- login without password check warning message is correct`);
            await expect(await logInPage.getWarnMessageText()).contain("Log in password is not specified");
        }else if(await logInPage.getWarnMessageText() == "Nie podano hasła użytkownika"){
            AllureReporter.addStep(`- login without password check warning message is correct`);
            await expect(await logInPage.getWarnMessageText()).contain(invalidWithoutPasswordMes);
        }
    });
```
</details>

### Reports

**Why do we need reports at all?**

In what cases you may need to store a test report:

- assessing the current quality of the project based on test coverage and getting answers to the questions: Is testing completed? Is the product ready for release? How fast does development converge to release?
- obtaining statistics on the defect reproduction frequency;
- evaluating the effectiveness of tests (how useful is the test and does it find defects?);
- data exchange between teams, if the roles in the team are separated (for example, developers and testers);
- stability of tests and functionality in the product (PASS/FAIL rate) over time.

In addition, test data can be used to continuously improve testing itself.
We use the Allure-report, it supports the following formats: JUnit. Extension for Jenkins CI.

**Configuration**

Configure the output directory in your wdio.conf.js file:
```console
exports.config = {
    // ...
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    // ...
}
```
- "outputDir" defaults to ./allure-results. After a test run is complete, you will find that this directory has been populated with an .xml file for each spec, plus a number of .txt and .png files and other attachments.
- "disableWebdriverStepsReporting" - optional parameter(false by default), in order to log only custom steps to the reporter.
- "issueLinkTemplate" - optional parameter, in order to specify the issue link pattern. Reporter will replace {} placeholder with value specified in addIssue(value) call parameter. Example https: //example.org/issue/{}
- "tmsLinkTemplate" - optional parameter, in order to specify the tms link pattern. Reporter will replace {} placeholder with value specified in addTestId(value) call parameter. Example https: //example.org/tms/{}
- "disableWebdriverScreenshotsReporting" - optional parameter(false by default), in order to not attach screenshots to the reporter.
- "useCucumberStepReporter" - optional parameter (false by default), set it to true in order to change the report hierarchy when using cucumber. Try it for yourself and see how it looks.
- "disableMochaHooks" - optional parameter (false by default), set it to true in order to not fetch the before/after stacktrace/screenshot/result hooks into the Allure Reporter.
- "addConsoleLogs" - optional parameter(false by default), set to true in order to attach console logs from step to the reporter.

**Supported Allure API**

- addLabel(name, value) - assign a custom label to test
- addFeature(featureName) – assign feature to test
- addStory(storyName) – assign user story to test
- addStep(title, content, name = 'attachment', status) - add step to test.
    - title (String) - name of the step.
    - content (String, optional) - step attachment
    - name (String, optional) - step attachment name, attachment by default.
    - status (String, optional) - step status, passed by default. Must be "failed", "passed" or "broken"

**Usage**

Allure Api can be accessed using:
```console
const allureReporter = require('@wdio/allure-reporter').default
```
Mocha example
```console
describe('Suite', () => {
    it('Case', () => {
        allureReporter.addFeature('Feature')
    })
})
```
**Displaying the report**

The results can be consumed by any of the reporting tools offered by Allure. For example:

***Command-line***

Install the Allure command-line tool, and process the results directory:
```console
allure generate [allure_output_dir] && allure open
```
This will generate a report (by default in ./allure-report), and open it in your browser.


![](https://webdriver.io/assets/images/allure-bb6c9b036b07594235a5aca5aff5ac43.png)
