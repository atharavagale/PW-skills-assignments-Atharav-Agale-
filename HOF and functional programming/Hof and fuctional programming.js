const input = "hello";

setTimeout(() => {
    const reversed = input.split("").reverse().join("");
    console.log(reversed);
}, 2000);
