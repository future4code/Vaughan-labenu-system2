import { Request , Response } from "express";
import { GetAllDocentesDB } from "../data";



export const GetAllDocentes = async (req:Request , res:Response):Promise<void> =>  { 
  try {
    
    
          const GetAllDocentes = new GetAllDocentesDB();
          const result = await GetAllDocentes.getAllDocentes()
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
        }else throw new Error("Nenhum docente foi encontrado no bando de Dados!")

  } catch (error: any) {

    res.status(400).send(error.sqlMessage || error.message)
  }

}


