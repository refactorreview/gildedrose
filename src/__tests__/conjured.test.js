import {Item} from "../gilded_rose";
import {updateConjured} from "../updaters/conjured";

describe("Conjured", () => {
    it("should decrease quality twice as fast, as normal items", () => {
         const item = new Item("Conjured Mana Cake", 10, 20);
         updateConjured(item);
         expect(item.quality).toBe(18);
         expect(item.sellIn).toBe(9);
    });
    it("should decrease quality twice as fast, as normal items, even when expired", () => {
         const item = new Item("Conjured Mana Cake", 0, 20);
         updateConjured(item);
         expect(item.quality).toBe(16);
         expect(item.sellIn).toBe(-1);
    })
});