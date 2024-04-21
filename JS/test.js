alert("Hello");;//window.alert()警告框弹出，简写成alert（）
// document.write("Hello 3");//document.write()输出内容到HTML页面
console.log("Hello 4");//console.log()输出内容到浏览器的控制台 
var a=10;//变量声明
{
    var a=20;//由var定义的变量，作用域大，为全局变量，即使在代码块当中也能访问到,可重复定义
    console.log(a);//输出
}
{
    let b=30;//let定义的变量，作用域小，只能在代码块内访问到，不可以重复定义
    console.log(b);
}
var m="10"//通过parseInt()函数将字符串转换为数字
console.log(parseInt(m));
const c=40;//const定义的变量，作用域小，只能在代码块内访问到，不能重复定义，且值不能被修改
console.log(c);
var n1=10,n2="10",n3=10;
if(n1===n2){
    console.log("n1和n2相等");//===比较严格，类型也要相同,不进行类型转换
}else{
    console.log("n1和n2不相等");
}
if(n1==n3){
    console.log("n1和n3相等");//==比较宽松，类型不同也可以相等，进行类型转换
}else{
    console.log("n1和n3不相等");
}
// js类型有number、string、boolean、undefined、null、object、symbol、function等,可以用typeof()函数判断类型  
if(null)//括号中类型值number为0.Nan string为"",undefined，null转化为boolean为false，其余都为true
{
    console.log("null为true");
}
else
console.log("null为false");
//js定义函数 关键字function第一种，x为形参，不需要指定类型 
function myFunction(x){
    return x*2;
}
// 第二种定义方式
// var myFunction = function(x){
//     return x*2;
// }
console.log(myFunction(10));//调用函数输出结果

//js数组 长度可变，类型任意
// var arr=new Array(1,2,3); //创建数组法一
var arr=new Array(3); //创建长度为3的数组
var arr = [1,2,3];
console.log(arr[0]);//输出第一个元素
arr[1] = "grape";//修改第二个元素为string类型
console.log(arr);//输出数组

// 数组方法length
console.log(arr.length);//输出数组长度
arr.push("apple");//在数组末尾添加元素
console.log(arr);//输出数组
// 数组方法pop()删除数组末尾元素
arr.pop();
console.log(arr);//输出数组
// 数组方法shift()删除数组第一个元素
arr.shift();
console.log(arr);//输出数组
// 数组方法unshift()在数组第一个位置添加元素
arr.unshift("banana");
console.log(arr);//输出数组
// 数组方法indexOf()查找元素位置
console.log(arr.indexOf("banana"));//输出元素位置
// 数组方法join()连接数组元素
console.log(arr.join("-"));//输出连接后的字符串
// 数组方法reverse()反转数组
arr.reverse();
console.log(arr);//输出数组
// 数组方法sort()排序数组
arr.sort();
console.log(arr);//输出排序后的数组
// 数组方法forEach()遍历数组
arr.forEach(function(element){
    console.log(element);
});
//es6新增语法
arr.forEach((e)=>{
    console.log(e);
});
//push()方法可以接收多个参数，将它们逐个添加到数组末尾
arr.push(4,5,6);
console.log(arr);//输出数组
//splice()方法可以删除或替换数组元素，接收三个参数，第一个参数为起始位置，第二个参数为删除的元素个数，第三个参数为要添加的元素
arr.splice(2,1);//删除第二个元素
console.log(arr);//输出数组
var str="hello world";//定义字符串
console.log(str.toUpperCase());//输出大写字符串
console.log(str.toLowerCase());//输出小写字符串
console.log(str.indexOf("l"));//输出字符串中第一个"l"的位置
console.log(str.trim());//输出去除两端空格的字符串
console.log(str.split(" "));//输出字符串数组
console.log(str.length)//输出字符串长度
console.log(str.charAt(0))//输出字符串第一个字母
console.log(str.substring(0,5))//输出字符串从0开始到5结束的子串,前闭后开
//js对象 
var person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name);//输出name属性值
person.name = "Mike";//修改name属性值
