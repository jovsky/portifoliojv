$(document).ready( function(){

    var listaProjetos = [];

    class Project {
        constructor(nome, url, descricao, imsrc) {
            this.nome = nome;
            this.url = url;
            this.descricao = descricao;
            this.imsrc = imsrc;
            listaProjetos.push(this);
        };
    };

    new Project(
        "Lista de Tarefas", 
        "https://tasklistjv.netlify.app/",
        "Um simples site feito com JS/HTML/CSS que apresenta uma lista de tarefas.",
        "listatarefas.png");

    new Project(
        "News Covid-19",
        "https://diariodocovid19jv.netlify.app/",
        "Simples LandPage com notícias do Covid-19 feito para praticar HTML e CSS.",
        "diariocovid19.png");

    new Project(
        "AirTnT",
        "https://airbnb-jv.netlify.app/",
        "Simula o AirBnB para encontrar hospedagens fornecidas por uma API de dados. Este projeto utilzou HTML, CSS, Boostrap, Vanilla JS e APIs do Google.",
        "airtnt.png");

    new Project(
        "Github finder with React",
        "#",
        "Uma SPA onde se pode buscar um usuário do Github e obter os repositórios dele. Foi desenvolvida utilizando React JS e uma API disponibilizada pelo Github. Principais dependências: React Router DOM, Axios, Styled Components.",
        "gitfinder.png");


    function constroi(){
        console.log('construindo..');

        console.log('quantos antes: '+ $(".projectdiv").length);

        listaProjetos.map( projeto => {
            console.log('loop: '+projeto.nome);

            var code = $(`
            <div class="projectdiv col-sm-4"> 
                <div class="card" > 
                    <img class="card-img-top" alt="project main image"> 
                    <div class="card-body"> 
                        <h5 class="card-title"></h5> 
                        <p class="card-text"></p> 
                        <div class="btn-div"> 
                            <a href="#" target="_blank" class="btn-visit btn">Visitar URL</a> 
                            <a href="#" target="_blank" class="btn-git btn ">Repo  <i class="fab fa-github"></i></a> 
                        </div> 
                    </div> 
                </div> 
            </div> `);

            $("#portfolio").append(code);

            $(".projectdiv .card-title").last().text(projeto.nome);
            $(".projectdiv .card-text").last().text(projeto.descricao);
            $(".projectdiv .card-img-top").last().attr("src","imagens/"+ projeto.imsrc);
            $(".projectdiv .btn").last().attr("href",projeto.url);
            $(".projectdiv .btn").last().attr("href",projeto.url);


            console.log('   inserido');
        });

        console.log('quantos depois: '+ $(".projectdiv").length);
    }

    constroi();

});
