
// function initAccordion() {
// const accordionList = document.querySelectorAll('.js-accordion dt')
// const activeX = 'active';
// accordionList[0].classList.add(activeX);
// accordionList[0].nextElementSibling.classList.add(activeX);


//  function activeAccordion(event) {
//     this.classList.toggle(activeX);
//     this.nextElementSibling.classList.toggle(activeX);
// }



// accordionList.forEach((list) => {
//     list.addEventListener('click', activeAccordion);
// })
// }





// const sections = document.querySelectorAll('.js-scroll');
// const halfWindow = window.innerHeight * 0.6;


// function activeScroll(section) {
//     const topOf = section.currentTarget.getBoundingClientRect().top;
//     const topOn = (topof - halfWindow) < 0;
//     if(top) {
//         section.classList.add('active');
//     }
// }




// window.addEventListener('scroll', activeScroll)


 
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabConent = document.querySelectorAll('.js-tabcontent section');




// function activeMenu(menu) {
//     menu.preventDefault();
//     console.log(menu.currentTarget);
// }

// tabMenu.forEach((event) => {
//     event.addEventListener('click', activeMenu);
// })


const aboutSection = document.querySelectorAll('.about');


function activeTab(active) {
    console.log(active.getBoundingClientRect)
}


aboutSection.forEach((event) => {
    event.addEventListener('click', activeTab)
})