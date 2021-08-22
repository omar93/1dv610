let container = document.querySelector('#container')
let form = document.querySelector('#name-form')
let firstName = document.querySelector('#name')
let welcomeText = document.querySelector('#welcome-text')
let face = document.querySelector('#face')

form.addEventListener('submit', handleNameSubmit)

function handleNameSubmit(e) {
 e.preventDefault()
 form.parentElement.removeChild(form)
 document.querySelector('body').classList.add('oj')

 welcomeText.classList.add('fade-in')
 welcomeText.classList.remove('hidden')

 face.classList.add('fade-in')
 face.classList.remove('hidden')

 setTimeout( _ => {
  let nameText = document.createElement('p')
  nameText.textContent = firstName.value
  nameText.classList.add('fade-in')
  container.appendChild(document.createElement('br'))
  container.appendChild(nameText)
  }, 2000)
}