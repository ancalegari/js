const tarefas = JSON.parse(localStorage.getItem("tarefas")
tarefas.forEach(tarefa => card(tarefa))
function card(tarefas){
  const cardTarefa ='
    <div class= "nes container with-title is-centerd>
        <p class= "title>${tarefa.titulo}</p>
        <p>${tarefa.descricao}</p>
        <p>${tarefa.pontos}</p>



    
  const card = document.createElement("div")
  card.innerHTML = cardTarefa
  document.querySelector("#lista-de-tarefas").append
