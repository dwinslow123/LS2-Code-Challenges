/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 *
 */

const multiply = (x, y) => {
  let total = 0;

  for (let i = 0; i < x; i++) {
    total += y;
  } 
  return total;
}

console.log(multiply(15000,434));

const divide = (x, y) => {

}

const modulo = (x, y) => {

}