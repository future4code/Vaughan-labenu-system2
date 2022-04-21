import { BaseDataBase } from "./connections";



// export const  dBCreatingStudent =async(id:string, nome: string, email:string, data_nasc: string, turma_id:string )
// : Promise<void>  => { 

//      const result = 
//                 await connection("ESTUDANTE")
//                 .insert(
//                     {id, nome, email, data_nasc, turma_id}
//                     ) 
// }


export class CreatingStudentDB extends BaseDataBase {  
      
    public async creatingStudent(){
     try { 
       return await this.connection("Actor")
     }catch(error: any) { 
        throw new Error( error.sqlMessage || error.message)
     }
    }

} 




export class CreatingTurma extends BaseDataBase {  
      
    public async creatingTurma(turma: any){
     try { 
       return await this.connection("TURMA").insert(turma)
     }catch(error: any) { 
        throw new Error( error.sqlMessage || error.message)
     }
    }
}  