import app from "./app"
import { Docente1, Estudante1  } from "./classes"
import { creatingStudent } from "./endpoints/creatingStudent"



app.post("/students", creatingStudent)



    // console.log(Docente1)  


    // console.log(Estudante1.turma_id = "1" )  
    // console.log(Estudante1 )  