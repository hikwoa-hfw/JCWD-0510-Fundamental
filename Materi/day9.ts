//  Data structure
// Stack -> LIFO (Last in First out)

class Stack {
    #container: any[]
    maxSize: number

    constructor() {
        this.#container = []
        this.maxSize = 10
    }

    private isFull() {
        return this.#container.length >= this.maxSize
    }

    private isEmpty() {
        return this.#container.length === 0
    }

    push(element: any){
        if (this.isFull()) {
            return "Container penuh!"
        }
        this.#container.push(element)
    }

    pop() {
        if (this.isEmpty()){
            return "Container kosong!"
        }
    }
    getContainer(){
        return this.#container
    }
}

const stack = new Stack()

stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)

console.log(stack.push(1));


console.log(stack.getContainer());

// queue -> FIFO (first in first out)

class Queue {
    #container :any

    constructor() {
        this,this.#container = []
    }

    enqueue(element: any) {
        return this.#container.push(element)
    }
    dequeue(){
        return this.#container.shift()
    }
    showContainer(){
        return this.#container
    }
}

const queue = new Queue()

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue.enqueue(6));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.showContainer());

// Set --> only unique value

const fruits: string[] = ["banana", 'apple', 'mango', "apple", "apple"]

const mySet = new Set(fruits)

console.log(mySet);

//  menambahkan data ke dalam set

mySet.add("grape")

console.log((mySet));

//  mengecek apakah di dalam set ada value yang kita cari
console.log(mySet.has("apple"));

// mnghapus data
console.log(mySet.delete("mango"));

// looping isi set
for (const value of mySet){
    console.log((value));
    
}

// menghitung jumlah daya yang ada

console.log((mySet.size));

// Map

const myMap = new Map()

myMap.set("David", "123")
myMap.set("joko", "123")

// menampilkan isi MAP
for (const [key, value] of myMap){
    console.log(`${key} = ${value}`);
    
}

console.log(myMap.has("David"));
console.log(myMap.delete("David"));
console.log(myMap.has("David"));








