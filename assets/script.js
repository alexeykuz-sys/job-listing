
const jobs = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]
  
const filterRef= document.getElementById('filter');
const clearRef = document.getElementById('clear');
const rolesRef = document.getElementById("rolesRef");

// creates cards/jobs templates

const template = (card, element) => {
    card.innerHTML = `
        <div class="card-top">        
            <img src=${element.logo} class="logo" alt="${element.company}">	        
            <div class="job-title-wrapper">	          
                <div class='brand-name'>	        
                    <p>${element.company}</p>	                 
                    ${element.new ? `<span class="new">New!</span>` : `<span class="disableSpan">New!</span>`}	                    
                    ${element.featured ? `<span class="featured">Featured</span>` : `<span class="disableSpan">Featured</span>`}
                </div>
                <div class="job-title">${element.position}</div>
                <div class='details-wrapper'>
                    <div>${element.postedAt}</div>
                    <div class="dot"></div>
                    <div>${element.location}</div>
                </div>	               
            </div>	           
        </div>	
        <div class="card-bottom">
            <div class='roles'>
                <button class="button role">${element.role}</button>
                <button class="button level">${element.level}</button>
                ${element.languages.map(lang => `<button class="button language">${lang}</button>`).join("")}	                
                ${element.tools.map(tool => `<button class="button tool">${tool}</button>`).join("")}
            </div>
        </div>   
    `
}



jobs.forEach(element=>{
    const cards = document.getElementById('cards');
    let card = document.createElement('card');
    card.className = 'card';
    cards.appendChild(card);
    template(card,element);
})


// creates roles buttons in filter card

function newElement(el) {
  let divRef = document.createElement("div");
  let divButton = document.createElement('div'); 
  let divCross = document.createElement('img');
  divCross.src = './images/icon-remove.svg';
  divRef.className = "button-wrapper";
  divButton.className = 'button-filter';
  divCross.className = "cross";
  divCross.id = 'cross';
  divRef.appendChild(divButton);
  divButton.innerHTML = el;
  divRef.appendChild(divCross);
  document.getElementById("rolesRef").appendChild(divRef);
  
}

// function shows or hides filter card
function filterHandler(element){
  filterRef.style.display = element;
}


//  adds Show class to all cards
const card = document.querySelectorAll('.card');
cardsArray = Array.from(card);

// cardsArray.forEach(card=>{
//   card.classList.add('show');
// })

chosenCards=[]
// checks all buttons and filter cards depending on event target
let filteredButtons = []
const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button =>button.addEventListener('click', (event)=>{
  const targetEl = event.target;
  newElement(targetEl.innerHTML);
  filterHandler('flex');
  filteredButtons = buttons.filter(button=>button.innerHTML===targetEl.innerHTML);
  filteredButtons.forEach(filter=>{
    filteredCard = filter.parentElement.parentElement.parentElement;
    // console.log(filteredCard)
    chosenCards.push(filteredCard)
    // console.log(chosenCards)
    filteredCard.classList.add(targetEl.innerHTML);
    // filteredCard.classList.remove('show');
  })
  cardHandler(targetEl);
  clearFilter(targetEl);
}))


// checked if element clicked and if not hides the card

const cardHandler = (element) => cardsArray.forEach(card=>{
  clickedElement = card.classList.contains(element.innerHTML);
  // console.log(clickedElement)
  if(!clickedElement){
    card.style.display = 'none';
  }
})

// removes element from the filter card

function removeElement(x){
  let element = document.getElementById(x);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}

// clears all filtered roles, hides filter card and restores all job cards

const clearFilter = (targetEl) => clearRef.addEventListener('click', ()=>{
  cardsArray.forEach(card=>{
    card.classList.remove(targetEl.innerHTML);
    // card.classList.add('show');
    card.style.removeProperty('display');
    removeElement('rolesRef');
  filterHandler('none');
  })
})

//removes roles from filter and restores cards

rolesRef.addEventListener('click', (e)=>{
  let cross = e.target.parentNode.children[1];
  crossRoleRef = cross.parentElement.firstChild.innerHTML;
  crossCard = cross.parentElement;
    if(cross.className = 'cross'){
      crossCard.remove();
    }
  removeCardFilters();
  
})

function removeCardFilters(){
  
  cardsArray.forEach(card=>{
  let v = rolesRef.childElementCount
  // console.log(card.classList.length)
    console.log(v, card)
  if(chosenCards){
      console.log(chosenCards, v)
      card.classList.remove(crossRoleRef);
      card.style.removeProperty('display')
    } 
    if (v === 0){
      filterHandler('none');
    } 
      //  card.style.removeProperty('display');
    
    // filteredCard.classList.remove(crossRoleRef);
    // cardsArray.forEach(card=>{
    //   if(card.classList.contains('show')){
    //     card.style.removeProperty('display')
    //   }
    // })
    // console.log(cardsArray  )
    // filteredCard.classList.remove('show');
  })
}

