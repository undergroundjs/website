const groupByKey = (key) => (objArr) =>
  objArr.reduce((acc, curr) => {
    const type = curr[key];
    const currAttendeeForType = acc[type] || [];

    return {
      ...acc,
      [type]: [...currAttendeeForType, curr],
    };
  }, {});

const groupAttendeesByTicketType = groupByKey('ticket_class_name');
const sumAttendeeQuantities = (runningTotal = 0, { quantity }) =>
  runningTotal + quantity;

export const getAttendeeTicketCount = ({ attendees }) => {
  const groupedAttendees = groupAttendeesByTicketType(attendees);

  return Object.entries(groupedAttendees).map(([key, attendees]) => {
    const attendeeCount = attendees.reduce(sumAttendeeQuantities, 0);
    return `${attendeeCount} ${key}`;
  });
};
