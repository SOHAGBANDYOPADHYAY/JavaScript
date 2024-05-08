const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); in browser it will give "window"


function User(username, loginCount, isLoggedIn){
    this.username = username;                  //here this.username is variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// when we start to use new keyword first an empty object will be created which is called instances.
// Then a constructor function is called because of new keyword and packed all argument and returns to user.
// Thirdly "this keyword" then injected in all arguments.
// Fourthly we got all these in function.