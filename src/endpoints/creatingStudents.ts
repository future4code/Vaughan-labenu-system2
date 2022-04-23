import { Request , Response } from "express";
import { Estudante, EstudanteSemHobby } from "../classes";
import { CreatingStundetDB, InsertHobbiesDB, ReadingHobbiesDB } from "../data";


// "nome", "email", "dataNasc", "turmaID" ,"hobbys" = []


export const creatingStudents = async (req: Request , res :Response): Promise<void> => {
    try {
        
        const selectHobbys = new ReadingHobbiesDB()
        const test = await selectHobbys.readingHobbiesMeth()

        // const diversao = ["patins" , "ler", "trem" , "olhar"]

        
        const {nome, email, dataNasc, turmaId:turma_id ,hobbys }: 
        { nome:string, email:string, dataNasc : string, turmaId:string ,hobbys :string[] } = req.body
        const id = Math.random().toString();
        const data_nasc  = dataNasc.split("/").reverse().join("-") 

        
        // const mappedTest = test.map((item) => {return item.nome.trim().toLowerCase()})
        //         .filter((hobby) =>  hobbys.find((item) => item === hobby ))

                // console.log(mappedTest)

        const mappedTest = test.map((item) => {return item.nome.trim().toLowerCase()})
                        
        const mappedHobbies = hobbys.filter(item => {if (mappedTest.indexOf(item) === -1 ){ return true }
        else return false  }) 
                                
        
        const hobbyNo = mappedHobbies.map(item => {return {id:Math.random() , nome: item }})
       

        const estudanteSemHobby = 
            new EstudanteSemHobby(id, nome, email, data_nasc, turma_id )
            
            console.log("Creating students", estudanteSemHobby)
            const InserirHobbieDB = new InsertHobbiesDB()
            InserirHobbieDB.insertHobbiesDB(hobbyNo)

        const CreatingStudentsDB = new CreatingStundetDB()
        CreatingStudentsDB.creatingStundentMeth(estudanteSemHobby)
        res.status(201).end()
    } catch (error: any) {
        res.status(400).send(error.sqlMessage | error.message)     
    }
}



  