
import moment from 'moment';

/**
 * getAvailabilities is function that will compute the open time-slots based on officeHours and appointments
 * - once must not assume appointments are
 * @returns {[availabilities]}
 */
export default function getAvailabilities(officeHours, appointments) {
  return [
    { startDate: moment().toISOString(), endDate: moment().toISOString() },
    { startDate: moment().toISOString(), endDate: moment().toISOString() },
  ];
}
