export const scrollToTop = () =>
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

export const isNewLead = (status) => ["new", "new-quiz", "new-level-test"].includes(status);
