// Quick Sort
function quicksort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    const pivot = arr[0];

    const left = arr.slice(1).filter(el => el <= pivot);
    const right = arr.slice(1).filter(el => el > pivot);

    return quicksort(left).concat(pivot).concat(quicksort(right));
};

console.log(
  "quicksort([ 1, 3, 32, 1, 2, 34, 1, 24 ]) => ",
  quicksort([1, 3, 32, 1, 2, 34, 1, 24])
);

// Merge Sort

function merge(left, right) {
    const sorted = [];

    while(left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return sorted.concat(left).concat(right);
};

function mergesort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    
    return merge(mergesort(arr.slice(0, parseInt(arr.length/2))), mergesort(arr.slice(parseInt(arr.length/2))));
}

console.log(
  "mergesort([ 1, 3, 32, 1, 2, 34, 1, 24 ]) => ",
  mergesort([1, 3, 32, 1, 2, 34, 1, 24])
);

