interface Status {
  emoji: string;
  time: string;
  status: string;
}

export function getStatus(): Status {
  const hour = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    hour: 'numeric',
    hour12: false,
  });

  const parsedHour = parseInt(hour, 10);
  const timeSlot =
    parsedHour > 5 && parsedHour < 12
      ? 'morning'
      : parsedHour < 17
      ? 'afternoon'
      : parsedHour < 20
      ? 'evening'
      : parsedHour < 23
      ? 'night'
      : 'late';

  const displayableTime = new Date().toLocaleString('en-AU', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'Australia/Sydney',
    hour12: true,
  });

  switch (timeSlot) {
    case 'morning':
      return {
        emoji: '☀️',
        time: displayableTime,
        status: 'Trying to be productive',
      };
    case 'afternoon':
      return {
        emoji: '🐨',
        time: displayableTime,
        status: 'Productivity peaking',
      };
    case 'evening':
      return {
        emoji: '📺',
        time: displayableTime,
        status: 'Couch mode activated',
      };
    case 'night':
      return {
        emoji: '🛌',
        time: displayableTime,
        status: 'Thinking about sleep',
      };
    case 'late':
      return {
        emoji: '🌜',
        time: displayableTime,
        status: 'Probably sleeping',
      };
    default:
      throw new Error('Invalid time slot');
  }
}
