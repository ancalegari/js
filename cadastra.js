function limpar(){
  const campos = document
    .queryselectorall("input .is-error, textarea .is-error")
  console.log(campos)
  campos
    .foreach((input)=>{input.classlist.remove("is-error")})

  document.querySelectorAll("nes-field span")
    .forEach(span => span.innerText = "")
}
 function salvar(tarefa){
    const tarefas = []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", tarefas)
   
 }
