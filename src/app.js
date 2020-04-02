window.addEventListener('load', function(event) {
    const closeButton = document.querySelector('.header__button--left')
    const openButton = document.querySelector('.header__button--right')
    const sidebar = document.querySelector('.sidebar')
    const body = document.querySelector('body')

    // Al abrir el sidebar se coloca con margen izquierdo de 0,
    // para que se muestre en su lugar. (Esto recorre el otro item
    // flex)
    openButton.addEventListener('click', function(event) {
        body.classList.add('js-open')
        openButton.style.display = 'none'
        closeButton.style.display = 'inline-block'
        sidebar.style.marginLeft = 0
    })

    // Al cerrar el sidebar, su margen izquierdo se reduce en 300px
    // si esta en modo tablet o superior, o al 100% para dispositivos
    // menores a una tablet
    closeButton.addEventListener('click', function(event) {
        body.classList.remove('js-open')
        closeButton.style.display = 'none'
        openButton.style.display = 'inline-block'
        // Consultar media query al estilo JS
        const mq_tablet = window.matchMedia('(min-width: 768px)')
        if(mq_tablet.matches) {
            sidebar.style.marginLeft = '-300px'
        } else {
            sidebar.style.marginLeft = '-100%'
        }
    })


    // Existe un problema al redimensionar la página.
    //
    // Si el sidebar se ha abierto y cerrado con anterioridad en un modo de pantalla
    // diferente al actual (mobile, tablet o superior),
    // es posible que no se encuentre bien oculto (-300px VS -100%), ocasionando que los contenidos
    // adyacentes aparezcan incompletos.
    window.addEventListener('resize', function(event) {
        const mq_tablet = window.matchMedia('(min-width: 768px)')
        if(!body.classList.contains('js-open') && mq_tablet.matches) {
            sidebar.style.marginLeft = '-300px'
        } else if(!body.classList.contains('js-open') && !mq_tablet.matches) {
            sidebar.style.marginLeft = '-100%'
        }
    })
})

