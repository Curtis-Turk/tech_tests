class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      item.sellIn--;

      if (item.quality == 0) {
        return item;
      }
      if (item.sellIn < 0) {
        item.quality--;
      }
      item.quality--;
    });
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
