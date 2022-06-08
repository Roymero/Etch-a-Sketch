let griddyDefault = document.querySelector(".griddyDefault");
griddyDefault.style.gridTemplateColumns = "repeat(16,1fr)";
griddyDefault.style.gridTemplateRows = "repeat(16,1fr)";




for(let i = 0; i < 256; i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "#D8D8D8";
    square.style.opacity = '1';
  
    griddyDefault.insertAdjacentElement("beforeend", square);
}