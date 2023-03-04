let username;
let count;
// console.log(username);
async function sleep(seconds){
    return new Promise(resolve => setTimeout(resolve,seconds*1000));
}
//Div 2 is hidden 
document.getElementById("div2").style.display = "none";

//On click of Back Button Div 2 will be displayed
document.getElementById("submitVal1").onclick = async function(){
    //New message starts
      for(count=1;count<5;count++){
        
        console.log(count);
        if(count == 1 ){
        document.getElementById("lable3").innerHTML=" खूब उड़े रंग और गुलाल  ";
        }
        if(count == 2 ){
            document.getElementById("lable4").innerHTML="लेकर आए आपके घर में खुशियों की बहार  ";
            }
         if(count == 3 ){
                document.getElementById("lable5").innerHTML=" बने रहे जीवन में सदा गुजिया की मिठास";
        }
        if(count == 4 ){
            document.getElementById("lable6").innerHTML=" मुबारक हो आपको होली का त्योहार";
    }         

        await sleep(1);
    }
    //Message Ends
    username=document.getElementById("text1").value;
    // console.log(username);
    document.getElementById("div1").style.display = "none"; //div1 will be hidden on submit of value
    document.getElementById("div12").style.display = "none";
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
    if(document.getElementById("div12").style.display == "none"){
    document.getElementById("div12").style.display="block";
    }
    document.getElementById("lable3").innerHTML="";
    document.getElementById("lable4").innerHTML="";
    document.getElementById("lable5").innerHTML="";
    document.getElementById("lable6").innerHTML="";
    

    document.getElementById("div2").style.display = "none";
}
