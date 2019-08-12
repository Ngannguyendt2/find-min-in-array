let array1 = [1, 3, 4, 5];
let array2 = [];
let array3 = [2, 1, 4, 2];

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let minArray1 = findMin(array1);
let minArray2 = findMin(array2);
let minArray3 = findMin(array3);
alert('Number min of array1 is ' + minArray1);
alert('Number min of array2 is ' + minArray2);
alert('Number min of array3 is ' + minArray3);