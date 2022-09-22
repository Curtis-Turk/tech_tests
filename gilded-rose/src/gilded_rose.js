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

      item.sellIn -= 1;

      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          item.sellIn += 1;
          break;
        case "Aged Brie":
          this.agedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.backstagePasses(item);
          break;
        case "Conjured Mana Cake":
          this.conjuredItem(item);
          break;
        default:
          this.basicItem(item);
          break;
      }
      this.qualityLimit(item);
    }

    return this.items;
  }

  basicItem(item) {
    if (item.sellIn < 0) {
      item.quality -= 2;
    } else {
      item.quality -= 1;
    }
  }

  qualityLimit(item) {
    if (item.quality < 0) item.quality = 0;
  }

  under50Limit(quality) {
    return quality < 50 ? true : false;
  }

  agedBrie(item) {
    if (this.under50Limit(item.quality)) item.quality += 1;
  }

  backstagePasses(item) {
    if (this.under50Limit(item.quality)) {
      if (item.sellIn <= 10) item.quality += 2;
      if (item.sellIn <= 5) item.quality += 1;
    }
    if (item.sellIn <= 0) item.quality = 0;
  }

  conjuredItem(item) {
    this.basicItem(item);
    this.basicItem(item);
  }
}

module.exports = {
  Item,
  Shop,
};
