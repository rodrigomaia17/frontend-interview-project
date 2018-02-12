
import getAvailabilities from './getAvailabilities';

// ISO String helper
const date = (y, m, d, h, mi) => (new Date(y, m, d, h, mi)).toISOString();


describe('#getAvailabilities', () => {
  it('is a function', () => {
    expect(typeof getAvailabilities).toBe('function');
  });

  it('returns none in closed days', () => {
    const officeHours =  { isClosed: true };

    const result = getAvailabilities(officeHours, null); 

    expect(result).toEqual([]);
  });

  it('returns none in closed days', () => {
    const officeHours =  { isClosed: true };

    const result = getAvailabilities(officeHours, null); 

    expect(result).toEqual([]);
  });

  it('returns entire day if we do not have appointments or breaks', () => {
    const officeHours =  {
      startTime: date(2018, 1, 1, 13, 30), // 1:30pm,
      endTime: date(2018, 1, 1, 18, 30), // 6:30pm,
    };

    const intervals = getAvailabilities(officeHours, null); 

    expect(intervals.length).toEqual(1);
    expect(intervals[0].start.hour).toEqual(13);
    expect(intervals[0].end.hour).toEqual(18);
  });

  it('returns entire day without break intervals', () => {
    const officeHours =  {
      startTime: date(2018, 1, 1, 8, 0), // 8:00am,
      endTime: date(2018, 1, 1, 18, 0), // 6:00pm,
      breaks: [
        {
          startTime: date(2018, 1, 1, 12, 0), // 12:00pm,
          endTime: date(2018, 1, 1, 15, 0), // 3:00pm,
        },
      ],
    };

    const intervals = getAvailabilities(officeHours, null); 

    expect(intervals.length).toEqual(2);
    expect(intervals[0].start.hour).toEqual(8);
    expect(intervals[0].end.hour).toEqual(12);
    expect(intervals[1].start.hour).toEqual(15);
    expect(intervals[1].end.hour).toEqual(18);
  });

  it('returns intervals considering break and appointments ', () => {
    const officeHours =  {
      startTime: date(2018, 1, 1, 8, 0), // 8:00am,
      endTime: date(2018, 1, 1, 18, 0), // 6:00pm,
      breaks: [
        {
          startTime: date(2018, 1, 1, 12, 0), // 12:00pm,
          endTime: date(2018, 1, 1, 15, 0), // 3:00pm,
        },
      ],
    };

    const appointments = [
      {
        startTime: date(2018, 1, 1, 16, 0), // 4:00pm,
        endTime: date(2018, 1, 1, 17, 0), //5:00pm,
      }
    ];

    const intervals = getAvailabilities(officeHours, appointments); 

    expect(intervals.length).toEqual(3);
    expect(intervals[0].start.hour).toEqual(8);
    expect(intervals[0].end.hour).toEqual(12);
    expect(intervals[1].start.hour).toEqual(15);
    expect(intervals[1].end.hour).toEqual(16);
    expect(intervals[2].start.hour).toEqual(17);
    expect(intervals[2].end.hour).toEqual(18);
  });
});
