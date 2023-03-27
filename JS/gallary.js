var imagesArray=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
var i=0;
function header()
{  
if(i>=7)
{
    i=0;
document.getElementById("header").style.backgroundImage=`url(../Asset/Images/${imagesArray[i]})`
}
else
{
 document.getElementById("header").style.backgroundImage=`url(../Asset/Images/${imagesArray[i]})`
}
i++;
var time=setTimeout(header,20000);
}

function right()
{
    i++;
    if(i>imagesArray.length-1)
{
    i=0;
document.getElementById("header").style.backgroundImage=`url(../Asset/Images/${imagesArray[i]})`
}
else{
document.getElementById("header").style.backgroundImage=`url(../Asset/Images/${imagesArray[i]})`
}
}
function left()
{
    i--;
    if(i<0)
    {
        i=imagesArray.length-1
document.getElementById("header").style.backgroundImage=`url(../Asset/Images/${imagesArray[i]})`
    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../Asset/Images/${imagesArray[i]})`  
    }
}
// this is gallary code

var img=document.getElementsByClassName("images");
console.log(img)
for(i=0;i<img.length;i++)
{
    img[i].src=`../Asset/Images/${i}.jpg`
}

function closeTheImage()
{
    document.getElementById("bigImage").setAttribute("style","display:none")
}
function openTheImage(img)
{
console.log(img)    
    document.getElementById("bigimg").setAttribute("src",`../Asset/Images/${img}.jpg`);
    document.getElementById("bigImage").removeAttribute("style");
}