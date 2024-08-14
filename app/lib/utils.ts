import moment from "moment";

export function parseDiffFromNow(dateToParse: Date) {
    const updatedAt = moment(dateToParse);
    const now = moment();
    const diff = now.diff(updatedAt);
    let duration = moment.duration(diff).asSeconds();
    let unit = duration === 1 ? "second" : "seconds";
    if(duration > 60){
        duration = moment.duration(diff).asMinutes();
        unit = duration === 1 ? "minute" : "minutes";
    }
    if(duration > 60){
        duration = moment.duration(diff).asHours();
        unit = duration === 1 ? "hour" : "hours";
    }
    if (duration > 24) {
        duration = moment.duration(diff).asDays();
        unit = duration === 1 ? "day" : "days";
    }
    if (duration > 7) {
        duration = moment.duration(diff).asWeeks();
        unit = duration === 1 ? "week" : "weeks";
    }
    if (duration > 5) {
        duration = moment.duration(diff).asMonths();
        unit = duration === 1 ? "month" : "months";
    }
    if (duration > 12) {
        duration = moment.duration(diff).asYears();
        unit = duration === 1 ? "year" : "years";
    }

    return {
        duration:Math.floor(duration),
        unit,
    };
}
