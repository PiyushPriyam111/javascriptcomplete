function hello(){
    console.log("hello world");
}
     
//const prop={hi:"piyush"}

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// hello.prototype=prop;
// console.log(hello.prototype)
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.

                                              
// console.log(hello.prototype); // {}                                        
       
// only functions provide prototype property

// hello.prototype.abc = "abc";

// hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};

console.log(hello.prototype.sing());
