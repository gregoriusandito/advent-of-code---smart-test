// callback to check adjacent every number
const checkAdjacent = number => number.toString().split('')
    .some((each, i, item) => each == item[i - 1]);

// check possibility of decreased number contains in every number in puzzle range
const decreaseCheck = number => number.toString().split('')
    .every((each, i, item) => {
        const previousItem = item[i - 1] || 0
        return each >= previousItem
    });

// main function to be called - filter by check adjacent & decreased number
const findPossibility = (indexStart, indexEnd, adjacentCheckFunction) => Array
    .from({ length: indexEnd - indexStart + 1 }, (_, i) => indexStart + i)
    .filter(item => adjacentCheckFunction(item) && decreaseCheck(item)).length;

const input = '193651-649729'; // input from Advent of code website
const [ from, to ] = input.split('-');
console.log(findPossibility(+from, +to, checkAdjacent));