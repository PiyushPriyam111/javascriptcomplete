const obj1 = {
    key1: "value1",
    key2: "value2"
}



// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]

const obj2= Object.create(obj1)
console.log(obj2.__proto__)
//console.log(obj2.key1)
// obj2.key3="value3"
// const obj={name:"piyush",class:"12A6"}

// obj1.__proto__=obj;
// console.log(obj1)


// prototype    
                                                        

// const obj2 = Object.create(obj1); // {}
// // there is one more way to create empty object
// obj2.key3 = "value3";
// // obj2.key2 = "unique";
// console.log(obj2);

// console.log(obj2.__proto__);

