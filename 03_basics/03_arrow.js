const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  HERE IT WILL GIVE EMPTY OBJECT "{}" BUT IN CONSOLE IT WILL GIVE WINDOW.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); WE CAN NOT USE "this" FUNCTION. bECAUSE IT WORKS INSIDE AN OBJECT BUT NOT INSIDE A FUNCTION
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {           This is called expilicit return
//     return num1 + num2              very important: If we add curley braces we must write "return"
// }

// const addTwo = (num1, num2) =>  num1 + num2      This is called implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )     no need to write return keyword here.

const addTwo = (num1, num2) => ({username: "hitesh"})
// This the process of returning Object. means we should wrap the curley braces by parenthesis

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()




// NOTE: this means current context. It used to access the variable inside that particular variable.