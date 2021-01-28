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

let cardsArray = Array.prototype.slice.call(document.querySelectorAll('.card'));

cardsArray.forEach(card => {
    let roles = card.children[1].children[0].children
    for(i=0;i<roles.length; i++){
        roles[i].addEventListener('click', (e)=>{
            let buttons = Array.prototype.slice.call(document.querySelectorAll('.button'));
            buttons.forEach(button => {
                const result = buttons.filter(button => button.innerHTML == e.target.innerHTML)
                const resultN = buttons.filter(button => button.innerHTML !== e.target.innerHTML)
                // console.log(result.length, resultN.length)
                for(i=0;i<result.length;i++){
                    if(result){
                        result[i].parentNode.parentNode.parentNode.classList.remove('inactive')
                        result[i].parentNode.parentNode.parentNode.classList.add('active')
                        // console.log(result[i])
                        hideCards()
                    }

                }

            })
        })
    } 
})

function hideCards(){
    inActives= document.querySelectorAll('.inactive')
    inActivesArray = Array.from(inActives)
    console.log(inActivesArray)
    inActivesArray.forEach(el =>{
        console.log(el)
        if(el.classList.contains('inactive')){
        el.style.display = 'none';
        }
    })
    
    // inActives.filter()
    // console.log(inActives)
    // inActives.forEach(inActive =>{
    //     // console.log(inActive)
    //     inActive.style.display = 'none'
    // })
}

