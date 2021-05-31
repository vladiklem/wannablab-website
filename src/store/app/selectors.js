export const selectIsAdmin = (state) => ({
    isVisible: state.app.isAdmin,
    isLoading: state.app.isLoading,
});
