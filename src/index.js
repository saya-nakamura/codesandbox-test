/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);
// val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);
// let val2 = "let変数";
// console.log(val2);
// val2 = "上書きした";
// console.log(val2);
// let val2 = "再宣言！";

// const val3 = "const変数";
// console.log(val3);
// const val3 = "再宣言";

// const val4 = {
//   name: "あ",
//   age: 30,
// };

// val4.name = "i";
// val4.address = "Kyoto";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// console.log(val5);
// val5[0] = "bird";
// val5.push("sneake");

/**
 * テンプレート文字列
 */
// const name = "ポムポムプリン";
// const age = 26;

// const message1 = `ぼくの名前は${name}です。年齢は${age}です。`
// console.log(message1);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }
// console.log(func1("ポムポムプリンです"));

// const func2 = (str) => str;
// console.log(func2("マフィン"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myprofile = {
//   name: "ポムポムプリン",
//   age: 26
// };
// const message1 = `ぼくの名前は${myprofile.name}です。年齢は${myprofile.age}です。`;
// console.log(message1);
// const { name, age } = myprofile;
// const message2 = `ぼくの名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const myprofile = ["マフィン", 26];
// const message1 = `ぼくの名前は${myprofile[0]}です。年齢は${myprofile[1]}です。`;
// console.log(message1);

// const [name, age] = myprofile;
// const message4 = `ぼくの名前は${name}です。年齢は${age}です。`;
// console.log(message1);

/** デフォルト値、引数など */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("ポムポムプリン");

/**　スプレッド構文... */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFnc = (num1, num2) => console.log(num1 + num2);
// sumFnc(arr1[0], arr1[1]);
// sumFnc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// 参照渡し。。
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// // console.log(arr4);

// arr6[0] = 100;
// console.log(arr4);

// map,Filterの使い方
const nameArr = ["シナモン", "ポムポムプリン", "ポチャッコ"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`);
// }

// mapの引数には配列の要素が入ってくる
// // 新しい配列を生成
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}位は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   return name === "シナモン" ? name : `${name}くん`;
// });
// console.log(newNameArr);

// const num = "1300";
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 60));
