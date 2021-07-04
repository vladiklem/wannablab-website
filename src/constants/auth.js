export const admins = [
    {
        username: "vlad",
        roles: ["org"],
    },
    {
        username: "Lera",
        roles: ["org"],
    },
    {
        username: "Marina Pekar",
        roles: ["Manager"],
    },
    {
        username: "Roma",
        roles: ["Targeting"],
    },
    {
        username: "Diana",
        roles: ["Copywriter"],
    },
    {
        username: "Anya",
        roles: ["Teacher"],
    },
    {
        username: "Marta",
        roles: ["Teacher"],
    },
    {
        username: "Maryna Torokhtiy",
        roles: ["Teacher"],
    },
    {
        username: "Kate",
        roles: ["Teacher"],
    },
    {
        username: "Liuda",
        roles: ["Designer"],
    },
];

export const toEmployees = (admins) =>
    admins.reduce((acc, item) => (item.roles.includes("org") ? acc : [...acc, item]), []);
