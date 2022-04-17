

//modal nick jugador
const play = document.getElementById('play')

play.addEventListener('click', e => {
    const player = document.getElementById('player').value

    //pinta en el DOM el nombre del jugador
    const playerDOM = document.querySelector('.player-dom')
    playerDOM.innerHTML = player

    const hideModal = document.querySelector('.modal-player')
    hideModal.classList.add('hide-modal')

    const showContent = document.querySelector('.container-game')
    showContent.classList.add('show-content')

    e.preventDefault()
})