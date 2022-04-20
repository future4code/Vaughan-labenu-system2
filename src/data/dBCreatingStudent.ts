import connection from "../connections"



export const  dBCreatingStudent =async(id:string, nome: string, email:string, data_nasc: string, turma_id:string )
: Promise<void>  => { 

     const result = 
                await connection("ESTUDANTE")
                .insert(
                    {id, nome, email, data_nasc, turma_id}
                    ) 
}