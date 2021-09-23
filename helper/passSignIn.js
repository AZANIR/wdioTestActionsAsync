const Roles = require('./Roles');

const Page = require('../test/pages/Page');
const helper = require('./helper');

const envURLs = helper.parseJsonFile('./environments/env.json');
const accounts = helper.parseJsonFile('./environments/accounts.json');
const signInButton = 'input[type=submit]';
const mainModulesMenu ='.main-modules-menu';

let envRole = Roles.SUPERUSER;
// if (process.argv[3] === '--suite') {
//     envRole = process.argv[4];
// }

module.exports = {
    passSignIn: (role) => {
        browser.url(envURLs.LOG_IN);
        if (undefined === role) {
            Page.setValue('div.input.name input', accounts[envRole].username);
            Page.setValue('div.input.password input', accounts[envRole].password);
            Page.click(signInButton);
        } else {
            Page.setValue('div.input.name input', accounts[role].username);
            Page.setValue('div.input.password input', accounts[role].password);
            Page.click(signInButton);
        }
        Page.waitUntilDisplayed(mainModulesMenu);
        //temporary measure pending bug fix
        browser.refresh();
        //browser.pause(2000);
    }
};