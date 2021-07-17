function  fruit(name,color,nc){
  this.name=name;
  this.color=color;
 this.numcost=nc;
}  
function numcost(number,cost){
this.cost=cost;
this.number=number
}
var numcost1=new numcost(5,130);
var fruit1=new fruit('apple','red',numcost1);
console.log(fruit1);


