const generateDOM = ({domElement,openingElement,closingElement},data) => {
  let html_output = '';
  for(const location of data.Countries){
    html_output+=openingElement;
    for(const prop in location){
      html_output += `<p>${prop}: ${location[prop]}</p>`; 
    }
    html_output+=closingElement;
  }
  domElement.innerHTML = html_output;
}
const pullCases = async (options) => {
  await fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(data => generateDOM({
      domElement: options.domElement,
      openingElement: options.openingElement,
      closingElement: options.closingElement
      },data)
    );
};

let configOptions = {
  domElement: document.querySelector("#render"),
  openingElement: `<div class="card">`,
  closingElement: `</div>`
}


pullCases(configOptions);