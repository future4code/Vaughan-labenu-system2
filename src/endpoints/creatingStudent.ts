import {Request , Response } from "express";
import { dBCreatingStudent } from "../data";



export const creatingStudent = async(req: Request , res: Response)=> { 
       
      
      const {nome, email, dataNasc, turmaId:turma_id} = req.body

     const data_nasc = dataNasc.split("/").reverse().join("-");
     console.log(data_nasc)

      const id = Math.random().toString();
      const result = await dBCreatingStudent(id, nome, email, data_nasc, turma_id)
  
}