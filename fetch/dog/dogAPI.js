const URL = "https://dog.ceo/api/breeds/image/random";
const changeBtn = document.querySelector(".change-btn");

changeBtn.addEventListener("click", () => {
  fetch(URL)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      getDogImg(data);
    });
});

function getDogImg(data) {
  console.log(data);
  const card = `
            <img class="dog__img" src="${data.message}" />
        `;
  document.querySelector(".img-block").insertAdjacentHTML("beforeend", card);
}
