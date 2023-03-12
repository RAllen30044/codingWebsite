const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";

const dataFilter='[data-filter]';
const portfolioData= '[data-item]';

const root = document.documentElement;


// Theme

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// Portfolio

const filterLink= document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');


//Modal
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (element, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  element.classList.add(active);
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};
if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });
  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    //set active state
    setActive(elm, switcherBtn);
    setTheme(toggle);
  });
}

const generatePortfolioCard = (picture, category, product,dataItem) =>{

}


searchBox.addEventListener('keyup', (e)=>{
const searchInput = e.target.value.toLowerCase().trim();
portfolioItems.forEach((card)=>{
  if(card.dataset.item.includes(searchInput)){
    card.style.display='block';
  }else{
    card.style.display='none';
  }
})

})

for(const link of filterLink){
  link.addEventListener('click', function(){
    setActive(link, '.filter-link')
    const filter = this.dataset.filter;
    portfolioItems.forEach((card)=>{
if(filter==='all'){
  card.style.display = 'block';
}else if(card.dataset.item ===filter){
  card.style.display= 'block';
}else{
  card.style.display = 'none';
}
    })
  })
}

//Full site Modal "open Buttons"
for (const elem of openModal) {
  elem.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const elem of closeModal) {
  elem.addEventListener("click", function () {
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}
const grid = document.getElementsByClassName("portfolio-grid");



const cardDiv =  document.createElement("div");

cardDiv.setAttribute("class", "portfolio-card")
cardDiv.setAttribute("data-item", "web")

grid[0].appendChild(cardDiv);
const porfolioCard=document.getElementsByClassName("portfolio-card");
const cardBodyDiv =  document.createElement("div")
cardBodyDiv.setAttribute("class", "card-body");
porfolioCard[0].appendChild(cardBodyDiv);
const cardBody = document.getElementsByClassName("card-body");
const img = document.createElement("img");
cardBody[0].appendChild(img);
img.setAttribute("src","assets/images/portfolio-1.jpg")
img.setAttribute("alt","portfolio icon")

const anchorTag = document.createElement("a");
cardBody[0].appendChild(anchorTag);
anchorTag.setAttribute("href","#")
anchorTag.setAttribute("class","card-popup-box")
const popUp = document.getElementsByClassName("card-popup-box");
const popUpDiv = document.createElement("div");
const header3 = document.createElement("h3");
popUp[0].appendChild(popUpDiv);
let textNode= document.createTextNode("Web development")
popUpDiv.appendChild(textNode);
popUp[0].appendChild(header3);
textNode= document.createTextNode("Food Website")
header3.appendChild(textNode);
