async function insertionSort() {
    if (!looping) {
        return;
    }

    if (j >= 0 && valueArray[j] > value) {
        valueArray[j + 1] = valueArray[j];
        j--;
    }
    if (j < 0 || valueArray[j] <= value) {
        valueArray[j + 1] = value;
        i++;
        value = valueArray[i];
        j = i - 1;
    }

    if (i >= n) {
        finishedSorting();
        return;
    }

    stateArray[j] = 1;
    stateArray[i] = 1;
    await visualize();
    stateArray[j] = 0;
    stateArray[i] = 0;
}