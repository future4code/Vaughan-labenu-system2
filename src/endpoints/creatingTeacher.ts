import { Request, Response } from "express";
import { BaseDataBase } from "../connections";
import { Docente } from "../classes";
import { CreatingStundetDB, ReadingHobbiesDB } from "../data";
import { ESPECIALIDADES } from "../types";
import {InserirDocente} from "../data"

export const creatingTeacher = async (req: Request, res: Response): Promise<void> => {
    try {

        const id = Math.random().toString()
        const {nome, email, data_nasc, turma_id} = req.body
        const novoDocente = {id, nome, email, data_nasc, turma_id}

        const adicionarDocente = new InserirDocente
        adicionarDocente.InserirDocenteDB(novoDocente)

        res.status(201).send("Docente adicionado")
    } catch (error: any) {
        res.status(400).send(error.sqlMessage | error.message)     
    }
}

function connection() {
    throw new Error("Function not implemented.");
}
function send(arg0: string) {
    throw new Error("Function not implemented.");
}