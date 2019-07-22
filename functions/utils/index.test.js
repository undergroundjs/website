import { getAttendeeTicketCount } from '.';

describe('getAttendeeTicketCount', () => {
  it('should return an array of strings', () => {
    const attendees = [
      {
        quantity: 1,
        ticket_class_name: 'student',
      },
    ];

    const actual = getAttendeeTicketCount({ attendees });

    expect(actual).toEqual(['1 student']);
  });

  it('should return an array of strings', () => {
    const attendees = [
      {
        quantity: 1,
        ticket_class_name: 'student',
      },
      {
        quantity: 2,
        ticket_class_name: 'corporate',
      },
    ];

    const actual = getAttendeeTicketCount({ attendees });

    expect(actual).toEqual(['1 student', '2 corporate']);
  });

  it('should combine ticket types', () => {
    const attendees = [
      {
        quantity: 1,
        ticket_class_name: 'student',
      },
      {
        quantity: 2,
        ticket_class_name: 'student',
      },
    ];

    const actual = getAttendeeTicketCount({ attendees });

    expect(actual).toEqual(['3 student']);
  });
});
