const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Factory Function with properties

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, // 1 is refreshed and 10 is exhausted
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzzz`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play`);
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
//console.log(sora);
const clover = createPet("Clover", "rabbit");

const baxter = createPet("Baxter", "hamster");

const cleo = createPet("Cleo", "rat");

const francine = createPet("Francine", "turtle");

//log out all the objects
//console.log(sora, clover, baxter, cleo, francine);

// calling the play and sleep method using different objects instead of pet

clover.sleep();
baxter.play();

clover.isTired = 10;
francine.isTired = 9;

//console.log(clover);
//console.log(baxter);

const allPets = [sora, clover, baxter, cleo, francine];

const showPets = function (petArray) {
  // empty list
  pets.innerHTML = "";
  // CAN USE DIFFERENT VARIABLES WITH THE SAME PROPERTIES
  for (let petName of allPets) {
    let status = "ready to play";
    if (petName.isTired >= 7) {
      status = "sleeping";
    }

    let li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${petName.name}</span> the ${petName.species} is ${status}.`;
    pets.append(li);
  }
};

//Add Click Event

statusButton.addEventListener("click", function () {
  showPets(allPets);
});

console.log(allPets);
