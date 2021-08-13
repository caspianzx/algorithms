// time complexity is O(n^2)
// idea is similar to selection sort to place the smallest number in the front in ascending order...
function swap(arr,j, i) {
    let temp = arr[j];

    // the smaller number j will swap with i
    arr[j] = arr[i];
    arr[i] = temp;
}


// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
    for (let i = 0; i < n-1; i++)  {
        // why n - i?

        // after the first pass, we can assume that the last index is the largest number,
        // hence there is not need to compare again, which is why we limit the array loop with  n-i-1 for every j pass
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr,j,j+1);
            }
        }
    }
}

// or

class Solution {
    //Function to sort the array using bubble sort algorithm.
    bubbleSort(arr,n) {
        //code here
        for (let i = 0; i < n -1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {
                    // stores a temp reference because after i swap arr[j], the value will change
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
    }
}