const cards = document.querySelector(".cards")
//const modal = document.querySelector(".modal")
//const filterArray = ["role", "level", "tool", "language"]
const populatedArray = [];

console.log(cards)
const getData = () => {
  fetch('./data.json')
    .then(data => data.json())
    .then(data => {
     console.log(data)
      data.forEach(element => {
        console.log(element.company)
        const card = document.createElement("section")
        card.classList.add("card")
        cards.appendChild(card)
        template(card, element)
        console.log(card)

      });
    })
    .catch(err => console.log(err))
}

getData()


const template = (card, element) => {
    card.innerHTML = `
        <div class="card-top">        
            <img src=${element.logo} class="logo" alt="${element.company}">
            <div class="job-title-wrapper">
                <h1 class="brand-name">${element.company}</h1>
                ${element.new ? `<span class="new">New!</span>` : `<span class="disableSpan">New!</span>`}
                ${element.featured ? `<span class="featured">Featured</span>` : `<span class="disableSpan">Featured</span>`}
            </div>
            <h2 class="job-title">${element.position}</h2>
            <div class='details-wrapper'>
              <div>${element.postedAt}</div>
              <div class="dot"></div>
              <div>${element.contract}</div>
              <div class="dot"></div>
              <div>${element.location}</div>
            </div>
        </div>
        <div class="card-bottom">
            <div class='roles'>
                <button class="button role actionBtn">${element.role}</button>
                <button class="button level actionBtn">${element.level}</button>
                ${element.languages.map(lang => `<button class="button language actionBtn">${lang}</button>`).join("")}
                ${element.tools.map(tool => `<button class="button tool actionBtn">${tool}</button>`).join("")}
            </div>
        </div>   
  `
  }
  