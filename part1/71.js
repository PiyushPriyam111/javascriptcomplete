// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);//this consisr of datas of the one who called
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo//here for eg this refer to person1 and has data obj like firstName and age
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

