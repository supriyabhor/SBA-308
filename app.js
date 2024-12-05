//-----------------------------------------------------------------Section 1---------------------------------------------------------------

//  I. Variables & Datatypes

// A. Q + A

// How do we assign a value to a variable?
    let variable = 10;
    console.log(variable);

// How do we change the value of a variable?
        variable = 20;
        console.log(variable);

// How do we assign an existing variable to a new variable?
    //    let newVariable = variable;
    //    console.log(newVariable);
    
// Remind me, what are declare, assign, and define?
    //  let variable;        --------Declare variable
    //  let variable = 10;   --------Assign value to variable
    // let newVariable=20   -------Define value to newVariable

// What is pseudocoding and why should you do it?
   // Pseudocode is a simplified, plain-language description of how an algorithm or program should work, written without adhering to the strict syntax of a specific programming language.
   // Clarifies complex logic: Pseudocode helps you break down complex problems into simpler steps and clarifies your approach before diving into code.
   // Reduces errors: Helps avoid mistakes in code by making the logic clearer.
   // Speeds up coding: With a clear plan in place, you can write code more efficiently.
   // improve communication

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
   //65% of your time thinking about how to solve a problem and 35% of your time typing in code to implement the solution;

//----------------------------------------------------------------------------------------------------------------------------------------------------------------   

//  B. Strings  

// Create a variable called firstVariable
   let firstVariable;

// Assign it the value of the string "Hello World"
    firstVariable ="Hello World";
    console.log(firstVariable);

// Change the value of this variable to some number
    firstVariable = 30;
    console.log(firstVariable);

// Store the value of firstVariable in a new variable called secondVariable
    let secondVariable = firstVariable;
    console.log(secondVariable);

// Change the value of secondVariable to any string.
    secondVariable = "This is my world";
    console.log(secondVariable);

// What is the value of firstVariable?
    console.log(firstVariable);

// Create a variable called yourNameand set it equal to your name as a string. 
// Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
     let yourName= "Supriya";
     let greeting="Hello, my name is " + yourName;
     console.log(greeting);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------        

// C. Booleans 

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
 
  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false);
  console.log(e === 'Kevin');
  console.log(a < b && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d);  // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

//----------------------------------------------------------------------------------------------------------------------------------------------------------------        

// D. The farm

// Declare a variable animal. Set it to be either "cow" or something else
   let animal ="cow";

// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
    if(animal === "cow") 
    {
        console.log("moooooo");
    } else {

            console.log("Hey! You're not a cow.");
           }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------        

// E. Driver's Ed

// Make a variable that holds a person's age; be semantic
    let age = 14;

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
    if (age >=16)
    {
        console.log("Here are the keys!");
    }else
    {
        console.log("Sorry, you're too young.");
    }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// II. Loops    

// A. The basics

// Write a loop that will print out all the numbers from 0 to 10, inclusive
    for (let i=0; i<=10 ; i++)
    {
        console.log(i);
    }

// Write a loop that will print out all the numbers from 10 up to and including 400
   for (let i=10; i<=400; i++)
   {
        console.log(i);
   }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
   for (let i=12; i<=4000; i +=3)
   {
      console.log(i);
   }

//---------------------------------------------------------------------------------------

// B. Get even   

// Print out the numbers that are within the range of 1 - 100
    for (let i=1; i<=100; i++)
    {
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
       if(i % 2 === 0)
       {
        console.log(i + "<-- is an even number");
       }else
       {
        console.log(i);
       }
    }

//---------------------------------------------------------------------------------------

// C. Give me Five
   //For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
     for (let i=0; i<=100; i++)
     {
        if ( i % 5 === 0 && i % 3 === 0)
        {
            console.log("I found a " + i + "." + "High five!" + "I found a " + i + "." + " Three is a crowd");
        }else if (i % 5 === 0)
        {
            console.log("I found a " + i + "." + "High five!");
        }else if (i % 3 ===0 )
        {
            console.log("I found a " + i + "." + " Three is a crowd");
        }
     }
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//For numbers divisible by both three and five, be sure your code prints both messages    

//----------------------------------------------------------------------------------------------------------------------------
// D. Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
   let bank_account=0;
   for (let i=1; i<=10; i++)
   {
      bank_account= bank_account + i;
   }
 
// Check your work! Your bank_account should have $55 in it.   
   console.log(bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
   let bonus = 0;
   for (let i=1; i<=100 ; i++)
   {
     let sum= i * 2;
     bonus = bonus + sum ;

   }
// Check your work! Your bank_account should have $10,100 in it.   
 console.log(`Your bank_account = $ ${bonus}`);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// III. Arrays & Control flow
// A. Talk about it:
  
// What are the things in an array called?
   // Elements

// Do Arrays guarantee those things will be in order?
   // yes

// What real-life thing could you model with an array?
   // Hosital["patient id","name","number","Address"] , 
   //insurance 

// B. Easy does it

//Create an array that contains three quotes and store it in a variable called quotes
  let quates = ["cat", "dog", "tiger"];
  console.log(quates);

//--------------------------------------------------------------------------------------  
//  C. Accessing elements

// Given the following array const randomThings = [1, 10, "Hello", true]
     const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
    console.log(randomThings[1]);

// Change the value of "Hello"to "World"
   randomThings[2]= "world"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();   
   console.log(randomThings); 

//------------------------------------------------------------------------------------------------------------------   

// D. Change values


// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
    ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
     console.log(ourClass[3]);

// Change the value of "Github" to "Octocat"
    ourClass[4]= "Octocat"
    console.log(ourClass);

// Add a new element, "Cloud City" to the array
    ourClass.push("Cloud City");
    console.log(ourClass);

//----------------------------------------------------------------------------------------------------------    
// E. Mix It Up

// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
    const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
     myArray.push("Aegon" , "Supriya");
     console.log(myArray);

// Remove the 5from the beginning of the array.
     myArray.shift();
     console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
     myArray.unshift("Bob Marley");
     console.log(myArray);
 
// Remove the string of your choice from the end of the array.
    myArray.pop();
    console.log(myArray);

// Reverse this array using Array.prototype.reverse(). 
// Did you mutate the array?  --> Yes
// What does mutate mean? 
//  --> mutate means to modify the original data which are in array.
//Did the .reverse()method return anything?
    myArray.reverse();
    console.log(myArray);

//-------------------------------------------------------------------------------------------------------------------------------

// F. Biggie Smalls

// Create a variable that contains an integer.
   let a1 = 200;
 
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
    if (a1 < 100) 
        {
          console.log("Little number");
        } else  
            {
           console.log("Big number");
            }

//-------------------------------------------------------------------------------------------------------------
// G. Monkey in the Middle

// Write an if ... else if ... elsestatement:

   let b1 = 3;
   if (b1 < 5)
   {
    console.log("Little number"); // console.log()little numberif the number entered is less than 5.
   } else if (b1 > 10) {
     console.log("Big number"); // If the number entered is more than 10, log big number.
   } else {
    console.log("Moncky"); // Otherwise, log "monkey".
   }

//----------------------------------------------------------------------------------------------------------------------------

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
    const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],[
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],[
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
  ];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
      console.log ("Kristyn is rocking that " + kristynsCloset[3]  + " today!");

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
    kristynsCloset.splice(6,0, "raybans");  
    console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
    kristynsCloset[5]="stained knit hat";
    console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
    let thomShirt = thomsCloset[0][0];
    let thomPant = thomsCloset[1][1];
    let thomAsse = thomsCloset[2][1];
    console.log(`Thom is looking fierce is a ${ thomShirt} , ${thomPant} and ${thomAsse}!`);

// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
   thomsCloset[1][2]="Footie pajamas";
   console.log(thomsCloset);
 
//-----------------------------------------------------------------------------------------------------------------------------

//IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
    function printGreeting(name)
    {
       console.log(`Hello ${name}` );
    }
    printGreeting("Supriya");

//--------------------------------------------------------------------------------------------------------------------------

//  B. printCool
//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool. 
    function printCool(name)
    {
        console.log(`${name} is cool` );
    }
    printCool("Robbin");

//--------------------------------------------------------------------------------------------------------------------------
//  C. calculateCube

// Write a function calculate Cube that takes a single number and prints the volume of a cube made from that number.  
    //  Volume of a cube: The volume of a cube is calculated using the formula sideLength^3 (side length raised to the power of 3). In JavaScript, Math.pow(sideLength, 3) is used to compute the cube of sideLength. 
    
    function calculateCube(num) 
     {
     const volume = Math.pow(num, 3); // num^3 gives the volume of the cube
     console.log(`The volume of the cube is ${num} is: ${volume}`);
     }
     calculateCube(5);

//--------------------------------------------------------------------------------------------------------------------------
// D. isVowel

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.     
    
     function isVowel(char)
     {
        const character = char.toLowerCase();

        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u')
        {
            return true;
        } else {
            return false;
        }
     }

     console.log(isVowel('A'));
     console.log(isVowel('e'));
     console.log(isVowel('I'));
     console.log(isVowel('o'));
     console.log(isVowel('U'));
     console.log(isVowel('u'));
     console.log(isVowel('c'));

//--------------------------------------------------------------------------------------------------------------------------

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string. 

    function getTwoLengths(string1, string2)
    {
       console.log(string1.length, string2.length);
    }
    getTwoLengths("hi", "Bhor");

//--------------------------------------------------------------------------------------------------------------------------

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.    
     
      function getMultipleLengths(array)
      {
        console.log(array.map(str=> str.length));

      } 
      getMultipleLengths(["hi","hello","world"]);

//--------------------------------------------------------------------------------------------------------------------------

//  G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.   
    // function maxOfThree(num1, num2, num3)
    // {
    //     return Math.max(num1, num2, num3);
    // //   console.log(Math.max(num1, num2, num3));
    // }
    // console.log(maxOfThree(5,10,2));

    function maxOfThree(num1, num2, num3) 
    {
        if (num1 >= num2 && num1 >= num3) {
          console.log(num1);  // num1 is the largest
        } else if (num2 >= num1 && num2 >= num3) {
          console.log(num2);  // num2 is the largest
        } else {
          console.log(num3);  // num3 is the largest
        }
      }
      maxOfThree(5,10,2);
//--------------------------------------------------------------------------------------------------------------------------

//    H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
      
      function printLongestWord(arrayStr)
      {
        let longestWord = arrayStr[0];
        for(let i=1; i< arrayStr.length ; i++)
        {
            if (arrayStr[i].length > longestWord.length)
            {
                longestWord = arrayStr[i];
            }
        }
        return longestWord;
      }
      printLongestWord(["cat", "kitten", "hourses"]); 

//--------------------------------------------------------------------------------------------------------------------------
// ---------------------Objects

// A. Make a user object

// Create an object called user.
     const user = {
                    name: "Supriya",
                    email: "myname@gmail.com",
                    age: 35,
                    purchased: []
                 }
    console.log(user);

// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
    user.purchased.push("Ipad", "car"); 
    console.log(user.purchased);  
    console.log(user);

//--------------------------------------------------------------------------------------------------------------------------

// B. Update the user

// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
      const updateUser = {...user, email: "myname123@gmail.com" }
//    console.log(updateUser);

// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
        const updateUser1 = {...user, age: user.age++ }
        console.log(updateUser1);

//--------------------------------------------------------------------------------------------------------------------------

// C. Adding keys and values

// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
      const updateUser2= {...user, location: "Moorsville,NC"}
      console.log(updateUser2);
//--------------------------------------------------------------------------------------------------------------------------

// D. Shopaholic!

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
    //   let purchasedarray= [];

      user.purchased.push("carbohydrates");
    
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
      user.purchased.push("peace of mind");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
      user.purchased.push("Merino jodhpurs");
        console.log(user.purchased);

// Console.log just the "Merino jodhpurs" from the purchasedarray. 
         console.log(user.purchased[2]); 
//--------------------------------------------------------------------------------------------------------------------------

//  E. Object-within-object

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
    let userObject = {
                        friend:{
                                 name: "Ciyana",
                                 age : 23,
                                 location:"Norway",
                                 purchasedArr: []
                               }
                     }
                     console.log(userObject.friend);

// Console.log just the friend's name
     console.log(userObject.friend.name);

// Console.log just the friend's location
     console.log(userObject.friend.location);

// CHANGE the friend's age to 55
      const updateage = {...userObject.friend, age:30 }
      console.log(updateage);
 
// The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
       
        userObject.friend.purchasedArr.push("The One Ring", "A latte");
       
        console.log(userObject.friend.purchasedArr);

// The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased.
       

// Console.log just "A latte" from the friend's purchased.
    console.log(userObject.friend.purchasedArr[1]);

//--------------------------------------------------------------------------------------------------------------------------

// F. Loops

// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
    console.log("user's Purchased items are:")

    for (let i=0; i < user.purchased.length; i++)
    {
        console.log(user.purchased[i]);
    }


// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
   console.log("Friend's Purchased items are:")

   for(let i=0; i< userObject.friend.purchasedArr.length; i++)
   {
    console.log(userObject.friend.purchasedArr[i]);
   }
//--------------------------------------------------------------------------------------------------------------------------

// G. Functions can operate on objects

// Write a single function updateUser that takes no parameters. When the function is run, it should:
     let users = [
                 {name1: "John", age: 35, location: "NewYork"},
                 {name1: "Josef", age: 38, location:"Coocksvile"}
                ]; 

   function updateUserNew()
     { 
        // it should increment the user's age by 1
       let user = users[1];
        user.age +=1 ;
        // make the user's name uppercase
        user.name1 = user.name1.toUpperCase();
        console.log(user);
    }
      

// The function does not need a returnstatement, it will merely modify the user object.
        updateUserNew();

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument. 
    
    function oldAndLoud(person) 
    {
        person.age += 1; 
        person.name = person.name.toUpperCase(); 
    }
    oldAndLoud(user);

    console.log(user);

//--------------------------------------------------------------------------------------------------------------------------
//  Cat Combinator

// 1. Mama cat
// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
        let cat1 = {
            name: "kitty",
            breed: "Persian",
            age: 3
        };
  
  // Log the cat's age and breed
  // console.log the cat's age
// console.log the cat's breed
        console.log(cat1.age);   
        console.log(cat1.breed); 


//--------------------------------------------------------------------------------------------------------------------------

// 2. Papa cat
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)
        let cat2 = {
            name: "Metro",
            breed: "Siamese ",
            age: 4
        };

        console.log(cat2.name);  
        console.log(cat2.breed); 
        console.log(cat2.age);   

//--------------------------------------------------------------------------------------------------------------------------

//  Combine Cats!
// The cats are multiplying!

// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
    // function combineCats(mama, papa) 
    // {
    //     console.log("Mama Cat:", mama);
    //     console.log("Papa Cat:", papa);
    // }
    function combineCats(mama, papa)
     {
      
        return {
          name: mama.name + papa.name, 
          age: 1,                    
          breed: mama.breed + "-" + papa.breed 
             };
      }


// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
   
     console.log(combineCats(cat1, cat2));
//--------------------------------------------------------------------------------------------------------------------------



    