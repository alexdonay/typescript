//Teste função
function soma(a: number, b: number): number {
  return a + b;
}

document.getElementById("root").innerText = soma(1, 2).toString();

//teste interface
interface Ipessoa {
  nome: string
  idade: number
  caminhar(km:number): void
  
  
  
}
interface Iusuario extends Ipessoa {
  tipoAcesso: "FREE" | "STANDARD" | "PREMIUM"
}

const usuario: Iusuario = {
  nome: "Diego",
  idade: 23,
  tipoAcesso: "FREE",
  caminhar: (km:number) =>{
  console.log(`${this.nome} caminhou ${km}km`)
  }
    
  
}
document.getElementById("usuario").innerText = usuario.nome
//Classe
class usuario2 implements Iusuario {
  nome: string;
  idade: number;
  tipoAcesso: "FREE" | "STANDARD" | "PREMIUM";
  constructor(nome: string, idade: number, tipoAcesso: "FREE" | "STANDARD" | "PREMIUM") {
    this.nome = nome
    this.idade = idade
    this.tipoAcesso = tipoAcesso
  }
  caminhar(km:number){
    console.log(`${this.nome} caminhou ${km}km`); 
  }
}

const alexsander = new usuario2("Alexsander", 23, "FREE")
document.getElementById("usuario2").innerText = alexsander.nome
alexsander.caminhar(10)

//teste type
const i = document.getElementById("input") as HTMLInputElement

i.addEventListener('input',(Event =>{
  console.log(i.value)
}))

//Generic types

function appendonlist<generic>(array:any[],value:generic){
  return array.map(item => item + value)
}
appendonlist([1,2,3] ,4)