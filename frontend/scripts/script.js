const icon = document.getElementById('icon_share');

icon.addEventListener("click", function(){
    let cardProfile = document.getElementById("card_profile");
    let share = document.getElementById("share");
    let iconshare = document.getElementById("icon_share");

    cardProfile.classList.toggle("none");
    share.classList.toggle("none");
    iconshare.classList.toggle("active");
});

console.log(icon);