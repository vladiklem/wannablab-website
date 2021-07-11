import ReactGA from "react-ga";

export const fireAnalyticsEvent = (event, label = null) => {
    ReactGA.event({ ...event, label });
};
