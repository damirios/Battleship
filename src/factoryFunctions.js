const shipFactory = function(length, shipBlocks = []) {
    let ship = {};
    ship.length = length;
    ship.hitBlocks = shipBlocks;

    // fill hitBlocks property with falses, because these blocks does not hit initially
    for (let i = 0; i < length; i++) {
        ship.hitBlocks.push(false);
    }
    
    ship.hit = (position) => {
        if ( position < length ) {
            if ( ship.hitBlocks[position] == false ) {
                ship.hitBlocks[position] = true;
            }
        }
    }
    
    ship.isSunk = () => {
        let isSunk = true;
        for (let i = 0; i < ship.hitBlocks.length; i++) {
            if ( ship.hitBlocks[i] == false ) {
                isSunk = false;
                break;
            }
        }
        return isSunk;
    }

    return ship;
}

const gameboardFactory = function() {
    let gameboard = {};
    // gamefield property consists playing field 10x10. Initially it is empty - each square is ""
    gameboard.gamefield = [];
    for (let i = 0; i < 10; i++) {
        gameboard.gamefield[i] = [];
        for (let j = 0; j < 10; j++) {
            gameboard.gamefield[i][j] = "";
        }
    }

    // place a ship in gamefield
    gameboard.addShip = function(length, align, x0, y0) {
        console.log(this.gamefield);
        if (length > 0) {

            if (align == "horizontal") {

                if (length + y0 > 10 || x0 < 0 || y0 < 0) {
                    return "incorrect place"; // WRITE INCORRECT PLACE FUNCTION HERE
                } else { 

                    let isAnyBlockOccupied = false;
                    for (let i = 0; i < length; i++) {
                        if ( gameboard.gamefield[x0][y0 + i] == "ship block" || gameboard.gamefield[x0][y0 + i] == "adjoining block" ) {
                            isAnyBlockOccupied = true;
                            break;
                        }
                    }

                    if (isAnyBlockOccupied) {
                        return "cannot place the ship here because of another ship"; // WRITE A FUNCTION
                    } else {// all checks passed, we can place a ship and mark adjoining blocks

                        // firstly mark adjoining blocks
                        // common side blocks
                        if (y0 + length <= 9) {
                            gameboard.gamefield[x0][y0 + length] = "adjoining block";
                        }
                        if (y0 != 0) {
                            gameboard.gamefield[x0][y0 - 1] = "adjoining block";
                        }
                        for (let i = 0; i < length; i++) {
                            if (x0 == 0) {
                                gameboard.gamefield[x0 + 1][y0 + i] = "adjoining block";  
                            } else if (x0 == 9) {
                                gameboard.gamefield[x0 - 1][y0 + i] = "adjoining block"; 
                            } else {
                                gameboard.gamefield[x0 - 1][y0 + i] = "adjoining block"; 
                                gameboard.gamefield[x0 + 1][y0 + i] = "adjoining block"; 
                            }
                        }

                        if (x0 == 0) {
                            // corner blocks
                            if (y0 == 0) {
                                gameboard.gamefield[x0 + 1][y0 + length] = "adjoining block";
                            } else if (y0 == 9) { // 1 block ship only avaliable in this case
                                gameboard.gamefield[x0 + 1][y0 - 1] = "adjoining block";
                            } else {
                                gameboard.gamefield[x0 + 1][y0 - 1] = "adjoining block";
                                if (y0 + length <= 9) {
                                    gameboard.gamefield[x0 + 1][y0 + length] = "adjoining block";
                                }
                            }
                        } else if (x0 == 9) {
                            // corner blocks
                            if (y0 == 0) {
                                gameboard.gamefield[x0 - 1][y0 + length] = "adjoining block";
                            } else if (y0 == 9) { // 1 block ship only avaliable in this case
                                gameboard.gamefield[x0 - 1][y0 - 1] = "adjoining block";
                            } else {
                                gameboard.gamefield[x0 - 1][y0 - 1] = "adjoining block";
                                if (y0 + length <= 9) {
                                    gameboard.gamefield[x0 - 1][y0 + length] = "adjoining block";
                                }
                            }
                        } else {
                            // corner blocks
                            if (y0 == 0) {
                                gameboard.gamefield[x0 - 1][y0 + length] = "adjoining block";
                                gameboard.gamefield[x0 + 1][y0 + length] = "adjoining block";
                            } else if (y0 == 9) { // 1 block ship only avaliable in this case
                                gameboard.gamefield[x0 - 1][y0 - 1] = "adjoining block";
                                gameboard.gamefield[x0 + 1][y0 - 1] = "adjoining block";
                            } else {
                                gameboard.gamefield[x0 - 1][y0 - 1] = "adjoining block";
                                gameboard.gamefield[x0 + 1][y0 - 1] = "adjoining block";
                                if (y0 + length <= 9) {
                                    gameboard.gamefield[x0 - 1][y0 + length] = "adjoining block";
                                    gameboard.gamefield[x0 + 1][y0 + length] = "adjoining block";
                                }
                            }
                        }
                        // secondly place ship in its place
                        for (let i = 0; i < length; i++) {
                            gameboard.gamefield[x0][y0 + i] = "ship block";
                        }
                    }
                }

            } else if (align == "vertical") {
                if (+length + x0 > 10 || x0 < 0 || y0 < 0) {
                    return "incorrect place"; // WRITE INCORRECT PLACE FUNCTION HERE
                } else {

                    let isAnyBlockOccupied = false;
                    for (let i = 0; i < length; i++) {
                        if ( gameboard.gamefield[x0 + i][y0] == "ship block" || gameboard.gamefield[x0 + i][y0] == "adjoining block" ) {
                            isAnyBlockOccupied = true;
                            break;
                        }
                    }

                    if (isAnyBlockOccupied) {
                        return "cannot place the ship here because of another ship"; // WRITE A FUNCTION
                    } else { // all checks passed, we can place a ship and mark adjoining blocks

                        // firstly mark adjoining blocks
                        // common side blocks
                        if (x0 + length <= 9) {
                            gameboard.gamefield[x0 + length][y0] = "adjoining block";
                        }
                        if (x0 != 0) {
                            gameboard.gamefield[x0 - 1][y0] = "adjoining block";
                        }
                        for (let i = 0; i < length; i++) {
                            if (y0 == 0) {
                                gameboard.gamefield[x0 + i][y0 + 1] = "adjoining block";  
                            } else if (y0 == 9) {
                                gameboard.gamefield[x0 + i][y0 - 1] = "adjoining block"; 
                            } else {
                                gameboard.gamefield[x0 + i][y0 - 1] = "adjoining block"; 
                                gameboard.gamefield[x0 + i][y0 + 1] = "adjoining block"; 
                            }
                        }

                        if (y0 == 0) {
                            // corner blocks
                            if (x0 == 0) {
                                gameboard.gamefield[x0 + length][y0 + 1] = "adjoining block";
                            } else if (x0 == 9) { // 1 block ship only avaliable in this case
                                gameboard.gamefield[x0 - 1][y0 + 1] = "adjoining block";
                            } else {
                                gameboard.gamefield[x0 - 1][y0 + 1] = "adjoining block";
                                if (x0 + length <= 9) {
                                    gameboard.gamefield[x0 + length][y0 + 1] = "adjoining block";
                                }
                            }
                        } else if (y0 == 9) {
                            // corner blocks
                            if (x0 == 0) {
                                gameboard.gamefield[x0 + length][y0 - 1] = "adjoining block";
                            } else if (x0 == 9) { // 1 block ship only avaliable in this case
                                gameboard.gamefield[x0 - 1][y0 - 1] = "adjoining block";
                            } else {
                                gameboard.gamefield[x0 - 1][y0 - 1] = "adjoining block";
                                if (x0 + length <= 9) {
                                    gameboard.gamefield[x0 + length][y0 - 1] = "adjoining block";
                                }
                            }
                        } else {
                            // corner blocks
                            if (x0 == 0) {
                                gameboard.gamefield[x0 + length][y0 - 1] = "adjoining block";
                                gameboard.gamefield[x0 + length][y0 + 1] = "adjoining block";
                            } else if (x0 == 9) { // 1 block ship only avaliable in this case
                                gameboard.gamefield[x0 - 1][y0 - 1] = "adjoining block";
                                gameboard.gamefield[x0 - 1][y0 + 1] = "adjoining block";
                            } else {
                                gameboard.gamefield[x0 - 1][y0 - 1] = "adjoining block";
                                gameboard.gamefield[x0 - 1][y0 + 1] = "adjoining block";
                                if (x0 + length <= 9) {
                                    gameboard.gamefield[x0 + length][y0 - 1] = "adjoining block";
                                    gameboard.gamefield[x0 + length][y0 + 1] = "adjoining block";
                                }
                            }
                        }
                        // secondly place ship in its place
                        for (let i = 0; i < length; i++) {
                            gameboard.gamefield[x0 + i][y0] = "ship block";
                        }
                    }
                }
            }

        }
        return "ship is added"; // WRITE A FUNCTION
    }

    // reset gamefield
    gameboard.reset = function() {
        for (let i = 0; i < 10; i++) {
            this.gamefield[i] = [];
            for (let j = 0; j < 10; j++) {
                this.gamefield[i][j] = "";
            }
        }
    }
    
    return gameboard;
}

// export {shipFactory, gameboardFactory}

module.exports = {shipFactory, gameboardFactory};