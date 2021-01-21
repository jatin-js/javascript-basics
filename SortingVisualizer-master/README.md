# Sorting Visualizer
A web-application to visualize the various sorting algorithms made using vanilla JS (no libraries).
> Published at [Sorting Visualizer](https://shreeviknesh.github.io/SortingVisualizer/)
#### Features:
- Choose the Sorting Algorithm
- Choose the Array Initialization method
- Control the Array Size
- Control the Sorting Speed
- Start/Pause/Reset the algorithm

Contents
----
|Sorting Algorithm|Implemented?|
|:-:|:-:|
|[Bubble Sort](#bubble-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Optimized Bubble Sort](#optimized-bubble-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Selection Sort](#selection-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Insertion Sort](#insertion-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Binary Insertion Sort](#binary-insertion-sort)|<img src="https://img.shields.io/badge/-No-FF4136">|
|[Quick Sort](#quick-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Merge Sort](#merge-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|Intro Sort|<img src="https://img.shields.io/badge/-No-FF4136">|
|Gnome Sort|<img src="https://img.shields.io/badge/-No-FF4136">|
|[Bogo Sort](#bogo-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Cocktail Shaker Sort](#cocktail-shaker-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|Heap Sort|<img src="https://img.shields.io/badge/-No-FF4136">|
|Counting Sort|<img src="https://img.shields.io/badge/-No-FF4136">|
|Radix Sort|<img src="https://img.shields.io/badge/-No-FF4136">|

Bubble Sort
----
- Bubble sort is the simplest (and slowest) sorting algorithm.
- It goes through the whole array and swaps adjacent elements if they're in the wrong order. 
- The worst-case time complexity is O(n<sup>2</sup>) even if the array is sorted.
#### Pseudocode:
```python
begin BubbleSort(array):
  for i in [0,n):
    for j in [0,n-i):
      if array[j] > array[j+1]:
        swap(array[j], array[j+1])
      end if
    end for
  end for
end BubbleSort
```
#### Optimized Bubble Sort:
- The algorithm can be optimized to stop if the inner loop does not cause any swaps, i.e., the array is sorted.
- This leads to the best-case time complexity of O(n) and average-case time complexity of O(n<sup>2</sup>).
<!--
#### Pseudocode:
```python
begin BubbleSort(array):
  for i in [0,n):
    swapped = False
    for j in [0,n-i):
      if array[j] > array[j+1]:
        swap(array[j], array[j+1])
        swapped = True
      end if
    end for
    if swapped = False:
      break
    endif
  end for
end BubbleSort
```
-->


Selection Sort
----
- Selection sort splits the array into two: sorted partition and unsorted partition.
- It goes through the unsorted part, finds the minimum element and swaps it with the first element of the unsorted part.
- During each iteration, it finds the minimum element in the unsorted part and puts it to the sorted part.
- The worst-case time complexity is O(n<sup>2</sup>).
- The advantage of selection sort over bubble sort is that it never makes more than O(n) swaps. This can come in handy when memory write is costly.
#### Pseudocode:
```python
begin selectionSort(array):
  for i in (0,n):
    min = i
    for j in (i,n):
      if list[j] < list[min]:
        min = j
      end if
    end for
    if min != i:
      swap(array[min], array[i])
    end if
  end for
end selectionSort
```


Insertion Sort
----
- Insertion sort is a simple sorting algorithm that works the way we sort playing cards.
- For each element from i from 1..n, it inserts it in the sorted array j from 0..i-1
- The worst-case and average-case time complexity is O(n<sup>2</sup>).
- The best-case time complexity is O(n) when the elements are in sorted order.
- It is used when the number of elements in the array is small, or when the input array is almost sorted.
#### Pseudocode:
```python
begin insertionSort(array):
  for i in (0, n): 
    value = array[i]
    j = i - 1
    while j >= 0 and value < array[j]:
      array[j+1] = array[j] 
      j -= 1
    end while
    array[j+1] = value
  end for
end insertionSort
```
#### Binary Insertion Sort:
- The algorithm can be optimized by using binary search to reduce the number of comparisons.
- Thus the comparisons in n<sup>th</sup> iteration decreases from O(n<sup>2</sup>) to O(log n).


Quick Sort
----
- Quick sort is a Divide and Conquer algorithm that picks an element as pivot and partitions the array around the pivot.
- The key process of the algorithm is the `partition()` function. The goal of the partition function, given the array and a pivot element p, place p in the right position in the array with elements < p before p and elements > p after p. This must be done in linear time.
- The time complexity of the the quick sort algorithm greatly depends on the `partition()` function and picking the pivot value.
- The average-case and best-case time complexity of quick sort is O(nlog n).
- The worst-case time complexity of quick sort is O(n<sup>2</sup>).
#### Pseudocode:
```python
begin quickSort(array, low, high):
  if high <= low
    return
  end if
  pivotIndex = partition(array, low, high)
  quickSort(array, low, pivotIndex - 1)
  quickSort(array, pivotIndex + 1, high)   
end quickSort
```
#### Pivot selection strategies:
1. First element as pivot
2. Last element as pivot
3. Median element as pivot
4. Random element as pivot (*Implemented*)
#### Pseudocode - Random Pivot Partition:
```python
begin partition(array, low, high):
  pivot = array[random(low, high)]
  swap(pivot, low)
  pivotIndex = low
  index = low + 1
  for j in (start, end]:
    if array[j] <= array[pivotIndex]:
      swap(index, j)
    end if
  end for
  swap(pivotIndex, index-1)
  return index - 1
end partition
```

Merge Sort
---- 
- Merge sort is also a Divide and Conquer algorithm that divides the array into two halves and recursively calls merge sort on each half.
- The elements are then combined together in sorted order from the sub-arrays.
- The `merge()` function is used to combine the two halves of the array. It is a key process and it assumes that the two subarrays are already in sorted order. Therefore, `merge()` must be invoked only after the sorting of all the subarrays are completed.
- The time complexity of merge sort algorithm in all three cases (worst-case, best-case and average-case) is O(nlog n). Therefore, it is one of the most widely-used sorting algorithms.
- The one major drawback of merge sort is the use of O(n) auxiliary (extra) space. This problem can be solved by using the `merge()` function to combine the elements in-place. *(Implemented)*
#### Pseudocode:
```python
begin mergeSort(array):
  if n == 1:
    return
  end if
  mid = n // 2
  mergeSort(array[:mid])
  mergeSort(array[mid+1:])   
end mergeSort
```

Bogo Sort
----
- Other names include: stupid sort, slow sort, shotgun sort, monkey sort, permutation sort.
- It is a very ineffective sort strategy that with worst-case time complexity of O(∞), average-case time complexity of O(n.n!) and best case time complexity of O(n).
#### Pseudocode:
```python
begin bogoSort(array):
  while not sorted(array):
    shuffle(array)
  end while
end bogoSort
```

Cocktail Shaker Sort
----
- It is a variation of the optimized bubble sort which moves bidirectionally. Also known as "Bidirectional Bubble Sort."
- During each iteration, the algorithm moves the largest element to the end and smallest element to the beginning. Although it improves on bubble sort by quickly moving iterms to the beginning of the array, it provides only marginal performance improvements.
- The worst-case time complexity is O(n<sup>2</sup>) and the best-case time complexity if O(n).
#### Pseudocode:
```python
def cocktailSort(array): 
  swapped = True
  start, end = 0, n - 1
  while swapped:
    swapped = False
    for i in [start, end]: 
      if array[i] > array[i+1]: 
        swap(array[i], array[i+1])
        swapped = True
      end if
    end for
    end--
    if not swapped
      break
    end if
    swapped = False
    for i in (end, start]: 
      if array[i] > array[i+1]:
        swap(array[i], array[i+1])
        swapped = True
      end if
    end for 
    start++
  end while
end cocktailSort
```
