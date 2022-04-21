import {Request , Response } from "express";
import { TurmaClasse } from "../classes";
import { ChangeClassModuloDb } from "../data";
import { MODULO } from "../types";




export const changeModule = async ( req: Request, res : Response) => { 
    try { const { turmaId , nome  ,modulo }:
            {nome:string  , turmaId : string , modulo : MODULO }  = req.body; 
            console.log (turmaId , nome  ,modulo )
        const turma = new TurmaClasse(turmaId , nome )
        turma.setModulo(modulo)
        console.log(turma)
        const changeModulodoDB = new ChangeClassModuloDb();
        const result = await changeModulodoDB.changeClassModuleDB(turma.getId() , turma.getModulo() )

        res.status(201).send("Modulo trocado")
        
    } catch (error: any) {
        
    }
}


