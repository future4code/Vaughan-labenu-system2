import { Request , Response } from "express";
import { Estudante, EstudanteSemHobby } from "../classes";
import { CreatingStundetDB, ReadingHobbiesDB } from "../data";


// "nome", "email", "dataNasc", "turmaID" ,"hobbys" = []


export const creatingStudents = async (req: Request , res :Response): Promise<void> => {
    try {
        
        const selectHobbys = new ReadingHobbiesDB()
        const test = await selectHobbys.readingHobbiesMeth()

        const diversao = ["patins"]

        const mappedTest = test.map((item) => {return item.nome.trim().toLowerCase()})

        const x = mappedTest.filter((hobby) => {
           diversao.forEach((item) => { console.log("hobby:", hobby, "item:", item)
                if (hobby === item) { console.log("hobby dentro do if:", hobby, "item:", item)
                    return true
                } else {
                    return false
                }
            }) 
        })

        console.log(mappedTest)
        console.log("Esse é o x:", x)

         const {nome, email, dataNasc, turmaId:turma_id ,hobbys }: 
            { nome:string, email:string, dataNasc : string, turmaId:string ,hobbys :string[] } = req.body
         const id = Math.random().toString();
         const data_nasc  = dataNasc.split("/").reverse().join("-") 


        // const estudante  = 
        //    new Estudante(id, nome, email, data_nasc, turma_id ,hobbys )
        const estudanteSemHobby = 
            new EstudanteSemHobby(id, nome, email, data_nasc, turma_id )
            
            console.log("Creating students", estudanteSemHobby)

        const CreatingStudentsDB = new CreatingStundetDB()
        //CreatingStudentsDB.creatingStundentMeth(estudanteSemHobby)
        res.status(201).send(estudanteSemHobby)
    } catch (error: any) {

        res.status(400).send(error.sqlMessage | error.message)     
    }
}



  