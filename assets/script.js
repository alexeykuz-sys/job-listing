const filterRef= document.getElementById('filter');
const clearRef = document.getElementById('clear');
const buttonRef = document.querySelector('.button-wrapper')
const buttonRole = document.querySelectorAll('.button');
const cards = document.querySelectorAll('.card');
const rolesRef = document.getElementById('rolesRef');


function filterHandler(element){
    filterRef.style.display = element;
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
        filterHandler('flex')
        
    }))
}
buttonRoleHandler()




clearRef.addEventListener('click', (e)=> {
   console.log(e.target.parentNode.children[0].children.length)
    if(e.target.parentNode.children[0].hasChildNodes()){
            rolesRef.removeChild(rolesRef.firstElementChild);
            
    } else if(e.target.parentNode.children[0].children.length = 0){
        console.log('dfdf')
    }
})

