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

      switch (item) {
        case item.name == "Sulfuras, Hand of Ragnaros":
          break;
        case item.name.match(/Backstage.*/):
          this.backstagePasses(item);
          break;
        case item.name == "Aged Brie":
          this.agedBrie(item);
          break;
        default:
          item.sellIn -= 1;
          item.quality -= 1;
          this.pastSellIn(item);
      }
      // if (item.name == "Sulfuras, Hand of Ragnaros") {
      //   continue;
      // }

      // item.sellIn -= 1;

      // if (item.quality > 0) {
      //   item.quality -= 1;
      // }

      // if (item.name.match(/Backstage.*/)) this.backstagePasses(item);
      // if (item.name == "Aged Brie") this.agedBrie(item);

      // if (item.quality >= 50) {
      //   item.quality = 50;
      // }
    }

    return this.items;
  }

  pastSellIn(item) {
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 1;
    }
  }

  agedBrie(item) {
    if (item.sellIn < 0) {
      item.quality += 3;
    } else {
      item.quality += 2;
    }
  }

  backstagePasses(item) {
    if (item.sellIn <= 10) {
      item.quality += 1;
    }
    if (item.sellIn <= 5) {
      item.quality += 1;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
