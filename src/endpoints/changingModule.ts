import { Request, Response } from "express";
import { TurmaClasse } from "../classes";
import { ChangeClassModuloDb } from "../data";
import { MODULO } from "../types";




export const changeModule = async (req: Request, res: Response) => {
    try {
        const { turmaId, nome, modulo }:
            { nome: string, turmaId: string, modulo: MODULO } = req.body;
        const turma = new TurmaClasse(turmaId, nome)
        turma.setModulo(modulo)
        const changeModulodoDB = new ChangeClassModuloDb();
        const result = await changeModulodoDB.changeClassModuleDB(turma.getId(), turma.getModulo())
        res.status(201).send("Modulo trocado")
    } catch (error: any) {

        res.status(400).send(error.sqlMessage || error.message)
    }
}


