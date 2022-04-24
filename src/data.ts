import { Docente, Estudante, EstudanteSemHobby, TurmaClasse, Usuario } from "./classes";
import { BaseDataBase } from "./connections";
import { MODULO } from "./types";

export class InserirDocente extends BaseDataBase {
    public async InserirDocenteDB(docente: object) {
        try {
            return await this.connection("DOCENTE").insert(docente)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}


export class SearchingDocenteByNameDB extends BaseDataBase { 
    public async searchingByName(nome: string):Promise<Usuario[]>{ 
        try {
            return await this.connection("DOCENTE")
                      .where("nome", "like", `%${nome}%` )
        } catch (error:any) {
        
        throw new Error(error.sqlMessage ||error.message )    
        }
    }
}


export class CreatingStundetDB extends BaseDataBase {
    // Lembrar de usar algum tipo de intercao para tabela Estudante_hobby  olhar a .md de hobbies
    public async creatingStundentMeth
        //   (id: string, nome: string, email: string, data_nasc:string, turma_id : string) { 
        (estudante: EstudanteSemHobby) {
        // GabrielM *** 22/04/2022
        //Estudante Sem Hobby foir um classe feita para nao colocar o Hobby dentro do Estudante ja 
        // que na tabela Estudante não existe Hobby        
        //   (estudante:Estudante) { 
        try {
                 await this.connection("ESTUDANTE")
                // console.log(estudante)
                .insert(estudante)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}


export class SearchingStudentByNameDB extends BaseDataBase { 
    
    public async searchingStudentByName(nome: string ): Promise<any>{ 
        try { 
            return this.connection("ESTUDANTE")
                       .where("nome" , "like", `%${nome}%`)
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}




export class CreatingTurma extends BaseDataBase {

    public async creatingTurma(turma: TurmaClasse) {
        try {
            return await this.connection("TURMA").insert(turma)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

export class SearchingTurmaAtivaDB extends BaseDataBase {

    public async SearchingTurmaAtivaDBMeth() {
        try {
            return await this.connection("TURMA").where("modulo", ">", 0)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
export class SearchingTurmaAInvalidasDB extends BaseDataBase {
    public async SearchingTurmaAInvalidasDB() {
        try {
            return await this.connection("TURMA").where("modulo", "=", 0)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
export class ChangeClassModuloDb extends BaseDataBase {
    public async changeClassModuleDB(turmaId: string, modulo: MODULO) {
        try {
            return await this.connection("TURMA")
                .where("id", "=", turmaId)
                .update("modulo", modulo)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
// criando 1 ESTUDANTE_HOBBY no banco de dados 
export class CreatingEstudanteHobbyDB extends BaseDataBase {
    /**
     * id, estudante_id, hobby_id
     */
    public async creatinghobby(id: string, estudante_id: string, hobby_id: string) {
        try {
            return await this.connection("ESTUDANTE_HOBBY")
                .insert({ id, estudante_id, hobby_id })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

export class ReadingHobbiesDB extends BaseDataBase {
    public async readingHobbiesMeth() {
        try {
            return await this.connection("HOBBY").select()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

export class InsertHobbiesDB extends BaseDataBase {
    public async insertHobbiesDB(hobby: any[]) {
        try {
            return await this.connection("HOBBY")
                .insert(hobby)
        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
export class FindHobbybyNameDB extends BaseDataBase {
    public async findHobbybyNameDB (nome:string) {
        try {
            return await this.connection("HOBBY")
                            .where("nome","=",nome)
                            .select("id")        
        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}


export class InserirEstudantesHobbyDB extends BaseDataBase {
    public async InserirEstudantesHobbyDB(estudanteHobby: any ) {
        try {
            return await this.connection("ESTUDANTE_HOBBY")
                .insert(estudanteHobby)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}


