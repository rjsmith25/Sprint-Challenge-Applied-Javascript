// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function CardComponent(data) {
  let card = document.createElement("div");
  let cardHeadline = document.createElement("div");
  let cardAuthor = document.createElement("div");
  let cardImgContainer = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardName = document.createElement("span");

  // add main div card class
  card.classList.add("card");

  // add card headline class
  cardHeadline.classList.add("headline");
  cardHeadline.textContent = data.headline;

  // add author class
  cardAuthor.classList.add("author");

  // add card image container class
  cardImgContainer.classList.add("img-container");

  // card image src
  cardImg.src = data.authorPhoto;

  // add auther name to span
  cardName.textContent = `By ${data.authorName}`;

  // add child img
  cardImgContainer.appendChild(cardImg);

  // add author child elements
  cardAuthor.appendChild(cardImgContainer);
  cardAuthor.appendChild(cardName);

  // add child to main div
  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);

  return card;
}

let cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    let articles = res.data.articles;
    for (const prop in articles) {
      console.log(articles[prop]);
      articles[prop].forEach(article => {
        cardsContainer.appendChild(CardComponent(article));
      });
    }
  })
  .catch(err => {
    console.log(err);
  });
