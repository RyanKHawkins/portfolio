var subtitles = ["software developer", "game designer", "app programmer", "webpage designer", "dad"]
var subtitle = document.getElementById("subtitle")

var socialMediaLinks = document.querySelectorAll("a");

var links = Array.from(socialMediaLinks)
console.log(links[0].innerHTML)

var i = 0
setInterval(
    () => {
        subtitle.innerText = subtitles[i % subtitles.length]
        i++
    }, 1500
)

var heroImg = document.querySelector("#hero_img")

heroImg.addEventListener("mouseover", () => {
    // subtitles.forEach((subT) => {
    //     subT.style.color = "darkorange"
    // });
    // document.querySelector("header").style.borderBottomColor = "darkorange"
})

heroImg.addEventListener("mouseout", () => {
    // subtitles.forEach((subT) => {
    //     subT.style.color = "black";    
    // });
    //document.querySelector("header").style.borderBottomColor = "gray"
})

function toggleClassByInterval(item, className, interval) {

}
