var setthis;
function changeImage() {
    // 获取要更改的图片元素
    var i=0;
      setthis=setInterval(function(){
    
        document.getElementById("myImage").src="../img/"+(i%5+1)+".jpg";
        i++;
     },1000);
     
 
    // 更改图片的 src 属性

    
    // 可选：更改图片的 alt 属性
    // image.setAttribute("alt", "更改后的图片");
}
function stopplay()
{
    clearInterval(setthis);//清理定时器，setthis接受setinterval返回的定时器对象
    alert("停止播放");
}