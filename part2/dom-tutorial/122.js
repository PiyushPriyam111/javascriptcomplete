const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);//here this will have all he obj info of the button but if we use arroq
// func it wil have window so shuldnt use here ise er wan ti perfor m operation on button 
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })

//if we want to use arrow functions we  dont acces the info of the element on whic event is performed
//with this ..but ratther we use arg (evenet)=>event.currentarget   . here event coontain the object contaiining 
//infor of the event