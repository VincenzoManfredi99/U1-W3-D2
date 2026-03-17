//Esercizio 1

const changeTitolo = (titoloP)=>{
const titolo= document.querySelector('div > h1')
console.log(titolo.innerText)
titolo.innerText = titoloP
}

console.log(changeTitolo('Questo è il nuovo titolo'))

// Esercizio 2

const addclass = ()=>{
const titolo= document.querySelector('div > h1')
titolo.classList.add('myHeading')
}

// Esercizio 3

const changePcontent = (ParagrafoP)=>{
    const paragrafi = document.querySelector('div > p')
    paragrafi.innerText = ParagrafoP
}

console.log(changePcontent('Modifica al testo'))

//Esercizio 4

const changeUrls = (urlP)=> {
const url1 = document.querySelector('div > a')
url1.setAttribute('href', urlP)
}

console.log(changeUrls('https://www.google.com'))


//Esercizio 5

const addLi = (nuovoLi)=>{
const seconda = document.getElementById('secondList')
const createLi = document.createElement('li')
createLi.textContent = nuovoLi
seconda.appendChild(createLi)
}

console.log(addLi('Nuovo testo'))

//Esercizio 6

const addParagraph = (paragraphParameteres)=>{
const firstDiv = document.querySelector('div')
const createParagraph = document.createElement('p')
createParagraph.textContent = paragraphParameteres
firstDiv.appendChild(createParagraph)
}

console.log(addParagraph('Nuovo paragrafo da aggiungere al primo div'))

//Esercizio 7

const eliminaFirstUl = ()=>{
    const firstUl = document.querySelector('ul')
    firstUl.remove()
}

console.log(eliminaFirstUl())

//Esercizio 8

const backgroundVerde = ()=> {
    const ulPos = document.querySelector('ul')
    ulPos.style.backgroundColor = 'green'
}

backgroundVerde()