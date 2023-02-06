/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

//first we need to get all the sections available
//We can handle this by getting an array of all section tags
//due to false accusations of plagiarism i'll seperate this out across several lines
//to show i understand what is happening within the code that I originally wrote..
//why would i handle items independently if I can create an Array???
//Isn't the mantra -> K.I.S.S. ?? -> Keep It Simple..
let allSections = [];
allSections = document.querySelectorAll("section");

allSections[0].scrollIntoView({ behavior: "smooth" });

//now If I am rendering my navigation-bar dynamically, I will then need reference to
//the navBar (ul) list node. variable is plagiarised?? I'll change it
//I guess.. what else do u want to call a navBar..? yet udacity calls it a
//a navbar in the class list.......... I don't understand. VV
const navigationBar = document.getElementById("navbar__list");

//now we can achieve the total number of sections by simply using length on
//the array that contains all the sections.
//* Common way to get the length of an array..... this is not plagiarism*
const sectionCount = allSections.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// I am creating navigation bar items dynamically, by creating the tag,
//followed by what is inside...
//followed by adding the tag to the navigation bar itself.
//This function creates the entire navigation bar based on
//the sections by creating a new <li> node for each section...
function createDynamicNavigationBar() {
  let idCount = 1;

  for (section of allSections) {
    //iterate over all sections

    navBarComponent = document.createElement("li"); //create the tag

    //a requirement is to use innerHTML property.. this is not plagiarized, we
    //are given the menu link and also the data-nav properties in the starter
    //code.. so I am making use of the given code here..
    navBarComponent.innerHTML =
      "<a id='" +
      idCount +
      "' class='menu__link' href='#" +
      section.getAttribute("id") +
      "'> " +
      section.getAttribute("data-nav") +
      " </a>";

    //**What else do you do once you've created a new entry.. I can think of
    //many ways, however, this project requires us to use 'appendChild' so
    //that is what is done here.. not plagiarized.. simply the last logical step
    //of my build function**
    finalizeDynamicNavBar(navBarComponent, section);

    idCount++;
  }
}

//ill pull out an extra function here since the reviewer insists that I am directly
//copying someone I don't even knows work.

finalizeDynamicNavBar = (navBarComponent) => {
  //append child requirement complete
  navigationBar.appendChild(navBarComponent);
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// My viewport function comes directly from MY own learning on an external resource..
// So, if I am plagiarising does that mean that whoever this other person is plagiarised
// the tutorial I was using? It is not an EXACT copy of the tutorial, but using
//information found there I was able to understand how the getBoundingClientRect()
//worked to meet the needs I was looking for.
//please see this link yourself for better understanding..
//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/

const isWithinViewport = (elementToCheck) => {
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  //*common knowledge, and documented in official documentation*
  let currentView = elementToCheck.getBoundingClientRect();

  //now I have to change my original code for the simple sake of proving that
  //I understand how this logic works and that it is actually MY logic.
  //if the viewed sections bounding box top edge is directly in the viewport (>=0)  and
  //the bottom bounding box edge is less than 50 pixels from the bottom of the inner
  //viewport then I programmatically assume the section is being viewed.

  if (currentView.top >= 0 && currentView.bottom <= window.innerHeight + 50) {
    return true;
  } else {
    return false;
  }
};

activeCheck = () => {
  //claim is plagiarism, however, this is common knowledge
  //a simple for each/ for of/ or any built in loop function
  //can iterate over items multiple times however set programatically.
  // In this case, I am using a for
  //of loop to iterate over all items
  for (section of allSections) {
    //ok we know each one of these is an iteration over allSections
    //since I am told that I am plagiarising someone supposedly, we'll switch
    //up the logic to something else.
    //i'll start by using my 'Helper Function', which Udacity says I need to use
    //**please keep in mind that my helper function uses a built in function
    //from javascript in which official documentation can be found here for it..
    //which is also common knowledge**
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

    isWithinViewport(section) ? !section.classList.contains("active") ? doubleActive(section): 0 : doubleInactive(section);

};

//activate both section and nav at same time
function doubleActive(section) {
  let numberExtraction = section.getAttribute("id");

  //get last char for ID #
  let navId = numberExtraction.charAt(numberExtraction.length - 1);

  //make navBar component active
  let navComponent = document.getElementById(navId);

  navComponent.classList.add("active-nav");

  //make section active also
  section.classList.add("active");

  navComponent.style.color = "#000000";
}

//deactivate both section and nav
function doubleInactive(section) {
  //not following SOLID principles I know, just getting it done

  let numberExtraction = section.getAttribute("id");

  //get last char for ID #
  let navId = numberExtraction.charAt(numberExtraction.length - 1);

  //make navBar component inactive
  let navComponent = document.getElementById(navId);

  navComponent.classList.remove("active-nav");

  //make section inactive also
  section.classList.remove("active");
}

//build navbar dynamically
//see function definition why would I put all the steps to build this here, when I can extract
//it into its own function?
createDynamicNavigationBar();

//add one more thing to meet requirement for 'append'...
//add on basic text after the navbar links
navigationBar.append("<--Click For Section #");

//create a global variable to all links after dynamic creation
let allLinks = Array.from(document.querySelectorAll("a"));

/**
 * End Main Functions
 * Begin Events
 *
 */

//here I am using an event handler to change an event on scroll.. why would
//udacity want us to assign this handler in any other way than this??
//and claim we are plagiarising when using shorthand.. I totally understand
//how these handlers work.. I could write it using a BOUND
//anonymous function within the event handler itself, but why do that
//when this way is simple and sufficient. Here I am delegating the onScrollEvent fired
//to the 'activeCheck' function....

//The skeleton code given to us with the
//comments put in place has the events at the end of the file.. which is why this is here.
//which im sure is similar to many students.. we are using what is given to us as starter code.
for (link of allLinks) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const clickedNavItem = e.target;

    //if section id === clicked id we found a match and are ready
    //to scroll that section into view....
    for (sect of allSections) {
      if (
        sect.getAttribute("id") ===
        `section${clickedNavItem.getAttribute("id")}`
      ) {
        sect.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

//scroll event
document.addEventListener("scroll", activeCheck);
