# MongoDB $inc operator with string field
This repository demonstrates a common error in MongoDB when using the `$inc` operator with a string field. The `$inc` operator is designed for incrementing numeric fields. Attempting to use it on a string field will result in an error.

## Bug
The `bug.js` file contains the incorrect code that causes the error.

## Solution
The `bugSolution.js` file shows the corrected code. To fix this, ensure the field you are incrementing is of numeric type (e.g., NumberInt or NumberLong) before applying the `$inc` operator.  Consider using `$set` instead to update if a number is not stored.