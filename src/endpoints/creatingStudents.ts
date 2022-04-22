import { Request, Response } from "express";
import { Estudante, EstudanteSemHobby } from "../classes";
import { CreatingStundetDB, InsertHobbiesDB, ReadingHobbiesDB } from "../data";


// "nome", "email", "dataNasc", "turmaID" ,"hobbys" = []


export const creatingStudents = async (req: Request, res: Response): Promise<void> => {
    try {

        const selectHobbys = new ReadingHobbiesDB()
        const hobbyValuesDB = await selectHobbys.readingHobbiesMeth()

        const diversao = ["patins", "ler", "trem"]




        const id = Math.random().toString();
        const { nome, email, dataNasc, turmaId: turma_id, hobbys }:
            { nome: string, email: string, dataNasc: string, turmaId: string, hobbys: string[] } = req.body
        const mapHobbys = hobbyValuesDB.map((item) => { return item.nome.trim().toLowerCase() })
            .filter((hobby) => hobbys.find((item) => item === hobby))
            
            // .map((hobby) =>{  return { id:Math.random(), nome:hobby} })
        
        const data_nasc = dataNasc.split("/").reverse().join("-")
        console.log('mapHobbys', mapHobbys)


        // const estudante  = 
        //    new Estudante(id, nome, email, data_nasc, turma_id ,hobbys )
        const estudanteSemHobby =
            new EstudanteSemHobby(id, nome, email, data_nasc, turma_id)

        console.log("Creating students", estudanteSemHobby)

        const CreatingStudentsDB = new CreatingStundetDB()
        const InsertHobbies = new InsertHobbiesDB()
        // InsertHobbies.insertHobbiesMeth(mapHobbys)
        // CreatingStudentsDB.creatingStundentMeth(estudanteSemHobby)
        // res.status(201).send(estudanteSemHobby)
    } catch (error: any) {

        res.status(400).send(error.sqlMessage | error.message)
    }
}



