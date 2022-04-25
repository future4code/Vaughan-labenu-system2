import { Request, Response } from "express";
import { TurmaClasse } from "../classes";
import { ChangeClassModuloDb } from "../data";
import { getALLClassesNoExpresss } from "../serviceFunctions.ts/getALLClassesNoExpress";
import { MODULO } from "../types";




export const changeModule = async (req: Request, res: Response) => {
    try {
        const { turmaId, nomeTurma, modulo }:
            { nomeTurma: string, turmaId: string, modulo: MODULO } = req.body;

            const allclasses= await getALLClassesNoExpresss()
            const isExists = allclasses.filter(item => { 
                if(item.id === turmaId  && item.nome  === nomeTurma) return true })
             //teste para se turma existe
            if(isExists.length > 0 ){

                if(turmaId && nomeTurma && modulo) {
                    const turma = new TurmaClasse(turmaId, nomeTurma)
                    turma.setModulo(modulo)
                    const changeModulodoDB = new ChangeClassModuloDb();
                    await changeModulodoDB.changeClassModuleDB(turma.getId(), turma.getModulo())
                    res.status(201).send("Modulo trocado")
                } else throw new Error("Uma ou mais entradas invalidas");
            }throw new Error("Turma não existe , nome ou id errados");
            
                
    } catch (error: any) {
         switch(error.message){ 
             case "Uma ou mais entradas invalidas": 
             res.status(400).send(error.message)
             break;
             case "Turma não existe , nome ou id errados": 
             res.status(422).send(error.message)
             break;
             default:
                 res.status(400).send(error.sqlMessage || error.message)
            }
    }
}


