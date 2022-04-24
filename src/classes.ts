import { ESPECIALIDADES, MODULO } from "./types";

export class TurmaClasse {
    private modulo = MODULO.modulo0;
    constructor(
         public id: string, 
         public nome: string, 
    ) {}
        setModulo(novoModulo: MODULO){ 
            this.modulo = novoModulo;
        }
        getModulo(): MODULO{ 
           return this.modulo;
        }
        getId(){ 
           return this.id;
        }
        getName(){ 
           return this.nome;
        }
        
        
}

export abstract class Usuario {    

    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id: string        
    ){}
    public setTurma_id(novaTurma:string){
        this.turma_id = novaTurma 
     }
    public getTurma_id(){
        return this.turma_id
     }
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
    public setHobbys(novoHobbyes: string[] ){ 
          this.hobbys.push(...novoHobbyes)
    }
} 
export class EstudanteSemHobby extends Usuario{

    constructor(
         id: string,
         nome: string,
         email: string,
         data_nasc: string,
         turma_id: string,
  
    ){
        super(id, nome, email, data_nasc, turma_id);
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
    public setEspecialidades(especialidades: ESPECIALIDADES[] ){ 
        this.especialidades = especialidades
   }
    public getEspecialidades(): ESPECIALIDADES[]{
        return this.especialidades;
    }
}
 


