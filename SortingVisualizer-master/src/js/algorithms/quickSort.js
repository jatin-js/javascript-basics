async function quickSort(start, end) {
    if (!looping) {
        // Sorted
        return;
    }
    if (start >= end) {
        // Interrupted
        return;
    }
    let pivot = await randomPartition(start, end);
    await Promise.all([
        quickSort(start, pivot - 1),
        quickSort(pivot + 1, end)
    ]);
}

async function randomPartition(start, end) {
    let randomPivot = randInt(start, end + 1);
    swap(start, randomPivot);
    return partition(start, end);
}

async function partition(start, end) {
    for (let i = start; i <= end; i++) {
        stateArray[i] = 0;
    }

    let pivot = start;
    let i = start + 1;

    for (let j = start + 1; j <= end && looping; j++) {
        if (valueArray[j] <= valueArray[pivot]) {
            await swap(j, i, true);
            stateArray[i] = 2;
            i++;
            stateArray[i] = 1;
        }
    }

    await swap(pivot, i - 1, true);
    pivot = i - 1;
    for (let j = start; j <= end; j++) {
        stateArray[j] = -1;
    }
    stateArray[i] = -1;
    return pivot;
}