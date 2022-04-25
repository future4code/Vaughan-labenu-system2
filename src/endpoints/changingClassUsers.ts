import { Request, Response } from "express";
import { TurmaClasse } from "../classes";
import { ChaggingUsersClassDB } from "../data";
import { getALLClassesNoExpress } from "./getAllClasses";
import { GetAllDocentesNoExpress } from "../serviceFunctions.ts/gettingAllTeachersNoExpress";
import { GetAllDocentes } from "./gettingAllTeachers";
import { GetAllEstudantesNoExpress } from "../serviceFunctions.ts/gettingAllStudents";


export const changingClassUsuario = async (req: Request, res: Response): Promise<void> => {
    try {

        const id = req.body.idUsuario as string;
        const nomeTurma = req.body.nomeTurma as string;
        const usuarioTipo = req.body.usuarioTipo.toUpperCase() as string;

        let isDocenteExists = [];
        let isEstudantExists = [];
        // Gm testing se usuario realmente existe dentro do banco de dados
        // Testando para o Docente ou para o Estudante depende do tipoUser entrado 
        // Tentando reutilizar a funcao. 
        // Funcoes  get all docentes e estudantes estao no folder service. 
        if (usuarioTipo.toUpperCase() === "DOCENTE") {
            const allGetAllDocentesDB = await GetAllDocentesNoExpress()
            isDocenteExists = (allGetAllDocentesDB).filter(item => {
                if (item.id === id) {
                    return true
                } else return false
            })
        } else if (usuarioTipo === "ESTUDANTE") {
            const GetAllEstudanteNoExpress = await GetAllEstudantesNoExpress()
            isEstudantExists = (GetAllEstudanteNoExpress).filter(item => {
                if (item.id === id) {
                    return true
                } else return false
            })
        } else throw new Error("Tipo de usuario errado");

        const userExists: boolean = (isDocenteExists.length > 0 || isEstudantExists.length > 0)

        // chamando funcao para pegar todas as turmas existentes 
        // e aqui eu consigo pegar o id da turma usando o nome
        const allTurmas = await getALLClassesNoExpress();

        if (allTurmas.length > 0) {
            const idTurma = allTurmas.filter(item => {
                if (item.nome === nomeTurma) {
                    return true
                } else return false
            }).map(item => item.id)
            const turma_id = idTurma[0];


            if (turma_id && id && userExists) {
                const chaggingStudentClass = new ChaggingUsersClassDB()
                await chaggingStudentClass.chaggingClass(id, turma_id, usuarioTipo)
                res.status(200).send(`A nova turma é ${turma_id}, ${nomeTurma}`)
            } else throw new Error("Um ou mais entrada estão erradas")

        } else throw new Error("Não há turmas no seu  Banco de Dados");



    } catch (error: any) {
        switch (error.message) {
            case "Não a turmas no seu  Banco de Dados":
                res.status(400).send(error.message)
                break;
            case "Um ou mais entrada estão erradas":
                res.status(422).send(error.message)
                break;
            default:
                res.status(500).send(error.sqlMessage || error.message)

        }
    }



}




