export const selectGroupByUserId = (id) => (state) =>
    state.groups.data &&
    state.groups.data.length &&
    state.groups.data.find(({ members }) => members.some(({ value }) => value === id));

export const selectEventsByGroupId = (id) => (state) =>
    state.events.data.reduce((acc, event) => (event.groupId === id ? [...acc, event] : acc), []);

export const isLoggedInSelector = (state) => ({
    isVisible: state.currentUser.isLoggedIn,
    isLoading: state.currentUser.isLoading,
});
