//var c = 300   this is called global scope

// below is blocked scope. The value of global scope should be available inside blocked scope 
// but the value inside blocked scope should not go outside.
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// NOTE: The scope inside node is different from what we see on browser's console.

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sohag"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); error will come here because scope is already closed before this line

     two()

}

// one()

if (true) {
    const username = "sohag"
    if (username === "sohag") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }

// It will give error "ReferenceError: Cannot access 'addTwo' before initialization" beacuse, above we we stored the value "addTwo" inside a variable
