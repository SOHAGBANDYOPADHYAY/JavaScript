// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// If we don't use ";" it will throw an error for the next one.
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// (Here we write function) (this is for execution)
// To remove global scope pollution we use IIFE