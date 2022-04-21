
import { ESPECIALIDADES, MODULO } from "./types";




export class TurmaClasse {
    private modulo = MODULO.modulo0;
    constructor(
         private id: string, 
         private nome: string, 
    ) {}
        setModulo(novoModulo: MODULO){ 
            this.modulo =novoModulo;
        }
        
}


// const turma1 = new TurmaClasse("turma_varughan", 
// "ronald@ronald.com" , 
// "10/02/1990",
// "turma01")

// console.log(turma1)

abstract class Usuario {    

    constructor(
        private id: string,
        private nome: string,
        private email: string,
        private data_nasc: string,
        private turma_id: string        
    ){}
}

export class Estudante extends Usuario{

    constructor(
         id: string,
         nome: string,
         email: string,
         data_nasc: string,
         turma_id: string,
        private hobbys: string[]          
    ){
        super(id, nome, email, data_nasc, turma_id);
    }
     setHobbys(novoHobbyes: string[] ){ 
          this.hobbys.push(...novoHobbyes)
     }
} 


 export class Docente extends Usuario   {
    constructor(
         id: string,
         nome: string,
         email: string,
         data_nasc: string,
         turma_id: string,
         private especialidades: ESPECIALIDADES[]           
    ){
        super(id, nome, email, data_nasc, turma_id);
    }  
    setEspecialidades(especialidades: ESPECIALIDADES[] ){ 
        this.especialidades = especialidades
   }   
}



export const Docente1 = new Docente("001", 
"Ronald", 
"ronald@ronald.com" , 
"10/02/1990",
"turma01", 
[ESPECIALIDADES.JS]
      )
    // console.log(Docente1)  


export const Estudante1 = new Estudante( 
"001", 
"Jardel", 
"ronald@ronald.com" , 
"10/02/1990",
"turma01", 
["nadar", "futebol"   , "joga tennis"]
    )