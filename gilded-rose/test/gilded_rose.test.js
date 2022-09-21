const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
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
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
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
  it("decrease the quality of an item past 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("increase the quality of Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(1);
  });
  it("Can never have an item above 50 quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    for (i = 0; i < 60; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].quality).toBe(50);
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
});
