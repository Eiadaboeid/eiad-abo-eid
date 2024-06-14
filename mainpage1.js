function showProjet() {


    const pr = document.getElementById("m");
    if (pr.className == "main-card") {
        pr.className = "hide";



    }
    else {
        pr.className = "main-card";



    }
}

function jsShow() {
    const ca = document.getElementById("m-card1");


    if (ca.className == "m-card") {
        ca.className = "m-c";
        // ca.style.height = "220px"


    }
    else {
        ca.className = "m-card";
        // ca.style.height = "1100px"


    }
}