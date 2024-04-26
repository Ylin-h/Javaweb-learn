function ch()
{
    document.getElementById("div1").innerHTML = "welcome!!!";
}
// var imgarr=["../img/5.jpg","../img/2.jpg","../img/3.jpg","../img/4.jpg"];
function changeimg()
{
   
          var tmp=document.getElementsByTagName("img");
          tmp.setAttribute("src", "../img/1.jpg");
}

function on()
{
    alert("clicked");
}
//js事件
function off()
{
    alert("unclicked");
    document.getElementById("input1").value="hello"; 
}
function changeText() {
    // 获取文本内容要更改的元素
    var element = document.getElementById("demo");
    
    // 使用 innerHTML 属性更改元素的文本内容
    element.innerHTML = "更改后的文本";
}

