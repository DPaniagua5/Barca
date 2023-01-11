function goleadores(){
    var header = document.querySelector('header');
    var section = document.querySelector('section');
  
    var requestURL = 'https://v3.football.api-sports.io/players/topscorers?season=2022&league=140'
  
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.setRequestHeader("x-rapidapi-key", "ad406f1573545faafc7174ac97278cc7");
    request.setRequestHeader("x-rapidapi-host", "v3.football.api-sports.io");
    request.send();
  
    request.onload = function() {
      var datos = request.response;
      populateHeader(datos);
      showHeroes(datos);
    }
  
    function populateHeader(jsonObj) {
      var myH1 = document.createElement('h1');
      var myPara = document.createElement('p');
    }
  
    function showHeroes(jsonObj) {
      var jugadores = jsonObj['response'];
      var imgArray = new Array();
  
    for(var i = 0; i < jugadores.length; i++) {
        var myArticle = document.createElement('article');
        var myH6 = document.createElement('h6');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');
        var myPara9 = document.createElement('p');
  
  
  
    imgArray[i] = new Image();
    //imgArray[i].src = '../img/'+ jugadores[i].player.name +'.png';
      imgArray[i].src = jugadores[i].player.photo
  
        img = imgArray[i];
        myH6.textContent = 'Posición: ' + i;
        myH2.textContent = jugadores[i].player.name;
        myPara1.textContent = 'País: ' + jugadores[i].player.nationality;
        myPara2.textContent = 'Partidos: ' + jugadores[i].statistics[0].games.appearences;
        myPara3.textContent = 'Minutos jugados: '+jugadores[i].statistics[0].games.minutes;
        myPara4.textContent = 'Puntuación media: '+jugadores[i].statistics[0].games.rating;
        myPara5.textContent = 'Pases totales: '+jugadores[i].statistics[0].passes.total;
        myPara6.textContent = 'Dribles: '+jugadores[i].statistics[0].dribbles.success;
        myPara7.textContent = 'Goles: '+jugadores[i].statistics[0].goals.total
        myPara8.textContent = 'Goles de penal: '+jugadores[i].statistics[0].penalty.scored;
        myPara9.textContent = 'Asistencias: '+jugadores[i].statistics[0].goals.assists;
        
        myArticle.appendChild(img);
        myArticle.appendChild(myH6);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        myArticle.appendChild(myPara8);
        myArticle.appendChild(myPara9);
        
        
        section.appendChild(myArticle);
          
        }
    }
}

function asistentes(){
  var header = document.querySelector('header');
  var section = document.querySelector('section');

  var requestURL = 'https://v3.football.api-sports.io/players/topassists?season=2022&league=140'

  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.setRequestHeader("x-rapidapi-key", "ad406f1573545faafc7174ac97278cc7");
  request.setRequestHeader("x-rapidapi-host", "v3.football.api-sports.io");
  request.send();

  request.onload = function() {
    var datos = request.response;
    populateHeader(datos);
    showHeroes(datos);
  }

  function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    var myPara = document.createElement('p');
  }

  function showHeroes(jsonObj) {
    var jugadores = jsonObj['response'];
    var imgArray = new Array();

  for(var i = 0; i < jugadores.length; i++) {
      var myArticle = document.createElement('article');
      var myH6 = document.createElement('h6');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myPara5 = document.createElement('p');
      var myPara6 = document.createElement('p');
      var myPara7 = document.createElement('p');
      var myPara8 = document.createElement('p');
      var myPara9 = document.createElement('p');



  imgArray[i] = new Image();
  //imgArray[i].src = '../img/'+ jugadores[i].player.name +'.png';
    imgArray[i].src = jugadores[i].player.photo

      img = imgArray[i];
      myH6.textContent = 'Posición: ' + i;
      myH2.textContent = jugadores[i].player.name;
      myPara1.textContent = 'Asistencias: '+jugadores[i].statistics[0].goals.assists;
      myPara2.textContent = 'Partidos: ' + jugadores[i].statistics[0].games.appearences;
      myPara3.textContent = 'Minutos jugados: '+jugadores[i].statistics[0].games.minutes;
      myPara4.textContent = 'Puntuación media: '+jugadores[i].statistics[0].games.rating;
      myPara5.textContent = 'Pases totales: '+jugadores[i].statistics[0].passes.total;
      myPara6.textContent = 'Dribles: '+jugadores[i].statistics[0].dribbles.success;
      myPara7.textContent = 'Goles: '+jugadores[i].statistics[0].goals.total
      myPara8.textContent = 'Goles de penal: '+jugadores[i].statistics[0].penalty.scored;
      myPara9.textContent = 'Equipo: ' + jugadores[i].statistics[0].team.name;
      
      myArticle.appendChild(img);
      myArticle.appendChild(myH6);
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);
      myArticle.appendChild(myPara7);
      myArticle.appendChild(myPara8);
      myArticle.appendChild(myPara9);
      
      
      section.appendChild(myArticle);
        
      }
  }
}

function amarillas(){
  var header = document.querySelector('header');
    var section = document.querySelector('section');
    
    var requestURL = 'https://v3.football.api-sports.io/players/topyellowcards?season=2022&league=140'
  
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.setRequestHeader("x-rapidapi-key", "ad406f1573545faafc7174ac97278cc7");
    request.setRequestHeader("x-rapidapi-host", "v3.football.api-sports.io");
    request.send();
  
    request.onload = function() {
      var datos = request.response;
      populateHeader(datos);
      showHeroes(datos);
    }
  
    function populateHeader(jsonObj) {
      var myH1 = document.createElement('h1');
      var myPara = document.createElement('p');
    }

    function showHeroes(jsonObj) {
      var jugadores = jsonObj['response'];
      var imgArray = new Array();
  
    for(var i = 0; i < jugadores.length; i++) {
        var myArticle = document.createElement('article');
        var myH6 = document.createElement('h6');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');
        var myPara9 = document.createElement('p');
  
  
  
    imgArray[i] = new Image();
    //imgArray[i].src = '../img/'+ jugadores[i].player.name +'.png';
      imgArray[i].src = jugadores[i].player.photo
  
        img = imgArray[i];
        myH6.textContent = 'Posición: ' + i;
        myH2.textContent = jugadores[i].player.name;
        myPara1.textContent = 'País: ' + jugadores[i].player.nationality;
        myPara2.textContent = 'Partidos: ' + jugadores[i].statistics[0].games.appearences;
        myPara3.textContent = 'Minutos jugados: '+jugadores[i].statistics[0].games.minutes;
        myPara4.textContent = 'Puntuación media: '+jugadores[i].statistics[0].games.rating;
        myPara5.textContent = 'Pases totales: '+jugadores[i].statistics[0].passes.total;
        myPara6.textContent = 'Dribles: '+jugadores[i].statistics[0].dribbles.success;
        myPara7.textContent = 'Goles: '+jugadores[i].statistics[0].goals.total
        myPara8.textContent = 'Goles de penal: '+jugadores[i].statistics[0].penalty.scored;
        myPara9.textContent = 'Asistencias: '+jugadores[i].statistics[0].goals.assists;
        
        myArticle.appendChild(img);
        myArticle.appendChild(myH6);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        myArticle.appendChild(myPara8);
        myArticle.appendChild(myPara9);
        
        
        section.appendChild(myArticle);
          
        }
    }
}

function rojas(){
  var header = document.querySelector('header');
  var section = document.querySelector('section');

  var requestURL = 'https://v3.football.api-sports.io/players/topredcards?season=2022&league=140'

  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.setRequestHeader("x-rapidapi-key", "ad406f1573545faafc7174ac97278cc7");
  request.setRequestHeader("x-rapidapi-host", "v3.football.api-sports.io");
  request.send();

  request.onload = function() {
    var datos = request.response;
    populateHeader(datos);
    showHeroes(datos);
  }

  function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    var myPara = document.createElement('p');
  }
}