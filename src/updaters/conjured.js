import {decreaseQuality} from "../qualityModifiers";
import {decreaseSellIn, isExpired} from "../sellInModifiers";

export const updateConjured = item => {
    decreaseQuality(item, 2);
    decreaseSellIn(item);
    if (isExpired(item)) {
        decreaseQuality(item, 2)
    }
};