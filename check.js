
let arr=[{
    name:"josh",
    gmail:"josh@gmail.com"
} ]

let user
let i=1
   
function checkit(){
  
    let na=document.getElementById('check-name').value;
    if(arr.some(n=>n.name===na)) 
    location.href="new.html";
    else
     document.getElementById("container").style.display='block';
}
function submit_det(){
   
     user=new Object()
     arr[i]=user
     i++
      user.name=document.getElementById('user_name').value
      user.gmail=document.getElementById('user_gmail' ).value  
    document.forms[0].reset();
}
    document.getElementById("sub-btn").addEventListener('click',submit-det);
    
