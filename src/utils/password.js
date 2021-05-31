// TODO: remove

export const adminPasswordCheck = ({ login, password }) =>
    (login === "Lera" || login === "vlad" || login === "Marina") &&
    password === process.env.REACT_APP_ADMIN_PASSWORD;
