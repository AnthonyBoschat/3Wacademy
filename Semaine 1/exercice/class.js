class Person{
    // Constructeur -> state
    constructor(name, age){
        this.name = name
        this.age = age
    }

    // Methode -> Comportement
    hello(){
        console.log("Hello, je m'appelle " + this.name)
    }

    bye(){
        console.log("Good bye")
    }
}





class Student extends Person{
    constructor(name, age, langage)
    {
        super(name, age)
        this.langage = langage
    }

    description(){console.log(`J'apprend le langage ${this.langage}`)}
}




const john = new Person("John", 25)
john.hello()

const camille = new Student("Camille", 25, "Javascript")
console.log(camille.name)

////////////////////////////
// Getter / Setter
////////////////////////////


class Rectangle{
    constructor(witdh, height){
        this._witdh = witdh
        this._height = height
    }

    get witdh(){
        return this._witdh
    }

    set witdh(value){
        this._witdh = value
    }
}

const rectangle = new Rectangle(50,10)
console.log(rectangle.witdh)
rectangle.witdh = 5
console.log(rectangle.witdh)


////////////////////////////
// Heritage
////////////////////////////

class vehicule {
    constructor(vitesse,taille){
        this.vitesse = vitesse
        this.taille = taille
    }

    deplacer(){
        console.log(`Le véhicule se déplace à ${this.vitesse} km/h`)
    }
}

class voiture extends vehicule{
    constructor(vitesse,taille,porte){
        super(vitesse,taille)
        this.porte = porte
    }

    deplacer(){
        console.log("Je suis une voiture qui roule vite")
    }

    klaxon(){
        this.deplacer() // Va chercher la methode actuelle
        super.deplacer() // Va chercher la methode du parent
       console.log("tut tut") 
    }
    
}

const vehicule1 = new vehicule(50,25)
//vehicule1.deplacer()

const voiture1 = new voiture(50,25,3)
voiture1.klaxon()




// Exercice de fin de journée

/*

Créez au total trois classes:
- Livre (propriétés: titre, auteur, année)
- Roman qui hérite de Livre (propriété en + : pages)
- Magazine qui hérite de Livre (propriété en + : fréquence)

Toutes les propriétés ont des getters et des setters.
Voici les méthodes pour chacune des classes:
- Livre : info() => affiche les informations du livre
- Roman : big() => retourne un boolean si le livre a + de 500 pages
- Magazine : info() => affiche les informations du livre, mais AUSSI sa fréquence

*/

/*

Créez au total trois classes:
- Livre (propriétés: titre, auteur, année)
- Roman qui hérite de Livre (propriété en + : pages)
- Magazine qui hérite de Livre (propriété en + : fréquence)

Toutes les propriétés ont des getters et des setters.
Voici les méthodes pour chacune des classes:
- Livre : info() => affiche les informations du livre
- Roman : big() => retourne un boolean si le livre a + de 500 pages
- Magazine : info() => affiche les informations du livre, mais AUSSI sa fréquence

*/

class Livre{

    // Attribut privée
    #titre
    #auteur
    #annee
    // Constructeur
    constructor(titre, auteur, annee){
        this.#titre = titre
        this.#auteur = auteur
        this.#annee = annee
    }
    // getter
    get titre(){return this.#titre}
    get auteur(){return this.#auteur}
    get annee(){return this.#annee}
    // setter
    set titre(value){this.#titre = value}
    set auteur(value){this.#auteur = value}
    set annee(value){this.#annee = value}
    // methode
    info(){
        console.log(`Titre : ${this.#titre} \n Auteur : ${this.#auteur} \n Annee de parution : ${this.#annee}`)
    }
}

class Roman extends Livre{
    // Attribut privée
    #page
    // Constructeur
    constructor(titre, auteur, annee, page){
        super(titre, auteur, annee)
        this.#page = page
    }
    // getter
    get page(){return this.#page}
    // setter
    set page(value){this.#page = value}
    // methode
    big(){return this.#page > 500}
}

class Magazine extends Livre{

    // Attribut privée
    #frequence
    // Constructeur
    constructor(titre, auteur, annee, frequence){
        super(titre, auteur, annee)
        this.#frequence = frequence
    }
    // getter
    get frequence(){return this.#frequence}
    // setter
    set frequence(value){this.#frequence = value}

    // methode
    info(){
        super.info()
        console.log(`\nFrequence de parution : ${this.#frequence}`)
    }

}

const livre = new Livre("Le seigneur des anneaux", "Tolkien", 1950, "hebdomadaire")
livre.info()
console.log(livre.auteur)

const roman = new Roman("Le seigneur des anneaux", "Tolkien", 1950, 600)
console.log(roman.big())

const magazine = new Magazine("Le seigneur des anneaux", "Tolkien", 1950, "hebdomadaire")
magazine.info()



