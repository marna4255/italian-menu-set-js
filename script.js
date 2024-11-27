// Declare arrays representing menus from different vendors
const vendor1 = ["pizza", "pasta"];
const vendor2 = ["pizza", "calzones"];
const vendor3 = ["lobster"];
const vendor4 = ["calzones"];

// Combine all vendor menus into one master menu,
// using the Set object to ensure only unique food items are included
const masterMenu = [
  ...new Set([...vendor1, ...vendor2, ...vendor3, ...vendor4]),
];
console.log(masterMenu);

// Get the unordered list (ul) element from the DOM, where we'll append the menu items
const unOrderdList = document.querySelector(".unlist");

// Iterate over each unique food item in the master menu
masterMenu.forEach((foodItem) => {
  const newLi = document.createElement("li"); // Create a new list item (li) for each food item
  newLi.textContent = foodItem; // Set the text content of the new list item to the food item name
  unOrderdList.appendChild(newLi); // Append the new list item to the unordered list in the DOM
});
