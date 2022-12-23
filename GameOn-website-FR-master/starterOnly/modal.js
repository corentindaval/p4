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

//fermeture modal
const closemodale = () => modalbg.style.display = "none";

modalclose.forEach((btn) => btn.addEventListener("click", closemodale));

//vérif si vide
const isempty = (element) => {
    if (element === "" || element === null) return "true";
};

//vérif nb caractères
const aslength = (element, min=1) => {
    const elementlength = element.length;
    if (elementlength < min && elementlength != 0) return "le champs doit contenir au moins 2 caracteres";
};

//vérif du prénom
function checkFirstName(){
    const element=document.querySelector('.firstname');
    const firstname =document.querySelector('#first');
    if(isempty(firstname.value)==="true"){//vérif si le champ prénom est vide
        document.querySelector(".erreurprenomvide").style.display="block";
        element.dataset.errorVisible=true;
        return false;
    }else{
        document.querySelector(".erreurprenomvide").style.display="none";
        if(firstname.value.length<2){//vérif si le champ prénom contient + de 2 caractères
            document.querySelector(".erreurprenom").style.display="block";
            element.dataset.errorVisible=true;
            return false;
        }else{//pas d'erreur pour le champ prénom
            document.querySelector(".erreurprenom").style.display="none";
            return true;
        }
    }
};

//vérif du nom
function checkName(){
    const element=document.querySelector('.name');
    const firstname =document.querySelector('#last');
    if(isempty(firstname.value)==="true"){//vérif si le champ nom est vide
        document.querySelector(".erreurnomvide").style.display="block";
        element.dataset.errorVisible=true;
        return false;
    }else{
        document.querySelector(".erreurnomvide").style.display="none";
        if(firstname.value.length<2){//vérif si le champ nom contient + de 2 caracteres
            document.querySelector(".erreurnom").style.display="block";
            return false;
        }else{//pas d'erreur dans le champ nom
            document.querySelector(".erreurnom").style.display="none";
            return true;
        }
    }
};

//vérif validité
const valid = (element, reg) => {
    const regex = new RegExp(reg);
    const test = regex.test(element.value.trim());
    if (!test) return "${element.name} n'est pas valide";
  

    };

//vérif de l'adresse mail
function checkmail(){
    const reg= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regex = new RegExp(reg);
    const element=document.querySelector('.email');
    const firstname =document.querySelector('#email');
    const test = regex.test(element.value.trim());
    if(isempty(firstname.value)==="true"){//vérif si le champ email est vide
        document.querySelector(".erreurmailvide").style.display="block";
        element.dataset.errorVisible=true;
        return false;
    }else{
        document.querySelector(".erreurmailvide").style.display="none";
        if (!test){//vérif si le champ email contient une adresse valide
            document.querySelector(".erreurmail").style.display="block";
            return false;
        }else{//pas d'erreur pour le champ email
            document.querySelector(".erreurmail").style.display="none";
            return true;

        };
    }
};

//vérif de la date d'anniversaire
function checkbirthdate(){
    const element=document.querySelector('.birthdate');
    const firstname =document.querySelector('#birthdate');
    let datesystem=new Date();
    datesystem.toLocaleDateString("fr");
    const dateactuel=datesystem.getFullYear()+"-"+datesystem.getMonth()+"-"+datesystem.getDate();
    const reg=/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const regex = new RegExp(reg);
    const test = regex.test(element.value.trim());
    if(isempty(firstname.value)==="true"){//vérif si le champ birthdate est vide
        document.querySelector(".erreurbirthdatevide").style.display="block";
        element.dataset.errorVisible=true;
        return false;
    }else{
        document.querySelector(".erreurbirthdatevide").style.display="none";
        if (!test){//vérif si le contenu du champ birthdate a un format valide
            document.querySelector(".erreurbirthdate").style.display="block";
            return false;
        }else{
            document.querySelector(".erreurbirthdate").style.display="none";
            if(firstname.value>dateactuel){//vérif si la date entrée est antérieure à la date actuelle
                document.querySelector(".erreurbirthdatesup").style.display="block";
                return false;
            }else{//pas d'erreur pour le champ birthdate
                document.querySelector(".erreurbirthdatesup").style.display="none";
                return true;
            }
        };
    }
};



//vérif entier
const isinteger = (element) => {
    if (!Number.isInteger(parseInt(element))) return "cette valeur doit etre un entier";
};

//vérif de la quantité
function checkquantity(){
    const element=document.querySelector('.quantity');
    const firstname =document.querySelector('#quantity');
    if(isempty(firstname.value)==="true"){//vérif si le champ quantity est vide
        document.querySelector(".erreurquantityvide").style.display="block";
        element.dataset.errorVisible=true;
        return false;
    }else{
        document.querySelector(".erreurquantityvide").style.display="none";
        if (!Number(element.value)){ //vérif si le contenu du champ quantity est un entier
            document.querySelector(".erreurquantity").style.display="block";
            return false;
        }else{//pas d'erreur pour le champ quantity
            document.querySelector(".erreurquantity").style.display="none";
            return true;
        };
    }
};


//vérif de la localisation
function checklocation(){
    const element=document.querySelectorAll('.location');
    const firstname =document.querySelector('#location');
        let checked = false;
        for (let i = 0; i < element.length; i++) {
            const input = element[i];
            if (input.checked){ //pas d'erreur pour le champ location
                checked = true;
                document.querySelector(".erreurlocation").style.display="none";
                return true;
            }
        }
        if (!checked){ //erreur du champ location:pas d'option checkée
            document.querySelector(".erreurlocation").style.display="block";
            return false;
        };
};

//vérif cgu
function checkcgu(){
    const element=document.querySelector('.cgu');
    const firstname =document.querySelector('#cgu');
        let checked = false;
            if (!element.checked){//erreur pour le champ cgu:case cgu non checkée
                document.querySelector(".erreurcgu").style.display="block";
                return false;
            } else{ //pas d'erreur dans le champ cgu
                checked = true;
                document.querySelector(".erreurcgu").style.display="none";
                return true;
            }
        }
   

//message de confirmation

function confirmation(){
    const modform=document.querySelector(".bground");
    const modalconfirm = document.querySelector(".confirm");
    //ouverture modal msg confirmation
    modform.style.display="none";
    modalconfirm.style.display="block";
};

//listener formulaire
const btnSubmit =document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const formdataelements = document.querySelectorAll(".formData");
    let erreur=false;
    if(checkFirstName()===false ||checkName()===false || checkbirthdate()===false || checkmail()===false || checklocation()===false ||checkquantity()===false || checkcgu()===false){
        erreur=false;
    }else{
        erreur=true
    }
    if ( erreur){ confirmation();}
});
//fonction fermeture msg confirmation
function fermeturemsg(){
    const modconf=document.querySelector(".confirm");
    modconf.style.display="none";
}
//listener confirmation
const btnconfirm=document.querySelector(".btn-confirm");//fermeture par le bouton
btnconfirm.addEventListener("click", (e) => {
    e.preventDefault();
    fermeturemsg();
});
const msgclose = document.querySelectorAll(".confirm .close");//fermeture par la croix
msgclose.forEach((btn) => btn.addEventListener("click", fermeturemsg));





