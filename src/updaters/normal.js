import {decreaseQuality} from "../qualityModifiers";
import {decreaseSellIn, isExpired} from "../sellInModifiers";

export const updateNormalItem = item => {
    decreaseQuality(item);
    decreaseSellIn(item);
    if (isExpired(item)) {
        decreaseQuality(item)
    }
};