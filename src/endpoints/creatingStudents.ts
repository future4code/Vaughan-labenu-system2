import { Request, Response } from "express";
import { Estudante, EstudanteSemHobby } from "../classes";
import { CreatingStundetDB, FindHobbybyNameDB, InserirEstudantesHobbyDB, InsertHobbiesDB, ReadingHobbiesDB } from "../data";


// "nome", "email", "dataNasc", "turmaID" ,"hobbys" = []


export const creatingStudents = async (req: Request, res: Response): Promise<void> => {
    try {
      

        //Pegando todos Hobbies na tabela no DB. 
        const selectHobbys = new ReadingHobbiesDB()
        const hobbiesAll = await selectHobbys.readingHobbiesMeth()


        const { nome, email, dataNasc, turmaId: turma_id, hobbys }:
            { nome: string, email: string, dataNasc: string, turmaId: string, hobbys: string[] } 
                = req.body

        const idEstudante = Math.random().toString();
        const data_nasc = dataNasc.split("/").reverse().join("-")
        
        // Pegando todos os hobbies e deixando so os nomes para comparacao se existe ou não/
        const mappedTest = hobbiesAll.map((item) => { return item.nome.trim().toLowerCase() })
        
        //  Retornando so os Hobbies que não estou presentes na tabela para adição 
        const mappedHobbies = hobbys.filter(item => {
            if (mappedTest.indexOf(item) === -1) { return true }
            else return false
        }).map(item  => item.toLowerCase().trim())

        // formatando o hobby em objeto -  adicionando id 
        // 
        const hobbyNo = mappedHobbies.map(item => { return { id: Math.random(), nome: item } })
        const estudanteSemHobby =
            new EstudanteSemHobby(idEstudante, nome, email, data_nasc, turma_id)

        // console.log("Creating students", estudanteSemHobby)
        const InserirHobbieDB = new InsertHobbiesDB()
        if (hobbyNo.length > 0) {
            //!tirar comentario 
            InserirHobbieDB.insertHobbiesDB(hobbyNo)   
        }

        // Criando Estudantes e colocando no Banco de dados. 
        // Posso ver se o email ja existe no cadastro e fazer esta  validação.

        const CreatingStudentsDB = new CreatingStundetDB()
        //!tirar comentario 
        CreatingStudentsDB.creatingStundentMeth(estudanteSemHobby)
        res.status(201).send("Criado")
         

        // pegando todos os hobbies no banco depois de novos adicionados 
        const hobbiesAllAfter = await selectHobbys.readingHobbiesMeth()

        const FindHobby = new FindHobbybyNameDB();
        let arrayhobby : {id : string }[] = []  
        let hobbiesIdOBj = {}
        for (let i = 0; i < hobbys.length  ; i++ ) {
         let hobbiesId = await FindHobby.findHobbybyNameDB(hobbys[i])
         arrayhobby.push(...hobbiesId) 
        }
        const resultArray: any[] = Object.values(JSON.parse(JSON.stringify(arrayhobby)))
                            
        
        const estudanteHobbiesArray = resultArray.map(item => {
                              return  {id: Math.random() ,  hobby_id: item.id , estudante_id :idEstudante}
                            })
         

        // Criando EStudantes_Hobbys tabela de interface por ser M:N  vamos quebrar 
        // em duas 1 : N. 
        // pegamos os hobbies entrados que tem que vir como array e faremos um .map para replicar o mesmo 
        // id de usuario para todos os hobbies pertecentes a ele. 

        //  const estudanteHobbies = hobbys.map(item => {return { 
        //      id: Math.random() ,  estudante_id : idEstudante , hobby_id : hobbyId 
        //  }})
              //!tirar comentario 
        const InserirEstudantesHobbiesDB = new InserirEstudantesHobbyDB();
          InserirEstudantesHobbiesDB.InserirEstudantesHobbyDB(estudanteHobbiesArray)
        // Ou temos que mandar arrays de objetos ou vamos ter que fazer um .map para popular a tabela.
        
        // InserirEstudantesHobbiesDB.InserirEstudantesHobbyDB(estudanteHobbies)



    } catch (error: any) {
        res.status(400).send(error.sqlMessage | error.message)
    }
}



