
// Time Complexity: O(n2) as there are two nested loops.
// what is xp and yp. so hard to read
function swap(arr,j, i) {
    let temp = arr[j];

    // the smaller number j will swap with i
    arr[j] = arr[i];
    arr[i] = temp;
}

function selectionSort(arr, n) {
    // this is minimal index. loop will keep incrementing it to reduce and restrict the boundaries of the array.
    // e.g 0 - n, 1- n, 2- n
    let min_index;

    // One by one move boundary of unsorted subarray
    // Find the minimum element in unsorted array
    for (let i = 0; i < n-1; i++) {
        min_index = i;

        // nested loop to compare min index with the rest
        for (let j = i + 1; j < n; j++) {

            // if j is smaller than min index..
            // need to swap
            if (arr[j] < arr[min_index]) {

                // updating min index because the next j loop will compare to this to make sure it is smaller than min_index
                // also need to update cos after swapping, the index of the number that we are comparing will change
                min_index = j;

                // shouldn't i just pass in j?
                swap(arr,min_index, i);
            }
        }
    }
}

// e.g array of  5 2 6 7 1 0

// FIRST I LOOP
// loop with min index 0 initially
// compare 5 to the rest with nested j loop
// 2 is lesser than 5
// swap 2 and 5 position
// 2 5 6 7 1 0
//  update min_index to 1 as num 5 has been swapped to index 1

// next nested j loop will compare num 6 to arr[min_index], which will still be 5

// nothing happens for 6 and 7 cos it is bigger than arr[min_index], num 5

// 1 is smaller than 5

// update min_index to 4
// swap num 1 and 2 cos we are still at i = 0
// 1 5 6 7 2 0

// continue j loop
// 0 is lesser than arr[min_index] num 2
// swap

// 0 5 6 7 2 1

// END OF FIRST LOOP
// smallest number is not at the from

// 2ND LOOP
// no longer look at zero index as we can be sure it is the smallest number

// REPEAT PROCESS
