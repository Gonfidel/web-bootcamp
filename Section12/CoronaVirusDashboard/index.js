const createTopCountryTotalCases = async (amount,parentElement) => {
    await fetch('https://api.covid19api.com/summary')
    .then(res=>res.json())
    .then((data)=>{
        let htmlComponent ='';
        let sortedCountries = data.Countries.sort(function(a,b){return b.TotalConfirmed-a.TotalConfirmed}).slice(0,amount);
        for(const object of sortedCountries){
            htmlComponent+=`<tr><td>${object.Country}</td><td>${object.TotalConfirmed}</td></tr>`;        
        }
        parentElement.innerHTML += `<div class="card col-sm-12 col-md-6 col-lg-4"><table class="top-country-totals table"><thead><th scope="col" colspan="2">Total Infected</th></thead>${htmlComponent}</table></div>`;
    });
}
const createTopCountryTotalDeaths = async (amount,parentElement) => {
    await fetch('https://api.covid19api.com/summary')
    .then(res=>res.json())
    .then((data)=>{
        let htmlComponent ='';
        let sortedCountries = data.Countries.sort(function(a,b){return b.TotalDeaths-a.TotalDeaths}).slice(0,amount);
        for(const object of sortedCountries){
            htmlComponent+=`<tr><td>${object.Country}</td><td>${object.TotalDeaths}</td></tr>`;      
        }
        parentElement.innerHTML += `<div class="card col-sm-12 col-md-6 col-lg-4"><table class="top-country-totals table"><thead><th scope="col" colspan="2">Total Deaths</th></thead>${htmlComponent}</table></div>`;
    });
}
const createTopCountryTotalRecovered = async (amount,parentElement) => {
    await fetch('https://api.covid19api.com/summary')
    .then(res=>res.json())
    .then((data)=>{
        let htmlComponent ='';
        let sortedCountries = data.Countries.sort(function(a,b){return b.TotalRecovered-a.TotalRecovered}).slice(0,amount);
        for(const object of sortedCountries){
            htmlComponent+=`<tr><td>${object.Country}</td><td>${object.TotalRecovered}</td></tr>`;        
        }
        parentElement.innerHTML += `<div class="card col-sm-12 col-md-6 col-lg-4"><table class="top-country-totals table"><thead><th scope="col" colspan="2">Total Recovered</th></thead>${htmlComponent}</table></div>`;
    });
}
const createTopCountryNewCases = async (amount,parentElement) => {
    await fetch('https://api.covid19api.com/summary')
    .then(res=>res.json())
    .then((data)=>{
        let htmlComponent ='';
        let sortedCountries = data.Countries.sort(function(a,b){return b.NewConfirmed-a.NewConfirmed}).slice(0,amount);
        for(const object of sortedCountries){
            htmlComponent+=`<tr><td>${object.Country}</td><td>${object.NewConfirmed}</td></tr>`;        
        }
        parentElement.innerHTML += `<div class="card col-sm-12 col-md-6 col-lg-4"><table class="top-country-totals table"><thead><th scope="col" colspan="2">Total Infected</th></thead>${htmlComponent}</table></div>`;
    });
}
const createTopCountryNewDeaths = async (amount,parentElement) => {
    await fetch('https://api.covid19api.com/summary')
    .then(res=>res.json())
    .then((data)=>{
        let htmlComponent ='';
        let sortedCountries = data.Countries.sort(function(a,b){return b.NewDeaths-a.NewDeaths}).slice(0,amount);
        for(const object of sortedCountries){
            htmlComponent+=`<tr><td>${object.Country}</td><td>${object.NewDeaths}</td></tr>`;      
        }
        parentElement.innerHTML += `<div class="card col-sm-12 col-md-6 col-lg-4"><table class="top-country-totals table"><thead><th scope="col" colspan="2">Total Deaths</th></thead>${htmlComponent}</table></div>`;
    });
}
const createTopCountryNewRecovered = async (amount,parentElement) => {
    await fetch('https://api.covid19api.com/summary')
    .then(res=>res.json())
    .then((data)=>{
        let htmlComponent ='';
        let sortedCountries = data.Countries.sort(function(a,b){return b.NewRecovered-a.NewRecovered}).slice(0,amount);
        for(const object of sortedCountries){
            htmlComponent+=`<tr><td>${object.Country}</td><td>${object.NewRecovered}</td></tr>`;        
        }
        parentElement.innerHTML += `<div class="card col-sm-12 col-md-6 col-lg-4"><table class="top-country-totals table"><thead><th scope="col" colspan="2">Total Recovered</th></thead>${htmlComponent}</table></div>`;
    });
}

const render = document.querySelector("#render");

createTopCountryTotalCases(5,render);
createTopCountryTotalDeaths(5,render);
createTopCountryTotalRecovered(5,render);
createTopCountryNewCases(5,render);
createTopCountryNewDeaths(5,render);
createTopCountryNewRecovered(5,render);


