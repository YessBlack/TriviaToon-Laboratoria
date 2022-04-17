//modal nick jugador
const play = document.getElementById('play')

play.addEventListener('click', e => {
    const player = document.getElementById('player').value

    //pinta en el DOM el nombre del jugador
    const playerDOM = document.querySelector('.player-dom')
    playerDOM.innerHTML = player

    //Ocultar modal
    const hideModal = document.querySelector('.modal-player')
    hideModal.classList.add('hide-modal')

    //Mostrar juego
    const showContent = document.querySelector('.container-game')
    showContent.classList.add('show-content')

    e.preventDefault()
})

//preguntas
import { data } from "./preguntas.js";

//---- Mostrar preguntas ----

//Mostrar Texto pregunta 
const showTextQuestion = (i) => {
    const question = document.querySelector('.question')
    const textQuestion = document.createElement("p")

    textQuestion.innerHTML = `${data[i].titulo} ${data[i].pregunta}`
    question.appendChild(textQuestion)
}

//Mostrar Opciones
const showOptions = (i) => {
    const options = document.querySelector('.options')
    const fragment = document.createDocumentFragment()

    let count = 1

    data[i].opciones.forEach( e => {
        const button = document.createElement('button')
        button.innerHTML = e
        button.classList.add('btn-choice')

        count++
        fragment.appendChild(button)
    })
    options.appendChild(fragment)
}

//Borrar Preguntas Anteriores
const deleteQuestion = () => {
    //borrar la pregunta
    const question = document.querySelector('.question')
    question.removeChild(question.firstChild)

    //borrar las opciones
    const options = document.querySelector('.options')
    options.innerHTML = ''
}

//comprobar respuestas correctas
let points = 0
let countP = 1

//Pasar Siguiente pregunta
const nextQuestion = (countP) => {
    if(countP === data.length) {
        //Aqui mostrar Resultado si ha finalizado
        const pointsDOM = document.querySelector('.points-dom')
        const playerDOM = document.querySelector('.player-dom')
        alert(`Felicitaciones ${playerDOM.innerHTML}, tu puntaje es ${pointsDOM.innerHTML}`)
        location.reload()
    }else {
        //sino, pasar a la siguiente pregunta
        deleteQuestion()
        showTextQuestion(countP)
        showOptions(countP)
        checkChoice(countP)
    }
    countP++
}

const checkChoice = (i) => {
    const choice = document.querySelectorAll('.btn-choice')
    const pointsDOM = document.querySelector('.points-dom')

    choice.forEach(el => {
    el.addEventListener('click', e => {

        //Desactivar buttons despues de responder
        choice[0].disabled = true
        choice[1].disabled = true
        choice[2].disabled = true
        choice[3].disabled = true

        nextQuestion(countP)
        countP++
        //mostrar puntos
        if(e.target.innerHTML === data[i].correcta){
            points++
            pointsDOM.innerHTML = points
        }else {
            pointsDOM.innerHTML = points
        }
    })
})
}

//salir
const btnExit = document.querySelector('.btn-exit')
btnExit.addEventListener('click', e => {
    location.reload();
})

showTextQuestion(0)
showOptions(0)
checkChoice(0)



