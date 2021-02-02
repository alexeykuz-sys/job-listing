const cards = document.querySelector    (".cards")
const filter = document.querySelector("#filter")
//const filterArray = ["role", "level", "tool", "language"]
const populatedArray = [];
console.log(populatedArray)
// console.log(cards)
const getData = () => {
  fetch('./data.json')
    .then(data => data.json())
    .then(data => {
    //  console.log(data[0].role)
      data.forEach(element => {
        // console.log(element.role)
        const card = document.createElement("section")
        card.classList.add("card")
        cards.appendChild(card)
        template(card, element)
        // console.log(template)

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
                <div class='brand-name'>
                    <p>${element.company}</p   >
                    ${element.new ? `<span class="new">New!</span>` : `<span class="disableSpan">New!</span>`}
                    ${element.featured ? `<span class="featured">Featured</span>` : `<span class="disableSpan">Featured</span>`}
                </div>
                <p class="job-title">${element.position}</p>
                <div class='details-wrapper'>
                    <div>${element.postedAt}</div>
                    <div class="dot"></div>
                    <div>${element.contract}</div>
                    <div class="dot"></div>
                    <div>${element.location}</div>
                </div>
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
  
//   create new element in filter


function newElement(el) {
    let divRef = document.createElement("div");
    let divButton = document.createElement('div'); 
    let divCross = document.createElement('img');
    divCross.src = './images/icon-remove.svg'
    divRef.className = "button-wrapper";
    divButton.className = 'button-filter'
    divCross.className = "cross";
    divCross.id = 'cross'
    divRef.appendChild(divButton);
    divButton.innerHTML = el
    divRef.appendChild(divCross);
    document.getElementById("rolesRef").appendChild(divRef);
    
}

// check if button card targeted

cards.addEventListener('click',(ev)=>{
    const card = Array.from(document.querySelectorAll('.card'))

    const targetElement = ev.target

    const targetParent = targetElement.closest('section')
    const parental = Array.from(document.querySelectorAll("section"))
    

    
//   if (ev.target.tagName !== "BUTTON") {
//     return
//   }

//   if (!populatedArray.includes(targetElement.innerHTML)) {
//     populateModal(targetElement.innerHTML)
//   } else {
//     return
//   }


//   console.log(populatedArray)
    card.forEach(elm => {
        elm.classList.add("hideElements")
    })

    card.filter((elm, idx) => {
        //get all buttons in card , buttons are used for the filter only
        const btns = Array.from(elm.querySelectorAll("button"))
        //loop through the buttons one by one    
        btns.forEach(btn => {
            // for the selected/clicked button
            // add a class to the card parent 
            if (btn.innerHTML === targetElement.innerHTML) {
                elm.classList.add(targetElement.innerHTML)
            // check for the all cards that have the classes in the populatedArray
            // if found is true - display those cards only - filtering used every method
                const found = populatedArray.every(r => elm.classList.contains(r))
                console.log(found)

                if (found) {
                    elm.classList.remove("hideElements")
                    console.log(targetElement.innerHTML)
                }
            }   
        })
    })
})


