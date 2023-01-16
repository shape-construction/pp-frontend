import moment, { Moment } from 'moment-timezone';

export type DayPeriod = 'AM' | 'PM';

export type TimeObject = {
  hour: string;
  minute: string;
};

const getTimeObject = (timeObject: Moment, isTwentyFourHour: boolean) => {
  const hour = timeObject.format(isTwentyFourHour ? 'HH' : 'hh');
  const minute = timeObject.format('mm');

  return { hour, minute };
};

// Helper function to get current client time
export const getCurrentTimeObject = (
  timezone: string = 'Europe/London',
  defaultValue?: string | Date | Moment,
  isTwentyFourHour: boolean = false
): TimeObject => {
  const isValid = moment.tz(defaultValue, timezone).isValid();
  if (!isValid && typeof defaultValue === 'string') {
    return getTimeObject(moment.tz(defaultValue, 'HH:mmZZ', timezone), isTwentyFourHour);
  }
  return getTimeObject(moment.tz(defaultValue, timezone), isTwentyFourHour);
};

// Helper function for partial time validation
export const validatePartialTime = (state: TimeObject, isTwentyFourHour: boolean) => {
  const hour = parseInt(state.hour, 10);
  const minute = parseInt(state.minute, 10);

  if (hour < 1 || (isTwentyFourHour && hour > 24) || (!isTwentyFourHour && hour > 12)) return false;
  if (minute < 0 || minute > 59) return false;

  return true;
};

export const parseToMoment = (
  timeObj: TimeObject,
  isTwentyFourHour: boolean = true,
  period?: DayPeriod
) => {
  const timeFormat = isTwentyFourHour ? 'HH:mm' : 'hh:mm A';
  const timePeriod = !isTwentyFourHour ? ` ${period}` : '';
  const timeString = `${timeObj.hour}:${timeObj.minute}${timePeriod}`;

  return moment(timeString, timeFormat);
};

export const parseToISO = (
  timeObj: TimeObject,
  isTwentyFourHour: boolean = true,
  period?: DayPeriod
) => parseToMoment(timeObj, isTwentyFourHour, period).format('HH:mmZZ');

export const parseToUTC = (
  timeObj: TimeObject,
  timezone: string = 'Europe/London',
  isTwentyFourHour: boolean = true,
  period?: DayPeriod
) => moment(parseToMoment(timeObj, isTwentyFourHour, period), timezone).format('HH:mmZZ');
