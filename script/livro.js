function salvar() {
  const nome = document.getElementById(nome).value;
  const genero = document.getElementById(genero).value;
  const anoPublicacao = document.getElementById(anoPublicacao).value;
  const isbn = document.getElementById(isbn).value;
  const idadeIndicativa = document.getElementById(idadeIndicativa).value;
  const autor = document.getElementById(autor).value;
  
  console.log(nome);
  console.log(genero);
  console.log(anoPublicacao);
  console.log(isbn);
  console.log(idadeIndicativa);
  console.log(autor);

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch(' http://127.0.0.1:8080/emprestimo/insert',{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
    
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ cgmAluno: cgmAluno, isbnLivro: isbnLivro, dataEmprestimo: dataEmprestimo, dataEntrega: dataEntrega}),


    headers: headers

    //Aqui inicia função then
  }).then(response => {

  if(response.ok) {

    //Esta linha imprime a mensagem no concole
    console.log('Foi no servidor e voltou');

    //Esta linha carrega a página sucesso
    window.location.href = 'sucesso.html'    
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
  const isbnLivro = document.getElementById(isbnLivro);
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");

  fetch('http://127.0.0.1:8080/emprestimo/5',{

    method: "POST",
    mode: "cors", 
    cache: "no-cache",
    
    
    body: JSON.stringify({ nome: isbnLivro }),

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
  const dataEmprestimo = document.getElementById(dataEmprestimo);
           
          
"var headers = new Headers()"; 
headers.append("Content-Type", "application/json");
headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");

fetch('http://127.0.0.1:8080/emprestimo/6',{

  method: "POST",
  mode: "cors", 
  cache: "no-cache",
  
  
  body: JSON.stringify({ nome: dataEmprestimo }),

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
  const dataEntrega = document.getElementById(dataEntrega);
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");

  fetch('http://127.0.0.1:8080/emprestimo/3',{

    method: "POST",
    mode: "cors", 
    cache: "no-cache",
    
    
    body: JSON.stringify({ nome: dataEntrega }),

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