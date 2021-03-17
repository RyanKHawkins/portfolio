var subtitles = document.querySelectorAll(".subtitles")
subtitles = Array.from(subtitles)
var socialMediaLinks = document.querySelectorAll("a");

var links = Array.from(socialMediaLinks)
console.log(links[0].innerHTML)


var heroImg = document.querySelector("#hero_img")

heroImg.addEventListener("mouseover", () => {
    // subtitles.forEach((subT) => {
    //     subT.style.color = "darkorange"
    // });
    document.querySelector("header").style.borderBottomColor = "darkorange"
})



heroImg.addEventListener("mouseout", () => {
    // subtitles.forEach((subT) => {
    //     subT.style.color = "black";    
    // });
    document.querySelector("header").style.borderBottomColor = "gray"
})


// subtitles.forEach((item) => {
//     item.classList.toggle("shadowed")
// })

subtitles.forEach((item) => {
    console.log(item.textContent)
}
)

function toggleClassByInterval(item, className, interval) {

}



// setInterval(() => {
//     links.forEach((link) => { link.classList.toggle("highlighted") })
// }, 1000)


// Test to see Github connection with Visual Studio
// Another test
// A third test. This isn't showing up on Github. I'm going to take a break, if this doesn't work.