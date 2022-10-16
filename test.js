/**
 * Copyright (c) 2022 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const DF = require('.');

let date = DF('2020-10-16T00:45:49.157Z');

console.log(date);

// whenever the date is stringified
console.log('stringified:', date + '');
console.log('stringified:', date.toString());
console.log('short date:', date.short);
console.log('local date:', date.local);
console.log('timezone', date.tz);
console.log('custom timezone', date.tz.set('America/New_York'));

console.log('utc', date.utc);
console.log('utc offset', date.utc.offset);
console.log('utc local', date.utc.local);

// console.log(DF(new Date()).tz);
