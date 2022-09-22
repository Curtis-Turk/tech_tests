const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("initialises with an array", () => {
    const gildedRose = new Shop();
    expect(gildedRose.items).toEqual([]);
  });
  it("able to add an item", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    expect(gildedRose.items[0].name).toBe("foo");
    expect(gildedRose.items[0].sellIn).toBe(0);
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("add multiple items", () => {
    const items = [new Item("foo", 0, 0), new Item("bar", 0, 0)];
    const gildedRose = new Shop(items);
    expect(gildedRose.items[0].name).toBe("foo");
    expect(gildedRose.items[1].name).toBe("bar");
  });
  it("decrease the quality of an item if updateQuality is called", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("decrease the quality of an item if updateQuality is called twice", () => {
    const gildedRose = new Shop([new Item("foo", 2, 2)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("decrease the sellIn of an item if updateQuality is called", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(0);
  });
  it("decrease the sellIn of an item if updateQuality is called twice", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(-1);
  });
  it("decrease the quality of an item by two if past sellIn", () => {
    const gildedRose = new Shop([new Item("foo", -1, 2)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("unable to decrease the quality of an item past 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("increase the quality of Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(1);
  });
  it("Can never incerease item quality above 50", () => {
    const gildedRose = new Shop([
      new Item("Aged Brie", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 61, 40),
    ]);
    for (i = 0; i < 60; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].quality).toBe(50);
    expect(gildedRose.items[1].quality).toBe(50);
  });
  it("Backstage passes increases by 2 with under 10 days left", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(2);
  });
  it("Backstage passes increases by 3 with under 5 days left", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(3);
  });
  it("Backstage passes goes to 0 on or after the sellIn", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 50),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[1].quality).toBe(0);
  });
  it("Nothing gets changed for Sulfuras", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 10, 80),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(80);
    expect(gildedRose.items[0].sellIn).toBe(10);
  });
  it("Conjured Items degrade twice as fast", () => {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 10, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(8);
  });
});
