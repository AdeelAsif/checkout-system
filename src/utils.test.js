import { getApplePrices, getOrangePrices, pricesInCents } from './utils'


describe('Apple Price', () => {
    it('Price for 2 apples without offer should be 1.2$', () => {
        const apples = 2;
        const applesPrice = getApplePrices(apples) / 100;

        expect(applesPrice).toEqual(1.2);
    });

    it('Price for 2 apples wiht offer should be 0.6$', () => {
        const apples = 2;
        const applesPrice = getApplePrices(apples, true) / 100;

        expect(applesPrice).toEqual(0.6);
    });

});


describe('Orange Price', () => {
    it('Price for 3 oranges without offer should be 0.75$', () => {
        const oranges = 3;
        const orangesPrice = getOrangePrices(oranges) / 100;

        expect(orangesPrice).toEqual(0.75);
    });

    it('Price for 3 oranges with offer should be 0.5$', () => {
        const oranges = 3;
        const orangesPrice = getOrangePrices(oranges, true) / 100;

        expect(orangesPrice).toEqual(0.5);
    });
    
    it('Price for 2 oranges with offer should be 0.5$', () => {
        const oranges = 2;
        const orangesPrice = getOrangePrices(oranges, true) / 100;

        expect(orangesPrice).toEqual(0.5);
    });

});