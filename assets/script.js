
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
    const cards = document.getElementById('cards')
    let card = document.createElement('card')
    card.className = 'card'
    cards.appendChild(card)
    template(card,element)
})

filteredCardsArray = [];
rejectedCardsArray = [];

const card = document.querySelectorAll('.card')
const buttons = Array.from(document.querySelectorAll('.button'))
cardsArray = Array.from(card)

cardsArray.forEach(card=>{
  card.classList.add('show')
})

function clickEvent(){
  cardsArray.forEach(card => card.addEventListener('click', (ev)=>{
    const targetEl = ev.target;
    buttons.forEach(button =>{
      let filteredCard = button.parentElement.parentElement.parentElement
      
        if(button.innerHTML === targetEl.innerHTML){
          filteredCard.classList.remove('show')
          filteredCard.classList.add(targetEl.innerHTML) 
        }
      })
      rejectedCards()
  }))
}

clickEvent()

function rejectedCards(){
  cardsArray.forEach(card=>{
    const found = cardsArray.map(card => card.className===('show'))
    console.log(found)
    if(card.classList.contains('show')){
      card.classList.remove('show')
      card.classList.add('hide')
    } 
  })
 
}
