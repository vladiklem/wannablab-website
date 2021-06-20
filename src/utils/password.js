import { admins } from "constants/auth";

export const adminPasswordCheck = ({ login, password }) => {
    const user = admins.find(({ username }) => username === login);
    return password === process.env.REACT_APP_ADMIN_PASSWORD && user;
};
