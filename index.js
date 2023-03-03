let username;

// console.log(username);

//Div 2 is hidden 
document.getElementById("div2").style.display = "none";

//On click of Back Button Div 2 will be displayed
document.getElementById("submitVal1").onclick = function(){
    username=document.getElementById("text1").value;
    // console.log(username);
    document.getElementById("div1").style.display = "none"; //div1 will be hidden on submit of value
    if(document.getElementById("div2").style.display == "none"){
        document.getElementById("div2").style.display="block";
    }
    // document.getElementById("lable2").innerHTML=username+ ", बोलो जय माता की...";
    document.getElementById("lable2").innerHTML=username+ ", ...आपको होली की शुभकामनाये..";
    // console.log(username);
}

//On click of Back Button Div 1 will be displayed
document.getElementById("submitVal2").onclick = function(){
    if(document.getElementById("div1").style.display == "none"){
        document.getElementById("div1").style.display="block";
    }
    document.getElementById("div2").style.display = "none";
}

