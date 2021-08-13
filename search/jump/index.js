//Works only sorted arrays.
// The optimal size of a block to be jumped is (√ n). This makes the time complexity of Jump Search O(√ n).
// The time complexity of Jump Search is between Linear Search ( ( O(n) ) and Binary Search ( O (Log n) ).
// Binary Search is better than Jump Search, but Jump search has an advantage
// that we traverse back only once (Binary Search may require up to O(Log n) jumps,
// consider a situation where the element to be searched is the smallest element or smaller than the smallest).
// So in a system where binary search is costly, we use Jump Search.

// https://www.geeksforgeeks.org/jump-search/


//What is the optimal block size to be skipped?
// In the worst case, we have to do n/m jumps and if the last checked value is greater than the element to be searched for,
// we perform m-1 comparisons more for linear search. Therefore the total number of comparisons in the worst case will be ((n/m) + m-1).
// maximum number of steps for jumps + linear search ^^
// The value of the function ((n/m) + m-1) will be minimum when m = √n. Therefore, the best step size is m = √n.


// arr = array
// x = number to search
// n = size of array
function jumpSearch(arr, x, n) {
    // Finding optimum block size to be jumped
    let step = Math.sqrt(n);

    // tracks index of the previous step
    let prev = 0;

    // -1 cos zero indexed
    // keep looping if number found is lesser than x

    // key is to find prev and steps index
    // will end if prev is more than size of array
    // will stop and move to next step when arr[step - 1] is finally more than x
    while (arr[step-1] < x) {
        // track prev step
        prev = step;

        // increment next step
        step += Math.sqrt(n);

        // if prev has reached the end of arr then element is not present
        if (prev >= n)
            return -1;
    }

    // Doing a linear search for x in block
    // starts only when arr [ steps -1 ] is more than x
    // beginning with prev.
    while (arr[prev] < x) {

        // increment prev
        prev++;

        // If we reached next block or end of
        // array, element is not present.
        if (prev === step)
            return -1;
    }

    // If element is found
    if (arr[prev] === x) return prev;

    return -1;
}