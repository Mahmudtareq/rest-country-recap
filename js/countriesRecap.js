const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => displayCountries(data));
};
const displayCountries = (countries) => {
    console.log(countries[1]);
    const allCountryHTMl = countries.map(country => getAllCountries(country));
    // console.log(allCountryHTMl);
    const container = document.getElementById('countries');
    container.innerHTML = allCountryHTMl.join(' ');

}
// ??destructure within parameter
const getAllCountries = ({name,flags,population,area}) => {
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <img src="${flags.png}"/>
     <p>population: ${population}</p>
     <p>Area : ${area}</p>
    </div>
    `
}
// ?? original part 
// const getAllCountries = (country) => {
//     return `
//     <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}"/>
//      <p>population: "${country.population}"</p>
//     </div>
//     `
// }
// const getAllCountries = (country) => {
// ?? option 1 destructure 
//     const {name,flags,maps,population} = country;
//     return `
//     <div class="country">
//     <h2>${name.common}</h2>
//     <img src="${flags.png}"/>
//      <p>population: "${population}"</p>
//     </div>
//     `
// }
loadCountries();