export const selectAdmin = (state) => ({
    ...state.app.admin,
    isLoading: state.app.isLoading,
});

export const selectBudget = (state) => state.app.budget;

export const selectInstagramInfo = (state) => state.app.instagram;

export const selectTelegramInfo = (state) => state.app.telegram;

export const selectHeaderSettings = (state) => state.app.header;
