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

enum {
    JS = "JS",

}

export class Docente extends Usuario{
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id: string,
        public especialidades: string[]          
    ){
        super(id, nome, email, data_nasc, turma_id);
    }
}