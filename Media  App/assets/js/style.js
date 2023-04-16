var films=[
{
    points: "4.2",
    img: "https://m.media-amazon.com/images/M/MV5BODkwMTgxNjA2NF5BMl5BanBnXkFtZTgwMDc0OTcwOTE@._V1_.jpg",
    name: "The Wailing",
    about: "Mystery,Thriller"
},
{
    points:"8.1",
    img:"https://www.uphe.com/sites/default/files/styles/scale__319w_/public/Warcraft_PosterArt.webp?itok=ojNaaE4M",
    name:"Warcraft",
    about:"Action,Adventure"
},
{
    points:"4.4",
    img:"https://i.ytimg.com/vi/EmdtIyfLWEU/movieposter_en.jpg",
    name:"The Space Between",
    about:"Adventure,Drama"
},
{
    points:"7.8",
    img:"https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_FMjpg_UX1000_.jpg",
    name:"X-Men:Apocalypse",
    about:"Action,Adventure"
},
{
    points:"8.1",
    img:"https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    name:"The Witcher",
    about:"Fantacy,Thriller"
},
{
    points:"6.6",
    img:"https://m.media-amazon.com/images/M/MV5BMTk4OTY4MDg4Nl5BMl5BanBnXkFtZTgwMTE1MTU3ODE@._V1_.jpg",
    name:"The Fits",
    about:"Drama"
},
{
    points:"7.4",
    img:"https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg",
    name:"Me Before You",
    about:"Drama"
},
{
    points:"7.9",
    img:"https://m.media-amazon.com/images/M/MV5BNzQ0NDgwODQ3NV5BMl5BanBnXkFtZTgwOTYxNjc2ODE@._V1_.jpg",
    name:"Now You See Mee",
    about:"Action, Comedy"
}
]
for(var i=0; i<films.length; i++){
    area.innerHTML+=`<div class="col-3 mt-4">
    <div class="points">${films[i].points}</div>
    <div class="img" style="background-image: url(${films[i].img};"><i class="las la-play-circle"></i></div>
    <div class="film-about">
        <h3>${films[i].name}</h3>
        <p>${films[i].about}</p>
    </div>
</div>`
}