/*
 * Bubble sort is the most basic sorting algorithm.
 * It compares the first element of an array with the second element.
 * If the first element is greater than the second element then it swaps them.
 * Then it compares the second and third elements and swaps them if the second is larger.
 * Then it compares the third and fourth elements and does the same.
 * This continues and the the larger elements begin to "bubble" towards the end.
 * The loop then restarts and repeats this process until it makes a clean pass
 * without performing any swaps.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * What's the time complexity of your algorithm?  Are there ways you can improve it?
 *
*/

/*
 * Example:
 * bubbleSort([2, 1, 3]); // returns [1, 2, 3]
 *
*/

const bubbleSort = (arr) => {
  let newArray = arr.length;
  for (let i = newArray - 1; i >= 0; i--) {
    for (let x = 1; x <= i; x++) {
      if (arr[x - 1] > arr[x]) {
        let sortedArray = arr[x - 1];
        arr[x - 1] = arr[x];
        arr[x] = sortedArray;
      }
    }
  }
  return arr; 
};

console.log(bubbleSort([2,1,3,12,15,0,-2,8]));