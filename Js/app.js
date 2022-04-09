const header = document.querySelector('.header')
const button = document.querySelector('.button')
const logo = document.querySelector('.header__logo span')

var index = false



window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('active')
        button.classList.add('active')
    } else {
        if (index == false) {
            header.classList.remove('active')
        }
        button.classList.remove('active')
    }
})
window.addEventListener('load', () => {
    if (window.scrollY > 0) {
        header.classList.add('active')
        button.classList.add('active')
    }
})

//Burger 

const burgerOpen = document.querySelector('.burger')
const burgerClose = document.querySelector('.close')
const menu = document.querySelector('.burger__menu')
const navigation = document.querySelectorAll('.list__item-item')

burgerOpen.addEventListener('click', () => {
    menu.classList.add('active')
})

burgerClose.addEventListener('click', () => {
    menu.classList.remove('active')
})

navigation.forEach(links => {
    links.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})



var swiper = new Swiper(".slider", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//Portfolio Showmore

const showmoreButton = document.getElementById('portfolio__button-btn')
var current = 9;

showmoreButton.onclick = () => {
    event.preventDefault()
    let item = [...document.querySelectorAll('.portfolio__items .portfolio__item')]

    try {
        for (var i = current; i < current + 6; i++) {
            item[i].classList.add('show')
        }
    } catch (error) {}

    current += 6
    console.log(current)


    if (current >= item.length) {
        showmoreButton.style.display = 'none'
    }


}