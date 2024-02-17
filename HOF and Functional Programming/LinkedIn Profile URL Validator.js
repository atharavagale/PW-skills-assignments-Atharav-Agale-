const linkedinRegex = /^https:\/\/www.linkedin.com\/in\/[\w-]{5,30}[0-9a-zA-Z]$/;

const profileURL = "https://www.linkedin.com/in/example123";

if (linkedinRegex.test(profileURL)) {
    console.log("Valid LinkedIn profile URL");
} else {
    console.log("Invalid LinkedIn profile URL");
}
