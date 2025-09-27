let crossiconEl=document.querySelector('.cross-icon')
let emailnotificationEl=document.querySelector('.email-adress-notification')
let registerbtnEl=document.querySelector('.register-button')
registerbtnEl.addEventListener('click',()=>{
    emailnotificationEl.style.display='block'
})
crossiconEl.addEventListener('click',()=>{
    emailnotificationEl.style.display='none'
    
})