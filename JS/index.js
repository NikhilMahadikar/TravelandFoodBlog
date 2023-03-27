var email="ramu@gmail.com"
var pass="123"
function autho()
{
    var usergivenUSID=document.getElementById("Email").value
    var usergivenPass=document.getElementById("pass").value
    if(email==usergivenUSID && pass==usergivenPass)
    {
    document.getElementById("fom").setAttribute("action","./HTML/Home.html")
        document.getElementById("but").setAttribute("type","submit")
    }
    else if(email!=usergivenUSID && pass==usergivenPass)
    {
        document.getElementById("inputDiv").style.borderColor="red"
        document.getElementById("passwordDiv").style.borderColor="royalblue"

        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,red,purple)"
        document.getElementById("result").innerHTML="Wrong Email ID"
    }
    else if(email==usergivenUSID && pass!=usergivenPass)
    {
        document.getElementById("passwordDiv").style.borderColor="red"
        document.getElementById("inputDiv").style.borderColor="royalblue"

        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,rgb(255, 1, 111),red)"
        document.getElementById("result").innerHTML="Wrong password"

    }
    else{
        document.getElementById("passwordDiv").style.borderColor="red"
        document.getElementById("inputDiv").style.borderColor="red"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,red,red)"
        document.getElementById("result").innerHTML="Wrong userId and password"

    }
}
function visiblePassword()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./Asset/Logo/visible.jpg")
    document.getElementById("visible").style.transform="rotateY(360deg)"
}
function hidePassword()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./Asset/Logo/closeeye.jpg")
    document.getElementById("visible").style.transform="rotateY(-360deg)"


}