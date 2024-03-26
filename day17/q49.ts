// Function with Rest Parameters:. It should log each hobby with a statement saying you enjoy that hobby.

// Write a function that takes a rest parameter representing multiple hobbies
function hobbies (...rest:string[]){
    const add = [rest]

    rest.forEach(r =>{
        console.log(`i enjoy ${r} .
        `)
    })
}

hobbies("play cricket","watching tv", "reading book","coding" )