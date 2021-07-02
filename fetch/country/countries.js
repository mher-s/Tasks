const countriesURL = "https://restcountries.eu/rest/v2/all";

fetch(countriesURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => renderCountryCard(data));

const renderCountryCard = (data) => {
  data.forEach((el) => {
    const card = `
    <article class="country">
        <img class="country__img" src="${el.flag}" alt="Flag of ${el.name}" />
        <div class="country__data">
        <h3 class="country__name">${el.name}</h3>
        <h4 class="country__region">${el.region}</h4>
        <p class="country__row">
            <span>👫</span>${(Number(el.population) / 1000000).toFixed(
              1
            )} million
            people
        </p>
        <p class="country__row">
            <span>🗣️</span>${el.languages[0].name}
        </p>
        <p class="country__row">
            <span>💰</span>${el.currencies[0].name}
        </p>
        </div>
    </article>
    `;

    document
      .querySelector(".country-block")
      .insertAdjacentHTML("beforeend", card);
  });
};
