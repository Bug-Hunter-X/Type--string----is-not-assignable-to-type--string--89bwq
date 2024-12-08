function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will result in an error because the function is expecting a string, not an array of strings.