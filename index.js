// $("body").prepend("<header>");
// $("body").append("<footer>");

// $("header").load("./inc.html header>nav");
// $("footer").load("./inc.html footer>div");

const mainText = document.querySelector('.main-txt p')

document.addEventListener('scroll',function(){

    const viewportCenterY = window.innerHeight / 2

    const rect = mainText.getBoundingClientRect()
    const mainTextY = rect.top

    let opacity = mainTextY / viewportCenterY

    if(opacity<0){
        opacity = 0;
    }

    if(opacity>1){
        opacity = 1;
    }

    mainText.style.opacity = opacity
})
