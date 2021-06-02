export const selectAdmin = (state) => ({
    ...state.app.admin,
    isLoading: state.app.isLoading,
});
