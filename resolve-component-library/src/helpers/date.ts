import moment, { Moment } from 'moment';

type DateObject = {
  date: string;
  month: string;
  year: string;
};

// Helper function to get current client date
export const getCurrentDateObject = (
  defaultValue?: Date | string | Moment,
  timezone?: string
): DateObject => {
  const dateObj = timezone ? moment(defaultValue).tz(timezone!) : moment(defaultValue);
  const date = dateObj.format('DD');
  const month = dateObj.format('MM');
  const year = dateObj.format('YYYY');

  return { date, month, year };
};

// Helper function for partial date validation
export const validatePartialDate = (state: DateObject) => {
  const date = parseInt(state.date, 10);
  const month = parseInt(state.month, 10);
  const year = parseInt(state.year, 10);

  if (date < 1 || date > 31) return false;
  if (month < 1 || month > 12) return false;
  if (year > 9999) return false;

  return true;
};

export const validateFullDate = (state: DateObject) => {
  const year = state.year.padStart(4, '2000');
  const month = state.month.padStart(2, '0');
  const date = state.date.padStart(2, '0');

  return moment(`${year}-${month}-${date}`, 'YYYY-MM-DD', true).isValid();
};

export const formatTimeAgo = (date: any) => {
  const now = moment();
  const sameYear = now.isSame(date, 'year');
  const sameDay = now.isSame(date, 'day');
  const secondsDifference = now.diff(date, 'seconds');
  if (secondsDifference < 60) return 'just now';
  if (secondsDifference > 86400 && sameYear) {
    return moment(date).format('D/M');
  }
  if (!sameYear) {
    return moment(date).format('D/M/YY');
  }
  if (secondsDifference > 3600 && secondsDifference < 86400 && sameDay) {
    return `${now.diff(date, 'hours')}h`;
  }
  if (secondsDifference > 3600 && !sameDay) {
    return moment(date).format('D/M');
  }
  return `${now.diff(date, 'minutes')}m`;
};
