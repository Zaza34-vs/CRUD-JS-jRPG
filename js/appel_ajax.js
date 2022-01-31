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
        sHTML += "<td onClick=\"infoRPG(" + i + ")\"><img src=\"img/information.png \">";
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
                jRPG[iRPG]["id_jrpg"] = result[ligne]["id_jrpg"];
                jRPG[iRPG]["nom"] = htmlspecialchars_decode(result[ligne]["nom"]);
                jRPG[iRPG]["date"] = result[ligne]["date"];
                jRPG[iRPG]["editeur"] = result[ligne]["editeur"];
                jRPG[iRPG]["plateforme"] = result[ligne]["plateforme"];
                jRPG[iRPG]["adaptation"] = result[ligne]["adaptation"];
                jRPG[iRPG]["serie"] = result[ligne]["serie"];
                iRPG++;
            }
            // INIT DATATABLE
            // Si je souhaite avoir par défaut autre que les 10 résultats par défaut au chargement
            // tables.page.len(10).draw();
            constructTable();
            tables = $('#tableau_jeux').DataTable(configuration);
        })
        .fail(function (err) {
            alert('error : ' + err.status);
        });
}
function rebuildDatable() {
    $('#table_jeux').html("");
    tables.clear();
    tables.destroy();
    constructTable();
    tables = $('#table_jeux').DataTable(configuration);
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
                jRPG[lenRPG]["id_jrpg"] = result[ligne]["id_jrpg"];
                jRPG[lenRPG]["nom"] = htmlspecialchars_decode(result[ligne]["nom"]);
                jRPG[lenRPG]["date"] = result[ligne]["date_film"];
                jRPG[lenRPG]["editeur"] = result[ligne]["editeur"];
                jRPG[lenRPG]["plateforme"] = result[ligne]["plateforme"];
                jRPG[lenRPG]["adaptation"] = result[ligne]["adaptation"];
                jRPG[lenRPG]["serie"] = result[ligne]["serie"];
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
function supprimRPG(iIndiceSuppr) {
    var datas = {
        page: "supprime",
        bJSON: 1,
        id_film: jRPG[iIndiceSuppr]["id_jrpg"]
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
    loadRPG();
});