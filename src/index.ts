import app from "./app"
import { GetAllDocentesDB } from "./data"
import { changeModule } from "./endpoints/changingModule"
import { creatingEstHobby } from "./endpoints/creatingEstHobby"
import { creatingStudents } from "./endpoints/creatingStudents"
import { creatingTeacher } from "./endpoints/creatingTeacher"
import { creatingTurma} from "./endpoints/creatingTurma"
import { getSudentAge } from "./endpoints/getStudentAgebyId"
import { GetAllDocentes } from "./endpoints/gettingAllTeachers"
import { searchingStudentByName } from "./endpoints/searchingStudentByName"
import { SearchingTurmaAtiva, SearchingTurmaInativas } from "./endpoints/searchingTurmas"
import { SearchingDocenteByName } from "./endpoints/searchinTeacher"




app.post("/estudante" , creatingStudents)

app.get("/estudante" , searchingStudentByName)

app.post("/turmas" , creatingTurma)

app.get("/turmas/validas" ,  SearchingTurmaAtiva) 

app.get("/turmas/invalidas" ,  SearchingTurmaInativas) 


app.put("/turmas" ,  changeModule) 
 


app.get("/docente", GetAllDocentes)

app.get("/docente/nome", SearchingDocenteByName)

app.post("/docente", creatingTeacher)

app.get("/id/estudante", getSudentAge)

// Nao devia existir somente para teste
app.post("/estudanteHobby", creatingEstHobby)