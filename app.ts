/*Task # 29 : Favourite fruit: Make a array of your favourite fruits, and then write a series of independent if the statement that check for certain fruit in your array.

* Make an array of your three favourite fruits and call it favourite_fruit .

* Write five  if statements . Each should check weather a certain kind of of fruit is in your array . if the fruit is in your array , the if block should print a statement , such you really like bananas!*/

const favourite_fruits: string[] = [`banana`, `apple`, `mango`];

if (favourite_fruits.includes(`banana`)){
    console.log("you really like bananas!");
}

if (favourite_fruits.includes(`apple`)){
    console.log("you really like apple!");
}

if (favourite_fruits.includes(`mango`)){
    console.log("you really like mango!");
}

if (favourite_fruits.includes(`strawberries`)){
    console.log("I dont like strawberries!");
}

if (favourite_fruits.includes(`orange`)){
    console.log("I dont  like orange!");
}