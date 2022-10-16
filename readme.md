<!--
 Copyright (c) 2022 Anthony Mugendi

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Date-Formats

When handling dates, many are the times when we are formatting dates from this or that format, or even from one timezone to the other.

Libraries like [dayjs](https://www.npmjs.com/package/dayjs) are amazing for this task but I got tired of always doing the same job over and over. Oh, and reading the dayjs documentation just to recall how a certain function is done.

This is a wrapper module around the amazing dayjs that allows you to do amazing things with dates without the hustle.

It was built so that it extends the Date object with extra properties so that you can just reference them in your code.

## But Why?

When working on the templating modules for [cmsish](http://cmsish.com). I needed to create a performant way for templates to render dates in a variety of formats.

For example, a user might want to render an article's date of publication in a variety of ways. With this module, we only need to parse one date and the user can render this date as `{~date.short~}` or `{~date.utc~}` or `{~date.iso~}` or use any of the 14 other formats included!

## Show me the code!
Of course first install the module ```yarn add date.formats```

```javascript
const DF = require('extended-date-formats');

// Initialize with a specific date
let date = DF('2022-10-16T00:45:49.157Z');

// Or with current date
let date = DF(new Date());

// Or let it default to current date
let date = DF();

console.log(date);
```

This will output all the available formats:
```
2020-10-16T00:45:49.157Z {
  short: '16/10/2020',
  long: '16th October, 2020',
  local: '10/16/2020 3:45 AM',
  iso: '2020-10-16T00:45:49.157Z',
  utc: '2020-10-16T00:45:49+00:00',
  tz: '2020-10-16T03:45:49+03:00',
  ts: 1602809149,
  tsMs: 1602809149157,
  quarter: '4',
  wk: '42',
  MM: '10',
  MMMM: 'October',
  YY: '20',
  YYYY: '2020'
}
```

But that's just the beginning, let's now get to the fun stuff:

```javascript
// when you stringify the date object, it formats into a date string
console.log('stringified:', date + '');
console.log('stringified:', date.toString());

// there is also a short format
console.log('short date:', date.short);
// a localized format
console.log('local date:', date.local);
// with your timezone auto detected via dayjs.tz.guess() 
console.log('timezone', date.tz);
// of you can change to a custom timezone
console.log('custom timezone', date.tz.set('America/New_York'));

// Or as UTC
console.log('utc', date.utc);
// Oh and in case you are curious about the offset
console.log('utc offset', date.utc.offset);
// Or as a local UTC formatted date
console.log('utc local', date.utc.local);
```

You should see the following in your log:
```
stringified: Fri Oct 16 2020 03:45:49 GMT+0300 (East Africa Time)
stringified: Fri Oct 16 2020 03:45:49 GMT+0300 (East Africa Time)
short date: 16/10/2020
local date: 10/16/2020 3:45 AM
timezone 2020-10-16T03:45:49+03:00
custom timezone 2020-10-15T20:45:49-04:00
utc 2020-10-16T00:45:49+00:00
utc offset 180
utc local 2022-10-16T04:07:48+03:00
```
Now get back to eating bacon!