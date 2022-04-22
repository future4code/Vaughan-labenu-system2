import { Estudante, TurmaClasse } from "./classes";
import { BaseDataBase } from "./connections";
import { MODULO } from "./types";


export class CreatingStundetDB  extends BaseDataBase { 
     // Lembrar de usar algum tipo de intercao para tabela Estudante_hobby  olhar a .md de hobbies
    public async creatingStundentMeth  
      (id: string, nome: string, email: string, data_nasc:string, turma_id : string) { 
        try { 
            await this.connection("ESTUDANTE")
            .insert({id, nome, email, data_nasc, turma_id})
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)  
        }
    }
}

export class CreatingTurma extends BaseDataBase {  
      
    public async creatingTurma(turma: TurmaClasse){
     try { 
       return await this.connection("TURMA").insert(turma)
     }catch(error: any) { 
        throw new Error( error.sqlMessage || error.message)
     }
    }
}  

export class SearchingTurmaAtivaDB extends BaseDataBase{ 

    public async SearchingTurmaAtivaDBMeth(){ 
    try {
        return await this.connection("TURMA").where("modulo", ">", 0 )
    } catch (error: any) {
         throw new Error( error.sqlMessage || error.message)
    }
    }

}
export class SearchingTurmaAInvalidasDB extends BaseDataBase{ 
    public async SearchingTurmaAInvalidasDB(){ 
    try {
        return await this.connection("TURMA").where("modulo", "=", 0 )
    } catch (error: any) {
         throw new Error( error.sqlMessage || error.message)
    }
    }
}


export class ChangeClassModuloDb extends BaseDataBase { 
    public async changeClassModuleDB(turmaId : string , modulo: MODULO) { 
        try {
            return await this.connection("TURMA")
                .where("id", "=" , turmaId)
                .update("modulo", modulo)
        } catch (error: any) {
            throw new Error( error.sqlMessage || error.message)
        }
    }
}


// criando 1 ESTUDANTE_HOBBY no banco de dados 

export class CreatingEstudanteHobbyDB extends BaseDataBase { 
    /**
     * id, estudante_id, hobby_id
     */
    public async creatinghobby(id:string , estudante_id: string, hobby_id: string) {
        try {
             return await this.connection("ESTUDANTE_HOBBY")
                    .insert({id, estudante_id, hobby_id })
        } catch (error: any) {
            throw new Error( error.sqlMessage || error.message)
        } 
    }
}