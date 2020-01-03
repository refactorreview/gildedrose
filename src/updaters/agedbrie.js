import {increaseQuality} from "../qualityModifiers";
import {decreaseSellIn, isExpired} from "../sellInModifiers";

export const updateAgedBrie = (item) => {
    increaseQuality(item);
    decreaseSellIn(item);
    if (isExpired(item)) {
        increaseQuality(item);
    }
};