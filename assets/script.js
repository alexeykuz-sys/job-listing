const filterRef= document.getElementById('filter');
const clearRef = document.getElementById('clear');
const buttonRef = document.querySelector('.button-wrapper')
const buttonRole = document.querySelectorAll('.button');
const cards = document.querySelectorAll('.card')


function filterHandler(){
    filterRef.style.display=('flex');
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
    buttons = document.querySelectorAll('.button')
    buttons.forEach(button => button.addEventListener('click', (e)=>{
        click = e.target;
        newElement(click.innerHTML)
        filterHandler()
    }))
        

}
buttonRoleHandler()


buttonRole.forEach(but => but.addEventListener('click', event => {
        for(i=0; i<cards.length; i++){
            console.log(cards[i].children[1].children[0].children)
            if(event.target in cards[i]){
                return;
             } else     cards[i].style.display = 'none';
             console.log(event.target, cards[i])
        
    
}

}))