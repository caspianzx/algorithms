// Note: Recursive Bubble Sort has no performance/implementation advantages, but can be a good question to check one’s understanding of Bubble Sort and recursion
// https://www.geeksforgeeks.org/recursive-bubble-sort/

// Recursion Idea.
//
// Base Case: If array size is 1, return.
// Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
// Recur for all elements except last of current subarray.


// A function to implement
// bubble sort
function bubbleSort(arr, n) {

    // Base case. important
    if (n === 1) return;

    // One pass of bubble
    // sort. After this pass,
    // the largest element
    // is moved (or bubbled)
    // to end.

    for (let i = 0; i < n - 1; i++) {
        // if current is more than next
        if (arr[i] > arr[i + 1]) {

            // swap arr[i], arr[i+1]
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    // Largest element is fixed, whicn is similar to iterative bubble sort after one pass
    // recur for remaining array
    // n - 1 will be used to restrict array size loop. similar to n - i - 1 in iterative version
    bubbleSort(arr, n - 1);
}

const arr = [10, 4, 6, 12 ,2, 1, 65, 7]

bubbleSort(arr, 8)

console.log(arr)