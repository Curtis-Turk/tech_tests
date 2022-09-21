const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should be able to add an item", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    expect(gildedRose.items[0].name).toBe("foo");
    expect(gildedRose.items[0].sellIn).toBe(0);
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("should be able to add multiple items", () => {
    const items = [new Item("foo", 0, 0), new Item("bar", 0, 0)];
    const gildedRose = new Shop(items);
    expect(gildedRose.items[0].name).toBe("foo");
    expect(gildedRose.items[1].name).toBe("bar");
  });
  it("should decrease the quality of an item if updateQuality is called", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("should decrease the quality of an item if updateQuality is called twice", () => {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("should decrease the sellIn of an item if updateQuality is called", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(0);
  });
  it("should decrease the sellIn of an item if updateQuality is called", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(-1);
  });
  it("shouldn't decrease the quality of an item past 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
});
