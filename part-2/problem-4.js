// you have to create a function that choose an outfit for us
// all you have to do is get that outfit from listBrand using Math random in range 0 -listBrand
// length. and have some time length that gets from listBrand process time.


// important!
// you must use Promise.all() to solve this problem

console.log("Loading start...");
const listBrand = [
  { brand: "H&M", processTime: 7000 },
  { brand: "Zara", processTime: 4000 },
  { brand: "Uniqlo", processTime: 5000 },
  { brand: "Pedro", processTime: 9000 },
  { brand: "The Executive", processTime: 10000 },
  { brand: "Adidas", processTime: 8000 },
  { brand: "Nike", processTime: 7000 },
  { brand: "Puma", processTime: 6000 },
  { brand: "Converse", processTime: 6000 },
  { brand: "Mark&Spencer", processTime: 9000 },
];

function randomizeBrand(typeAparel) 
const getRandomBrand = new promise((reject, resolve) =>{
    
    setTimeout(() => {
        const typeAparel = Math.floor(Math.random()* 9);
        if (typeAparel > 4) {
            reject("failed to get you apparel, please try again");
        }
        resolve(`I wear clothes from ${listBrand+[typeAparel]} i wear pants from ${listBrand+[typeAparel]}`)
        getRandomBrand
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        .finally(() => console.log("loading end.."));
    }, 3000);
});
let promise = [];

promise.push(randomizeBrand("clothes"));
promise.push(randomizeBrand("pants"));
promise.push(randomizeBrand("Shoes"));
promise.push(randomizeBrand("hat"));