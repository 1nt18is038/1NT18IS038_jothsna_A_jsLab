 class people{
     constructor(name){
         this.name=name
     }
     display(){
         console.log("Parent Class")
         console.log(this)
     }
     static func(){
         console.log("This is static function")
     }
   
 }
 class gender extends people{
     constructor(name,gender){
         super(name)
         this.gender=gender
     }
     display(){
         console.log("Gender class")
         console.log(this)
     }
 }
class age extends gender{
    constructor(name,gender,age){
        super(name,gender)
        this.age=age 
    }
    display(){
        console.log("Age class")
        console.log(this)
    }
}
 let p=new people("josh")
 p.display()
 people.func()
 let m=new gender("abc","M")
 m.display()
 let a=new age("xyz","F",21)
 a.display()
