const header = document.getElementsByTagName('header')[0];
const dateParagraph = header.getElementsByTagName('p')[0];

async function getLocale() {
    return await (await fetch('https://mylocale.shreym-tailor5734.workers.dev/')).text();
}

function getTimeEmoji(time, day) {
    let emoji;

    if (time.hours >= 23 || time.hours < 8) {
        emoji = '😴';
    } else if (time.hours >= 8 && time.hours < 16) {
        emoji = '👨🏻‍💻';
    } else if (time.hours >= 16 && time.hours < 20) {
        emoji = '😎';
    } else if (time.hours > 20 && time.hours < 23) {
        emoji = '🥱';
    }

    if ((day === 0 || day === 6) && emoji === '👨🏻‍💻') {
        emoji = '😎';
    }

    return emoji;
}

function pad(value) {
    if (value < 10) {
        return `0${value}`;
    }

    return value;
}

async function getDateTime(locale) {
    let timeRequestUrl;

    if (locale === 'nz') {
        timeRequestUrl = 'https://worldtimeapi.org/api/timezone/Pacific/Auckland';
    } else if (locale === 'aus') {
        timeRequestUrl = 'https://worldtimeapi.org/api/timezone/Australia/Sydney';
    }

    const timeJson = await (await fetch(timeRequestUrl)).json();
    const date = new Date(timeJson.datetime.match(/^[^+]*/g));

    return {
        time: {
            hours: date.getHours(),
            minutes: date.getMinutes()
        },
        day: date.getDay(),
        locale: timeJson.abbreviation.toLowerCase()
    };
}

(async () => {
    const locale = await getLocale();
    const dateTime = await getDateTime(locale);
    const emoji = getTimeEmoji(dateTime.time, dateTime.day);
    const hoursString = pad(dateTime.time.hours);
    const minutesString = pad(dateTime.time.minutes);
    dateParagraph.textContent = `${emoji} ${hoursString}:${minutesString} ${dateTime.locale} time`;
})();