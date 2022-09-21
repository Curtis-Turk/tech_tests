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
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name == "Sulfuras, Hand of Ragnaros") {
        continue;
      }
      this.updateItem(item);
      this.backstagePasses(item);
      this.agedBrie(item);
      this.pastSellIn(item);
    }

    return this.items;
  }

  updateItem(item) {
    item.sellIn -= 1;

    if (item.quality > 0) {
      item.quality -= 1;
    }
  }

  pastSellIn(item) {
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 1;
    }
  }

  backstagePasses(item) {
    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sellIn <= 10) {
        item.quality += 1;
      }
      if (item.sellIn <= 5) {
        item.quality += 1;
      }
    }
  }
  agedBrie(item) {
    if (item.name == "Aged Brie") {
      item.quality += 2;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
