window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#menu").classList.add("pulse");
    document.querySelector("#settings").classList.add("active");
    document.querySelector("#settings").classList.add("pulse");
    document.querySelector("#settings").addEventListener("click", showSettings);
    document.querySelector("#setting_close").addEventListener("click", showSettings);
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);


    document.querySelector("#menu").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hideStart");
    document.querySelector("#musik").play();
    document.querySelector("#menu").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startSide1() {
    console.log("startSide1");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("show");
}



$("#test p").delay(1000).animate({"opacity": "1"}, 700);
