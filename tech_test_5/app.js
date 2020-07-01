// Represent a 3x3 Rubik's Cube in a Program
// The problem is how might you represent a Rubik's Cube in a program such that you can query the state of the cube (i.e. what colours are where) and perform rotations on the cube mixing colours up appropriately. 

// The things we would like you to consider are: 
// * the data structure(s) representing the cube and its parts 
// * how to perform rotations on those data structures 
// * how you could test your proposed solution 
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// F — Front
// R — Right
// U — Upper
// B — Back
// D — Bottom(Down)

// A single letter means you rotate that face of the cube clockwise. 
// A single quote after the letter (') mean you move that face counter clockwise.
// A number 2 after the letter means you move that face on the cube twice.

// There are 6 different moves by letter, and 3 different moves of each of them. A single clockwise move (F), a double move (F2), and single counter clockwise move (F’).

// First we need to scramble it.
// A scramble is a sequence of 20 (God’s Number) moves that are performed on a solved cube.



const makeScramble = () => {
    const options = ["F", "F2", "F'", "R", "R2", "R'", "U", "U2", "U'", "B", "B2", "B'", "L", "L2", "L'", "D", "D2", "D'"]; // set of moves
    const numberOptions = [0, 1, 2, 3, 4, 5]; // 0 = F, 1 = R, 2 = U, 3 = B, 4 = L, 5 = D
    let scramble = []; // scramble of numbers will go in there
    let scrambleMoves = []; // scramble of letters will go in there
    let badMove = true;

    while (badMove) {
        scramble = [];
        for (let i = 0; i < 20; i++) {   //sequence of 20 moves that are performed on a solved cube
            scramble.push(numberOptions[getRandomNumber(6)]);
        }
        // check if moves directly next to each other has the same letter
        for (let i = 0; i < 20 - 1; i++) {
            if (scramble[i] == scramble[i + 1]) {
                badMove = true;
                break
            } else {
                badMove = false;
            }
        }
    }
    console.log(scramble);

    // switch numbers to letters
    let move;
    for (let i = 0; i < 20; i++) {
        switch (scramble[i]) {
            case 0:
                move = options[getRandomNumber(3)]; // 0,1,2
                scrambleMoves.push(move);
                break;
            case 1:
                move = options[getRandomNumberBetween(3, 6)]; // 3,4,5
                scrambleMoves.push(move);
                break;
            case 2:
                move = options[getRandomNumberBetween(6, 9)]; // 6,7,8
                scrambleMoves.push(move);
                break;
            case 3:
                move = options[getRandomNumberBetween(9, 12)]; // 9,10,11
                scrambleMoves.push(move);
                break;
            case 4:
                move = options[getRandomNumberBetween(12, 15)]; // 12,13,14
                scrambleMoves.push(move);
                break;
            case 5:
                move = options[getRandomNumberBetween(15, 18)]; // 15,16,17
                scrambleMoves.push(move);
                break;
        }
    }
    console.log(scrambleMoves)
}

makeScramble();

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max)) // returns up to max - 1
}

function getRandomNumberBetween(min, max) { // return a number from min to max - 1. Ex. 3, 9 returns 3 - 8
    return Math.floor(Math.random() * (max - min) + min)
}