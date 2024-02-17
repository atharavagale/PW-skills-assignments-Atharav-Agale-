function calculateSum(num1, num2) {
    console.log(result); // Logs undefined due to hoisting
    var result = num1 + num2;
    console.log(result); // Logs the actual sum
    return result;
}

calculateSum(3, 7);
