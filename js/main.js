const myCollapse = document.getElementById('mainMenu')

const closeMenu = () => {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(myCollapse)
    bsCollapse.hide()
}

const closeMenuWithClickInBackdrop = e => {
    const elementTarget = e.target
    if (elementTarget === myCollapse) closeMenu()
}

const closeMenuWithEscapeKey = e => e.key === 'Escape' && myCollapse.classList.contains('show') && closeMenu()

myCollapse.addEventListener('click', closeMenuWithClickInBackdrop)
document.addEventListener('keydown', closeMenuWithEscapeKey)