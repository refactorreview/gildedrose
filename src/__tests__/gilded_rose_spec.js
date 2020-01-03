import shop from "../shop";


describe("Gilded Rose functionality", function () {
    it("should not break", function () {
        const gildedRose = shop;
        const updatedItems = gildedRose.updateQuality();
        expect(updatedItems).toMatchSnapshot();
    });
});



