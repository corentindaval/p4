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

function verifcompl(){
    const elementprenom=document.querySelector('.firstname');
    const elementnom=document.querySelector('.name');
    const elementmail=document.querySelector('.email');
    const elementbirthdate=document.querySelector('.birthdate');
    const elementquantity=document.querySelector('.quantity');
    if(elementprenom===null || elementnom===null || elementmail===null || elementbirthdate===null || elementquantity===null){
        return false;
    }else{
        return true;
    }


}

//verif nb caractere
const aslength = (element, min=1) => {
    const elementlength = element.length;
    if (elementlength < min && elementlength != 0) return "le champs doit contenir au moins 2 caracteres";
};

function checkFirstName(){
    const element=document.querySelector('.firstname');
    const firstname =document.querySelector('#first');

    if(firstname.value.length<2){
        console.log("test");
        // element.dataset.error="veuiller entrer plus de 2 caracteres";
        document.querySelector(".erreurprenom").style.display="block";
        element.dataset.errorVisible=true;
        return false;
    }else{
      //  element.removeAttribute("data-error");
        //element.dataset.errorVisible=false;
        document.querySelector(".erreurprenom").style.display="none";
        return true;
    }

};

function checkName(){
    const element=document.querySelector('.name');
    const firstname =document.querySelector('#last');

    if(firstname.value.length<2){
      //  element.dataset.error="veuiller entrer plus de 2 caracteres";
        // element.dataset.error=true;
        document.querySelector(".erreurnom").style.display="block";
        return false;
    }else{
       // element.removeAttribute("data-error");
        //element.dataset.errorVisible=false;
        document.querySelector(".erreurnom").style.display="none";
        return true;
    }

};

//verif validiter
const valid = (element, reg) => {
    const regex = new RegExp(reg);
    const test = regex.test(element.value.trim());
    if (!test) return "${element.name} n'est pas valide";
  

    };

function checkmail(){
    const reg= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regex = new RegExp(reg);
    const element=document.querySelector('.email');
    const test = regex.test(element.value.trim());

    if (!test){
      //  element.dataset.error="${element.name} n'est pas valide";
      //  element.dataset.error=true;
        document.querySelector(".erreurmail").style.display="block";
        return false;
        //return "${element.name} n'est pas valide"
    }else{
      //  element.removeAttribute("data-error");
      //  element.dataset.errorVisible=false;
        document.querySelector(".erreurmail").style.display="none";
        return true;

    };

};

function checkbirthdate(){
    const element=document.querySelector('.birthdate');
    const firstname =document.querySelector('#birthdate');
    const reg=/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const regex = new RegExp(reg);
    const test = regex.test(element.value.trim());

    if (!test){
     //   element.dataset.error="${element.name} n'est pas valide";
       // element.dataset.error=true;
        document.querySelector(".erreurbirthdate").style.display="block";
        return false;
        //return "${element.name} n'est pas valide"
    }else{
      //  element.removeAttribute("data-error");
        //element.dataset.errorVisible=false;
        document.querySelector(".erreurbirthdate").style.display="none";
        return true;

    };

};



//verif entier
const isinteger = (element) => {
    if (!Number.isInteger(parseInt(element))) return "cette valeur doit etre un entier";
};


function checkquantity(){
    const element=document.querySelector('.quantity');
    const firstname =document.querySelector('#quantity');
        if (!Number(element.value)){ 
          //  element.dataset.error="cette valeur doit etre un entier";
          //  element.dataset.error=true;
            document.querySelector(".erreurquantity").style.display="block";
            return false;
            //return "cette valeur doit etre un entier"
        }else{
           // element.removeAttribute("data-error");
           // element.dataset.errorVisible=false;
            document.querySelector(".erreurquantity").style.display="none";
            return true;
        };
       
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

function checklocation(){
    const element=document.querySelectorAll('.location');
    const firstname =document.querySelector('#location');
        let checked = false;
        for (let i = 0; i < element.length; i++) {
            const input = element[i];
            if (input.name === "cgu" && !input.checked){
                element[i].dataset.error="vous devez accepter les cgu";
                element[i].dataset.error=true;
                return false;
                //   return "vous devez accepter les cgu";
            }
            if (input.checked){ 
                checked = true;
                document.querySelector(".erreurlocation").style.display="none";
                return true;
            }
        }
        if (!checked){ 
            document.querySelector(".erreurlocation").style.display="block";
            return false;
            //return "vous devez choisir une option"
        };
};

function checkcgu(){
    const element=document.querySelector('.cgu');
    const firstname =document.querySelector('#cgu');
        let checked = false;
            if (!element.checked){
               // element.dataset.error="vous devez accepter les cgu";
               // element.dataset.error=true;
                document.querySelector(".erreurcgu").style.display="block";
                return false;
                //   return "vous devez accepter les cgu";
            } else{ 
                checked = true;
               // element.removeAttribute("data-error");
                //element.dataset.errorVisible=false;
                document.querySelector(".erreurcgu").style.display="none";
                return true;
            }
        }
      
/*
//verif formulaire valide
const validation = (element) => {
    const input = element.querySelectorAll("input");
    var nbtest=0;
    let erreur = isempty(input[0].value.trim());
    console.log("0");
    switch (input[0].name) {
        case "first":
            console.log("totaux");
            nbtest+=1;
        case "last":
            erreur = (!erreur) ? aslength(input[0].value.trim(), 2) : erreur;
            console.log("1");
            nbtest+=1;
            break;
        case "email":
            erreur = (!erreur) ? valid(input[0], /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) : erreur;
            console.log("2");
            nbtest+=1;
            break;
        case "birthdate":
            erreur = (!erreur) ? valid(input[0], /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/) : erreur;
            console.log("3");
            nbtest+=1;
            break;
        case "quantity":
            erreur = (!erreur) ? isinteger(input[0].value.trim()) : erreur;
            console.log("4");
            nbtest+=1;
            break;
        case "location":
            erreur = ischecked(input);
            console.log("5");
            nbtest+=1;
            nbtest+=1;
            break;
        case "cgu":
            erreur = ischecked(input);
            console.log("6");
            nbtest+=1;
        default:
            break;

    }

    console.log("nbtest:"+nbtest);
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
*/



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
    const formdataelements = document.querySelectorAll(".formData");
    let erreur=false;
    // validation(formdataelements[i]);
    
    if(checkFirstName()===false ||checkName()===false || checkbirthdate()===false || checkmail()===false || checklocation()===false ||checkquantity()===false || checkcgu()===false){
        console.log(checkcgu());
        erreur=false;
    }else{
        erreur=true
    }
  
       // verifcompl();
       // erreur = validation(formdataelements[i]);
    if ( erreur){ confirmation("merci,votre reservation a ete effectuer.");}
});





