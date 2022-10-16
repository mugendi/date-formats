const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
const utc = require('dayjs/plugin/utc');
const advancedFormat = require('dayjs/plugin/advancedFormat');
const timezone = require('dayjs/plugin/timezone');
const weekOfYear = require('dayjs/plugin/weekOfYear');

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(timezone);
dayjs.extend(weekOfYear);

function DateFormats(date = new Date()) {
	date = date instanceof Date ? date : dayjs(date).toDate();

	if (date.toString() == 'Invalid Date')
		throw new Error(`Invalid Date ${date} Entered`);

	let d = dayjs(date);
	let tz = dayjs.tz.guess();

	// add sort date
	date.short = d.format('DD/MM/YYYY');
	date.long = d.format('Do MMMM, YYYY');
	// add localized date
	date.local = d.format('L LT');

	// ISO
	date.iso = d.toISOString();

	// utc
	date.utc = d.utc().format();
	date.utc.__proto__.offset = d.utcOffset();
	date.utc.__proto__.local = dayjs.utc().local().format();

	// timezone
	// attempt to guess the timezone
	date.tz = d.tz(dayjs.tz.guess()).format();
	// but also provide user the opportunity to set own timezone
	date.tz.__proto__.set = (tz) => d.tz(tz).format();

	// timestamps
	date.ts = Number(d.format('X'));
	date.tsMs = Number(d.format('x'));

	// time periods
	date.quarter = d.format('Q');
	date.wk = d.format('ww');
	date.MM = d.format('MM');
	date.MMMM = d.format('MMMM');
	date.YY = d.format('YY');
	date.YYYY = d.format('YYYY');

	return date;
}

module.exports = DateFormats;
