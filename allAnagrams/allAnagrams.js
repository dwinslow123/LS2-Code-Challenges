/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array.
 */

/**
  * example usage:
  * const anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  

  const allAnagrams = (arr) => {
    let newString = arr.length;
    for (var i = newString - 1; i >= 0; i--) {
      for (var x = 1; x <= i; x++) {
        if (arr[x - 1] > arr[x]) {
          let newString = arr[i - 1];
          arr[x - 1] = arr[x];
          arr[x] = newString;
        }
      }
    }
    return arr;
  };

  console.log(allAnagrams('a ','b','c','d'));