//To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

// Function to sort an array using insertion sort
const insertionSort = (arr, n) => {
    // NOTE insertion must start from index 1!
    for (let i = 1; i < n; i++) {
        // key is a value and also the marker
        let key = arr[i];

        // j is an index
        // j is the predecessor.
        // j will later be used to figure out where to insert key (the current value comparing)
        let j = i - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        // the comparison of values takes place in the while loop to ensure that the smallest figure is place at the start of the array
        while (j >= 0 && arr[j] > key) {

            // keeps swapping until either j = -1 or arr[j] is less than key then we stop
            arr[j + 1] = arr[j];
            // this will keep j one index before for comparison
            // if j becomes -1 it means the comparison has ended
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

const arr = [3 ,2 , 1]
insertionSort(arr, 3)
console.log(arr)