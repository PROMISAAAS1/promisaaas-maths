const message = document.getElementById("message");
const button = document.getElementById("commencer");
button.addEventListener("click", function(){
    message.textContent = "Bienvenue dans PROMISAAAS MATH !";
});
const demande = document.getElementById("demande")
const facteurs = document.getElementById("facteurs");
facteurs.addEventListener("click", function(){
    demande.textContent = "Enter le nombre à décomooser.";
});
const number = document.getElementById("number");
const calculer = document.getElementById("calculer");
const resultat = document.getElementById("resultat");
calculer.addEventListener("click", function(){
    let valeur = Number(number.value);
    let facteurs = "";
    resultat.textContent = "";
    if (Number.isInteger(valeur) && valeur > 1){
        let nombreInitial = valeur;
        resultat.textContent += "Décomposition de " + valeur + "\n";
        while (valeur > 1) {
            for (let i = 2; i <= valeur; i++){
                if (valeur % i === 0){
                resultat.textContent += valeur + "|" + i +"\n";
                if (facteurs === ""){
                    facteurs += i;
                }
                else{
                    facteurs += " × " + i;
                }
                valeur = valeur / i;
                break;
        }}}
        resultat.textContent += 1 + "|" + 1;
        resultat.textContent += "\n" + nombreInitial + " = " + facteurs;
    }
    else{
        alert("Le nombre est invalide.")
}});
const nombre1 = document.getElementById("nombre1")
const nombre2 = document.getElementById("nombre2")
const calculerPGCD = document.getElementById("calculerPGCD");
const pgcd = document.getElementById("pgcd")
pgcd.addEventListener("click" , function(){
    demande.textContent ="Saisissez les deux nombres à calculer.";
})
calculerPGCD.addEventListener("click", function(){
    demande.textContent = "";
    let a = Number(nombre1.value);
    let b = Number(nombre2.value);
    let premierNombre = a;
    let deuxiemeNombre = b;
    a = Math.abs(a);
    b = Math.abs(b);
    resultat.textContent = "";
    if (a >=0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b) && a !== 0 || b !== 0){
        resultat.textContent = "Calcul de PGCD de " + premierNombre + " et " + deuxiemeNombre + "\n";
        while (b !== 0){
            let reste = a % b;
            resultat.textContent += a + " = " + b + " × " + Math.floor(a / b) + " + " + reste + "\n";
            a = b;
            b = reste;
        }
        resultat.textContent += "\nLe PGCD est : " + a;
    }
    else {
        alert("Les nombres sont invalides.")
}})
