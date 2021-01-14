import moment from "moment";

import { weekDays } from "constants/date";

export const getFormattedCalendarEvents = (events) =>
    events.map(({ startDate, endDate, ...item }) => ({
        start: new Date(startDate),
        end: new Date(endDate),
        startDate,
        endDate,
        ...item,
    }));

export const getTestTimeLabel = (date) =>
    `${weekDays[moment(date).day()].short}: ${moment(date).get("hours") || "00"}:${
        moment(date).get("minutes") || "00"
    }`;
