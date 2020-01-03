import {Item, } from "../gilded_rose";
import {updateBackstagePass} from "../updaters/backstage";

describe("Backstage passes", () => {

    it("should increase in quality", () => {
        const item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
        updateBackstagePass(item);
        expect(item.quality).toEqual(21);
    });

    it("should increase quality by two, when 10 days or less is left", () => {
        const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40);
        updateBackstagePass(item);
        expect(item.quality).toEqual(42);
    });

    it("should increase quality by three, when 5 days or less is left", () => {
        const item = new Item("Backstage passes to a TAFKAL80ETC concert", 3, 40);
        updateBackstagePass(item);
        expect(item.quality).toEqual(43);
    });
    it("should drop quality to zero, if event is over", () => {
        const item = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 40);
        updateBackstagePass(item);
        expect(item.quality).toEqual(0);
    })

});

