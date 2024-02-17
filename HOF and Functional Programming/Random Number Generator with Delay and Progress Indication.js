let delay = 3;
let remainingTime = delay;

const interval = setInterval(() => {
    remainingTime--;
    console.log(`Generating random number in ${remainingTime} seconds...`);
    if (remainingTime === 0) {
        clearInterval(interval);
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Random number generated: ${randomNumber}`);
    }
}, 1000);
