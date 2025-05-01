'use strict';

const container = document.querySelector(".main__content-container__movie-catalogue-container ol")
const bgimage = document.querySelector(".main__content-container__poster-container")

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort()
movieDB.movies.forEach((e)=>{
    container.insertAdjacentHTML("beforeend",`
        <li>${e}</ol>
        `)
})
bgimage.style.backgroundImage = "url('./img/bg.jpg')"