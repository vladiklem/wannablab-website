export const selectGroupByUserId = (id) => (state) => {
    console.log(state.groups.data);
    return state.groups.data &&
    state.groups.data.length &&
    state.groups.data.find(({ members }) => members.some(({ value }) => value === id));
}
