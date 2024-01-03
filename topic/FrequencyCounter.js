let nameee = "sourabhkumar vishalkumar rahulkumar";

// Declaring a function named 'fCounter' that takes a parameter called 'str'.
function fCounter(str) {
  // Declaring an empty object called 'map' to store the frequency of each character.
  let map = {};

  // Using a 'for...of' loop to iterate through each character in the input string 'str'.
  for (let elm of str) {
    // Checking if the current character (elm) is already a key in the 'map' object.
    if (map[elm]) {
      // If the character is already a key, increment its value by 1.
      map[elm] = map[elm] + 1;
      // Logging the updated frequency of the character to the console.
      console.log(map[elm] + 1);
    } else {
      // If the character is not a key in the 'map' object, set its value to 1.
      map[elm] = 1;
    }
  }map[elm]

  // Returning the final 'map' object containing the frequency of each character.
  return map;
}

// Calling the 'fCounter' function with the 'nameee' string as an argument and logging the result to the console.
console.log(fCounter(nameee));
