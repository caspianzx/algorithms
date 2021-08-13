class Solution {

    searchInSorted(arr, N, K)
    {
        let start = 0
        let end = N -1

        while (start <= end) {
            let mid = Math.floor((start + end) / 2)

            if (arr[mid] === K) {
                return 1

                // if k is lesser than mid, the end will have to before mid
            } else if (arr[mid] > K) {
                end = mid - 1

                // if k is higher than mid, change the start to after mid
            } else {
                start = mid + 1
            }
        }

        return -1
    }
}