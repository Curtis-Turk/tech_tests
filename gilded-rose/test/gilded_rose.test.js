const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should be able to add an item", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});
