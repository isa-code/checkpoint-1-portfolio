
//changement de l'image de l'avatar lorsque l'on clic dessus dans la section desktop
document.querySelector(".desktop").addEventListener("click", function (event) {
    document.querySelector(".imageAvatar").src = "image/avatar-bis.png";
})


//changement du prénom et de la couleur d'écriture avec un prompt dans la section presentation

let newName = document.querySelector(".btnChangeName");
    newName.onclick = function(){
        let newName = prompt("Quel est votre nom");
        document.getElementById("name").style.color = "white";
        document.getElementById("name").innerHTML = newName;
    }