/*
.########....###....########..##.......########....###....##.....##
....##......##.##...##.....##.##.......##.........##.##...##.....##
....##.....##...##..##.....##.##.......##........##...##..##.....##
....##....##.....##.########..##.......######...##.....##.##.....##
....##....#########.##.....##.##.......##.......#########.##.....##
....##....##.....##.##.....##.##.......##.......##.....##.##.....##
....##....##.....##.########..########.########.##.....##..#######.
*/
// construction du tableau js 
var jRPG = [];
jRPG[0] = [];
jRPG[0]["nom"] = "Fate Grand Order";
jRPG[0]["date"] = "2015-07-30";
jRPG[0]["editeur"] = "Aniplex";
jRPG[0]["plateforme"] = "Android and/or iOS";
jRPG[0]["adaptation"] = "anime";
jRPG[0]["serie"] = "Fate";

jRPG[1] = [];
jRPG[1]["nom"] = "Fire Emblem: Awakening";
jRPG[1]["date"] = "2013-04-19";
jRPG[1]["editeur"] = "Nintendo";
jRPG[1]["plateforme"] = "3DS";
jRPG[1]["adaptation"] = "manga";
jRPG[1]["serie"] = "Fire Emblem";

jRPG[2] = [];
jRPG[2]["nom"] = "Persona 5";
jRPG[2]["date"] = "2016-09-15";
jRPG[2]["editeur"] = "Atlus";
jRPG[2]["plateforme"] = "PS3";
jRPG[2]["adaptation"] = "anime";
jRPG[2]["serie"] = "Shin Megami Tensei, Persona";

jRPG[3] = [];
jRPG[3]["nom"] = "Dragon Quest XI : Les Combattants de la destinée";
jRPG[3]["date"] = "2017-07-29";
jRPG[3]["editeur"] = "Square Enix";
jRPG[3]["plateforme"] = "XBOX";
jRPG[3]["adaptation"] = "aucune";
jRPG[3]["serie"] = "Dragon Quest";

jRPG[4] = [];
jRPG[4]["nom"] = "Final Fantasy VII Remake";
jRPG[4]["date"] = "2020-04-10";
jRPG[4]["editeur"] = "Square Enix";
jRPG[4]["plateforme"] = "PS4";
jRPG[4]["adaptation"] = "aucune";
jRPG[4]["serie"] = "Final Fantasy";

jRPG[5] = [];
jRPG[5]["nom"] = "Ni no Kuni : La Vengeance de la sorcière céleste";
jRPG[5]["date"] = "2013-02-01"; // (PS3 UE)
jRPG[5]["editeur"] = "Bandai Namco";
jRPG[5]["plateforme"] = "SWITCH";
jRPG[5]["adaptation"] = "film d'animation";
jRPG[5]["serie"] = "Ni no Kuni";

jRPG[6] = [];
jRPG[6]["nom"] = "Bravely Default";
jRPG[6]["date"] = "2012-10-11";
jRPG[6]["editeur"] = "Square Enix";
jRPG[6]["plateforme"] = "3DS";
jRPG[6]["adaptation"] = "aucune";
jRPG[6]["serie"] = "Bravely";

jRPG[7] = [];
jRPG[7]["nom"] = "Granblue Fantasy";
jRPG[7]["date"] = "2014-03-10";
jRPG[7]["editeur"] = "Cygames";
jRPG[7]["plateforme"] = "Android and/or iOS";
jRPG[7]["adaptation"] = "film d'animation";
jRPG[7]["serie"] = "Granblue";

// construction du tableau html
function constructTable() {
    var sHTML = "<thead>";
    sHTML += "<tr>";
    sHTML += "<td>Nom</td>";
    // sHTML+= "<td>Date</td>"; Date cachée
    sHTML += "<td>Editeur</td>";
    sHTML += "<td>Console</td>";
    sHTML += "<td>Adaptation</td>";
    // sHTML+= "<td>Série</td>"; Série cachée
    sHTML += "<td>Informations</td>";
    sHTML += "<td>Editer</td>";
    sHTML += "<td>Supprimer</td>";
    sHTML += "</tr>";
    sHTML += "</thead>";
    sHTML += "<tbody>";
    for (var i = 0; i < jRPG.length; i++) {
        sHTML += "<tr>";
        sHTML += "<td>" + jRPG[i]["nom"] + "</td>";
        // sHTML+= "<td>" + jRPG[i]["date"] + "</td>"; Date cachée
        sHTML += "<td>" + jRPG[i]["editeur"] + "</td>";
        sHTML += "<td>" + jRPG[i]["plateforme"] + "</td>";
        sHTML += "<td>" + jRPG[i]["adaptation"] + "</td>";
        // sHTML+= "<td>" + jRPG[i]["serie"] + "</td>"; Série cachée
        sHTML += "<td onClick=\"infoRPG(" + i + ")\"><img src=\"img/information.png \">";
        sHTML += "<td onClick=\"editRPG(" + i + ")\">EDIT " + i + "</td>";
        sHTML += "<td onClick=\"deleteRPG(" + i + ")\"><button class=\"btn_delete\">X</button></td>";
        sHTML += "</tr>";
    }
    sHTML += "</tbody>";

    // affichage en html
    $('#tableau_jeux').html(sHTML);
}

/*
.########....###....########..##.......########....###....##.....##
....##......##.##...##.....##.##.......##.........##.##...##.....##
....##.....##...##..##.....##.##.......##........##...##..##.....##
....##....##.....##.########..##.......######...##.....##.##.....##
....##....#########.##.....##.##.......##.......#########.##.....##
....##....##.....##.##.....##.##.......##.......##.....##.##.....##
....##....##.....##.########..########.########.##.....##..#######.
*/
/*
..######...#######..##....##.########.####..######..
.##....##.##.....##.###...##.##........##..##....##.
.##.......##.....##.####..##.##........##..##.......
.##.......##.....##.##.##.##.######....##..##...####
.##.......##.....##.##..####.##........##..##....##.
.##....##.##.....##.##...###.##........##..##....##.
..######...#######..##....##.##.......####..######..
*/

// refactorisation du code pour régénérer la table
function regenerationJRPG() {
    tables.clear();
    tables.destroy();
    constructTable();
    tables = $('#tableau_jeux').DataTable(configuration);
}
// récupération du champ radio dans le js
var radioSelect = "";
function checkedRadio() {
    for (let i = 0; i < $("[name=adaptation]").length; i++) {
        if ($("[name=adaptation]")[i].checked) {
            radioSelect = $("[name=adaptation]")[i].value;
        }
    }
}

// récupération de la radio dans le champ html
function recupRadio(adapt) {
    var iCheckRadio = $("[name=adaptation]");

    for (let i = 0; i < iCheckRadio.length; i++) {
        if (iCheckRadio[i].value == adapt) {
            iCheckRadio[i].checked = true;
        }
    }
}

// fonction pour reset le champ radio
function unchecked() {
    for (let i = 0; i < $("[name=adaptation]").length; i++) {
        if ($("[name=adaptation]")[i].checked) {
            radioSelect = $("[name=adaptation]")[i].checked = false;
        }
    }
}

// fonction pour régénerer les champs de saisies à vides
function emptyForm() {
    // appel de la fonction pour reset le checkbox
    unchecked();

    // remise à zéro des champs d'input
    $('#nom').val("");
    $('#date').val(""); //Date cachée
    $('#editeur').val("");
    $('#console').val("");
    $('#serie').val("");  //Série cachée

    // remise à zéro de la radio
    $("#adaptation").val(radioSelect);
}

// fonction pour refresh la page html
function reset() {
    window.location.reload();
}

// fonction pour la controle de saisie du nom
var inputNom = $('#nom').val();
function saisieControlNom() {
    if ((inputNom != "")) {
        document.getElementById("btn_ajouter").disabled = "";
    }
    else if ((inputNom == "")) {
        document.getElementById("btn_ajouter").disabled = "disabled";
        alert("Veuillez saisir un nom");
    }
}

// fonction pour garder le bouton disabled
function boutonAjouterDisabled() {
    document.getElementById("btn_ajouter").disabled = "disabled";
    //alert("Veuillez saisir un nom");
}
/*
..######...#######..##....##.########.####..######..
.##....##.##.....##.###...##.##........##..##....##.
.##.......##.....##.####..##.##........##..##.......
.##.......##.....##.##.##.##.######....##..##...####
.##.......##.....##.##..####.##........##..##....##.
.##....##.##.....##.##...###.##........##..##....##.
..######...#######..##....##.##.......####..######..
*/

/*
..######..########..########....###....########.########......####.......########..########....###....########.
.##....##.##.....##.##.........##.##......##....##...........##..##......##.....##.##.........##.##...##.....##
.##.......##.....##.##........##...##.....##....##............####.......##.....##.##........##...##..##.....##
.##.......########..######...##.....##....##....######.......####........########..######...##.....##.##.....##
.##.......##...##...##.......#########....##....##..........##..##.##....##...##...##.......#########.##.....##
.##....##.##....##..##.......##.....##....##....##..........##...##......##....##..##.......##.....##.##.....##
..######..##.....##.########.##.....##....##....########.....####..##....##.....##.########.##.....##.########.
*/

// ajout d'une nouvelle entrée dans le tableau
function ajouterRPG() {
    // controle de saisie
    saisieControlNom();

    // appel de la fonction pour récup la value de la case
    checkedRadio();

    var iNew = jRPG.length;

    // création des nouveaux colonnes du tableau
    // éléments affichés
    jRPG[iNew] = [];
    jRPG[iNew]["nom"] = $('#nom').val();
    jRPG[iNew]["editeur"] = $('#editeur').val();
    jRPG[iNew]["plateforme"] = $('#console').val();
    jRPG[iNew]["adaptation"] = radioSelect;

    // éléments cachés
    jRPG[iNew]["date"] = $('#date').val(); //Date cachée
    jRPG[iNew]["serie"] = $('#serie').val(); //Série cachée

    // régénération du tableau après saisie
    regenerationJRPG();

    // régénération des champs de saisie à vide
    emptyForm();
}
/*
..######..########..########....###....########.########......####.......########..########....###....########.
.##....##.##.....##.##.........##.##......##....##...........##..##......##.....##.##.........##.##...##.....##
.##.......##.....##.##........##...##.....##....##............####.......##.....##.##........##...##..##.....##
.##.......########..######...##.....##....##....######.......####........########..######...##.....##.##.....##
.##.......##...##...##.......#########....##....##..........##..##.##....##...##...##.......#########.##.....##
.##....##.##....##..##.......##.....##....##....##..........##...##......##....##..##.......##.....##.##.....##
..######..##.....##.########.##.....##....##....########.....####..##....##.....##.########.##.....##.########.
*/

/*
.##.....##.########..########.....###....########.########
.##.....##.##.....##.##.....##...##.##......##....##......
.##.....##.##.....##.##.....##..##...##.....##....##......
.##.....##.########..##.....##.##.....##....##....######..
.##.....##.##........##.....##.#########....##....##......
.##.....##.##........##.....##.##.....##....##....##......
..#######..##........########..##.....##....##....########
*/
// fonction pour afficher les boutons cachés au clic sur la colonne EDIT
function AfficheBtnModif_Annul() {
    $("#btn_ajouter").hide();
    $("#btn_modifier").show();
    $('#btn_annuler').show();
}
// récupération des infos via clic EDIT
var iIndiceEditionToKeep;
function editRPG(iIndiceEdition) {

    // affichage des boutons via la fonction d'affichage
    AfficheBtnModif_Annul();

    /* ----- Affichage ---- */

    // Régénération de la checkbox
    // RegenerationChecked();

    // récupération des infos vis à vis de leurs places dans le tableau
    iIndiceEditionToKeep = iIndiceEdition;
    $('#nom').val(jRPG[iIndiceEdition]["nom"]);
    $('#editeur').val(jRPG[iIndiceEdition]["editeur"]);
    $('#console').val(jRPG[iIndiceEdition]["plateforme"]);
    recupRadio(jRPG[iIndiceEdition]["adaptation"]);

    /*----  Caché dans le tableau js ---- */
    $('#date').val(jRPG[iIndiceEdition]["date"]); //Date cachée
    $('#serie').val(jRPG[iIndiceEdition]["serie"]); //Série cachée
}


// récupération et affichage des infos
function infoRPG(iIndiceEdition) {
    $("#btn_ajouter").hide();
    $("#btn_modifier").hide();
    $("#btn_annuler").hide();
    /* ----- Affichage ---- */
    // récupération des infos vis à vis de leurs places dans le tableau
    iIndiceEditionToKeep = iIndiceEdition;
    $('#nom').val(jRPG[iIndiceEdition]["nom"]);
    $('#editeur').val(jRPG[iIndiceEdition]["editeur"]);
    $('#console').val(jRPG[iIndiceEdition]["plateforme"]);
    recupRadio(jRPG[iIndiceEdition]["adaptation"]);
    /*----  Caché dans le tableau js ---- */
    $('#date').val(jRPG[iIndiceEdition]["date"]); //Date cachée
    $('#serie').val(jRPG[iIndiceEdition]["serie"]); //Série cachée
}

/* 
fonction pour la mise à jour d'un élément du tableau
*/
function majRPG(iIndiceEdition) {
    var iMajRPG = iIndiceEditionToKeep;
    checkedRadio();
    // éléments affichés
    jRPG[iMajRPG] = [];
    jRPG[iMajRPG]["nom"] = $('#nom').val();
    jRPG[iMajRPG]["editeur"] = $('#editeur').val();
    jRPG[iMajRPG]["plateforme"] = $('#console').val();
    jRPG[iMajRPG]["adaptation"] = radioSelect;

    // éléments cachés
    jRPG[iMajRPG]["date"] = $('#date').val(); //Date cachée
    jRPG[iMajRPG]["serie"] = $('#serie').val(); //Série cachée
    regenerationJRPG();
    emptyForm();
}
/*
.##.....##.########..########.....###....########.########
.##.....##.##.....##.##.....##...##.##......##....##......
.##.....##.##.....##.##.....##..##...##.....##....##......
.##.....##.########..##.....##.##.....##....##....######..
.##.....##.##........##.....##.#########....##....##......
.##.....##.##........##.....##.##.....##....##....##......
..#######..##........########..##.....##....##....########
*/

/*
.########..########.##.......########.########.########
.##.....##.##.......##.......##..........##....##......
.##.....##.##.......##.......##..........##....##......
.##.....##.######...##.......######......##....######..
.##.....##.##.......##.......##..........##....##......
.##.....##.##.......##.......##..........##....##......
.########..########.########.########....##....########
*/

// fonction pour supprimer un élément du tableau
function deleteRPG(iIndiceSupprimer) {
    iIndiceSuppToKeep = iIndiceSupprimer;
    if (confirm("Attention , vous allez supprimer le jeu "
        + jRPG[iIndiceSupprimer]["nom"]
        + ".\nEn êtes-vous sur et certain ?")) {
        jRPG.splice(iIndiceSuppToKeep, 1);
    }
    regenerationJRPG();
}

/*
.########..########.##.......########.########.########
.##.....##.##.......##.......##..........##....##......
.##.....##.##.......##.......##..........##....##......
.##.....##.######...##.......######......##....######..
.##.....##.##.......##.......##..........##....##......
.##.....##.##.......##.......##..........##....##......
.########..########.########.########....##....########
*/

/*
.########.....###....########....###....########....###....########..##.......########
.##.....##...##.##......##......##.##......##......##.##...##.....##.##.......##......
.##.....##..##...##.....##.....##...##.....##.....##...##..##.....##.##.......##......
.##.....##.##.....##....##....##.....##....##....##.....##.########..##.......######..
.##.....##.#########....##....#########....##....#########.##.....##.##.......##......
.##.....##.##.....##....##....##.....##....##....##.....##.##.....##.##.......##......
.########..##.....##....##....##.....##....##....##.....##.########..########.########
*/

// CONFIGURATION DATATABLE
const configuration = {
    "stateSave": false,
    "order": [[1, "asc"]],
    "pagingType": "simple_numbers",
    "searching": true,
    "lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "Ze total stp"]],
    "language": {
        "info": "Jeux _START_ à _END_ sur _TOTAL_ sélectionnées",
        "emptyTable": "Aucun jeu",
        "lengthMenu": "_MENU_ jeux par page",
        "search": "Rechercher : ",
        "zeroRecords": "Aucun résultat de recherche",
        "paginate": {
            "previous": "Précédent",
            "next": "Suivant"
        },
        "sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
        "sInfoEmpty": "Jeux 0 à 0 sur 0 sélectionné",
    },
    "columns": [
        {
            "orderable": true
        },
        // {
        //     "orderable": false
        // colonne date
        // },
        {
            "orderable": true
        },
        {
            "orderable": true
        },
        {
            "orderable": false
        },
        // {
        //     "orderable": true
        //      colonne série
        // },
        {
            "orderable": false
        },
        {
            "orderable": true
        },
        {
            "orderable": false
        }
    ],
    'retrieve': true
};

var tables;
$(document).ready(function () {
    constructTable();
    // INITIALISATION DATATABLE
    tables = $('#tableau_jeux').DataTable(configuration);
});

/*
.########.....###....########....###....########....###....########..##.......########
.##.....##...##.##......##......##.##......##......##.##...##.....##.##.......##......
.##.....##..##...##.....##.....##...##.....##.....##...##..##.....##.##.......##......
.##.....##.##.....##....##....##.....##....##....##.....##.########..##.......######..
.##.....##.#########....##....#########....##....#########.##.....##.##.......##......
.##.....##.##.....##....##....##.....##....##....##.....##.##.....##.##.......##......
.########..##.....##....##....##.....##....##....##.....##.########..########.########
*/
