function clickDiv(backgroundImageURL, alternateImageURL, duration) {

    let div = document.createElement("div");

    div.style.backgroundImage = `url('${backgroundImageURL}')`;
    div.style.backgroundSize = "cover";
    div.style.width = "500px";
    div.style.height = "300px";
    div.style.cursor = "pointer";

   
    div.addEventListener("click", function() {
        
        div.style.backgroundImage = `url('${alternateImageURL}')`;

        setTimeout(function() {
            div.style.backgroundImage = `url('${backgroundImageURL}')`;
        }, duration);
    });

    return div;
}

let myDiv = clickDiv("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9vgwRzhMyZ0LnRtmEu5JJocUpQaDwEpqJ16mulW4MpE7AZve9", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAir9liuMSXrirn8M4HmrlzpsnM9A-Bxv57A&s", 2000);
document.body.appendChild(myDiv);