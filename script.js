/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
let userText = document.querySelector("textarea");
let updatedText = document.getElementById("text-output");
let updatedTextContent = document.createElement("P");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let left = document.getElementById("left-align");
let center = document.getElementById("center-align");
let right = document.getElementById("right-align");

function updateText() {
  // CODE GOES HERE

  document.addEventListener("keyup", () => {
    updatedTextContent.textContent = userText.value;
    updatedText.append(updatedTextContent);
  });
}
updateText();
/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  //CODE GOES HERE
  bold.addEventListener("click", () => {
    bold.classList.toggle("active");
    elem.classList.toggle("bold");
  });
}
makeBold(updatedTextContent);

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  italic.addEventListener("click", () => {
    italic.classList.toggle("active");
    elem.classList.toggle("italic");
  });
}
makeItalic(updatedTextContent);

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  //CODE GOES HERE
  underline.addEventListener("click", () => {
    underline.classList.toggle("active");
    elem.classList.toggle("underline");
  });
}
makeUnderline(updatedTextContent);

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */

function alignText(elem, alignType) {
  // CODE GOES HERE
  updatedTextContent.style.textAlign = alignType;

  for (let i = 0; i <= 2; i++) {
    if (
      document.getElementsByClassName("align")[i].classList.contains("active")
    ) {
      document.getElementsByClassName("align")[i].classList.remove("active");
    }
  }
  elem.classList.add("active");
}
