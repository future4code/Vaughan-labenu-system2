import { Request , Response } from "express";
import { SearchingDocenteByNameDB } from "../data";






export const SearchingDocenteByName = async (req:Request , res:Response):Promise<void> =>  { 
  try {
      const nome = req.body.nome as string;
      if(nome){        
          const SearchingStudentByName = new SearchingDocenteByNameDB();
          const result = await SearchingStudentByName.searchingByName(nome)
          //GabrielM  24/04 transformando em array de objectos e returando formatação 
          //do banco de dados passando para camelCase. 

          if(result.length > 0){
          const resultTransfomado = result.map( result =>   { 
           return  {id : result.id,
            nome : result.nome,
            email: result.email,
            dataNasc : result.data_nasc,
            turmaId : result.turma_id
          }})
  
          res.status(200).send(resultTransfomado)
        }else throw new Error("Nenhum nome foi encontrado!")
         
        }else throw new Error("Entrada invalida!")
  } catch (error: any) {

    res.status(400).send(error.sqlMessage || error.message)
  }

}


