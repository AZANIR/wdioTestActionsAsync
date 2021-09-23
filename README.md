# e2e-tests WebdriwerIO

e2e-test for WebdriwerIO applications async-await mode
## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 12.X )
- Clone and checkout the github project
- Go to the terminal and execute "npm install" inside the checked out folder

### How to run the tests on windows

We defined a default configuration (config/wdio.chrome.conf.js) for Chrome which will be executed when you run "npm run test:chrome".

### Test structure

All test cases should be coded inside the test folder. There you can organize tests for different apps (e.g. msb-app) and define generic classes with getters and setters to use classes those methods inside other classes.

We work with the Page Object Pattern described in <https://webdriver.io/docs/pageobjects.html>. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.
For instance we defined the LoginPage and the element as attributes in a class and reuse them in the code.
