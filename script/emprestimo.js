
function salvar() {
    const cgm = Number(document.getElementById("cgm").value);
    const isbn = document.getElementById("isbn").value; 
    const dataEmprestimo = document.getElementById("dataEmprestimo").value;
    const dataEntrega = document.getElementById("dataEntrega").value;
     
  console.log(cgm);
  console.log(isbn);
  console.log(dataEmprestimo);
  console.log(dataEntrega);
  
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
    body: JSON.stringify({ 
      cgmAluno: cgm,
      isbnLivro: isbn,
      dataEmprestimo: dataEmprestimo,
      dataEntrega: dataEntrega
      }),

    headers: headers

   //Aqui inicia função then
  }).then(response => {
    if(response.ok) {
      return response.json(); //transforma a resposta em JSON
    } else {
      //Esta linha imprime a mensagem no console
      console.log('Aconteceu algo que não foi possivel salvar');
      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar salvar');
    }

  })
  .then(data => {
    //aqui você pode acessar o 'id' retornado do back end
    const id_emprestimo = data.id;
    console.log('ID do registro salvo:', id_emprestimo);

    //se quiser armazenar o ID no localStorage
    localStorage.setItem('id_emprestimo', id_emprestimo);

      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      // window.location.href = 'sucesso.html'    

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));
         
      
}
          


    
function consultar() {
  const codigo = document.getElementById('codigo').value;
  const isbnLivro = document.getElementById('isbnLivro').value;
  const dataEmprestimo = document.getElementById('dataEmprestimo').value;
  const dataEntrega = document.getElementById('dataEntrega').value;
  const Id = document.getElementById('id').value;

  console.log(codigo);
  console.log(isbnLivro);
  console.log(dataEmprestimo);
  console.log(dataEntrega);
  console.log(Id); 

  var headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/emprestimo/findByID', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ cgm: cgm }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {

      return response.text();
      //Esta linha imprime a mensagem no concole
      //console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso.html'
    } else {
      //Esta linha imprime a mensagem no console
      console.error('Erro na resposta da API');

      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar buscar o alimento');
    }

  })

    .then(id_aluno => {

      console.log("ID do aluno recebido:", id_aluno);

      if (id_aluno) {
        localStorage.setItem('id_aluno', id_aluno);
        alert("aluno achado com sucesso, agora você pode alterá-lo");
      } else {
        localStorage.setItem('id_aluno', '');
        console.error("Id não encontrado na resposta");
      }
    })
    .catch(error => {
      console.error("Erro capturado no catch", error);
    });
}

  
function alterar() {
  const codigo = prompt("Informe o CGM para alterar:");
  const isbnLivro = prompt(" informe o ISBN do livro");
  const dataEmprestimo = prompt(" informe o dataEmprestimo do livro");
  const dataEntrega = prompt(" informe a dataEntrega do livro");
  const id = prompt(" informe o id");

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch(`http://127.0.0.1:8080/emprestimo/${id}`, {
    method: "PUT",  // Usar PUT para atualizar
    mode: "cors",
    cache: "no-cache",
    body: JSON.stringify({
      cgmAluno: codigo,
      isbnLivro: isbnLivro,
      dataEmprestimo: dataEmprestimo,
      dataEntrega: dataEntrega,
      id: id,

    }),
    headers: headers
  }).then(response => {
    if(response.ok) {
      console.log('Empréstimo atualizado com sucesso');
      window.location.href = 'sucesso.html';
    } else {
      throw new Error('Erro ao tentar atualizar');
    }
  }).catch(error => console.error('Erro ao tentar atualizar:', error));
}


  
        
function apagar() {
  const codigo = prompt("Informe o CGM do aluno para apagar:");

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch(`http://127.0.0.1:8080/emprestimo/${codigo}`, {
    method: "DELETE",  // Usar DELETE para apagar
    mode: "cors",
    cache: "no-cache",
    headers: headers
  }).then(response => {
    if(response.ok) {
      console.log('Empréstimo apagado com sucesso');
      window.location.href = 'sucesso.html';
    } else {
      throw new Error('Erro ao tentar apagar');
    }
  }).catch(error => console.error('Erro ao tentar apagar:', error));
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
