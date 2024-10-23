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
async function redesSociaisFavoritasMinhaEscola() {
  const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=rSe23zaQC7gOvWgFJbdtPaqh7ewsO5hQmusYOeqdorTRN8C25vVV3BicsPo6HS3jnJY9NNhy_pNZj6prQdxDH3305Mro8vNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1nSncGQajx_ryfhECjZEnPvESZ9fvnAeFWqfIvIacdoRZcVMZ-nDSydw9_0gseo2TN3y60rOTtwDBCYnKQf6yIqgf8yOzNfccjP633C9VnHmUmPZvRBJY9z9Jw9Md8uu&lib=MCARBaBtNBMHKiEwMeRap3j6V_G7SlGWF'
  const res = await fetch(url) 
  const dados = await res.json()

  const redesSociais = dados.slice(1).map(redes = redes[1])
  console.table(dados)
}

redesSociaisFavoritasMinhaEscola()
async function redesSociaisFavoritasMinhaEscola() {
  //código omitido
  const res = await fetch(url)
  const dados = await res.json()
  const redesSociais = dados.slice(l).map(redes => redes [1])
  
  const contagemRedesSociais = redesSociais.reduce()
}

redesSociaisFavoritasMinhaEscola()
const data = [
  {
    values: valores,
    labels: redes,
    type: 'pie',
    textinfo: 'label+percent'
  }
]

const layout = {
  plot_bgcolor: getCSS('--bg-color'),
  paper_bgcolor: getCSS('--bg-color'),
  height: 700,
  title: {
    text: 'Redes sociais que os usuários mais gostam',
    x: 0,
    font: {
      color: getCSS('--primary-color'),
      family: getCSS('--font'),
      size: 30
    }
  },
  legend: {
    font: {
      color: getCSS('--primary-color'),
      size: 16
    }
  }
}

criarGrafico(data, layout)
const layout = {
  plot_bgcolor: getCSS('--bg-color'),
  paper_bgcolor: getCSS('--bg-color'),
  height: 700,
  title: {
      text: 'Redes sociais que as pessoas da minha escola mais gostam',
//código omitido
// código omitido

async function redesSociaisFavoritasMinhaEscola() {
  const dadosLocais = localStorage.getItem('respostaRedesSociais')
  if (dadosLocais) {
      const dadosLocais = JSON.parse(dadosLocais)
      processarDados(dadosLocais)
      } else {
      const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=reS23zaQC7gOwWgFJbdtPaqh7ewsO5hQmusYOeqdorTRN8C25vVV3BicsPoS6HS3jnJY9NNhhy_pNZj6prQdxDH3305Mro8vNm5_BxDLH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPvESZ9fvnAeFwqfIviacdoRZcVMZ-nDSydw9_0gseo2TN3y60rOttwDBCyYnKQf6yIqqf8yOzNfccjP633C9VnHmUmPZvRBJY9z9JW9Md8uu6&lib=MCARABtBNBMHKiEwMeRap3j6V_G7SlGWF'
      const res = await fetch(url)
      const dados = await res.json()
      localStorage.setItem('respostaRedesSociais', JSON.stringify(dados))
      processarDados(dadosLocais)
}

// código omitido
const dadosLocaisString = localStorage.getItem('respostaRedesSociais')
if (dadosLocaisString) {
    const dadosLocais = JSON.parse(dadosLocaisString)
    processarDados(dadosLocais)
    }