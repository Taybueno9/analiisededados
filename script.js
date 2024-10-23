const layout = {
    plot_bgcolor: getCSS("--bg-color"),
    paper_bgcolor: getCSS("--bg-color"),
    height: 700,
    title: {
      text: "Redes sociais que os usuários mais gostam",
      x: 0,
      font: {
        color: getCSS("--primary-color"),
        family: getCSS("--font"),
        size: 30,
      },
    },
    legend: {
      font: {
        color: getCSS("--primary-color"),
        size: 16,
      },
    },
  };
  function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config);
}async function redesFavoritasMundo() {
    const layout = {
        legend: {
        
        }
    }

    criarGrafico(data, layout)
        
      // incluirText('')
}

redesFavoritasMundo(
const paragrafo = document.createElement('p');
paragrafo.classList.add('graficos-container_texto')
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`;

function incluirTexto(texto) {
    const container = document.getElementById('graficos-container')
}
const paragrafo = document.createElement('p');
paragrafo.classList.add('graficos-container__texto')
// código omitido

async function redesFavoritasMundo() {
    const layout = {
        legend: {
        
        }
    }

    criarGrafico(data, layout)
        
     incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição em termos de número total de usuários entre as redes sociais, destaca-se como a <span>preferida pelos usuários</ span>. Supera até mesmo o <span>Facebook</span>, a plataforma com mais usuários, sendo a terceira opção mais apreciada pelos usuários. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo Instagram em comparação com outras redes sociais`)
}

redesFavoritasMundo()
function doGet(e) {
    var sheet = SpreadsheetApp.getActiveSheet()
    var data = sheet.getDataRange()
    var jsonData = JSON.stringify(data)
    return ContentService.createTextOutput(jsonData)
    return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON)
}
