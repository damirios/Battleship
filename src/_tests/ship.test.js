const factories = require("../factoryFunctions");

const shipFactory = factories.shipFactory;

test("one block ship created correctly", () => {
    expect(shipFactory(1).length).toEqual(1);
    expect(shipFactory(1).hitBlocks).toEqual([false]);    
});

test("new ship is not sunk", () => {
    expect(shipFactory(3).isSunk()).toBe(false);
});

test("hit second block of three block ship", () => {
    const ship = shipFactory(3);
    ship.hit(1);
    expect(ship.hitBlocks).toEqual([false, true, false]);
});

test("four block ship will sink if all it's four blocks is hit", () => {
    const ship = shipFactory(4);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(false);
    ship.hit(3);
    expect(ship.isSunk()).toBe(true);
});

