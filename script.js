const subtitles = ["software developer", "app programmer", "webpage designer", "dad", "veteran", "blogger"]
const subtitle = document.getElementById("subtitle")

const socialMediaLinks = document.querySelectorAll("a");

let links = Array.from(socialMediaLinks)
// console.log(links[0].innerHTML)

let i = 0
setInterval(
    () => {
        subtitle.innerText = subtitles[i % subtitles.length]
        i++
    }, 1500
)

let heroImg = document.querySelector("#hero_img")

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

/*---------------------*/
// CodeWars score reveal
let codewars = document.getElementById("codeWars")
codewars.addEventListener("mouseover", displayCodeWarsScore)
codewars.addEventListener("mouseout", resetMessage)

function displayCodeWarsScore() {

    let user = "RyanKHawkins"
    const url = `https://www.codewars.com/api/v1/users/${user}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            let rank = data.ranks.overall.name.toUpperCase()
            let honorScore = data.honor
            codewars.innerText = `${rank} - ${honorScore}`
            console.log(data.honor)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

function resetMessage() {
    codewars.innerText = "CodeWars"
}
/*---------------------*/

const textToExpand = Array.from(document.querySelectorAll(".expand"))
textToExpand.forEach(el => el.addEventListener("mouseover", expandTextOnHover))

function expandTextOnHover(text) {
    const originalText = text.target.innerText
    text.target.innerText = "R  K  H"//text.target.innerText.split(" ").join(" | ")
    console.log(`expanded ${originalText}`)
    text.target.removeEventListener("mouseover", expandTextOnHover)
    setTimeout(() => {
        text.target.innerText = originalText
        text.target.addEventListener("mouseover", expandTextOnHover)
    }, 1000)
}

// Turns the tab title into a marquee
let titleArr = ["Ryan K. Hawkins", "Ryan K. Hawkins", "Hire Ryan", "Hire Ryan!", "Hire Ryan", "Hire Ryan!!"]
let j = 0
setInterval(
    () => {
        document.title = titleArr[j % titleArr.length]
        j++
    }, 750
)
