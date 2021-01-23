// document.addEventListener("DOMContentLoaded", function (event) {
//   let name = document.getElementById("name");  // ????? doesn't work ?????
//   let city = document.getElementById("city");
//   let payment = document.getElementById("payment");
//   let custList = document.getElementById("customerList");
// })

let name = document.getElementById("name"); 
let city = document.getElementById("city");
let payment = document.getElementById("payment");
let custList = document.getElementById("customerList");

let ul_list = [];

function formSubmitEvent() {

  // read from text inputs
  let nameStr = name.value;
  let cityStr = city.value;
  let paymntStr = payment.value;
  let newStr = nameStr + " " + cityStr + " " + paymntStr;

  if (nameStr.length > 1 && cityStr.length > 2) {
    // push all strings into a list
    ul_list.push(newStr);

    // clear the existing list
    custList.innerHTML = "";

    // creating the unordered list
    let my_ul = document.createElement('ul');
    custList.appendChild(my_ul);
    for (let i = 0; i < ul_list.length; i++)
    {
      let my_li = document.createElement('li');
      my_ul.appendChild(my_li);
      my_li.innerHTML = ul_list[i];
    }
  }
  else {
    alert("please fill in all fields");
  }
}

// function makeList() {
//   // clear the existing list
//   custList.innerHTML = "";   // works
//
//   // while (custList.lastElementChild) { 
//   //   custList.removeChild(custList.lastElementChild);
//   // }    // works !
//
//   // while (custList.firstChild) {
//   //   custList.removeChild(custList.lastChild);
//   // }    // works !
//  
//   // creating the unordered list
//   let my_ul = document.createElement('ul');
//   custList.appendChild(my_ul);
//   for (let i = 0; i < ul_list.length; i++)
//   {
//     let my_li = document.createElement('li');
//     my_ul.appendChild(my_li);
//     my_li.innerHTML = ul_list[i];
//   }
// }