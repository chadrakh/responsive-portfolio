/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/


  /*Active link*/


/*===== SCROLL REVEAL ANIMATION =====*/


/*SCROLL HOME*/


/*SCROLL ABOUT*/
 

/*SCROLL SKILLS*/


/*SCROLL WORK*/


/*SCROLL CONTACT*/






