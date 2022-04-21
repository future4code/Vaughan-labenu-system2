import { Request , Response } from "express";
import { Estudante } from "../classes";
import { CreatingStundetDB } from "../data";


// "nome", "email", "dataNasc", "turmaID" ,"hobbys" = []


export const creatingStudents = async (req: Request , res :Response): Promise<void> => {
    try {
         const {nome, email, dataNasc, turmaID:turma_id ,hobbys }: 
            { nome:string, email:string, dataNasc : string, turmaID:string ,hobbys :string[] } = req.body
         const id = Math.random().toString();

         const data_nasc  = dataNasc.split("/").reverse().join("-") 

        const estudante = new Estudante(id, nome, email, data_nasc, turma_id ,hobbys )

        const CreatingStudentsDB = new CreatingStundetDB()
        CreatingStudentsDB.creatingStundentMeth(id, nome, email, data_nasc, turma_id)
    } catch (error) {
        

    }

}



  