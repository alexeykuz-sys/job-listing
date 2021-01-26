const filterRef= document.getElementById('filter');
const clearRef = document.getElementById('clear');
const buttonRef = document.querySelectorAll('.button-wrapper')
const buttonRole = document.querySelectorAll('.button');
const cards = document.querySelectorAll('.card');
const rolesRef = document.getElementById('rolesRef');


function filterHandler(element){
    filterRef.style.display = element;
}

function removeEl(){
    rolesRef.removeChild(rolesRef.firstElementChild);

}


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



function buttonRoleHandler(){
    // buttons = document.querySelectorAll('.button')
    buttonRole.forEach(button => button.addEventListener('click', (e)=>{
        click = e.target;
        // console.log(click)
        newElement(click.innerHTML)
        filterHandler('flex')
        
    }))
}
buttonRoleHandler()




clearRef.addEventListener('click', (e)=> {
   if(e.target.parentNode.children[0].hasChildNodes()){
        removeEl()
    } 
})


rolesRef.addEventListener('click',(e)=>{
    let cross=e.target.parentNode.children[1]
    if(cross.className = 'cross'){
        removeEl()
    } 
   
})

// cards.forEach(card => {
//     let roles = card.children[1].children[0].children
//     for(i=0;i<roles.length; i++){
//         // console.log(roles[i])
//         // console.log(rolesArray)
//         roles[i].addEventListener('click', (e)=>{
//             // console.log(e.target)
//             let buttons = Array.prototype.slice.call(document.querySelectorAll('.button'));
//             buttons.forEach(button => {
//                 const result = buttons.filter(button => button.innerHTML==e.target.innerHTML)
//                 // console.log(result)
//                 for(i=0;i<result.length;i++){
//                 result[i].classList.add('active')
//                 // console.log(result[i])
//                 }
//             })
           
//     })
// } 
// })

let cardsArray = Array.prototype.slice.call(document.querySelectorAll('.card'));

cardsArray.forEach(card => {
    let roles = card.children[1].children[0].children
    for(i=0;i<roles.length; i++){
        // console.log(roles[i])
        // console.log(rolesArray)
        roles[i].addEventListener('click', (e)=>{
            // console.log(e.target)
            let buttons = Array.prototype.slice.call(document.querySelectorAll('.button'));
            buttons.forEach(button => {
                const result = buttons.filter(button => button.innerHTML==e.target.innerHTML)
                // console.log(result)
                for(i=0;i<result.length;i++){
                result[i].classList.add('active')
                hideCards()
                }
            })
           
    })
} 
})


function hideCards(){
    var find = function(className) {
        var elements = document.getElementsByClassName('active');
        var elementsArray = [].slice.call(elements);
        console.log(elementsArray)
        for (var index = 0; index < elementsArray.length; index++) {
          var element = elementsArray[index];
          console.log(element.className)
          if (element.className == 'active') {
                // el = element.parentNode.parentNode.parentNode
                // el.style.display = 'none'
                return true
          } else if (element.className != 'active' ) {
                el = element.parentNode.parentNode.parentNode
                el.style.display = 'none'
          }
        }
        
        return false;
        // return null; // If you wish to return null instead of false (comment out previous line if this option is used)
      }
      console.log(find('active'));
}
// for(let i=0;i<cardsArray.length;i++){
    // console.log(cardsArray[i].children[1].children[0].children)
    // if(cardsArray[i].children[1].children[0].children[0].children.className != 'active'){
    //     console.log(cardsArray[i])

    // }

    
// }
