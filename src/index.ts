import app from "./app"
import { Docente1, Estudante1  } from "./classes"
import {  creatingStudents, creatingTurma } from "./endpoints/creating"



app.get("/students", creatingStudents  )




app.post("/turmas" , creatingTurma)

 