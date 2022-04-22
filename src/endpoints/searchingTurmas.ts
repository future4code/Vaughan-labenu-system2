import {Request , Response } from "express";
import { SearchingTurmaAInvalidasDB, SearchingTurmaAtivaDB } from "../data";



// Turma que ja iniciaram e sao validas 
export const SearchingTurmaAtiva = async ( req: Request, res : Response) => { 
    try { const SearchTurma = new SearchingTurmaAtivaDB()
          const result = await SearchTurma.SearchingTurmaAtivaDBMeth()
          res.status(202).send(result)
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message)
    }
}


// Turmas "invalidas" onde modulo  = 0. 
export const SearchingTurmaInativas = async ( req: Request, res : Response) => { 
    try { const SearchTurma = new SearchingTurmaAInvalidasDB()
          const result = await SearchTurma.SearchingTurmaAInvalidasDB()
          res.status(201).send(result)
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message)
    }
}



