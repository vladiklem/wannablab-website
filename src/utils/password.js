// TODO: remove

export const adminPasswordCheck = ({ login, password }) =>
    (login === "Lera" || login === "vlad") && password === process.env.REACT_APP_ADMIN_PASSWORD;
