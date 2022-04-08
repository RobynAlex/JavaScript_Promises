console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/*
function watchTurorialCallback(callback, errorCallback) {
    let userLeft = false;
  
    if (userLeft) {
      errorCallback("User left.");
    } else {
      callback("Thumbs up and Subscribe!");
    }
  }
  
  watchTurorialCallback(
    (message) => {
      console.log(message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    }
  );
  */

async function watchTurorialCallback(callback, errorCallback) {
    let userLeft = Math.round(Math.random());

    if (userLeft) {
        throw "User left.";
    } else {
        return "Thumbs up and subscribe.";
    }
}


async function giveStatusMessage() {
    try {
    let message = await watchTurorialCallback();
    console.log(message);
} catch (error) {
    console.log(error);
}
}



giveStatusMessage();