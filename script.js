const menuClosed = document.querySelector('.main-container')
const menuOpened = document.querySelector('.main-container-opened')
const btnMenuClosed = document.querySelector('.menu-span')
const btnMenuOpened = document.querySelector('.menu-span-opened')


btnMenuClosed.addEventListener('click', () => {
    menuOpened.style.display = 'flex'
    menuClosed.style.display = 'none'
})


btnMenuOpened.addEventListener('click', () => {
    menuOpened.style.display = 'none'
    menuClosed.style.display = 'flex'
})
