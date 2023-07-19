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

const render = () => {
  document.getElementById("input_money").innerHTML = currentMoney;
};

/* 돈 클릭 */
const inputMoney = e => {
  const targetMoney = Number(e.target.innerText);
  // console.log(targetMoney);

  currentMoney += targetMoney;

  render();
}

let clickMoney = document.querySelectorAll(".money_btn");

for(var i = 0; i<clickMoney.length; i++) {
  clickMoney[i].addEventListener('click', inputMoney);
}

/* 음료 클릭 */
const selectItem = e => {
  const targetItem = Number(e.target)
  // 사진을 클릭하면
  // 1 리스트에 클릭한 항목이 추가되어야 함
  //   ㄴ 사진을 클릭했을 때 금액을 어떻게 받아올지? - 문제다  
  // 2 '총 합계'에 금액이 실시간으로 계산되어야 함
  //   ㄴ 금액이 계산될 때는 클릭한 항목의 가격 * 수량
  //   ㄴ 리스트에 있는 모든 금액을 더해서 보여주어야 함
}

let clickItem = document.querySelectorAll(".item");

for(var i = 0; i<clickItem.length; i++) {
  clickItem[i].addEventListener('click', selectItem);
}