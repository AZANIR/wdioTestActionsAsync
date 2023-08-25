const {passSignIn, switchToCourse} = require('./passSignIn');

const Roles = require('./Roles');

const header = require('../test/pages/Header');

module.exports = {
    changeAccountTo: (role) => {
        header.logout();
        passSignIn(role);
        switchToCourse();
    },
    isDeleteAccess: (mainRole) => {
        return Roles.STUDENT !== mainRole;
    },
    isCreateAccess: (mainRole) => {
        return Roles.STUDENT !== mainRole;
    }
};