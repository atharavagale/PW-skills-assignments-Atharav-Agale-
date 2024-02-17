{
    console.log(x); // Logs undefined due to hoisting
    console.log(y); // Logs ReferenceError: Cannot access 'y' before initialization
    console.log(z); // Logs ReferenceError: Cannot access 'z' before initialization

    let x = 10;
    var y = 20;
    const z = 30;

    console.log(x); // Logs 10
    console.log(y); // Logs 20
    console.log(z); // Logs 30
}
