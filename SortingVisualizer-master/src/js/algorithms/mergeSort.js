async function mergeSort(low, high) {
    if (!looping) {
        // interrupted
        return false;
    }
    if (low >= high) {
        // sorted
        return true;
    }

    let mid = low + parseInt((high - low) / 2);
    await mergeSort(low, mid);
    await mergeSort(mid + 1, high)
    await merge(low, mid, high);
}

async function merge(low, mid, high) {
    if (!looping) {
        return false;
    }
    let start = low;
    let end = high;

    for (let i = start; i <= end; i++) {
        stateArray[i] = 1;
    }

    let low2 = mid + 1;

    if (valueArray[mid] <= valueArray[low2]) {
        stateArray[mid] = 3;
        stateArray[low2] = 3;
        await sleep(1000 / fps);
        stateArray[mid] = 1;
        stateArray[low2] = 1;

        return;
    }


    let actives = [];
    while (low <= mid && low2 <= high && looping) {
        if (valueArray[low] <= valueArray[low2]) {
            stateArray[low] = 3;
            stateArray[low2] = 3;
            actives = [low, low2];
            low++;
        }
        else {
            let value = valueArray[low2];
            let index = low2;
            while (index != low && looping) {
                valueArray[index] = valueArray[index - 1];
                index--;
            }
            valueArray[low] = value;
            low += 1;
            mid += 1;
            low2 += 1;
        }
        await sleep(1000 / fps);
        for (let val of actives) {
            stateArray[val] = 1;
        }
    }

    for (let i = start; i <= end; i++) {
        stateArray[i] = 2;
    }
}