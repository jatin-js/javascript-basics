async function selectionSort() {
    if (!looping) {
        return;
    }

    if (valueArray[j] < valueArray[pos]) {
        pos = j;
    }

    j++;

    if (j >= n) {
        await swap(i, pos);
        stateArray[i] = -1;
        i++;
        pos = i;
        j = i;
    }

    if (i >= n - 1) {
        finishedSorting();
        return;
    }

    stateArray[pos] = 1;
    await visualize();
    stateArray[pos] = 0;
}