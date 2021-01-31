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

      });
    })
    .catch(err => console.log(err))
}

getData()
