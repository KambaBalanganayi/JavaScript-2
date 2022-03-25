

    //---------------TABLEAU DES REPAS------------------

    var tabRepas=[{"nom":"Spaghetti","prix":8.95,"photo":"spaghetti.jpg"},
                  {"nom":"Lasagne","prix":9.95,"photo":"lasagne.jpg"}];
    //fonction remplissage des repas
    function remplirSelRepas(){
        var selRepas=document.querySelector('#selRepas');
        selRepas.options[selRepas.options.length]=new Option("Votre choix")
        for(unRepas of tabRepas){
            selRepas.options[selRepas.options.length]=new Option(unRepas.nom,unRepas.nom.substring)
        }
    }
    //fonction infos des repas
    function infosRepasChoisi(selRepas){
        var posRepasChoisi=selRepas.selectedIndex-1;
        var repasChoisi=tabRepas[posRepasChoisi];
        document.getElementById('prixRepas').innerHTML="<b>"+repasChoisi.prix+"</b>";
        document.getElementById('photoRepas').src=repasChoisi.photo;
        document.getElementById('photoRepas').style.display='block';
    }       


    //--------------TABLEAU DES ENTREES-------------------------

    var tabEntree=[{"nom":"Salade","prix":5.45,"photo":"salade.jpg"},
                  {"nom":"Escargot","prix":4.95,"photo":"escargot.jpg"}];
    //fonction remplissage des entrees
    function remplirSelEntree(){
        var selEntree=document.querySelector('#selEntree');
        selEntree.options[selEntree.options.length]=new Option("Votre choix")
        for(unEntree of tabEntree){
            selEntree.options[selEntree.options.length]=new Option(unEntree.nom,unEntree.nom.substring)
        }
    }
    //fonction infos des entrees
    function infosEntreeChoisi(selEntree){
        var posEntreeChoisi=selEntree.selectedIndex-1;
        var entreeChoisi=tabEntree[posEntreeChoisi];
        document.getElementById('prixEntree').innerHTML="<b>"+entreeChoisi.prix+"</b>";
        document.getElementById('photoEntree').src=entreeChoisi.photo;
        document.getElementById('photoEntree').style.display='block';
    }       

    //bouton pour les calculs
    $("#button").on("click", function(e) {
        e.preventDefault();
        var prixEntree = parseFloat($("#prixEntree").html()); 
        var prixRepas = parseFloat($("#prixRepas").html()); 
        var totalAvantTax = prixEntree + prixRepas
        var totalTax = totalAvantTax * 0.14975
        var totalApresTax = totalAvantTax + totalTax
        
        if (isNaN(prixEntree)) prixEntree = 0;
        if (isNaN(prixRepas)) prixRepas = 0;
        document.getElementById("facture").innerHTML = 
        "Total: "+totalAvantTax.toFixed(2)+"$"+" taxes : "+totalTax.toFixed(2)+"$"+" = "+totalApresTax.toFixed(2)+"$";

    });



