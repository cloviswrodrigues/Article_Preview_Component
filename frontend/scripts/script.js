const icon = document.getElementById('icon_share');

icon.addEventListener("click", function(){
    let share = document.getElementById("share");
    let iconshare = document.getElementById("icon_share");
    
    share.classList.toggle("none");
    iconshare.classList.toggle("active");
});