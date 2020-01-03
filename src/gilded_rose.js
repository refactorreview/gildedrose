import {updateAgedBrie} from "./updaters/agedbrie";
import {updateBackstagePass} from "./updaters/backstage";
import {updateNormalItem} from "./updaters/normal";
import {updateConjured} from "./updaters/conjured";
import {updateSulfuras} from "./updaters/sulfuras";

const isBackstagePass = (item) => item.name === 'Backstage passes to a TAFKAL80ETC concert';
const isAgedBrie = (item) => item.name === 'Aged Brie';
const isSulfuras = (item) => item.name === 'Sulfuras, Hand of Ragnaros';
const isConjured = (item) => item.name === 'Conjured Mana Cake';

const updateSingleItem = (item) => {
    if (isAgedBrie(item)) {
        updateAgedBrie(item);
        return;
    }
    if (isBackstagePass(item)) {
        updateBackstagePass(item);
        return;
    }
    if (isSulfuras(item)) {
        updateSulfuras();
        return;
    }
    if(isConjured(item)){
        updateConjured(item);
        return
    }
    updateNormalItem(item);
};

const getUpdateStrategy = (item) => {
    if (isAgedBrie(item)) {
        return updateAgedBrie;
    }
    if (isBackstagePass(item)) {
        return updateBackstagePass;
    }
    if (isSulfuras(item)) {
        return updateSulfuras;
    }
    if(isConjured(item)){
        return updateConjured;
    }
    return updateNormalItem;
};



export class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        //this.items.forEach(item => updateSingleItem(item));
        this.items.forEach(item => getUpdateStrategy(item)(item));
        return this.items;
    }
}

export class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
