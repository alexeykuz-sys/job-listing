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


cards.forEach(card => {
    let roles = card.children[1].children[0].children
    console.log(roles)
    rolesArray = Array.from(roles)
    // for(i=0;i<roles.length; i++){
        // console.log(rolesArray)
        rolesArray.forEach(role =>role.addEventListener('click', (e)=>{
            selectedRole = e.target;
            newElement(selectedRole.innerHTML);
            filterHandler('flex');
            let buttons = document.querySelectorAll('.button');
            
            buttons.forEach(button => {
                let filteredRoles = button.innerHTML;
                if(selectedRole.innerHTML === filteredRoles){
                    console.log(button.parentNode.parentNode.parentNode)
                    button.parentNode.parentNode.parentNode.classList.remove('hide')
                    button.parentNode.parentNode.parentNode.classList.add('active')
                } 
                if(button.parentNode.parentNode.parentNode.classList.contains('hide')){
                    button.parentNode.parentNode.parentNode.style.display = 'none'
                }
            })
        }))
    // }
})

 

// function hideCards(){
//     inActives= document.querySelectorAll('.hide')
//     inActivesArray = Array.from(inActives)
//     console.log(inActives)
//     inActivesArray.forEach(card =>{
//         // console.log(card)
//         if(card.classList.contains('hide')){
//         card.style.display = 'none';
//         }
//     })
// }
    // inActives.filter()
    // console.log(inActives)
    // inActives.forEach(inActive =>{
    //     // console.log(inActive)
    //     inActive.style.display = 'none'
    // })
// }

