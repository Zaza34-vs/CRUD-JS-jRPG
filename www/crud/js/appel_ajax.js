// var jRPG = [];
// jRPG[0] = [];
// jRPG[0]["id_jrpg"];
// jRPG[0]["id_jrpg"] = 1;
// jRPG[0]["nom"] = "Fate Grand Order";
// jRPG[0]["date"] = "2015-07-30";
// jRPG[0]["editeur"] = "Aniplex";
// jRPG[0]["plateforme"] = "Android and/or iOS";
// jRPG[0]["adaptation"] = "anime";
// jRPG[0]["serie"] = "Fate";

// jRPG[1] = [];
// jRPG[1]["id_jrpg"] = 2;
// jRPG[1]["nom"] = "Fire Emblem: Awakening";
// jRPG[1]["date"] = "2013-04-19";
// jRPG[1]["editeur"] = "Nintendo";
// jRPG[1]["plateforme"] = "3DS";
// jRPG[1]["adaptation"] = "manga";
// jRPG[1]["serie"] = "Fire Emblem";

// jRPG[2] = [];
// jRPG[2]["id_jrpg"] = 3;
// jRPG[2]["nom"] = "Persona 5";
// jRPG[2]["date"] = "2016-09-15";
// jRPG[2]["editeur"] = "Atlus";
// jRPG[2]["plateforme"] = "PS3";
// jRPG[2]["adaptation"] = "anime";
// jRPG[2]["serie"] = "Shin Megami Tensei, Persona";

// jRPG[3] = [];
// jRPG[3]["id_jrpg"] = 4;
// jRPG[3]["nom"] = "Dragon Quest XI : Les Combattants de la destinée";
// jRPG[3]["date"] = "2017-07-29";
// jRPG[3]["editeur"] = "Square Enix";
// jRPG[3]["plateforme"] = "XBOX";
// jRPG[3]["adaptation"] = "aucune";
// jRPG[3]["serie"] = "Dragon Quest";

// jRPG[4] = [];
// jRPG[4]["id_jrpg"] = 5;
// jRPG[4]["nom"] = "Final Fantasy VII Remake";
// jRPG[4]["date"] = "2020-04-10";
// jRPG[4]["editeur"] = "Square Enix";
// jRPG[4]["plateforme"] = "PS4";
// jRPG[4]["adaptation"] = "aucune";
// jRPG[4]["serie"] = "Final Fantasy";

// jRPG[5] = [];
// jRPG[5]["id_jrpg"] = 6;
// jRPG[5]["nom"] = "Ni no Kuni : La Vengeance de la sorcière céleste";
// jRPG[5]["date"] = "2013-02-01"; // (PS3 UE)
// jRPG[5]["editeur"] = "Bandai Namco";
// jRPG[5]["plateforme"] = "SWITCH";
// jRPG[5]["adaptation"] = "film d'animation";
// jRPG[5]["serie"] = "Ni no Kuni";

// jRPG[6] = [];
// jRPG[6]["id_jrpg"] = 7;
// jRPG[6]["nom"] = "Bravely Default";
// jRPG[6]["date"] = "2012-10-11";
// jRPG[6]["editeur"] = "Square Enix";
// jRPG[6]["plateforme"] = "3DS";
// jRPG[6]["adaptation"] = "aucune";
// jRPG[6]["serie"] = "Bravely";

// jRPG[7] = [];
// jRPG[7]["id_jrpg"] = 8;
// jRPG[7]["nom"] = "Granblue Fantasy";
// jRPG[7]["date"] = "2014-03-10";
// jRPG[7]["editeur"] = "Cygames";
// jRPG[7]["plateforme"] = "Android and/or iOS";
// jRPG[7]["adaptation"] = "film d'animation";
// jRPG[7]["serie"] = "Granblue";

var jRPG = []; // toujours déclarer le tableau vide en dehors de la fonction 

function loadRPG() {
    var datas = {
        page: "liste",
        bJSON: 1
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
        .done(function (result) {
            console.log(result);
            var iRPG = 0;
            for (var ligne in result) {
                jRPG[iRPG] = [];
                //jRPG[iRPG]["id_jrpg"] = result[ligne]["id_jrpg"];
                jRPG[iRPG]["nom"] = result[ligne]["nom_jeu"];
                jRPG[iRPG]["date"] = result[ligne]["date_sortie"];
                jRPG[iRPG]["editeur"] = result[ligne]["editeur_jrpg"];
                jRPG[iRPG]["plateforme"] = result[ligne]["console_jrpg"];
                jRPG[iRPG]["adaptation"] = result[ligne]["adaptation_jrpg"];
                jRPG[iRPG]["serie"] = result[ligne]["franchise_jrpg"];
                iRPG++;
            }
            // INIT DATATABLE
            // Si je souhaite avoir par défaut autre que les 10 résultats par défaut au chargement
            // tables.page.len(10).draw();
            constructTable();
            tables = $('#tableau_jeux').DataTable(configuration);
        })
        .fail(function (err) {
            alert('error : 1-1 ' + err.status);
        });
}


function reset() {
    window.location.reload();
}

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
}

function constructTable() {
    var sHTML = "<thead>";
    sHTML += "<tr>";
    sHTML += "<td>Nom</td>";
    sHTML += "<td>Editeur</td>";
    sHTML += "<td>Console</td>";
    sHTML += "<td>Adaptation</td>";
    sHTML += "<td>Informations</td>";
    sHTML += "<td>Editer</td>";
    sHTML += "<td>Supprimer</td>";
    sHTML += "</tr>";
    sHTML += "</thead>";
    sHTML += "<tbody>";
    for (var i = 0; i < jRPG.length; i++) {
        sHTML += "<tr>";
        sHTML += "<td>" + jRPG[i]["nom"] + "</td>";
        sHTML += "<td>" + jRPG[i]["editeur"] + "</td>";
        sHTML += "<td>" + jRPG[i]["plateforme"] + "</td>";
        sHTML += "<td>" + jRPG[i]["adaptation"] + "</td>";
        sHTML += "<td onClick=\"infoRPG(" + i + ")\"><img src=\"img/information.png \"></td>";
        sHTML += "<td onClick=\"editRPG(" + i + ")\">EDIT " + i + "</td>";
        sHTML += "<td onClick=\"deleteRPG(" + i + ")\"><button class=\"btn_delete\">X</button></td>";
        sHTML += "</tr>";
    }
    sHTML += "</tbody>";

    // affichage en html
    $('#tableau_jeux').html(sHTML);
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

function rebuildDatable() {
    $('#tableau_jeux').html("");
    tables.clear();
    tables.destroy();
    constructTable();
    tables = $('#tableau_jeux').DataTable(configuration);
}

function clearForm() {
    $('#nom').val("");
    $('#date').val(""); //Date cachée
    $('#editeur').val("");
    $('#console').val("");
    $('#serie').val("");
}

function ajouterRPG() {
    var datas = {
        page: "save",
        bJSON: 1,
        nom_jeu: $('#nom').val(),
        date_sortie: $('#date').val(),
        editeur_jrpg: $('#editeur').val(),
        console_jrpg: $('#console').val(),
        adaptation_jrpg: radioSelect,
        franchise_jrpg: $('#serie').val(),
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
        .done(function (result) {
            if (result[0]["error"] != "") {
                alert("Erreur lors de l'ajout de votre film. Vous allez être déconnecté.");
            } else {
                var lenRPG = jRPG.length;
                jRPG[lenRPG] = [];
                //jRPG[lenRPG]["id_jrpg"] = result[ligne]["id_jrpg"];
                jRPG[lenRPG]["nom"] = result[ligne]["nom_jeu"];
                jRPG[lenRPG]["date"] = result[ligne]["date_sortie"];
                jRPG[lenRPG]["editeur"] = result[ligne]["editeur_jrpg"];
                jRPG[lenRPG]["plateforme"] = result[ligne]["console_jrpg"];
                jRPG[lenRPG]["adaptation"] = result[ligne]["adaptation_jrpg"];
                jRPG[lenRPG]["serie"] = result[ligne]["franchise_jrpg"];
                rebuildDatable();
                clearForm();
            }
        })
        .fail(function (err) {
            console.log('error : ' + err.status);
            alert("Erreur lors de l'ajout de votre jeu. Vous allez être déconnecté.");
        });
}

// pareil ici aussi
function majRPG() {
    var datas = {
        page: "update",
        bJSON: 1,
        nom_jeu: $('#nom').val(),
        date_sortie: $('#date').val(),
        editeur_jrpg: $('#editeur').val(),
        console_jrpg: $('#console').val(),
        adaptation_jrpg: radioSelect,
        franchise_jrpg: $('#serie').val(),
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
        .done(function (result) {
            if (result[0]["error"] != "") {
                alert("Erreur lors de la modification de votre jeu. Vous allez être déconnecté.");
            } else {
                jRPG[iIndiceEditionEncours]["id_jrpg"] = $('#id_jrpg').val();
                jRPG[iIndiceEditionEncours]["nom"] = $('#nom').val();
                jRPG[iIndiceEditionEncours]["date"] = $('#date').val();
                jRPG[iIndiceEditionEncours]["editeur"] = $('#editeur').val();
                jRPG[iIndiceEditionEncours]["plateforme"] = $('#console').val();
                jRPG[iIndiceEditionEncours]["adaptation"] = radioSelect;
                jRPG[iIndiceEditionEncours]["serie"] = $('#serie').val();
                rebuildDatable();
                clearForm();
            }
        })
        .fail(function (err) {
            console.log('error : ' + err.status);
            alert("Erreur lors de la modification de votre jeu. Vous allez être déconnecté.");
        });
}

//toujours la même chose
function deleteRPG(iIndiceSuppr) {
    $('#divModalSaving').show();
    var datas = {
        page: "delete",
        bJSON: 1,
        id_jrpg: jRPG[iIndiceSuppr]["id_jrpg"]
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
        .done(function (result) {
            if (result[0]["error"] != "") {
                $('#divModalSaving').hide();
                alert("Erreur lors de la suppression de votre jeu. Vous allez être déconnecté.");
            } else {
                for (var i = iIndiceSuppr; i < (jRPG.length - 1); i++) {
                    jRPG[i] = jRPG[i + 1];
                }
                jRPG.length--;
                rebuildDatable();
                clearForm();
            }
        })
        .fail(function (err) {
            console.log('error : ' + err.status);
            alert("Erreur lors de la suppression de votre jeu. Vous allez être déconnecté.");
        });
}

//la même
var iIndiceEditionEncours;
function editRPG(iIndiceEdition) {
    iIndiceEditionToKeep = iIndiceEdition;
    $('#nom').val(jRPG[iIndiceEdition]["nom"]);
    $('#editeur').val(jRPG[iIndiceEdition]["editeur"]);
    $('#console').val(jRPG[iIndiceEdition]["plateforme"]);
    recupRadio(jRPG[iIndiceEdition]["adaptation"]);
}

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
            "orderable": false
        },
        {
            "orderable": false
        }
    ],
    'retrieve': true
};

var tables;
$(document).ready(function () {
    loadRPG();
});