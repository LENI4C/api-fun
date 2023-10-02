const btn = document.querySelector(".me")
const body = document.querySelector("body")
btn.addEventListener("click", async () => {
     
    const response =  await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
         // accept : "text/plain"
         accept : "application/json"
     }
    });
    const jsonJoke = await response.json();
    const show = document.createElement("div")
    body.append(show)
    show.innerText = jsonJoke.joke + "🤣🤣🤣🤣🤣"
 })