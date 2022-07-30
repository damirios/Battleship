const factories = require("../factoryFunctions");

const gameboardFactory = factories.gameboardFactory;
const gameboard = gameboardFactory();

test("random square of 10x10 gamefield is empty initially", () => {
    expect(gameboard.gamefield[2][5]).toBe("");
});

test("try to place a ship in wrong place (too right)", () => {
    expect(gameboard.addShip(2, "horizontal", 5, 9)).toBe("incorrect place");
});

test("try to place a ship in wrong place (too low)", () => {
    expect(gameboard.addShip(4, "vertical", 7, 4)).toBe("incorrect place");
});

test("place a ship in correct place", () => {
    expect(gameboard.addShip(3, "horizontal", 3, 4)).toBe("ship is added");
    expect(gameboard.gamefield[3][6]).toBe("ship block");
});

test("place a ship within gamefield but place is occupied (or touching) with another ship", () => {
    gameboard.addShip(3, "horizontal", 3, 4); // add first ship
    expect(gameboard.addShip(4, "vertical", 1, 5)).toBe("cannot place the ship here because of another ship"); // trying to add another ship that crosses first ship
});

test("testing receive attack function", () => {
    gameboard.addShip(2, "vertical", 0, 5);
    gameboard.receiveAttack(1, 5);
    gameboard.receiveAttack(2, 5);
    expect(gameboard.gamefield[1][5]).toBe("hit");
    expect(gameboard.gamefield[2][5]).toBe("miss");
});

test("are all ships sunk", () => {
    gameboard.reset();
    gameboard.addShip(3, "horizontal", 3, 7);
    gameboard.addShip(4, "vertical", 0, 0);
    gameboard.receiveAttack(3, 7);
    gameboard.receiveAttack(3, 8);
    gameboard.receiveAttack(3, 9);
    expect(gameboard.areAllShipsSunk()).toBe(false);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);
    expect(gameboard.areAllShipsSunk()).toBe(false);
    gameboard.receiveAttack(3, 0);
    expect(gameboard.areAllShipsSunk()).toBe(true);
});