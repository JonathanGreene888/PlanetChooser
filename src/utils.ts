function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const chooseRandomDate = () => {
    const currentYear = new Date().getFullYear();
    const minimumYear = 1995;
    const randomYear = getRandomNumber(minimumYear, currentYear).toString();
    const randomMonth = getRandomNumber(1, 12).toString();
    const randomDay = getRandomNumber(1, 28).toString();

    return `${randomYear}-${randomMonth}-${randomDay}`;
};
