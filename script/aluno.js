function salvar() {
  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const email = document.getElementById('email').value;
  const cgm = Number(document.getElementById('cgm').value);
  const telefone = document.getElementById('telefone').value;
  const dataNascimento = document.getElementById('nascimento').value;

   
  if(nome.length>50)  {
     alert("o nome deve ter no maximo 50 caracteres");
    } else {
      alert("O nome é valido");
    }
  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch('http://127.0.0.1:8080/aluno/insert', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({
      nome: nome,
      endereco: endereco,
      email: email,
      cgm: cgm,
      telefone,
      telefone,
      dataNascimento: dataNascimento
    }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {

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
  const aluno = document.getElementById("nome").value;
  // const endereco = document.getElementById("endereco").value; 
  // const email = document.getElementById("email").value;
  // const cgm = document.getElementById("cgm").value;
  //const telefone = document.getElementById("telefone");
  // const dataNascimento = document.getElementById("dataNascimento").value;

   console.log(aluno);
  //  console.log(endereco);
  //  console.log(email);
  //  console.log(cgm);
   //console.log(dataNascimento);


  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");



  fetch('http://127.0.0.1:8080/aluno/findByNome', {

    method: "POST",
    mode: "cors",
    cache: "no-cache",


    body: JSON.stringify({ nome: aluno}),

    headers: headers


  }).then(response => {

    if (response.ok) {


      return response.text();


     // window.location.href = 'sucesso.html'
    } else {

      console.log('Aconteceu algo que não foi possivel consultar');


      throw new Error('Erro ao consultar');
    }

  })
  .then(id_aluno => {

      console.log("ID do aluno recebido:", id_aluno);
      

      if (id_aluno) {
        localStorage.setItem('id_aluno', id_aluno);
        alert("Aluno achado com sucesso, agora você pode alterá-lo");
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
  const aluno = document.getElementById("nome").value;
  const id = prompt("informe o id do aluno")
  // const endereco = document.getElementById("endereco");
  // const email = document.getElementById("email");
  // const cgm = document.getElementById("cgm");
  // const telefone = document.getElementById("telefone");
  // const dataNascimento = document.getElementById("dataNascimento");

  const ID = localStorage.getItem('id_aluno');

  console.log(aluno);
  console.log(ID);

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch(`http://127.0.0.1:8080/aluno/${ID}`, {

    method: "PUT",
    mode: "cors",
    cache: "no-cache",


    body: JSON.stringify({ nome: aluno, id: id}),

    headers: headers


  }).then(response => {

    if (response.ok) {


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
  const nome = document.getElementById("nome");
  const endereco = document.getElementById("endereco");
  const email = document.getElementById("email");
  const cgm = document.getElementById("cgm");
  const telefone = document.getElementById("telefone");
  const dataNascimento = document.getElementById("dataNascimento");

  const ID = localStorage.getItem('id_aluno');

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', "*");

  fetch(`http://127.0.0.1:8080/aluno/${ID}`, {

    method: "DELETE",
    mode: "cors",
    cache: "no-cache",


    body: JSON.stringify({ nome: nome, endereco: endereco, email: email, cgm: cgm, telefone, telefone, dataNascimento: dataNascimento }),

    headers: headers


  }).then(response => {

    if (response.ok) {


      console.log('Foi no servidor e voltou');


      window.location.href = 'sucesso.html'
    } else {

      console.log('Aconteceu algo que não foi possivel salvar');


      throw new Error('Erro ao tentar salvar');
    }

  })

    .catch(error => console.error('Erro!:', error));


}
