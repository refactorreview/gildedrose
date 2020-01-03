import {Item} from "../gilded_rose";
import {updateAgedBrie} from "../updaters/agedbrie";

describe("Aged brie" , () => {

    it("should increase in quality", () => {
        const item = new Item("Aged Brie", 10, 20);
        updateAgedBrie(item);
        expect(item.quality).toEqual(21);
    });

    it("should still increase twice as fast in quality after expiring", () => {
        const item = new Item("Aged Brie", -1, 40);
        updateAgedBrie(item);
        expect(item.quality).toEqual(42);
    });
});