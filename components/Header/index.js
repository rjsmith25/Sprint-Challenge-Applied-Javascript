// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  let header = document.createElement("div");
  let headerDate = document.createElement("span");
  let headerH1 = document.createElement("h1");
  let headerTemp = document.createElement("span");

  // add class to main div header
  header.classList.add("header");

  // add header date content
  headerDate.classList.add("date");
  headerDate.textContent = "SMARCH 28, 2019";

  // add h1 content
  headerH1.textContent = "Lambda Times";

  // add header temp
  headerTemp.classList.add("temp");
  headerTemp.textContent = "98°";

  header.appendChild(headerDate);
  header.appendChild(headerH1);
  header.appendChild(headerTemp);

  return header;
}

let headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());
