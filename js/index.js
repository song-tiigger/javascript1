// var inputSum = 0;
// var productSum = 0;
// var change = 0;

// var list = function (name, count, price) {
//   this.name = name;
//   this.count = count;
//   this.price = price;
// };

// var listArr = [];

// //금액 버튼 클릭하면 투입 금액에 누적
// function inputMoney(btn) {
//   var $input_money = document.querySelector('#input_money');
//   inputSum += Number(btn.innerHTML);
//   $input_money.setAttribute('value', inputSum);
// };

// //요소 추가하는 함수
// function orderList(name) {
//   var $order_list = document.querySelector("#order_list");
//   var str = "";
//   for (var i in listArr) {
//     if (listArr[i].name == name) {
//       var text = document.createTextNode(`
//         ${listArr[i].name} ${listArr[i].count} ${listArr[i].price}`);

//       if (document.getElementById(name)) {
//         var h = document.getElementById(name);
//         $order_list.removeChild(h);
//       }
//       var p = document.createElement("p");
//       p.setAttribute("id", name);
//       p.appendChild(text);
//     }
//   }
//   $order_list.appendChild(p);
//   return;
// }

// //상품명 클릭하면 주문 리스트에 추가됨
// function add(x) {
//   var add_price = x.querySelector('span');
//   var $total_price = document.querySelector('#total_price');
//   productSum += Number(add_price.innerHTML);
//   $total_price.setAttribute('value', productSum);

//   var str = x.innerHTML;
//   var name = str.substring(0, str.indexOf('<'));
//   var price = Number(add_price.innerHTML); 

//   if(listArr.length == 0) { 
//     listArr.push(new list(name, 1, price)); 
//     orderList(name); 
//     return;
//   } else {
//     for (var i in listArr) {
//       if(listArr[i].name == name) {
//         listArr[i].count += 1;
//         listArr[i].price += price;
//         orderList(name);
//         return;
//       }
//     }
//     listArr.push(new list(name, 1, price));
//     orderList(name);
//   }
// };

// //거스름돈 계산하기
// function calc() {
//   var result = document.querySelector('#change');
//   change = inputSum - productSum;
//   result.setAttribute('value', change);

//   if(change < 0) {
//     result.setAttribute('value', '금액이 부족합니다');
//   } 
// };






let inputSum = 0;
let productSum = 0;
let change = 0;
let currentMoney = 0;

const itemList = {
  "item1" : {'name':'에스프레소', 'count':0, 'price':4000},
  "item2" : {'name':'아메리카노', 'count':0, 'price':5000},
  "item3" : {'name':'카페라떼', 'count':0, 'price':6100},
  "item4" : {'name':'카푸치노', 'count':0, 'price':5600},
  "item5" : {'name':'바닐라 라떼', 'count':0, 'price':7100},
  "item6" : {'name':'카페모카', 'count':0, 'price':6600},
  "item7" : {'name':'초콜릿 라떼', 'count':0, 'price':6600},
  "item8" : {'name':'홍차', 'count':0, 'price':6000},
  "item9" : {'name':'녹차', 'count':0, 'price':6000}
}

const moneyList = [100, 500, 1000, 5000, 10000, 50000];

// //금액 버튼 클릭하면 투입 금액에 누적
// function inputMoney(btn) {
//   var $input_money = document.querySelector('#input_money');
//   inputSum += Number(btn.innerHTML);
//   $input_money.setAttribute('value', inputSum);
// };

const render = () => {
  document.getElementById("input_money").innerHTML = currentMoney.toString();
};

const inputMoney = (event) => {
  // const targetMoney = event.target;
  // const moneyIndex = targetMoney.getAttribute('data-index');
  // const money = moneyList[moneyIndex];

  const targetMoney = Number(event.target.innerText);
  console.log(targetMoney);

  currentMoney += targetMoney;

  render();
}

document.querySelector(".money_btn").addEventListener("click", inputMoney);




// moneyList.forEach((item, index) => {
//   let $input_money = document.getElementById("input_money");
//   $input_money.innerHTML = currentMoney;
  
// });



// function inputMoney() {

//   for (let i; i<moneyList.length; i++) {
//     inputSum += moneyList[i];
//     console.log(inputSum);
//   }
//   let $input_money = document.getElementById("input_money");
//   $input_money.innerHTML = inputSum;
// }

// window.onload = function() {
//   document.getElementById("money1").addEventListener("click", inputMoney);


// }

