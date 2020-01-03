import {decreaseSellIn, isExpired} from "../sellInModifiers";
import {increaseQuality, setQualityToZero} from "../qualityModifiers";

export const updateBackstagePass = item => {
    if (isExpired(item)) {
        setQualityToZero(item)
    } else if (item.sellIn < 6) {
        increaseQuality(item, 3)
    } else if (item.sellIn < 11) {
        increaseQuality(item, 2)
    } else {
        increaseQuality(item)
    }
    decreaseSellIn(item)
};