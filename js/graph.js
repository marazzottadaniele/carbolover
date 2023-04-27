 // FUNZIONE PER MOSTRARE IL GRAFICO SULLA PAGINA 'graph.html'
const graphBody = document.querySelector('#graphBody');
graphBody.onload = showGraph();

function showGraph(){
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var paste = JSON.parse(this.responseText);

        const labelsPaste = paste["paste"].map((el) => el.nome);
        const venditePaste = paste["paste"].map((el) => el.vendite);
        const coloriPaste = paste["paste"].map((el) => el.colore);

         var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
                data: {
                labels: labelsPaste,
                    datasets: [{
                    label: 'Paste di Carbolover',
                    //backgroundColor: 'rgb(255, 99, 132)',
                    backgroundColor: coloriPaste,
                    data: venditePaste
                }]
            },

            // Configuration options go here
            options: {

            tooltips:{
            enabled:true
            }

            }
        });
         }
        };
        xmlhttp.open("GET", "paste.json", true);
        xmlhttp.send();
}

