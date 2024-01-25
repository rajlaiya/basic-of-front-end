<!DOCTYPE html>
<html lang = "en">
<head>
<title> JavaScript Calculator </title>
<style>
h1 {
text-align: center;
padding: 23px;
background-color: rgb(32, 68, 82);
color: white;
}
#clear_all{
width: 170px;
border: 3px solid rgb(146, 67, 67);
border-radius: 3px;
padding: 20px;
background-color: rgb(109, 48, 48);
}
#clear_last{
width: 90px;
border: 3px solid rgb(61, 38, 38);
border-radius: 3px;
padding: 20px;
background-color: rgb(85, 10, 10);
}
.formstyle
{
width: 300px;
height: 530px;
margin: auto;
border: 3px solid rgb(0, 0, 0);
border-radius: 10px;
padding: 20px;
}
input
{
width: 40px;
background-color: rgb(96, 104, 95);
color: rgb(255, 255, 255);
border: 3px solid gray;
border-radius: 5px;
padding: 26px;
margin: 5px;
font-size: 15px;
}
#calc{
width: 250px;
border: 5px solid black;
border-radius: 10px;
padding: 20px;
margin: auto;
}
</style>
</head>
<body>

<h1> Calculator Program in JavaScript </h1>
<div class= "formstyle">
<form name = "form1">
<input id = "calc" type ="text" name = "answer"> <br> <br>
<input type = "button" value = "1" 
    onclick = "form1.answer.value += '1' ">
<input type = "button" value = "2" 
    onclick = "form1.answer.value += '2' ">
<input type = "button" value = "3" 
    onclick = "form1.answer.value += '3' ">
<input type = "button" value = "+" 
    onclick = "form1.answer.value += '+' ">
<br> <br>
<input type = "button" value = "4" 
    onclick = "form1.answer.value += '4' ">
<input type = "button" value = "5" 
    onclick = "form1.answer.value += '5' ">
<input type = "button" value = "6" 
    onclick = "form1.answer.value += '6' ">
<input type = "button" value = "-" 
    onclick = "form1.answer.value += '-' ">
<br> <br>
<input type = "button" value = "7" 
    onclick = "form1.answer.value += '7' ">
<input type = "button" value = "8" 
    onclick = "form1.answer.value += '8' ">
<input type = "button" value = "9" 
    onclick = "form1.answer.value += '9' ">
<input type = "button" value = "*" 
    onclick = "form1.answer.value += '*' ">
<br> <br>
<input type = "button" value = "/" 
    onclick = "form1.answer.value += '/' ">
<input type = "button" value = "0" 
    onclick = "form1.answer.value += '0' ">
<input type = "button" value = "." 
    onclick = "form1.answer.value += '.' ">
<input type = "button" value = "=" 
    onclick = "form1.answer.value =
eval(form1.answer.value) ">
<br>
<input type = "button" value = "Clear All" 
    onclick = "form1.answer.value = '' " id="clear_all" >
<input type = "button" value = "CE" 
    onclick = "form1.answer.value =form1.answer.value.slice(0,-1) " id= "clear_last" >
<br>
</form>
</div>
</body>
</html>
