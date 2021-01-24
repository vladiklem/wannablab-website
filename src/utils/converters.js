export const objToArray = (obj) => Object.keys(obj).map((id) => ({ ...obj[id], id }));

export const objWithId = (obj, id) => (id ? { ...obj, id } : obj);

export const usersToSelectOptions = (users) =>
    users.map(({ fullName, id }) => ({ label: fullName, value: id }));

export const groupsToSelectOptions = (groups) =>
    groups.map(({ title, id }) => ({ label: title, value: id }));
