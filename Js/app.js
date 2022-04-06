const header = document.querySelector('.header')
const button = document.querySelector('.button')
const logo = document.querySelector('.header__logo span')

var index = false



window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('active')
        button.classList.add('active')
    }else {
        if(index == false) {
            header.classList.remove('active')
        }
        button.classList.remove('active')
    }
    console.log(window.scrollY)
})

 //Burger 

  const burgerBtn = document.querySelector('.burger')
  const menu = document.querySelector('.menu')

  burgerBtn.addEventListener('click', () => {
      if(index == false) {
          header.classList.add('active')
          menu.classList.add('active')
          index = true
      }else{
          if(window.screenY == 0) {
            header.classList.remove('active')
        }
        console.log(window.screenY)
            menu.classList.remove('active')
            index = false
      }
      
  })

var swiper = new Swiper(".slider", {
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });


 