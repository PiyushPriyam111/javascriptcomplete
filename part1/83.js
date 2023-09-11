// new keyword 
// 1.) this = {}
// 2.) return {} 
//3) it willa also swt thw this={} objects __proto__ to functions prototype

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
 
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};

CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());
// for(let key in user1){
// console.log(key);
// }

//yo get its own key that is nt the protos key

// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key)
//     }
// }