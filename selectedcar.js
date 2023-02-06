function selectedcar(){
var data=document.getElementById("select");
var displaytext=data.options[data.selectedIndex].text;
document.getElementById("text").value=displaytext;
}