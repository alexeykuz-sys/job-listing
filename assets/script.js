const filterRef= document.getElementById('filter');
const clearRef = document.getElementById('clear');
// const crossRef = document.getElementById('filter').children[0].children[0].children[1]
const buttonRef = document.querySelector('.button-wrapper')
const buttonRole = document.querySelector('.button');
const rolesRef = document.getElementById('rolesRef');

// console.log(crossRef)

function filterHandler(){
    filterRef.style.display=('flex');
    
}






function newElement(el) {
    let divRef = document.createElement("div");
    let divButton = document.createElement('div'); 
    let divCross = document.createElement('img');
    divCross.src = './images/icon-remove.svg'
    divRef.className = "button-wrapper";
    divButton.className = 'button'
    divCross.className = "cross";
    divCross.id = 'cross'
    divRef.appendChild(divButton);
    divButton.innerHTML = el
    console.log(el)
    divRef.appendChild(divCross);
    document.getElementById("rolesRef").appendChild(divRef);
    // roleButtonRefHandler()
}



function buttonRoleHandler(){
    buttons = document.querySelectorAll('.button')
    buttons.forEach(button => button.addEventListener('click', (e)=>{
        click = e.target;
        console.log(click)
        newElement(click.innerHTML)
        filterHandler()
        
    }))
}
buttonRoleHandler()

function removeFilter(){
    filterButtons = filterRef.children[0].children[0]
    console.log(filterButtons)

        filterRef.children[0].children[0].style.display = 'none'
    
}
clearRef.addEventListener('click', removeFilter)

// function roleButtonRefHandler(){
//     filterRef.children[0].children[0].children[1].addEventListener('click', (event) => {
//         console.log(event.target)
//         roleToRemove = event.target.parentElement
//         buttonWrapper = filterRef.children[0].children[0]
//         console.log(roleToRemove)
//         for(i=0;i <roleToRemove.length;i++){
//             roleToRemove[i].style.display = 'none';
//             console.log(roleToRemove[i])
//         }
//     })
// }