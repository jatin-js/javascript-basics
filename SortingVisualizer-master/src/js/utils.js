async function swap(a, b, toSleep) {
    if (toSleep != undefined && toSleep == true) {
        await sleep(1000 / fps);
    }
    swaps++;

    [valueArray[a], valueArray[b]] = [valueArray[b], valueArray[a]];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function resetStates() {
    for (let i = 0; i < stateArray.length; i++) {
        stateArray[i] = 0;
    }
    await visualize();
}

function map(x, a, b, p, q) {
    let slope = (q - p) / (b - a);
    return p + slope * (x - a);
}

function noLoop() {
    if (loopID) {
        clearInterval(loopID);
    }
    loopID = undefined;
}

function finishedSorting() {
    noLoop();
    if (looping == false) {
        sorted = false;
    }
    else {
        sorted = true;
    }
    looping = false;
    stateArray.length = 0;
    visualize();
}

async function setSize(w, h) {
    // if (w != undefined && h != undefined) {
    //     width = w;
    //     height = h;
    // }
    // else {
        // width = (window.innerWidth * widthRatio) - ((window.innerWidth * widthRatio) % scale);
        width = window.innerWidth*0.9;
        height = window.innerHeight * 0.6;
    // }
    canvas.width = width;
    canvas.height = height;
}

function randInt(low, high) {
    return Math.floor(Math.random() * (high - low)) + low;
}

async function initializeArray() {
    let arrayInit = document.getElementById('arrayInit').value;

    // Reseting the value array and active array
    valueArray.length = stateArray.length = 0;

    // Getting the number of elements
    n = Math.floor(width / scale);
    setSize(n * scale, height);

    stateArray = new Array(n).fill(0);

    let low = 20;
    let high = height;

    // Populating the array based on user input
    if (arrayInit == "random") {
        for (let i = 0; i < n; i++) {
            valueArray.push(randInt(low, high));
        }
    }
    else if (arrayInit == "sorted") {
        for (let i = 0; i < n; i++) {
            valueArray.push(Math.floor(map(i, 0, n - 1, low, high)));
        }
    }
    else if (arrayInit == "revSorted") {
        for (let i = 0; i < n; i++) {
            valueArray.push(Math.floor(map(i, 0, n - 1, high, low)));
        }
    }
    else if (arrayInit == "incDec") {
        let i = 0;
        let tempArray = [];
        if (n % 2 == 1) {
            for (; i < parseInt(n / 2) + 1; i++) {
                tempArray.push(Math.floor(map(i, 0, parseInt(n / 2), low, high)));
            }
            valueArray = [...tempArray];
            tempArray.pop();
            tempArray.reverse();
            valueArray = valueArray.concat(tempArray);
        }
        else {
            for (; i < parseInt(n / 2); i++) {
                tempArray.push(Math.floor(map(i, 0, parseInt(n / 2) - 1, low, high)));
            }
            valueArray = [...tempArray];
            tempArray.reverse();
            valueArray = valueArray.concat(tempArray);
        }
    }
    else if (arrayInit == "decInc") {
        let i = 0;
        let tempArray = [];
        if (n % 2 == 1) {
            for (; i < parseInt(n / 2) + 1; i++) {
                tempArray.push(Math.floor(map(i, 0, parseInt(n / 2), high, low)));
            }
            valueArray = [...tempArray];
            tempArray.pop();
            tempArray.reverse();
            valueArray = valueArray.concat(tempArray);
        }
        else {
            for (; i < parseInt(n / 2); i++) {
                tempArray.push(Math.floor(map(i, 0, parseInt(n / 2) - 1, high, low)));
            }
            valueArray = [...tempArray];
            tempArray.reverse();
            valueArray = valueArray.concat(tempArray);
        }
    }
}

async function setSortingFunction() {
    let sortingChoiceVal = document.getElementById('sortingFunction').value;
    if (sortingChoiceVal == "bubble") {
        sortingFunction = bubbleSort;
        i = j = 0;
    }
    else if (sortingChoiceVal == "optiBubble") {
        sortingFunction = optimizedBubbleSort;
        i = j = swaps = 0;
    }
    else if (sortingChoiceVal == "selection") {
        sortingFunction = selectionSort;
        i = j = pos = 0;
    }
    else if (sortingChoiceVal == "insertion") {
        sortingFunction = insertionSort;
        i = 1;
        j = 0;
        value = valueArray[1];
    }
    else if (sortingChoiceVal == "quick") {
        // pauseBtn.classList.add("disabled");
        sortingFunction = quickSort;
    }
    else if (sortingChoiceVal == "merge") {
        // pauseBtn.classList.add("disabled");
        sortingFunction = mergeSort;
    }

}

async function visualize() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < valueArray.length; i++) {
        if (sorted) {
            context.fillStyle = sortedColor;
        }
        else if (stateArray[i] == 1) {
            context.fillStyle = activeColor1;
        }
        else if (stateArray[i] == 2) {
            context.fillStyle = activeColor2;
        }
        else if (stateArray[i] == 3) {
            context.fillStyle = activeColor3;
        }
        else if (stateArray[i] == -1) {
            context.fillStyle = sortedColor;
        }
        else {
            context.fillStyle = valueColor;
        }
        context.fillRect(i * scale + offset, height, scale - (2 * offset), - valueArray[i]);
        context.lineWidth = (scale < 15) ? 0.1 : 0.4;
        context.strokeRect(i * scale + offset, height, scale - (2 * offset), - valueArray[i]);
    }
}

function startButton() {
    if (looping) {
        return;
    }
    looping = true;
    animate();
}

function pauseButton() {
    looping = false;
    noLoop();
}

function resetButton() {
    noLoop();
    initialize();
}


function getFps() {
    fps = parseInt(map(parseInt(document.getElementById('speedRange').value), 0, 100, 1, 60));
    if (sortingFunction == quickSort) {
        return;
    }
    if (looping == true) {
        animate();
    }
}

async function getScale() {
    scale = parseInt(map(parseInt(document.getElementById("arraySizeRange").value), 0, 100, 80, 5));
}


//


let scale = 50;
let fps = 50;
const offset = 0; // this controls the space between the drawn rectangles
const widthRatio = 0.9;
const heightRatio = 0.6;

let canvas = document.getElementById('main-canvas');
let context = canvas.getContext('2d');
let height, width;
setSize();

// const backgroundColor = "#222222";
const activeColor1 = "yellow";
const activeColor2 = "blue";
const activeColor3 = "orange";
const valueColor = "red";
const sortedColor = "green";

const resetBtn = document.getElementById("resetSorting");
const pauseBtn = document.getElementById('pauseSorting');
const speedRan = document.getElementById('speedRange');

let valueArray = [];
let stateArray = [];
// array State lookup:
//  1 - active1
//  2 - active2
// -1 - sorted
//  0 - nothing

let i, j, value, swaps, start, end;

let looping = false;
let sorted = true;

let sortingFunction;
let loopID;

async function initialize() {
    noLoop();
    await getScale();
    await setSize();

    looping = sorted = false;

    await initializeArray();
    await setSortingFunction();
    await visualize();
}
window.onresize = initialize;

async function animate() {
    if (sorted) {
        return;
    }
    looping = true;

    // Recursive sorting algorithms
    if ((sortingFunction == quickSort || sortingFunction == mergeSort) && !sorted) {
        if (sortingFunction == mergeSort) {
            speedRan.disabled = true;
        }
        loopID = setInterval(visualize, 1000 / fps);
        await sortingFunction(0, valueArray.length - 1);

        // Sort was interrupted before finishing
        if (looping == false) {
            await sleep(250);
            finishedSorting();
        }
        else {
            finishedSorting();
        }

        speedRan.disabled = false;
    }
    // Iterative sorting algorithms
    else {
        noLoop();
        loopID = setInterval(sortingFunction, 1000 / fps);
    }
}

initialize();