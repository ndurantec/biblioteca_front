function salvar() {
  const nome = document.getElementById(nome);
  const endereco = document.getElementById(endereco);
  const email = document.getElementById(email);
  const cgm = document.getElementById(cgm);
  const telefone = document.getElementById(telefone);
  const dataNascimento = document.getElementById(dataNascimento);
    
  
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");
  
  fetch('http://127.0.0.1:8080/aluno/inserir',{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
    
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: nome, endereco: endereco, email: email, cgm: cgm, telefone, telefone, dataNascimento: dataNascimento}),

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
  const nome = document.getElementById(nome);
  const endereco = document.getElementById(endereco);
  const email = document.getElementById(email);
  const cgm = document.getElementById(cgm);
  const telefone = document.getElementById(telefone);
  const dataNascimento = document.getElementById(dataNascimento);
        

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch('http://127.0.0.1:8080/aluno/inserir',{

    method: "GET",
    mode: "cors", 
    cache: "no-cache",
    
    
    body: JSON.stringify({nome: nome, endereco: endereco, email: email, cgm: cgm, telefone, telefone, dataNascimento: dataNascimento}),

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
  const nome = document.getElementById(nome);
  const endereco = document.getElementById(endereco);
  const email = document.getElementById(email);
  const cgm = document.getElementById(cgm);
  const telefone = document.getElementById(telefone);
  const dataNascimento = document.getElementById(dataNascimento);
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch('http://127.0.0.1:8080/aluno/inserir',{

    method: "GET",
    mode: "cors", 
    cache: "no-cache",
      
      
    body: JSON.stringify({nome: nome, endereco: endereco, email: email, cgm: cgm, telefone, telefone, dataNascimento: dataNascimento}),

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
  const nome = document.getElementById(nome);
  const endereco = document.getElementById(endereco);
  const email = document.getElementById(email);
  const cgm = document.getElementById(cgm);
  const telefone = document.getElementById(telefone);
  const dataNascimento = document.getElementById(dataNascimento);
  

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch('http://127.0.0.1:8080/aluno/inserir',{

    method: "GET",
    mode: "cors", 
    cache: "no-cache",
                  
                    
    body: JSON.stringify({nome: nome, endereco: endereco, email: email, cgm: cgm, telefone, telefone, dataNascimento: dataNascimento}),

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
        
      

<<<<<<< HEAD
=======

function carregarComboLocal() {
 
  console.log('Carregou a página e chamou a função');

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/local/findAll') ,{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela

    headers: headers

    
  }.then(response => response.json())
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
>>>>>>> 9d2edb511b8acf7ee495d208621dde140154ae40
