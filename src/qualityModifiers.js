const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export const increaseQuality = (item, increase = 1) => {
    if (item.quality + increase > MAX_QUALITY)
        item.quality = MAX_QUALITY;
    else
        item.quality += increase;
};
export const decreaseQuality = (item, decrease = 1) => {
    if (item.quality > MIN_QUALITY) {
        item.quality -= decrease;
    }
};

export const setQualityToZero = (item) => {
    item.quality = MIN_QUALITY
};