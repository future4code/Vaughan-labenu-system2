import { Request , Response } from "express";
import { SearchingStudentByNameDB } from "../data";






export const   searchingStudentByName = async (req:Request , res:Response):Promise<void> =>  { 
  try {
      
      const nome = req.body.nome as string;

      console.log(nome)
  
      const SearchingStudentByName = new SearchingStudentByNameDB();
      const result = await SearchingStudentByName.searchingStudentByName(nome)
      res.status(200).send(result)
  } catch (error: any) {

    res.status(400).send(error.sqlMessage || error.message)
  }

}


