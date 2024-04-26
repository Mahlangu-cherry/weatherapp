function handlesearchsubmit(event){
    event.preventDefault();
    let searchinfo = document.querySelector(".input")
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML= searchinfo.value;
}

let searchinfoElement = document.querySelector("#searchinfo");
searchinfoElement.addEventListener("submit", handlesearchsubmit)