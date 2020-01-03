import {Item, Shop} from "../gilded_rose";

describe("Quality of the item" , () => {
    const expired = 0;
    const zeroQuality = 0;

    it("should not go below zero", () => {
        const itemWithZeroQuality = new Item('Test item', 10, zeroQuality);
        const expiredItemWithQualityOfOne = new Item('Test item', expired, 1);
        const gildedRose = new Shop([itemWithZeroQuality, expiredItemWithQualityOfOne]);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).toEqual(0);
        expect(updatedItems[1].quality).toEqual(0);
    });
    it("should not go above 50", () => {
        const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).toEqual(50);
    })
});
