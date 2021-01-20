const filterRef= document.getElementById('filter');
const clearRef = document.getElementById('clear');
// const crossRef = filterRef.children[0].children[0].children[1];
const buttonRef = document.querySelector('.button-wrapper')
const buttonRole = document.querySelector('.button');

console.log(filterRef.children[0].children[0])


function filterHandler(){
    filterRef.style.display=('flex');
    
}


// function roleButtonRefHandler(){
//     addEventListener('click', (event) => {
//         console.log(event.target.parentElement)
//         if(event.target.parentElement.className = 'cross'){
//             event.target.parentElement.parentElement.style.display = 'none';
//         }
//     })
// }

// roleButtonRefHandler()


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