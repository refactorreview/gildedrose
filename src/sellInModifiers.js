export const decreaseSellIn = (item) => {
    item.sellIn -= 1;
};
export const isExpired = item => item.sellIn < 0;