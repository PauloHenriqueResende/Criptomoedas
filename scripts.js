 

/* Filtro de busca da tabela */
const tbody = document.getElementById('tbody')
const input_busca = document.getElementById('search')

input_busca.addEventListener('keyup',()=>{
    let expressao = input_busca.value
    console.log(expressao)
 
    let linhas =  tbody.getElementsByTagName('tr')
    for (let posicao in linhas){
        if (true == isNaN(posicao)){
            continue
        }
       let conteudoDaLinha = linhas[posicao].innerHTML
       if (true === conteudoDaLinha.includes(expressao)){
        linhas[posicao].style.display=''
       } else{  
        linhas[posicao].style.display='none'
       }
    }
})
 /*adicionando evento ao botao ver mais

 */
 const botoesVerMais = document.querySelectorAll('.botao');
 const textos = document.querySelectorAll('.texto');
 
 botoesVerMais.forEach((botaoVerMais, index) => {
     botaoVerMais.addEventListener('click', () => {
         const textoAtual = textos[index];
         if (textoAtual.style.display === 'none' || textoAtual.style.display === '') {
             textoAtual.style.display = 'block';
             botaoVerMais.textContent = 'Fechar';
         } else {
             textoAtual.style.display = 'none';
             botaoVerMais.textContent = 'Ver mais';
         }
     });
 });

 /*conversor*/

 const botao= document.getElementById('calcular')
 const select = document.getElementById('escolha')
 const inputValor =document.getElementById('valor')
 const resultado = document.getElementById('resultado')
 

 botao.addEventListener('click', function() {
    const escolhaMoeda = select.value;
    const quantidade = parseFloat(inputValor.value);
  
    // Taxas de conversão  
    const taxas = {
      '0': '', 
      '1': 337.967,  
      '2': 19.296, 
      '3': 4.94,    
      '4': 2.409,    
      '5': 3.08,      
      '6': 3.68    
    };
  
    const taxaConversao = taxas[escolhaMoeda];
  
    if (!isNaN(quantidade) && taxaConversao !== undefined) {
      const resultadoConversao = quantidade * taxaConversao;
      resultado.textContent = 'Resultado: ' + resultadoConversao.toFixed(3) + ' reais';
    } else {
      resultado.textContent = 'Por favor, insira uma quantidade válida.';
    }
  });
  