
//static List vs live list

//getSelectorAll hamein static list degi
//getEelemenentBySomehing hamien live kist degi //ie HTMLcollection live lkist hai..
//means even after adding new elemen it willl reflect in the list
//but in case of staic list like nodelist if we add new element it wont be reflectef in the list

const ul = document.querySelector(".todo-list");

const listItems = ul.getElementsByTagName("li");//ul us a static list

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);//since liveList the newly added item6 will be rlected in the list in colnsole