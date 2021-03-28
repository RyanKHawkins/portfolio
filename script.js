var subtitles = ["software developer", "game designer", "app programmer"]
var subtitle = document.getElementById("subtitle")

var socialMediaLinks = document.querySelectorAll("a");

var links = Array.from(socialMediaLinks)
console.log(links[0].innerHTML)

var i = 0
setInterval (
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
    document.querySelector("header").style.borderBottomColor = "darkorange"
})



heroImg.addEventListener("mouseout", () => {
    // subtitles.forEach((subT) => {
    //     subT.style.color = "black";    
    // });
    //document.querySelector("header").style.borderBottomColor = "gray"
})

function toggleClassByInterval(item, className, interval) {

}

// setInterval(() => {
//     links.forEach((link) => { link.classList.toggle("highlighted") })
// }, 1000)


// Test to see Github connection with Visual Studio
// Another test
// A third test. This isn't showing up on Github. I'm going to take a break, if this doesn't work.