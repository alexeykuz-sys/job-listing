const filterRef= document.getElementById('filter');
const clearRef = document.getElementById('clear');
const buttonRef = document.querySelectorAll('.button-wrapper')
const buttonRole = document.querySelectorAll('.button');
const cards = document.querySelectorAll('.card');
const rolesRef = document.getElementById('rolesRef');
const buttons = document.querySelectorAll('.button');

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

clearRef.addEventListener('click', (e)=> {
   if(e.target.parentNode.children[0].hasChildNodes()){
        removeEl()
        showCards()
    } 
})


rolesRef.addEventListener('click',(e)=>{
    let cross=e.target.parentNode.children[1]
    if(cross.className = 'cross'){
        removeEl()
        showCards()
    } 
   
})


cards.forEach(card => {
    let roles = card.children[1].children[0].children
    console.log(roles)
    rolesArray = Array.from(roles)
        rolesArray.forEach(role =>role.addEventListener('click', (e)=>{
            selectedRole = e.target;
            newElement(selectedRole.innerHTML);
            filterHandler('flex');
            buttonHandler()
            hideCards()
        }))
})

function buttonHandler(){
    buttons.forEach(button => {
        let filteredRoles = button.innerHTML;
        if(selectedRole.innerHTML == filteredRoles){
            console.log(button.parentNode.parentNode.parentNode)
            button.parentNode.parentNode.parentNode.classList.remove('hide')
            button.parentNode.parentNode.parentNode.classList.add('active')
        }
    })
}

 function hideCards(){
    buttons.forEach(button => {
        if(button.parentNode.parentNode.parentNode.classList.contains('hide')){
            button.parentNode.parentNode.parentNode.style.display = 'none'
        }
    })
 }

 function showCards(){
    buttons.forEach(button => {
        if(button.parentNode.parentNode.parentNode.classList.contains('hide')){
            button.parentNode.parentNode.parentNode.style.display = 'flex'
        }
    })
 }
