import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

export function convertTimestampToDate(string, format) {
  return dayjs(string).format(format);
}
