import { ESPECIALIDADES } from "./types";




class Turma {
    public modulo = 0;
    constructor(
         public id: string, 
         public nome: string, 
         public docentes: string, 
         public estudantes: string, 
    ) {
        
    }
}


const turma1 = new Turma("turma_varughan", 
"ronald@ronald.com" , 
"10/02/1990",
"turma01")

console.log(turma1)

abstract class Usuario {    
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id: string        
    ){

    }
}

export class Estudante extends Usuario{
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id: string,
        public hobbys: string[]          
    ){
        super(id, nome, email, data_nasc, turma_id);
    }
} 


 export class Docente extends Usuario   {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id: string,
        public especialidades: ESPECIALIDADES[]           
    ){
        super(id, nome, email, data_nasc, turma_id);
    }  
      
    
}



export const Docente1 = new Docente("001", 
"Ronald", 
"ronald@ronald.com" , 
"10/02/1990",
"turma01", 
[ESPECIALIDADES.JS]
      )
    console.log(Docente1)  


    export const Estudante1 = new Estudante( 
        "001", 
"Jardel", 
"ronald@ronald.com" , 
"10/02/1990",
"turma01", 
["nadar",  "joga tennis"]

    )