function decomposition(nombre){
    let initial = nombre;
    let tableau = "";
    let diviseur = 2;
    let facteurs = [];
    let total = "";
    tableau += "Décomposition de : " + nombre + "\n";
    while (nombre > 1){
        if (nombre % diviseur === 0){
            tableau += nombre + " | " + diviseur + "\n";
            facteurs.push(diviseur);
            nombre = nombre / diviseur;
            if (total === ""){total += diviseur;}else{total += " × " + diviseur;}
        }else{diviseur = diviseur + 1;}
    }
    tableau += " 1 | 1";
    tableau += "\n" + initial + " = " + total;
    return [facteurs, tableau];
}

function PGCD(a, b) {
    let resultatA = decomposition(a);
    let resultatB = decomposition(b);

    let facteursA = resultatA[0];
    let facteursB = resultatB[0];

    let tableauA = resultatA[1];
    let tableauB = resultatB[1];


    let communs = [];

    for (let facteur of facteursA) {
        if (facteursB.includes(facteur)) {
            communs.push(facteur);

            let position = facteursB.indexOf(facteur);

            facteursB.splice(position, 1);
        }
    }

    let valeurPGCD = 1;

    for (let facteur of communs) {
        valeurPGCD = valeurPGCD * facteur;
    }
    resultat.textContent =
    tableauA + "\n" +
    tableauB + "\n" +
    "Facteurs communs : " + communs.join(" × ") + "\n" +
    "PGCD = " + valeurPGCD;

}

const commencer = document.getElementById("commencer");
const choix = document.getElementById("choix");
const resultat = document.getElementById("resultat");
commencer.addEventListener("click", function() {
    choix.innerHTML = `
        <h2>Choisis une option.</h2>
        <button id="decomposer">Décomposition en facteurs premiers</button>
        <p>
        <button id="pgcd">Calcul du PGCD</button>
        </p>`;
    const decomposer = document.getElementById("decomposer");
    const pgcd = document.getElementById("pgcd");
    decomposer.addEventListener("click", function() {
        resultat.innerHTML = `
            <label for="nombre">Entrer le nombre à decompose.</label>
            <input type="Number" placeholder="Entrer le nombre ici..." id="nombre">
            <p>
            <button id="calcul">Décomposer</button>
            </p>`;
        const calcul = document.getElementById("calcul");
        calcul.addEventListener("click", function(){
            const nombre = document.getElementById("nombre");
            let valeur = Number(nombre.value);
            let valeurInitiale = valeur;
            let facteurs = "";
            resultat.textContent = "";
            if (Number.isInteger(valeur) && valeur > 1){
                resultat.textContent += "Decompositon de " + valeur + " :\n";
                while (valeur > 1){
                    for (let i = 2; i <= valeur; i++){
                        if (valeur % i === 0){
                            resultat.textContent += valeur + " | " + i + "\n";
                            if (facteurs === ""){facteurs += i;}else{facteurs += " × " + i;}
                            valeur = valeur / i;
                            break;
                }}}
                resultat.textContent += 1 + " | " + 1 + "\n";
                resultat.textContent += valeurInitiale + " = " + facteurs;
        }})
    });
    pgcd.addEventListener("click", function() {
        resultat.innerHTML = `
           <p>Saisissez les deux nombres :</p>
           <input id="nombre1" type="Number" placeholder="Prémier nombre...">
           <input id="nombre2" type="Number" placeholder="Deuxième nombre...">
           <p>
           <button id="calculer">Calculer</button>
           </p>`;
           const calculer = document.getElementById("calculer");
           calculer.addEventListener("click", function() {
               const nombre1 = document.getElementById("nombre1");
               const nombre2 = document.getElementById("nombre2");
               let a = Number(nombre1.value);
               let b = Number(nombre2.value);
               if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
                   PGCD(a, b)
               } else {
                   resultat.textContent = "Entrez deux nombres entiers positifs.";
                   }
           })
    });
});
