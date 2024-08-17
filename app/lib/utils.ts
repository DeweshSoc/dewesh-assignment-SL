import moment from "moment";

export function parseDiffFromNow(dateToParse: Date) {
    const updatedAt = moment(dateToParse);
    const now = moment();
    const diff = now.diff(updatedAt);
    let duration = moment.duration(diff).asSeconds();
    let unit = duration === 1 ? "second" : "seconds";
    console.log(duration, "s");
    if (duration > 60) {
        duration = moment.duration(diff).asMinutes();
        unit = duration === 1 ? "minute" : "minutes";
        console.log(duration, "m");

        if (duration > 60) {
            duration = moment.duration(diff).asHours();
            unit = duration === 1 ? "hour" : "hours";
            console.log(duration, "h");

            if (duration > 24) {
                duration = moment.duration(diff).asDays();
                unit = duration === 1 ? "day" : "days";
                console.log(duration, "d");

                if (duration > 7) {
                    duration = moment.duration(diff).asWeeks();
                    unit = duration === 1 ? "week" : "weeks";
                    console.log(duration, "w");

                    if (duration > 5) {
                        duration = moment.duration(diff).asMonths();
                        unit = duration === 1 ? "month" : "months";
                        console.log(duration, "m");

                        if (duration > 12) {
                            duration = moment.duration(diff).asYears();
                            unit = duration === 1 ? "year" : "years";
                            console.log(duration, "y");
                        }
                    }
                }
            }
        }
    }

    return {
        duration: Math.floor(duration),
        unit,
    };
}
