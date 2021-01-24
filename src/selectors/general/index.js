export const isAdminSelector = (state) => ({
    isVisible: state.general.isAdmin,
    isLoading: state.general.isLoading,
});
