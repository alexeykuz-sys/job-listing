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
    // buttons = document.querySelectorAll('.button')
    buttonRole.forEach(button => button.addEventListener('click', (e)=>{
        click = e.target;
        console.log(click)
        newElement(click.innerHTML)
        filterHandler()
        
    }))
}
buttonRoleHandler()


