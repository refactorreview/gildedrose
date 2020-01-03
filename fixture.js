import shop from './src/shop'

const gildedRose = shop;

const days = 2;

for (let i = 0; i < days; i++) {
    showHeaderFor(i);
    showItemsFor();
    gildedRose.updateQuality();
}

function showHeaderFor(day) {
    console.log('-------- day ' + day + ' --------');
}

function showItemsFor() {
    console.log('name, sellIn, quality');
    for (let j = 0; j < gildedRose.items.length; j++) {
        const item = gildedRose.items[j];
        console.log(item.name + ', ' + item.sellIn + ', ' + item.quality);
    }
    console.log("\n");
}
