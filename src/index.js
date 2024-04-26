function handlesearchbutton(event){
    event.preventDefault();
    let searchinfo = document.querySelector(".input")
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML= searchinfo.value;
}

let searchformElement = document.querySelector("#searchinfo");
searchformElement.addEventListener("submit", handlesearchbutton)