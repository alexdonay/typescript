interface person{
    id: number;
    name: string;
    address: string;
    mail: string;
    logininfo: {
        username: string;
        password: string;
    }
}

interface simpleuser extends person{
    id: number;
    name: string;
    address: string;
    mail: string;
    logininfo: {
        username: string;
        password: string;
    }
    office : "f1" | "f2"
    login(username: string, password: string):boolean
    
    
    
}

class user implements simpleuser {
    id: number;
    name: string;
    address: string;
    mail: string;
    logininfo: {
        username: string;
        password: string;
    }
    office: "f1" | "f2"
    //construtor
    constructor(id: number, name: string, address: string, mail: string, logininfo: {username: string, password: string}, office: "f1" | "f2") 
    {
        this.id = id
        this.name = name
        this.address = address
        this.mail = mail
        this.logininfo = logininfo
        this.office = office
    }
    login(username: string, password: string): boolean{
        
        return (username === this.logininfo.username && password === this.logininfo.password)
        }
        
}


const donay : simpleuser = new user(1,"Alexsander","Rua dois","alexdonay@gmail.com",{username:"alexdonay",password:"123"},"f1")

donay.login("alexdonay","123")?    document.getElementById("login").innerHTML = "Logado com sucesso!" : document.getElementById("login").innerHTML = "Não foi possível logar"




