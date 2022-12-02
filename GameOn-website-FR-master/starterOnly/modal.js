function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form[name='reserve']");
const modalclose = document.querySelectorAll(".bground .close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//fermeture modale
const closemodale = () => modalbg.style.display = "none";

modalclose.forEach((btn) => btn.addEventListener("click", closemodale));

//verif si vide
const isempty = (element) => {
    if (element === "" || element === null) return "élément non rempli";
};

//verif nb caractere
const aslength = (element, min = 1) => {
    const elementlength = element.length;
    if (elementlength < min && elementlength != 0) return "le champs doit contenir au moins 2 caracteres";
};


//verif validiter
const valid = (element, reg) => {
    const regex = new RegExp(reg);
    const test = regex.test(element.value.trim());
    if (!test) return "${element.name} n'est pas valide";
};

//verif entier
const isinteger = (element) => {
    if (!Number.isInteger(parseInt(element))) return "cette valeur doit etre un entier";
};

//verif element est checker
const ischecked = (element) => {
    let checked = false;
    for (let i = 0; i < element.length; i++) {
        const input = element[i];
        if (input.name === "cgu" && !input.checked) return "vous devez accepter les cgu";
        if (input.checked) checked = true;
    }
    if (!checked) return "vous devez choisir une option";
};

//verif formulaire valide
const validation = (element) => {
    const input = element.querySelectorAll("input");
    let erreur = isempty(input[0].value.trim());
    console.log("0");
    switch (input[0].name) {
        case "first":
            console.log("totaux");
        case "last":
            erreur = (!erreur) ? aslength(input[0].value.trim(), 2) : erreur;
            console.log("1");
            break;
        case "email":
            erreur = (!erreur) ? valid(input[0], /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) : erreur;
            console.log("2");
            break;
        case "birthdate":
            erreur = (!erreur) ? valid(input[0], /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/) : erreur;
            console.log("3");
            break;
        case "quantity":
            erreur = (!erreur) ? isinteger(input[0].value.trim()) : erreur;
            console.log("4");
            break;
        case "location":
            erreur = ischecked(input);
            console.log("5");
            break;
        case "cgu":
            erreur = ischecked(input);
            console.log("6");
        default:
            break;

    }

    if (erreur != null) {
        element.dataset.error = erreur;
        element.dataset.errorVisible = true;
        return true;
    } else {
        element.dataset.error = "";
        element.removeAttribute("data-error");
        element.dataset.errorVisible = false;
        return false;
    }

};



//message de confirmation

const confirmation = (message) => {
    form.style.display = "none";
    const msg = document.createElement("p");
    msg.classList.add("confirm-message");
    msg.innerHTML = message;
    document.querySelector(".modal-body").append(msg);
};

//listener
const btnSubmit =document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const formdataelements = e.target.querySelectorAll(".formData");
    let erreur=false;
    for (let i = 0; i < formdataelements.length; i++) {
        validation(formdataelements[i]);
        erreur = validation(formdataelements[i]);
    }
    console.log(erreur);
    if (erreur){ confirmation("merci,votre reservation a ete effectuer.");}
});





