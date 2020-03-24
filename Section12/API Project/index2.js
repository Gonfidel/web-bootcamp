// function renderPage(elements){
  //   var pageContent = ``;
  //   pullVirusCases().then((dat)=>{
      
  //     for(let location in dat.Countries){
  //       pageContent+=`${elements.containerStart}`;
  //       // for(const country in location){
  //       //   HTML+=`${elements.dividerStart}${country}${location.country}${elements.dividerEnd}`
  //       // }
  //       pageContent+=`${elements.containerEnd}`;
  //     }
  //   });
    
  //   return pageContent;
  // }





// debugger;
async function pullVirusCases(dom,elements) {
  await fetch("https://api.covid19api.com/summary")
  .then(res=>res.json())
  .then(dat=>{  
    let pageContent = ``;
    for(let location in dat.Countries){
      pageContent+=`${elements.containerStart}`;
      for(const prop in dat.Countries[location]){
          pageContent+=`${elements.dividerStart}${dat.Countries[location].Country}${elements.dividerEnd}`;

      }
      // for(let prop of location){
      // }
      pageContent+=`${elements.containerEnd}`;
    }
    dom.innerHTML = pageContent;
  });
}

elements = {
  containerStart: `<div class="card col-sm-12 col-md-6 col-lg-4">`,
  containerEnd: `</div>`,
  dividerStart: `<p>`,
  dividerEnd: `</p>`
}
var renderdom = document.querySelector("#render");

pullVirusCases(renderdom,elements);
