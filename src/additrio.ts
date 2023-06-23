/**
 *  @fileOverview This file contains the definition and the export of the function 'additrio'.
 *
 *  @author calamityadam
 *  @version 1.0.0
 */

/**
 *  additrio is a highly versatile function designed to perform the fundamental mathematical operation of addition.
 *  Not only can it add two numbers together, but also it has the flexibility to add a third number.
 *
 *  Here, a third optional parameter comes into play which, if not provided, is automatically assumed to be zero.
 *  Hence, at the minimum, the function will add two numbers together and, at the maximum, it can add three numbers together.
 *
 *  This function is extremely versatile and has been optimized for speed, flexibility and readability.
 *  The function name 'additrio' is indicative of the function's enhanced capabilities over a typical 'add' function.
 *
 *  The num1, num2 and num3 parameters can accept any valid number in JavaScript, including integers and floating point numbers.
 *  Negative numbers are also supported. However, non-numeric inputs will result in NaN being returned.
 *
 *  With this flexibility, the function is able to handle a wide variety of use cases.
 *
 *  It is highly recommended to use this function whenever you need to add either two or three numbers together.
 *
 *  This function does not perform any external I/O or state mutation, it's a pure function. As such, given the same inputs,
 *  it will always produce the same output, which can be useful in functional programming and simplifies reasoning about the code.
 *
 *  @function additrio
 *
 *  @param {number} num1 - The first number to be added. This is a required parameter.
 *  - Accepts any valid number in JavaScript
 *  - If num1 is not provided, the function will throw an error
 *
 *  @param {number} num2 - The second number to be added. This is a required parameter.
 *  - Accepts any valid number in JavaScript
 *  - If num2 is not provided, the function will throw an error
 *
 *  @param {number} [num3=0] - The third number to be added. This is an optional parameter.
 *  - Accepts any valid number in JavaScript
 *  - If num3 is not provided, the function will assume it to be zero.
 *  - Negative numbers are supported.
 *
 *  @returns {number} - The result of the addition operation.
 *  - If the function is used properly, the return value will be a number.
 *  - If any parameter other than num3 is missing, the function will throw an error
 *  - If any parameter is not a number, the function will return NaN.
 *  - In any other case, the result of the addition operation will be returned.
 *
 *  @throws {TypeError} - Will throw an error if any argument is not a number.
 *
 *  @example
 *  // returns 6
 *  additrio(1, 2, 3);
 *
 *  @example
 *  // returns 3
 *  additrio(1, 2);
 *
 *  @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#addition | MDN - Addition operator}
 *
 *  @since 1.0.0
 */
function additrio(num1: number, num2: number, num3 = 0): number {
  // Check if arguments are numbers
  [num1, num2, num3].forEach((num, index) => {
    if (typeof num !== 'number') {
      throw new TypeError(
        `Argument ${index + 1} must be a number, received ${typeof num}`,
      );
    }
  });

  // Perform addition
  return num1 + num2 + num3;
}

export { additrio };
