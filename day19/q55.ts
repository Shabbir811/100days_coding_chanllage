// Question 55: Double Numbers in an Array: . Then, use a trick to make a new list where each number is twice its original value.

// Make a list of numbers
let listnumber = [2,5,7,8,4,50,22]

function double(list:number[]){
    for (const i of list) {
        
        console.log(i*2)
    }
}

double(listnumber)
