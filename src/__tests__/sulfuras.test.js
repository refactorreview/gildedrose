import {Item, Shop} from "../gilded_rose";

describe("Sulfuras" , () => {

    it("should never be sold", () => {
        const item = new Item("Sulfuras, Hand of Ragnaros", 10, 20);
        const gildedRose = new Shop([item]);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].sellIn).toEqual(10);
    });

    it("should not decrease quality", () => {
        const item = new Item("Sulfuras, Hand of Ragnaros", 10, 40);
        const gildedRose = new Shop([item]);
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems[0].quality).toEqual(40);
    })
});