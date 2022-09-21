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

  updateSellIn(item) {
    item.sellIn = item.sellIn - 1;
  }

  backstagePasses(item) {
    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sellIn <= 10 && item.quality < 50) {
        item.quality += 1;
      }
      if (item.sellIn <= 5 && item.quality < 50) {
        item.quality += 1;
      }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name == "Sulfuras, Hand of Ragnaros") {
        continue;
      }
      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      } else {
        if (item.quality < 50) {
          this.backstagePasses(item);
          item.quality = item.quality + 1;
        }
      }
      this.updateSellIn(item);
      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (item.quality > 0) {
              item.quality = item.quality - 1;
            }
          }
        }
      }
    }

    return this.items;
  }
  specialItems() {}
}

module.exports = {
  Item,
  Shop,
};
