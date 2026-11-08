const myCollapse = document.getElementById('mainMenu')
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(myCollapse)

const closeMenuWithClickInBackdrop = e => {
    const elementTarget = e.target
    if (elementTarget === myCollapse) bsCollapse.hide()
}

const closeMenuWithEscapeKey = e => e.key === 'Escape' && myCollapse.classList.contains('show') && bsCollapse.hide()

myCollapse.addEventListener('click', closeMenuWithClickInBackdrop)
document.addEventListener('keydown', closeMenuWithEscapeKey)