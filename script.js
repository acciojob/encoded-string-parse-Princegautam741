const parseCode = (str) => {
  // Split the input string using the "000" separator
  const parts = str.split("000");

  // Extract the first name, last name, and id from the parts array
  const firstName = parts[0];
  const lastName = parts[1];
  const id = parts[2];

  // Return an object with the extracted properties
  return { firstName, lastName, id };
};

// Example usage:
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
