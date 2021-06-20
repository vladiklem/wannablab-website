export const getInstagramInfo = async () => {
    const response = await fetch("https://www.instagram.com/eng.wannablab/?__a=1", {
        method: "GET",
        mode: "no-cors",
    });

    return await response.json();
};