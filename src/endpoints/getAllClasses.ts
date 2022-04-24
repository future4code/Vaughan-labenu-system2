import { Request, Response } from "express";
import { TurmaClasse } from "../classes";
import { GetAllTurmasDB } from "../data";


// Fiz esta funçao para ser usado quando precisamos de todas turmas.
export const getALLClasses = async (req: Request, res: Response) => {
    try {

        const GetAllTurmas = new GetAllTurmasDB();
        const result: TurmaClasse[] = await GetAllTurmas.getAllTurmas()
        //GabrielM  24/04 transformando em array de objectos e returando formatação 
        //do banco de dados passando para camelCase. 

        if (result.length > 0) {
            res.status(200).send(result)

        } else throw new Error("Nenhum turma foi encontrado no bando de Dados!")

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}


export const getALLClassesNoExpress = async (): Promise<TurmaClasse[]> => {
    try {

        const GetAllTurmas = new GetAllTurmasDB();
        const result: TurmaClasse[] = await GetAllTurmas.getAllTurmas()
        //GabrielM  24/04 transformando em array de objectos e returando formatação 
        //do banco de dados passando para camelCase. 

        if (result.length > 0) {
            return Object.values(JSON.parse(JSON.stringify(result)))

        } else throw new Error("Nenhum turma foi encontrado no bando de Dados!")

    } catch (error: any) {
        throw new Error(error.message)
    }
}