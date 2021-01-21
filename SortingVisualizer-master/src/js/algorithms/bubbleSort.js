async function bubbleSort() {
    if (!looping) {
        return;
    }

    if (valueArray[j] > valueArray[j + 1]) {
        await swap(j, j + 1);
    }

    j++;
    if (j >= n - i - 1) {
        j = 0;
        stateArray[n - i - 1] = -1;
        i++;
    }

    if (i >= n) {
        finishedSorting();
        return;
    }

    // activePositions = [j];
    stateArray[j] = 1;
    await visualize();
    stateArray[j] = 0;
    // await visualize();

}