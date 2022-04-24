import app from "./app"
import { changeModule } from "./endpoints/changingModule"
import { creatingEstHobby } from "./endpoints/creatingEstHobby"
import { creatingStudents } from "./endpoints/creatingStudents"
import { creatingTeacher } from "./endpoints/creatingTeacher"
import { creatingTurma} from "./endpoints/creatingTurma"
import { searchingStudentByName } from "./endpoints/searchingStudentByName"
import { SearchingTurmaAtiva, SearchingTurmaInativas } from "./endpoints/searchingTurmas"
import { SearchingDocenteByName } from "./endpoints/searchinTeacher"




app.post("/estudante" , creatingStudents)

app.get("/estudante" , searchingStudentByName)

app.post("/turmas" , creatingTurma)

app.get("/turmas/validas" ,  SearchingTurmaAtiva) 

app.get("/turmas/invalidas" ,  SearchingTurmaInativas) 


app.put("/turmas" ,  changeModule) 
 

app.get("/docente", SearchingDocenteByName)

app.post("/docente", creatingTeacher)

// Nao devia existir somente para teste
app.post("/estudanteHobby", creatingEstHobby)