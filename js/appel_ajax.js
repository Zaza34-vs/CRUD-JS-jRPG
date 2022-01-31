// faire la fonction ajoutFilmServer
// créer la variable datas
// créer la fonction ajax
// créer la fonction .done

function loadRPG()	{
    var datas = {
        page : "liste_film",
        bJSON : 1
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
    .done(function(result) {
        console.log(result);
        var iFilm= 0;
        for (var ligne in result)	{
            aOfFilms[iFilm]= [];
            aOfFilms[iFilm]["id_film"]= result[ligne]["id_film"];
            aOfFilms[iFilm]["titre_film"]= htmlspecialchars_decode(result[ligne]["titre_film"]);
            aOfFilms[iFilm]["date_film"]= result[ligne]["date_film"];
            aOfFilms[iFilm]["duree_film"]= result[ligne]["duree_film"];
            iFilm++;
        }
        // INIT DATATABLE
        // Si je souhaite avoir par défaut autre que les 10 résultats par défaut au chargement
        // tables.page.len(10).draw();
        constructTable();
        tables = $('#table_films').DataTable(configuration);
        $('#divModalSaving').hide();
    })
    .fail(function(err) {
        alert('error : ' + err.status);
    });
}

var jRPG = [];
jRPG[0] = [];
jRPG[0]["id_jrpg"];
jRPG[0]["nom"] = "Fate Grand Order";
jRPG[0]["date"] = "2015-07-30";
jRPG[0]["editeur"] = "Aniplex";
jRPG[0]["plateforme"] = "Android and/or iOS";
jRPG[0]["adaptation"] = "anime";
jRPG[0]["serie"] = "Fate";

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

// il faudra réadapter cette fonction
function ajouterRPG() {
    $('#divModalSaving').show();
    var dDateFilm;
    if (detectIEorSafari()) {
        dDateFilm = inverseDate($('#date_film').val());
    } else {
        dDateFilm = $('#date_film').val();
    }
    var datas = {
        page: "save_film",
        bJSON: 1,
        titre_film: $('#titre_film').val(),
        date_film: dDateFilm,
        duree_film: $('#duree_film').val(),
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
                alert("Erreur lors de l'ajout de votre film. Vous allez être déconnecté.");
            } else {
                var iLongueur = aOfFilms.length;
                aOfFilms[iLongueur] = [];
                aOfFilms[iLongueur]["id_film"] = result[0]["id_film"];
                aOfFilms[iLongueur]["titre_film"] = $('#titre_film').val();
                aOfFilms[iLongueur]["date_film"] = dDateFilm;
                aOfFilms[iLongueur]["duree_film"] = $('#duree_film').val();
                rebuildDatable();
                clearForm();
                $('#divModalSaving').hide();
            }
        })
        .fail(function (err) {
            console.log('error : ' + err.status);
            alert("Erreur lors de l'ajout de votre film. Vous allez être déconnecté.");
        });
}

// pareil ici aussi
function majRPG() {
    $('#divModalSaving').show();
    var dDateFilm;
    if (detectIEorSafari()) {
        dDateFilm = inverseDate($('#date_film').val());
    } else {
        dDateFilm = $('#date_film').val();
    }
    var datas = {
        page: "update_film",
        bJSON: 1,
        id_film: $('#id_film').val(),
        titre_film: $('#titre_film').val(),
        date_film: dDateFilm,
        duree_film: $('#duree_film').val(),
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
                alert("Erreur lors de la modification de votre film. Vous allez être déconnecté.");
            } else {
                aOfFilms[iIndiceEditionEncours]["id_film"] = $('#id_film').val();
                aOfFilms[iIndiceEditionEncours]["titre_film"] = $('#titre_film').val();
                aOfFilms[iIndiceEditionEncours]["date_film"] = dDateFilm;
                aOfFilms[iIndiceEditionEncours]["duree_film"] = $('#duree_film').val();
                rebuildDatable();
                clearForm();
                $('#divModalSaving').hide();
            }
        })
        .fail(function (err) {
            console.log('error : ' + err.status);
            alert("Erreur lors de la modification de votre film. Vous allez être déconnecté.");
        });
}

//toujours la même chose
function supprimRPG(iIndiceSuppr) {
    $('#divModalSaving').show();
    var datas = {
        page: "supprime_film",
        bJSON: 1,
        id_film: aOfFilms[iIndiceSuppr]["id_film"]
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
                alert("Erreur lors de la suppression de votre film. Vous allez être déconnecté.");
            } else {
                for (var i = iIndiceSuppr; i < (aOfFilms.length - 1); i++) {
                    aOfFilms[i] = aOfFilms[i + 1];
                }
                aOfFilms.length--;
                rebuildDatable();
                clearForm();
                $('#divModalSaving').hide();
            }
        })
        .fail(function (err) {
            console.log('error : ' + err.status);
            alert("Erreur lors de la suppression de votre film. Vous allez être déconnecté.");
        });
}

//la même
var iIndiceEditionEncours;
function editRPG(iIndiceEdit)	{
    iIndiceEditionEncours= iIndiceEdit;
    $('#id_film').val(aOfFilms[iIndiceEdit]["id_film"]);
    $('#titre_film').val(aOfFilms[iIndiceEdit]["titre_film"]);
    if (detectIEorSafari())	{
        $('#date_film').val(convertDate(aOfFilms[iIndiceEdit]["date_film"]));
    }  else  {
        $('#date_film').val(aOfFilms[iIndiceEdit]["date_film"]);
    }
    $('#duree_film').val(aOfFilms[iIndiceEdit]["duree_film"]);
    $('#btn_ajouter').hide();
    $('#btn_modifier').show();
    $('#btn_annuler').show();
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