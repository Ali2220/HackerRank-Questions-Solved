// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1+3+5+7=16  and the maximum sum is 3+5+7+9=24 . The function prints: 16 24
// Tumhein 5 numbers diye gaye hain.
// Tumhein sirf 4 numbers ka sum nikaalna hai.
// Minimum sum = total sum − max element
// Maximum sum = total sum − min element
function miniMaxSum(arr) {
    let max = arr[0]
    let min = arr[0]
    let total = 0

    for(let i = 0; i < arr.length; i++){
        total = total + arr[i]
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
    }

    console.log(total - max, total - min);
    

}

miniMaxSum([1,3,5,7,9])