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
      if (item.sellIn <= 10) {
        item.quality += 1;
      }
      if (item.sellIn <= 5) {
        item.quality += 1;
      }
    }
  }

  pastSellIn(item) {
    if (
      item.name != "Aged Brie" ||
      "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.name == "Sulfuras, Hand of Ragnaros" || item.quality == 50) {
        continue;
      }

      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (item.quality > 0) {
          item.quality -= 1;
        }
      } else {
        this.backstagePasses(item);
        item.quality += 1;
      }
      this.updateSellIn(item);

      if (item.sellIn < 0) {
        this.pastSellIn(item);
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
