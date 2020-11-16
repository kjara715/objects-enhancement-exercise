
//same keys and values ES2015
const createInstructor = (firstName, lastName) => ({ firstName, lastName})
   
//computed property names ES2015

let favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

//ES2015  
  const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }
  


const createAnimal = (species, verb, sound) => ({
        species,
        [verb](){
            return sound
        }
    })
