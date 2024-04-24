function limpar(){
  document
    .queryselectorall("input .is-error, textarea .is-error")
    foreach(()=>{console.log("campo com erro")})
    .classList
    .remove("is-error")

}
