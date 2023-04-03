//Criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Edyelgue'

    if (nome === 'Edyelgue') {
        resolve('Usuário Edyelgue encontrado!')
    } else{
        reject('O usuário Edyelgue não foi encontrado!')
    }
})

 myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Edyelgue'

    if (nome === 'Edyelgue') {
        resolve('Usuário Edyelgue encontrado!')
    } else{
        reject('O usuário Edyelgue não foi encontrado!')
    }
})

 myPromise2
 .then((data) => {
    return data.toLowerCase()
})
.then((stringModifie) => {
    console.log(stringModifie)
})

myPromise2
.then((data) => {
    return data.toUpperCase()
})
.then((stringUpper) => {
    console.log(stringUpper)
})

myPromise2
.then((data) => {
    return data.toLocaleUpperCase()
})
.then((stringTitle) => {
    console.log(stringTitle)
})

// Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Edyelg'

    if (nome === 'Edyelgue') {
        resolve('Usuário Edyelgue encontrado!')
    } else{
        reject('O usuário Edyelgue não foi encontrado!')
    }
})

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})

// Resolver várias promessas (All)
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('P1 Ok! Timeout')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 Ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 Ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('teste assync')

// Várias promessas com race
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('P4 Ok! Timeout')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 Ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 Ok!')
})

const resolveAll2 = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// Fetch request na API do GitHub
// Fetch API

const userName = 'edyelgue'

fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        accept: 'application/vnd.github.v3+json',
    },
})
.then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(`O nome do usuário é: ${data.name}`)
})
.catch((err) => {
    console.log(`Houve algum erro: ${err}`)
});