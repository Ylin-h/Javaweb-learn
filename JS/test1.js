/*BOM(Browser Object Model)浏览器对象模型
window对象表示整个浏览器窗口，document对象表示当前页面的文档对象，
history对象表示浏览器的历史记录，location对象表示当前页面的URL信息。*/
//一、window对象,可以省略
//alert()方法用于显示一个带有指定消息的警告框。
window.alert("Hello!");//可以简写成alert("Hello!");
//confirm()方法用于显示一个带有指定消息的确认框，并返回用户是否点击了确认按钮。
var confirmed = function(e){window.confirm("Are you sure?")};//可以简写成confirmed = confirm("Are you sure?");
//prompt()方法用于显示一个带有指定提示信息的输入框，并返回用户输入的值true或false。
// var input = window.prompt("welcome!!!");//可以简写成input = prompt("Please enter your name:");
//setTimeout()方法用于在指定的时间后执行函数,时间单位是毫秒。
 setTimeout(function(){console.log("Hello!");}, 3000);
//setInterval()方法用于每隔指定的时间执行函数。 
var i=0;
// setInterval(function(){i++;console.log("Hello!"+i);}, 3000);
//二、location对象
//location.href属性用于获取或设置当前页面的URL。
console.log(location.href);
//更改当前页面的URL，然后跳转
// location.href = "http://www.bing.com";
// 三、document对象
//document.writeln()方法用于将内容写入当前文档，并在内容末尾添加换行符。
// document.writeln("Hello!");
//document.getElementById()方法用于获取指定元素的引用。
// var element = document.getElementById("input1");
//document.getElementsByTagName()方法用于获取指定标签名的所有元素。
var elements = document.getElementsByTagName("h1");
console.log(elements);
var put=elements[0];
put.innerHTML = "Hello!";
//document.getElementsByClassName()方法用于获取指定类名的所有元素。
var elements = document.getElementsByClassName("input");
// document.getElementsByName()方法用于获取指定name的所有元素。
    var elems = document.getElementsByName("checkbox1");
    for(var i=0;i<elems.length;i++){
       alert(elems[i]); 
}
function unselectAll(){
    var elems = document.getElementsByName("checkbox1");
    for(var i=0;i<elems.length;i++){
        elems[i].checked = false;
    }
}
/*DOM(Document Object Model)文档对象模型*/

