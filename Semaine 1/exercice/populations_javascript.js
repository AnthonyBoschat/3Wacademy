const populations = [
    { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'] },
    { id: 1, name: "Albert", jobs : [ 'doctor'] },
    { id: 2, name: "John" , jobs : ['mathematician', 'doctor'] },
    { id: 3, name: "Brice", jobs : ['dev fullstack'] },
    { id: 4, name: "Farid", jobs : ['dentist'] },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack'] },
    { id: 7, name: "Dallas" , jobs : [ 'dev fullstack'] },
    { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs : ['mathematician'] },
    { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
    { id: 11, name: "Ismael", jobs : ['doctor'] },
    { id: 12, name: "Ian" },
  ];

// Comptez tout les docteurs
// Récupérez les noms des développeurs fullstack
// Récupérez les nom des personnes quin'ont jamais travaillée
// bonus : utilisations .length, .includes

// En utilisant reduce
function numberOfDoctor(array){
    const result = array.reduce((count, human) => {
        if(human.jobs && human.jobs.includes("doctor")){
            return count + 1
        }
        return count
    }, 0)
    console.log(result)
}
numberOfDoctor(populations)






// En utilisant map
function nameOfFullStack(array){
    let tableauDeNom = []
    array.map((human) => {
        if(human.jobs){
            let metier = human.jobs
            if(metier.includes("dev fullstack"))
            {
                tableauDeNom.push(human.name)
            }
        }
    })
    console.log(tableauDeNom)
}
nameOfFullStack(populations)






// En utilisant map
function neverWorked(array){
    let tableauDeBranleur = []
    array.map((human) => {
        if(!human.jobs){
            tableauDeBranleur.push(human.name)
        }
    })
    console.log(tableauDeBranleur)
}
neverWorked(populations)




// Un tableau qui trie les noms par ordre alphabétiques

const order = () => {
    // On tri la population comme suit : 
    return result = populations.sort((a, b) => {
        if(a.name > b.name){return 1} // Si le nom de A ( le premier ) est superieur à celui de B( le deuxième ) ( via unicode ), alors on retourne 1 à sort, et on lui dit que A doit etre placer APRES B ( il a une priorité plus fort )
        else if(a.name < b.name){return -1} // Ici c'est l'inverse
        return 0 // Et dans ce cas, on les laisse à la même place
    })

    // A savoir que sort, décale l'analyse des numéro au fur et à mesure, il compare index 0 : 1 puis 1 : 2 puis 2 : 3, etc..
}
console.log(order())


/* Correction */

/*

const countDoctor = () => {
    return populations.reduce((acc, arr) => {
      if (arr.jobs?.includes('doctor'))
        acc++;
    return acc;
  }, 0)
};

const devFullStack = () => {
    return populations.filter((person) => person.jobs?.includes('dev fullstack')).map(filtrepreson => filtrepreson?.name);
}

const jobless = () => {
    return populations.filter((person) => {
      if (!person.jobs)
        return person.name
  }).map( (filtered) => filtered.name)
}

console.log(countDoctor())
console.log(devFullStack())
console.log(jobless())

*/

