var cname=document.getElementById('name');
var btnrandom=document.querySelector('.btn');
var story=document.querySelector('.story');
function randomValueSelectionFromArray(array){
 return array[Math.floor(Math.random()*array.length)];
}
    var oldstory= "Bheem is a :insertx: character of a cartoon series Chota Bheem. The director of the :inserty: Chota Bheem is Rajiv Chilaka Bheem is a good boy and he is very strong, his favorite sweet is :insertz: made by Tun-Tun Mausi.";
    var insertX=["main","leading"];
    var insertY=["show","television show","program series"];
    var insertZ=["ladoo","jaggery","gilebi"]; 
    btnrandom.addEventListener('click',result);
    function result(){
      var newstory=oldstory;
      var xitem=randomValueSelectionFromArray(insertX);
      var yitem=randomValueSelectionFromArray(insertY);
      var zitem=randomValueSelectionFromArray(insertZ);
      var newstory=newstory.replace(":insertx:",xitem);
      var newstory=newstory.replace(":inserty:",yitem);
      var newstory=newstory.replace(":insertz:",zitem);
      if(cname.value!=''){
          var name=cname.value;
          newstory=newstory.replace('Bheem',name);
      }
      story.textContent=newstory;
      story.style.visibility='visible';
        }

