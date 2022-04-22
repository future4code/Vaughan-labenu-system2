import { Request , Response } from "express";
import { Estudante, EstudanteSemHobby } from "../classes";
import { CreatingStundetDB } from "../data";


// "nome", "email", "dataNasc", "turmaID" ,"hobbys" = []


export const creatingStudents = async (req: Request , res :Response): Promise<void> => {
    try {
         const {nome, email, dataNasc, turmaId:turma_id ,hobbys }: 
            { nome:string, email:string, dataNasc : string, turmaId:string ,hobbys :string[] } = req.body
         const id = Math.random().toString();
         const data_nasc  = dataNasc.split("/").reverse().join("-") 


        // const estudante  = 
        //    new Estudante(id, nome, email, data_nasc, turma_id ,hobbys )
        const estudanteSemHobby = 
            new EstudanteSemHobby(id, nome, email, data_nasc, turma_id )
            
            console.log("Creating students", estudanteSemHobby)

        const CreatingStudentsDB = new CreatingStundetDB()
        CreatingStudentsDB.creatingStundentMeth(estudanteSemHobby)
        res.status(201).send(estudanteSemHobby)
    } catch (error: any) {

        res.status(400).send(error.sqlMessage | error.message)     
    }
}



  