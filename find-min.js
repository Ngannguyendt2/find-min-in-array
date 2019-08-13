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
function showAlert(value)
{
    alert('Number min is ' + value);
}

showAlert(findMin(array1));
showAlert(findMin(array2));
showAlert(findMin(array3));