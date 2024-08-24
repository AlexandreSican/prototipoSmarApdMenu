let menuOpen = document.querySelector('.menu-items')
let btnOpenMenu = document.querySelector('.menu-btn-open button')
let changeIcon = document.querySelector('.menu-btn-open i')


btnOpenMenu.addEventListener('click', () => {
    
    let menuHeight = document.querySelector('.menu-items').clientHeight

    if(menuHeight <= 150){
        menuOpen.style.maxHeight = "190px"
        btnOpenMenu.innerHTML = '<p>Fechar Menu</p> <i class="fa-solid fa-angles-up"></i>'
       

    }else if(menuHeight >= 150){
        menuOpen.style.maxHeight = "90px"
        btnOpenMenu.innerHTML = '<p>Expandir Menu</p> <i class="fa-solid fa-angles-down"></i>'
      
    }
})