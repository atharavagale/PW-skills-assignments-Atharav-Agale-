const urlRegex = /^(http:\/\/|https:\/\/)(\w+\.)*\w+$/;

const url = "https://www.example.com";

if (urlRegex.test(url)) {
    console.log("Valid URL");
} else {
    console.log("Invalid URL");
}
