class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addfirst(data){
        const newnode = new Node(data);
        if(this.head == null){
            this.head = this.tail = newnode;
            return;
        }
        newnode.next = this.head;
        this.head = newnode;
    }
    addlast(data){
        const newnode = new Node(data);
        if(this.head == null){
            this.head = this.tail = newnode;
            return;
        }
        this.tail.next = newnode;
        this.tail = newnode;
    }
    reverse(){
        let prev = null; 
        let curr = this.tail = this.head;
        let next;
        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    print(){
        if(this.head == null){
            console.log("LL is empty");
            return;
        }
        let temp = this.head;
        while(temp != null){
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }
}
const li = new LinkedList;
li.addfirst(3);
li.addfirst(2);
li.addfirst(1);
li.addlast(4);
li.addlast(5);
li.addlast(6);
li.print();
li.reverse();
li.print();



