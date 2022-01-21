export const pricesInCents = {
    Apple: 60,
    Orange: 25,
}

export const getApplePrices = (apples, offer) => {
    if (!offer && !apples < 2)
        return apples * pricesInCents.Apple;
    return Math.floor(apples / 2) * pricesInCents.Apple;
}

export const getOrangePrices = (oranges, offer) => {
    if (!offer || oranges < 3)
        return oranges * pricesInCents.Orange;
    return (Math.floor(oranges / 3)) * 2 * pricesInCents.Orange;
}