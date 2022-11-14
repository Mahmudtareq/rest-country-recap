const loadAllCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data =>displayCountries(data) );
};
const displayCountries = (countries) => {
    // console.log(countries[1]);
    const allCountriesHTMl = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTMl);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTMl.join(' ');

};
const getCountryHTML = (country) => {
    return `
      <div class="country">
        <h2>${country.name}</h2>
        <img src="${country.flags.png}"/>
        <p>Population : ${country.population}</p>
     </div>
    
    `
}
loadAllCountries();