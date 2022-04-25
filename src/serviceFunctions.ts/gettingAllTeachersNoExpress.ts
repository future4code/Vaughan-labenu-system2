import { GetAllDocentesDB } from "../data";


export const GetAllDocentesNoExpress = async () =>  { 
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
  
         return (resultTransfomado)
        }else throw new Error("Nenhum docente foi encontrado no bando de Dados!")

  } catch (error: any) {

    throw new Error(error.sqlMessage || error.message)
  }

}


