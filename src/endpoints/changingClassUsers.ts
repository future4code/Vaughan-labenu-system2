import { Request, Response } from "express";
import { TurmaClasse } from "../classes";
import { ChaggingUsersClassDB } from "../data";
import { getALLClassesNoExpress } from "./getAllClasses";




export const changingClassUsuario = async (req: Request, res: Response): Promise<void> => {
    try {

        const id = req.body.idUsuario as string;
        const nomeTurma = req.body.nomeTurma as string;
        const usuario = req.body.usuario as string;

        // chamando funcao para pegar todas as turmas existentes 
        // e aqui eu consigo pegar o id da turma usando o nome
        const allTurmas = await getALLClassesNoExpress();


        if (allTurmas) {
            const idTurma = allTurmas.filter(item => {
                if (item.nome === nomeTurma) {
                    return true
                } else return false
            }).map(item => item.id)
            const turma_id = idTurma[0];

            if (id) {
                const chaggingStudentClass = new ChaggingUsersClassDB()
                await chaggingStudentClass.chaggingClass(id, turma_id ,usuario )
                console.log(id,turma_id, usuario )
                // console.log(id , turma_id)
                res.status(200).send(`A nova turma é ${turma_id}  , ${nomeTurma}`)

            }


        }
        //   const teste = idTurma[0] as string
        //   console.log(idTurma[0])





    } catch (error: any) {
        res.status(400).send(error.message || error.message)
    }



}




