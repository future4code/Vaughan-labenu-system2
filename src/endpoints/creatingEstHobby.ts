import { Response , Request } from "express";
import { CreatingEstudanteHobbyDB, InserirEstudantesHobbyDB } from "../data";


export const creatingEstHobby = async (req : Request, res: Response): Promise<void> => { 
    try{ const {estudanteId : estudante_id , hobbyId: hobby_id  } : 
        {estudanteId : string , hobbyId: string } = req.body;
    
    const id = Math.random().toString();

    const estudanteHobby = {id , estudante_id , hobby_id }
    const CreatingEstudanteHobby = new InserirEstudantesHobbyDB();
        console.log(id , estudante_id , hobby_id )
        await CreatingEstudanteHobby
            // .InserirEstudantesHobbyDB(estudanteHobby)
    }  catch(error: any){ 
            res.status(400).send( error.sqlMessage || error.message)
    }
}

