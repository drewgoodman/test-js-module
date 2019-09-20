'use strict';

var moment = require('moment');

// import moment from 'moment' ^^ older version

/**
 * Returns a div element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};