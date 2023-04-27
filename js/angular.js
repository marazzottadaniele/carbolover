
  // App Angular
  var app = angular.module("myApp", []);


  app.controller("pasteCtrl", //Controller angular per il filtraggio delle paste e get dati dal JSON
      function($scope, $http){
        $scope.pasta = ""; // Input dall'utente su ingredienti o altro

        $http.get("paste.json").then(function(response){ // Ottenimento dati dal paste.json, e i dati li metto in $scope.paste
          $scope.paste = response.data;
        });

        $scope.pastaFiltrata = function filterItems() { //Filtraggio dell'array di oggetti delle paste secondo due criteri, che poi viene stampato a schermo
          return $scope.paste['paste'].filter((el) => el.nome.toLowerCase().includes($scope.pasta.toLowerCase()) || el.ingredienti.toLowerCase().includes($scope.pasta.toLowerCase()) );
        }; //filtro pasta
 // Dati da json
      });



app.controller("validazioneJoinus",
      function($scope, $timeout){
        $scope.nome = "";
        $scope.cognome = "";
        $scope.email = "";
        $scope.cellulare = "";
        $scope.effettuaPrenotazione = function(){
          
          const immagine= document.querySelector('#img_prenotazione'); 
          immagine.src = "./assets/altro/loading.gif"; //cambio da icona "invio" a gif di caricamento
          $timeout(function(){
            const messaggioSuccesso = document.getElementsByClassName('newsletterSuccesso')[0];
            const bottoneInvio = document.getElementsByClassName('bottone__form')[0];

            bottoneInvio.style.display = 'none'; //il bottone scompare
            messaggioSuccesso.style.display = 'block'; //il messaggio di successo compare
          }, 2000)
        };
        $scope.animazioneBottoneEntrata = function(){
          const bottoneInvio = document.getElementsByClassName('bottone__form')[0];
          bottoneInvio.style.boxShadow = '10px 16px 20px #bbb';

        };
        $scope.animazioneBottoneUscita= function(){
          const bottoneInvio = document.getElementsByClassName('bottone__form')[0];
          bottoneInvio.style.boxShadow= 'none';
        }
      }
)



app.controller("validazionePrenotazione",
      function($scope, $timeout){
        $scope.nome = "";
        $scope.nPersone = 1;
        $scope.data = "";
        $scope.ora = "";
        $scope.cellulare = "";
        $scope.effettuaPrenotazione = function(){
          
          const immagine= document.querySelector('#img_prenotazione');
          immagine.src = "./assets/altro/loading.gif";  //cambio da icona "invio" a gif di caricamento
          $timeout(function(){
            const newsletterSuccesso = document.getElementsByClassName('newsletterSuccesso')[0];
            const bottoneInvio = document.getElementsByClassName('bottone__form')[0];

            bottoneInvio.style.display = 'none'; //il bottone scompare
            newsletterSuccesso.style.display = 'block' //il messaggio di successo compare
          }, 2000)
        };
        $scope.animazioneBottoneEntrata = function(){
          const bottoneInvio = document.getElementsByClassName('bottone__form')[0];
          bottoneInvio.style.boxShadow = '10px 16px 20px #bbb';

        };
        $scope.animazioneBottoneUscita= function(){
          const bottoneInvio = document.getElementsByClassName('bottone__form')[0];
          bottoneInvio.style.boxShadow= 'none';
        }
      }
)