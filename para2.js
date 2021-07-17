var btnrandom=document.querySelector('.main');
btnrandom.addEventListener("click",stringfun);
var string;
function stringfun(){
    string=prompt("enter the string",null);
    var len=string.length;
    var p1=document.getElementById('head1');
    p1.textContent="length of the string "+string+" is:"+len;
    var res=string.toUpperCase(string);
    var p2=document.getElementById("head2");
    p2.textContent="uppercase of given string "+string+" is: "+res;
}
var btn1=document.querySelector('.btn1');
btn1.addEventListener("mouseover",substring);
function substring(){
    var substr=document.getElementById("string").value;
    var p3=document.getElementById("head3");
    var res=string.indexOf(substr);
    p3.textContent="position of "+substr+" in a given string "+string+" is "+res;
}
var btn2=document.querySelector('.btn2');
btn2.addEventListener("mouseover",slice);
function slice(){
    var start=document.getElementById("start").value;
    var end=document.getElementById("end").value;
    var p4=document.getElementById("head4");
    var res=string.substring(start,end);
    p4.textContent="substring starting from "+start+" and ending at "+end+" in a given string "+string+" using slice method is "+res;
}
var btn3=document.querySelector('.btn3');
btn3.addEventListener("click",sub);
function sub(){
    var start=document.getElementById("slice1").value;
    var end=document.getElementById("slice2").value;
    var p4=document.getElementById("head5");
    var res=string.slice(start,end);
    p4.textContent="substring starting from "+start+" and ending at "+end+" in a given string "+string+" using substring method is "+res;
}
var btn4=document.querySelector('.btn4');
btn4.addEventListener("click",concat);
function concat(){
    var text=document.getElementById("text2").value;
    var p3=document.getElementById("head6");
    var res=string.concat(text);
    p3.textContent="string after concatination of "+text+" and "+string+" is "+res;
}

