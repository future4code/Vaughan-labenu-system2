import {Request , Response } from "express";
import { TurmaClasse } from "../classes";
import { BaseDataBase } from "../connections";
import { CreatingStudentDB, CreatingTurma } from "../data";
import { MODULO } from "../types";



// export const creatingStudent = async(req: Request , res: Response)=> { 
       
      
//       const {nome, email, dataNasc, turmaId:turma_id} = req.body

//      const data_nasc = dataNasc.split("/").reverse().join("-");
//      console.log(data_nasc)

//       const id = Math.random().toString();
//       const result = await dBCreatingStudent(id, nome, email, data_nasc, turma_id)
  
// }


    export const creatingStudents = async (req:Request , res:Response )
    : Promise<any> =>  { 
      const estudantes = new CreatingStudentDB()
      const result = await estudantes.creatingStudent()
      res.status(200).send(result)
    }


  //  Criando Turma 
    export const creatingTurma = async (req: Request , res: Response) => { 
          try{  
                const  nome : string = req.body.nome 
                const id = Math.random().toString()
                const CreatingTurmaDB = new CreatingTurma()
                const turma = new TurmaClasse(id, nome)
                console.log(turma)
                const result = await CreatingTurmaDB.creatingTurma(turma)
                res.status(201).send("Criado")
      }catch(error: any){ 
            res.status(400).send(error.sqlMessage || error.message)
      }
    }