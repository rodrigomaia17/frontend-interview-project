import moment from 'moment';
import { Interval } from 'luxon';

/**
 * getAvailabilities is function that will compute the open time-slots based on officeHours and appointments
 * - once must not assume appointments are
 * @returns {[availabilities]}
 */

const extractInterval = (date) =>  Interval.fromDateTimes(new Date(date.startTime) , new Date(date.endTime));
const extractIntervals = (dates) =>  Interval.merge(dates.map(extractInterval));

export default function getAvailabilities(officeHours, appointments) {
  if (officeHours.isClosed)
    return [];
  const breaks = extractIntervals((officeHours.breaks || []).concat(appointments || []));
  const officeInterval = extractInterval(officeHours);
  if(breaks.length > 0) {
    const intervals  = [];
    breaks.forEach((b, index) => {
      if( index === 0 && b.start > officeInterval.start ) { // is first break 
        intervals.push(Interval.fromDateTimes(officeInterval.start, b.start));
      }
      if( index + 1 === breaks.length ) { // is last one
        if(b.end < officeInterval.end) {
          intervals.push(Interval.fromDateTimes(b.end, officeInterval.end));
        }
      } else if (b.end < breaks[index + 1].start) {
        intervals.push(Interval.fromDateTimes(b.end, breaks[index + 1].start));
      }
    });
    return intervals;
  }

  return [officeInterval];
}
