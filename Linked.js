class Node{
  constructor(ele)
  {
      this.data=ele;
      this.next=null;
  }
}
class linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insert(ele){
        var node=new Node(ele)
        if(this.head===null){
        this.head=node
        this.size++
        }
        else{
       var temp;
       temp=this.head
       this.head=node
       node.next=temp
       this.size++
        }
    }
    insertat(index,ele){
        var node=new Node(ele)
        let i=0
        if(this.head===null){
            this.head=node
            this.size++ 
        }
        else{
                var  current,previous;
                current=this.head
                while(i<index){
                    previous=current
                    current=current.next
                    i++
                }  
               previous.next=node 
               node.next=current
            }
        
    }
    delete(index){
        let it=0
        if(this.head===null){
            console.log("Empty List:")
        }
        else if(index===0){
        console.log("deleted element is  :"+this.head.data)
        this.head=head.next
         }
        else{
          
           var  current,previous;
          current=this.head
          while(it<index){
              previous=current
              current=current.next
              it++
          }  
          previous.next=current.next
          console.log("deleted element is  :"+current.data)
        }
    }
    display(){
        let temp=this.head
        if(this.head===null)
        console.log("list is empty")
        else{
            console.log("Elements in the list:")
            while(temp!=null){
                console.log(temp.data)
                temp=temp.next
            }
        }
    }
}
let ll=new linkedlist()
console.log("Inserting 4 Elements:")
ll.insert(1)
ll.insert(2)
ll.insert(3)
console.log("Display:")
ll.display()
console.log("inserting at index 2:")
ll.insertat(2,4)
console.log("Display:")
ll.display()
console.log("Delete element at index 2 :")
ll.delete(2)
console.log("Display:")
ll.display()