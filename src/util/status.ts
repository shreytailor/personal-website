export interface Status {
  emoji: string;
  time: string;
  status: string;
  temperature: number;
}

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-33.8678&longitude=151.2073&current=temperature_2m&forecast_days=1';

interface WeatherApiResponse {
  current: {
    temperature_2m: number;
  };
}

function getTemperature(): Promise<number> {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data: WeatherApiResponse) => data.current.temperature_2m);
}

export async function getStatus(): Promise<Status> {
  const temperature = await getTemperature();

  const hour = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    hour: 'numeric',
    hour12: false,
  });

  const parsedHour = parseInt(hour, 10);
  const timeSlot =
    parsedHour >= 6 && parsedHour < 12
      ? 'morning'
      : parsedHour >= 12 && parsedHour < 17
      ? 'afternoon'
      : parsedHour >= 17 && parsedHour < 20
      ? 'evening'
      : parsedHour >= 20 && parsedHour < 23
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
        temperature,
      };
    case 'afternoon':
      return {
        emoji: '🧠',
        time: displayableTime,
        status: 'In the zone',
        temperature,
      };
    case 'evening':
      return {
        emoji: '🥔',
        time: displayableTime,
        status: 'Being a couch potato',
        temperature,
      };
    case 'night':
      return {
        emoji: '🛌',
        time: displayableTime,
        status: 'Thinking about sleep',
        temperature,
      };
    case 'late':
      return {
        emoji: '🌜',
        time: displayableTime,
        status: 'Probably sleeping',
        temperature,
      };
    default:
      throw new Error('Invalid time slot');
  }
}
