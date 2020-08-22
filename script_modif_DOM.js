let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function changeTitles(){
    console.log(document.querySelector("h1").innerHTML = "Ce que j'ai appris à THP");
    console.log(document.querySelector("section.jumbotron > div > p.lead").innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
};

function changeCallToActions(){
    console.log(document.querySelector("section.jumbotron > div").children[2].children[0].innerHTML = "OK je veux tester !");
    console.log(document.querySelector("section.jumbotron > div").children[2].children[0].href = "http://www.thehackingproject.org");
    console.log(document.querySelector("section.jumbotron > div").children[2].children[1].innerHTML = "Non merci");
    console.log(document.querySelector("section.jumbotron > div").children[2].children[1].href = "https://www.pole-emploi.fr/accueil/");
};

function changeLogoName(){
    console.log(document.querySelector("header > div.navbar > div.container > a.navbar-brand > strong").innerText = "The Thp experience");
    console.log(document.querySelector("header > div.navbar > div.container > a.navbar-brand > strong").style.fontSize = "2em");
};

function populateImages(){
    let counter = 0;
    imagesArray.forEach(i => {
        console.log(document.querySelectorAll("main > div.album > div.container > div.row > div.col-md-4 > div.card > img.card-img-top")[counter].src = i);
        counter++;
    });
   
};

function deleteLastCards(){
    let counter = 3;
    while(counter > 0){
    console.log(document.querySelectorAll("main > div.album > div.container > div.row > div.col-md-4 > div.card")[counter].remove());
    counter--;
    };
};

changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();