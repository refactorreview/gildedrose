import {Item, Shop} from "../gilded_rose";

describe("Quality of the item" , () => {
    const expired = 0;
    const sellIn = 20;

    const quality = 10;

    it("should decrease by 1, if not expired", () => {
        const decreasedQuality = 9;
        const item = new Item('Test item', sellIn, quality);
        const gildedRose = new Shop([item]);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).toEqual(decreasedQuality);
    });
    it("should decrease by 2, if expired\"", () => {
        const decreasedQuality = 8;
        const item = new Item('Test item', expired, quality);
        const gildedRose = new Shop([item]);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).toEqual(decreasedQuality);
    })
});
