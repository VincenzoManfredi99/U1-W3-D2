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

