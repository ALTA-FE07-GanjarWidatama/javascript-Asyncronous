//in this part, you have to create a program that will returning promise between random colour or
//error message whit timeout 3 second
//all youn have to do is crate random number using math random between 0 - 7, if the random
//number returning number more than 4,it will returning error message "Failed to get random
//color, please try again", otherwise, it will returning color from listcolor using random number
// as a index to get color from listcolors

console.log("loading start...");
const getRandomColours = new Promise((reject, resolve) => {
  const listColour = ["green", "yellow", "blue", "orange", "red"];

  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 7);

    if (randomNum > 4) {
      reject("failed to get random colour, please try again");
    }
    resolve("the colour we get is a " + listColour[randomNum]);
    getRandomColours
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally(() => console.log("loading end.."));
  }, 3000);
});
