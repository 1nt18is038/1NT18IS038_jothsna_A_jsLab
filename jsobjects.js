 let bike={
  color:"skyblue",
  year:"2019",
  display:function(){
    console.log(`the bike is in ${this.color} and purchased in year ${this.year}`)
  }
}
bike.display() 
 let fruit=new Object()
 fruit.name="apple"
 fruit.color="red"
 fruit.display=function(){
   console.log(`the name of fruit is ${this.name}`)
 }
fruit.display()
 
 function emp(fname,lname,age){
   this.fname=fname;
   this.lname=lname;
   this.age=age;
   this.display=function(){
     console.log(`name of person is ${this.fname} ${this.lname} and of age ${this.age}`)
   }
 }
 let e=new emp('jhon','smith',25)
 e.display()


 