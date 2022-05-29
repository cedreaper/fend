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
const allSections = Array.from(document.querySelectorAll("section"));

//now If i am rendering my nav-bar dynamically, I will then need reference to
//the navBar (ul) list node.
const navBar = document.getElementById("navbar__list");

//now we can achieve the total number of sections by simply using length on
//the array that contains all the sections.
const sectionCount = allSections.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// we will need a function to create each nav item  based on the information
//we have available.

function createNavItem() {
  //heres the handy for of loop we learned about in the module
  for (section of allSections) {
    let link = section.getAttribute("id");
    let name = section.getAttribute("data-nav");

    navItem = document.createElement("li");

    //now that we have a list item created we need the text associated
    //which in es6 we can now use format interpolation with the backticks
    //(innerHTML requirement complete)
    navItem.innerHTML = `<a class='menu__link' href='#${link}'>${name}</a>`;

    //append child requirement complete
    navBar.appendChild(navItem);
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//before we can set active class, we need to understand what we are
//currently looking at in our window (aka Viewport) and if it is currently in
//our view
const currentlyViewed = (element) => {
  let sectionView = element.getBoundingClientRect();
  return sectionView.top <= 150 && sectionView.bottom >= 150;
};

function setActiveClass() {
  for (section of allSections) {
    //first check to see if section is currently viewed
    //with the view function
    if (currentlyViewed(section)) {
      //is it not the active class right now????
      if (!section.classList.contains("active")) {
        //no? Great! we will add it it now
        section.classList.add("active");
      }
    } else {
      //not being currently viewed? -make sure to remove any active...
      section.classList.remove("active");
    }
  }
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

//build navbar dynamically
//see function definition
createNavItem();

//add one more thing to meet requirement for append...
//add on basic text after the navbar links
navBar.append("<--Click For Section #");

document.addEventListener("scroll", setActiveClass);
