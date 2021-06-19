export const selectGroups = (state) => state.groups.data;

export const selectGroupByUserId = (id) => (state) =>
    state.groups.data &&
    state.groups.data.length &&
    state.groups.data.find(({ members }) => members.some(({ value }) => value === id));