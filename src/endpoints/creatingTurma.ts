import { Request, Response } from "express";
import { TurmaClasse } from "../classes";
import { BaseDataBase } from "../connections";
import { CreatingTurma, SearchingTurmaAtivaDB } from "../data";
import { MODULO } from "../types";



//  Criando Turma 
export const creatingTurma = async (req: Request, res: Response) => {
      try {
            const nome: string = req.body.nome
            const id = Math.random().toString()
            const CreatingTurmaDB = new CreatingTurma()
            const turma = new TurmaClasse(id, nome)
            console.log(turma)
            const result = await CreatingTurmaDB.creatingTurma(turma)
            res.status(201).send("Criado")
      } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
      }
}


