const filterRef= document.getElementById('filter');
const clearRef = document.getElementById('clear');
// const crossRef = filterRef.children[0].children[0].children[1];
const buttonRef = document.querySelector('.button-wrapper')
const buttonRole = document.querySelectorAll('.button');

console.log(buttonRole[0].innerHTML)

function filterHandler(){
    filterRef.style.display = 'none';
}
clearRef.addEventListener('click',filterHandler);


// function roleButtonRefHandler(){
//     crossRef.addEventListener('click', (event) => {
//         if(event.target.parentElement.className = 'cross'){
//             event.target.parentElement.parentElement.style.display = 'none';
//         }
//     })
// }

// roleButtonRefHandler()


// function newElement() {
//     let divRef = document.createElement("div");
//     let divButton = document.createElement('div'); 
//     let divCross = document.createElementNS('<xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/>', 'svg');
//     divRef.className = "button-wrapper";
//     divButton.className = 'button'
//     divCross.className = "cross";
//     divCross.id = 'cross'
//     divRef.appendChild(divButton);
//     divButton.innerHTML = 'dfdf'
//     divRef.appendChild(divCross);
//     document.getElementById("rolesRef").appendChild(divRef);
    
//   }
  
  function buttonRoleHandler(){
      buttonRole.forEach(button =>button.addEventListener('click', ()=>{
        let divRef = document.createElement("div");
        let divButton = document.createElement('div'); 
        let divCross = document.createElementNS('<xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/>', 'svg');
        divRef.className = "button-wrapper";
        divButton.className = 'button'
        divCross.className = "cross";
        divCross.id = 'cross'
        divRef.appendChild(divButton);
        divButton.innerHTML = button.innerHTML
        divRef.appendChild(divCross);
        document.getElementById("rolesRef").appendChild(divRef);
      }))
      
  }

buttonRoleHandler()