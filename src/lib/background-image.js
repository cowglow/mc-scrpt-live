export const backgroundImage = max => {
    const index = Math.floor(Math.random() * max) + 1;
    return {
        "background-image": "url(images/background-00" + index + ".jpg)"
    };
};
