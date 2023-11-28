const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("j'ai tenu ma promesse !")
        //reject("J'ai menti")
    }, 1000);
})

promise.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
// Then, quand c'est resolve , catch quand c'est reject










////////// Fonction qui retourne une promesse et chainage de promesse
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ca marche bien")
        }, 1000);
    })
}

function fetchMoreData(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${data} et c'est incroyable`)
        }, 1000);
    })
}

fetchData().then(result => {
    fetchMoreData(result).then(final => {
        console.log(final)
    })
})




///////// Promise.all

const promise1 = Promise.resolve("First promise")
const promise2 = Promise.resolve("Second promise")
const promise3 = Promise.resolve("Third promise")

Promise.all([promise1, promise2, promise3]).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

// Priorité à celle rejeter





///////// Vitesse de résolution d'une promesse .race
const fastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fast one")
    }, 100);
})

const slowPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Slow one")
    }, 800);
})

Promise.race([fastPromise, slowPromise]).then(result => {
    console.log(result)
})









/////////// Exercice 
// On défini un tableau d'object
const tableau = [{ id: 1, userid: 5, comment: "Bonjour" },
{ id: 5, userid: 1, comment: "Ca va bien?" },
{ id: 9, userid: 7, comment: "C'est bien les Promise" },
{ id: 50, userid: 1, comment: "Test un deux un deux" }]

// Première promesse : resolve etn retournant un object
const promesse = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({id:1, username:"Parkser", email:"anthony.kaos@hotmail.fr", name:"Anthony"})
        //reject("Utilisateur introuvable")
    }, 3000);
})



// On défini une fonction qui retournera une promesse,
// La fonction prendra comme paramètre un ID, ( un numero ), elle retournera une promsee qui : va filtrer dans le tableau les elements qui ont en commun userid et le paramètre id (element.userid === id)
// Et on resolve ce nouveau tableau de resultat

function comment(id){
    return new Promise((resolve, reject) => {
        const resultat = tableau.filter((element) => element.userid === id)
        resolve(resultat)
        //reject("probleme")
    })
}


// On lance la promesse, quand elle est résolu (.then()) on lance la fonction déclarer plus bas comment en lui passant l'id de l'object retourner par la promesse du dessus comme paramètre

// Quand comment est résolu, on console.log son resolve, le tableau de resultat de comment
promesse.then(result => {
    comment(result.id).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
})