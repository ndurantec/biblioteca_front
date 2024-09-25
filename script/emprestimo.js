function salvar() {
  const codigo = Number(document.getElementById('cod').value);
  const isbn_Emprestimo = document.getElementById('indicador').value;
  const data_Emprestimo = document.getElementById('emprestimo').value;
  const data_Entrega = document.getElementById('entrega').value;
    
  console.log(codigo);
  console.log(isbn_Emprestimo);
  console.log(data_Emprestimo);
  console.log(data_Entrega);
  
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");
  
  //fetch('http://127.0.0.1:8080/emprestimo/insert',{
    fetch('http://127.0.0.1:8080/emprestimo/insert',{
    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
    
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ codigo: codigo,
      isbnEmprestimo: isbn_Emprestimo,
      dataEmprestimo: data_Emprestimo,
      dataDevolucao: data_Entrega
      }),

    headers: headers

    //Aqui inicia função then
   }).then(response => {

      if(response.ok) {

    //Esta linha imprime a mensagem no concole
    console.log('Foi no servidor e voltou');

    //Esta linha carrega a página sucesso
    //window.location.href = 'sucesso.html'    
    } else {
    //Esta linha imprime a mensagem no console
    console.log('Aconteceu algo que não foi possivel salvar');

    //Esta linha imprime a mensagem de erro
    throw new Error('Erro ao tentar salvar');
    }

   })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));
         
      
}
          


    
function consultar() {
  const nome_emprestimo = document.getElementById(nome_aluno);
        

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");

  fetch('consultar: http://127.0.0.1:8080/emprestimo/5',{

    method: "GET",
    mode: "cors", 
    cache: "no-cache",
    
                                                           
    body: JSON.stringify({ nome: nome_aluno }),

    headers: headers

  
   }).then(response => {

    if(response.ok) {

        
    console.log('Foi no servidor e voltou');

    
    window.location.href = 'sucesso.html'    
  } else {
    
    console.log('Aconteceu algo que não foi possivel salvar');

    
    throw new Error('Erro ao tentar salvar');
  }

   })

  .catch(error => console.error('Erro!:', error));
    
      
}
        
      




  
function alterar() {
  const nome_emprestimo = document.getElementById(nome_aluno);
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");

  fetch('update: http://127.0.0.1:8080/emprestimo/6',{

    method: "GET",
    mode: "cors", 
    cache: "no-cache",
      
      
    body: JSON.stringify({ nome: nome_aluno }),

    headers: headers

                  
   }).then(response => {

    if(response.ok) {

      
    console.log('Foi no servidor e voltou');

      
    window.location.href = 'sucesso.html'    
    } else {
      
    console.log('Aconteceu algo que não foi possivel salvar');

      
    throw new Error('Erro ao tentar salvar');
    }
   })

  .catch(error => console.error('Erro!:', error));
  
            
}
        
        
        



        
function apagar() {
  const nome_emprestimo = document.getElementById(nome_aluno);
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");

  fetch('delete: http://127.0.0.1:8080/emprestimo/3',{

    method: "GET",
    mode: "cors", 
    cache: "no-cache",
                  
                    
    body: JSON.stringify({ nome: nome_aluno }),

    headers: headers

  
   }).then(response => {

    if(response.ok) {

      
    console.log('Foi no servidor e voltou');

      
    window.location.href = 'sucesso.html'    
    } else {
      
    console.log('Aconteceu algo que não foi possivel salvar');

      
    throw new Error('Erro ao tentar salvar');
    }

  })

 .catch(error => console.error('Erro!:', error));
                 
              
}
        
      




function carregarComboLocal() {
 
  console.log('Carregou a página e chamou a função');

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  fetch('http://127.0.0.1:8080/local/findAll' ,{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela

    headers: headers

    
  }).then(response => response.json())
  .then(data => {
      const comboBox = document.getElementById('locais');
      data.forEach(local => {
          const option = document.createElement('option');
          option.value = local.id;
          option.textContent = local.nome;
          comboBox.appendChild(option);
      });
  })
  .catch(error => console.error('Erro ao carregar locais:', error));
   

}