import app from "./app"
import { Docente1, Estudante1  } from "./classes"
import {  creatingStudents, creatingTurma } from "./endpoints/creating"



app.get("/students", creatingStudents  )



    // console.log(Docente1)  


    // console.log(Estudante1.turma_id = "1" )  
    // console.log(Estudante1.setHobbys(["correr"]))  
    // console.log(Estudante1)  


app.post("/turmas" , creatingTurma)

 