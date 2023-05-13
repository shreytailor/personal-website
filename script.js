const dateParagraph = document.getElementById('time');
const statusParagraph = document.getElementById('status');

const Status = {
    SLEEPING: {
        emoji: '😴',
        string: 'sleeping'
    },
    AT_WORK: {
        emoji: '👨🏻‍💻',
        string: 'at work'
    },
    CHILLING: {
        emoji: '😎',
        string: 'chilling'
    },
    SLEEPY: {
        emoji: '🥱',
        string: 'sleepy'
    }
};

async function getLocale() {
    return await (await fetch('https://mylocale.shreym-tailor5734.workers.dev/')).text();
}

function getStatus(time, day) {
    let status;

    if (time.hours >= 23 || time.hours < 8) {
        status = Status.SLEEPING;
    } else if (time.hours >= 8 && time.hours < 16) {
        status = Status.AT_WORK;
    } else if (time.hours >= 16 && time.hours < 20) {
        return Status.CHILLING;
    } else if (time.hours >= 20 && time.hours < 23) {
        status = Status.SLEEPY;
    }

    if ((day === 0 || day === 6) && status === Status.AT_WORK) {
        status = Status.CHILLING;
    }

    return status;
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

function pad(value) {
    if (value < 10) {
        return `0${value}`;
    }

    return value;
}

function getTwelveHourRepresentation(time) {
    const postfix = time.hours > 12 ? 'pm' : 'am';
    time.hours = time.hours > 12 ? time.hours % 12 : time.hours;
    time.minutes = pad(time.minutes);
    return `${time.hours}:${time.minutes}${postfix}`;
}

(async () => {
    const locale = await getLocale();
    const dateTime = await getDateTime(locale);

    const status = getStatus(dateTime.time, dateTime.day);
    const dateTimeString = getTwelveHourRepresentation(dateTime.time);

    dateParagraph.textContent = `${dateTimeString} ${dateTime.locale}`;
    statusParagraph.textContent = `${status.emoji} ${status.string}`;
})();